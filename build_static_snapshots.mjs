// SPDX-License-Identifier: AGPL-3.0-or-later
// Regenerate static_data.<lang>.json after changing data/translations.
import fs from "node:fs";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = new URL(".", import.meta.url);
const load = (file, sandbox) => {
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(new URL(file, root), "utf8"), sandbox);
  return sandbox;
};

const baseWindow = {};
load("data.js", { window: baseWindow });
const translationsWindow = {};
load("translations.js", { window: translationsWindow });
const twWindow = {};
load("data.zh-TW.js", { window: twWindow });

const clone = (value) => JSON.parse(JSON.stringify(value));
const profileFields = ["intro", "highlights", "pros", "cons", "status_note", "target_user", "release_cycle"];
const metaFields = ["maintainer", "org", "founder", "upstream", "latest_version", "gui_updater", "default_desktop", "commercial_edition", "license", "update_command", "package_manager", "init_system"];

const snapshots = {
  "zh-CN": clone(baseWindow.DISTROS),
  "zh-TW": clone(twWindow.DISTROS)
};
for (const lang of ["en", "fi"]) {
  const items = clone(baseWindow.DISTROS);
  const profiles = translationsWindow.DISTRO_I18N[lang];
  const meta = translationsWindow.DISTRO_META_I18N[lang];
  for (const item of items) {
    const p = profiles[item.id];
    if (p) for (const key of profileFields) {
      if (p[key] !== undefined && p[key] !== null) item[key] = p[key];
    }
    for (const key of metaFields) {
      if (meta[key] && typeof item[key] === "string" && meta[key][item[key]]) item[key] = meta[key][item[key]];
    }
    if (meta.supported_arch && Array.isArray(item.supported_arch)) {
      item.supported_arch = item.supported_arch.map((v) => meta.supported_arch[v] || v);
    }
    if (meta.default_desktop && Array.isArray(item.default_desktop)) {
      item.default_desktop = item.default_desktop.map((v) => meta.default_desktop[v] || v);
    }
  }
  snapshots[lang] = items;
}
for (const [lang, items] of Object.entries(snapshots)) {
  fs.writeFileSync(new URL(`static_data.${lang}.json`, root), JSON.stringify(items, null, 2) + "\n");
  console.log(lang, items.length);
}
