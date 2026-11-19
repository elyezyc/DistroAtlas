// SPDX-License-Identifier: AGPL-3.0-or-later
/* ==========================================================================
   DistroAtlas · app.js
   数据驱动渲染 + Hash 路由 + 搜索/筛选/排序/收藏/对比/主题/动效
   ========================================================================== */
(() => {
  "use strict";

  /* ---------- 数据与常量 ---------- */
  const DATA = Array.isArray(window.DISTROS) ? window.DISTROS : [];
  const FAMILIES = window.FAMILIES || {};
  const FAMILY_ORDER = window.FAMILY_ORDER || ["arch", "rh", "debian", "ubuntu", "other"];
  const LOGO_SLUGS = window.LOGO_SLUGS || {};
  const FAMILY_LOGOS = window.FAMILY_LOGOS || { arch: "archlinux", rh: "redhat", debian: "debian", ubuntu: "ubuntu", other: "linux" };
  const LINUS_QUOTES = Array.isArray(window.LINUS_QUOTES) ? window.LINUS_QUOTES : [];
  const I18N = window.I18N || { lang: "zh-CN", LANGS: [], apply() {}, translate: (v) => v, title: (v) => v, setLanguage() {} };
  const SIMPLE_ICONS_VERSION = "16.38.0";

  /* English/Finnish profile translations are loaded from translations.js.
     Mutate the shared data objects before BY_ID and renderers are built. */
  const PROFILE_PACK = (window.DISTRO_I18N && window.DISTRO_I18N[I18N.lang]) || null;
  if (PROFILE_PACK) {
    const fields = ["intro", "highlights", "pros", "cons", "status_note", "target_user", "release_cycle"];
    DATA.forEach((d) => {
      const translated = PROFILE_PACK[d.id];
      if (!translated) return;
      for (const field of fields) {
        if (typeof translated[field] === "undefined" || translated[field] === null) continue;
        d[field] = translated[field];
      }
      d.__translated = Boolean(translated.intro);
    });
  }

  const META_PACK = (window.DISTRO_META_I18N && window.DISTRO_META_I18N[I18N.lang]) || null;
  if (META_PACK) {
    const scalarFields = ["maintainer", "org", "founder", "upstream", "latest_version", "gui_updater", "default_desktop", "commercial_edition", "license", "update_command", "package_manager", "init_system"];
    DATA.forEach((d) => {
      for (const field of scalarFields) {
        const map = META_PACK[field];
        if (map && typeof d[field] === "string" && map[d[field]]) d[field] = map[d[field]];
      }
      const archMap = META_PACK.supported_arch;
      if (archMap && Array.isArray(d.supported_arch)) d.supported_arch = d.supported_arch.map((value) => archMap[value] || value);
      const desktopMap = META_PACK.default_desktop;
      if (desktopMap && Array.isArray(d.default_desktop)) d.default_desktop = d.default_desktop.map((value) => desktopMap[value] || value);
    });
  }

  const BY_ID = new Map(DATA.map((d) => [d.id, d]));
  const DATA_AS_OF = "2026-11-18";

  const AUTHOR = {
    name: "elyezyc",
    email: "elyezyc@gmail.com",
    github: "https://github.com/elyezyc",
    repo: "https://github.com/elyezyc/DistroAtlas",
    gravatarHash: "6c0a8f0032c7b6f8825c7d1d6ceb3198",
    gravatarProfile: "https://gravatar.com/6c0a8f0032c7b6f8825c7d1d6ceb3198",
    bio: "维护 DistroAtlas 的数据、前端与校对流程。关注 Linux 发行版谱系、桌面体验与开源软件的长期可持续性。"
  };

  const NETWORK = Object.assign({
    mode: "auto",
    detectedCN: false,
    timeZone: "",
    useCN: false
  }, window.__DISTROATLAS_NET__ || {});

  const GRAVATAR_MIRRORS = [
    "https://secure.gravatar.com/avatar/",
    "https://gravatar.com/avatar/",
    "https://cn.gravatar.com/avatar/",
    "https://weavatar.com/avatar/",
    "https://cravatar.cn/avatar/",
    "https://sdn.geekzu.org/avatar/"
  ];

  const STATUS = {
    active: { label: "活跃", short: "活跃" },
    lts: { label: "LTS 维护中", short: "LTS" },
    dormant: { label: "休眠", short: "休眠" },
    eol: { label: "已终止", short: "EOL" }
  };

  const MODELS = {
    rolling: "滚动更新",
    fixed: "固定周期",
    lts: "长期支持（LTS）",
    hybrid: "混合模式"
  };

  const MAINTAINER_TYPES = {
    community: "社区",
    foundation: "基金会",
    company: "公司",
    individual: "个人"
  };

  const OPENNESS = {
    free: "完全自由软件",
    firmware: "含固件 blob",
    proprietary: "含专有组件",
    commercial: "有商业版本"
  };

  const TAG_LABELS = {
    desktop: "桌面",
    server: "服务器",
    security: "安全",
    gaming: "游戏",
    lightweight: "轻量",
    immutable: "不可变",
    retro: "复古",
    embedded: "嵌入式",
    mobile: "移动",
    chinese: "中文 / 国产",
    education: "教育",
    multimedia: "多媒体",
    enterprise: "企业",
    privacy: "隐私",
    container: "容器",
    nas: "NAS",
    router: "路由",
    network: "网络",
    tv: "电视 / HTPC",
    hobby: "折腾",
    free: "自由软件",
    community: "社区",
    cloud: "云",
    developer: "开发者",
    database: "数据库",
    source: "源码编译",
    live: "Live 系统",
    design: "设计",
    storage: "存储",
    suse: "SUSE",
    declarative: "声明式",
    gaming_handheld: "掌机",
    legacy: "历史"
  };

  const SECONDARY_LABELS = {
    gaming: "游戏",
    immutable: "不可变",
    security: "安全",
    privacy: "隐私",
    free: "自由软件",
    embedded: "嵌入式",
    mobile: "移动",
    chinese: "中文 / 国产",
    education: "教育",
    multimedia: "多媒体",
    enterprise: "企业",
    desktop: "桌面",
    server: "服务器",
    suse: "SUSE",
    cloud: "云",
    developer: "开发者",
    database: "数据库",
    live: "Live",
    source: "源码",
    declarative: "声明式",
    container: "容器",
    nas: "NAS",
    router: "路由",
    tv: "电视",
    retro: "复古",
    network: "网络",
    storage: "存储",
    design: "设计",
    community: "社区"
  };

  const PACKAGE_LABELS = {
    pacman: "pacman",
    apt: "apt / dpkg",
    dnf: "dnf / rpm",
    zypper: "zypper / rpm",
    portage: "Portage",
    xbps: "XBPS",
    apk: "apk",
    nix: "Nix",
    guix: "GNU Guix",
    eopkg: "eopkg",
    "rpm-ostree": "rpm-ostree",
    swupd: "swupd",
    "apt-rpm": "apt-rpm",
    pkgtools: "pkgtools / slackpkg",
    tce: "tce",
    ppm: "Puppy Package Manager",
    urpmi: "urpmi",
    rpm: "rpm",
    other: "其他"
  };

  const DESKTOP_ORDER = [
    "GNOME", "KDE Plasma", "Xfce", "Cinnamon", "MATE", "LXQt", "Budgie",
    "Pantheon", "COSMIC", "DDE", "UKUI", "Trinity", "Moksha", "Lomiri",
    "Phosh", "Plasma Mobile", "Sway", "Hyprland", "bspwm", "Openbox",
    "IceWM", "JWM", "Fluxbox", "LXDE", "Sailfish UI", "Kodi", "EmulationStation", "Launcher3",
    "LuCI", "Labwc", "无桌面 / 服务器", "其他"
  ];

  const DESKTOP_MATCHERS = [
    ["GNOME", /gnome/i],
    ["KDE Plasma", /kde|plasma/i],
    ["Xfce", /xfce/i],
    ["Cinnamon", /cinnamon/i],
    ["MATE", /\bmate\b/i],
    ["LXQt", /lxqt/i],
    ["Budgie", /budgie/i],
    ["Pantheon", /pantheon/i],
    ["COSMIC", /cosmic/i],
    ["DDE", /dde|deepin desktop/i],
    ["UKUI", /ukui/i],
    ["Trinity", /trinity/i],
    ["Moksha", /moksha/i],
    ["Lomiri", /lomiri/i],
    ["Phosh", /phosh/i],
    ["Plasma Mobile", /plasma mobile/i],
    ["Sway", /\bsway\b/i],
    ["Hyprland", /hyprland/i],
    ["bspwm", /bspwm/i],
    ["Openbox", /openbox/i],
    ["IceWM", /icewm/i],
    ["JWM", /\bjwm\b/i],
    ["Fluxbox", /fluxbox/i],
    ["LXDE", /lxde|pixel/i],
    ["Sailfish UI", /sailfish ui|lipstick/i],
    ["Kodi", /kodi/i],
    ["EmulationStation", /emulationstation/i],
    ["Launcher3", /launcher3/i],
    ["LuCI", /luci/i],
    ["Labwc", /labwc/i]
  ];

  const LINK_FIELDS = [
    ["official_site", "官网", "language"],
    ["docs", "文档", "menu_book"],
    ["download", "下载", "download"],
    ["repo", "代码仓库", "code"],
    ["wiki", "Wiki", "public"],
    ["forum", "论坛", "forum"],
    ["chat", "社区聊天", "chat"],
    ["reddit", "Reddit", "reddit"]
  ];

  const SORT_OPTIONS = [
    ["popularity", "知名度：高 → 低"],
    ["name-asc", "名称：A → Z"],
    ["name-desc", "名称：Z → A"],
    ["zh-asc", "中文名：A → Z"],
    ["first-asc", "首版年份：早 → 晚"],
    ["first-desc", "首版年份：晚 → 早"],
    ["latest-asc", "最新版本：早 → 晚"],
    ["latest-desc", "最新版本：晚 → 早"],
    ["family", "派系"],
    ["status", "维护状态"],
    ["pkg", "包管理器"]
  ];

  const SORT_DEFAULT = "popularity";
  const THEME_ORDER = ["light", "dark", "auto"];
  const THEME_META = {
    light: { label: "亮色", icon: "light_mode" },
    dark: { label: "暗色", icon: "dark_mode" },
    auto: { label: "跟随系统", icon: "brightness_auto" }
  };

  /* ---------- 状态 ---------- */
  const state = {
    route: null,
    filters: null,
    theme: readJSON("distroatlas.theme", "auto"),
    favorites: new Set(readJSON("distroatlas.favorites", [])),
    compare: readJSON("distroatlas.compare", []).filter((id) => BY_ID.has(id)).slice(0, 4),
    viewStorage: readJSON("distroatlas.view", "cards"),
    firstRender: true,
    routeSeq: 0,
    searchTimer: null,
    searchActive: 0,
    lastFocused: null,
    gPending: false,
    gTimer: null,
    toastTimer: null,
    networkNoticeDismissed: readJSON("distroatlas.networkNoticeDismissed", false),
    quoteIndex: null
  };

  if (!THEME_META[state.theme]) state.theme = "auto";

  async function hydrateApprovedDistros() {
    try {
      const response = await fetch(`/api/distros?lang=${encodeURIComponent(I18N.lang)}`, { cache: "no-store", headers: { Accept: "application/json" } });
      if (!response.ok) return;
      const data = await response.json();
      const approved = Array.isArray(data && data.approved) ? data.approved : (Array.isArray(data && data.distros) ? data.distros : []);
      for (const item of approved) {
        if (!item || typeof item.id !== "string" || BY_ID.has(item.id)) continue;
        DATA.push(item);
        BY_ID.set(item.id, item);
      }
      const overrides = data && data.overrides && typeof data.overrides === "object" ? data.overrides : {};
      for (const [id, item] of Object.entries(overrides)) {
        if (!item || typeof item !== "object") continue;
        const existing = BY_ID.get(id);
        if (existing) {
          Object.assign(existing, item);
          if (item.intro) existing.__translated = true;
        } else if (!BY_ID.has(id)) {
          DATA.push(item);
          BY_ID.set(id, item);
        }
      }
    } catch (e) {
      /* Static-only deployments (file:// or plain http.server) have no API. */
    }
  }

  /* ---------- 工具 ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function readJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return fallback;
      try { return JSON.parse(raw); } catch (e) { return raw; }
    } catch (e) {
      return fallback;
    }
  }

  function writeJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* localStorage 不可用时静默降级 */
    }
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[ch]));
  }

  function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function normalize(value) {
    return String(value == null ? "" : value).toLowerCase().normalize("NFKC");
  }

  function stripHtml(value) {
    return String(value == null ? "" : value).replace(/<[^>]+>/g, "");
  }

  function highlight(text, query) {
    const safe = escapeHtml(text);
    const q = String(query || "").trim();
    if (!q) return safe;
    const tokens = q.split(/\s+/).filter(Boolean).map(escapeRegExp).sort((a, b) => b.length - a.length);
    if (!tokens.length) return safe;
    return safe.replace(new RegExp(`(${tokens.join("|")})`, "gi"), "<mark>$1</mark>");
  }

  function formatDate(value) {
    return value || "";
  }

  function clampText(value, max) {
    const chars = Array.from(String(value || ""));
    return chars.length > max ? chars.slice(0, max).join("") + "…" : chars.join("");
  }

  function firstSentence(value) {
    const text = String(value || "").trim();
    const zh = I18N.lang === "zh-CN" || I18N.lang === "zh-TW";
    const stops = zh ? ["。"] : [". ", "! ", "? "];
    let idx = -1;
    let width = 1;
    for (const stop of stops) {
      const at = text.indexOf(stop, 24);
      if (at > 0 && (idx < 0 || at < idx)) { idx = at; width = stop.length; }
    }
    return idx > 0 ? text.slice(0, idx + width).trim() : clampText(text, 150);
  }

  function familyMeta(d) {
    return FAMILIES[d.family] || { name: d.family, short: d.family, color: "#666", rgb: "100,100,100", desc: "" };
  }

  function familyName(key) {
    return (FAMILIES[key] && FAMILIES[key].name) || key;
  }

  function familyShort(key) {
    return (FAMILIES[key] && FAMILIES[key].short) || key;
  }

  function statusLabel(status) {
    return (STATUS[status] && STATUS[status].label) || status;
  }

  function statusBadge(d, extraClass = "") {
    return `<span class="status-badge status-${escapeHtml(d.status)} ${extraClass}">
      <span class="status-dot" aria-hidden="true"></span>${escapeHtml(statusLabel(d.status))}
    </span>`;
  }

  function familyBadge(d) {
    return `<a class="family-badge" href="#/family/${escapeHtml(d.family)}">${escapeHtml(familyName(d.family))}</a>`;
  }

  function verifiedBadge(d) {
    return d.verified
      ? `<span class="verified-badge"><mdui-icon name="verified" aria-hidden="true"></mdui-icon>已核对</span>`
      : `<span class="verified-badge is-unverified"><mdui-icon name="help_outline" aria-hidden="true"></mdui-icon>待核实</span>`;
  }

  function aiBadge(d) {
    if (!d.ai_assisted) return "";
    return `<span class="ai-badge"><mdui-icon name="auto_awesome" aria-hidden="true"></mdui-icon>AI 参与</span>`;
  }

  function initials(d) {
    return (String(d.name || "").replace(/[^A-Za-z0-9]/g, "").charAt(0) || String(d.name || "?").charAt(0)).toUpperCase();
  }

  function simpleIconSources(slug) {
    if (!slug) return [];
    return [
      `assets/logos/${slug}.svg`,
      `https://cdn.simpleicons.org/${slug}`,
      `https://fastly.jsdelivr.net/npm/simple-icons@${SIMPLE_ICONS_VERSION}/icons/${slug}.svg`,
      `https://cdn.jsdelivr.net/npm/simple-icons@${SIMPLE_ICONS_VERSION}/icons/${slug}.svg`
    ];
  }

  function logoUrls(d) {
    const sources = [];
    if (d.logo) sources.push(d.logo);
    const slug = d.logo_slug || LOGO_SLUGS[d.id];
    if (slug) sources.push(...simpleIconSources(slug));
    return [...new Set(sources)];
  }

  function brandedLogoMarkup(sources, letter, className) {
    const fallback = `<span class="badge-letter">${escapeHtml(letter)}</span>`;
    if (!sources.length) return `<span class="${escapeHtml(className)}">${fallback}</span>`;
    const [first, ...rest] = sources;
    return `<span class="${escapeHtml(className)}">${fallback}<img class="badge-logo" src="${escapeHtml(first)}"
      data-sources="${escapeHtml(rest.join("|"))}" alt="" decoding="async"
      onload="this.classList.add('is-loaded');this.parentElement.classList.add('has-logo')"
      onerror="var s=(this.dataset.sources||'').split('|'),i=+(this.dataset.i||0);if(i<s.length){this.dataset.i=i+1;this.src=s[i]}else{this.remove()}"></span>`;
  }

  function logoMarkup(d, className = "distro-badge") {
    return brandedLogoMarkup(logoUrls(d), initials(d), className);
  }

  function familyLogoMarkup(key, className = "family-logo") {
    const family = FAMILIES[key] || {};
    const slug = FAMILY_LOGOS[key] || FAMILY_LOGOS.other;
    const letter = (family.short || family.name || key).charAt(0);
    return brandedLogoMarkup(simpleIconSources(slug), letter, className);
  }

  function watermarkMarkup(d, className = "detail-watermark-logo") {
    if (logoUrls(d).length) return logoMarkup(d, className);
    return familyLogoMarkup(d.family, className);
  }

  function hasDistinctZh(d) {
    if (I18N.lang !== "zh-CN" && I18N.lang !== "zh-TW") return false;
    return Boolean(d.name_zh) && normalize(d.name_zh) !== normalize(d.name);
  }

  function packageKey(d) {
    const p = normalize(d.package_manager);
    if (p.includes("dnf")) return "dnf";
    if (p.includes("rpm-ostree")) return "rpm-ostree";
    if (p.includes("apt-rpm")) return "apt-rpm";
    if (p.includes("pacman")) return "pacman";
    if (p.includes("puppy package")) return "ppm";
    if (p.includes("apt")) return "apt";
    if (p.includes("zypper")) return "zypper";
    if (p.includes("portage")) return "portage";
    if (p.includes("xbps")) return "xbps";
    if (p.includes("apk")) return "apk";
    if (p.includes("nix")) return "nix";
    if (p.includes("guix")) return "guix";
    if (p.includes("eopkg")) return "eopkg";
    if (p.includes("swupd")) return "swupd";
    if (p.includes("pkgtools") || p.includes("slackpkg")) return "pkgtools";
    if (p.includes("tce")) return "tce";
    if (p.includes("ppm")) return "ppm";
    if (p.includes("urpmi")) return "urpmi";
    if (p.includes("rpm")) return "rpm";
    return "other";
  }

  function desktopKeys(d) {
    const text = (d.default_desktop || []).join(" | ");
    const keys = [];
    for (const [key, re] of DESKTOP_MATCHERS) {
      if (re.test(text)) keys.push(key);
    }
    if (keys.length) return [...new Set(keys)];
    if (/无|服务器|web|headless|命令行/i.test(text)) return ["无桌面 / 服务器"];
    return ["其他"];
  }

  function desktopText(d) {
    return (d.default_desktop || []).join(" / ");
  }

  function tagLabel(tag) {
    return TAG_LABELS[tag] || tag;
  }

  function secondaryLabel(tag) {
    return SECONDARY_LABELS[tag] || tag;
  }

  function platformLabel(value) {
    return PACKAGE_LABELS[value] || value;
  }

  function modelLabel(value) {
    return MODELS[value] || value;
  }

  function maintainerLabel(value) {
    return MAINTAINER_TYPES[value] || value;
  }

  function opennessLabel(value) {
    return OPENNESS[value] || value;
  }

  function displayVersion(d) {
    if (d.latest_version === null || d.latest_version === "" || typeof d.latest_version === "undefined") {
      return `<span class="pending">待核实</span>`;
    }
    return escapeHtml(d.latest_version);
  }

  function displayLatestDate(d) {
    if (d.latest_release_date) return escapeHtml(d.latest_release_date);
    if (d.release_model === "rolling") return "持续更新";
    return `<span class="pending">待核实</span>`;
  }

  function displayMaybe(value) {
    return value === null || value === "" || typeof value === "undefined"
      ? `<span class="pending">待核实</span>`
      : escapeHtml(value);
  }

  function plainMaybe(value) {
    return value === null || value === "" || typeof value === "undefined" ? "待核实" : String(value);
  }

  function hostOf(url) {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch (e) {
      return url;
    }
  }

  function externalUrl(url) {
    if (!url || !NETWORK.useCN) return url;
    if (/^https?:\/\/(www\.)?github\.com\//i.test(url)) {
      return `https://gh-proxy.com/${url}`;
    }
    if (/^https?:\/\/(raw|gist)\.githubusercontent\.com\//i.test(url)) {
      return `https://gh-proxy.com/${url}`;
    }
    return url;
  }

  function gravatarProfileUrl() {
    return NETWORK.useCN ? "https://cravatar.cn/" : AUTHOR.gravatarProfile;
  }

  function activeNetworkLabel() {
    return I18N.translate(NETWORK.useCN ? "中国镜像" : "官方源");
  }

  function localeName(a, b) {
    return String(a.name || "").localeCompare(String(b.name || ""), "en", { sensitivity: "base" });
  }

  function localeZh(a, b) {
    return String(a.name_zh || "").localeCompare(String(b.name_zh || ""), "zh-Hans-CN", { sensitivity: "base" });
  }

  function popularityPips(value) {
    const n = Math.max(1, Math.min(5, Number(value) || 1));
    return `<span class="pips" aria-label="知名度 ${n} / 5">${"●".repeat(n)}${"○".repeat(5 - n)}</span>`;
  }

  /* ---------- 路由与筛选状态 ---------- */
  function parseRoute() {
    const raw = location.hash.replace(/^#/, "") || "/";
    const qIndex = raw.indexOf("?");
    const pathPart = qIndex >= 0 ? raw.slice(0, qIndex) : raw;
    const queryString = qIndex >= 0 ? raw.slice(qIndex + 1) : "";
    const segments = pathPart.split("/").filter(Boolean).map((segment) => {
      try { return decodeURIComponent(segment); } catch (e) { return segment; }
    });

    if (!segments.length) return { name: "home", queryString };
    if (segments[0] === "all" && segments.length === 1) return { name: "all", queryString };
    if (segments[0] === "map" && segments.length === 1) return { name: "map", queryString };
    if (segments[0] === "about" && segments.length === 1) return { name: "about", queryString };
    if (segments[0] === "submit" && segments.length === 1) return { name: "submit", queryString };
    if (segments[0] === "family" && segments[1]) return { name: "family", key: segments[1], queryString };
    if (segments[0] === "distro" && segments[1]) return { name: "distro", id: segments[1], queryString };
    return { name: "notfound", queryString, path: pathPart };
  }

  function defaultViewFor(route) {
    if (route && route.name === "all") return window.innerWidth <= 700 ? "cards" : "table";
    if (route && route.name === "family") return "cards";
    return ["cards", "table", "compact"].includes(state.viewStorage) ? state.viewStorage : "cards";
  }

  function readFilterSet(params, key) {
    const raw = params.get(key);
    if (!raw) return new Set();
    return new Set(raw.split(",").map((v) => v.trim()).filter(Boolean));
  }

  function readFilters(route) {
    const params = new URLSearchParams(route.queryString || "");
    const view = params.get("view");
    const sort = params.get("sort");
    return {
      q: params.get("q") || "",
      family: route.name === "family" ? new Set() : readFilterSet(params, "family"),
      status: readFilterSet(params, "status"),
      model: readFilterSet(params, "model"),
      pkg: readFilterSet(params, "pkg"),
      desktop: readFilterSet(params, "desktop"),
      maint: readFilterSet(params, "maint"),
      openness: readFilterSet(params, "openness"),
      arch: readFilterSet(params, "arch"),
      tag: readFilterSet(params, "tag"),
      fav: params.get("fav") === "1",
      sort: SORT_OPTIONS.some(([key]) => key === sort) ? sort : SORT_DEFAULT,
      view: ["cards", "table", "compact"].includes(view) ? view : defaultViewFor(route)
    };
  }

  function cloneFilters(filters) {
    return {
      q: filters.q,
      family: new Set(filters.family),
      status: new Set(filters.status),
      model: new Set(filters.model),
      pkg: new Set(filters.pkg),
      desktop: new Set(filters.desktop),
      maint: new Set(filters.maint),
      openness: new Set(filters.openness),
      arch: new Set(filters.arch),
      tag: new Set(filters.tag),
      fav: filters.fav,
      sort: filters.sort,
      view: filters.view
    };
  }

  function facetKeys() {
    return ["family", "status", "model", "pkg", "desktop", "maint", "openness", "arch", "tag"];
  }

  function facetCount(filters = state.filters) {
    if (!filters) return 0;
    return facetKeys().reduce((sum, key) => sum + (filters[key] ? filters[key].size : 0), 0) + (filters.fav ? 1 : 0);
  }

  function hasFilters(filters = state.filters) {
    return Boolean(filters) && (facetCount(filters) > 0 || Boolean(filters.q));
  }

  function isListRoute(route = state.route) {
    return Boolean(route) && (route.name === "all" || route.name === "family");
  }

  function scopeData(route = state.route) {
    if (route && route.name === "family") return DATA.filter((d) => d.family === route.key);
    return DATA;
  }

  function filterValues(d, key) {
    switch (key) {
      case "family": return [d.family];
      case "status": return [d.status];
      case "model": return [d.release_model];
      case "pkg": return [packageKey(d)];
      case "desktop": return desktopKeys(d);
      case "maint": return [d.maintainer_type];
      case "openness": return [d.openness];
      case "arch": return d.supported_arch || [];
      case "tag": return d.tags || [];
      default: return [];
    }
  }

  function searchHaystack(d) {
    return normalize([
      d.id, d.name, d.name_zh, d.upstream, d.family, familyName(d.family),
      d.package_manager, d.init_system, desktopText(d), d.maintainer,
      d.org, d.founder, d.target_user, d.intro,
      ...(d.tags || []).map(tagLabel), ...(d.secondary_families || []).map(secondaryLabel)
    ].join(" "));
  }

  function matchesQuery(d, query) {
    const q = normalize(query).trim();
    if (!q) return true;
    const hay = searchHaystack(d);
    return q.split(/\s+/).every((token) => hay.includes(token));
  }

  function searchScore(d, query) {
    const q = normalize(query).trim();
    if (!q) return 0;
    let score = 0;
    const name = normalize(d.name);
    const zh = normalize(d.name_zh);
    if (name === q) score += 120;
    if (zh === q) score += 110;
    if (name.startsWith(q)) score += 70;
    if (zh.startsWith(q)) score += 60;
    if (name.includes(q)) score += 40;
    if (zh.includes(q)) score += 34;
    if (normalize(d.upstream).includes(q)) score += 18;
    if (normalize(d.intro).includes(q)) score += 8;
    for (const tag of d.tags || []) {
      if (normalize(tagLabel(tag)).includes(q)) score += 12;
    }
    return score;
  }

  function sortList(list) {
    const sort = (state.filters && state.filters.sort) || SORT_DEFAULT;
    const arr = list.slice();
    const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });
    const collatorZh = new Intl.Collator("zh-Hans-CN", { numeric: true, sensitivity: "base" });

    switch (sort) {
      case "name-desc": return arr.sort((a, b) => localeName(b, a));
      case "zh-asc": return arr.sort(localeZh);
      case "first-asc": return arr.sort((a, b) => (a.first_release || 9999) - (b.first_release || 9999) || localeName(a, b));
      case "first-desc": return arr.sort((a, b) => (b.first_release || 0) - (a.first_release || 0) || localeName(a, b));
      case "latest-asc": return arr.sort((a, b) => String(a.latest_release_date || "9999-99-99").localeCompare(String(b.latest_release_date || "9999-99-99")) || localeName(a, b));
      case "latest-desc": return arr.sort((a, b) => String(b.latest_release_date || "").localeCompare(String(a.latest_release_date || "")) || localeName(a, b));
      case "family": return arr.sort((a, b) => FAMILY_ORDER.indexOf(a.family) - FAMILY_ORDER.indexOf(b.family) || localeName(a, b));
      case "status": return arr.sort((a, b) => ["active", "lts", "dormant", "eol"].indexOf(a.status) - ["active", "lts", "dormant", "eol"].indexOf(b.status) || localeName(a, b));
      case "pkg": return arr.sort((a, b) => collator.compare(platformLabel(packageKey(a)), platformLabel(packageKey(b))) || localeName(a, b));
      case "name-asc": return arr.sort(localeName);
      case "popularity":
      default:
        return arr.sort((a, b) => (Number(b.popularity) || 0) - (Number(a.popularity) || 0) || localeName(a, b));
    }
  }

  function getFiltered() {
    if (!isListRoute()) return [];
    let list = scopeData();
    const f = state.filters;

    if (f.fav) list = list.filter((d) => state.favorites.has(d.id));
    if (f.q.trim()) list = list.filter((d) => matchesQuery(d, f.q));

    for (const key of facetKeys()) {
      if (key === "family" && state.route.name === "family") continue;
      const selected = f[key];
      if (!selected || !selected.size) continue;
      list = list.filter((d) => filterValues(d, key).some((value) => selected.has(value)));
    }

    return sortList(list);
  }

  function syncListUrl() {
    if (!isListRoute()) return;
    const params = new URLSearchParams();
    const f = state.filters;
    if (f.q.trim()) params.set("q", f.q.trim());
    for (const key of facetKeys()) {
      if (key === "family" && state.route.name === "family") continue;
      const values = Array.from(f[key] || []);
      if (values.length) params.set(key, values.join(","));
    }
    if (f.fav) params.set("fav", "1");
    if (f.sort !== SORT_DEFAULT) params.set("sort", f.sort);
    if (f.view !== defaultViewFor(state.route)) params.set("view", f.view);

    const base = state.route.name === "family" ? `/family/${encodeURIComponent(state.route.key)}` : "/all";
    const query = params.toString();
    const nextHash = `#${base}${query ? `?${query}` : ""}`;
    if (location.hash !== nextHash) {
      history.replaceState(null, "", nextHash);
      state.route.queryString = query;
    }
  }

  /* ---------- 搜索建议 ---------- */
  function snippetFor(d, query) {
    const text = String(d.intro || "");
    const q = String(query || "").trim();
    if (!q) return firstSentence(text);
    const idx = normalize(text).indexOf(normalize(q));
    if (idx < 0) return firstSentence(text);
    const start = Math.max(0, idx - 28);
    const end = Math.min(text.length, idx + q.length + 96);
    return `${start > 0 ? "…" : ""}${text.slice(start, end)}${end < text.length ? "…" : ""}`;
  }

  function renderSearchPopover() {
    const input = $("#globalSearch");
    const popover = $("#searchPopover");
    if (!input || !popover) return;
    const q = input.value.trim();

    let items = DATA.slice();
    if (q) {
      items = items
        .filter((d) => matchesQuery(d, q))
        .sort((a, b) => searchScore(b, q) - searchScore(a, q) || (Number(b.popularity) || 0) - (Number(a.popularity) || 0))
        .slice(0, 7);
    } else {
      items = items.sort((a, b) => (Number(b.popularity) || 0) - (Number(a.popularity) || 0) || localeName(a, b)).slice(0, 5);
    }

    if (!items.length) {
      popover.innerHTML = `<div class="search-empty">没有找到「${escapeHtml(q)}」<br><span style="font-size:11px">试试发行版名、上游项目或标签</span></div>`;
    } else {
      state.searchActive = Math.min(state.searchActive, items.length - 1);
      popover.innerHTML = `
        <div class="search-hint-row"><span>${q ? "最佳匹配" : "热门条目"}</span><span>${q ? "Enter 查看全部" : "输入以搜索"}</span></div>
        ${items.map((d, index) => `
          <button class="search-result ${index === state.searchActive ? "is-active" : ""}" type="button"
                  data-search-id="${escapeHtml(d.id)}" role="option" aria-selected="${index === state.searchActive}">
            ${logoMarkup(d, `mini-badge family-${d.family}`)}
            <span>
              <span class="sr-name">${highlight(d.name, q)}${hasDistinctZh(d) ? ` · ${highlight(d.name_zh, q)}` : ""}</span>
              <span class="sr-meta">${highlight(I18N.translate(familyName(d.family)), q)} · ${escapeHtml(clampText(((I18N.lang === "en" || I18N.lang === "fi") && !d.__translated) ? localizedSummary(d) : snippetFor(d, q), 70))}</span>
            </span>
            <span class="sr-year">${escapeHtml(d.first_release || "—")}</span>
          </button>
        `).join("")}
        ${q ? `<div class="search-hint-row"><span>匹配 ${DATA.filter((d) => matchesQuery(d, q)).length} 个条目</span><span>↑↓ 选择 · Enter 打开</span></div>` : ""}
      `;
    }

    popover.hidden = false;
    input.setAttribute("aria-expanded", "true");
    I18N.apply(popover);
  }

  function closeSearchPopover() {
    const input = $("#globalSearch");
    const popover = $("#searchPopover");
    if (popover) popover.hidden = true;
    if (input) input.setAttribute("aria-expanded", "false");
    state.searchActive = 0;
  }

  function openSearch(force = false) {
    const input = $("#globalSearch");
    if (!input) return;
    document.body.classList.add("search-open");
    if (force || window.innerWidth <= 700) {
      input.focus();
      input.select();
    }
    renderSearchPopover();
  }

  function navigateSearch(id) {
    closeSearchPopover();
    document.body.classList.remove("search-open");
    location.hash = `#/distro/${encodeURIComponent(id)}`;
  }

  /* ---------- 渲染：badges / cards ---------- */
  function localizedSummary(d) {
    const family = I18N.translate(familyName(d.family));
    const pkg = I18N.translate(platformLabel(packageKey(d)));
    const status = I18N.translate(statusLabel(d.status));
    const year = d.first_release || "—";
    if (I18N.lang === "fi") {
      return `${d.name} on Linux-jakelu, ensijulkaisu ${year}. Perhe: ${family}; paketinhallinta: ${pkg}; tila: ${status}.`;
    }
    if (I18N.lang === "en") {
      return `${d.name} is a Linux distribution, first released in ${year}. Family: ${family}; package manager: ${pkg}; status: ${status}.`;
    }
    return "";
  }

  function cardSummary(d, q) {
    if ((I18N.lang === "en" || I18N.lang === "fi") && !d.__translated) return localizedSummary(d);
    return q ? snippetFor(d, q) : firstSentence(d.intro);
  }

  function distroCard(d, index, options = {}) {
    const reveal = Boolean(options.reveal);
    const q = state.filters ? state.filters.q : "";
    const summary = cardSummary(d, q);
    const tags = (d.tags || []).slice(0, 3).map((tag) => `<span>#${escapeHtml(tagLabel(tag))}</span>`).join("");
    const isFav = state.favorites.has(d.id);
    const isCompared = state.compare.includes(d.id);

    return `
      <mdui-card class="distro-card family-${escapeHtml(d.family)} ${reveal ? "reveal" : ""}"
                 data-key="${escapeHtml(d.id)}" data-card-link="#/distro/${encodeURIComponent(d.id)}"
                 style="${reveal ? `--delay:${Math.min(index * 60, 720)}ms` : ""}">
        <div class="card-top">
          ${logoMarkup(d, "distro-badge")}
          <div class="card-title-wrap">
            <a class="card-name" href="#/distro/${encodeURIComponent(d.id)}">${highlight(d.name, q)}</a>
            ${hasDistinctZh(d) ? `<span class="card-name-zh">${highlight(d.name_zh, q)}</span>` : ""}
          </div>
          <div class="card-actions">
            <button class="card-action ${isFav ? "is-starred" : ""}" type="button"
                    data-action="toggle-favorite" data-id="${escapeHtml(d.id)}"
                    aria-label="${isFav ? "取消收藏" : "收藏"} ${escapeHtml(d.name)}" aria-pressed="${isFav}">
              <mdui-icon name="${isFav ? "star" : "star_border"}" aria-hidden="true"></mdui-icon>
            </button>
            <button class="card-action ${isCompared ? "is-compared" : ""}" type="button"
                    data-action="toggle-compare" data-id="${escapeHtml(d.id)}"
                    aria-label="${isCompared ? "移出对比" : "加入对比"} ${escapeHtml(d.name)}" aria-pressed="${isCompared}">
              <mdui-icon name="${isCompared ? "check_circle" : "compare_arrows"}" aria-hidden="true"></mdui-icon>
            </button>
          </div>
        </div>
        <div class="card-badges">
          ${familyBadge(d)}
          ${statusBadge(d)}
          <span class="year-badge">${escapeHtml(d.first_release || "—")}</span>
        </div>
        <p class="card-intro">${highlight(summary, q)}</p>
        <div class="card-foot">
          <div class="card-tags">${tags}</div>
          <a class="card-link" href="#/distro/${encodeURIComponent(d.id)}">查看档案<mdui-icon name="arrow_forward" aria-hidden="true"></mdui-icon></a>
        </div>
      </mdui-card>
    `;
  }

  function tableSortButton(sort, label) {
    const active = state.filters.sort === sort || (sort === "name-asc" && state.filters.sort === "name-desc");
    const arrow = active ? (state.filters.sort.endsWith("desc") ? " ↓" : " ↑") : "";
    return `<button type="button" data-sort="${sort}">${escapeHtml(label)}${arrow}</button>`;
  }

  function tableView(list) {
    return `
      <div class="table-wrap">
        <table class="atlas-table">
          <caption class="sr-only">全部 Linux 发行版对比表，支持横向滚动与点击表头排序</caption>
          <thead>
            <tr>
              <th>${tableSortButton("name-asc", "名称")}</th>
              <th>${tableSortButton("family", "派系")}</th>
              <th>${tableSortButton("first-asc", "首版")}</th>
              <th>${tableSortButton("latest-desc", "最新版本")}</th>
              <th>发布模式</th>
              <th>${tableSortButton("pkg", "包管理")}</th>
              <th>初始化系统</th>
              <th>默认桌面</th>
              <th>${tableSortButton("status", "状态")}</th>
              <th>${tableSortButton("popularity", "知名度")}</th>
              <th><span class="sr-only">收藏</span></th>
            </tr>
          </thead>
          <tbody>
            ${list.map((d) => {
              const isFav = state.favorites.has(d.id);
              return `<tr data-key="${escapeHtml(d.id)}" data-card-link="#/distro/${encodeURIComponent(d.id)}" tabindex="0" role="link" aria-label="打开 ${escapeHtml(d.name)} 档案">
                <td><span class="row-dot family-${escapeHtml(d.family)}" aria-hidden="true"></span><span class="row-name">${highlight(d.name, state.filters.q)}</span>${hasDistinctZh(d) ? `<span class="row-zh">${highlight(d.name_zh, state.filters.q)}</span>` : ""}</td>
                <td>${familyBadge(d)}</td>
                <td class="mono">${escapeHtml(d.first_release || "—")}</td>
                <td>${displayVersion(d)}<span class="row-zh">${displayLatestDate(d)}</span></td>
                <td>${escapeHtml(modelLabel(d.release_model))}</td>
                <td class="mono">${escapeHtml(platformLabel(packageKey(d)))}</td>
                <td class="mono">${escapeHtml(d.init_system)}</td>
                <td>${escapeHtml(clampText(desktopText(d), 28))}</td>
                <td>${statusBadge(d)}</td>
                <td class="mono">${escapeHtml(String(d.popularity || "—"))}/5</td>
                <td><button class="table-star ${isFav ? "is-starred" : ""}" type="button" data-action="toggle-favorite" data-id="${escapeHtml(d.id)}" aria-label="${isFav ? "取消收藏" : "收藏"} ${escapeHtml(d.name)}" aria-pressed="${isFav}"><mdui-icon name="${isFav ? "star" : "star_border"}" aria-hidden="true"></mdui-icon></button></td>
              </tr>`;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function compactView(list) {
    return `
      <div class="compact-list" role="list">
        ${list.map((d) => {
          const isFav = state.favorites.has(d.id);
          const isCompared = state.compare.includes(d.id);
          return `<div class="compact-row family-${escapeHtml(d.family)}" data-key="${escapeHtml(d.id)}" data-card-link="#/distro/${encodeURIComponent(d.id)}" role="listitem" tabindex="0">
            ${logoMarkup(d, "mini-badge")}
            <span class="cr-name"><b>${highlight(d.name, state.filters.q)}</b>${hasDistinctZh(d) ? `<span>${highlight(d.name_zh, state.filters.q)}</span>` : ""}</span>
            <span class="cr-meta">${familyBadge(d)}</span>
            <span class="cr-meta mono">${escapeHtml(d.first_release || "—")}</span>
            <span class="cr-meta">${statusBadge(d)}</span>
            <span class="cr-meta mono">${escapeHtml(platformLabel(packageKey(d)))}</span>
            <span class="cr-tags">${(d.tags || []).slice(0, 3).map((tag) => `<span>#${escapeHtml(tagLabel(tag))}</span>`).join("")}</span>
            <span class="cr-actions">
              <button class="card-action ${isFav ? "is-starred" : ""}" type="button" data-action="toggle-favorite" data-id="${escapeHtml(d.id)}" aria-label="${isFav ? "取消收藏" : "收藏"} ${escapeHtml(d.name)}" aria-pressed="${isFav}"><mdui-icon name="${isFav ? "star" : "star_border"}" aria-hidden="true"></mdui-icon></button>
              <button class="card-action ${isCompared ? "is-compared" : ""}" type="button" data-action="toggle-compare" data-id="${escapeHtml(d.id)}" aria-label="${isCompared ? "移出对比" : "加入对比"} ${escapeHtml(d.name)}" aria-pressed="${isCompared}"><mdui-icon name="${isCompared ? "check_circle" : "compare_arrows"}" aria-hidden="true"></mdui-icon></button>
            </span>
          </div>`;
        }).join("")}
      </div>
    `;
  }

  function emptyState() {
    return `
      <div class="empty-state">
        <div class="empty-art" aria-hidden="true">
          <span class="ea-circle one"></span>
          <span class="ea-circle two"></span>
          <span class="ea-dot a"></span>
          <span class="ea-dot b"></span>
          <span class="ea-dot c"></span>
          <span class="ea-slash"></span>
        </div>
        <h2>这条轨道上没有结果</h2>
        <p>试试减少筛选条件，或换一个关键词。派系、状态、包管理器与标签都可以组合使用。</p>
        <button class="primary-btn" type="button" data-action="clear-filters">清除全部筛选</button>
      </div>
    `;
  }

  function resultsHTML(list, options = {}) {
    if (!list.length) return emptyState();
    if (state.filters.view === "table") return tableView(list);
    if (state.filters.view === "compact") return compactView(list);
    return `<div class="card-grid">${list.map((d, i) => distroCard(d, i, { reveal: Boolean(options.reveal) })).join("")}</div>`;
  }

  function activeFilterChips() {
    const f = state.filters;
    const chips = [];
    if (f.q.trim()) {
      chips.push(`<button class="active-filter-chip" type="button" data-remove-filter="q"><span>搜索：<b>${escapeHtml(clampText(f.q, 20))}</b></span><mdui-icon name="close" aria-hidden="true"></mdui-icon></button>`);
    }
    if (f.fav) {
      chips.push(`<button class="active-filter-chip" type="button" data-remove-filter="fav"><span>只看收藏</span><mdui-icon name="close" aria-hidden="true"></mdui-icon></button>`);
    }
    for (const key of facetKeys()) {
      if (key === "family" && state.route.name === "family") continue;
      for (const value of f[key]) {
        chips.push(`<button class="active-filter-chip" type="button" data-remove-filter="${key}" data-value="${escapeHtml(value)}"><span>${escapeHtml(facetLabel(key, value))}</span><mdui-icon name="close" aria-hidden="true"></mdui-icon></button>`);
      }
    }
    if (!chips.length) return "";
    return `<div class="active-filter-row">${chips.join("")}<button class="clear-filters" type="button" data-action="clear-filters">全部清除</button></div>`;
  }

  function facetLabel(key, value) {
    switch (key) {
      case "family": return familyName(value);
      case "status": return statusLabel(value);
      case "model": return modelLabel(value);
      case "pkg": return platformLabel(value);
      case "maint": return maintainerLabel(value);
      case "openness": return opennessLabel(value);
      case "tag": return tagLabel(value);
      case "desktop": return value;
      case "arch": return value;
      default: return value;
    }
  }

  function toolbarHTML(list) {
    const view = state.filters.view;
    const facets = facetCount();
    return `
      <div class="toolbar-wrap" id="toolbarWrap">
        <div class="toolbar">
          <div class="result-count" aria-live="polite">共 <b>${list.length}</b> 个条目${state.filters.q.trim() ? ` · 搜索「${escapeHtml(state.filters.q.trim())}」` : ""}</div>
          <button class="filter-open-btn" type="button" data-action="open-filter" aria-haspopup="dialog">
            <mdui-icon name="tune" aria-hidden="true"></mdui-icon>筛选${facets ? ` <span class="filter-badge">${facets}</span>` : ""}
          </button>
          <div class="sort-wrap">
            <span>排序</span>
            <mdui-select id="sortSelect" variant="outlined" value="${escapeHtml(state.filters.sort)}" aria-label="排序方式">
              ${SORT_OPTIONS.map(([value, label]) => `<mdui-menu-item value="${value}">${escapeHtml(label)}</mdui-menu-item>`).join("")}
            </mdui-select>
          </div>
          <div class="view-switch" role="group" aria-label="视图切换">
            ${[
              ["cards", "grid_view", "卡片"],
              ["table", "table_rows", "表格"],
              ["compact", "view_list", "列表"]
            ].map(([mode, icon, label]) => `<button type="button" data-view="${mode}" aria-pressed="${view === mode}" aria-label="${label}视图"><mdui-icon name="${icon}" aria-hidden="true"></mdui-icon><span>${label}</span></button>`).join("")}
          </div>
        </div>
        ${activeFilterChips()}
      </div>
    `;
  }

  function capturePositions(root) {
    const map = new Map();
    $$("[data-key]", root).forEach((el) => {
      map.set(el.dataset.key, el.getBoundingClientRect());
    });
    return map;
  }

  function playFlip(oldRects, root) {
    if (!oldRects || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    $$("[data-key]", root).forEach((el) => {
      const before = oldRects.get(el.dataset.key);
      if (!before) return;
      const after = el.getBoundingClientRect();
      const dx = before.left - after.left;
      const dy = before.top - after.top;
      if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;
      el.animate(
        [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "translate(0, 0)" }],
        { duration: 260, easing: "cubic-bezier(0.2, 0, 0, 1)" }
      );
    });
  }

  function refreshLibrary(options = {}) {
    if (!isListRoute()) return;
    const toolbarHost = $("#toolbarHost");
    const resultsRoot = $("#resultsRoot");
    if (!toolbarHost || !resultsRoot) return;

    const list = getFiltered();
    const oldRects = options.flip ? capturePositions(resultsRoot) : null;
    toolbarHost.innerHTML = toolbarHTML(list);
    resultsRoot.innerHTML = resultsHTML(list, { reveal: Boolean(options.reveal) });
    resultsRoot.setAttribute("aria-busy", "false");

    if (options.sync) syncListUrl();
    if (options.flip) playFlip(oldRects, resultsRoot);
    updateHeaderCounts();
    I18N.apply(toolbarHost);
    I18N.apply(resultsRoot);
    if (options.reveal) setupReveals(resultsRoot);
  }

  /* ---------- 页面：首页 ---------- */
  function countStats() {
    const total = DATA.length;
    const active = DATA.filter((d) => d.status === "active" || d.status === "lts").length;
    const eol = DATA.filter((d) => d.status === "eol").length;
    return { total, active, eol };
  }

  function currentQuote() {
    if (!LINUS_QUOTES.length) return null;
    if (state.quoteIndex === null || !LINUS_QUOTES[state.quoteIndex]) {
      state.quoteIndex = Math.floor(Math.random() * LINUS_QUOTES.length);
    }
    return LINUS_QUOTES[state.quoteIndex];
  }

  function quoteAttribution(quote) {
    return `Linus Torvalds · ${quote.source}${quote.year ? ` · ${quote.year}` : ""}`;
  }

  function quoteBodyHTML(quote) {
    if (!quote) return "";
    return `<span class="quote-mark" aria-hidden="true">“</span>
      <div class="quote-main">
        <blockquote class="quote-en">${escapeHtml(quote.en)}</blockquote>
        <div class="quote-credit">
          ${familyLogoMarkup("other", "quote-avatar")}
          <span class="quote-author">Linus Torvalds</span>
          <span class="quote-source">${escapeHtml(quote.source)}</span>${quote.year ? `<span class="quote-year">· ${quote.year}</span>` : ""}
          <span class="quote-count">${String(state.quoteIndex + 1).padStart(2, "0")} / ${String(LINUS_QUOTES.length).padStart(2, "0")}</span>
        </div>
      </div>
      <div class="quote-actions">
        <button class="quote-btn" type="button" data-action="new-quote"><mdui-icon name="autorenew" aria-hidden="true"></mdui-icon>换一句</button>
        <button class="quote-btn" type="button" data-action="copy-quote"><mdui-icon name="content_copy" aria-hidden="true"></mdui-icon>复制</button>
      </div>`;
  }

  function quoteCardHTML() {
    const quote = currentQuote();
    if (!quote) return "";
    return `<section class="home-section quote-section" aria-labelledby="quote-title">
      <div class="section-head">
        <div>
          <div class="eyebrow">LINUS SAYS</div>
          <h2 id="quote-title">Linus 一言</h2>
          <p>来自内核邮件列表、访谈与 Usenet 的英文原话。保留原文，不翻译；少量粗口以星号处理。</p>
        </div>
        <span class="head-link">共 ${LINUS_QUOTES.length} 句 <mdui-icon name="format_quote" aria-hidden="true"></mdui-icon></span>
      </div>
      <mdui-card class="linus-quote-card" id="linusQuoteCard">
        <div class="quote-body" id="quoteBody" aria-live="polite">${quoteBodyHTML(quote)}</div>
      </mdui-card>
    </section>`;
  }

  function quoteInlineHTML(context = "") {
    const quote = currentQuote();
    if (!quote) return "";
    return `<section class="quote-inline quote-inline-${context}" aria-label="Linus 一言">
      <div class="quote-inline-label"><span>LINUS SAYS</span><span>共 ${LINUS_QUOTES.length} 句 · 英文原文</span></div>
      <div class="quote-body" id="quoteBody" aria-live="polite">${quoteBodyHTML(quote)}</div>
    </section>`;
  }

  function quoteNotFoundHTML() {
    const quote = currentQuote();
    if (!quote) return "";
    return `<section class="quote-404" aria-label="Linus 一言">
      <mdui-card class="linus-quote-card notfound-quote-card">
        <div class="quote-404-label"><span>LINUS SAYS</span><span>ONE MORE THING</span></div>
        <div class="quote-body" id="quoteBody" aria-live="polite">${quoteBodyHTML(quote)}</div>
      </mdui-card>
    </section>`;
  }

  function rotateQuote() {
    if (!LINUS_QUOTES.length) return;
    const body = $("#quoteBody");
    if (!body) return;
    let next = state.quoteIndex;
    if (LINUS_QUOTES.length > 1) {
      let guard = 0;
      while (next === state.quoteIndex && guard < 20) {
        next = Math.floor(Math.random() * LINUS_QUOTES.length);
        guard += 1;
      }
    }
    state.quoteIndex = next;
    body.classList.add("is-changing");
    setTimeout(() => {
      body.innerHTML = quoteBodyHTML(LINUS_QUOTES[next]);
      body.classList.remove("is-changing");
      I18N.apply(body);
    }, 150);
  }

  function copyQuote() {
    const quote = currentQuote();
    if (!quote) return;
    const text = `"${quote.en}"\n— ${quoteAttribution(quote)}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => showToast("名言已复制"), () => showToast("复制失败"));
    } else {
      showToast("当前浏览器不支持剪贴板");
    }
  }

  function renderHome() {
    const stats = countStats();
    const byFamily = FAMILY_ORDER.reduce((acc, key) => {
      acc[key] = DATA.filter((d) => d.family === key).length;
      return acc;
    }, {});
    const positions = [
      { x: 50, y: 2 },
      { x: 90, y: 32 },
      { x: 78, y: 86 },
      { x: 90, y: 64 },
      { x: 8, y: 35 }
    ];
    const featured = DATA.slice().sort((a, b) => (Number(b.popularity) || 0) - (Number(a.popularity) || 0) || localeName(a, b)).slice(0, 4);
    const unverified = DATA.filter((d) => !d.verified).length;

    return `
      <section class="home-hero">
        <div class="hero-copy">
          <span class="hero-kicker"><span class="pulse" aria-hidden="true"></span>一份持续校对的 Linux 发行版图谱</span>
          <h1 class="hero-title">把 Linux 的<br><em>家族树</em><span class="hero-rest">摊开来看</span></h1>
          <p class="hero-lead">从 1993 年的 Debian 到今天的不可变桌面与移动 Linux，沿着上游、包管理与维护状态，找到适合你的那一支。可以搜索、筛选、收藏，也可以把 2–4 个系统并排比较。</p>
          <div class="hero-actions">
            <a class="primary-btn" href="#/all">浏览全量档案<mdui-icon name="arrow_forward" aria-hidden="true"></mdui-icon></a>
            <a class="ghost-btn" href="#/map">打开完整星图</a>
          </div>
          <div class="stat-row">
            <div class="stat"><div class="stat-value"><span class="count-up" data-target="${stats.total}">0</span><small>个</small></div><div class="stat-label">收录发行版</div></div>
            <div class="stat"><div class="stat-value"><span class="count-up" data-target="${stats.active}">0</span><small>个</small></div><div class="stat-label">活跃 / LTS 维护</div></div>
            <div class="stat"><div class="stat-value"><span class="count-up" data-target="${stats.eol}">0</span><small>个</small></div><div class="stat-label">已终止 EOL</div></div>
            <div class="stat"><div class="stat-value"><span class="count-up" data-target="5">0</span><small>条</small></div><div class="stat-label">派系分支</div></div>
          </div>
        </div>
        <div class="atlas-orbit-wrap" aria-label="五个派系分支及其收录数量，Ubuntu 隶属 Debian">
          <div class="atlas-orbit">
            <span class="orbit-child-link" aria-hidden="true"></span>
            ${FAMILY_ORDER.map((key, index) => {
              const family = FAMILIES[key];
              const pos = positions[index];
              return `<a class="orbit-node family-${key} ${key === "ubuntu" ? "is-child" : ""}" href="#/family/${key}" style="left:${pos.x}%;top:${pos.y}%" aria-label="${escapeHtml(family.name)}${key === "ubuntu" ? "，Debian 子派系" : ""}，收录 ${byFamily[key]} 个发行版"${key === "ubuntu" ? ` title="Ubuntu 系是 Debian 的子派系"` : ""}>
                ${familyLogoMarkup(key, "node-dot")}
                <span>${escapeHtml(family.name)}</span>
                <span class="node-count">${byFamily[key]}</span>
              </a>`;
            }).join("")}
            <div class="orbit-center">
              <span class="tux">${stats.total}</span>
              <small>DISTROS</small>
            </div>
          </div>
          <div class="orbit-caption">ARCH · RH · DEBIAN ↳ UBUNTU · INDEPENDENT</div>
        </div>
      </section>

      <section class="home-section" aria-labelledby="family-section-title">
        <div class="section-head">
          <div>
            <div class="eyebrow">THE FAMILY TREE</div>
            <h2 id="family-section-title">四棵主树，五条分支</h2>
            <p>Ubuntu 是 Debian 的子派系，因此在图谱中紧跟在 Debian 之后。点击 Debian 进入本体，点击 Ubuntu 进入它自己的派系列表。</p>
          </div>
          <a class="head-link" href="#/all">查看全部 ${stats.total} 个<mdui-icon name="arrow_forward" aria-hidden="true"></mdui-icon></a>
        </div>
        <div class="family-grid">
          ${["arch", "rh", "debian", "other"].map((key, index) => {
            const family = FAMILIES[key];
            const items = DATA.filter((d) => d.family === key).sort((a, b) => (Number(b.popularity) || 0) - (Number(a.popularity) || 0)).slice(0, 3);
            const card = `<a class="family-card family-${key}" href="#/family/${key}">
              <div class="fc-top">
                ${familyLogoMarkup(key, "family-logo")}
                <span class="fc-index">0${index + 1} / ${escapeHtml(family.short)}</span>
                <span class="fc-count">${byFamily[key]}</span>
              </div>
              <h3>${escapeHtml(family.name)}</h3>
              <p>${escapeHtml(family.desc)}</p>
              <div class="fc-examples">${items.map((d) => `<span>${escapeHtml(d.name)}</span>`).join("")}</div>
              <mdui-icon class="fc-arrow" name="arrow_outward" aria-hidden="true"></mdui-icon>
            </a>`;
            if (key !== "debian") return card;
            return `<div class="family-group family-debian">
              ${card}
              <a class="family-child-card family-ubuntu" href="#/family/ubuntu">
                ${familyLogoMarkup("ubuntu", "family-logo")}
                <span class="fcc-copy"><b>Ubuntu 系</b><small>Debian 子派系 · ${byFamily.ubuntu} 个条目</small></span>
                <mdui-icon name="subdirectory_arrow_right" aria-hidden="true"></mdui-icon>
              </a>
            </div>`;
          }).join("")}
        </div>
      </section>

      <section class="home-section" aria-labelledby="timeline-title">
        <div class="section-head">
          <div>
            <div class="eyebrow">FIRST RELEASE</div>
            <h2 id="timeline-title">时间轴：从 1993 到今天</h2>
            <p>每个点代表一个发行版的首版年份，纵向错位只为避免重叠；悬停或聚焦查看名称，点击直达档案。</p>
          </div>
          <span class="head-link">横向滚动 <mdui-icon name="swipe" aria-hidden="true"></mdui-icon></span>
        </div>
        ${renderTimeline()}
      </section>

      <section class="home-section" aria-labelledby="featured-title">
        <div class="section-head">
          <div>
            <div class="eyebrow">EDITOR'S PICKS</div>
            <h2 id="featured-title">从这几个开始</h2>
            <p>按知名度权重挑选的四个入口，覆盖 DIY、企业、桌面与独立发行版。</p>
          </div>
          <a class="head-link" href="#/all">全部档案<mdui-icon name="arrow_forward" aria-hidden="true"></mdui-icon></a>
        </div>
        <div class="featured-grid">
          ${featured.map((d, i) => distroCard(d, i, { reveal: true })).join("")}
        </div>
      </section>

      ${quoteCardHTML()}

      <div class="home-note">
        <div class="note-icon"><mdui-icon name="verified_user" aria-hidden="true"></mdui-icon></div>
        <div>
          <h3>数据不是装饰：${unverified} 个条目含待核实字段</h3>
          <p>无法确认的版本与日期保留为空，并在详情页用「待核实」标记。已终止发行版不会被删除，而是标注终止年份与原因。数据截至 ${DATA_AS_OF}。</p>
        </div>
        <a class="head-link" href="#/about">阅读数据说明<mdui-icon name="arrow_forward" aria-hidden="true"></mdui-icon></a>
      </div>
    `;
  }

  function renderTimeline() {
    const withYear = DATA.filter((d) => Number.isFinite(Number(d.first_release))).sort((a, b) => a.first_release - b.first_release || localeName(a, b));
    if (!withYear.length) return "";
    const minYear = Math.min(...withYear.map((d) => d.first_release));
    const maxYear = Math.max(...withYear.map((d) => d.first_release));
    const width = 1400;
    const span = Math.max(1, maxYear - minYear);
    const xFor = (year) => 34 + ((year - minYear) / span) * (width - 110);

    const yearTicks = [];
    for (let year = Math.ceil(minYear / 5) * 5; year <= maxYear; year += 5) {
      yearTicks.push(`<div class="timeline-decade" style="left:${xFor(year)}px"><span>${year}</span></div>`);
    }

    let seen = new Map();
    const nodes = withYear.map((d, index) => {
      const year = Number(d.first_release);
      const indexInYear = seen.get(year) || 0;
      seen.set(year, indexInYear + 1);
      const x = xFor(year) + indexInYear * 6;
      const stem = 20 + ((index * 17) % 64);
      return `<a class="timeline-node family-${escapeHtml(d.family)}" href="#/distro/${encodeURIComponent(d.id)}"
                 style="left:${x}px;--stem:${stem}px;--delay:${(index % 20) * 20}ms"
                 title="${escapeHtml(d.name)} · ${year}" aria-label="${escapeHtml(d.name)}，首版 ${year} 年">
        <span class="tn-stem" aria-hidden="true"></span>
        <span class="tn-dot" aria-hidden="true"></span>
        <span class="tn-label">${escapeHtml(d.name)}</span>
        <span class="tn-year">${year}</span>
      </a>`;
    }).join("");

    return `
      <div class="timeline-scroller" tabindex="0" aria-label="按首版年份排列的发行版时间轴，可横向滚动">
        <div class="timeline-track" style="width:${width}px">
          ${yearTicks.join("")}
          ${nodes}
        </div>
      </div>
      <div class="timeline-legend">
        ${FAMILY_ORDER.map((key) => `<span class="family-${key}"><i></i>${escapeHtml(FAMILIES[key].name)}</span>`).join("")}
        <span style="margin-left:auto">共 ${withYear.length} 个首版年份可考</span>
      </div>
    `;
  }

  /* ---------- 页面：列表 ---------- */
  function renderAllPage() {
    return `
      <header class="page-head">
        <div>
          <div class="eyebrow">THE FULL INDEX</div>
          <h1>全量档案</h1>
          <p>${DATA.length} 个发行版，按派系、维护状态、发布模式、包管理器、桌面、维护者类型、开源纯度、架构与标签筛选。点击表头可直接排序。</p>
        </div>
        <div class="head-aside">
          <span>DATA AS OF ${DATA_AS_OF}</span>
          <span>${DATA.filter((d) => !d.verified).length} 个条目含待核实字段</span>
        </div>
      </header>
      <div id="toolbarHost"></div>
      <div id="resultsRoot" aria-busy="true"></div>
      ${quoteInlineHTML("all")}
    `;
  }

  function renderMapPage() {
    const width = 1280;
    const height = 900;
    const root = { x: 700, y: 430 };
    const clusters = [
      { key: "arch", x: 230, y: 230, rings: [{ r: 100, n: 5 }, { r: 150, n: 7 }] },
      { key: "rh", x: 640, y: 230, rings: [{ r: 100, n: 6 }, { r: 150, n: 7 }] },
      { key: "debian", x: 1040, y: 230, rings: [{ r: 105, n: 6 }, { r: 160, n: 8 }] },
      { key: "ubuntu", x: 1060, y: 620, child: true, rings: [{ r: 95, n: 5 }, { r: 150, n: 5 }] },
      { key: "other", x: 380, y: 620, rings: [{ r: 100, n: 6 }, { r: 165, n: 10 }, { r: 235, n: 12 }] }
    ];
    const positions = [];
    const lines = [];
    const hubPositions = {};
    const sorted = (key) => DATA.filter((d) => d.family === key)
      .sort((a, b) => (Number(b.popularity) || 0) - (Number(a.popularity) || 0) || localeName(a, b));

    clusters.forEach((cluster) => {
      hubPositions[cluster.key] = { x: cluster.x, y: cluster.y };
      const family = FAMILIES[cluster.key];
      const items = sorted(cluster.key);
      let cursor = 0;
      const rings = cluster.rings.map((ring) => ({ ...ring }));
      const capacity = rings.reduce((sum, ring) => sum + ring.n, 0);
      if (items.length > capacity) {
        const last = rings[rings.length - 1];
        rings.push({ r: last.r + 78, n: Math.max(6, items.length - capacity) });
      }
      rings.forEach((ring, ringIndex) => {
        for (let i = 0; i < ring.n && cursor < items.length; i += 1, cursor += 1) {
          const d = items[cursor];
          const step = (Math.PI * 2) / ring.n;
          const angle = -Math.PI / 2 + (ringIndex % 2 ? step / 2 : 0) + i * step;
          const x = cluster.x + Math.cos(angle) * ring.r;
          const y = cluster.y + Math.sin(angle) * ring.r;
          positions.push({ d, x, y, cluster: cluster.key, index: cursor });
          lines.push({ x1: cluster.x, y1: cluster.y, x2: x, y2: y, color: family.color, opacity: .24, width: 1, kind: "cluster", cluster: cluster.key });
        }
      });
    });

    // Root → primary branches; Debian → Ubuntu (child branch)
    ["arch", "rh", "debian", "other"].forEach((key) => {
      lines.push({ x1: root.x, y1: root.y, x2: hubPositions[key].x, y2: hubPositions[key].y, color: "#ffffff", opacity: .2, width: 1.3, kind: "root" });
    });
    lines.push({ x1: hubPositions.debian.x, y1: hubPositions.debian.y, x2: hubPositions.ubuntu.x, y2: hubPositions.ubuntu.y, color: FAMILIES.ubuntu.color, opacity: .62, width: 1.8, dash: "6 8", kind: "child" });

    const hub = (key, index) => {
      const family = FAMILIES[key];
      const cluster = clusters.find((item) => item.key === key);
      const count = DATA.filter((d) => d.family === key).length;
      return `<a class="map-hub family-${key} ${key === "ubuntu" ? "is-child" : ""}" href="#/family/${key}"
        data-map-hub="${key}" data-hub-x="${cluster.x}" data-hub-y="${cluster.y}" style="left:${cluster.x}px;top:${cluster.y}px;--i:${index}" aria-label="${escapeHtml(family.name)}，${count} 个发行版，点击放大">
        ${familyLogoMarkup(key, "map-hub-logo")}
        <span><b>${escapeHtml(family.name)}</b><small>${key === "ubuntu" ? `${I18N.translate("Debian 子派系")} · ` : ""}${count} ${I18N.translate("个")}</small></span>
      </a>`;
    };

    const node = (item) => `<a class="map-node family-${item.cluster}" data-map-node data-cluster="${item.cluster}" href="#/distro/${encodeURIComponent(item.d.id)}"
      tabindex="-1" aria-hidden="true" style="left:${item.x.toFixed(1)}px;top:${item.y.toFixed(1)}px;--i:${item.index}"
      title="${escapeHtml(item.d.name)} · ${escapeHtml(item.d.name_zh)}"
      aria-label="${escapeHtml(item.d.name)}，${escapeHtml(familyName(item.d.family))}，首版 ${escapeHtml(item.d.first_release || "待核实")}">
      ${logoMarkup(item.d, "map-logo")}
      <span class="map-node-name">${escapeHtml(clampText(item.d.name, 17))}</span>
    </a>`;

    return `
      <header class="page-head map-page-head">
        <div>
          <div class="eyebrow">THE WHOLE CONSTELLATION</div>
          <h1>完整星图</h1>
          <p>${DATA.length} 个发行版、5 条派系分支，按上游关系放在同一张图里。Logo 使用 Simple Icons 的高质量品牌图标；点击节点进入详情，点击中心节点进入派系。</p>
        </div>
        <div class="head-aside">
          <span>${DATA.length} NODES · 5 BRANCHES</span>
          <span>UBUNTU ↳ DEBIAN</span>
        </div>
      </header>

      <div class="map-controls">
        <div class="map-legend">
          ${FAMILY_ORDER.map((key) => `<span class="family-${key}"><i></i>${escapeHtml(FAMILIES[key].name)} <b>${DATA.filter((d) => d.family === key).length}</b></span>`).join("")}
        </div>
        <div class="map-controls-right">
          <div class="map-hint"><span id="mapStatus">总览 · 悬停或点击派系放大</span><mdui-icon name="swipe" aria-hidden="true"></mdui-icon>横向滚动</div>
          <div class="map-actions">
            <button class="map-auto-btn" type="button" data-action="toggle-map-auto" aria-pressed="false"><mdui-icon name="play_arrow" aria-hidden="true"></mdui-icon>自动巡游</button>
            <button class="map-overview-btn" type="button" data-action="map-overview" hidden><mdui-icon name="zoom_out_map" aria-hidden="true"></mdui-icon>返回总览</button>
          </div>
        </div>
      </div>

      <div class="map-scroll" id="mapScroll" tabindex="0" aria-label="完整 Linux 发行版星图，包含 ${DATA.length} 个可点击节点">
        <button class="map-back" type="button" data-action="map-overview" hidden><mdui-icon name="arrow_back" aria-hidden="true"></mdui-icon><span>五派系星图</span></button>
        <div class="map-canvas is-overview" id="mapCanvas" data-width="${width}" data-height="${height}" style="width:${width}px;height:${height}px">
          <div class="map-atmosphere" aria-hidden="true">
            <span class="map-aurora map-aurora-a"></span>
            <span class="map-aurora map-aurora-b"></span>
            <span class="map-aurora map-aurora-c"></span>
            <span class="map-orbit map-orbit-a"></span>
            <span class="map-orbit map-orbit-b"></span>
            <span class="map-orbit map-orbit-c"></span>
            <span class="map-stars map-stars-far"></span>
            <span class="map-stars map-stars-near"></span>
            <span class="map-focus-glow"></span>
            <span class="map-vignette"></span>
          </div>
          <svg class="map-lines" viewBox="0 0 ${width} ${height}" aria-hidden="true">
            ${lines.map((line) => `<line class="map-line map-line-${line.kind}${line.cluster ? ` family-${line.cluster}` : ""}" pathLength="1" x1="${line.x1}" y1="${line.y1}" x2="${line.x2}" y2="${line.y2}" stroke="${line.color}" stroke-opacity="${line.opacity}" stroke-width="${line.width}" ${line.dash ? `stroke-dasharray="${line.dash}"` : ""} />`).join("")}
          </svg>
          <div class="map-root" style="left:${root.x}px;top:${root.y}px">
            ${familyLogoMarkup("other", "map-root-logo")}
            <b>LINUX</b><small>${DATA.length} ${I18N.translate("个发行版")}</small>
          </div>
          ${clusters.map((cluster, index) => hub(cluster.key, index)).join("")}
          ${positions.map(node).join("")}
        </div>
      </div>

      <aside class="map-focus-panel" id="mapFocusPanel" hidden aria-live="polite">
        <button class="icon-btn map-panel-close" type="button" data-action="map-overview" aria-label="返回星图总览"><mdui-icon name="close" aria-hidden="true"></mdui-icon></button>
        <div class="map-panel-head">
          <span id="mapPanelLogo"></span>
          <div><div class="eyebrow">FOCUSED BRANCH</div><h2 id="mapPanelName"></h2></div>
        </div>
        <p id="mapPanelDesc"></p>
        <div class="map-panel-meta" id="mapPanelMeta"></div>
        <div class="map-panel-actions">
          <a class="primary-btn" id="mapPanelEnter" href="#/family/arch">进入派系<mdui-icon name="arrow_forward" aria-hidden="true"></mdui-icon></a>
          <button class="text-btn" type="button" data-action="map-overview">返回总览</button>
        </div>
      </aside>

      <div class="map-foot">
        <span><i class="legend-root"></i>根节点</span>
        <span><i class="legend-child"></i>Debian → Ubuntu 子派系</span>
        <span>节点 Logo：<a href="https://simpleicons.org/" target="_blank" rel="noopener noreferrer">Simple Icons</a>；未收录品牌使用首字母徽章。</span>
        <a href="#/all">切换到全量档案<mdui-icon name="arrow_forward" aria-hidden="true"></mdui-icon></a>
      </div>
    `;
  }

  /* ---------- 完整星图：总览 → 派系自动放大 ---------- */
  let mapAutoTimer = null;
  let mapAutoOn = false;
  let mapAutoIndex = 0;
  let mapActiveKey = null;
  let mapEscapeHandler = null;

  function mapKeys() {
    return ["arch", "rh", "debian", "ubuntu", "other"];
  }

  function mapStatusText(text) {
    const status = document.getElementById("mapStatus");
    if (status) status.textContent = I18N.translate(text);
  }

  function updateMapZoom(key) {
    const canvas = document.getElementById("mapCanvas");
    const scroll = document.getElementById("mapScroll");
    if (!canvas || !scroll) return;
    if (!key || window.innerWidth <= 900) {
      canvas.style.setProperty("--map-zoom", "1");
      canvas.style.setProperty("--map-pan-x", "0px");
      canvas.style.setProperty("--map-pan-y", "0px");
      scroll.classList.remove("is-focused");
      return;
    }
    const hub = canvas.querySelector(`.map-hub[data-map-hub="${key}"]`);
    if (!hub) return;
    const width = Number(canvas.dataset.width) || 1280;
    const height = Number(canvas.dataset.height) || 1040;
    const x = Number(hub.dataset.hubX);
    const y = Number(hub.dataset.hubY);
    const scale = 1.42;
    const maxPanX = (width * (scale - 1)) / 2;
    const maxPanY = (height * (scale - 1)) / 2;
    const panX = Math.max(-maxPanX, Math.min(maxPanX, (width / 2 - x) * scale));
    const panY = Math.max(-maxPanY, Math.min(maxPanY, (height / 2 - y) * scale));
    canvas.style.setProperty("--map-zoom", String(scale));
    canvas.style.setProperty("--map-pan-x", `${panX}px`);
    canvas.style.setProperty("--map-pan-y", `${panY}px`);
    scroll.classList.add("is-focused");
  }

  function mapPanelOpen(key, options = {}) {
    const panel = document.getElementById("mapFocusPanel");
    const family = FAMILIES[key];
    if (!panel || !family) return;
    const items = DATA.filter((d) => d.family === key);
    const active = items.filter((d) => d.status === "active" || d.status === "lts").length;
    const earliest = items.reduce((min, d) => Math.min(min, Number(d.first_release) || 9999), 9999);
    panel.className = `map-focus-panel family-${key}`;
    panel.hidden = false;
    const logo = document.getElementById("mapPanelLogo");
    const name = document.getElementById("mapPanelName");
    const desc = document.getElementById("mapPanelDesc");
    const meta = document.getElementById("mapPanelMeta");
    const enter = document.getElementById("mapPanelEnter");
    if (logo) logo.innerHTML = familyLogoMarkup(key, "map-panel-logo");
    if (name) name.textContent = family.name;
    if (desc) desc.textContent = family.desc;
    if (meta) {
      meta.innerHTML = `<span><b>${items.length}</b> 个条目</span><span><b>${active}</b> 活跃 / LTS</span><span>最早 <b>${earliest === 9999 ? "—" : earliest}</b></span>${family.parent ? `<span class="map-panel-child">${I18N.translate("↳ {{name}} 子派系").replace("{{name}}", escapeHtml(I18N.translate(family.parentName)))}</span>` : ""}`;
    }
    if (enter) {
      enter.href = `#/family/${key}`;
      enter.innerHTML = `${I18N.translate("进入 {{name}}").replace("{{name}}", escapeHtml(I18N.translate(family.name)))}<mdui-icon name="arrow_forward" aria-hidden="true"></mdui-icon>`;
    }
    const overview = document.querySelector("[data-action='map-overview']");
    if (overview) overview.hidden = false;
    const back = document.querySelector(".map-back");
    if (back) back.hidden = false;
    I18N.apply(panel);
    requestAnimationFrame(() => panel.classList.add("is-open"));
    const localizedFamily = I18N.translate(family.name);
    mapStatusText(options.auto
      ? I18N.translate("自动巡游 · {{name}}").replace("{{name}}", localizedFamily)
      : I18N.translate("聚焦：{{name}} · 悬停其他派系切换").replace("{{name}}", localizedFamily));
  }

  function setMapFocus(key, options = {}) {
    const canvas = document.getElementById("mapCanvas");
    if (!canvas || !FAMILIES[key]) return;
    mapActiveKey = key;
    canvas.classList.remove("is-overview");
    canvas.classList.add("is-focused");
    canvas.dataset.focus = key;
    $$("[data-map-node]").forEach((node) => {
      const active = node.dataset.cluster === key;
      node.setAttribute("aria-hidden", String(!active));
      if (active) node.removeAttribute("tabindex");
      else node.setAttribute("tabindex", "-1");
    });
    updateMapZoom(key);
    mapPanelOpen(key, options);
  }

  function clearMapFocus(immediate = false) {
    mapActiveKey = null;
    const canvas = document.getElementById("mapCanvas");
    const scroll = document.getElementById("mapScroll");
    const panel = document.getElementById("mapFocusPanel");
    if (canvas) {
      canvas.classList.add("is-overview");
      canvas.classList.remove("is-focused");
      canvas.removeAttribute("data-focus");
      canvas.style.setProperty("--map-zoom", "1");
      canvas.style.setProperty("--map-pan-x", "0px");
      canvas.style.setProperty("--map-pan-y", "0px");
    }
    if (scroll) scroll.classList.remove("is-focused");
    $$("[data-map-node]").forEach((node) => {
      node.setAttribute("aria-hidden", "true");
      node.setAttribute("tabindex", "-1");
    });
    if (panel) {
      panel.classList.remove("is-open");
      const finish = () => { if (!panel.classList.contains("is-open")) panel.hidden = true; };
      if (immediate) finish();
      else setTimeout(finish, 260);
    }
    const overview = document.querySelector("[data-action='map-overview']");
    if (overview) overview.hidden = true;
    const back = document.querySelector(".map-back");
    if (back) back.hidden = true;
    mapStatusText("总览 · 悬停或点击派系放大");
  }

  function stopMapAuto() {
    if (mapAutoTimer) clearInterval(mapAutoTimer);
    mapAutoTimer = null;
    mapAutoOn = false;
    const button = document.querySelector("[data-action='toggle-map-auto']");
    if (button) {
      button.setAttribute("aria-pressed", "false");
      button.innerHTML = '<mdui-icon name="play_arrow" aria-hidden="true"></mdui-icon>自动巡游';
    }
  }

  function toggleMapAuto() {
    if (mapAutoOn) {
      stopMapAuto();
      if (mapActiveKey) mapPanelOpen(mapActiveKey);
      return;
    }
    stopMapAuto();
    mapAutoOn = true;
    const button = document.querySelector("[data-action='toggle-map-auto']");
    if (button) {
      button.setAttribute("aria-pressed", "true");
      button.innerHTML = '<mdui-icon name="pause" aria-hidden="true"></mdui-icon>暂停巡游';
    }
    const keys = mapKeys();
    mapAutoIndex = 0;
    setMapFocus(keys[mapAutoIndex], { auto: true });
    mapAutoTimer = setInterval(() => {
      mapAutoIndex = (mapAutoIndex + 1) % keys.length;
      setMapFocus(keys[mapAutoIndex], { auto: true });
    }, 4300);
  }

  function initMapPage() {
    const canvas = document.getElementById("mapCanvas");
    if (!canvas) return;
    stopMapAuto();
    clearMapFocus(true);
    $$(".map-hub", canvas).forEach((hub) => {
      const key = hub.dataset.mapHub;
      hub.addEventListener("pointerenter", (event) => {
        if (event.pointerType === "touch") return;
        if (mapAutoOn) stopMapAuto();
        setMapFocus(key);
      });
      hub.addEventListener("focus", () => {
        if (mapAutoOn) stopMapAuto();
        setMapFocus(key);
      });
      hub.addEventListener("click", (event) => {
        event.preventDefault();
        if (mapAutoOn) stopMapAuto();
        setMapFocus(key);
      });
    });
    const panel = document.getElementById("mapFocusPanel");
    if (panel) panel.addEventListener("mouseenter", () => {});
    canvas.addEventListener("click", (event) => {
      if (!mapActiveKey) return;
      if (event.target.closest(".map-hub, .map-node, .map-back")) return;
      if (mapAutoOn) stopMapAuto();
      clearMapFocus();
    });
    mapEscapeHandler = (event) => {
      if (event.key !== "Escape" || !mapActiveKey) return;
      if (mapAutoOn) stopMapAuto();
      clearMapFocus();
    };
    document.addEventListener("keydown", mapEscapeHandler);
  }

  function destroyMapPage() {
    stopMapAuto();
    if (mapEscapeHandler) {
      document.removeEventListener("keydown", mapEscapeHandler);
      mapEscapeHandler = null;
    }
    mapActiveKey = null;
    const panel = document.getElementById("mapFocusPanel");
    if (panel) {
      panel.classList.remove("is-open");
      panel.hidden = true;
    }
    const canvas = document.getElementById("mapCanvas");
    if (canvas) {
      canvas.style.setProperty("--map-zoom", "1");
      canvas.style.setProperty("--map-pan-x", "0px");
      canvas.style.setProperty("--map-pan-y", "0px");
    }
    const back = document.querySelector(".map-back");
    if (back) back.hidden = true;
  }

  function renderFamilyPage(route) {
    const family = FAMILIES[route.key];
    if (!family) return renderNotFound();
    const items = DATA.filter((d) => d.family === route.key);
    const active = items.filter((d) => d.status === "active" || d.status === "lts").length;
    const earliest = items.reduce((min, d) => Math.min(min, Number(d.first_release) || 9999), 9999);
    const letter = family.short.charAt(0);

    return `
      <section class="family-hero family-${route.key}" data-letter="${escapeHtml(letter)}">
        <div class="fh-grid">
          <div>
            ${family.parent ? `<a class="family-parent-link" href="#/family/${escapeHtml(family.parent)}">← ${escapeHtml(family.parentName || familyName(family.parent))} / 子派系</a>` : ""}
            <div class="eyebrow">${escapeHtml(family.short.toUpperCase())} BRANCH</div>
            <h1>${escapeHtml(family.name)}<span class="fh-en" aria-hidden="true">${escapeHtml(family.short)}</span></h1>
            <p>${escapeHtml(family.long)}</p>
            <div class="fh-stats">
              <div class="fh-stat"><b>${items.length}</b><span>收录条目</span></div>
              <div class="fh-stat"><b>${active}</b><span>活跃 / LTS</span></div>
              <div class="fh-stat"><b>${earliest === 9999 ? "—" : earliest}</b><span>最早首版</span></div>
            </div>
          </div>
          ${familyLogoMarkup(route.key, "fh-mark")}
        </div>
      </section>
      ${route.key === "debian" ? `<a class="family-child-banner family-ubuntu" href="#/family/ubuntu">
        ${familyLogoMarkup("ubuntu", "family-logo")}
        <span><b>Ubuntu 系是 Debian 的子派系</b><small>${byFamilyCount("ubuntu")} 个条目 · 点击进入 Ubuntu 的独立派系列表</small></span>
        <mdui-icon name="subdirectory_arrow_right" aria-hidden="true"></mdui-icon>
      </a>` : ""}
      <div id="toolbarHost"></div>
      <div id="resultsRoot" aria-busy="true"></div>
      ${quoteInlineHTML("family")}
    `;
  }

  function byFamilyCount(key) {
    return DATA.filter((d) => d.family === key).length;
  }

  /* ---------- 页面：详情 ---------- */
  function specRow(label, value, options = {}) {
    const cls = options.mono ? "mono" : "";
    return `<div class="spec-row"><span class="spec-label">${escapeHtml(label)}</span><span class="spec-value ${cls}">${value}</span></div>`;
  }

  function linkCard(key, label, icon, url) {
    return `<a class="outbound-link" href="${escapeHtml(externalUrl(url))}" target="_blank" rel="noopener noreferrer"${NETWORK.useCN && /^https?:\/\/github\.com\//i.test(url) ? ` title="当前经 gh-proxy 镜像；登录或提交 PR 建议切换官方源"` : ""}>
      <span class="ol-icon"><mdui-icon name="${icon}" aria-hidden="true"></mdui-icon></span>
      <span class="ol-copy"><b>${escapeHtml(label)}</b><span>${escapeHtml(hostOf(url))}</span></span>
    </a>`;
  }

  function introParagraphs(text) {
    const value = String(text || "").trim();
    if (!value) return [`<span class="pending">暂无介绍</span>`];
    if (value.length < 180) return [escapeHtml(value)];
    let cut = Math.floor(value.length * 0.52);
    const zh = I18N.lang === "zh-CN" || I18N.lang === "zh-TW";
    const stops = zh ? ["。"] : [". ", "! ", "? "];
    let nextStop = -1;
    let width = 1;
    for (const stop of stops) {
      const at = value.indexOf(stop, cut);
      if (at > 0 && (nextStop < 0 || at < nextStop)) { nextStop = at; width = stop.length; }
    }
    if (nextStop > 0 && nextStop < value.length - 20) cut = nextStop + width;
    return [escapeHtml(value.slice(0, cut)), escapeHtml(value.slice(cut))];
  }

  function removeFromCompare(id) {
    state.compare = state.compare.filter((item) => item !== id);
    writeJSON("distroatlas.compare", state.compare);
    updateHeaderCounts();
    updateCompareButtons();
    renderCompare();
  }

  function renderDetailPage(route) {
    const d = BY_ID.get(route.id);
    if (!d) return renderNotFound();
    const family = familyMeta(d);
    const q = state.filters ? state.filters.q : "";
    const links = LINK_FIELDS.map(([key, label, icon]) => [key, label, icon, d[key]]).filter(([, , , url]) => Boolean(url));
    const paragraphs = introParagraphs(d.intro);
    const isFav = state.favorites.has(d.id);
    const isCompared = state.compare.includes(d.id);
    const sorted = DATA.slice().sort(localeName);
    const pos = sorted.findIndex((item) => item.id === d.id);
    const prev = pos > 0 ? sorted[pos - 1] : null;
    const next = pos < sorted.length - 1 ? sorted[pos + 1] : null;
    const secondary = (d.secondary_families || []).length
      ? d.secondary_families.map((key) => I18N.translate(secondaryLabel(key))).join((I18N.lang === "zh-CN" || I18N.lang === "zh-TW") ? "、" : ", ")
      : "—";

    return `
      <article class="detail-view">
        <header class="detail-hero family-${escapeHtml(d.family)}">
          <div class="detail-watermark" aria-hidden="true">${watermarkMarkup(d, "detail-watermark-logo")}</div>
          <div class="detail-hero-orbit" aria-hidden="true"><i></i><i></i><i></i></div>
          <div class="detail-kicker">
            ${logoMarkup(d, "detail-logo")}
            <a class="family-badge" href="#/family/${escapeHtml(d.family)}">${escapeHtml(family.name)}</a>
            ${statusBadge(d)}
            ${verifiedBadge(d)}
            ${aiBadge(d)}
          </div>
          <h1 class="detail-title">${escapeHtml(d.name)}</h1>
          ${hasDistinctZh(d) ? `<div class="detail-title-zh">${escapeHtml(d.name_zh)}</div>` : ""}
          <p class="detail-tagline">${escapeHtml(d.target_user)}${(I18N.lang === "zh-CN" || I18N.lang === "zh-TW") ? "。" : ". "}${escapeHtml(I18N.translate(family.desc))}</p>
          ${I18N.inlineTranslationHTML ? I18N.inlineTranslationHTML(d.name) : ""}
          <div class="detail-actions">
            ${d.official_site ? `<a class="primary-btn" href="${escapeHtml(d.official_site)}" target="_blank" rel="noopener noreferrer">访问官网<mdui-icon name="open_in_new" aria-hidden="true"></mdui-icon></a>` : ""}
            <button class="round-action ${isFav ? "is-starred" : ""}" type="button" data-action="toggle-favorite" data-id="${escapeHtml(d.id)}" aria-label="${isFav ? "取消收藏" : "收藏"} ${escapeHtml(d.name)}" aria-pressed="${isFav}">
              <mdui-icon name="${isFav ? "star" : "star_border"}" aria-hidden="true"></mdui-icon>
            </button>
            <button class="round-action ${isCompared ? "is-compared" : ""}" type="button" data-action="toggle-compare" data-id="${escapeHtml(d.id)}" aria-label="${isCompared ? "移出对比" : "加入对比"} ${escapeHtml(d.name)}" aria-pressed="${isCompared}">
              <mdui-icon name="${isCompared ? "check_circle" : "compare_arrows"}" aria-hidden="true"></mdui-icon>
            </button>
            <button class="round-action" type="button" data-action="copy-link" data-id="${escapeHtml(d.id)}" aria-label="复制本页链接">
              <mdui-icon name="link" aria-hidden="true"></mdui-icon>
            </button>
          </div>
          <div class="detail-meta-strip">
            <div class="dms-item"><div class="dms-label">LATEST</div><div class="dms-value">${displayVersion(d)}</div></div>
            <div class="dms-item"><div class="dms-label">RELEASED</div><div class="dms-value">${displayLatestDate(d)}</div></div>
            <div class="dms-item"><div class="dms-label">FIRST RELEASE</div><div class="dms-value">${escapeHtml(d.first_release || "待核实")}</div></div>
            <div class="dms-item"><div class="dms-label">MODEL</div><div class="dms-value">${escapeHtml(modelLabel(d.release_model))}</div></div>
            <div class="dms-item"><div class="dms-label">DATA AS OF</div><div class="dms-value">${escapeHtml(d.data_as_of || DATA_AS_OF)}</div></div>
          </div>
        </header>

        <div class="detail-layout">
          <div class="detail-main">
            <section class="detail-section" id="intro">
              <div class="eyebrow">WHAT IT IS</div>
              <h2>它是什么，适合谁</h2>
              ${(I18N.lang === "en" || I18N.lang === "fi") && !d.__translated ? `<p class="prose localized-profile-summary">${escapeHtml(localizedSummary(d))}</p>` : ""}
              <div class="prose">
                <p class="lead">${paragraphs[0]}</p>
                ${paragraphs.slice(1).map((p) => `<p>${p}</p>`).join("")}
              </div>
            </section>

            <section class="detail-section" id="highlights">
              <div class="eyebrow">SIGNATURE</div>
              <h2>核心特色</h2>
              <div class="highlight-grid">
                ${(d.highlights || []).map((item, index) => `<div class="highlight-item"><span class="hi-num">0${index + 1}</span><p>${escapeHtml(item)}</p></div>`).join("")}
              </div>
            </section>

            <section class="detail-section" id="tradeoffs">
              <div class="eyebrow">TRADE-OFFS</div>
              <h2>优点与代价</h2>
              <div class="pros-cons">
                <div class="pc-card pros"><h3><mdui-icon name="add_circle" aria-hidden="true"></mdui-icon>更适合</h3><ul>${(d.pros || []).map((p) => `<li>${escapeHtml(p)}</li>`).join("")}</ul></div>
                <div class="pc-card cons"><h3><mdui-icon name="remove_circle" aria-hidden="true"></mdui-icon>需要接受</h3><ul>${(d.cons || []).map((p) => `<li>${escapeHtml(p)}</li>`).join("")}</ul></div>
              </div>
            </section>

            <section class="detail-section" id="facts">
              <div class="eyebrow">THE SPEC SHEET</div>
              <h2>核心信息</h2>
              <div class="spec-columns">
                <mdui-list class="spec-list">
                  ${specRow("ID", `<span class="mono">${escapeHtml(d.id)}</span>`)}
                  ${specRow("派系归属", `${familyBadge(d)}${d.family === "ubuntu" ? ` <span style="font-size:9.5px;color:var(--atlas-muted)">Debian 子派系</span>` : ""}`)}
                  ${specRow("次级标签", escapeHtml(secondary))}
                  ${specRow("上游项目", escapeHtml(d.upstream))}
                  ${specRow("基于上游自", d.based_on_since ? `${escapeHtml(d.based_on_since)}${(I18N.lang === "zh-CN" || I18N.lang === "zh-TW") ? " 年" : ""}` : I18N.translate("—（独立开发）"))}
                  ${specRow("首次发布", displayMaybe(d.first_release))}
                  ${specRow("最新版本", displayVersion(d))}
                  ${specRow("最新发布日期", displayLatestDate(d))}
                  ${specRow("发布模式", escapeHtml(modelLabel(d.release_model)))}
                  ${specRow("发布周期", escapeHtml(d.release_cycle))}
                  ${specRow("维护状态", `${statusBadge(d)}<br><span style="font-size:10px;color:var(--atlas-muted)">${escapeHtml(d.status_note)}</span>`)}
                  ${specRow("维护者类型", escapeHtml(maintainerLabel(d.maintainer_type)))}
                  ${specRow("维护者", escapeHtml(d.maintainer))}
                  ${specRow("创始人", displayMaybe(d.founder))}
                  ${specRow("创立年份", displayMaybe(d.founded_year))}
                  ${specRow("所属组织", displayMaybe(d.org))}
                </mdui-list>
                <mdui-list class="spec-list">
                  ${specRow("包管理器", escapeHtml(d.package_manager), { mono: true })}
                  ${specRow("更新命令", `<code>${escapeHtml(d.update_command)}</code>`)}
                  ${specRow("图形更新器", escapeHtml(d.gui_updater))}
                  ${specRow("初始化系统", escapeHtml(d.init_system))}
                  ${specRow("默认桌面", escapeHtml(desktopText(d)))}
                  ${specRow("支持架构", escapeHtml((d.supported_arch || []).join((I18N.lang === "zh-CN" || I18N.lang === "zh-TW") ? "、" : ", ")))}
                  ${specRow("主许可证", escapeHtml(d.license))}
                  ${specRow("开源纯度", escapeHtml(opennessLabel(d.openness)))}
                  ${specRow("商业版本", displayMaybe(d.commercial_edition))}
                  ${specRow("目标用户", escapeHtml(d.target_user))}
                  ${specRow("数据截至", escapeHtml(d.data_as_of || DATA_AS_OF))}
                  ${specRow("核对状态", d.verified ? "已核对" : `<span class="pending">含待核实字段</span>`)}
                </mdui-list>
              </div>
              <div class="detail-tags">
                ${(d.tags || []).map((tag) => `<mdui-chip variant="outlined">${escapeHtml(tagLabel(tag))}</mdui-chip>`).join("")}
              </div>
            </section>

            <section class="detail-section" id="similar">
              <div class="eyebrow">NEARBY ORBITS</div>
              <h2>相似替代</h2>
              <div class="similar-grid">
                ${(d.similar || []).map((id) => {
                  const item = BY_ID.get(id);
                  if (!item) return "";
                  return `<a class="similar-card family-${escapeHtml(item.family)}" href="#/distro/${encodeURIComponent(item.id)}">
                    ${logoMarkup(item, "mini-badge")}
                    <span class="sc-info"><b>${escapeHtml(item.name)}</b><span>${hasDistinctZh(item) ? `${escapeHtml(item.name_zh)} · ` : ""}${escapeHtml(familyName(item.family))}</span></span>
                  </a>`;
                }).join("")}
              </div>
            </section>

            <section class="detail-section" id="links">
              <div class="eyebrow">OUTBOUND</div>
              <h2>外链与社区</h2>
              ${links.length ? `<div class="link-grid">${links.map(([, label, icon, url]) => linkCard("", label, icon, url)).join("")}</div>` : `<p class="prose"><span class="pending">暂无可用外链，待核实。</span></p>`}
            </section>

            <nav class="prev-next" aria-label="上一个 / 下一个发行版">
              ${prev ? `<a class="pn-link prev" href="#/distro/${encodeURIComponent(prev.id)}"><small>${(I18N.lang === "zh-CN" || I18N.lang === "zh-TW") ? "← 上一个" : "← Previous"}</small><b>${escapeHtml(prev.name)}</b></a>` : `<span></span>`}
              ${next ? `<a class="pn-link next" href="#/distro/${encodeURIComponent(next.id)}"><small>${(I18N.lang === "zh-CN" || I18N.lang === "zh-TW") ? "下一个 →" : "Next →"}</small><b>${escapeHtml(next.name)}</b></a>` : `<span></span>`}
            </nav>

            <div class="data-disclaimer">
              <mdui-icon name="update" aria-hidden="true"></mdui-icon>
              <span>${I18N.lang === "zh-CN" || I18N.lang === "zh-TW" ? `数据截至 ${escapeHtml(d.data_as_of || DATA_AS_OF)}，如有出入以官方为准。${d.verified ? "" : " 标注「待核实」的版本或日期尚未得到官方来源确认。"}` : `Data as of ${escapeHtml(d.data_as_of || DATA_AS_OF)}; refer to official sources.${d.verified ? "" : " Fields marked Unverified are not confirmed by an official source."}`}</span>
            </div>
          </div>

          <aside class="detail-aside" aria-label="快速信息与目录">
            <div class="aside-card">
              <h3>QUICK READ</h3>
              <div class="aside-big">${escapeHtml(d.name_zh)}</div>
              <p>${escapeHtml(d.status_note)}</p>
              <div class="aside-list">
                <div><span>派系</span><span>${escapeHtml(family.name)}</span></div>
                <div><span>首版</span><span>${escapeHtml(d.first_release || "待核实")}</span></div>
                <div><span>最新</span><span>${displayVersion(d)}</span></div>
                <div><span>包管理</span><span>${escapeHtml(platformLabel(packageKey(d)))}</span></div>
                <div><span>维护者</span><span>${escapeHtml(d.maintainer)}</span></div>
                <div><span>知名度</span><span>${popularityPips(d.popularity)}</span></div>
              </div>
            </div>
            <div class="aside-card">
              <h3>ON THIS PAGE</h3>
              <nav class="aside-toc" aria-label="页面目录">
                <a href="#intro">它是什么</a>
                <a href="#highlights">核心特色</a>
                <a href="#tradeoffs">优点与代价</a>
                <a href="#facts">核心信息</a>
                <a href="#similar">相似替代</a>
                <a href="#links">外链与社区</a>
              </nav>
            </div>
            <div class="aside-card aside-cta">
              <h3>KEEP EXPLORING</h3>
              <a class="primary-btn" href="#/family/${escapeHtml(d.family)}">回到 ${escapeHtml(family.name)}</a>
              <a class="ghost-btn" href="#/all">全量档案</a>
            </div>
          </aside>
        </div>
      </article>
      ${quoteInlineHTML("detail")}
    `;
  }

  /* ---------- 页面：关于 ---------- */
  function renderAboutPage() {
    const stats = countStats();
    const copy = ((window.ABOUT_I18N || {})[I18N.lang]) || ((window.ABOUT_I18N || {})["zh-CN"]);
    if (!copy) return "";
    const repo = escapeHtml(externalUrl(AUTHOR.repo));
    const network = escapeHtml(activeNetworkLabel());
    const fill = (value) => String(value || "")
      .replaceAll("{{total}}", String(stats.total))
      .replaceAll("{{eol}}", String(stats.eol))
      .replaceAll("{{unverified}}", String(DATA.filter((d) => !d.verified).length))
      .replaceAll("{{repo}}", repo)
      .replaceAll("{{network}}", network);
    return `
      <header class="about-hero">
        <div>
          <div class="eyebrow">ABOUT THE ATLAS</div>
          <h1>${fill(copy.hero_title)}</h1>
          <p>${fill(copy.hero_intro)}</p>
        </div>
        <div class="about-index">
          <div><b>${stats.total}</b><span>${escapeHtml(copy.stat_labels[0])}</span></div>
          <div><b>5</b><span>${escapeHtml(copy.stat_labels[1])}</span></div>
          <div><b>${stats.eol}</b><span>${escapeHtml(copy.stat_labels[2])}</span></div>
          <div><b>${DATA.filter((d) => !d.verified).length}</b><span>${escapeHtml(copy.stat_labels[3])}</span></div>
        </div>
      </header>

      ${quoteInlineHTML("about")}

      <div class="about-grid">
        <section class="about-card full">
          <div class="author-card">
            <div class="author-avatar" id="authorAvatar" aria-hidden="true">
              <span class="author-avatar-letter">E</span>
              <img class="author-avatar-img" id="authorAvatarImg" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer">
            </div>
            <div class="author-copy">
              <div class="eyebrow">AUTHOR / MAINTAINER</div>
              <h2 id="authorName">elyezyc</h2>
              <div class="author-role">${escapeHtml(copy.author_role)}</div>
              <p id="authorBio">${escapeHtml(copy.author_bio)}</p>
              <div class="author-links">
                <a href="${escapeHtml(externalUrl(AUTHOR.github))}" target="_blank" rel="noopener noreferrer"><mdui-icon name="code" aria-hidden="true"></mdui-icon>GitHub @elyezyc</a>
                <a href="mailto:${escapeHtml(AUTHOR.email)}"><mdui-icon name="mail" aria-hidden="true"></mdui-icon>${escapeHtml(AUTHOR.email)}</a>
                <a href="${escapeHtml(gravatarProfileUrl())}" target="_blank" rel="noopener noreferrer"><mdui-icon name="account_circle" aria-hidden="true"></mdui-icon>${NETWORK.useCN ? "Cravatar" : "Gravatar"}</a>
                <a href="${repo}" target="_blank" rel="noopener noreferrer"><mdui-icon name="merge_type" aria-hidden="true"></mdui-icon>${escapeHtml(copy.pr_label)}</a>
                <button class="author-network-chip" type="button" data-action="open-network-settings"><mdui-icon name="public" aria-hidden="true"></mdui-icon>${fill(copy.network_label)}</button>
              </div>
              <p class="author-avatar-note" id="authorAvatarNote">${escapeHtml(copy.avatar_note)}</p>
            </div>
          </div>
        </section>

        <section class="about-card">
          <div class="eyebrow">DATA SOURCES</div>
          <h2>${escapeHtml(copy.data_title)}</h2>
          ${copy.data.map((p) => `<p>${fill(p)}</p>`).join("")}
        </section>

        <section class="about-card">
          <div class="eyebrow">DISCLAIMER</div>
          <h2>${escapeHtml(copy.disclaimer_title)}</h2>
          ${copy.disclaimer.map((p) => `<p>${fill(p)}</p>`).join("")}
        </section>

        <section class="about-card">
          <div class="eyebrow">LICENSE</div>
          <h2>${escapeHtml(copy.license_title)}</h2>
          ${copy.license.map((p) => `<p>${fill(p)}</p>`).join("")}
        </section>

        <section class="about-card">
          <div class="eyebrow">CONTRIBUTE</div>
          <h2>${escapeHtml(copy.contribute_title)}</h2>
          ${copy.contribute.map((p) => `<p>${fill(p)}</p>`).join("")}
          <p><a class="ghost-btn" href="${repo}" target="_blank" rel="noopener noreferrer">${escapeHtml(copy.repo_cta)}</a></p>
        </section>

        <section class="about-card full">
          <div class="eyebrow">CHANGELOG</div>
          <h2>${escapeHtml(copy.changelog_title)}</h2>
          <div class="changelog">
            ${copy.changelog.map((entry) => `<div class="changelog-item"><time>${escapeHtml(entry.date)}</time><div><b>${escapeHtml(entry.title)}</b>${entry.paragraphs.map((p) => `<p>${fill(p)}</p>`).join("")}</div></div>`).join("")}
          </div>
        </section>

        <section class="about-card full">
          <div class="eyebrow">FAQ</div>
          <h2>${escapeHtml(copy.faq_title)}</h2>
          <div class="about-faq">
            <mdui-collapse>
              ${copy.faq.map((item, i) => `<mdui-collapse-item value="q${i + 1}">
                <mdui-list-item slot="header" rounded>${escapeHtml(item.q)}<mdui-icon slot="end-icon" name="expand_more"></mdui-icon></mdui-list-item>
                <div class="faq-answer">${fill(item.a)}</div>
              </mdui-collapse-item>`).join("")}
            </mdui-collapse>
          </div>
        </section>
      </div>
    `;
  }

  function renderSubmitPage() {
    return `
      <header class="page-head submit-head">
        <div>
          <div class="eyebrow">CONTRIBUTE TO THE ATLAS</div>
          <h1>投稿发行版</h1>
          <p>告诉我们一个值得收录的 Linux 发行版。提交后会进入人工审核队列；通过后写入数据库，并出现在全量档案、派系页与搜索中。</p>
        </div>
        <div class="head-aside"><span>REVIEWED BY A HUMAN</span><span>Ed25519 ADMIN DESK</span></div>
      </header>
      <div class="submit-layout">
        <form id="submitForm" class="submit-form" novalidate>
          <div class="hp-field" aria-hidden="true"><label>Website<input name="website_url" type="text" tabindex="-1" autocomplete="off"></label></div>
          <div class="form-grid">
            <label class="field"><span>发行版名称 <b>*</b><small>英文名，例如 “NixOS”</small></span><input name="name" required maxlength="90" autocomplete="off"></label>
            <label class="field"><span>中文名<small>可选</small></span><input name="name_zh" maxlength="90" autocomplete="off"></label>
            <label class="field"><span>所属派系 <b>*</b></span><select name="family" required>${FAMILY_ORDER.map((key) => `<option value="${key}">${escapeHtml(FAMILIES[key].name)}</option>`).join("")}</select></label>
            <label class="field"><span>上游项目 <b>*</b><small>独立开发也请写明</small></span><input name="upstream" required maxlength="180" autocomplete="off"></label>
            <label class="field"><span>首次发布年份</span><input name="first_release" maxlength="20" inputmode="numeric" placeholder="2004"></label>
            <label class="field"><span>包管理器</span><input name="package_manager" maxlength="200" placeholder="apt / dpkg, pacman…"></label>
            <label class="field"><span>官网</span><input name="official_site" type="url" maxlength="500" placeholder="https://"></label>
            <label class="field"><span>代码仓库</span><input name="repo" type="url" maxlength="500" placeholder="https://"></label>
          </div>
          <label class="field"><span>简介 <b>*</b><small>至少 20 个字符，写清楚它是什么、和上游的关系</small></span><textarea name="intro" required minlength="20" maxlength="9000" rows="6"></textarea></label>
          <label class="field"><span>目标用户<small>可选</small></span><input name="target_user" maxlength="500" placeholder="面向谁？"></label>
          <div class="form-grid">
            <label class="field"><span>核心特色<small>每行一条</small></span><textarea name="highlights" rows="5"></textarea></label>
            <label class="field"><span>优点<small>每行一条</small></span><textarea name="pros" rows="5"></textarea></label>
            <label class="field"><span>需要接受的代价<small>每行一条</small></span><textarea name="cons" rows="5"></textarea></label>
            <label class="field"><span>标签<small>逗号分隔，如 桌面, 容器</small></span><input name="tags" maxlength="300" placeholder="桌面, 轻量"></label>
          </div>
          <div class="form-grid">
            <label class="field"><span>你的名字<small>可选</small></span><input name="submitter_name" maxlength="120" autocomplete="name"></label>
            <label class="field"><span>联系方式<small>邮箱或社交账号，可选</small></span><input name="contact" maxlength="200" autocomplete="email"></label>
          </div>
          <label class="field"><span>补充说明<small>可选</small></span><textarea name="note" rows="3" maxlength="1000"></textarea></label>
          <label class="consent ai-consent"><input type="checkbox" name="ai_assisted"> <span>本投稿有 AI 参与（生成、翻译或润色）</span></label>
          <label class="consent"><input type="checkbox" name="consent" required> <span>我确认以上信息来自可核对的公开资料，并同意进入人工审核。 <b>*</b></span></label>
          <div class="submit-actions">
            <button class="primary-btn" id="submitBtn" type="submit">提交投稿<mdui-icon name="arrow_forward" aria-hidden="true"></mdui-icon></button>
            <span id="submitHint" class="form-hint">需要 server.py 运行本站；静态文件服务器没有投稿 API。</span>
          </div>
          <div id="submitResult" class="submit-result" role="status" aria-live="polite" hidden></div>
        </form>
        <aside class="submit-aside">
          <div class="aside-card">
            <h3>HOW IT WORKS</h3>
            <ol class="submit-steps">
              <li><b>提交</b><span>填写名称、派系、上游与简介。</span></li>
              <li><b>审核</b><span>管理员用 Ed25519 密钥登录后台，检查来源与字段。</span></li>
              <li><b>发布</b><span>通过后写入 SQLite，刷新站点即可看到。</span></li>
            </ol>
          </div>
          <div class="aside-card">
            <h3>GOOD SUBMISSIONS</h3>
            <p>请附官网、代码仓库或发布公告；无法确认的版本和日期留空，不要猜测。新条目默认标记为「待核实」，审核通过也不会自动变成已核对。</p>
          </div>
          <div class="aside-card aside-cta">
            <h3>PREFER A PR?</h3>
            <p>也可以直接在 GitHub 提交数据变更。</p>
            <a class="ghost-btn" href="${escapeHtml(externalUrl(AUTHOR.repo))}" target="_blank" rel="noopener noreferrer">打开 GitHub 仓库 ↗</a>
          </div>
        </aside>
      </div>
    `;
  }

  function initSubmitPage() {
    const form = $("#submitForm");
    if (!form) return;
    const result = $("#submitResult");
    const button = $("#submitBtn");
    const hint = $("#submitHint");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      result.hidden = true;
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const lines = (key) => String(data.get(key) || "").split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
      const tags = String(data.get("tags") || "").split(/[,，、]/).map((s) => s.trim()).filter(Boolean);
      const payload = {
        name: String(data.get("name") || "").trim(),
        name_zh: String(data.get("name_zh") || "").trim(),
        family: String(data.get("family") || "").trim(),
        upstream: String(data.get("upstream") || "").trim(),
        first_release: String(data.get("first_release") || "").trim(),
        package_manager: String(data.get("package_manager") || "").trim(),
        official_site: String(data.get("official_site") || "").trim(),
        repo: String(data.get("repo") || "").trim(),
        intro: String(data.get("intro") || "").trim(),
        target_user: String(data.get("target_user") || "").trim(),
        highlights: lines("highlights"),
        pros: lines("pros"),
        cons: lines("cons"),
        tags,
        submitter_name: String(data.get("submitter_name") || "").trim(),
        contact: String(data.get("contact") || "").trim(),
        note: String(data.get("note") || "").trim(),
        ai_assisted: Boolean(form.elements.ai_assisted && form.elements.ai_assisted.checked),
        website_url: String(data.get("website_url") || "").trim()
      };
      button.disabled = true;
      hint.textContent = I18N.translate("正在提交…");
      try {
        const response = await fetch("/api/submissions", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload)
        });
        const body = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(body.error || `提交失败（${response.status}）`);
        result.hidden = false;
        result.className = "submit-result is-success";
        result.textContent = I18N.translate("投稿已提交，等待管理员审核。");
        form.reset();
        hint.textContent = I18N.translate("已进入审核队列。");
      } catch (error) {
        result.hidden = false;
        result.className = "submit-result is-error";
        result.textContent = error.message || "投稿失败，请稍后再试。";
        hint.textContent = I18N.translate("需要 server.py 运行本站；静态文件服务器没有投稿 API。");
      } finally {
        button.disabled = false;
      }
    });
  }

  function renderNotFound() {
    return `
      <div class="notfound-page">
        <div class="empty-state notfound-state">
          <div class="empty-art" aria-hidden="true">
            <span class="ea-circle one"></span><span class="ea-circle two"></span>
            <span class="ea-dot a"></span><span class="ea-dot b"></span><span class="ea-dot c"></span><span class="ea-slash"></span>
          </div>
          <div class="eyebrow">404 / LOST IN ORBIT</div>
          <h1>轨道未找到</h1>
          <p>这个地址没有对应的发行版或派系。可能是链接拼写有误，或条目已经改名。你可以回到首页，也可以先读一句 Linus。</p>
          <a class="primary-btn" href="#/">回到首页<mdui-icon name="arrow_forward" aria-hidden="true"></mdui-icon></a>
        </div>
        ${quoteNotFoundHTML()}
      </div>
    `;
  }

  /* ---------- 页面元信息 / 导航 ---------- */
  function localizedMetaDescription(route, fallback) {
    if (I18N.lang === "zh-CN") return fallback;
    const descriptions = {
      en: {
        home: "A searchable, filterable and comparable atlas of Linux distributions: Arch, Red Hat, Debian, Ubuntu and independent systems.",
        all: `${DATA.length} Linux distributions compared by family, first release, version, package manager and maintenance status.`,
        map: `A constellation of ${DATA.length} Linux distributions grouped by family, with Ubuntu as a Debian subfamily.`,
        about: "About DistroAtlas: sources, methodology, licensing, author and changelog."
      },
      fi: {
        home: "Haettava, suodatettava ja vertailtava Linux-jakelujen atlas: Arch, Red Hat, Debian, Ubuntu ja riippumattomat järjestelmät.",
        all: `${DATA.length} Linux-jakelua perheittäin, ensijulkaisun, version, paketinhallinnan ja ylläpitotilan mukaan.`,
        map: `${DATA.length} Linux-jakelun tähtikartta perheittäin; Ubuntu on Debianin alaperhe.`,
        about: "Tietoja DistroAtlasista: lähteet, menetelmä, lisenssi, tekijä ja muutosloki."
      },
      "zh-TW": {
        home: "可搜尋、可篩選、可比較的 Linux 發行版圖譜：Arch、Red Hat、Debian、Ubuntu 與獨立系統。",
        all: `依派系、首版年份、版本、套件管理器與維護狀態比較 ${DATA.length} 個 Linux 發行版。`,
        map: `${DATA.length} 個 Linux 發行版的派系星圖，Ubuntu 作為 Debian 子派系。`,
        about: "關於 DistroAtlas：資料來源、方法、授權、作者與更新日誌。"
      }
    };
    const set = descriptions[I18N.lang] || descriptions.en;
    if (route.name === "family") {
      const family = FAMILIES[route.key];
      if (family) return I18N.translate(family.desc);
    }
    if (route.name === "distro") {
      const d = BY_ID.get(route.id);
      if (d) return `${d.name} — Linux distribution profile, family, release and links.`;
    }
    return set[route.name] || fallback;
  }

  function updateMeta(route) {
    const description = document.querySelector('meta[name="description"]');
    let title = "DistroAtlas · Linux 发行版图谱";
    let desc = "一份可搜索、可筛选、可对比的 Linux 发行版百科图谱，覆盖 Arch、Red Hat、Debian、Ubuntu 与独立发行版。";

    if (route.name === "home") {
      title = "DistroAtlas · Linux 发行版图谱";
    } else if (route.name === "all") {
      title = "全量档案 · DistroAtlas";
      desc = `一屏对比 ${DATA.length} 个 Linux 发行版的派系、首版年份、版本、包管理器与维护状态。`;
    } else if (route.name === "map") {
      title = "完整星图 · DistroAtlas";
      desc = `把 ${DATA.length} 个 Linux 发行版按派系放在同一张星图上，节点显示品牌 Logo，Ubuntu 作为 Debian 的子派系。`;
    } else if (route.name === "family") {
      const family = FAMILIES[route.key];
      if (family) {
        title = `${family.name} · DistroAtlas`;
        desc = family.desc;
      } else {
        title = "未找到该派系 · DistroAtlas";
        desc = "这个派系地址不存在，可能已经改名或被移除。";
      }
    } else if (route.name === "distro") {
      const d = BY_ID.get(route.id);
      if (d) {
        title = (I18N.lang === "en" || I18N.lang === "fi" || d.name === d.name_zh) ? `${d.name} · DistroAtlas` : `${d.name} · ${d.name_zh} · DistroAtlas`;
        desc = `${d.name}（${d.name_zh}）：${clampText(String(d.intro).replace(/\s+/g, " "), 150)}`;
      } else {
        title = "未找到该发行版 · DistroAtlas";
        desc = "这个发行版地址不存在，可能已经改名或被移除。";
      }
    } else if (route.name === "about") {
      title = "关于本站 · DistroAtlas";
      desc = "DistroAtlas 的作者、数据来源、免责声明、开源许可与更新日志。";
    } else if (route.name === "submit") {
      title = "投稿发行版 · DistroAtlas";
      desc = "向 DistroAtlas 投稿一个新的 Linux 发行版。投稿会进入人工审核队列，通过后出现在全量档案中。";
    } else {
      title = "404 · DistroAtlas";
      desc = "这个地址没有对应的发行版或派系，可能拼写有误。";
    }

    document.title = I18N.title(title);
    if (description) description.setAttribute("content", I18N.lang === "zh-CN" ? desc : localizedMetaDescription(route, desc));
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute("content", document.documentElement.classList.contains("mdui-theme-dark") ? "#101413" : "#fbfaf6");
  }

  function updateNav() {
    const route = state.route;
    const current = route.name === "family" ? "" : route.name;
    $$("[data-nav]").forEach((link) => {
      if (link.dataset.nav === current) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    $$("[data-drawer-route]").forEach((link) => {
      const key = link.dataset.drawerRoute;
      const active = (key === "all" && route.name === "all" && !state.filters.fav) ||
        (key === "favorites" && route.name === "all" && state.filters.fav) ||
        (key === "home" && route.name === "home") ||
        (key === "map" && route.name === "map") ||
        (key === "about" && route.name === "about");
      link.toggleAttribute("active", active);
    });
    $$("[data-drawer-family]").forEach((link) => {
      link.toggleAttribute("active", route.name === "family" && link.dataset.drawerFamily === route.key);
    });
  }

  function updateSearchForRoute() {
    const input = $("#globalSearch");
    const clear = $("#searchClear");
    if (!input) return;
    if (isListRoute()) {
      input.value = state.filters.q;
    } else if (document.activeElement !== input) {
      input.value = "";
    }
    if (clear) clear.hidden = !input.value;
    closeSearchPopover();
  }

  /* ---------- 渲染入口 ---------- */
  async function handleRoute() {
    const seq = ++state.routeSeq;
    const route = parseRoute();
    const previous = state.route;
    state.route = route;
    state.filters = readFilters(route);
    destroyMapPage();
    closeAllLayers(true);

    const main = $("#main");
    if (!main) return;

    if (!state.firstRender) {
      main.classList.add("view-leave");
      await sleep(150);
      if (seq !== state.routeSeq) return;
    }

    let html = "";
    switch (route.name) {
      case "home": html = renderHome(); break;
      case "all": html = renderAllPage(); break;
      case "map": html = renderMapPage(); break;
      case "family": html = renderFamilyPage(route); break;
      case "distro": html = renderDetailPage(route); break;
      case "about": html = renderAboutPage(); break;
      case "submit": html = renderSubmitPage(); break;
      default: html = renderNotFound();
    }

    main.classList.remove("view-leave");
    const translationNote = I18N.translationNoticeHTML ? I18N.translationNoticeHTML() : "";
    main.innerHTML = networkNoticeHTML() + translationNote + html;
    state.firstRender = false;
    void main.offsetWidth;
    main.classList.remove("view-enter");
    main.classList.add("view-enter");
    setTimeout(() => main.classList.remove("view-enter"), 320);
    window.scrollTo(0, 0);
    updateProgress();

    if (isListRoute(route)) {
      refreshLibrary({ reveal: true, flip: false, sync: false });
    }

    updateNav();
    updateSearchForRoute();
    updateMeta(route);
    updateHeaderCounts();
    setupReveals(document);
    setupCountUps();
    setupParallax();
    if (route.name === "map") initMapPage();
    if (route.name === "submit") initSubmitPage();
    if (route.name === "about") loadAuthorAvatar();
    updateReviewFlags(previous, route);
    I18N.apply(main);
  }

  function updateReviewFlags(previous, route) {
    if (route.name === "all" || route.name === "family") {
      const sortSelect = $("#sortSelect");
      if (sortSelect) sortSelect.value = state.filters.sort;
    }
  }

  /* ---------- 动效 ---------- */
  let revealObserver = null;
  let countObserver = null;

  function setupReveals(root = document) {
    const items = $$(".reveal", root).filter((el) => !el.classList.contains("is-visible"));
    if (!items.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      }, { threshold: 0.06, rootMargin: "0px 0px -5% 0px" });
    }
    items.forEach((el) => revealObserver.observe(el));
  }

  function setupCountUps() {
    const items = $$(".count-up");
    if (!items.length) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => { el.textContent = Number(el.dataset.target || 0).toLocaleString("zh-CN"); });
      return;
    }
    if (!countObserver) {
      countObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          countUp(entry.target);
          countObserver.unobserve(entry.target);
        });
      }, { threshold: 0.45 });
    }
    items.forEach((el) => countObserver.observe(el));
  }

  function countUp(el) {
    const target = Number(el.dataset.target || 0);
    if (!Number.isFinite(target)) { el.textContent = "0"; return; }
    const duration = 800;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased).toLocaleString("zh-CN");
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  let parallaxFrame = 0;
  function setupParallax() {
    if (state.route && state.route.name === "distro") updateParallax();
  }

  function updateParallax() {
    if (!state.route || state.route.name !== "distro") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const hero = $(".detail-hero");
    if (!hero) return;
    const offset = Math.min(80, Math.max(0, window.scrollY * 0.14));
    hero.style.setProperty("--parallax", `${offset}px`);
  }

  /* ---------- 收藏 / 对比 ---------- */
  function updateHeaderCounts() {
    const compareCount = $("#compareCount");
    const favoritesCount = $("#favoritesCount");
    if (compareCount) {
      compareCount.textContent = String(state.compare.length);
      compareCount.hidden = state.compare.length === 0;
    }
    if (favoritesCount) {
      favoritesCount.textContent = String(state.favorites.size);
      favoritesCount.hidden = state.favorites.size === 0;
    }
    const favBtn = $("#favoritesBtn");
    if (favBtn) {
      const active = isListRoute() && state.filters && state.filters.fav;
      favBtn.setAttribute("aria-pressed", String(Boolean(active)));
      favBtn.setAttribute("aria-label", active ? "取消只看收藏" : "只看收藏");
    }
    const compareBtn = $("#compareBtn");
    if (compareBtn) {
      compareBtn.setAttribute("aria-label", `打开对比清单，已选 ${state.compare.length} 个`);
    }
  }

  function toggleFavorite(id) {
    if (!BY_ID.has(id)) return;
    if (state.favorites.has(id)) state.favorites.delete(id);
    else state.favorites.add(id);
    writeJSON("distroatlas.favorites", Array.from(state.favorites));
    updateHeaderCounts();
    $$(`[data-action="toggle-favorite"][data-id="${id}"]`).forEach((button) => {
      const active = state.favorites.has(id);
      button.classList.toggle("is-starred", active);
      button.setAttribute("aria-pressed", String(active));
      button.setAttribute("aria-label", `${active ? "取消收藏" : "收藏"} ${BY_ID.get(id).name}`);
      const icon = button.querySelector("mdui-icon");
      if (icon) icon.setAttribute("name", active ? "star" : "star_border");
    });
    if (isListRoute() && state.filters.fav) {
      refreshLibrary({ flip: true, sync: true });
    }
    showToast(state.favorites.has(id) ? "已加入收藏" : "已取消收藏");
  }

  function updateCompareButtons() {
    $$("[data-action='toggle-compare']").forEach((button) => {
      const id = button.dataset.id;
      const active = state.compare.includes(id);
      button.classList.toggle("is-compared", active);
      button.setAttribute("aria-pressed", String(active));
      const item = BY_ID.get(id);
      if (item) button.setAttribute("aria-label", `${active ? "移出对比" : "加入对比"} ${item.name}`);
      const icon = button.querySelector("mdui-icon");
      if (icon) icon.setAttribute("name", active ? "check_circle" : "compare_arrows");
    });
    updateHeaderCounts();
  }

  function toggleCompare(id) {
    if (!BY_ID.has(id)) return;
    if (state.compare.includes(id)) {
      state.compare = state.compare.filter((item) => item !== id);
      writeJSON("distroatlas.compare", state.compare);
      updateCompareButtons();
      if (!$("#compareLayer").hidden) renderCompare();
      showToast("已移出对比");
      return;
    }
    if (state.compare.length >= 4) {
      showToast("最多同时对比 4 个发行版");
      return;
    }
    state.compare.push(id);
    writeJSON("distroatlas.compare", state.compare);
    updateCompareButtons();
    if (state.compare.length >= 2) {
      hideToast();
      openCompare();
    } else {
      showToast("已加入对比，再选 1 个即可并排查看");
    }
  }

  function renderCompare() {
    const body = $("#compareBody");
    const hint = $("#compareHint");
    if (!body) return;
    const items = state.compare.map((id) => BY_ID.get(id)).filter(Boolean);
    if (hint) hint.textContent = items.length >= 2 ? `正在对比 ${items.length} 个发行版。` : "勾选 2–4 个发行版后即可并排查看核心字段。";

    if (items.length < 2) {
      body.innerHTML = `<div class="compare-empty"><div><strong>再选一个，就能并排看</strong>从卡片右上角的对比按钮，或详情页的操作区加入 2–4 个发行版。</div></div>`;
      return;
    }

    const rows = [
      ["派系", (d) => familyBadge(d)],
      ["维护状态", (d) => statusBadge(d)],
      ["首版年份", (d) => escapeHtml(d.first_release || "待核实")],
      ["最新版本", (d) => displayVersion(d)],
      ["最新发布日期", (d) => displayLatestDate(d)],
      ["发布模式", (d) => escapeHtml(modelLabel(d.release_model))],
      ["发布周期", (d) => escapeHtml(d.release_cycle)],
      ["包管理器", (d) => `<span class="mono">${escapeHtml(d.package_manager)}</span>`],
      ["更新命令", (d) => `<code style="font-size:10px">${escapeHtml(d.update_command)}</code>`],
      ["初始化系统", (d) => escapeHtml(d.init_system)],
      ["默认桌面", (d) => escapeHtml(desktopText(d))],
      ["支持架构", (d) => escapeHtml((d.supported_arch || []).join((I18N.lang === "zh-CN" || I18N.lang === "zh-TW") ? "、" : ", "))],
      ["维护者", (d) => escapeHtml(d.maintainer)],
      ["维护者类型", (d) => escapeHtml(maintainerLabel(d.maintainer_type))],
      ["许可证", (d) => escapeHtml(d.license)],
      ["开源纯度", (d) => escapeHtml(opennessLabel(d.openness))],
      ["商业版本", (d) => displayMaybe(d.commercial_edition)],
      ["知名度", (d) => popularityPips(d.popularity)],
      ["目标用户", (d) => escapeHtml(d.target_user)]
    ];

    body.innerHTML = `
      <div class="compare-scroll-hint">横向滑动查看全部 ${items.length} 个发行版 →</div>
      <div class="compare-table-wrap">
        <div class="compare-grid" style="--compare-cols:${items.length}">
          <div class="cg-head cg-label">字段</div>
          ${items.map((d) => `<div class="cg-head"><span class="cg-name">${escapeHtml(d.name)}</span>${hasDistinctZh(d) ? `<span class="cg-zh">${escapeHtml(d.name_zh)}</span>` : ""}<span class="cg-badge">${familyBadge(d)}</span><button class="icon-btn" type="button" data-action="remove-compare" data-id="${escapeHtml(d.id)}" aria-label="从对比中移除 ${escapeHtml(d.name)}" style="position:absolute;top:8px;right:8px;width:26px;height:26px"><mdui-icon name="close" aria-hidden="true"></mdui-icon></button></div>`).join("")}
          ${rows.map(([label, render]) => `<div class="cg-label">${escapeHtml(label)}</div>${items.map((d) => `<div>${render(d)}</div>`).join("")}`).join("")}
        </div>
      </div>
    `;
    I18N.apply(body);
  }

  /* ---------- 筛选面板 ---------- */
  function facetOptions(key) {
    const base = scopeData();
    const counts = new Map();
    for (const d of base) {
      for (const value of filterValues(d, key)) {
        counts.set(value, (counts.get(value) || 0) + 1);
      }
    }
    let options = Array.from(counts.entries()).map(([value, count]) => ({
      value,
      count,
      label: key === "family" && value === "ubuntu" ? "Ubuntu 系（Debian 子派系）" : facetLabel(key, value)
    }));

    if (key === "family") {
      options = options.sort((a, b) => FAMILY_ORDER.indexOf(a.value) - FAMILY_ORDER.indexOf(b.value));
    } else if (key === "status") {
      options = options.sort((a, b) => ["active", "lts", "dormant", "eol"].indexOf(a.value) - ["active", "lts", "dormant", "eol"].indexOf(b.value));
    } else if (key === "desktop") {
      options = options.sort((a, b) => {
        const ai = DESKTOP_ORDER.indexOf(a.value);
        const bi = DESKTOP_ORDER.indexOf(b.value);
        return (ai < 0 ? 999 : ai) - (bi < 0 ? 999 : bi) || b.count - a.count;
      });
    } else {
      options = options.sort((a, b) => b.count - a.count || new Intl.Collator("zh-Hans-CN").compare(a.label, b.label));
    }
    return options;
  }

  function filterGroupHTML(key, label) {
    if (key === "family" && state.route.name === "family") return "";
    const options = facetOptions(key);
    if (!options.length) return "";
    const selected = state.filters[key];
    return `
      <section class="filter-group">
        <div class="filter-group-head"><h3>${escapeHtml(label)}</h3><span>${options.length} 个选项</span></div>
        <div class="filter-options">
          ${options.map((option) => `<label class="filter-option ${key === "family" ? `family-${escapeHtml(option.value)}` : ""}">
            <input type="checkbox" data-filter="${key}" value="${escapeHtml(option.value)}" ${selected.has(option.value) ? "checked" : ""}>
            <span class="fo-check"><mdui-icon name="check" aria-hidden="true"></mdui-icon></span>
            <span>${escapeHtml(option.label)}</span><span class="fo-count">${option.count}</span>
          </label>`).join("")}
        </div>
      </section>
    `;
  }

  function renderFilterBody() {
    const body = $("#filterBody");
    if (!body) return;
    const scoped = state.route.name === "family";
    body.innerHTML = `
      <section class="filter-group">
        <div class="filter-group-head"><h3>收藏</h3><span>本地保存</span></div>
        <div class="filter-options">
          <label class="filter-option">
            <input type="checkbox" data-filter="fav" value="1" ${state.filters.fav ? "checked" : ""}>
            <span class="fo-check"><mdui-icon name="check" aria-hidden="true"></mdui-icon></span>
            <span>只看我的收藏</span><span class="fo-count">${state.favorites.size}</span>
          </label>
        </div>
      </section>
      ${filterGroupHTML("family", "派系")}
      ${filterGroupHTML("status", "维护状态")}
      ${filterGroupHTML("model", "发布模式")}
      ${filterGroupHTML("pkg", "包管理器")}
      ${filterGroupHTML("desktop", "默认桌面")}
      ${filterGroupHTML("maint", "维护者类型")}
      ${filterGroupHTML("openness", "开源纯度")}
      ${filterGroupHTML("arch", "支持架构")}
      ${filterGroupHTML("tag", "标签")}
      <p class="filter-note">${scoped ? "当前在派系页面内筛选，派系范围固定。" : "筛选条件可组合使用，并会同步到地址栏，刷新或分享链接都能还原。"}</p>
    `;
    I18N.apply(body);
  }

  function applyFiltersFromSheet() {
    const f = state.filters;
    f.q = (f.q || "").trim();
    f.family = new Set();
    f.status = new Set();
    f.model = new Set();
    f.pkg = new Set();
    f.desktop = new Set();
    f.maint = new Set();
    f.openness = new Set();
    f.arch = new Set();
    f.tag = new Set();
    f.fav = false;

    $$("input[data-filter]", $("#filterBody")).forEach((input) => {
      const key = input.dataset.filter;
      if (key === "fav") { f.fav = input.checked; return; }
      if (input.checked) f[key].add(input.value);
    });

    closeFilter();
    refreshLibrary({ flip: true, sync: true });
    const input = $("#globalSearch");
    if (input) input.value = f.q;
  }

  function clearAllFilters() {
    const f = state.filters;
    f.q = "";
    f.family.clear();
    f.status.clear();
    f.model.clear();
    f.pkg.clear();
    f.desktop.clear();
    f.maint.clear();
    f.openness.clear();
    f.arch.clear();
    f.tag.clear();
    f.fav = false;
    const input = $("#globalSearch");
    if (input) input.value = "";
    closeFilter();
    refreshLibrary({ flip: true, sync: true });
  }

  /* ---------- 图层管理 ---------- */
  function lockBody() {
    document.body.classList.add("is-locked");
  }

  function unlockBodyIfNeeded() {
    const filterLayer = $("#filterLayer");
    const compareLayer = $("#compareLayer");
    if ((!filterLayer || filterLayer.hidden) && (!compareLayer || compareLayer.hidden)) {
      document.body.classList.remove("is-locked");
    }
  }

  function openLayer(layer, focusSelector) {
    if (!layer) return;
    state.lastFocused = document.activeElement;
    const other = layer.id === "filterLayer" ? $("#compareLayer") : $("#filterLayer");
    if (other && !other.hidden) closeLayer(other, true);
    layer.hidden = false;
    lockBody();
    requestAnimationFrame(() => layer.classList.add("open"));
    setTimeout(() => {
      const target = focusSelector ? layer.querySelector(focusSelector) : layer.querySelector("button, a, input");
      if (target) target.focus();
    }, 130);
  }

  function closeLayer(layer, immediate = false) {
    if (!layer || layer.hidden) return;
    layer.classList.remove("open");
    const finish = () => {
      layer.hidden = true;
      unlockBodyIfNeeded();
      if (state.lastFocused && typeof state.lastFocused.focus === "function") {
        state.lastFocused.focus({ preventScroll: true });
      }
      state.lastFocused = null;
    };
    if (immediate) finish();
    else setTimeout(finish, 250);
  }

  function closeFilter() { closeLayer($("#filterLayer")); }

  function openFilter() {
    if (!isListRoute()) return;
    renderFilterBody();
    openLayer($("#filterLayer"), "#filterSheet button[data-close-sheet]");
  }

  function openCompare() {
    hideToast();
    renderCompare();
    openLayer($("#compareLayer"), "#compareDrawer button[data-close-compare]");
  }

  function closeAllLayers(immediate = false) {
    const filterLayer = $("#filterLayer");
    const compareLayer = $("#compareLayer");
    if (filterLayer) closeLayer(filterLayer, immediate);
    if (compareLayer) closeLayer(compareLayer, immediate);
    document.body.classList.remove("is-locked");
    document.body.classList.remove("search-open");
  }

  /* ---------- 主题 ---------- */
  function effectiveTheme(mode) {
    if (mode === "dark" || mode === "light") return mode;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(mode, animate = false) {
    if (!THEME_META[mode]) mode = "auto";
    state.theme = mode;
    const effective = effectiveTheme(mode);
    const html = document.documentElement;
    if (animate) {
      html.classList.add("theme-transition");
      setTimeout(() => html.classList.remove("theme-transition"), 340);
    }
    html.classList.remove("mdui-theme-light", "mdui-theme-dark", "mdui-theme-auto");
    html.classList.add(`mdui-theme-${effective}`);
    html.dataset.themeMode = mode;
    const meta = THEME_META[mode];
    const button = $("#themeBtn");
    const icon = $("#themeIcon");
    if (button) {
      const themeLabel = I18N.translate(meta.label);
      button.setAttribute("aria-label", I18N.translate("切换主题，当前{{label}}").replace("{{label}}", themeLabel));
      button.setAttribute("title", I18N.translate("主题：{{label}}").replace("{{label}}", themeLabel));
    }
    if (icon) icon.setAttribute("name", meta.icon);
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute("content", effective === "dark" ? "#101413" : "#fbfaf6");
  }

  function cycleTheme(event) {
    const current = THEME_META[state.theme] ? state.theme : "auto";
    const effective = effectiveTheme(current);
    const next = current === "auto"
      ? (effective === "dark" ? "light" : "dark")
      : current === "light" ? "dark" : "auto";
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const button = $("#themeBtn");
    const rect = button ? button.getBoundingClientRect() : null;
    const x = event && event.clientX ? event.clientX : rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = event && event.clientY ? event.clientY : rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    const apply = () => {
      writeJSON("distroatlas.theme", next);
      applyTheme(next, false);
    };
    if (document.startViewTransition && !reduced) {
      const transition = document.startViewTransition(apply);
      transition.ready.then(() => {
        const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 620, easing: "cubic-bezier(.22,.61,.36,1)", pseudoElement: "::view-transition-new(root)" }
        );
      }).catch(() => {});
    } else {
      applyTheme(next, true);
    }
    showToast(I18N.translate("主题：{{label}}").replace("{{label}}", I18N.translate(THEME_META[next].label)));
  }

  /* ---------- Toast / dialog ---------- */
  function hideToast() {
    const snackbar = $("#snackbar");
    if (snackbar && "open" in snackbar) snackbar.open = false;
    const fallback = $("#fallbackToast");
    if (fallback) fallback.hidden = true;
    clearTimeout(state.toastTimer);
  }

  function showToast(message) {
    message = I18N.translate(message);
    const snackbar = $("#snackbar");
    if (snackbar && "open" in snackbar) {
      snackbar.textContent = message;
      snackbar.open = true;
      return;
    }
    const fallback = $("#fallbackToast");
    if (!fallback) return;
    fallback.textContent = message;
    fallback.hidden = false;
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => { fallback.hidden = true; }, 2800);
  }

  function openDialog(id) {
    const dialog = document.getElementById(id);
    if (!dialog) return;
    if ("open" in dialog) {
      dialog.open = true;
    } else {
      dialog.setAttribute("open", "");
    }
  }

  /* ---------- 网络提示 / 网络设置 ---------- */
  function networkNoticeHTML() {
    if (!(NETWORK.useCN && NETWORK.mode === "auto" && NETWORK.detectedCN) || state.networkNoticeDismissed) {
      return "";
    }
    return `<div class="network-notice" role="status">
      <span class="nn-icon"><mdui-icon name="public" aria-hidden="true"></mdui-icon></span>
      <span class="nn-copy">${I18N.translate("检测到中国大陆时区（{{zone}}），已自动切换到国内镜像：GitHub 经 gh-proxy，头像走 Gravatar 镜像，MDUI CDN 使用国内节点。").replace("{{zone}}", escapeHtml(NETWORK.timeZone || I18N.translate("未知")))}</span>
      <span class="nn-actions">
        <button class="text-btn" type="button" data-action="open-network-settings">网络设置</button>
        <button class="icon-btn" type="button" data-action="dismiss-network-notice" aria-label="关闭网络镜像提示"><mdui-icon name="close" aria-hidden="true"></mdui-icon></button>
      </span>
    </div>`;
  }

  function dismissNetworkNotice() {
    state.networkNoticeDismissed = true;
    writeJSON("distroatlas.networkNoticeDismissed", true);
    const notice = $(".network-notice");
    if (notice) notice.remove();
    showToast("已关闭提示，可随时在「网络与镜像」中修改");
  }

  function renderNetworkSettings() {
    const body = $("#networkSettingsBody");
    if (!body) return;
    const mode = NETWORK.mode;
    const detected = NETWORK.detectedCN;
    const zone = NETWORK.timeZone || "未知";
    const active = activeNetworkLabel();
    const option = (value, title, desc) => `<label class="network-option">
      <input type="radio" name="networkMode" value="${value}" ${mode === value ? "checked" : ""}>
      <span class="network-option-copy"><b>${title}</b><small>${desc}</small></span>
    </label>`;
    body.innerHTML = `<div class="network-settings">
      <div class="network-status">
        <span>当前检测</span>
        <b>${detected ? I18N.translate("中国大陆时区") : I18N.translate("非中国大陆时区")} · ${escapeHtml(zone === "未知" ? I18N.translate("未知") : zone)}</b>
        <span>当前使用</span>
        <b>${active}</b>
      </div>
      <div class="network-options">
        ${option("auto", "自动（推荐）", "按浏览器时区判断：中国大陆使用镜像，其他地区使用官方源。不会发起 IP 定位请求。")}
        ${option("official", "始终使用官方源", "GitHub、Gravatar、jsDelivr 与发行版官网均使用官方地址。")}
        ${option("china", "始终使用中国镜像", "GitHub 经 gh-proxy，头像使用 Gravatar 镜像，MDUI CDN 使用国内节点。")}
      </div>
      <p class="network-warning">第三方镜像不保证可用。GitHub 登录、提交 PR 或涉及账号的操作请切回官方源；镜像只适合阅读与获取公开内容。</p>
      <div class="network-settings-actions">
        <button class="primary-btn" type="button" data-action="save-network-settings">保存并重新加载</button>
        <button class="text-btn" type="button" data-action="close-network-settings">取消</button>
        <a class="text-btn" href="${escapeHtml(externalUrl(AUTHOR.repo))}" data-github-url="${escapeHtml(AUTHOR.repo)}" target="_blank" rel="noopener noreferrer">打开仓库 ↗</a>
      </div>
    </div>`;
    I18N.apply(body);
  }

  function openNetworkSettings() {
    renderNetworkSettings();
    const dialog = document.getElementById("networkDialog");
    if (dialog && "fullscreen" in dialog) dialog.fullscreen = window.innerWidth <= 700;
    openDialog("networkDialog");
  }

  function saveNetworkSettings() {
    const checked = document.querySelector('input[name="networkMode"]:checked');
    const mode = checked ? checked.value : "auto";
    if (!["auto", "official", "china"].includes(mode)) return;
    writeJSON("distroatlas.networkMode", mode);
    localStorage.removeItem("distroatlas.networkNoticeDismissed");
    state.networkNoticeDismissed = false;
    const dialog = document.getElementById("networkDialog");
    if (dialog && "open" in dialog) dialog.open = false;
    showToast("网络设置已保存，正在重新加载…");
    setTimeout(() => location.reload(), 550);
  }

  function updateStaticNetworkLinks() {
    $$("[data-github-link]").forEach((link) => {
      if (!link.dataset.officialGithub) link.dataset.officialGithub = link.getAttribute("href") || "";
      const official = link.dataset.officialGithub;
      link.setAttribute("href", externalUrl(official));
      if (NETWORK.useCN) {
        link.setAttribute("title", "当前经 gh-proxy 镜像；登录或提交 PR 建议切换官方源");
      } else {
        link.removeAttribute("title");
      }
    });
  }

  /* ---------- 作者头像：Gravatar 官方 / 镜像自动测速 ---------- */
  function probeImage(url, timeout = 1600) {
    return new Promise((resolve) => {
      const image = new Image();
      let settled = false;
      const timer = setTimeout(() => finish(false), timeout);
      function finish(ok) {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        image.onload = null;
        image.onerror = null;
        resolve(ok ? url : null);
      }
      image.onload = () => finish(true);
      image.onerror = () => finish(false);
      image.referrerPolicy = "no-referrer";
      image.src = url;
    });
  }

  function firstLoaded(urls, timeout = 1600) {
    return new Promise((resolve) => {
      if (!urls.length) return resolve(null);
      let settled = false;
      let pending = urls.length;
      urls.forEach((url) => {
        probeImage(url, timeout).then((winner) => {
          pending -= 1;
          if (winner && !settled) {
            settled = true;
            resolve(winner);
          } else if (pending === 0 && !settled) {
            settled = true;
            resolve(null);
          }
        });
      });
    });
  }

  function avatarBatches() {
    const hash = AUTHOR.gravatarHash;
    const sources = GRAVATAR_MIRRORS.map((base) => `${base}${hash}?size=240&d=404`);
    const official = sources.filter((url) => /secure\.gravatar\.com|https:\/\/gravatar\.com/.test(url));
    const china = sources.filter((url) => !official.includes(url));
    const github = [
      `https://avatars.githubusercontent.com/u/104881710?v=4&s=240`
    ];
    if (NETWORK.useCN) github.unshift(`https://gh-proxy.com/https://avatars.githubusercontent.com/u/104881710?v=4&s=240`);
    github.push("assets/elyezyc-avatar.png");
    return {
      primary: NETWORK.useCN ? china : official,
      secondary: NETWORK.useCN ? official : [],
      github
    };
  }

  async function loadAuthorAvatar() {
    const wrap = document.getElementById("authorAvatar");
    const image = document.getElementById("authorAvatarImg");
    const note = document.getElementById("authorAvatarNote");
    if (!wrap || !image) return;

    if (!state.avatarWinner) {
      const batches = avatarBatches();
      const primary = firstLoaded(batches.primary, 1700);
      const secondary = firstLoaded(batches.secondary, 2000);
      const github = firstLoaded(batches.github, 1600);
      let winner = await primary;
      if (!winner) winner = await secondary;
      if (!winner) winner = await github;
      if (winner) state.avatarWinner = winner;
    }

    if (!state.avatarWinner) {
      if (note) note.textContent = "Gravatar 与镜像暂不可达，已显示文字徽章；可在「网络与镜像」中切换来源。";
      return;
    }

    const show = () => {
      image.classList.add("is-loaded");
      wrap.classList.add("has-avatar");
      if (note) {
        const source = state.avatarWinner;
        let host = "";
        try { host = new URL(source).hostname; } catch (e) {}
        const isLocal = source.indexOf("assets/elyezyc-avatar.png") >= 0;
        const isGithub = /avatars\.githubusercontent\.com|github\.com\/elyezyc\.png/i.test(source);
        if (isLocal) {
          note.textContent = I18N.translate("Gravatar 与远程头像均暂不可达，已使用本地缓存头像（源：GitHub）兜底。");
        } else if (isGithub) {
          note.textContent = NETWORK.useCN
            ? I18N.translate("Gravatar 官方与镜像暂不可达，已使用 GitHub 头像（经 gh-proxy）兜底。")
            : I18N.translate("Gravatar 官方与镜像暂不可达，已使用 GitHub 头像兜底。");
        } else if (NETWORK.useCN) {
          note.textContent = I18N.translate("头像已从 Gravatar 中国镜像（{{host}}）自动加载。").replace("{{host}}", host);
        } else {
          note.textContent = I18N.translate("头像已从 Gravatar 官方源（{{host}}）加载。").replace("{{host}}", host);
        }
      }
    };

    image.onload = show;
    image.onerror = () => {
      if (note) note.textContent = I18N.translate("头像加载失败，已显示文字徽章。");
      wrap.classList.remove("has-avatar");
    };
    image.src = state.avatarWinner;
    if (image.complete && image.naturalWidth > 0) show();
  }

  /* ---------- 进度 / 返回顶部 / 视差 ---------- */
  function updateProgress() {
    const bar = $("#readingProgress");
    if (!bar) return;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    bar.style.transform = `scaleX(${ratio})`;
  }

  function updateBackTop() {
    const button = $("#backTop");
    if (!button) return;
    const show = window.scrollY > 400;
    if (show && button.hidden) {
      button.hidden = false;
      requestAnimationFrame(() => button.classList.add("is-shown"));
    } else if (!show && !button.hidden) {
      button.classList.remove("is-shown");
      setTimeout(() => {
        if (window.scrollY <= 400) button.hidden = true;
      }, 260);
    }
  }

  function onScroll() {
    updateProgress();
    updateBackTop();
    if (!parallaxFrame) {
      parallaxFrame = requestAnimationFrame(() => {
        parallaxFrame = 0;
        updateParallax();
      });
    }
  }

  /* ---------- 事件绑定 ---------- */
  function bindEvents() {
    const menuBtn = $("#menuBtn");
    const drawer = $("#navDrawer");
    if (menuBtn && drawer) {
      menuBtn.addEventListener("click", () => { drawer.open = true; });
    }
    if (drawer) {
      drawer.addEventListener("click", (event) => {
        if (event.target.closest("a, mdui-list-item")) drawer.open = false;
      });
    }

    const themeBtn = $("#themeBtn");
    if (themeBtn) themeBtn.addEventListener("click", cycleTheme);

    const favoritesBtn = $("#favoritesBtn");
    if (favoritesBtn) {
      favoritesBtn.addEventListener("click", () => {
        if (!isListRoute()) {
          location.hash = "#/all?fav=1";
          return;
        }
        state.filters.fav = !state.filters.fav;
        syncListUrl();
        refreshLibrary({ flip: true });
      });
    }

    const compareBtn = $("#compareBtn");
    if (compareBtn) compareBtn.addEventListener("click", openCompare);

    const searchToggle = $("#searchToggle");
    if (searchToggle) {
      searchToggle.addEventListener("click", () => {
        if (document.body.classList.contains("search-open") && document.activeElement === $("#globalSearch")) {
          document.body.classList.remove("search-open");
          closeSearchPopover();
        } else {
          openSearch(true);
        }
      });
    }

    const searchInput = $("#globalSearch");
    if (searchInput) {
      searchInput.addEventListener("focus", () => {
        renderSearchPopover();
      });
      searchInput.addEventListener("input", () => {
        const clear = $("#searchClear");
        if (clear) clear.hidden = !searchInput.value;
        state.searchActive = 0;
        renderSearchPopover();
        clearTimeout(state.searchTimer);
        state.searchTimer = setTimeout(() => {
          if (isListRoute()) {
            state.filters.q = searchInput.value;
            refreshLibrary({ flip: true, sync: true });
          }
        }, 120);
      });
      searchInput.addEventListener("keydown", (event) => {
        const results = $$("[data-search-id]", $("#searchPopover"));
        if (event.key === "ArrowDown") {
          event.preventDefault();
          state.searchActive = Math.min(results.length - 1, state.searchActive + 1);
          renderSearchPopover();
          const active = $("[data-search-id].is-active", $("#searchPopover"));
          if (active) active.scrollIntoView({ block: "nearest" });
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          state.searchActive = Math.max(0, state.searchActive - 1);
          renderSearchPopover();
          const active = $("[data-search-id].is-active", $("#searchPopover"));
          if (active) active.scrollIntoView({ block: "nearest" });
        } else if (event.key === "Enter") {
          const active = results[state.searchActive];
          if (active) {
            event.preventDefault();
            navigateSearch(active.dataset.searchId);
          } else if (searchInput.value.trim()) {
            event.preventDefault();
            const q = searchInput.value.trim();
            closeSearchPopover();
            document.body.classList.remove("search-open");
            location.hash = `#/all?q=${encodeURIComponent(q)}`;
          }
        } else if (event.key === "Escape") {
          if (!$("#searchPopover").hidden) {
            event.preventDefault();
            closeSearchPopover();
          } else if (searchInput.value) {
            event.preventDefault();
            searchInput.value = "";
            if (isListRoute()) {
              state.filters.q = "";
              refreshLibrary({ flip: true, sync: true });
            }
            const clear = $("#searchClear");
            if (clear) clear.hidden = true;
          }
        }
      });
    }

    const searchClear = $("#searchClear");
    if (searchClear) {
      searchClear.addEventListener("click", () => {
        if (!searchInput) return;
        searchInput.value = "";
        searchClear.hidden = true;
        if (isListRoute()) {
          state.filters.q = "";
          refreshLibrary({ flip: true, sync: true });
        } else {
          renderSearchPopover();
        }
        searchInput.focus();
      });
    }

    const backTop = $("#backTop");
    if (backTop) {
      backTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      });
    }

    ["shortcutsBtn", "drawerShortcuts"].forEach((id) => {
      const button = document.getElementById(id);
      if (button) button.addEventListener("click", () => openDialog("shortcutsDialog"));
    });
    const dataNotesBtn = $("#dataNotesBtn");
    if (dataNotesBtn) dataNotesBtn.addEventListener("click", () => openDialog("dataNotesDialog"));
    const networkSettingsBtn = $("#networkSettingsBtn");
    if (networkSettingsBtn) networkSettingsBtn.addEventListener("click", openNetworkSettings);
    const drawerNetwork = $("#drawerNetwork");
    if (drawerNetwork) {
      drawerNetwork.addEventListener("click", openNetworkSettings);
      drawerNetwork.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openNetworkSettings();
        }
      });
    }

    const filterReset = $("#filterReset");
    if (filterReset) filterReset.addEventListener("click", clearAllFilters);
    const filterApply = $("#filterApply");
    if (filterApply) filterApply.addEventListener("click", applyFiltersFromSheet);

    const compareClear = $("#compareClear");
    if (compareClear) {
      compareClear.addEventListener("click", () => {
        state.compare = [];
        writeJSON("distroatlas.compare", state.compare);
        updateCompareButtons();
        renderCompare();
        showToast("对比清单已清空");
      });
    }

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("click", (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      if (target.closest("#langBtn, #drawerLanguage")) {
        event.preventDefault();
        openLanguageDialog();
      }
      const langOption = target.closest("button[data-lang]");
      if (langOption) {
        event.preventDefault();
        I18N.setLanguage(langOption.dataset.lang);
      }
    }, true);
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("change", handleChange);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      onScroll();
      if (state.route && state.route.name === "map" && mapActiveKey) updateMapZoom(mapActiveKey);
    }, { passive: true });
    window.addEventListener("hashchange", () => handleRoute());

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSchemeChange = () => {
      if (state.theme === "auto") applyTheme("auto", true);
    };
    if (media.addEventListener) media.addEventListener("change", onSchemeChange);
    else if (media.addListener) media.addListener(onSchemeChange);

    document.querySelectorAll("[data-close-sheet]").forEach((el) => {
      el.addEventListener("click", closeFilter);
    });
    document.querySelectorAll("[data-close-compare]").forEach((el) => {
      el.addEventListener("click", () => closeLayer($("#compareLayer")));
    });
  }

  function handleChange(event) {
    if (event.target.id === "sortSelect") {
      const value = event.target.value;
      if (!SORT_OPTIONS.some(([key]) => key === value)) return;
      // 让 MDUI 的 dropdown / 表单内部状态先完成收尾，再重建工具栏，避免移除它正在使用的节点
      setTimeout(() => {
        state.filters.sort = value;
        refreshLibrary({ flip: true, sync: true });
      }, 40);
    }
  }

  function handleDocumentClick(event) {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    if (!target.closest("#topSearchWrap") && !target.closest("#searchToggle")) {
      closeSearchPopover();
    }

    const removeCompare = target.closest("[data-action='remove-compare']");
    if (removeCompare) {
      removeFromCompare(removeCompare.dataset.id);
      return;
    }

    const searchItem = target.closest("[data-search-id]");
    if (searchItem) {
      navigateSearch(searchItem.dataset.searchId);
      return;
    }

    const languageOption = target.closest("button[data-lang]");
    if (languageOption) {
      I18N.setLanguage(languageOption.dataset.lang);
      return;
    }

    const action = target.closest("[data-action]");
    if (action) {
      const kind = action.dataset.action;
      if (kind === "toggle-favorite") { toggleFavorite(action.dataset.id); return; }
      if (kind === "toggle-compare") { toggleCompare(action.dataset.id); return; }
      if (kind === "open-filter") { openFilter(); return; }
      if (kind === "clear-filters") { clearAllFilters(); return; }
      if (kind === "open-network-settings") { openNetworkSettings(); return; }
      if (kind === "dismiss-network-notice") { dismissNetworkNotice(); return; }
      if (kind === "toggle-map-auto") { toggleMapAuto(); return; }
      if (kind === "map-overview") { stopMapAuto(); clearMapFocus(); return; }
      if (kind === "open-language") { openLanguageDialog(); return; }
      if (kind === "save-network-settings") { saveNetworkSettings(); return; }
      if (kind === "close-network-settings") {
        const dialog = document.getElementById("networkDialog");
        if (dialog && "open" in dialog) dialog.open = false;
        return;
      }
      if (kind === "new-quote") { rotateQuote(); return; }
      if (kind === "copy-quote") { copyQuote(); return; }
      if (kind === "copy-link") {
        const id = action.dataset.id;
        const url = `${location.origin}${location.pathname}#/distro/${encodeURIComponent(id)}`;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(() => showToast("链接已复制"), () => showToast("复制失败，请从地址栏复制"));
        } else {
          showToast("请从地址栏复制链接");
        }
        return;
      }
    }

    const filterRemove = target.closest("[data-remove-filter]");
    if (filterRemove) {
      const key = filterRemove.dataset.removeFilter;
      if (key === "q") {
        state.filters.q = "";
        const input = $("#globalSearch");
        if (input) input.value = "";
      } else if (key === "fav") {
        state.filters.fav = false;
      } else if (state.filters[key]) {
        state.filters[key].delete(filterRemove.dataset.value);
      }
      syncListUrl();
      refreshLibrary({ flip: true, sync: true });
      return;
    }

    const viewButton = target.closest("[data-view]");
    if (viewButton) {
      const view = viewButton.dataset.view;
      if (["cards", "table", "compact"].includes(view) && view !== state.filters.view) {
        state.filters.view = view;
        writeJSON("distroatlas.view", view);
        syncListUrl();
        refreshLibrary({ flip: false, sync: true });
      }
      return;
    }

    const sortButton = target.closest("[data-sort]");
    if (sortButton) {
      const sort = sortButton.dataset.sort;
      if (sort === "name-asc" && state.filters.sort === "name-asc") state.filters.sort = "name-desc";
      else if (sort === "name-asc") state.filters.sort = "name-asc";
      else state.filters.sort = sort;
      syncListUrl();
      refreshLibrary({ flip: true, sync: true });
      return;
    }

    const card = target.closest("[data-card-link]");
    if (card) {
      if (target.closest("a, button, input, select, textarea")) return;
      location.hash = card.dataset.cardLink;
    }
  }

  function trapFocus(event, container) {
    if (event.key !== "Tab" || !container) return;
    const focusable = $$('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', container)
      .filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function handleKeydown(event) {
    const filterLayer = $("#filterLayer");
    const compareLayer = $("#compareLayer");
    if (filterLayer && !filterLayer.hidden) {
      if (event.key === "Escape") { event.preventDefault(); closeFilter(); return; }
      trapFocus(event, $("#filterSheet"));
      return;
    }
    if (compareLayer && !compareLayer.hidden) {
      if (event.key === "Escape") { event.preventDefault(); closeLayer(compareLayer); return; }
      trapFocus(event, $("#compareDrawer"));
      return;
    }

    if (state.route && state.route.name === "map" && event.key === "Escape") {
      event.preventDefault();
      stopMapAuto();
      clearMapFocus();
      return;
    }

    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement && document.activeElement.tagName) ||
      (document.activeElement && document.activeElement.isContentEditable);

    if (event.key === "/" && !typing) {
      event.preventDefault();
      openSearch(true);
      return;
    }

    if (event.key === "?" && !typing) {
      event.preventDefault();
      openDialog("shortcutsDialog");
      return;
    }

    if (event.key === "Escape") {
      if (!$("#searchPopover").hidden) {
        closeSearchPopover();
        return;
      }
      const input = $("#globalSearch");
      if (document.activeElement === input) input.blur();
      document.body.classList.remove("search-open");
      return;
    }

    if (!typing) {
      if (event.key.toLowerCase() === "g") {
        if (state.gPending) {
          clearTimeout(state.gTimer);
          state.gPending = false;
          location.hash = "#/";
        } else {
          state.gPending = true;
          clearTimeout(state.gTimer);
          state.gTimer = setTimeout(() => { state.gPending = false; }, 900);
        }
        return;
      }
      if (state.gPending && event.key.toLowerCase() === "a") {
        event.preventDefault();
        state.gPending = false;
        location.hash = "#/all";
        return;
      }
      if (state.gPending && event.key.toLowerCase() === "h") {
        event.preventDefault();
        state.gPending = false;
        location.hash = "#/";
        return;
      }
      if ((event.key === "Enter" || event.key === " ") && document.activeElement && document.activeElement.matches("[data-card-link][tabindex]")) {
        event.preventDefault();
        location.hash = document.activeElement.dataset.cardLink;
        return;
      }
    }
  }

  /* ---------- 初始化 ---------- */
  function renderDrawerFamilies() {
    const host = $("#drawerFamilies");
    if (!host) return;
    host.innerHTML = ["arch", "rh", "debian", "other"].map((key) => {
      const family = FAMILIES[key];
      const count = DATA.filter((d) => d.family === key).length;
      const row = `<a class="drawer-family family-${key}" href="#/family/${key}" data-drawer-family="${key}">
        <span class="dot" aria-hidden="true"></span>${escapeHtml(family.name)}<span class="count">${count}</span>
      </a>`;
      if (key !== "debian") return row;
      const ubuntuCount = DATA.filter((d) => d.family === "ubuntu").length;
      return `${row}<a class="drawer-family drawer-family-child family-ubuntu" href="#/family/ubuntu" data-drawer-family="ubuntu">
        <span class="child-arrow" aria-hidden="true">↳</span>${escapeHtml(FAMILIES.ubuntu.name)}<span class="count">${ubuntuCount}</span>
      </a>`;
    }).join("");
    I18N.apply(host);
  }

  function updateLanguageButton() {
    const button = $("#langBtn");
    const current = I18N.LANGS.find((item) => item.code === I18N.lang);
    if (!button || !current) return;
    button.setAttribute("aria-label", `Language: ${current.label}`);
    button.title = `Language / 语言 / Kieli: ${current.label}`;
  }

  function openLanguageDialog() {
    const grid = $("#langGrid");
    if (grid) {
      $$("[data-lang]", grid).forEach((button) => {
        button.classList.toggle("is-active", button.dataset.lang === I18N.lang);
      });
    }
    const dialog = $("#languageDialog");
    if (dialog && "open" in dialog) dialog.open = true;
  }

  async function boot() {
    if (!DATA.length) {
      $("#main").innerHTML = `<div class="empty-state"><h1>数据未加载</h1><p>请确认 data.js 在 app.js 之前加载。</p></div>`;
      return;
    }

    applyTheme(state.theme, false);
    await hydrateApprovedDistros();
    updateStaticNetworkLinks();
    renderDrawerFamilies();
    const drawerTotal = $("#drawerTotal");
    if (drawerTotal) drawerTotal.textContent = String(DATA.length);
    updateHeaderCounts();
    updateCompareButtons();
    updateLanguageButton();
    I18N.apply(document.body);
    bindEvents();
    if (!location.hash) history.replaceState(null, "", "#/");

    // 首次渲染前显示 300ms 骨架屏
    await sleep(300);
    const skeleton = $("#initialSkeleton");
    if (skeleton) {
      skeleton.classList.add("is-fading");
      await sleep(100);
    }
    await handleRoute();
    if (state.route && state.route.name === "distro") updateParallax();
    updateProgress();
    updateBackTop();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();

/* ==========================================================================
   维护速记（给未来的自己）
   --------------------------------------------------------------------------
   1. 新增发行版
      - 在 data.js 的 DISTROS 数组末尾复制一条对象，id 必须唯一（slug）。
      - 所有必填字段保持同名；不确定的版本 / 日期填 null，并把 verified 设为 false。
      - similar 只能指向已经存在的 id；页面、路由、计数会自动更新，无需改渲染代码。
   2. 修改主题色
      - 主要色板在 styles.css 顶部的 .mdui-theme-light / .mdui-theme-dark 中，
        使用 MDUI 的 RGB 三元组变量（如 --mdui-color-primary-light: 0, 105, 92）。
      - 派系强调色在 .family-arch / .family-rh / .family-debian / .family-ubuntu /
        .family-other 中维护，卡片、徽章、时间轴会同步。
   3. 修改派系分类
      - 派系键为 arch / rh / debian / ubuntu / other；Ubuntu 在 UI 中作为 Debian 的子派系。新增一级派系需要同时改
        FAMILIES、FAMILY_ORDER、facet 过滤与颜色变量。
      - 只是增加次级标签时，把值加入该发行版的 secondary_families，并在 app.js 的
        SECONDARY_LABELS 中补中文标签即可。
   4. 提交新条目
      - 请向 https://github.com/elyezyc/DistroAtlas 提交 Pull Request；本地开发时按
        上述 1 的步骤修改 data.js，并确保 npm 之外没有任何构建依赖。
   ========================================================================== */
