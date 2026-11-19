#!/usr/bin/env python3
# SPDX-License-Identifier: AGPL-3.0-or-later
"""DistroAtlas server: static SPA + SQLite submission queue + Ed25519 admin auth.

Run:
    python3 server.py --port 8000

Admin:
    http://127.0.0.1:8000/admin

The admin signs a short-lived challenge with the SSH Ed25519 private key whose
public half is ed25519.pub. No password is stored or sent.
"""
from __future__ import annotations

import argparse
import base64
import hashlib
import json
import mimetypes
import os
import re
import secrets
import sqlite3
import subprocess
import tempfile
import threading
import time
from datetime import date
from http.cookies import SimpleCookie
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlsplit

ROOT = Path(__file__).resolve().parent
DB_PATH = Path(os.environ.get("DISTROATLAS_DB", ROOT / "distroatlas.db"))
PUBKEY_PATH = Path(os.environ.get("DISTROATLAS_PUBKEY", ROOT / "ed25519.pub"))
STATIC_IDS_PATH = ROOT / "static_ids.json"
STATIC_IDS = set(json.loads(STATIC_IDS_PATH.read_text(encoding="utf-8")))
FAMILIES = ["arch", "rh", "debian", "ubuntu", "other"]
LANGS = ["zh-CN", "zh-TW", "en", "fi"]
NAMESPACE = "distroatlas"
SESSION_SECONDS = 12 * 3600
CHALLENGE_SECONDS = 5 * 60
MAX_BODY = 64 * 1024
SECURE_COOKIE = os.environ.get("DISTROATLAS_SECURE_COOKIE", "0") == "1"
COOKIE_SUFFIX = "; Secure" if SECURE_COOKIE else ""
PUBLIC_KEY_LINE = PUBKEY_PATH.read_text(encoding="utf-8").strip().splitlines()[0].strip() if PUBKEY_PATH.exists() else ""
if not PUBLIC_KEY_LINE:
    raise SystemExit("ed25519.pub is empty")
if not PUBLIC_KEY_LINE.startswith("ssh-ed25519 "):
    raise SystemExit("ed25519.pub must contain an ssh-ed25519 public key")

RATE_LOCK = threading.Lock()
RATE: dict[tuple[str, str], list[float]] = {}


def db() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH, timeout=15)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    conn.execute("PRAGMA journal_mode = WAL")
    return conn


def init_db() -> None:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    with db() as conn:
        conn.executescript(
            """
            CREATE TABLE IF NOT EXISTS submissions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                status TEXT NOT NULL DEFAULT 'pending',
                payload TEXT NOT NULL,
                submitter_name TEXT NOT NULL DEFAULT '',
                contact TEXT NOT NULL DEFAULT '',
                note TEXT NOT NULL DEFAULT '',
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL,
                reviewed_at TEXT,
                review_note TEXT NOT NULL DEFAULT ''
            );
            CREATE INDEX IF NOT EXISTS idx_submissions_status ON submissions(status, id DESC);
            CREATE TABLE IF NOT EXISTS approved_distros (
                id TEXT PRIMARY KEY,
                payload TEXT NOT NULL,
                submission_id INTEGER,
                approved_at TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS entry_overrides (
                id TEXT NOT NULL,
                lang TEXT NOT NULL,
                payload TEXT NOT NULL,
                updated_at TEXT NOT NULL,
                updated_by TEXT NOT NULL DEFAULT '',
                PRIMARY KEY (id, lang)
            );
            CREATE INDEX IF NOT EXISTS idx_overrides_lang ON entry_overrides(lang, id);
            CREATE TABLE IF NOT EXISTS auth_challenges (
                id TEXT PRIMARY KEY,
                challenge TEXT NOT NULL,
                created_at REAL NOT NULL,
                expires_at REAL NOT NULL,
                used INTEGER NOT NULL DEFAULT 0
            );
            CREATE TABLE IF NOT EXISTS admin_sessions (
                token_hash TEXT PRIMARY KEY,
                csrf TEXT NOT NULL,
                created_at REAL NOT NULL,
                expires_at REAL NOT NULL,
                ip TEXT NOT NULL DEFAULT ''
            );
            """
        )


def now_iso() -> str:
    return time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())


def clean(value, max_len=5000) -> str:
    if not isinstance(value, str):
        return ""
    value = value.replace("\x00", "").strip()
    return value[:max_len]


def clean_lines(value, max_items=10, max_len=300) -> list[str]:
    if isinstance(value, str):
        value = value.splitlines()
    if not isinstance(value, list):
        return []
    out = []
    for item in value:
        text = clean(item, max_len)
        if text:
            out.append(text)
        if len(out) >= max_items:
            break
    return out


def safe_url(value) -> str:
    value = clean(value, 500)
    if not value:
        return ""
    if not re.match(r"^https?://", value, re.I):
        raise ValueError("Only http(s) links are allowed")
    return value


def slugify(value) -> str:
    value = clean(value, 90).lower()
    value = re.sub(r"[^a-z0-9]+", "-", value).strip("-")
    return value[:80] or "submitted-distro"


def checked_lang(value: str | None) -> str:
    return value if value in LANGS else "zh-CN"


def static_snapshot(lang: str) -> list[dict]:
    path = ROOT / f"static_data.{lang}.json"
    if not path.exists():
        path = ROOT / "static_data.zh-CN.json"
    return json.loads(path.read_text(encoding="utf-8"))


def url_or_empty(value) -> str:
    try:
        return safe_url(value)
    except ValueError:
        return ""


def normalize_admin_distro(payload: dict, base: dict) -> dict:
    if not isinstance(payload, dict):
        raise ValueError("Invalid payload")
    result = dict(base)
    text_fields = {
        "name": 90, "name_zh": 90, "intro": 9000, "status_note": 500,
        "target_user": 500, "release_cycle": 500, "upstream": 180,
        "first_release": 20, "latest_version": 60, "latest_release_date": 30,
        "package_manager": 300, "update_command": 500, "gui_updater": 300,
        "init_system": 100, "maintainer": 160, "founder": 160, "org": 160,
        "license": 160, "commercial_edition": 300, "data_as_of": 20,
        "based_on_since": 20
    }
    for key, limit in text_fields.items():
        if key in payload:
            result[key] = clean(payload.get(key), limit)
    if not result.get("name"):
        raise ValueError("Distribution name is required")
    family = clean(payload.get("family", result.get("family")), 20)
    if family not in FAMILIES:
        raise ValueError("Unknown family")
    result["family"] = family
    if not result.get("upstream"):
        raise ValueError("Upstream is required")
    if len(str(result.get("intro") or "")) < 20:
        raise ValueError("Introduction must be at least 20 characters")
    for key in ("official_site", "docs", "download", "repo", "wiki", "forum", "chat", "reddit"):
        if key in payload:
            result[key] = url_or_empty(payload.get(key))
    for key in ("highlights", "pros", "cons"):
        if key in payload:
            result[key] = clean_lines(payload.get(key), 10, 400)
    if "tags" in payload:
        tags = payload.get("tags")
        if isinstance(tags, str):
            tags = re.split(r"[,，、]", tags)
        result["tags"] = [clean(t, 40) for t in (tags or []) if clean(t, 40)][:16]
    if "supported_arch" in payload:
        arches = payload.get("supported_arch")
        if isinstance(arches, str):
            arches = re.split(r"[,，、]", arches)
        result["supported_arch"] = [clean(a, 60) for a in (arches or []) if clean(a, 60)][:16]
    if "default_desktop" in payload:
        desks = payload.get("default_desktop")
        if isinstance(desks, str):
            desks = re.split(r"[,，、]", desks)
        result["default_desktop"] = [clean(d, 80) for d in (desks or []) if clean(d, 80)][:16]
    if "secondary_families" in payload:
        value = payload.get("secondary_families")
        if isinstance(value, str):
            value = re.split(r"[,，、]", value)
        result["secondary_families"] = [clean(v, 40) for v in (value or []) if clean(v, 40)][:12]
    if "similar" in payload:
        value = payload.get("similar")
        if isinstance(value, str):
            value = re.split(r"[,，、]", value)
        result["similar"] = [clean(v, 80) for v in (value or []) if clean(v, 80)][:16]
    status = clean(payload.get("status", result.get("status")), 20)
    if status not in {"active", "lts", "dormant", "eol"}:
        raise ValueError("Unknown status")
    result["status"] = status
    model = clean(payload.get("release_model", result.get("release_model")), 20)
    if model not in {"rolling", "fixed", "lts", "hybrid"}:
        raise ValueError("Unknown release model")
    result["release_model"] = model
    maint = clean(payload.get("maintainer_type", result.get("maintainer_type")), 20)
    if maint not in {"community", "foundation", "company", "individual"}:
        raise ValueError("Unknown maintainer type")
    result["maintainer_type"] = maint
    openness = clean(payload.get("openness", result.get("openness")), 20)
    if openness not in {"free", "firmware", "proprietary", "commercial"}:
        raise ValueError("Unknown openness")
    result["openness"] = openness
    if "verified" in payload:
        result["verified"] = bool(payload.get("verified"))
    if "ai_assisted" in payload:
        result["ai_assisted"] = bool(payload.get("ai_assisted"))
    if "popularity" in payload:
        try:
            result["popularity"] = max(1, min(5, int(payload.get("popularity"))))
        except Exception:
            pass
    result["id"] = base.get("id") or result.get("id")
    return result


def approved_payloads() -> list[dict]:
    with db() as conn:
        rows = conn.execute("SELECT payload FROM approved_distros ORDER BY approved_at ASC").fetchall()
    return [json.loads(row["payload"]) for row in rows]


def overrides_for(lang: str) -> dict[str, dict]:
    with db() as conn:
        rows = conn.execute("SELECT id, payload FROM entry_overrides WHERE lang=?", (lang,)).fetchall()
    return {row["id"]: json.loads(row["payload"]) for row in rows}


def admin_entries(lang: str) -> list[dict]:
    static_items = static_snapshot(lang)
    base = {item["id"]: item for item in static_items}
    static_ids = set(base)
    approved = {item["id"]: item for item in approved_payloads()}
    for key, item in approved.items():
        if key not in base:
            base[key] = item
    overrides = overrides_for(lang)
    out = []
    for key, item in base.items():
        out.append({
            "payload": overrides.get(key, item),
            "source": "approved" if key not in static_ids else "static",
            "overridden": key in overrides,
        })
    return sorted(out, key=lambda x: x["payload"].get("name", "").lower())


def normalize_distro(payload: dict, existing_id: str | None = None) -> dict:
    if not isinstance(payload, dict):
        raise ValueError("Invalid payload")
    name = clean(payload.get("name"), 90)
    if not name:
        raise ValueError("Distribution name is required")
    family = clean(payload.get("family"), 20)
    if family not in FAMILIES:
        raise ValueError("Unknown family")
    upstream = clean(payload.get("upstream"), 180)
    if not upstream:
        raise ValueError("Upstream is required")
    intro = clean(payload.get("intro"), 9000)
    if len(intro) < 20:
        raise ValueError("Introduction must be at least 20 characters")
    distro_id = slugify(payload.get("id") or name)
    if distro_id in STATIC_IDS and distro_id != existing_id:
        raise ValueError("A built-in distribution already uses this id")
    if existing_id and distro_id != existing_id:
        raise ValueError("The id cannot be changed after approval")
    name_zh = clean(payload.get("name_zh"), 90) or name
    tags = [clean(t, 40) for t in (payload.get("tags") or []) if clean(t, 40)][:12] if isinstance(payload.get("tags"), list) else []
    if not tags and isinstance(payload.get("tags"), str):
        tags = [clean(t, 40) for t in re.split(r"[,，、]", payload["tags"]) if clean(t, 40)][:12]
    target_user = clean(payload.get("target_user"), 500) or "Unverified / community submission"
    release_cycle = clean(payload.get("release_cycle"), 500) or "Unverified / community submission"
    status_note = clean(payload.get("status_note"), 500) or "Community submission; unverified"
    return {
        "id": distro_id,
        "name": name,
        "name_zh": name_zh,
        "family": family,
        "secondary_families": [],
        "upstream": upstream,
        "based_on_since": clean(payload.get("based_on_since"), 20) or None,
        "first_release": clean(payload.get("first_release"), 20) or "待核实",
        "latest_version": clean(payload.get("latest_version"), 60) or "待核实",
        "latest_release_date": None,
        "release_model": "fixed",
        "release_cycle": release_cycle,
        "package_manager": clean(payload.get("package_manager"), 200) or "待核实",
        "update_command": clean(payload.get("update_command"), 300) or "",
        "gui_updater": "待核实",
        "init_system": "待核实",
        "default_desktop": [],
        "supported_arch": [],
        "status": "active",
        "status_note": status_note,
        "maintainer_type": "community",
        "maintainer": clean(payload.get("maintainer"), 160) or "Community",
        "founder": None,
        "founded_year": None,
        "org": clean(payload.get("org"), 160) or "Community",
        "license": clean(payload.get("license"), 120) or "Unverified",
        "openness": "firmware",
        "commercial_edition": None,
        "official_site": safe_url(payload.get("official_site")),
        "docs": "",
        "download": "",
        "repo": safe_url(payload.get("repo")),
        "wiki": "",
        "forum": "",
        "chat": "",
        "reddit": "",
        "intro": intro,
        "highlights": clean_lines(payload.get("highlights"), 8, 300),
        "pros": clean_lines(payload.get("pros"), 8, 300),
        "cons": clean_lines(payload.get("cons"), 8, 300),
        "similar": [],
        "target_user": target_user,
        "tags": tags,
        "popularity": 3,
        "data_as_of": date.today().isoformat(),
        "verified": False,
        "ai_assisted": bool(payload.get("ai_assisted")),
        "source": "community-submission",
    }


def rate_ok(ip: str, bucket: str, limit: int, window: int) -> bool:
    now = time.time()
    key = (ip, bucket)
    with RATE_LOCK:
        values = [t for t in RATE.get(key, []) if now - t < window]
        if len(values) >= limit:
            RATE[key] = values
            return False
        values.append(now)
        RATE[key] = values
        return True


def fingerprint() -> str:
    try:
        out = subprocess.check_output(["ssh-keygen", "-lf", str(PUBKEY_PATH)], text=True, stderr=subprocess.DEVNULL, timeout=5)
        return out.split()[1] if len(out.split()) > 1 else "ED25519"
    except Exception:
        return "ED25519"


def verify_signature(challenge: str, signature: str) -> tuple[bool, str]:
    if len(signature) < 40 or len(signature) > 20000:
        return False, "Invalid signature"
    if not signature.lstrip().startswith("-----BEGIN SSH SIGNATURE-----"):
        return False, "Paste the full .sig file generated by ssh-keygen"
    with tempfile.TemporaryDirectory(prefix="distroatlas-auth-") as tmp:
        temp = Path(tmp)
        allowed = temp / "allowed_signers"
        sig = temp / "challenge.sig"
        allowed.write_text(f"admin {PUBLIC_KEY_LINE}\n", encoding="utf-8")
        sig.write_text(signature, encoding="utf-8")
        try:
            result = subprocess.run(
                ["ssh-keygen", "-Y", "verify", "-f", str(allowed), "-I", "admin", "-n", NAMESPACE, "-s", str(sig)],
                input=challenge.encode("utf-8"),
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                timeout=15,
            )
        except Exception as exc:
            return False, f"Signature verifier failed: {exc}"
        if result.returncode == 0:
            return True, ""
        detail = result.stderr.decode("utf-8", "replace").strip()
        return False, detail or "Signature did not verify"


class Handler(BaseHTTPRequestHandler):
    server_version = "DistroAtlas/1.0"

    def log_message(self, fmt, *args):
        print(f"{self.address_string()} - {fmt % args}")

    # ---------- low-level helpers ----------
    def send_json(self, status: int, payload: dict, extra_headers: list[tuple[str, str]] | None = None) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "no-referrer")
        for key, value in extra_headers or []:
            self.send_header(key, value)
        self.end_headers()
        self.wfile.write(body)

    def error(self, status: int, message: str) -> None:
        self.send_json(status, {"error": message})

    def body_json(self) -> dict:
        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            raise ValueError("Invalid Content-Length")
        if length <= 0:
            return {}
        if length > MAX_BODY:
            raise ValueError("Request body is too large")
        raw = self.rfile.read(length)
        try:
            value = json.loads(raw.decode("utf-8"))
        except Exception:
            raise ValueError("Invalid JSON")
        if not isinstance(value, dict):
            raise ValueError("JSON object expected")
        return value

    def client_ip(self) -> str:
        return self.client_address[0]

    def cookies(self) -> SimpleCookie:
        cookie = SimpleCookie()
        try:
            cookie.load(self.headers.get("Cookie", ""))
        except Exception:
            pass
        return cookie

    # ---------- auth ----------
    def session(self) -> sqlite3.Row | None:
        cookie = self.cookies()
        morsel = cookie.get("distroatlas_admin")
        if not morsel:
            return None
        token_hash = hashlib.sha256(morsel.value.encode("utf-8")).hexdigest()
        with db() as conn:
            row = conn.execute(
                "SELECT * FROM admin_sessions WHERE token_hash=? AND expires_at>?",
                (token_hash, time.time()),
            ).fetchone()
        return row

    def require_session(self) -> sqlite3.Row | None:
        row = self.session()
        if row is None:
            self.error(401, "Admin login required")
            return None
        return row

    def require_csrf(self, row: sqlite3.Row) -> bool:
        supplied = self.headers.get("X-CSRF-Token", "")
        if not supplied or not secrets.compare_digest(str(row["csrf"]), supplied):
            self.error(403, "Invalid CSRF token")
            return False
        return True

    # ---------- HTTP ----------
    def do_GET(self):
        path = urlsplit(self.path).path
        try:
            if path == "/api/health":
                self.send_json(200, {"ok": True})
                return
            if path == "/api/auth/config":
                self.send_json(200, {
                    "namespace": NAMESPACE,
                    "fingerprint": fingerprint(),
                    "public_key": PUBLIC_KEY_LINE,
                })
                return
            if path == "/api/distros":
                lang = checked_lang(parse_qs(urlsplit(self.path).query).get("lang", ["zh-CN"])[0])
                self.send_json(200, {
                    "approved": approved_payloads(),
                    "overrides": overrides_for(lang),
                })
                return
            if path == "/api/admin/me":
                row = self.require_session()
                if row is None:
                    return
                self.send_json(200, {"ok": True, "csrf": row["csrf"], "fingerprint": fingerprint()})
                return
            if path == "/api/admin/meta":
                row = self.require_session()
                if row is None:
                    return
                self.send_json(200, {
                    "families": FAMILIES,
                    "static_ids": sorted(STATIC_IDS),
                    "fingerprint": fingerprint(),
                })
                return
            if path == "/api/admin/stats":
                row = self.require_session()
                if row is None:
                    return
                with db() as conn:
                    counts = {r["status"]: r["n"] for r in conn.execute(
                        "SELECT status, COUNT(*) AS n FROM submissions GROUP BY status"
                    ).fetchall()}
                    approved = conn.execute("SELECT COUNT(*) AS n FROM approved_distros").fetchone()["n"]
                self.send_json(200, {
                    "pending": counts.get("pending", 0),
                    "approved": counts.get("approved", 0),
                    "rejected": counts.get("rejected", 0),
                    "published": approved,
                })
                return
            if path == "/api/admin/distros":
                row = self.require_session()
                if row is None:
                    return
                query = parse_qs(urlsplit(self.path).query)
                lang = checked_lang(query.get("lang", ["zh-CN"])[0])
                q = clean(query.get("q", [""])[0], 120).lower()
                items = admin_entries(lang)
                if q:
                    items = [item for item in items if q in " ".join(str(item["payload"].get(k, "")) for k in ("id", "name", "name_zh", "upstream")).lower()]
                self.send_json(200, {"items": items, "lang": lang})
                return
            if path == "/api/admin/submissions":
                row = self.require_session()
                if row is None:
                    return
                status = parse_qs(urlsplit(self.path).query).get("status", ["pending"])[0]
                if status not in {"pending", "approved", "rejected", "all"}:
                    status = "pending"
                with db() as conn:
                    if status == "all":
                        rows = conn.execute("SELECT * FROM submissions ORDER BY id DESC LIMIT 300").fetchall()
                    else:
                        rows = conn.execute("SELECT * FROM submissions WHERE status=? ORDER BY id DESC LIMIT 300", (status,)).fetchall()
                items = []
                for r in rows:
                    items.append({
                        "id": r["id"],
                        "status": r["status"],
                        "payload": json.loads(r["payload"]),
                        "submitter_name": r["submitter_name"],
                        "contact": r["contact"],
                        "note": r["note"],
                        "created_at": r["created_at"],
                        "reviewed_at": r["reviewed_at"],
                        "review_note": r["review_note"],
                    })
                self.send_json(200, {"items": items})
                return
            self.serve_static(path)
        except Exception as exc:
            self.error(500, str(exc))

    def do_POST(self):
        path = urlsplit(self.path).path
        try:
            if path == "/api/auth/challenge":
                if not rate_ok(self.client_ip(), "challenge", 15, 300):
                    self.error(429, "Too many login attempts; wait a few minutes")
                    return
                cid = secrets.token_urlsafe(16)
                challenge = secrets.token_urlsafe(40)
                now = time.time()
                with db() as conn:
                    conn.execute(
                        "INSERT INTO auth_challenges (id, challenge, created_at, expires_at, used) VALUES (?,?,?,?,0)",
                        (cid, challenge, now, now + CHALLENGE_SECONDS),
                    )
                    conn.execute("DELETE FROM auth_challenges WHERE expires_at < ?", (now - 3600,))
                self.send_json(200, {
                    "challenge_id": cid,
                    "challenge": challenge,
                    "namespace": NAMESPACE,
                    "expires_in": CHALLENGE_SECONDS,
                    "fingerprint": fingerprint(),
                })
                return
            if path == "/api/auth/verify":
                if not rate_ok(self.client_ip(), "verify", 12, 300):
                    self.error(429, "Too many verification attempts")
                    return
                body = self.body_json()
                cid = clean(body.get("challenge_id"), 80)
                signature = body.get("signature")
                if not cid or not isinstance(signature, str):
                    self.error(400, "challenge_id and signature are required")
                    return
                now = time.time()
                with db() as conn:
                    row = conn.execute(
                        "SELECT * FROM auth_challenges WHERE id=? AND used=0 AND expires_at>?",
                        (cid, now),
                    ).fetchone()
                    if row is None:
                        self.error(400, "Challenge expired or already used")
                        return
                    conn.execute("UPDATE auth_challenges SET used=1 WHERE id=?", (cid,))
                ok, detail = verify_signature(row["challenge"], signature)
                if not ok:
                    self.error(401, detail)
                    return
                token = secrets.token_urlsafe(32)
                token_hash = hashlib.sha256(token.encode("utf-8")).hexdigest()
                csrf = secrets.token_urlsafe(24)
                with db() as conn:
                    conn.execute(
                        "INSERT INTO admin_sessions (token_hash, csrf, created_at, expires_at, ip) VALUES (?,?,?,?,?)",
                        (token_hash, csrf, now, now + SESSION_SECONDS, self.client_ip()),
                    )
                    conn.execute("DELETE FROM admin_sessions WHERE expires_at < ?", (now - 86400,))
                self.send_json(200, {
                    "ok": True,
                    "csrf": csrf,
                    "fingerprint": fingerprint(),
                    "expires_in": SESSION_SECONDS,
                }, [
                    ("Set-Cookie", f"distroatlas_admin={token}; Path=/; HttpOnly; SameSite=Strict; Max-Age={SESSION_SECONDS}{COOKIE_SUFFIX}")
                ])
                return
            if path == "/api/admin/logout":
                row = self.require_session()
                if row is None:
                    return
                if not self.require_csrf(row):
                    return
                cookie = self.cookies()
                morsel = cookie.get("distroatlas_admin")
                if morsel:
                    token_hash = hashlib.sha256(morsel.value.encode("utf-8")).hexdigest()
                    with db() as conn:
                        conn.execute("DELETE FROM admin_sessions WHERE token_hash=?", (token_hash,))
                self.send_json(200, {"ok": True}, [("Set-Cookie", f"distroatlas_admin=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0{COOKIE_SUFFIX}")])
                return
            if path == "/api/submissions":
                if not rate_ok(self.client_ip(), "submit", 5, 3600):
                    self.error(429, "Too many submissions from this address; try later")
                    return
                body = self.body_json()
                if clean(body.get("website_url"), 200):
                    self.error(400, "Invalid submission")
                    return
                try:
                    normalized = normalize_distro(body)
                except ValueError as exc:
                    self.error(400, str(exc))
                    return
                with db() as conn:
                    if conn.execute("SELECT 1 FROM approved_distros WHERE id=?", (normalized["id"],)).fetchone():
                        self.error(409, "That id is already published")
                        return
                    cur = conn.execute(
                        "INSERT INTO submissions (status, payload, submitter_name, contact, note, created_at, updated_at) VALUES ('pending',?,?,?,?,?,?)",
                        (
                            json.dumps(normalized, ensure_ascii=False),
                            clean(body.get("submitter_name"), 120),
                            clean(body.get("contact"), 200),
                            clean(body.get("note"), 1000),
                            now_iso(),
                            now_iso(),
                        ),
                    )
                self.send_json(201, {"ok": True, "id": cur.lastrowid})
                return
            # admin edit existing entries
            edit_match = re.match(r"^/api/admin/distros/([^/]+)/(save|reset)$", path)
            if edit_match:
                row = self.require_session()
                if row is None:
                    return
                if not self.require_csrf(row):
                    return
                distro_id = unquote(edit_match.group(1))
                action = edit_match.group(2)
                query = parse_qs(urlsplit(self.path).query)
                lang = checked_lang(query.get("lang", ["zh-CN"])[0])
                if action == "reset":
                    with db() as conn:
                        conn.execute("DELETE FROM entry_overrides WHERE id=? AND lang=?", (distro_id, lang))
                    self.send_json(200, {"ok": True, "reset": True})
                    return
                body = self.body_json()
                payload = body.get("payload")
                if not isinstance(payload, dict):
                    self.error(400, "payload is required")
                    return
                static_map = {item["id"]: item for item in static_snapshot(lang)}
                approved_map = {item["id"]: item for item in approved_payloads()}
                current = overrides_for(lang).get(distro_id) or static_map.get(distro_id) or approved_map.get(distro_id)
                if not current:
                    self.error(404, "Entry not found")
                    return
                try:
                    normalized = normalize_admin_distro(payload, current)
                except ValueError as exc:
                    self.error(400, str(exc))
                    return
                with db() as conn:
                    conn.execute(
                        "INSERT INTO entry_overrides (id, lang, payload, updated_at, updated_by) VALUES (?,?,?,?,?) "
                        "ON CONFLICT(id, lang) DO UPDATE SET payload=excluded.payload, updated_at=excluded.updated_at, updated_by=excluded.updated_by",
                        (distro_id, lang, json.dumps(normalized, ensure_ascii=False), now_iso(), "admin"),
                    )
                self.send_json(200, {"ok": True, "payload": normalized})
                return
            # admin mutation endpoints
            match = re.match(r"^/api/admin/submissions/(\d+)/(approve|reject)$", path)
            if match:
                row = self.require_session()
                if row is None:
                    return
                if not self.require_csrf(row):
                    return
                sub_id = int(match.group(1))
                action = match.group(2)
                body = self.body_json()
                review_note = clean(body.get("review_note"), 1000)
                with db() as conn:
                    sub = conn.execute("SELECT * FROM submissions WHERE id=?", (sub_id,)).fetchone()
                    if sub is None:
                        self.error(404, "Submission not found")
                        return
                    if action == "reject":
                        conn.execute(
                            "UPDATE submissions SET status='rejected', updated_at=?, reviewed_at=?, review_note=? WHERE id=?",
                            (now_iso(), now_iso(), review_note, sub_id),
                        )
                        self.send_json(200, {"ok": True})
                        return
                    try:
                        payload = json.loads(sub["payload"])
                        if isinstance(body.get("payload"), dict):
                            payload.update(body["payload"])
                        normalized = normalize_distro(payload)
                    except (ValueError, json.JSONDecodeError) as exc:
                        self.error(400, str(exc))
                        return
                    existing = conn.execute("SELECT id FROM approved_distros WHERE id=?", (normalized["id"],)).fetchone()
                    if existing and existing["id"] != normalized["id"]:
                        self.error(409, "ID conflict")
                        return
                    conn.execute(
                        "INSERT INTO approved_distros (id, payload, submission_id, approved_at) VALUES (?,?,?,?) "
                        "ON CONFLICT(id) DO UPDATE SET payload=excluded.payload, submission_id=excluded.submission_id, approved_at=excluded.approved_at",
                        (normalized["id"], json.dumps(normalized, ensure_ascii=False), sub_id, now_iso()),
                    )
                    conn.execute(
                        "UPDATE submissions SET status='approved', updated_at=?, reviewed_at=?, review_note=? WHERE id=?",
                        (now_iso(), now_iso(), review_note, sub_id),
                    )
                self.send_json(200, {"ok": True, "id": normalized["id"]})
                return
            self.error(404, "Not found")
        except ValueError as exc:
            self.error(400, str(exc))
        except Exception as exc:
            self.error(500, str(exc))

    # ---------- static ----------
    def serve_static(self, path: str) -> None:
        if path in ("/admin", "/admin/"):
            file_path = ROOT / "admin.html"
        elif path in ("", "/"):
            file_path = ROOT / "index.html"
        else:
            relative = unquote(path).lstrip("/")
            candidate = (ROOT / relative).resolve()
            try:
                candidate.relative_to(ROOT)
            except ValueError:
                self.error(404, "Not found")
                return
            file_path = candidate
        if not file_path.is_file():
            self.error(404, "Not found")
            return
        if file_path.suffix.lower() not in {".html", ".css", ".js", ".json", ".svg", ".png", ".jpg", ".jpeg", ".webp", ".gif", ".ico", ".woff2", ".woff", ".ttf", ".txt", ".md"}:
            self.error(404, "Not found")
            return
        data = file_path.read_bytes()
        content_type = mimetypes.guess_type(str(file_path))[0] or "application/octet-stream"
        if file_path.suffix == ".js":
            content_type = "text/javascript; charset=utf-8"
        elif file_path.suffix in {".html", ".css", ".json", ".svg"}:
            content_type += "; charset=utf-8"
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "no-referrer")
        if file_path.name in {"index.html", "admin.html"}:
            self.send_header("Cache-Control", "no-store")
        else:
            self.send_header("Cache-Control", "public, max-age=300")
        self.end_headers()
        self.wfile.write(data)

    def do_HEAD(self):
        self.do_GET()


def main() -> None:
    parser = argparse.ArgumentParser(description="DistroAtlas server")
    parser.add_argument("--host", default="127.0.0.1", help="bind address (default: 127.0.0.1)")
    parser.add_argument("--port", type=int, default=8000, help="HTTP port (default: 8000)")
    args = parser.parse_args()
    init_db()
    print(f"DistroAtlas server: http://{args.host}:{args.port}/")
    print(f"Admin: http://{args.host}:{args.port}/admin")
    print(f"Database: {DB_PATH}")
    print(f"Admin key fingerprint: {fingerprint()}")
    ThreadingHTTPServer((args.host, args.port), Handler).serve_forever()


if __name__ == "__main__":
    main()
