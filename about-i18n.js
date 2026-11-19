/* SPDX-License-Identifier: AGPL-3.0-or-later */
window.ABOUT_I18N = {
  "zh-CN": {
    "hero_title": "把一张发行版地图，<br><em>画得能核对。</em>",
    "hero_intro": "DistroAtlas 是一个静态的 Linux 发行版百科图谱：用派系、上游关系、包管理与维护状态组织 {{total}} 个系统，既收录正在活跃的项目，也保留已经终止的历史发行版。它不替你决定“最好的 Linux”，而是把取舍摊开，让选择有依据。Ubuntu 作为 Debian 的子派系，排在 Debian 之后。",
    "stat_labels": [
      "发行版条目",
      "派系分支",
      "已终止 EOL",
      "含待核实字段"
    ],
    "author_role": "作者与维护者 · Linux 用户 / 资料整理",
    "author_bio": "维护 DistroAtlas 的数据、前端与校对流程。关注 Linux 发行版谱系、桌面体验与开源软件的长期可持续性。",
    "avatar_note": "头像优先从 Gravatar 获取；不可达时自动切换镜像，GitHub 头像作最终兜底。Email 与头像关联同一 Gravatar 账号。",
    "pr_label": "提交 PR",
    "network_label": "网络：{{network}}",
    "repo_cta": "前往 GitHub 仓库 ↗",
    "data_title": "数据从哪里来",
    "data": [
      "条目信息优先取自各发行版官网、官方文档、发布公告、Wiki 与代码仓库；版本生命周期参考 <a href=\"https://endoflife.date/\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;text-underline-offset:3px\">endoflife.date</a> 等公开资料。所有外链指向项目官方或社区维护的页面。",
      "无法确认的版本号、日期与创始人信息不会猜测：字段留空，<code>verified</code> 设为 <code>false</code>，并在 UI 中显示「待核实」。已终止的发行版保留在数据集中，记录终止年份与原因。",
      "分类存在争议时会在简介中说明取舍。例如 openSUSE 主派系归入「其他系」并带 <code>suse</code> 标签；Vanilla OS 2.0 按实际 Debian 上游归入 Debian 系。",
      "发行版 Logo 使用 Simple Icons 品牌图标库，未收录时显示首字母徽章；作者头像与 Email 关联 Gravatar。外部资源默认使用官方源，只有检测到中国大陆时区或手动选择时才使用第三方镜像。"
    ],
    "disclaimer_title": "免责声明",
    "disclaimer": [
      "本站是个人整理的非官方资料库，与 Red Hat、Canonical、SUSE、Arch Linux 等项目的商标持有人没有隶属关系。发行版的名称、标识与商标归各自权利人所有。",
      "版本与维护状态随时可能变化。用于生产环境决策前，请回到官方发布说明、生命周期页面与安全公告核对。本站不构成任何形式的迁移、采购或安全建议。"
    ],
    "license_title": "开源许可",
    "license": [
      "本站代码、样式与结构化数据以 <strong>GNU Affero General Public License v3.0 or later</strong>（AGPL-3.0-or-later）发布。你可以运行、研究、修改与再分发，但衍生作品需以相同许可证开放源代码，并保留版权与许可证声明。",
      "发行版名称、Logo 与商标归各自项目所有；Logo 来自 Simple Icons 品牌图标库，缺少收录时使用首字母徽章，仅用于识别与介绍。",
      "如果你通过网络使用本站的在线版本，可从 <a href=\"{{repo}}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;text-underline-offset:3px\">GitHub 仓库</a> 获取对应的完整源代码。",
      "<a href=\"https://www.gnu.org/licenses/agpl-3.0.html\" target=\"_blank\" rel=\"noopener noreferrer license\" style=\"text-decoration:underline;text-underline-offset:3px\">阅读 AGPL-3.0 许可证全文 ↗</a>"
    ],
    "contribute_title": "投稿发行版",
    "contribute": [
      "通过站内投稿表单提交一个新的 Linux 发行版。表单会写入审核队列，管理员用 Ed25519 密钥进入后台审核；通过后条目写入数据库，并出现在全量档案、派系页与搜索中。",
      "请优先附上官网、代码仓库或发布公告。无法确认的版本与日期留空，新条目默认标记为「待核实」，通过审核也不会自动变成已核对。",
      "<a class=\"primary-btn\" href=\"#/submit\">打开投稿表单<mdui-icon name=\"arrow_forward\" aria-hidden=\"true\"></mdui-icon></a>",
      "也可以直接在 GitHub 提交数据变更：<a href=\"{{repo}}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;text-underline-offset:3px\">elyezyc/DistroAtlas</a>"
    ],
    "changelog_title": "更新日志",
    "changelog": [
      {
        "date": "2026-11-18",
        "title": "v1.0 · 图谱首次发布",
        "paragraphs": [
          "收录 {{total}} 个发行版，完成 Arch / RH / Debian / 其他四棵主树与 Ubuntu（Debian 子派系）分支、Hash 路由、搜索、九组筛选、三种视图、收藏与 2–4 个系统并排对比。数据侧保留 CentOS、Scientific Linux、Clear Linux、Knoppix 等终止或休眠项目，无法确认的版本与日期留空并标注「待核实」。",
          "视觉与交互包含完整星图（初始五派系、悬停/点击放大、节点展开、派系卡片、自动巡游）、Simple Icons 本地品牌 Logo、详情页 Logo 水印、Linus 英文名言（首页完整卡片、内容页内联、404 大号）、错位淡入、FLIP 筛选、数字递增、详情视差与 reduced-motion 降级。工程侧加入作者 elyezyc / Gravatar 头像与镜像、AGPL-3.0-or-later、简体 / 繁體 / English / Suomi 四种语言与发行版资料翻译、SQLite 投稿队列、AI 参与声明、按语言编辑现有条目与 Ed25519 密钥管理后台（/admin）、AI / 机器翻译披露与 GitHub Issues 反馈、官方源与中国镜像切换及设置提示、键盘快捷键、焦点管理、动态标题与 meta、替代文本。"
        ]
      }
    ],
    "faq_title": "常见问题",
    "faq": [
      {
        "q": "为什么 openSUSE 不在 RH 系？",
        "a": "“RH 系”在本图谱中特指以 RHEL / Fedora 为上游、使用 dnf/yum 传统的那一支。openSUSE 使用 zypper，与 SUSE 共享上游，因此归入「其他系」，并用 suse 标签保留其企业 Linux 身份。"
      },
      {
        "q": "为什么 Vanilla OS 归 Debian 而不是 Ubuntu？",
        "a": "Vanilla OS 1.0 基于 Ubuntu，但 2.0 “Orchid” 起转向 Debian unstable，并采用 ABRoot 不可变设计。本站按当前主版本的实际上游归档，同时在简介中保留这段归属变化。"
      },
      {
        "q": "「待核实」是什么意思？",
        "a": "表示该条目至少有一个版本号、日期或人物字段没有找到可靠的官方来源。我们宁可留空，也不编造。你可以在数据文件的对应对象中补齐字段，并把 verified 改为 true。"
      },
      {
        "q": "如何新增一个发行版？",
        "a": "优先使用站内「投稿发行版」表单，管理员审核通过后会自动进入全量档案、派系页与搜索。也可以向 <a href=\"{{repo}}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;text-underline-offset:3px\">github.com/elyezyc/DistroAtlas</a> 提交 Pull Request：在 data.js 的 DISTROS 数组中追加对象，确保 id 唯一，similar 指向已存在的 id，并同步 static_ids.json 与四语快照。"
      },
      {
        "q": "为什么 Ubuntu 在 Debian 后面单独成簇？",
        "a": "Ubuntu 直接基于 Debian，因此在本图谱中作为 Debian 的子派系展示：首页派系卡片紧跟在 Debian 之后，完整星图里以虚线连接到 Debian 簇。它仍然保留独立的 <code>#/family/ubuntu</code> 页面，点击即可进入 Ubuntu 系。"
      },
      {
        "q": "翻译是怎么处理的？",
        "a": "简体中文是源文；繁體中文由 OpenCC 机器转换；English / Suomi 为 AI 辅助翻译。非中文页面顶部、详情页和语言弹窗都会标注翻译状态，并链接到 GitHub Issues 反馈。"
      }
    ]
  },
  "en": {
    "hero_title": "A distro map,<br><em>drawn to be checked.</em>",
    "hero_intro": "DistroAtlas is a static atlas of Linux distributions: it organizes {{total}} systems by family, upstream relationships, package manager and maintenance status, including both active projects and retired historical distributions. It does not decide on “the best Linux” for you; it lays out the trade-offs so a choice has evidence. Ubuntu is shown as a Debian subfamily, after Debian.",
    "stat_labels": [
      "Distros",
      "Family branches",
      "EOL",
      "With unverified fields"
    ],
    "author_role": "Author & maintainer · Linux user / data curation",
    "author_bio": "Maintains DistroAtlas data, frontend and review workflow. Interested in Linux distribution lineage, desktop experience and the long-term sustainability of open-source software.",
    "avatar_note": "The avatar is fetched from Gravatar first; if unreachable, a mirror is used, with GitHub as the final fallback. Email and avatar share the same Gravatar account.",
    "pr_label": "Submit a PR",
    "network_label": "Network: {{network}}",
    "repo_cta": "Open the GitHub repository ↗",
    "data_title": "Where the data comes from",
    "data": [
      "Entries are sourced primarily from each distribution’s official website, documentation, release notes, wiki and code repository; lifecycle data references public sources such as <a href=\"https://endoflife.date/\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;text-underline-offset:3px\">endoflife.date</a>. External links point to official or community-maintained pages.",
      "Unverified versions, dates and founders are not guessed: fields stay blank, <code>verified</code> is set to <code>false</code>, and the UI shows “Unverified”. Retired distributions remain in the dataset with their end year and reason.",
      "Where taxonomy is disputed, the introduction explains the trade-off. For example, openSUSE is placed in the “Other” family with a <code>suse</code> tag; Vanilla OS 2.0 follows its actual Debian upstream and sits in the Debian family.",
      "Distro logos use the Simple Icons brand set; when a logo is missing, a letter badge is shown. The author avatar and email use Gravatar. External resources use official sources by default; third-party mirrors are used only when a mainland China timezone is detected or manually selected."
    ],
    "disclaimer_title": "Disclaimer",
    "disclaimer": [
      "DistroAtlas is an unofficial personal reference project and is not affiliated with the trademark holders of Red Hat, Canonical, SUSE, Arch Linux or other projects. Distribution names, marks and trademarks belong to their respective owners.",
      "Versions and maintenance status can change at any time. Before making production decisions, check the official release notes, lifecycle pages and security advisories. This site does not constitute migration, procurement or security advice."
    ],
    "license_title": "Open-source license",
    "license": [
      "The site’s code, styles and structured data are released under the <strong>GNU Affero General Public License v3.0 or later</strong> (AGPL-3.0-or-later). You may run, study, modify and redistribute them, but derivative works must be open-sourced under the same license and retain copyright and license notices.",
      "Distribution names, logos and trademarks belong to their respective projects. Logos come from the Simple Icons brand set; when missing, a letter badge is used for identification only.",
      "If you use the online version over a network, you can obtain the complete corresponding source from the <a href=\"{{repo}}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;text-underline-offset:3px\">GitHub repository</a>.",
      "<a href=\"https://www.gnu.org/licenses/agpl-3.0.html\" target=\"_blank\" rel=\"noopener noreferrer license\" style=\"text-decoration:underline;text-underline-offset:3px\">Read the full AGPL-3.0 license ↗</a>"
    ],
    "contribute_title": "Submit a distribution",
    "contribute": [
      "Submit a new Linux distribution through the site form. It enters the review queue; an admin signs in with an Ed25519 key and reviews it. Approved entries are written to the database and appear in the full index, family pages and search.",
      "Please link the official website, repository or release announcement. Leave unknown versions and dates blank; new entries remain “Unverified” even after approval.",
      "<a class=\"primary-btn\" href=\"#/submit\">Open the submission form<mdui-icon name=\"arrow_forward\" aria-hidden=\"true\"></mdui-icon></a>",
      "You can also submit data changes directly on GitHub: <a href=\"{{repo}}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;text-underline-offset:3px\">elyezyc/DistroAtlas</a>"
    ],
    "changelog_title": "Changelog",
    "changelog": [
      {
        "date": "2026-11-18",
        "title": "v1.0 · First release of the atlas",
        "paragraphs": [
          "{{total}} distributions across four main trees — Arch, RH, Debian and Other — plus the Ubuntu branch as a Debian subfamily, with hash routing, search, nine filter groups, three views, favorites and side-by-side comparison of 2–4 systems. Retired or dormant projects such as CentOS, Scientific Linux, Clear Linux and Knoppix remain in the dataset; unknown versions and dates stay blank and are marked “Unverified”.",
          "The visual and interaction layer includes the full star map (five initial families, hover/click zoom, node expansion, family cards, auto-tour), local Simple Icons brand logos, a detail-page logo watermark, Linus quotes in English (full card on the home page, inline on content pages, large on 404), staggered fades, FLIP filtering, number count-ups, detail parallax and reduced-motion fallbacks. Engineering work added the elyezyc / Gravatar avatar and mirrors, AGPL-3.0-or-later, four interface languages (简体中文 / 繁體中文 / English / Suomi) with translated distro profiles, a SQLite submission queue, AI-involvement declarations, per-language editing of existing entries, an Ed25519 admin desk (/admin), AI/machine translation disclosure with GitHub Issues feedback, official-source vs China-mirror switching, keyboard shortcuts, focus management, dynamic titles and meta, and alt text."
        ]
      }
    ],
    "faq_title": "FAQ",
    "faq": [
      {
        "q": "Why is openSUSE not in the RH family?",
        "a": "In this atlas, “RH family” specifically means the branch upstreamed from RHEL / Fedora and using the dnf/yum tradition. openSUSE uses zypper and shares its upstream with SUSE, so it belongs to “Other”, with a suse tag preserving its enterprise Linux identity."
      },
      {
        "q": "Why is Vanilla OS in Debian rather than Ubuntu?",
        "a": "Vanilla OS 1.0 was based on Ubuntu, but 2.0 “Orchid” moved to Debian unstable and adopted the immutable ABRoot design. The atlas files it under the current major version’s actual upstream while preserving that history in the introduction."
      },
      {
        "q": "What does “Unverified” mean?",
        "a": "It means at least one version, date or person field has no reliable official source. We prefer a blank field to a fabricated one. You can fill in the field in the data object and set verified to true."
      },
      {
        "q": "How do I add a distribution?",
        "a": "Use the site’s “Submit a distribution” form first; after admin review it enters the full index, family pages and search automatically. You can also open a Pull Request against <a href=\"{{repo}}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;text-underline-offset:3px\">github.com/elyezyc/DistroAtlas</a>: append an object to DISTROS in data.js, make the id unique, point similar to existing ids, and update static_ids.json and the four language snapshots."
      },
      {
        "q": "Why is Ubuntu shown as a separate cluster after Debian?",
        "a": "Ubuntu is based directly on Debian, so the atlas shows it as a Debian subfamily: on the home page its family card follows Debian, and on the full map a dashed link connects it to the Debian cluster. It still has its own <code>#/family/ubuntu</code> page."
      },
      {
        "q": "How are translations handled?",
        "a": "Simplified Chinese is the source. Traditional Chinese is machine-converted with OpenCC. English and Suomi are AI-assisted translations. Non-Chinese pages show the translation status at the top, on detail pages and in the language dialog, with a link to GitHub Issues feedback."
      }
    ]
  },
  "fi": {
    "hero_title": "Jakelukartta,<br><em>joka on tarkistettavissa.</em>",
    "hero_intro": "DistroAtlas on staattinen Linux-jakelujen atlas: se järjestää {{total}} järjestelmää perheittäin, ylävirran, paketinhallinnan ja ylläpitotilan mukaan ja säilyttää sekä aktiiviset että lopetetut historialliset jakelut. Se ei päätä puolestasi “parasta Linuxia”, vaan näyttää vaihtoehtojen hinnat ja hyödyt. Ubuntu näytetään Debianin alaperheenä Debianin jälkeen.",
    "stat_labels": [
      "Jakeluja",
      "Perhehaaroja",
      "EOL",
      "Vahvistamattomia kenttiä"
    ],
    "author_role": "Tekijä ja ylläpitäjä · Linux-käyttäjä / tietojen koostaminen",
    "author_bio": "Ylläpitää DistroAtlasin tietoja, käyttöliittymää ja tarkistusprosessia. Kiinnostunut Linux-jakelujen sukupuista, työpöytäkokemuksesta ja avoimen lähdekoodin pitkäaikaisesta kestävyydestä.",
    "avatar_note": "Profiilikuva haetaan ensin Gravatarsista; jos se ei ole tavoitettavissa, käytetään peiliä ja lopuksi GitHubin kuvaa. Sähköposti ja profiilikuva liittyvät samaan Gravatar-tiliin.",
    "pr_label": "Lähetä PR",
    "network_label": "Verkko: {{network}}",
    "repo_cta": "Avaa GitHub-repositorio ↗",
    "data_title": "Mistä tiedot tulevat",
    "data": [
      "Tiedot tulevat ensisijaisesti jakelujen virallisilta sivustoilta, dokumentaatiosta, julkaisutiedotteista, wikistä ja repositorioista; elinkaaritiedot viittaavat julkisiin lähteisiin, kuten <a href=\"https://endoflife.date/\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;text-underline-offset:3px\">endoflife.date</a>. Ulkoiset linkit osoittavat virallisille tai yhteisön ylläpitämille sivuille.",
      "Vahvistamattomia versioita, päivämääriä tai perustajia ei arvata: kentät jätetään tyhjiksi, <code>verified</code> asetetaan arvoon <code>false</code> ja käyttöliittymässä näytetään “Vahvistamaton”. Lopetetut jakelut säilyvät aineistossa lopetusvuoden ja syyn kanssa.",
      "Jos luokittelu on kiistanalainen, kuvaus selittää ratkaisun. Esimerkiksi openSUSE on “Muut”-perheessä ja <code>suse</code>-tunnisteessa; Vanilla OS 2.0 seuraa todellista Debian-ylävirtaa ja kuuluu Debian-perheeseen.",
      "Jakelujen logot tulevat Simple Icons -brändikirjastosta; puuttuva logo korvataan kirjainmerkillä. Tekijän profiilikuva ja sähköposti käyttävät Gravataria. Ulkoiset resurssit käyttävät oletuksena virallisia lähteitä; kolmannen osapuolen peilejä käytetään vain, kun Manner-Kiinan aikavyöhyke havaitaan tai se valitaan käsin."
    ],
    "disclaimer_title": "Vastuuvapaus",
    "disclaimer": [
      "DistroAtlas on epävirallinen henkilökohtainen tietolähde, eikä se ole sidoksissa Red Hatin, Canonicalin, SUSEn, Arch Linuxin tai muiden projektien tavaramerkkien omistajiin. Jakelujen nimet, merkit ja tavaramerkit kuuluvat niiden omistajille.",
      "Versiot ja ylläpitotila voivat muuttua milloin tahansa. Tarkista tuotantopäätöksiä varten viralliset julkaisutiedotteet, elinkaarisivut ja tietoturvatiedotteet. Sivusto ei ole maahanmuutto-, hankinta- tai tietoturvaneuvontaa."
    ],
    "license_title": "Avoimen lähdekoodin lisenssi",
    "license": [
      "Sivuston koodi, tyylit ja jäsennetty aineisto julkaistaan <strong>GNU Affero General Public License v3.0 or later</strong> -lisenssillä (AGPL-3.0-or-later). Voit ajaa, tutkia, muokata ja jakaa sitä edelleen, mutta johdannaisteokset on avattava samalla lisenssillä ja tekijänoikeus- ja lisenssitiedot on säilytettävä.",
      "Jakelujen nimet, logot ja tavaramerkit kuuluvat niiden projekteille. Logot tulevat Simple Icons -brändikirjastosta; puuttuva logo korvataan kirjainmerkillä vain tunnistamista varten.",
      "Jos käytät sivuston verkkoversiota, saat täydellisen vastaavan lähdekoodin <a href=\"{{repo}}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;text-underline-offset:3px\">GitHub-repositoriosta</a>.",
      "<a href=\"https://www.gnu.org/licenses/agpl-3.0.html\" target=\"_blank\" rel=\"noopener noreferrer license\" style=\"text-decoration:underline;text-underline-offset:3px\">Lue AGPL-3.0-lisenssi kokonaan ↗</a>"
    ],
    "contribute_title": "Lähetä jakelu",
    "contribute": [
      "Lähetä uusi Linux-jakelu sivuston lomakkeella. Se siirtyy tarkistusjonoon; ylläpitäjä kirjautuu Ed25519-avaimella ja tarkistaa sen. Hyväksytyt kohteet kirjoitetaan tietokantaan ja näkyvät hakemistossa, perhesivuilla ja haussa.",
      "Liitä mukaan virallinen sivusto, repositorio tai julkaisutiedote. Jätä tuntemattomat versiot ja päivämäärät tyhjiksi; uudet kohteet pysyvät “Vahvistamattomina” myös hyväksynnän jälkeen.",
      "<a class=\"primary-btn\" href=\"#/submit\">Avaa lähetyslomake<mdui-icon name=\"arrow_forward\" aria-hidden=\"true\"></mdui-icon></a>",
      "Voit myös lähettää tietomuutokset suoraan GitHubissa: <a href=\"{{repo}}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;text-underline-offset:3px\">elyezyc/DistroAtlas</a>"
    ],
    "changelog_title": "Muutosloki",
    "changelog": [
      {
        "date": "2026-11-18",
        "title": "v1.0 · Atlaksen ensimmäinen julkaisu",
        "paragraphs": [
          "{{total}} jakelua neljässä pääpuussa — Arch, RH, Debian ja Muut — sekä Ubuntu Debianin alaperheenä, hash-reititys, haku, yhdeksän suodatinryhmää, kolme näkymää, suosikit ja 2–4 järjestelmän rinnakkainen vertailu. Lopetetut tai lepotilassa olevat projektit, kuten CentOS, Scientific Linux, Clear Linux ja Knoppix, säilyvät aineistossa; tuntemattomat versiot ja päivämäärät jäävät tyhjiksi ja merkitään “Vahvistamattomiksi”.",
          "Visuaalinen ja vuorovaikutteinen kerros sisältää täyden tähtikartan (viisi alkuperäistä perhettä, hover/klikkaus-zoom, solmun laajennus, perhekortit, automaattinen kierto), paikalliset Simple Icons -logot, tietosivun logovesileiman, Linus-sitaatit englanniksi (kotisivun kortti, sisältösivujen inline, 404:ssä suuri), porrastetut häivytykset, FLIP-suodatuksen, numeroiden laskennan, tietosivun parallaksin ja reduced-motion-varaehdot. Tekniseen puoleen lisättiin elyezyc / Gravatar -profiilikuva ja peilit, AGPL-3.0-or-later, neljä käyttöliittymäkieltä (简体中文 / 繁體中文 / English / Suomi) käännetyillä jakeluprofiileilla, SQLite-lähetysjono, AI-osallisuusilmoitukset, kielikohtainen olemassa olevien kohteiden muokkaus, Ed25519-ylläpitopöytä (/admin), AI-/konekäännösilmoitus GitHub Issues -palautteella, virallisten lähteiden ja Kiinan peilien vaihto, pikanäppäimet, fokuksen hallinta, dynaamiset otsikot ja meta sekä vaihtoehtoiset tekstit."
        ]
      }
    ],
    "faq_title": "Usein kysytyt kysymykset",
    "faq": [
      {
        "q": "Miksi openSUSE ei ole RH-perheessä?",
        "a": "Tässä atlaksessa “RH-perhe” tarkoittaa nimenomaan RHEL / Fedora -ylävirrasta tulevaa ja dnf/yum-perinnettä käyttävää haaraa. openSUSE käyttää zypperiä ja jakaa ylävirran SUSEn kanssa, joten se kuuluu “Muut”-perheeseen ja säilyttää yritys-Linux-identiteettinsä suse-tunnisteella."
      },
      {
        "q": "Miksi Vanilla OS on Debianissa eikä Ubuntussa?",
        "a": "Vanilla OS 1.0 perustui Ubuntuun, mutta 2.0 “Orchid” siirtyi Debian unstableen ja otti käyttöön muuttumattoman ABRoot-rakenteen. Atlas sijoittaa sen nykyisen pääversion todellisen ylävirran mukaan ja säilyttää historiansa kuvauksessa."
      },
      {
        "q": "Mitä “Vahvistamaton” tarkoittaa?",
        "a": "Se tarkoittaa, että ainakin yhdelle versio-, päivämäärä- tai henkilökentälle ei löytynyt luotettavaa virallista lähdettä. Tyhjä kenttä on parempi kuin keksitty. Voit täydentää kentän aineistossa ja asettaa verified-arvoksi true."
      },
      {
        "q": "Miten lisään jakelun?",
        "a": "Käytä ensisijaisesti sivuston “Lähetä jakelu” -lomaketta; ylläpitäjän tarkistuksen jälkeen se tulee hakemistoon, perhesivuille ja hakuun. Voit myös avata Pull Requestin <a href=\"{{repo}}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;text-underline-offset:3px\">github.com/elyezyc/DistroAtlas</a> -repositorioon: lisää objekti data.js:n DISTROS-taulukkoon, varmista id:n yksilöllisyys, osoita similar olemassa oleviin id:ihin ja päivitä static_ids.json sekä neljän kielen tilannekuvat."
      },
      {
        "q": "Miksi Ubuntu näytetään erillisenä ryhmänä Debianin jälkeen?",
        "a": "Ubuntu perustuu suoraan Debianiin, joten atlas näyttää sen Debianin alaperheenä: kotisivun perhekortti seuraa Debiania ja tähtikartassa katkoviiva yhdistää sen Debian-ryhmään. Sillä on edelleen oma <code>#/family/ubuntu</code> -sivunsa."
      },
      {
        "q": "Miten käännökset hoidetaan?",
        "a": "Yksinkertaistettu kiina on lähdekieli. Perinteinen kiina muunnetaan OpenCC:llä. Englanti ja suomi ovat AI-avusteisia käännöksiä. Muiden kielten sivut näyttävät käännöksen tilan ylhäällä, tietosivuilla ja kielivalikossa sekä linkin GitHub Issues -palautteeseen."
      }
    ]
  },
  "zh-TW": {
    "hero_title": "把一張發行版地圖，<br><em>畫得能核對。</em>",
    "hero_intro": "DistroAtlas 是一個靜態的 Linux 發行版百科圖譜：用派系、上游關係、包管理與維護狀態組織 {{total}} 個系統，既收錄正在活躍的專案，也保留已經終止的歷史發行版。它不替你決定“最好的 Linux”，而是把取捨攤開，讓選擇有依據。Ubuntu 作為 Debian 的子派系，排在 Debian 之後。",
    "stat_labels": [
      "發行版條目",
      "派系分支",
      "已終止 EOL",
      "含待核實欄位"
    ],
    "author_role": "作者與維護者 · Linux 使用者 / 資料整理",
    "author_bio": "維護 DistroAtlas 的資料、前端與校對流程。關注 Linux 發行版譜系、桌面體驗與開源軟體的長期可持續性。",
    "avatar_note": "頭像優先從 Gravatar 獲取；不可達時自動切換映象，GitHub 頭像作最終兜底。Email 與頭像關聯同一 Gravatar 賬號。",
    "pr_label": "提交 PR",
    "network_label": "網路：{{network}}",
    "repo_cta": "前往 GitHub 倉庫 ↗",
    "data_title": "資料從哪裡來",
    "data": [
      "條目資訊優先取自各發行版官網、官方文件、釋出公告、Wiki 與程式碼倉庫；版本生命週期參考 <a href=\"https://endoflife.date/\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;text-underline-offset:3px\">endoflife.date</a> 等公開資料。所有外鏈指向專案官方或社群維護的頁面。",
      "無法確認的版本號、日期與創始人資訊不會猜測：欄位留空，<code>verified</code> 設為 <code>false</code>，並在 UI 中顯示「待核實」。已終止的發行版保留在資料集中，記錄終止年份與原因。",
      "分類存在爭議時會在簡介中說明取捨。例如 openSUSE 主派系歸入「其他系」並帶 <code>suse</code> 標籤；Vanilla OS 2.0 按實際 Debian 上游歸入 Debian 系。",
      "發行版 Logo 使用 Simple Icons 品牌圖示庫，未收錄時顯示首字母徽章；作者頭像與 Email 關聯 Gravatar。外部資源預設使用官方源，只有檢測到中國大陸時區或手動選擇時才使用第三方映象。"
    ],
    "disclaimer_title": "免責宣告",
    "disclaimer": [
      "本站是個人整理的非官方資料庫，與 Red Hat、Canonical、SUSE、Arch Linux 等專案的商標持有人沒有隸屬關係。發行版的名稱、標識與商標歸各自權利人所有。",
      "版本與維護狀態隨時可能變化。用於生產環境決策前，請回到官方釋出說明、生命週期頁面與安全公告核對。本站不構成任何形式的遷移、採購或安全建議。"
    ],
    "license_title": "開源許可",
    "license": [
      "本站程式碼、樣式與結構化資料以 <strong>GNU Affero General Public License v3.0 or later</strong>（AGPL-3.0-or-later）釋出。你可以執行、研究、修改與再分發，但衍生作品需以相同許可證開放原始碼，並保留版權與許可證宣告。",
      "發行版名稱、Logo 與商標歸各自專案所有；Logo 來自 Simple Icons 品牌圖示庫，缺少收錄時使用首字母徽章，僅用於識別與介紹。",
      "如果你通過網路使用本站的線上版本，可從 <a href=\"{{repo}}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;text-underline-offset:3px\">GitHub 倉庫</a> 獲取對應的完整原始碼。",
      "<a href=\"https://www.gnu.org/licenses/agpl-3.0.html\" target=\"_blank\" rel=\"noopener noreferrer license\" style=\"text-decoration:underline;text-underline-offset:3px\">閱讀 AGPL-3.0 許可證全文 ↗</a>"
    ],
    "contribute_title": "投稿發行版",
    "contribute": [
      "通過站內投稿表單提交一個新的 Linux 發行版。表單會寫入稽核佇列，管理員用 Ed25519 金鑰進入後臺稽核；通過後條目寫入資料庫，並出現在全量檔案、派系頁與搜尋中。",
      "請優先附上官網、程式碼倉庫或釋出公告。無法確認的版本與日期留空，新條目預設標記為「待核實」，通過稽核也不會自動變成已核對。",
      "<a class=\"primary-btn\" href=\"#/submit\">開啟投稿表單<mdui-icon name=\"arrow_forward\" aria-hidden=\"true\"></mdui-icon></a>",
      "也可以直接在 GitHub 提交資料變更：<a href=\"{{repo}}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;text-underline-offset:3px\">elyezyc/DistroAtlas</a>"
    ],
    "changelog_title": "更新日誌",
    "changelog": [
      {
        "date": "2026-11-18",
        "title": "v1.0 · 圖譜首次釋出",
        "paragraphs": [
          "收錄 {{total}} 個發行版，完成 Arch / RH / Debian / 其他四棵主樹與 Ubuntu（Debian 子派系）分支、Hash 路由、搜尋、九組篩選、三種檢視、收藏與 2–4 個系統並排對比。資料側保留 CentOS、Scientific Linux、Clear Linux、Knoppix 等終止或休眠專案，無法確認的版本與日期留空並標註「待核實」。",
          "視覺與互動包含完整星圖（初始五派系、懸停/點選放大、節點展開、派系卡片、自動巡遊）、Simple Icons 本地品牌 Logo、詳情頁 Logo 水印、Linus 英文名言（首頁完整卡片、內容頁內聯、404 大號）、錯位淡入、FLIP 篩選、數字遞增、詳情視差與 reduced-motion 降級。工程側加入作者 elyezyc / Gravatar 頭像與映象、AGPL-3.0-or-later、簡體 / 繁體 / English / Suomi 四種語言與發行版資料翻譯、SQLite 投稿佇列、AI 參與宣告、按語言編輯現有條目與 Ed25519 金鑰管理後臺（/admin）、AI / 機器翻譯披露與 GitHub Issues 反饋、官方源與中國映象切換及設定提示、鍵盤快捷鍵、焦點管理、動態標題與 meta、替代文本。"
        ]
      }
    ],
    "faq_title": "常見問題",
    "faq": [
      {
        "q": "為什麼 openSUSE 不在 RH 系？",
        "a": "“RH 系”在本圖譜中特指以 RHEL / Fedora 為上游、使用 dnf/yum 傳統的那一支。openSUSE 使用 zypper，與 SUSE 共享上游，因此歸入「其他系」，並用 suse 標籤保留其企業 Linux 身份。"
      },
      {
        "q": "為什麼 Vanilla OS 歸 Debian 而不是 Ubuntu？",
        "a": "Vanilla OS 1.0 基於 Ubuntu，但 2.0 “Orchid” 起轉向 Debian unstable，並採用 ABRoot 不可變設計。本站按當前主版本的實際上游歸檔，同時在簡介中保留這段歸屬變化。"
      },
      {
        "q": "「待核實」是什麼意思？",
        "a": "表示該條目至少有一個版本號、日期或人物欄位沒有找到可靠的官方來源。我們寧可留空，也不編造。你可以在資料檔案的對應物件中補齊欄位，並把 verified 改為 true。"
      },
      {
        "q": "如何新增一個發行版？",
        "a": "優先使用站內「投稿發行版」表單，管理員稽核通過後會自動進入全量檔案、派系頁與搜尋。也可以向 <a href=\"{{repo}}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"text-decoration:underline;text-underline-offset:3px\">github.com/elyezyc/DistroAtlas</a> 提交 Pull Request：在 data.js 的 DISTROS 陣列中追加物件，確保 id 唯一，similar 指向已存在的 id，並同步 static_ids.json 與四語快照。"
      },
      {
        "q": "為什麼 Ubuntu 在 Debian 後面單獨成簇？",
        "a": "Ubuntu 直接基於 Debian，因此在本圖譜中作為 Debian 的子派系展示：首頁派系卡片緊跟在 Debian 之後，完整星圖裡以虛線連線到 Debian 簇。它仍然保留獨立的 <code>#/family/ubuntu</code> 頁面，點選即可進入 Ubuntu 系。"
      },
      {
        "q": "翻譯是怎麼處理的？",
        "a": "簡體中文是源文；繁體中文由 OpenCC 機器轉換；English / Suomi 為 AI 輔助翻譯。非中文頁面頂部、詳情頁和語言彈窗都會標註翻譯狀態，並連結到 GitHub Issues 反饋。"
      }
    ]
  }
};
