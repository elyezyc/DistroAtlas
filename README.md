<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
# DistroAtlas · Linux 发行版图谱

一个纯静态的 Linux 发行版百科图谱：按 Arch、Red Hat、Debian、Ubuntu 与其他系分类，支持搜索、九组筛选、排序、三种视图、收藏与 2–4 个发行版并排对比。

- **作者 / 维护者**：[elyezyc](https://github.com/elyezyc)
- **仓库**：[github.com/elyezyc/DistroAtlas](https://github.com/elyezyc/DistroAtlas)
- **许可**：GNU Affero General Public License v3.0 or later（AGPL-3.0-or-later）
- **栈**：HTML + CSS + 原生 JavaScript（ES2020+），无构建工具、无前端框架。
- **UI**：MDUI 2.1.5 Web Components；默认官方 CDN，中国大陆模式自动切换国内镜像。图标字体与头像兜底资源本地自托管。
- **数据**：77 个发行版，全部收敛在 `data.js` 的 `DISTROS` 数组中。
- **路由**：Hash SPA，每个发行版、派系都有可直达、可刷新、可分享的 URL。Ubuntu 作为 Debian 的子派系展示，但仍保留 `#/family/ubuntu` 独立入口。
- **国际化**：简体中文、繁體中文、English、Suomi 四种语言；界面、发行版资料、投稿页与后台均已本地化。语言按钮在桌面顶栏，移动端在抽屉中；`/admin` 顶栏也有语言选择。切换后重新加载并保留当前 Hash。
- **翻译披露**：语言选择中标记 `SOURCE` / `MACHINE` / `AI`；非中文页面顶部显示 AI 或机器转换提示，并提供预填当前页面信息的 GitHub Issues 反馈链接。
- **Linus 一言**：本地英文原话随机展示，支持换一句与复制；首页使用完整卡片，内容页使用内联样式，404 使用大号展示，星图页不放置。
- **完整星图**：`#/map` 初始只显示 5 个派系主节点；悬停/点击派系会自动放大该簇、弹出派系卡片并逐点展开 77 个发行版 Logo。支持「自动巡游」与「返回总览」。
- **Logo**：使用 Simple Icons 的高质量品牌 SVG，构建时已本地化到 `assets/logos/`；未收录品牌使用首字母徽章。
- **头像**：作者 `elyezyc` 的 Gravatar 头像；自动测速官方源与多个镜像，GitHub 头像作最终兜底。

## 运行

需要 Python 3 和系统自带的 `ssh-keygen`；没有第三方 Python 依赖。

```bash
cd Linux介绍
python3 server.py --port 8000
# 站点：  http://127.0.0.1:8000/
# 投稿：  http://127.0.0.1:8000/#/submit
# 后台：  http://127.0.0.1:8000/admin
```

首次启动会创建 `distroatlas.db`（SQLite）。纯静态方式仍可运行：

```bash
python3 -m http.server 8000
```

但静态服务器没有投稿 API 和 `/admin` 后台，`#/submit` 会提示需要 `server.py`。`file://` 同样只能阅读前端。

## 数据库、投稿与后台

- 数据库：`distroatlas.db`，包含 `submissions`（待审 / 已通过 / 已拒绝）、`approved_distros`（已发布条目）、`entry_overrides`（按语言的条目编辑覆盖）、`auth_challenges`、`admin_sessions`。
- 投稿：`#/submit` 表单写入 `submissions`，公开接口为 `POST /api/submissions`，带限速、蜜罐和字段校验。表单包含「本投稿有 AI 参与（生成、翻译或润色）」声明；管理后台的编辑表单也支持同一字段，并在条目卡片和详情页显示 `AI` 标记。
- 审核：`/admin`，管理员获取一次性挑战，用本机 Ed25519 私钥签名后粘贴 `.sig` 登录；不保存密码。
- 通过后：仓库条目写入 `approved_distros`，站点启动时通过 `GET /api/distros?lang=…` 合并到 `DATA`，刷新即可在全量档案、派系页和搜索中出现。
- 编辑现有条目：`/admin` →「编辑条目」。可搜索内置 77 个条目或已通过投稿，按语言编辑并保存到 `entry_overrides`；站点会按当前语言合并覆盖。支持「还原」回到静态数据 / 已发布版本。
- 数据默认绑定本机 `127.0.0.1`。如果暴露到公网，请放在 HTTPS 反向代理后，并设置 `DISTROATLAS_SECURE_COOKIE=1`。
- 数据库备份：直接复制 `distroatlas.db`；SQLite 运行时还会生成 `-wal` / `-shm` 文件。

### 管理员密钥登录

允许登录的公钥是仓库根目录的 `ed25519.pub`（当前指纹以 `/admin` 页面显示为准）。私钥永远留在你的电脑上：

1. 打开 `/admin`，点击「获取挑战 / Get challenge」。
2. 在本机执行页面显示的命令，例如：

```bash
printf '%s' '<challenge>' > /tmp/distroatlas-challenge.txt
ssh-keygen -Y sign -n distroatlas -f ~/.ssh/id_ed25519 /tmp/distroatlas-challenge.txt
cat /tmp/distroatlas-challenge.txt.sig
```

3. 把 `.sig` 文件内容粘贴到页面，验证通过后获得 12 小时 HttpOnly 会话。

`ed25519.pub` 只包含公钥，可以公开；不要提交或分享对应私钥。管理员接口使用会话 cookie + CSRF 头；挑战 5 分钟过期且只能用一次。

## 文件结构

```text
index.html   页面外壳、网络模式引导、MDUI、抽屉/筛选/对比/设置浮层
server.py    Python 标准库服务器：静态、SQLite、投稿/编辑 API、Ed25519 管理登录
admin.html   管理后台（/admin）
admin.css    管理后台样式
admin.js     管理后台交互、挑战登录、审核、编辑条目
static_data.zh-CN.json / zh-TW / en / fi  后台编辑用的四语静态快照
build_static_snapshots.mjs  修改 data/translations 后重新生成后台快照
static_ids.json  内置发行版 ID 列表（防止投稿 ID 冲突）
ed25519.pub  管理员 Ed25519 公钥
styles.css   全部样式：主题变量、派系色、响应式、动效、reduced-motion
data.js      DISTROS 数据（在最前面）+ FAMILIES 派系元数据
data.zh-TW.js  繁體中文資料版本（zh-TW 時載入）
translations.js  English / Suomi 发行版介绍、优缺点、状态与元数据（en/fi 時載入）
app.js       路由、渲染、搜索、筛选、网络设置、Gravatar、Logo、动效
i18n.js      简体 / 繁體 / English / Suomi 界面词典与运行时本地化
about-i18n.js  「关于」页、更新日志与 FAQ 的四语副本
README.md    本文件
LICENSE      AGPL-3.0 许可证全文
assets/      本地头像兜底、Material Icons 字体、Simple Icons 品牌 SVG
distroatlas.db  运行时生成的 SQLite 数据库（不随仓库分发）
```

`index.html` 末尾按以下顺序引入：

1. MDUI global bundle（按网络策略选择官方源或中国镜像）
2. `data.js`
3. `app.js`

## 路由

| 路由 | 说明 |
|---|---|
| `#/` | 首页：Hero、统计、派系图谱、首版时间轴、编辑精选 |
| `#/family/:key` | 派系列表：`arch` / `rh` / `debian` / `ubuntu` / `other` |
| `#/distro/:id` | 发行版详情，例如 `#/distro/manjaro` |
| `#/all` | 全量档案，表格/卡片/紧凑列表三种视图 |
| `#/map` | 完整星图：先展示 5 个派系，悬停/点击放大；77 个 Logo 节点、Debian → Ubuntu 子分支、自动巡游 |
| `#/about` | 作者、数据来源、免责声明、许可与更新日志 |

列表页筛选会同步到 URL，例如：

```text
#/all?family=arch&status=active&sort=name-asc&view=cards
#/family/debian?status=lts&tag=privacy
```

刷新与浏览器前进/后退都会按当前 Hash 重新渲染。

## 网络与镜像

所有外部资源**默认使用官方地址**。只有当浏览器时区属于中国大陆（`Asia/Shanghai`、`Asia/Urumqi` 等）且模式为「自动」时，才会切换到中国镜像，并在页面顶部显示提示。

| 资源 | 官方默认 | 中国大陆镜像 |
|---|---|---|
| MDUI | `cdn.jsdelivr.net` | `cdn.staticfile.net` |
| GitHub 链接 | `github.com` | `gh-proxy.com` 前缀代理 |
| Gravatar 头像 | `secure.gravatar.com` / `gravatar.com` | `cn.gravatar.com`、WeAvatar、Cravatar、极客族 |

设置入口：

- 页面顶部自动切换提示里的「网络设置」
- 左侧抽屉「网络与镜像」
- 页脚「网络与镜像」
- 关于页作者信息里的「网络：官方源 / 中国镜像」

三种模式：

1. **自动（推荐）**：按浏览器时区判断，不使用 IP 定位。
2. **始终使用官方源**：GitHub、Gravatar、jsDelivr 与发行版官网均走官方地址。
3. **始终使用中国镜像**：适合官方源不可达时手动切换。

语言切换入口：

- 桌面顶栏的翻译按钮
- 左侧抽屉「语言 / Language」
- 设置保存在 `localStorage`，切换后重新加载页面

> 第三方镜像只适合阅读与获取公开内容。**GitHub 登录、提交 PR 或涉及账号的操作请切回官方源**。设置保存后会重新加载页面，以便替换 CDN 与外部资源链接。

## 数据模型

`data.js` 末尾的 `LINUS_QUOTES` 保存 16 条英文名言（`en` / `source` / `year`），由前端随机抽取，不请求外部一言 API。

`i18n.js` 使用中文源文作为 key，覆盖 `zh-CN` / `zh-TW` / `en` / `fi`；语言偏好保存在 `distroatlas.lang`，切换时重新加载页面。`zh-TW` 会载入 `data.zh-TW.js`，发行版资料也是繁体；`en` / `fi` 会载入 `translations.js`，发行版介绍、优缺点、状态说明、维护者、上游、许可证、架构等字段已翻译。修改 `data.js` 后需同步更新 `data.zh-TW.js`、`translations.js`、`static_ids.json`，并运行 `node build_static_snapshots.mjs` 更新后台编辑用的四语快照。英 / 芬译文由模型辅助生成并按字段校验；用于阅读与快速比较，关键决策仍以各项目官方资料为准。

### 翻译状态与反馈

- 简体中文是源文。
- 繁體中文由 OpenCC 机器转换，标记为 `MACHINE`，尚未逐条人工校对。
- English / Suomi 为 AI 辅助翻译，标记为 `AI`。
- 站点非中文页面顶部、详情页作者信息下方、语言弹窗和 `/admin` 都会显示对应提示；链接会预填语言、页面 URL 和当前内容，直接打开 `https://github.com/elyezyc/DistroAtlas/issues/new?labels=translation`。
- 语言弹窗里每个语言选项也标注 `SOURCE` / `MACHINE` / `AI`。

每条数据必须包含以下字段：

- 基础：`id`、`name`、`name_zh`、`family`、`secondary_families`、`upstream`、`based_on_since`
- 时间：`first_release`、`latest_version`、`latest_release_date`
- 发行：`release_model`、`release_cycle`
- 包管理：`package_manager`、`update_command`、`gui_updater`
- 系统：`init_system`、`default_desktop`、`supported_arch`
- 维护：`status`、`status_note`、`maintainer_type`、`maintainer`
- 作者：`founder`、`founded_year`、`org`
- 开源：`license`、`openness`、`commercial_edition`
- 链接：`official_site`、`docs`、`download`、`repo`、`wiki`、`forum`、`chat`、`reddit`
- 内容：`intro`、`highlights`、`pros`、`cons`、`similar`、`target_user`
- 元数据：`tags`、`popularity`、`data_as_of`、`verified`

### 准确性约定

- 无法确认的版本号、日期、人物字段一律填 `null`，并令 `verified: false`。
- UI 会把空版本/日期显示为「待核实」，详情页顶部给出「待核实」徽章。
- 已终止项目保留在数据集中，用 `status: "eol"` 与 `status_note` 说明终止年份和原因。
- 有分类争议的条目在 `intro` 中解释取舍，例如 openSUSE 归「其他系」并带 `suse` 标签，Vanilla OS 2.0 归 Debian 系。
- 当前数据快照为 `2026-11-18`；版本生命周期参考项目官方发布页与公开生命周期数据。

## 新增发行版：站内投稿或 PR

首选 `#/submit` 站内投稿：填写表单后进入 SQLite 审核队列，管理员在 `/admin` 用 Ed25519 密钥登录并通过后，条目自动出现在站点。

如果希望直接改代码或补充完整数据，请向 **[elyezyc/DistroAtlas](https://github.com/elyezyc/DistroAtlas)** 提交 Pull Request：

1. Fork 仓库并创建分支。
2. 在 `data.js` 的 `DISTROS` 数组中追加一条对象。
3. 确保 `id` 唯一，`similar` 只指向已存在的 id。
4. 无法确认的字段填 `null`，`verified` 设为 `false`。
5. 本地用静态服务器检查卡片、筛选与详情页。
6. 提交 PR，并说明数据来源（官网、发布公告、Wiki 或生命周期页面）。
7. 如果该条目成为内置数据，更新 `static_ids.json` 并同步 `data.zh-TW.js` / `translations.js`。

示例字段：

```js
{
  id: "my-distro",            // 唯一 slug，会成为 #/distro/my-distro
  name: "My Distro",
  name_zh: "我的发行版",
  family: "arch",             // arch / rh / debian / ubuntu / other
  secondary_families: ["desktop"],
  // ...补齐其余字段
  similar: ["arch-linux"],    // 必须指向已存在的 id
  data_as_of: "2026-11-18",
  verified: false
}
```

页面会自动更新总数、派系计数、筛选选项、首页时间轴、搜索索引与详情路由，不需要改渲染代码。

如果 Simple Icons 收录了该品牌，可在 `data.js` 的 `LOGO_SLUGS` 中补一个 slug，并把对应 SVG 放到 `assets/logos/{slug}.svg`；没有收录时会自动显示首字母徽章。

## 修改主题色

主题变量位于 `styles.css` 顶部：

```css
.mdui-theme-light,
:root {
  --mdui-color-primary-light: 0, 105, 92;
  /* ... */
}

.mdui-theme-dark {
  --mdui-color-primary-dark: 126, 218, 202;
  /* ... */
}
```

MDUI 2 使用 RGB 三元组，不带 `rgb()`。派系强调色在 `.family-arch`、`.family-rh`、`.family-debian`、`.family-ubuntu`、`.family-other` 中维护。

## 修改派系

派系键固定为 `arch` / `rh` / `debian` / `ubuntu` / `other`；其中 Ubuntu 在 UI 中作为 Debian 的子派系，排在 Debian 之后并可单独进入。新增一级派系需要同时调整：

- `data.js` 的 `FAMILIES` 与 `FAMILY_ORDER`
- `styles.css` 的 `.family-*` 颜色变量与派系卡片样式
- `app.js` 的筛选、排序、图例与详情徽章逻辑

如果只是增加多维度标签，修改条目的 `secondary_families`，并在 `app.js` 的 `SECONDARY_LABELS` 中补中文标签即可。

## 交互与无障碍

- `/` 聚焦搜索，`?` 打开快捷键说明，`Esc` 关闭浮层/清空搜索，`G` 后接 `H` / `A` 回首页 / 全量档案。
- 所有筛选、视图、排序、收藏与对比状态均可在地址栏或 `localStorage` 中还原。
- 完整星图初始只显示 Linux 根与 5 个派系主节点；悬停/点击派系会自动缩放、弹出派系卡片并展开该簇的全部发行版 Logo。Ubuntu 簇通过虚线挂在 Debian 簇下。
- 星图提供「自动巡游」：每隔约 4 秒自动切换一个派系并放大；「返回总览」或 `Esc` 重置。移动端不缩放整张图，改为展开节点与底部派系卡片。
- 星图动画：主节点错位淡入、星点漂移/闪烁、派系放大、该簇节点逐个 pop、连线淡入、侧边/底部派系卡片弹出。
- 界面文案、导航、筛选、排序、状态、派系、标签、星图控件、名言控件、404、「关于」页长文（含更新日志与 FAQ）以及发行版介绍（简介、特色、优缺点、状态说明、目标用户、发布周期）均已本地化。
- Linus 名言为本地数据，不请求第三方一言 API；英文原文保留，Nvidia 等粗口以 `f***` 形式呈现。
- 卡片进入视口错位淡入、路由淡出淡入、筛选 FLIP、统计数字递增、详情 Hero 视差、返回顶部弹簧出现。
- 启用 `prefers-reduced-motion: reduce` 时关闭位移与视差，仅保留透明度/颜色变化。
- 键盘焦点有可见 focus ring；状态徽章同时使用圆点与文字；漂浮层有 `role="dialog"` 与基础焦点陷阱。

## 已知边界

- 外链、版本号和生命周期会变化；本站不是官方来源，生产决策前请核对官方公告。
- Gravatar / GitHub / jsDelivr 等外部服务可能被网络环境阻断；镜像会自动降级，但不保证始终可用。
- 发行版 Logo 来自 Simple Icons，并已本地化为 SVG；未收录品牌显示首字母徽章，不使用模糊的低分辨率 favicon。
- Material Icons 字体与全站样式已本地自托管；离线打开时仍可显示界面与图标，除非浏览器限制本地文件访问。
- 作者头像的镜像测速完全在浏览器端完成，不会把访问者数据发送到本站（本站无后端）。
- 作者头像的最终兜底为 `assets/elyezyc-avatar.png`（GitHub 头像快照），仅在 Gravatar 与远程头像均不可达时使用。

## 第三方资源

- **Material Icons**：Apache License 2.0，字体文件本地自托管于 `assets/material-icons.woff2`。
- **Simple Icons**：CC0-1.0，品牌 SVG 已本地化到 `assets/logos/`，仅用于识别发行版。
- **作者头像兜底**：`assets/elyezyc-avatar.png`，来自作者公开的 GitHub 头像，仅在 Gravatar 与远程头像均不可达时使用。
- 发行版 Logo 来自 Simple Icons 品牌图标库（本地化文件位于 `assets/logos/`）；名称、Logo 与商标归各自项目所有。

## 许可

本站代码、样式与结构化数据以 **GNU Affero General Public License v3.0 or later** 发布。完整许可证见 [LICENSE](LICENSE)。

通过网络使用本站在线版本的用户，可以从 [GitHub 仓库](https://github.com/elyezyc/DistroAtlas) 获取对应的完整源代码。发行版名称、Logo 与商标归各自项目所有。
