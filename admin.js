/* SPDX-License-Identifier: AGPL-3.0-or-later */
(() => {
  "use strict";
  const $ = (sel) => document.querySelector(sel);
  const I18N = window.I18N || { lang: "zh-CN", LANGS: [], translate: (v) => v, apply() {}, setLanguage() {} };
  const t = (value) => I18N.translate(value);
  const state = { csrf: sessionStorage.getItem("distroatlasAdminCsrf") || "", status: "pending", challenge: null, busy: false, view: "submissions", entries: [], editId: null };
  let config = { fingerprint: "ED25519", namespace: "distroatlas" };
  const adminStatus = () => ({ pending: t("待审核"), approved: t("已通过"), rejected: t("已拒绝") });

  async function api(path, options = {}) {
    const headers = Object.assign({ "Accept": "application/json" }, options.headers || {});
    if (options.body !== undefined) headers["Content-Type"] = "application/json";
    if (state.csrf && options.method && options.method !== "GET") headers["X-CSRF-Token"] = state.csrf;
    const response = await fetch(path, Object.assign({ credentials: "same-origin", cache: "no-store" }, options, { headers }));
    let data = {};
    try { data = await response.json(); } catch (e) {}
    if (response.status === 401) {
      showLogin();
      throw new Error(data.error || "Login required");
    }
    if (!response.ok) throw new Error(data.error || `Request failed (${response.status})`);
    return data;
  }

  function showLogin(message = "") {
    sessionStorage.removeItem("distroatlasAdminCsrf");
    state.csrf = "";
    $("#dashboard").hidden = true;
    $("#loginView").hidden = false;
    $("#logoutBtn").hidden = true;
    $("#loginError").textContent = message;
  }

  function showDashboard() {
    $("#loginView").hidden = true;
    $("#dashboard").hidden = false;
    $("#logoutBtn").hidden = false;
    loadDashboard();
  }

  function setFingerprint(value) {
    config.fingerprint = value || "ED25519";
    $("#keyFingerprint").textContent = config.fingerprint;
    $("#loginFingerprint").textContent = config.fingerprint;
  }

  async function loadConfig() {
    try {
      const data = await api("/api/auth/config");
      config.namespace = data.namespace || "distroatlas";
      setFingerprint(data.fingerprint);
      $("#namespaceText").textContent = config.namespace;
    } catch (e) {
      $("#loginError").textContent = e.message;
    }
  }

  async function getChallenge() {
    $("#loginError").textContent = "";
    const btn = $("#challengeBtn");
    btn.disabled = true;
    try {
      const data = await api("/api/auth/challenge", { method: "POST", body: "{}" });
      state.challenge = data;
      setFingerprint(data.fingerprint);
      $("#challengePanel").hidden = false;
      $("#challengeText").textContent = data.challenge;
      $("#expiresText").textContent = `${data.expires_in}s`;
      const command = [
        `printf '%s' '${data.challenge}' > /tmp/distroatlas-challenge.txt`,
        `ssh-keygen -Y sign -n ${data.namespace} -f ~/.ssh/id_ed25519 /tmp/distroatlas-challenge.txt`,
        `cat /tmp/distroatlas-challenge.txt.sig`
      ].join("\n");
      $("#commandText").textContent = command;
      $("#signatureInput").value = "";
      $("#signatureInput").focus();
    } catch (e) {
      $("#loginError").textContent = e.message;
    } finally {
      btn.disabled = false;
    }
  }

  async function verify() {
    const signature = $("#signatureInput").value.trim();
    if (!state.challenge) { $("#loginError").textContent = t("先获取挑战"); return; }
    if (!signature) { $("#loginError").textContent = t("请粘贴 .sig 文件内容"); return; }
    const btn = $("#verifyBtn");
    btn.disabled = true;
    try {
      const data = await api("/api/auth/verify", {
        method: "POST",
        body: JSON.stringify({ challenge_id: state.challenge.challenge_id, signature })
      });
      state.csrf = data.csrf;
      sessionStorage.setItem("distroatlasAdminCsrf", state.csrf);
      showDashboard();
    } catch (e) {
      $("#loginError").textContent = e.message;
    } finally {
      btn.disabled = false;
    }
  }

  async function loadDashboard() {
    $("#dashError").textContent = "";
    try {
      const [stats, list] = await Promise.all([
        api("/api/admin/stats"),
        api(`/api/admin/submissions?status=${encodeURIComponent(state.status)}`)
      ]);
      $("#statPending").textContent = stats.pending;
      $("#statApproved").textContent = stats.approved;
      $("#statRejected").textContent = stats.rejected;
      $("#statPublished").textContent = stats.published;
      renderList(list.items || []);
    } catch (e) {
      $("#dashError").textContent = e.message;
    }
  }

  function field(dl, label, value) {
    if (value === undefined || value === null || value === "") return;
    const dt = document.createElement("dt");
    dt.textContent = t(label);
    const dd = document.createElement("dd");
    dd.textContent = Array.isArray(value) ? value.join(" · ") : String(value);
    dl.append(dt, dd);
  }

  function renderList(items) {
    const host = $("#submissionList");
    host.textContent = "";
    if (!items.length) {
      const empty = document.createElement("div");
      empty.className = "empty";
      empty.textContent = t("这个队列是空的。");
      host.append(empty);
      return;
    }
    for (const item of items) {
      const p = item.payload || {};
      const article = document.createElement("article");
      article.className = "submission";

      const head = document.createElement("div");
      head.className = "submission-head";
      const title = document.createElement("h3");
      title.textContent = p.name || "(unnamed)";
      const id = document.createElement("small");
      id.textContent = p.id || "";
      title.append(id);
      const badge = document.createElement("span");
      badge.className = "badge " + (item.status === "approved" ? "ok" : item.status === "rejected" ? "no" : "");
      badge.textContent = adminStatus()[item.status] || item.status;
      head.append(title, badge);

      const badges = document.createElement("div");
      badges.className = "badges";
      [p.family, p.upstream, p.first_release, p.license].filter(Boolean).forEach((value) => {
        const span = document.createElement("span");
        span.className = "badge";
        span.textContent = value;
        badges.append(span);
      });
      if (p.ai_assisted) {
        const ai = document.createElement("span");
        ai.className = "badge ai";
        ai.textContent = "AI";
        badges.append(ai);
      }

      const intro = document.createElement("p");
      intro.className = "submission-intro";
      intro.textContent = p.intro || "（没有简介）";

      const dl = document.createElement("dl");
      field(dl, "提交者", item.submitter_name || "—");
      field(dl, "联系方式", item.contact || "—");
      field(dl, "提交时间", item.created_at || "—");
      field(dl, "目标用户", p.target_user);
      field(dl, "包管理", p.package_manager);
      field(dl, "官网", p.official_site);
      field(dl, "代码仓库", p.repo);
      field(dl, "投稿说明", item.note);
      field(dl, "标签", p.tags);
      field(dl, "AI 参与", p.ai_assisted ? "是" : "否");

      article.append(head, badges, intro, dl);

      if (item.status === "pending") {
        const actions = document.createElement("div");
        actions.className = "submission-actions";
        const note = document.createElement("textarea");
        note.placeholder = t("审核备注（可选）");
        note.setAttribute("aria-label", t("审核备注（可选）"));
        const approve = document.createElement("button");
        approve.type = "button";
        approve.className = "btn primary";
        approve.textContent = t("通过");
        approve.addEventListener("click", () => decide(item.id, "approve", note.value, approve));
        const reject = document.createElement("button");
        reject.type = "button";
        reject.className = "btn danger";
        reject.textContent = t("拒绝");
        reject.addEventListener("click", () => decide(item.id, "reject", note.value, reject));
        actions.append(note, approve, reject);
        article.append(actions);
      } else if (item.review_note) {
        const note = document.createElement("p");
        note.className = "review-note";
        note.textContent = `${t("审核备注：")}${item.review_note}`;
        article.append(note);
      }
      I18N.apply(article);
      host.append(article);
    }
  }

  function splitComma(value) {
    return String(value || "").split(/[,，、]/).map((s) => s.trim()).filter(Boolean);
  }

  function readFormRows(name) {
    return String(name || "").split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  }

  async function loadEntries() {
    const host = $("#entriesList");
    if (!host) return;
    $("#entriesError").textContent = "";
    host.textContent = "加载中…";
    try {
      const q = $("#entrySearch").value.trim();
      const data = await api(`/api/admin/distros?lang=${encodeURIComponent(I18N.lang)}&q=${encodeURIComponent(q)}`);
      state.entries = data.items || [];
      renderEntries();
    } catch (e) {
      host.textContent = "";
      $("#entriesError").textContent = e.message;
    }
  }

  function renderEntries() {
    const host = $("#entriesList");
    host.textContent = "";
    if (!state.entries.length) {
      const empty = document.createElement("div");
      empty.className = "empty";
      empty.textContent = t("这个队列是空的。");
      host.append(empty);
      return;
    }
    for (const item of state.entries) {
      const p = item.payload || {};
      const card = document.createElement("article");
      card.className = "entry-card";
      const head = document.createElement("div");
      head.className = "entry-card-head";
      const title = document.createElement("h3");
      title.textContent = p.name || p.id;
      const id = document.createElement("small");
      id.textContent = p.id;
      title.append(id);
      const button = document.createElement("button");
      button.className = "btn ghost";
      button.type = "button";
      button.textContent = t("编辑");
      button.addEventListener("click", () => openEditor(item));
      head.append(title, button);
      const meta = document.createElement("div");
      meta.className = "entry-meta";
      [p.family, p.status, p.ai_assisted ? "AI" : "", item.source, item.overridden ? "EDITED" : ""].filter(Boolean).forEach((value) => {
        const badge = document.createElement("span");
        badge.className = "badge" + (value === "EDITED" ? " ok" : value === "AI" ? " ai" : "");
        badge.textContent = value;
        meta.append(badge);
      });
      const intro = document.createElement("p");
      intro.textContent = (p.intro || "").slice(0, 130);
      card.append(head, meta, intro);
      I18N.apply(card);
      host.append(card);
    }
  }

  function fillEditor(item) {
    const p = item.payload || {};
    const form = $("#entryForm");
    const set = (name, value) => {
      const field = form.elements[name];
      if (!field) return;
      if (field.type === "checkbox") field.checked = Boolean(value);
      else field.value = Array.isArray(value) ? value.join(", ") : (value == null ? "" : value);
    };
    set("id", p.id);
    for (const key of ["name", "name_zh", "family", "upstream", "first_release", "latest_version", "latest_release_date", "release_model", "status", "package_manager", "official_site", "repo", "docs", "download", "wiki", "forum", "chat", "reddit", "maintainer", "org", "founder", "license", "commercial_edition", "openness", "maintainer_type", "release_cycle", "gui_updater", "init_system", "update_command", "target_user", "status_note", "data_as_of", "based_on_since", "popularity"]) set(key, p[key]);
    set("default_desktop", (p.default_desktop || []).join(", "));
    set("supported_arch", (p.supported_arch || []).join(", "));
    set("secondary_families", (p.secondary_families || []).join(", "));
    set("similar", (p.similar || []).join(", "));
    set("tags", (p.tags || []).join(", "));
    set("intro", p.intro);
    set("highlights", (p.highlights || []).join("\n"));
    set("pros", (p.pros || []).join("\n"));
    set("cons", (p.cons || []).join("\n"));
    set("verified", p.verified);
    set("ai_assisted", p.ai_assisted);
    $("#entryEditorTitle").textContent = p.name || p.id;
    $("#entryEditorMeta").textContent = `${p.id} · ${p.family || ""} · ${item.source}`;
    $("#editorError").textContent = "";
    $("#entryEditor").hidden = false;
    document.body.classList.add("editor-open");
  }

  function closeEditor() {
    $("#entryEditor").hidden = true;
    document.body.classList.remove("editor-open");
    state.editId = null;
  }

  function openEditor(item) {
    state.editId = item.payload.id;
    fillEditor(item);
  }

  async function saveEntry(event) {
    event.preventDefault();
    const form = $("#entryForm");
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const value = (key) => String(data.get(key) || "").trim();
    const payload = {
      name: value("name"),
      name_zh: value("name_zh"),
      family: value("family"),
      upstream: value("upstream"),
      first_release: value("first_release"),
      latest_version: value("latest_version"),
      latest_release_date: value("latest_release_date"),
      release_model: value("release_model"),
      status: value("status"),
      package_manager: value("package_manager"),
      official_site: value("official_site"),
      repo: value("repo"),
      docs: value("docs"),
      download: value("download"),
      wiki: value("wiki"),
      forum: value("forum"),
      chat: value("chat"),
      reddit: value("reddit"),
      maintainer: value("maintainer"),
      org: value("org"),
      founder: value("founder"),
      license: value("license"),
      commercial_edition: value("commercial_edition"),
      openness: value("openness"),
      maintainer_type: value("maintainer_type"),
      release_cycle: value("release_cycle"),
      gui_updater: value("gui_updater"),
      init_system: value("init_system"),
      update_command: value("update_command"),
      target_user: value("target_user"),
      status_note: value("status_note"),
      data_as_of: value("data_as_of"),
      based_on_since: value("based_on_since"),
      popularity: Number(value("popularity")) || 3,
      default_desktop: splitComma(value("default_desktop")),
      supported_arch: splitComma(value("supported_arch")),
      secondary_families: splitComma(value("secondary_families")),
      similar: splitComma(value("similar")),
      tags: splitComma(value("tags")),
      intro: value("intro"),
      highlights: readFormRows(value("highlights")),
      pros: readFormRows(value("pros")),
      cons: readFormRows(value("cons")),
      verified: Boolean(form.elements.verified.checked),
      ai_assisted: Boolean(form.elements.ai_assisted.checked)
    };
    $("#editorError").textContent = "";
    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    try {
      await api(`/api/admin/distros/${encodeURIComponent(state.editId)}/save?lang=${encodeURIComponent(I18N.lang)}`, {
        method: "POST",
        body: JSON.stringify({ payload })
      });
      closeEditor();
      await loadEntries();
    } catch (e) {
      $("#editorError").textContent = e.message;
    } finally {
      button.disabled = false;
    }
  }

  async function resetEntry() {
    if (!state.editId) return;
    if (!confirm("还原这个条目在本语言下的编辑？")) return;
    try {
      await api(`/api/admin/distros/${encodeURIComponent(state.editId)}/reset?lang=${encodeURIComponent(I18N.lang)}`, {
        method: "POST",
        body: "{}"
      });
      closeEditor();
      await loadEntries();
    } catch (e) {
      $("#editorError").textContent = e.message;
    }
  }

  async function decide(id, action, note, button) {
    if (!confirm(t(action === "approve" ? "确认通过这条投稿？" : "确认拒绝这条投稿？"))) return;
    button.disabled = true;
    try {
      await api(`/api/admin/submissions/${id}/${action}`, {
        method: "POST",
        body: JSON.stringify({ review_note: note.trim() })
      });
      await loadDashboard();
    } catch (e) {
      $("#dashError").textContent = e.message;
    } finally {
      button.disabled = false;
    }
  }

  async function logout() {
    try {
      await api("/api/admin/logout", { method: "POST", body: "{}" });
    } catch (e) {}
    showLogin();
  }

  async function init() {
    loadConfig();
    const langSelect = $("#adminLang");
    if (langSelect) {
      I18N.LANGS.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.code;
        option.textContent = item.label;
        langSelect.append(option);
      });
      langSelect.value = I18N.lang;
      langSelect.addEventListener("change", () => I18N.setLanguage(langSelect.value));
    }
    const translationNote = $("#adminTranslationNote");
    if (translationNote && I18N.translationNoticeHTML) {
      translationNote.innerHTML = I18N.translationNoticeHTML();
    }
    I18N.apply(document.body);
    try {
      const me = await api("/api/admin/me");
      state.csrf = me.csrf;
      sessionStorage.setItem("distroatlasAdminCsrf", state.csrf);
      setFingerprint(me.fingerprint);
      showDashboard();
    } catch (e) {
      showLogin();
    }
    $("#challengeBtn").addEventListener("click", getChallenge);
    $("#verifyBtn").addEventListener("click", verify);
    $("#logoutBtn").addEventListener("click", logout);
    $("#refreshBtn").addEventListener("click", loadDashboard);
    $("#copyCmdBtn").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText($("#commandText").textContent);
        $("#copyCmdBtn").textContent = "已复制";
        setTimeout(() => { $("#copyCmdBtn").textContent = "复制命令"; }, 1500);
      } catch (e) {
        $("#loginError").textContent = t("复制失败，请手动选择命令。");
      }
    });
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t === tab));
        state.status = tab.dataset.status;
        loadDashboard();
      });
    });
    document.querySelectorAll("[data-admin-view]").forEach((tab) => {
      tab.addEventListener("click", () => {
        state.view = tab.dataset.adminView;
        document.querySelectorAll("[data-admin-view]").forEach((t) => t.classList.toggle("active", t === tab));
        $("#submissionsView").hidden = state.view !== "submissions";
        $("#entriesView").hidden = state.view !== "entries";
        if (state.view === "entries") loadEntries();
      });
    });
    $("#entryRefresh").addEventListener("click", loadEntries);
    let entryTimer = null;
    $("#entrySearch").addEventListener("input", () => {
      clearTimeout(entryTimer);
      entryTimer = setTimeout(loadEntries, 250);
    });
    $("#entryForm").addEventListener("submit", saveEntry);
    $("#entryReset").addEventListener("click", resetEntry);
    document.querySelectorAll("[data-close-editor]").forEach((el) => el.addEventListener("click", closeEditor));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !$("#entryEditor").hidden) closeEditor();
    });
  }

  init();
})();
