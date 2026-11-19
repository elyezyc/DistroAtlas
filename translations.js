/* SPDX-License-Identifier: AGPL-3.0-or-later
   DistroAtlas English / Finnish profile translations.
   Generated from data.js; preserve facts. */
window.DISTRO_I18N = {
  "en": {
    "arch-linux": {
      "intro": "Arch Linux is an independent rolling release built on the KISS (Keep It Simple, Stupid) philosophy and created by Judd Vinet in 2002. It ships no desktop environment: during installation users choose the kernel, display server, desktop and components themselves, which gives the experience of building a system from parts. Arch's official repositories carry only relatively new upstream software, and rolling updates keep users on the latest versions without waiting for a twice-yearly release upgrade. Its package manager is pacman, whose syntax is direct and fast; the AUR (Arch User Repository) provides a huge collection of community PKGBUILDs, and helpers such as yay and paru cover software outside the official repositories. The Arch Wiki is widely regarded as one of the most detailed documents in the Linux world, consulted even by users of other distributions. It suits intermediate and advanced users willing to read documentation, understand how the system is put together and accept that updates may require manual intervention; if you want something that works out of the box and needs little tinkering over the long term, Manjaro or EndeavourOS will be easier. Note that Arch ships some firmware and binary blobs by default and is not a fully free-software distribution.",
      "highlights": [
        "Rolling release with official repositories close to upstream versions",
        "pacman + AUR for extremely broad software coverage",
        "Arch Wiki: high-quality, transferable system documentation",
        "Minimal base system; desktop and components entirely your choice"
      ],
      "pros": [
        "New software and a high degree of customization freedom",
        "Deep documentation and community knowledge base",
        "Simple, transparent package management that is good for learning Linux"
      ],
      "cons": [
        "A high barrier to installation and maintenance",
        "Rolling updates occasionally require manual handling",
        "No complete out-of-the-box desktop experience is offered officially"
      ],
      "status_note": "Continuously rolling, independently run by the community",
      "target_user": "Intermediate to advanced users willing to tinker and understand Linux deeply",
      "release_cycle": "Continuous rolling release; installation images updated monthly"
    },
    "manjaro": {
      "intro": "Manjaro is one of Arch Linux's best-known downstreams; since 2011 it has aimed to make Arch easier to approach by providing preconfigured desktops, a graphical installer, hardware detection and kernel management tools. It does not mirror Arch's repositories directly but holds updates back for a stabilization period before pushing them, reducing the chance that a rolling release suddenly breaks the system. Official editions include Xfce, KDE Plasma and GNOME, and the Pamac graphical package manager integrates repositories, AUR and Flatpak, making updates, searching and downgrading more intuitive. Manjaro also maintains its own kernels, drivers and some application patches, so software versions usually lag slightly behind Arch, though it remains a rolling release overall. Its forum and wiki are friendly to newcomers and suit users who want to experience the Arch ecosystem without installing everything from the command line. Keep in mind that delayed updates are not the same as guaranteed stability; major version upgrades, AUR packages and driver conflicts may still require reading announcements and manual work. Manjaro's trademark and infrastructure are coordinated by a company, but the distribution itself is free to use.",
      "highlights": [
        "Arch ecosystem with a preconfigured desktop, ready right after installation",
        "Pamac integrates the official repositories, AUR and Flatpak",
        "Stabilization-delayed rolling updates, a more conservative pace than Arch",
        "Built-in kernel and hardware management tools"
      ],
      "pros": [
        "Beginner-friendly with a high degree of graphical tooling",
        "Reasonably new software and good hardware compatibility",
        "A rich selection of official editions"
      ],
      "cons": [
        "Delayed updates can cause dependency mismatch",
        "AUR and the Manjaro repositories are not officially guaranteed",
        "Some decisions and community communication have caused controversy"
      ],
      "status_note": "Actively maintained, coordinated by Manjaro GmbH & Co. KG",
      "target_user": "Desktop users who want the Arch ecosystem but prefer an out-of-the-box setup",
      "release_cycle": "Stabilization-delayed rolling release; snapshots usually arrive weeks after Arch updates"
    },
    "endeavouros": {
      "intro": "EndeavourOS was born in 2019, taking up the baton from the discontinued Antergos, and positions itself as the friendliest installation experience closest to Arch. It uses Arch's official repositories and does not maintain a separate package set, so the update cadence and software versions largely match Arch; the differences are the installer, the default theme, the welcome tool and a few convenience scripts. Xfce is the default desktop, and KDE Plasma, GNOME, Budgie, Cinnamon and MATE can also be chosen during installation. The project emphasizes terminal-first with graphical assistance: once installed, the system does not hide pacman from you, but the welcome app helps configure mirrors, drivers, printers and common software. EndeavourOS has a small but active community, with the forum and the Discovery documentation as the main support channels. It suits users who already understand the Arch basics and want to get a usable system installed quickly and then maintain it the Arch way; if you want nothing to do with the command line, Manjaro or Mint is a better fit.",
      "highlights": [
        "Uses Arch's official repositories with almost no added delay",
        "Graphical installer with a freely chosen desktop environment",
        "Welcome tool centralizes mirrors, drivers and common settings",
        "A small, active and friendly community"
      ],
      "pros": [
        "Saves time compared with a plain Arch installation",
        "New software, compatible with Arch documentation",
        "A light default system without bundled bloat"
      ],
      "cons": [
        "Still requires users to understand Arch maintenance",
        "A small project whose support depends on the community",
        "Limited coverage of graphical tools"
      ],
      "status_note": "An actively maintained community project",
      "target_user": "Users who want Arch installed quickly and are willing to maintain it the Arch way",
      "release_cycle": "Rolls close to the Arch repositories; ISOs refreshed periodically"
    },
    "garuda": {
      "intro": "Garuda Linux is an Arch derivative that appeared in 2020, known for performance and visual experience out of the box. On top of Arch it preinstalls a great deal of tuning: Btrfs with automatic Snapper snapshots, zram, CPU schedulers and gaming-related components, plus graphical tools such as Garuda Assistant and Garuda Gamer for managing system maintenance, drivers and gaming platforms in one place. Its most mainstream edition uses KDE Plasma, while GNOME, Xfce, Cinnamon and Sway flavours are also offered. The visual style is distinctive, with a unified default theme, window decorations and icons. Garuda suits desktop users who want newer software, do not want to build a snapshot and gaming environment themselves, and accept a visually heavy system with many preinstalled packages. Note that it is heavier than EndeavourOS and ships more components; rolling updates and deep customization also mean troubleshooting cannot simply follow the Arch Wiki. The project is community-run and has no paid commercial edition.",
      "highlights": [
        "Btrfs snapshots and system rollback out of the box",
        "Garuda Gamer centralizes gaming platforms and tools",
        "Performance tuning and zram enabled by default",
        "A unified and distinctive desktop visual design"
      ],
      "pros": [
        "Gaming and desktop experience fully configured",
        "Snapshot rollback lowers the risk of tinkering",
        "Software versions follow Arch and stay current"
      ],
      "cons": [
        "Many preinstalled packages make the system heavy",
        "Deep customization means troubleshooting differs from plain Arch",
        "The visual style is strongly opinionated"
      ],
      "status_note": "Actively maintained, focused on performance and gaming",
      "target_user": "Arch gaming desktop users who want high performance out of the box",
      "release_cycle": "Rolls close to Arch; ISOs refreshed periodically"
    },
    "cachyos": {
      "intro": "CachyOS is an Arch derivative in development since 2016 whose core selling point is tuning for performance. It offers compiled-optimized kernels and packages, supports instruction set levels such as x86-64-v3, and adjusts schedulers, memory management and CPU frequency policies for desktop responsiveness, gaming and low-latency scenarios. The installer lets users choose KDE Plasma, GNOME, Xfce, Hyprland and other desktops, and includes paru, CachyOS Hello and common driver tools by default. Compared with Garuda, CachyOS emphasizes low-level performance parameters and optional tuning rather than a large set of preinstalled applications; it still uses Arch repositories and the AUR ecosystem, so Arch Wiki and AUR experience carries over. It suits users chasing frame rates, compile performance or low latency who accept rolling updates, and those who use Linux as their main gaming system. Note that optimized kernels and third-party repositories can complicate troubleshooting; for production servers requiring extreme stability, a fixed-release distribution is still preferable.",
      "highlights": [
        "Performance-oriented kernels and userspace packages",
        "Support for microarchitecture optimizations such as x86-64-v3",
        "Scheduler tuning for desktop and gaming workloads",
        "Keeps the Arch repositories and AUR ecosystem"
      ],
      "pros": [
        "Performance-oriented defaults are fairly complete",
        "Rich desktop choices with a modern installation flow",
        "Compatible with the Arch ecosystem, so knowledge carries over"
      ],
      "cons": [
        "Optimization options add troubleshooting variables",
        "Rolling updates still need active maintenance",
        "Some performance gains depend on hardware and workload"
      ],
      "status_note": "Actively maintained, focused on performance optimization",
      "target_user": "Arch users pursuing performance and gaming experience",
      "release_cycle": "Continuously rolling; installation images updated regularly"
    },
    "artix": {
      "intro": "Artix Linux is a 2017 fork of Arch Linux whose most distinctive feature is being systemd-free. It keeps pacman, Arch's package format and the rolling release model, but replaces the init system with OpenRC, runit, s6 or dinit, chosen at install time. Artix maintains its own repositories, and many Arch packages must be rebuilt to remove systemd dependencies or adapt to another init; AUR packages do not always work directly and must be checked. It offers Xfce, KDE Plasma, LXQt, MATE and other desktop ISOs and is also suited to lightweight servers or embedded devices. Artix suits users with a clear preference regarding init systems who understand the differences in service management and are willing to handle dependency adaptation; if you merely dislike systemd but do not want the extra work, Devuan may be the more mature alternative. Artix's community is small, documentation and the forum are the main sources of support, and some niche software may lack ready-made packages.",
      "highlights": [
        "One distribution offering four inits: OpenRC, runit, s6 and dinit",
        "Keeps pacman and the Arch rolling release model",
        "Lightweight, suited to servers and older hardware",
        "Independent repositories with systemd dependencies removed"
      ],
      "pros": [
        "Freedom of init choice and a controllable system",
        "Newer software than Devuan, closer to Arch",
        "Lightweight with no systemd coupling"
      ],
      "cons": [
        "Significant effort adapting packages",
        "AUR compatibility is unstable",
        "Limited community and documentation"
      ],
      "status_note": "Actively maintained, offering systemd-free Arch variants",
      "target_user": "Users who want the Arch ecosystem but reject systemd",
      "release_cycle": "Continuously rolling, with several init variants"
    },
    "blackarch": {
      "intro": "BlackArch Linux is an Arch derivative for security testing and penetration testing, started in 2012. Its main feature is a very large security tool repository covering information gathering, vulnerability analysis, web testing, wireless, reverse engineering and forensics; the tools are provided as pacman packages that can be installed individually on an existing Arch system without reinstalling the whole distribution. Official ISOs offer lightweight desktops or window managers such as Xfce, Openbox, Fluxbox and i3, avoiding a heavy desktop stacked on top of security tools. BlackArch follows Arch's rolling updates and KISS style and suits security professionals and CTF players who already know Arch and need a toolchain they can extend at any time. It must be stressed that these tools should only be used in authorized environments; the project itself explicitly opposes any illegal use. Because there are so many tools, repository quality and maintenance status vary, and some packages may go long without updates.",
      "highlights": [
        "A large security tool repository, installable on demand",
        "Can be layered on top of an existing Arch system",
        "A choice of lightweight desktops and window managers",
        "Follows Arch rolling updates and the pacman workflow"
      ],
      "pros": [
        "Broad coverage of security tools",
        "The repository is usable on Arch without reinstalling",
        "Lightweight desktop with controllable resource use"
      ],
      "cons": [
        "Tool quality and maintenance status vary",
        "Not a first choice as an everyday general-purpose desktop",
        "Use cases are strictly constrained by law and authorization"
      ],
      "status_note": "Actively maintained; the security tool repository keeps growing",
      "target_user": "Authorized security testers already familiar with Arch",
      "release_cycle": "Continuously rolling; the security tool repository keeps expanding"
    },
    "archcraft": {
      "intro": "Founded by Aditya Shakya in 2020, Archcraft is a desktop distribution that pairs Arch Linux with finely configured lightweight window managers. Its default environment usually uses bspwm or Openbox, with a complete, unified set of colors, status bar, notifications, launcher and keybindings, so you get a minimal yet complete tiling or stacking desktop out of the box. Unlike EndeavourOS, which pursues pure Arch, Archcraft focuses on visual and interaction design; it still keeps pacman, AUR and the Arch repositories, so underneath it remains a standard Arch workflow. The project also offers community ISOs for Hyprland, i3 and awesome, suiting users who like keyboard-driven, low-resource setups but do not want to write dotfiles from scratch. Note that preconfigured themes and scripts add complexity, so back up before upgrading the window manager or changing configuration; it is also not for users expecting the full GNOME/KDE feature set.",
      "highlights": [
        "Preconfigured minimal desktops such as bspwm and Openbox",
        "A unified visual theme, status bar and keybindings",
        "Underneath it is still standard Arch with pacman and AUR",
        "Low resource use, suited to older machines and keyboard-driven users"
      ],
      "pros": [
        "A polished minimal desktop that is ready out of the box",
        "Highly customizable with complete configuration examples",
        "Lightweight and fast to boot"
      ],
      "cons": [
        "Complex preconfiguration makes upgrades delicate",
        "Not for users who need a full desktop suite",
        "Maintained mainly by one person or a small team"
      ],
      "status_note": "Actively maintained, focused on minimal window manager aesthetics",
      "target_user": "Arch users who like tiling window managers and minimal aesthetics",
      "release_cycle": "Continuously rolling; ISOs updated periodically"
    },
    "steamos": {
      "intro": "SteamOS is Valve's operating system built for gaming. It first appeared in 2013 based on Debian, and version 3.0, launched in 2022 with the Steam Deck, moved to Arch Linux. It uses an immutable system image with a read-only root filesystem, and Valve pushes system updates as a whole, reducing the risk of users breaking the system by accident; for extra software the official path is Flatpak, while developer mode can temporarily unlock pacman. The core experience is Gaming Mode: the machine boots straight into the Steam big-picture interface, controlled with a gamepad, with the Proton compatibility layer running many Windows games; Desktop Mode switches to KDE Plasma. It suits users who mainly play games and want to use a PC like a console, and those who want a low-maintenance experience on a handheld or living-room device. Note that SteamOS officially supports mainly Valve's own hardware, and installing it on third-party devices may lack drivers or features; it is not a general-purpose desktop distribution either.",
      "highlights": [
        "An immutable system image with updates pushed whole by Valve",
        "Gaming Mode plus a KDE Plasma desktop mode",
        "A Proton compatibility layer covering many Windows games",
        "Optimized for Steam Deck controls and power management"
      ],
      "pros": [
        "Console-like gaming with low maintenance",
        "Atomic system updates that users can hardly break",
        "Desktop mode handles routine light office work"
      ],
      "cons": [
        "Official hardware support is limited",
        "The read-only system restricts deep customization",
        "The non-gaming software ecosystem relies on Flatpak"
      ],
      "status_note": "Continuously updated alongside the Steam Deck and Valve hardware",
      "target_user": "Players who mainly game and want a low-maintenance living-room or handheld system",
      "release_cycle": "Valve pushes system image updates in batches"
    },
    "chimeraos": {
      "intro": "ChimeraOS is an Arch derivative that turns a PC into a living-room game console; it began as GamerOS in 2019 and was later renamed ChimeraOS. It uses an immutable system design, boots by default into Steam Big Picture mode and also provides a GNOME desktop for everyday tasks; it supports Steam, Epic, GOG and other platforms, extending game compatibility through Proton, Lutris and similar tools. System updates are deployed as atomic images, so users do not upgrade package by package as on regular Arch, reducing the chance that a living-room device degrades over time. ChimeraOS suits users who connect to a TV, use a gamepad and want to play right after boot, and those turning an old PC into a game console. Compared with SteamOS it is more open to third-party hardware and more boot options, but hardware compatibility still depends on the specific configuration; some anti-cheat games cannot run on Linux, a limitation shared by all Linux gaming systems.",
      "highlights": [
        "Boots straight into Steam Big Picture mode",
        "An immutable system with atomic updates",
        "Supports third-party PCs and multiple gaming platforms",
        "A GNOME desktop mode for everyday tasks"
      ],
      "pros": [
        "A complete living-room gaming experience",
        "Simple system updates and easy rollback",
        "More open to non-Valve hardware"
      ],
      "cons": [
        "Hardware compatibility must still be verified per machine",
        "Limited support for anti-cheat games",
        "A smaller community than SteamOS"
      ],
      "status_note": "An actively maintained living-room gaming system",
      "target_user": "Players who want to turn an old PC into a living-room console",
      "release_cycle": "Continuously rolling; system images released per version"
    },
    "parabola": {
      "intro": "Parabola GNU/Linux-libre is a fully free-software derivative of Arch Linux, in development since 2009 and recognized by the Free Software Foundation (FSF). It keeps pacman, rolling updates and Arch's package format but removes or replaces every component that does not meet the free software definition, including proprietary firmware, binary blobs and non-free drivers; the kernel is Linux-libre, and software such as browsers is replaced with free versions. As a result, some wireless cards, graphics cards or hardware acceleration features that depend on proprietary firmware may not work, a trade-off users must accept when choosing Parabola. It suits users who value software freedom, are willing to compromise on hardware compatibility and know how to maintain Arch, and it is also often used for free-software advocacy and teaching. Parabola's community is small and package updates may lag slightly behind Arch; for hardware problems the official wiki and mailing lists are the main support channels.",
      "highlights": [
        "An FSF-recognized fully free GNU/Linux distribution",
        "Based on Arch, keeping pacman and rolling updates",
        "Removes proprietary firmware, blobs and non-free software",
        "Uses the Linux-libre kernel"
      ],
      "pros": [
        "Software freedom principles applied thoroughly",
        "Can reuse Arch's package management and documentation",
        "Good for free-software teaching and research"
      ],
      "cons": [
        "Hardware compatibility is clearly limited",
        "Package updates may lag",
        "A small community with limited support resources"
      ],
      "status_note": "Actively maintained; an FSF-recognized fully free distribution",
      "target_user": "Users committed to fully free software who accept hardware limitations",
      "release_cycle": "Continuously rolling; only free software included"
    },
    "archlinux-arm": {
      "intro": "Arch Linux ARM is an ARM port project started by the Arch Linux community in 2011, aiming to bring Arch's pacman, rolling updates and AUR ecosystem to ARM single-board computers such as Raspberry Pi, Pine64, Rockchip and Odroid. It maintains U-Boot, kernels and installation images for different boards, and users can pick a device on the official platform pages and write the image to a storage card. The system keeps Arch's minimal style and ships no desktop, so desktops, drivers and services on ARM devices must be configured by the user. Arch Linux ARM suits users who already know Arch and want to run the latest software or build a lightweight server on ARM boards, as well as embedded Linux learners. Note that support quality and kernel versions vary widely between boards, and some devices need community patches; hardware acceleration and video decoding on ARM are usually less mature than on x86_64. It has no commercial edition, is community-maintained, and you should back up and be able to roll back before updating.",
      "highlights": [
        "The official community ARM port of Arch",
        "Covers boards such as Raspberry Pi, Pine64 and Odroid",
        "Keeps pacman, rolling updates and the AUR",
        "A minimal system with a self-chosen desktop and services"
      ],
      "pros": [
        "ARM boards can reuse the Arch ecosystem",
        "New software versions",
        "A lean and controllable system"
      ],
      "cons": [
        "Board support quality varies widely",
        "Limited hardware acceleration on ARM",
        "Requires familiarity with Arch maintenance"
      ],
      "status_note": "An actively maintained Arch ARM port project",
      "target_user": "Arch-savvy users who want to run new software on ARM boards",
      "release_cycle": "Continuously rolling; installation images provided per device"
    },
    "rhel": {
      "intro": "Red Hat Enterprise Linux (RHEL) is one of the de facto standards in enterprise Linux. Red Hat was founded in 1993 and released RHEL 2.1 in 2002, and has since established the layered model in which Fedora innovates, RHEL stays stable and CentOS Stream bridges the two. RHEL ships a major version roughly every three years, each with about ten years of lifecycle support covering the kernel, systemd, SELinux, Podman, Ansible and a complete certification ecosystem. Access to binaries, security advisories, the knowledge base and commercial support comes through a subscription, so it is not a free download distribution in the traditional sense; developers can get it free through the Red Hat Developer program. RHEL suits enterprises that need long-term stability, hardware and software certification, compliance audits and vendor support, especially in finance, telecom, government and cloud infrastructure. For individual desktop users RHEL is usually too conservative and the subscription process cumbersome; Fedora, or compatible rebuilds such as Rocky and Alma, are better fits.",
      "highlights": [
        "About a 10-year lifecycle with enterprise-grade support",
        "Deep integration of SELinux, Podman and Ansible",
        "Broad hardware and ISV certification",
        "Stable ABI/API with long-term security updates"
      ],
      "pros": [
        "Strong enterprise support and compliance capabilities",
        "A long lifecycle with a clear upgrade path",
        "A mature certification and documentation ecosystem"
      ],
      "cons": [
        "Requires a subscription, a high barrier for individuals",
        "Conservative software versions",
        "Limited free community support"
      ],
      "status_note": "RHEL 10 was released in 2025, with standard support until 2030 and extended lifecycle support for longer",
      "target_user": "Enterprise IT teams that need long-term stability and commercial support",
      "release_cycle": "A major version about every 3 years, each with roughly a 10-year lifecycle"
    },
    "fedora": {
      "intro": "Fedora is a community distribution sponsored by Red Hat, evolving in 2003 from the consumer line of Red Hat Linux and now the upstream for RHEL and CentOS Stream. It ships a release roughly every six months, using relatively new kernels, GNOME, systemd and container tools while maintaining its commitment to free software policy. Fedora Workstation is the default desktop, alongside Spins such as KDE, Xfce, Budgie and Sway, plus editions for servers, cloud, IoT and Atomic desktops. Fedora suits developers and desktop users who want newer software and participation in the upstream ecosystem while needing a relatively reliable release cadence; SELinux is enabled by default, Wayland support is active, and the distribution is often used as a testbed for new technology. The cost is that each release is supported for about 13 months, so users must upgrade regularly; some multimedia codecs and the NVIDIA driver require extra configuration. Fedora offers no commercial edition, but Red Hat provides infrastructure and engineering support.",
      "highlights": [
        "Roughly 6-month release cycle, with software close to upstream",
        "Upstream for RHEL and CentOS Stream",
        "SELinux and Wayland enabled by default",
        "Workstation, Atomic, Server and IoT variants"
      ],
      "pros": [
        "New software with a predictable release cadence",
        "High upstream involvement and good documentation",
        "Modern desktop experience and active hardware support"
      ],
      "cons": [
        "Short support window per release, requiring regular upgrades",
        "Multimedia codecs need extra work",
        "Some new features may have early compatibility issues"
      ],
      "status_note": "Actively maintained; upstream for RHEL and CentOS Stream",
      "target_user": "Developers and desktop users who want newer software and the upstream ecosystem",
      "release_cycle": "A release roughly every 6 months, each supported for about 13 months"
    },
    "fedora-silverblue": {
      "intro": "Fedora Silverblue is Fedora's immutable desktop edition, appearing in 2018 under the name Atomic Workstation and later renamed Silverblue; Kinoite is the KDE Plasma version on the same technology stack. Its root filesystem is delivered as a read-only OSTree image and system updates are atomic: a new version is deployed in a separate snapshot, takes effect after a reboot, and can be rolled back to the previous version if something goes wrong. Day-to-day applications are installed mainly through Flatpak, while development tools go into Toolbox or Distrobox containers so the base system stays clean. This model suits users who want a long-term stable system that package operations cannot break while still using reasonably new Fedora software, and it works especially well for developers, sysadmins and desktops for family members. The cost is that traditional rpm installation is limited and you need to get used to rpm-ostree and container workflows; some drivers, input methods and system-level tools still require layering or extra configuration. Silverblue is not 'unchangeable' — it makes changes explicit and reversible.",
      "highlights": [
        "Read-only root filesystem with atomic updates",
        "A failed update can roll back to the previous deployment",
        "Flatpak + Toolbox/Distrobox application workflow",
        "Two variants: Silverblue (GNOME) and Kinoite (KDE)"
      ],
      "pros": [
        "High system stability and low upgrade risk",
        "Clear rollback mechanism",
        "Well suited to containerized development and everyday desktops"
      ],
      "cons": [
        "Installing traditional rpm software is not intuitive",
        "System-level customization requires extra learning",
        "Some driver and input-method setups are more complex"
      ],
      "status_note": "Fedora Atomic desktop edition, actively maintained",
      "target_user": "Developers and advanced users who want a stable, rollback-capable desktop",
      "release_cycle": "Follows Fedora's 6-month cadence, with atomic images updated continuously"
    },
    "centos-stream": {
      "intro": "CentOS Stream is a distribution introduced in 2019 with the strategic realignment of CentOS, positioned between Fedora and RHEL: it continuously receives updates headed for the next RHEL minor release, so it can be seen as RHEL's 'upstream rolling branch'. Unlike the old CentOS, which rebuilt RHEL binaries, Stream versions usually run ahead of the corresponding RHEL minor release, making it suitable for users who want to validate compatibility early, take part in RHEL ecosystem development or obtain an enterprise software stack for free. It uses dnf, systemd and SELinux, and its lifecycle is close to that of the corresponding RHEL major version. CentOS Stream is not suitable for production environments that require full binary identity with RHEL; such needs should choose Rocky Linux, AlmaLinux or a paid RHEL subscription. For developers, Stream is a low-cost way to follow what RHEL will do next and to test packages and container images, but its rolling nature means occasional updates that are not yet stable.",
      "highlights": [
        "A continuous delivery branch between Fedora and RHEL",
        "Validate changes in the next RHEL minor release early",
        "Free access to an enterprise software stack and SELinux",
        "Lifecycle roughly aligned with RHEL"
      ],
      "pros": [
        "Free access to RHEL upstream code and ecosystem",
        "Good for pre-validation and development testing",
        "Stable software stack with a complete set of enterprise tools"
      ],
      "cons": [
        "Not a binary rebuild of RHEL",
        "Rolling updates may bring in changes that are not yet stable",
        "Not suitable for production environments that demand exact consistency"
      ],
      "status_note": "Upstream development branch of RHEL; CentOS Stream 10 is actively maintained",
      "target_user": "Developers and ecosystem partners who need to pre-validate the RHEL ecosystem",
      "release_cycle": "Rolling within a major version, between Fedora and RHEL"
    },
    "centos": {
      "intro": "CentOS Linux was once the best-known free rebuild of RHEL, appearing in 2004 and providing a highly RHEL-compatible binary distribution by recompiling RHEL source code. It carried no Red Hat trademarks or commercial support, but inherited RHEL's stable ABI, SELinux and ten-year lifecycle, which made it extremely popular for web hosting, research clusters and internal enterprise systems. In late 2020 Red Hat announced that CentOS Linux 8 would end early, at the end of 2021, with the project's focus shifting to CentOS Stream; CentOS 7 stopped being maintained on 30 June 2024 as originally planned. That decision directly gave rise to new rebuilds such as Rocky Linux and AlmaLinux. Today CentOS Linux should only appear in historical environments or offline archives; continuing to run an EOL release means losing security updates, and if migration is needed you should evaluate Rocky, Alma, Oracle Linux or buying a RHEL subscription outright.",
      "highlights": [
        "Once the most widely used free rebuild of RHEL",
        "Highly binary compatible with RHEL",
        "Ten-year lifecycle and the SELinux enterprise stack",
        "The 2021 turning point toward CentOS Stream"
      ],
      "pros": [
        "Historically stable with good compatibility",
        "Enterprise software and documentation could be reused directly",
        "No subscription cost"
      ],
      "cons": [
        "Security updates have ended",
        "The early EOL of the 8 series caused migration disruption",
        "The software stack of older releases is outdated"
      ],
      "status_note": "CentOS Linux 8 ended early on 2021-12-31, shifting the project to CentOS Stream; CentOS 7 reached EOL on 2024-06-30",
      "target_user": "Only suitable for historical research, offline archives or migration assessment",
      "release_cycle": "Discontinued; formerly a rebuild that followed RHEL"
    },
    "rocky": {
      "intro": "Rocky Linux was launched by CentOS co-founder Gregory Kurtzer in late 2020 and released in 2021, aiming to keep providing a free, RHEL-compatible rebuild after CentOS Linux moved to Stream. It builds packages by rebuilding RHEL source code, keeps the same ABI, SELinux policies, dnf toolchain and lifecycle as RHEL, and commits to governance by a community foundation so that no single vendor controls it. Rocky offers x86_64, aarch64, ppc64le and s390x among other architectures, and suits servers migrating from CentOS, virtualization nodes, HPC and internal enterprise applications. Its positioning overlaps heavily with AlmaLinux: both pursue RHEL compatibility, and the differences lie more in governance structure, release cadence, cloud images and support partners. Rocky offers no official commercial subscription, though third-party support services exist in the ecosystem. If you depend on software that appears only in the RHEL certification matrix, you should still check Rocky's compatibility statements.",
      "highlights": [
        "A community rebuild that is binary compatible with RHEL",
        "Community foundation governance, preventing single-vendor control",
        "About 10-year lifecycle with an enterprise toolchain",
        "Multi-architecture server and cloud images"
      ],
      "pros": [
        "Free access to a RHEL-compatible stack",
        "Low cost of migrating from CentOS",
        "Transparent governance structure"
      ],
      "cons": [
        "Ecosystem certification is less complete than RHEL's",
        "Community support relies on forums and third parties",
        "Software versions follow RHEL and are conservative"
      ],
      "status_note": "Actively maintained RHEL-compatible rebuild governed by a community foundation",
      "target_user": "Enterprises and non-profits that need free RHEL-compatible servers",
      "release_cycle": "Follows RHEL major versions with an approximately 10-year lifecycle"
    },
    "alma": {
      "intro": "AlmaLinux was introduced by the CloudLinux team in 2021 as another RHEL-compatible path after CentOS Linux ended. It provides a free enterprise-grade distribution by rebuilding RHEL source code, keeps dnf, SELinux, systemd and the RHEL lifecycle aligned, and has gradually moved under the governance of the AlmaLinux OS Foundation. Alma's distinguishing traits include fairly active cloud and container image releases, friendly support for third-party repositories such as EPEL, and migration-oriented tools. Its technical positioning is very close to Rocky Linux, so the choice usually comes down to an organization's preferences for governance, support partners, cloud platform preinstalled images and release cadence. AlmaLinux suits web servers, databases, virtualization, research and internal enterprise systems, and is often used as a RHEL development and test environment. Like all rebuilds, it does not include Red Hat's official support or trademark licensing; when certified software is involved, confirm whether the vendor accepts AlmaLinux.",
      "highlights": [
        "Binary compatible with RHEL and free to use",
        "Active cloud and container image releases",
        "Foundation governance and an open build process",
        "Migration tools and extensive documentation"
      ],
      "pros": [
        "Good RHEL compatibility and easy migration",
        "Solid support for cloud and container scenarios",
        "Free with a long lifecycle"
      ],
      "cons": [
        "Certification ecosystem still trails RHEL",
        "Clearly homogeneous with Rocky",
        "Enterprise support requires finding a separate vendor"
      ],
      "status_note": "Actively maintained, governed by the AlmaLinux OS Foundation",
      "target_user": "Cloud and enterprise users looking for a free RHEL-compatible stack",
      "release_cycle": "Follows RHEL major versions with an approximately 10-year lifecycle"
    },
    "oracle-linux": {
      "intro": "Oracle Linux is an enterprise Linux offered by Oracle since 2006, rebuilt from RHEL source code and deeply integrated with Oracle databases, middleware and cloud infrastructure. It offers two kernels: the RHEL-compatible Red Hat Compatible Kernel and the Unbreakable Enterprise Kernel (UEK), optimized for Oracle workloads. Oracle Linux can be downloaded and used free of charge, with security updates and errata provided at no cost, while commercial support is purchased through an Oracle subscription. It suits running Oracle Database, Oracle Cloud Infrastructure instances and enterprise applications that need RHEL compatibility; UEK adds optimizations in some I/O, virtualization and database scenarios. Note that the scope of free support differs from a RHEL subscription, and complex issues still require commercial support; the distribution is also fairly tightly bound to the Oracle ecosystem, so non-Oracle users may prefer Rocky or AlmaLinux.",
      "highlights": [
        "Choice of a RHEL-compatible kernel or UEK",
        "Free download and security updates",
        "Deep integration with Oracle Database and OCI",
        "Enterprise lifecycle and support subscriptions"
      ],
      "pros": [
        "Free access to a RHEL-compatible stack",
        "UEK is optimized for Oracle workloads",
        "Good integration with Oracle cloud and databases"
      ],
      "cons": [
        "Fairly tightly bound to the Oracle ecosystem",
        "Limited scope of free support",
        "Less community activity than Rocky or Alma"
      ],
      "status_note": "Actively maintained, with both free and paid support options",
      "target_user": "Enterprises running Oracle Database or OCI workloads",
      "release_cycle": "Follows RHEL major versions with long-term support"
    },
    "amazon-linux": {
      "intro": "Amazon Linux is a Linux distribution optimized by AWS for cloud environments, first launched in 2011 and now in its third generation with Amazon Linux AMI, Amazon Linux 2 and Amazon Linux 2023. It builds on the rpm and dnf toolchain of the Fedora/RHEL ecosystem but adds kernel, boot-speed, security agent and cloud tool integration for AWS services such as EC2, Lambda, ECS and EKS. Amazon Linux 2023 adopts a clearer versioning policy: quarterly updates, five years of support, and repository locking to prevent accidental major-version drift. It suits running web services, container nodes and batch jobs on AWS, and is often used as a base for CI images and autoscaling. Note that Amazon Linux targets the AWS environment, so some integration tools and support channels stop working outside AWS; its software sources are not fully compatible with RHEL, and it should not be treated as a general-purpose RHEL rebuild.",
      "highlights": [
        "Kernel and boot process optimized for AWS cloud environments",
        "Quarterly updates with a defined five-year support period",
        "Pre-integrated AWS CLI, SSM and cloud agents",
        "x86_64 and aarch64 architectures"
      ],
      "pros": [
        "Works out of the box on AWS",
        "Predictable update policy",
        "Tight integration with AWS services"
      ],
      "cons": [
        "Loses value outside AWS",
        "Software sources are not fully RHEL-compatible",
        "Limited support for desktops and general-purpose use"
      ],
      "status_note": "Amazon Linux 2023 is supported until 2029, with AWS continuing to provide updates",
      "target_user": "Cloud engineers deploying services on AWS",
      "release_cycle": "Amazon Linux 2023 offers deterministic long-term support with quarterly updates"
    },
    "nobara": {
      "intro": "Nobara is a Fedora derivative geared toward gaming and content creation, launched in 2022 by Thomas Crider (GloriousEggroll), the maintainer of Proton-GE. On top of Fedora it preinstalls many game-related components — Steam, Proton, Wine, MangoHud, Gamescope, OBS Studio, multimedia codecs and NVIDIA driver tools — and enables by default some patches that Fedora omits for policy or stability reasons. Nobara comes in GNOME and KDE Plasma editions, and after installation games and streaming workflows largely run out of the box, saving a lot of manual configuration. It suits Linux gamers and content creators who do not want to tinker with drivers, Proton and OBS, and also users who treat Fedora as their main system but want a stronger out-of-the-box experience. Note that Nobara is a project led by an individual, its release cadence may lag behind Fedora, and some custom packages differ from the official repositories; read the announcements and back up data before upgrading a major version.",
      "highlights": [
        "Game components such as Proton-GE, Wine and MangoHud preinstalled",
        "OBS Studio and multimedia creation tools integrated",
        "NVIDIA drivers and codecs configured out of the box",
        "Both GNOME and KDE Plasma editions"
      ],
      "pros": [
        "Strong out-of-the-box gaming and streaming experience",
        "Saves a lot of post-install configuration on Fedora",
        "Keeps pace with the Proton ecosystem"
      ],
      "cons": [
        "Led by an individual; long-term sustainability is uncertain",
        "Release updates may lag behind Fedora",
        "Custom packages add upgrade complexity"
      ],
      "status_note": "Actively maintained Fedora derivative for gaming and content creation",
      "target_user": "Gamers who want to play and record out of the box on Fedora",
      "release_cycle": "Follows Fedora releases, usually updating within a few months of a new Fedora"
    },
    "bazzite": {
      "intro": "Bazzite is an immutable system built by the Universal Blue community on top of Fedora Atomic, appearing in 2023 with the goal of giving PC handhelds, living-room consoles and ordinary desktops a gaming experience close to SteamOS while retaining Fedora's desktop capabilities. It preinstalls Steam, Proton, Gamescope, MangoHud, Lutris and EmuDeck among other tools, offers KDE Plasma and GNOME editions, and ships images targeted at devices such as the Steam Deck and ROG Ally. Bazzite uses rpm-ostree atomic updates so rolling the system back is easy, applications are installed mainly through Flatpak, and the 'ujust' command set bundles many common maintenance and tuning operations. It suits players who want a low-maintenance 'console-like' experience without being locked into Valve hardware, and Fedora users who want both desktop and gaming. Note that third-party hardware compatibility still has to be confirmed device by device, some anti-cheat games cannot run, and the community images' update cadence is not fully in sync with official Fedora.",
      "highlights": [
        "Fedora Atomic immutable base with atomic updates",
        "Images for handhelds, living rooms and desktops",
        "Steam, Proton and EmuDeck preconfigured",
        "The ujust command set simplifies maintenance"
      ],
      "pros": [
        "Broader hardware coverage than SteamOS",
        "The system can be rolled back, with low maintenance cost",
        "Complete gaming toolchain"
      ],
      "cons": [
        "Large image sizes",
        "Unofficial hardware still needs verification",
        "Limited support for anti-cheat games"
      ],
      "status_note": "Actively maintained gaming and handheld system based on Fedora Atomic",
      "target_user": "Gamers who want a SteamOS-like experience on a range of PC hardware",
      "release_cycle": "Follows Fedora Atomic releases, with images updated continuously"
    },
    "openeuler": {
      "intro": "openEuler is a server operating system community launched by Huawei in 2019 and later donated to the OpenAtom Foundation, positioned as an enterprise-grade general-purpose Linux platform. It draws on the engineering accumulated in EulerOS and uses the rpm/dnf toolchain, supports x86_64, aarch64, riscv64 and loongarch64 among other architectures, and is widely used in domestic hardware ecosystems such as Kunpeng and Ascend. openEuler follows a cadence of roughly one LTS every two years, with the community providing long-term maintenance for kernel, virtualization, container, database and cloud-native components, and it has spawned commercial distributions from Kylin, UnionTech and others. It suits enterprises and institutions that need domestic adaptation, ARM servers, cloud infrastructure or long-term support. Compared with the RHEL family, openEuler has its own software sources and version cadence, so RHEL certification conclusions cannot be applied directly; community documentation is mostly in Chinese, which is friendly to users in China. Before choosing it, confirm whether the target hardware, databases and middleware appear on openEuler's compatibility list.",
      "highlights": [
        "Supports x86, ARM, RISC-V and LoongArch architectures",
        "One LTS every two years with enterprise-grade long-term maintenance",
        "Broad adaptation to domestic hardware and cloud ecosystems",
        "Governed by the OpenAtom Foundation"
      ],
      "pros": [
        "Good adaptation for domestic hardware and ARM servers",
        "Chinese-language documentation and community support",
        "Leading multi-architecture coverage"
      ],
      "cons": [
        "International ecosystem and certifications are still being built",
        "RHEL certifications do not carry over",
        "Some commercial capabilities depend on downstream vendors"
      ],
      "status_note": "Actively maintained server operating system incubated by the OpenAtom Foundation",
      "target_user": "Enterprises and institutions needing domestic, multi-architecture server platforms",
      "release_cycle": "An LTS roughly every two years, with the community providing continuous updates"
    },
    "scientific-linux": {
      "intro": "Scientific Linux was an RHEL rebuild maintained jointly since 2004 by research institutions such as Fermilab and CERN, aiming to give high-energy physics, laboratory clusters and scientific computing a stable, predictable and free platform. It removed Red Hat trademarks, added a small number of research-oriented drivers and tools, and stayed highly compatible with RHEL; alongside CentOS it was once the default system in many labs and university machine rooms. As the CentOS ecosystem changed and maintenance costs rose, Fermilab announced that development would stop after 7.9 and support ended on 30 June 2024, recommending that users migrate to AlmaLinux, Rocky Linux or another supported platform. Scientific Linux today is suitable as a historical case study and for offline environments, and it should no longer be used on internet-connected production systems. It embodied research institutions' need for long-term reproducible environments and is also a reminder that the sustainability of community distributions must be assessed as well.",
      "highlights": [
        "Jointly maintained by research institutions such as Fermilab and CERN",
        "A scientific computing platform highly compatible with RHEL",
        "Once widely used in labs and university clusters",
        "Official support ended in 2024"
      ],
      "pros": [
        "Historically stable and suited to research clusters",
        "Compatible with the RHEL software stack",
        "Free and predictable"
      ],
      "cons": [
        "Security updates have ended",
        "Limited migration paths",
        "Outdated packages"
      ],
      "status_note": "Fermilab ended support on 2024-06-30 and recommends migrating to AlmaLinux, Rocky Linux and others",
      "target_user": "Only suitable for historical research, archives or migration assessment",
      "release_cycle": "Discontinued; formerly a research-oriented RHEL rebuild"
    },
    "debian": {
      "intro": "Debian GNU/Linux was created by Ian Murdock in 1993 and is one of the earliest and most complete community distributions. It is maintained by volunteers worldwide through the Debian Social Contract and the Debian Free Software Guidelines (DFSG), and is known for stability, the size of its software archive and its architecture coverage. Debian's release process is rigorous: a testing release becomes stable only after a long freeze and bug-fixing period, so software versions are usually not new but are very well suited to servers, research and long-running systems. apt/dpkg form its package management base, and nearly every distribution in the Debian family inherits or references these tools. Debian ships GNOME by default and also offers KDE, Xfce, LXQt and other install options; the main repository contains only free software, while non-free and firmware must be explicitly enabled by the user. It suits users willing to accept a 'stability first' policy who value community governance and software freedom and want an extremely long lifecycle. Compared with Ubuntu, Debian is purer, slower, and subject to less commercial influence.",
      "highlights": [
        "Community distribution governed by volunteers worldwide",
        "A huge software archive with multi-architecture support",
        "Long lifecycle for stable releases, suited to servers",
        "The DFSG free software guidelines have had far-reaching influence"
      ],
      "pros": [
        "Extremely stable with a reliable upgrade path",
        "Wide package count and architecture coverage",
        "Transparent community governance with no vendor lock-in"
      ],
      "cons": [
        "Older software versions in stable releases",
        "The installer and desktop configuration feel traditional",
        "Firmware and proprietary drivers must be enabled separately"
      ],
      "status_note": "Debian 13 (Trixie) is the current stable release, with LTS support continuing into the 2030s",
      "target_user": "Server and desktop users who value stability, freedom and community governance",
      "release_cycle": "A stable release roughly every 2 years, supported for about 5 years (including LTS)"
    },
    "mx-linux": {
      "intro": "MX Linux is a Debian stable derivative created in 2014 through a collaboration between the MEPIS and antiX communities, and it has long ranked near the top of DistroWatch interest. It uses Xfce by default and also offers KDE Plasma and Fluxbox editions; the system is light, boots quickly, and provides a set of graphical maintenance tools through MX Tools: snapshots, boot repair, kernel installation, package management, drivers and user settings can all be handled with a few clicks. MX also lets users choose between systemd and sysvinit at boot, serving both modern software and traditional service management. Because it is based on Debian stable, software versions are relatively conservative, but stability and hardware compatibility are good, making it suitable for old computers, office desktops, home users and people migrating from Windows. Note that MX's custom tools coexist with native Debian workflows, so when asking for help you need to say which mechanism you are using; its default theme and interactions are also fairly traditional, and it is not a system chasing the latest visual style.",
      "highlights": [
        "MX Tools offers a rich set of graphical maintenance tools",
        "Based on Debian stable: stable with good compatibility",
        "Choose between systemd and sysvinit",
        "Lightweight Xfce desktop suited to old hardware"
      ],
      "pros": [
        "Ready to use out of the box and beginner-friendly",
        "Good experience on old and low-spec machines",
        "Snapshot and repair tools are genuinely useful"
      ],
      "cons": [
        "Software versions are on the old side",
        "Default visual style is fairly traditional",
        "Custom tools add to what there is to learn"
      ],
      "status_note": "Actively maintained; a desktop distribution based on Debian stable",
      "target_user": "Ordinary users who want a stable, lightweight, easy-to-maintain desktop",
      "release_cycle": "Follows Debian stable and ships periodic point releases"
    },
    "antix": {
      "intro": "antiX is a lightweight Debian derivative that split off from the MEPIS community in 2007, with the core goal of running smoothly even on old hardware. It uses IceWM by default and also offers extremely light window managers such as Fluxbox and JWM; it does not depend on systemd, using sysvinit by default with runit as an option. antiX is based on Debian stable and uses apt/dpkg, but the preinstalled software is trimmed down and memory usage is low, making it suitable for old 32-bit machines, netbooks, recycled computers and teaching environments. It offers a live mode, persistent storage and remastering tools, so it can run directly from a USB stick. antiX suits users who accept a plainer interface and need low resource usage and predictable stability; if you want a modern desktop and a full application suite, MX Linux or Linux Mint are better fits. Note that antiX's software versions are older, and some modern web and video applications will still struggle on old hardware.",
      "highlights": [
        "Extremely low resource usage, supports old 32-bit machines",
        "Lightweight IceWM/Fluxbox/JWM desktops",
        "sysvinit by default, runit optional",
        "Live persistence and remastering tools"
      ],
      "pros": [
        "Strong at bringing old hardware back to life",
        "Trim system that boots fast",
        "Based on Debian stable, reliable"
      ],
      "cons": [
        "Plain interface with a learning curve",
        "Limited experience with modern heavy applications",
        "Older software versions"
      ],
      "status_note": "Actively maintained; a lightweight Debian derivative",
      "target_user": "Owners of old computers, lightweight-desktop enthusiasts and teaching environments",
      "release_cycle": "Follows Debian stable; point releases appear irregularly"
    },
    "devuan": {
      "intro": "Devuan is a Debian fork started in 2014 by a group of Debian developers and system administrators, which released its first stable version in 2017 with the goal of providing a Debian-compatible system that does not force systemd. It keeps apt/dpkg, the Debian repository structure and the Social Contract, but switches the default to sysvinit and also supports alternative inits such as openrc; many packages that depend on systemd must be repackaged or replaced with alternatives. Devuan suits users who have clear technical or philosophical objections to systemd yet want to stay in the Debian ecosystem, as well as embedded, container and traditional service-management scenarios. Compared with Artix, Devuan stays closer to Debian's release rhythm and package-management habits, but software versions are likewise on the conservative side. Note that Devuan packages are not fully binary-compatible with Debian, so installing third-party .deb files or using Ubuntu PPAs can run into dependency problems; desktop environments and hardware support also lag slightly.",
      "highlights": [
        "Debian's systemd-free fork",
        "sysvinit by default, openrc optional",
        "Keeps apt/dpkg and the Debian ecosystem",
        "Community governance with a focus on init freedom"
      ],
      "pros": [
        "Low migration cost for Debian users",
        "Init choice matches traditional Unix habits",
        "Stable and predictable"
      ],
      "cons": [
        "Packages are not fully compatible with Debian",
        "Some modern software depends on systemd",
        "Slow release cadence"
      ],
      "status_note": "Actively maintained; Debian's systemd-free fork",
      "target_user": "Users who reject systemd but want to stay in the Debian ecosystem",
      "release_cycle": "Follows Debian stable, with releases lagging somewhat behind"
    },
    "kali": {
      "intro": "Kali Linux was released by OffSec (formerly Offensive Security) in 2013 as the successor to BackTrack, and is one of the best-known distributions in penetration testing and security auditing. It is based on Debian testing with rolling updates and ships hundreds of preinstalled security tools covering information gathering, vulnerability scanning, web testing, wireless attacks, reverse engineering, forensics and reporting. Kali offers Xfce, GNOME and KDE desktop editions, plus WSL, ARM, container and cloud images so that authorized testing can be carried out in different environments. It emphasizes being a platform rather than a daily desktop: the default configuration, kernel and toolchain all serve security testing, and ordinary office use is not its optimization target. Kali suits security students, penetration testers, CTF players and security teams that need a portable toolset. It must be stressed that all tools may only be used against targets for which you have explicit authorization. Kali's commercial side is mainly training, certification and support services; the distribution itself can be downloaded for free.",
      "highlights": [
        "Large set of preinstalled security-testing and forensics tools",
        "Based on Debian testing with rolling updates",
        "WSL, ARM, container and cloud images available",
        "OffSec's training and certification ecosystem"
      ],
      "pros": [
        "Comprehensive security-tool coverage",
        "Rich documentation and training resources",
        "Several platform forms make it easy to carry"
      ],
      "cons": [
        "Not suitable as an everyday desktop",
        "Huge number of tools that you must vet yourself",
        "Rolling updates can introduce compatibility issues"
      ],
      "status_note": "Actively maintained; a security-testing platform supported by OffSec",
      "target_user": "Authorized security testers and cybersecurity students",
      "release_cycle": "Continuously rolling on Debian testing, with quarterly image updates"
    },
    "parrot": {
      "intro": "Parrot OS (Parrot Security OS) is a Debian testing derivative that appeared in 2013. It belongs to the same security-testing field as Kali but emphasizes a balance of security, privacy and everyday usability. It ships penetration testing, digital forensics, reverse engineering and anonymous-communication tools while also providing a fairly complete desktop environment and development tools; its default desktop was MATE for a long time, and KDE Plasma and Xfce editions are also available. Parrot's Home edition targets everyday use, while the Security edition leans toward testing workflows; the system includes Tor, AnonSurf, firewall and encryption tools, which suits privacy-conscious users. It fits security students, penetration testers, privacy advocates and people who want one machine for both development and security experiments. Note that Parrot is likewise rolling, so tools and desktop components may change along with Debian testing; security tools must be used within the law and the scope of authorization. Parrot's commercial revenue comes mainly from support, training and enterprise services.",
      "highlights": [
        "Balances security-testing and privacy tools",
        "Based on Debian testing with rolling updates",
        "Home and Security editions for different purposes",
        "Built-in Tor, AnonSurf and encryption tools"
      ],
      "pros": [
        "Serves both security experiments and daily use",
        "Privacy tools are tightly integrated",
        "Desktop experience is more complete than in some security distributions"
      ],
      "cons": [
        "Rolling updates require active maintenance",
        "Security tools likewise require authorization",
        "Smaller enterprise support ecosystem than Kali"
      ],
      "status_note": "Actively maintained; a Debian derivative that balances security and privacy",
      "target_user": "Security professionals who care about privacy and need security tools",
      "release_cycle": "Continuously rolling on Debian testing"
    },
    "deepin": {
      "intro": "deepin (Deepin Operating System) traces back to Hiweed Linux in 2004 and since 2010 has gradually developed into a desktop distribution centered on the Deepin Desktop Environment (DDE). It is based on Debian but provides its own desktop shell, Control Center, Deepin Store, screenshot and screen-recording tools, file manager and other components; its visuals and interactions are relatively mature among Chinese distributions. deepin does considerable localization work for Chinese input methods, fonts, office and media scenarios, making it suitable for Chinese-speaking users who want an out-of-the-box experience, a modern interface and little familiarity with Linux internals. It supports x86_64, ARM64 and LoongArch among other architectures, and offers both a community edition and commercial ecosystem products. Note that the deepin repositories include some proprietary components and are not fully compatible with official Debian repositories; its release rhythm and upstream synchronization strategy have also drawn debate. If you need enterprise support and a longer lifecycle, you should evaluate commercial editions such as UnionTech UOS.",
      "highlights": [
        "In-house DDE desktop with complete visuals and interactions",
        "Good Chinese input methods, fonts and localization",
        "Deepin Store offers one-click installation",
        "Supports x86, ARM and LoongArch"
      ],
      "pros": [
        "Friendly to Chinese users and ready out of the box",
        "Mature desktop design with consistent components",
        "Actively adapts to domestic hardware"
      ],
      "cons": [
        "Contains proprietary components and is less free than Debian",
        "Not fully compatible with Debian repositories",
        "Release cadence has been controversial"
      ],
      "status_note": "Actively maintained; notable for its Chinese-language desktop experience",
      "target_user": "Ordinary users who want a modern Chinese-language desktop experience",
      "release_cycle": "Major versions released annually, with continuous updates"
    },
    "q4os": {
      "intro": "Q4OS is a Debian derivative that appeared in 2013, and its most distinctive feature is the use of the Trinity Desktop Environment (TDE). TDE continues the design language of KDE 3 with a compact interface and low resource usage, making it very friendly to users accustomed to classic Windows or KDE 3. Q4OS offers both Trinity and KDE Plasma desktops, supports 32-bit and ARM devices, and is based on Debian stable using apt/dpkg, so stability and software compatibility are good. It also offers theme packages such as XPQ4 that make the desktop look closer to older versions of Windows, so it is often used for refurbishing old computers, in schools and in office environments. Q4OS suits users who need a lightweight, stable, traditional desktop layout, especially people migrating from Windows who do not want modern GNOME interactions. Note that Trinity's software ecosystem differs from mainstream desktops, so some modern applications may lack native integration; Q4OS's community is also small.",
      "highlights": [
        "Trinity Desktop Environment continues the KDE 3 style",
        "Low resource usage, suited to old computers",
        "Based on Debian stable, stable and reliable",
        "Provides classic Windows-style themes"
      ],
      "pros": [
        "Friendly to old hardware with a familiar interface",
        "Stable system that is simple to maintain",
        "32-bit support still has value"
      ],
      "cons": [
        "Trinity ecosystem is fairly marginal",
        "Limited integration of modern applications",
        "Small community"
      ],
      "status_note": "Actively maintained; distinctive for its Trinity desktop and lightweight experience",
      "target_user": "Owners of old computers who like a traditional desktop layout",
      "release_cycle": "Follows Debian stable and provides point releases"
    },
    "pureos": {
      "intro": "PureOS is a Debian derivative maintained by Purism, appearing in 2014 and recognized by the Free Software Foundation (FSF) as a fully free distribution. By default it enables only repositories that meet the free-software definition, uses the Linux-libre kernel, and ships GNOME with a set of privacy tools, aiming to keep users within a free-software ecosystem from firmware to applications. PureOS is the factory system for Purism's Librem laptops and the Librem 5 phone, with the desktop and mobile editions (based on Phosh) sharing many components. It suits users who value privacy, software freedom and auditability, particularly Purism customers willing to pay a premium for hardware. Note that fully free hardware support is limited, and some Wi-Fi, graphics and acceleration features may be unavailable; as a company-led project, PureOS's direction is also closely tied to Purism's hardware sales. If you only want Debian's stability and free-software philosophy, standard Debian may be more flexible.",
      "highlights": [
        "An FSF-recognized fully free distribution",
        "Factory system for Purism Librem devices",
        "Privacy and free-software tools enabled by default",
        "Desktop GNOME and mobile Phosh side by side"
      ],
      "pros": [
        "High free-software compliance",
        "Good privacy defaults",
        "Deeply adapted to Purism hardware"
      ],
      "cons": [
        "Limited hardware compatibility",
        "Software versions are on the conservative side",
        "Tied to the vendor's ecosystem"
      ],
      "status_note": "Actively maintained; an FSF-recognized fully free distribution",
      "target_user": "Purism users who value privacy and software freedom",
      "release_cycle": "Follows Debian stable, with updates provided by Purism"
    },
    "tails": {
      "intro": "Tails (The Amnesic Incognito Live System) is a bootable live system centered on privacy and anonymous communication, first appearing in 2009. It boots from a USB stick or DVD, routes all network traffic through Tor by default, and leaves no session traces after shutdown; users can opt for an encrypted persistent volume to keep a small number of files or settings. Tails is based on Debian and ships Tor Browser, a password manager, encryption tools and office software, designed to lower the barrier for ordinary users to communicate securely. It is widely used by journalists, activists, privacy researchers and anyone handling sensitive information. Tails suits temporary use on untrusted computers and situations where local traces must be avoided; it is not intended as a daily primary desktop and does not offer a traditional installation to disk. Note that Tails cannot defend against every threat: hardware-level backdoors, traffic correlation analysis and user mistakes can still expose identity, so read the official threat model and security guide before use.",
      "highlights": [
        "Routes all network traffic through Tor by default",
        "Traceless live system: shutting down wipes the session",
        "Optional encrypted persistent storage",
        "Built-in Tor Browser, encryption and office tools"
      ],
      "pros": [
        "Privacy and anonymity protection on by default",
        "Portable and usable on untrusted computers",
        "Clear rhythm of security updates"
      ],
      "cons": [
        "Not suitable as an everyday system",
        "Limited performance and hardware compatibility",
        "Cannot defend against every threat"
      ],
      "status_note": "Actively maintained; a portable system for anonymous communication and privacy protection",
      "target_user": "Journalists, activists and users who need anonymous communication",
      "release_cycle": "Security-update releases roughly every 4–8 weeks"
    },
    "vanilla": {
      "intro": "Vanilla OS is a desktop distribution that appeared in 2022. It was initially based on Ubuntu, and starting with 2.0 \"Orchid\" it moved to Debian unstable, adopting ABRoot for an immutable system with atomic updates. Its core idea is a clean host system plus on-demand containers: the base system stays read-only and rollback-capable, while applications and development environments can live in Distrobox/APX containers, avoiding dependency conflicts that pollute the main system. Vanilla OS uses GNOME by default and offers a control center, first-party applications and Flatpak support; the interface is close to vanilla GNOME but puts more emphasis on ease of use. It suits desktop users who want the Debian software ecosystem together with the reliability of an immutable system, especially developers and people who like trying new workflows. Note that Vanilla OS's containerized workflow differs from the traditional \"apt install\" habit; it is also not an official Debian project, and the 2.0 architecture changed substantially, so early documentation and community experience may be outdated. Whether it belongs to the Debian or Ubuntu family is debated; here it is grouped under Debian based on its actual 2.0 upstream.",
      "highlights": [
        "ABRoot immutable system with atomic updates",
        "APX/Distrobox containerized application workflow",
        "Newer software based on Debian unstable",
        "GNOME desktop with a control center"
      ],
      "pros": [
        "Stable system that can be rolled back",
        "Clean host system with few dependency conflicts",
        "Modern, uncluttered desktop experience"
      ],
      "cons": [
        "Very different from the traditional apt workflow",
        "Young project whose documentation is still evolving",
        "Containerization adds resource and learning costs"
      ],
      "status_note": "Actively maintained; an immutable desktop system based on Debian",
      "target_user": "Developers and advanced users who want to try an immutable Debian desktop",
      "release_cycle": "Released as major versions; system updates arrive as atomic images"
    },
    "armbian": {
      "intro": "Armbian is a build framework and image collection for ARM single-board computers that appeared in 2015, supporting a large number of boards such as Raspberry Pi, Orange Pi, Rock Pi, Banana Pi and Odroid, with a choice of Debian or Ubuntu underneath. It provides minimal server images and desktop images with Xfce, and integrates the armbian-config tool for configuring networking, SSH, the kernel, overlays and on-board hardware. Armbian's value lies in combining upstream kernels, U-Boot and board patches into bootable, maintainable images, saving users the manual porting work; it also offers nightly and stable channels, making it suitable for NAS, home servers, edge computing and IoT prototypes. Note that support quality varies widely between boards, some images rely on community maintenance, and kernel upgrades may affect hardware features; validate on the target board before using it in production. Armbian is not a single desktop distribution but rather a system distribution platform for ARM boards.",
      "highlights": [
        "Covers a large number of ARM single-board computers",
        "Choice of Debian or Ubuntu base",
        "armbian-config centralizes hardware and service configuration",
        "Both server and lightweight desktop images"
      ],
      "pros": [
        "Saves the work of porting ARM boards",
        "Broad board coverage and an active community",
        "Suited to NAS, edge and IoT use"
      ],
      "cons": [
        "Support quality varies between boards",
        "Kernel and U-Boot upgrades carry higher risk",
        "Documentation is scattered across boards and versions"
      ],
      "status_note": "Actively maintained; a distribution aimed at ARM single-board computers",
      "target_user": "Users building servers or prototypes on ARM single-board computers",
      "release_cycle": "Continuous board images and kernel updates"
    },
    "raspberry-pi-os": {
      "intro": "Raspberry Pi OS is the official system the Raspberry Pi Foundation provides for its own single-board computers. It descends from Raspbian, which appeared in 2012, and was renamed Raspberry Pi OS in 2020. It is based on Debian and uses apt/dpkg, with dedicated adaptation for the Raspberry Pi's VideoCore GPU, GPIO, camera and power management, offered in desktop and Lite server editions. The desktop environment was long PIXEL, a customized LXDE, and newer versions are gradually moving to Wayland/Labwc; the system also bundles raspi-config, Raspberry Pi Imager and a wealth of educational software. It suits students, teachers, makers, home-server users and people encountering Linux for the first time, and it is the default gateway into the Raspberry Pi hardware ecosystem. Note that Raspberry Pi OS follows Debian stable for software versions, so newer desktop and kernel features may lag; on non-Raspberry Pi hardware some drivers and tools are unavailable. It is an official free system whose commercial value comes mainly from hardware sales.",
      "highlights": [
        "Official Raspberry Pi system with complete hardware adaptation",
        "Desktop and Lite server editions",
        "raspi-config plus camera and GPIO tools",
        "Rich educational software and maker ecosystem"
      ],
      "pros": [
        "Raspberry Pi works out of the box",
        "Excellent hardware and GPIO support",
        "Abundant tutorials and community resources"
      ],
      "cons": [
        "Software versions follow Debian and are older",
        "Aimed mainly at Raspberry Pi hardware",
        "Desktop performance is limited by the board"
      ],
      "status_note": "Maintained by Raspberry Pi Ltd; the official system preinstalled on its hardware",
      "target_user": "Raspberry Pi users, students, teachers and makers",
      "release_cycle": "Follows Debian stable, with image updates released as needed"
    },
    "knoppix": {
      "intro": "Knoppix was released by German developer Klaus Knopper in 2000 and is one of the earliest distributions to popularize the idea of putting a complete Linux desktop on a live CD. Based on Debian, it detects hardware automatically at boot and once provided a browser, office suite, networking tools and a rescue environment without installing the system, profoundly influencing later Ubuntu Live CDs and Tails. Knoppix also supports persistent storage and hard-disk installation, and was long used for system rescue, teaching demonstrations and trying out old computers. As live systems became mainstream and Knoppix's update pace slowed, the project has had no new release since version 9.1 in 2021 and has entered a dormant state. Today it is better suited as a subject for studying Linux history and live technology; if you need a rescue system on modern hardware, consider still-maintained options such as GParted Live, SystemRescue or Tails.",
      "highlights": [
        "One of the first distributions to popularize the live CD desktop",
        "Strong automatic hardware detection and system rescue capability",
        "Based on Debian and supports persistent storage",
        "Deeply influenced later live systems"
      ],
      "pros": [
        "Historically significant with advanced design ideas",
        "A full desktop can be tried without installation",
        "Useful in system rescue scenarios"
      ],
      "cons": [
        "Unmaintained for a long time, high security risk",
        "Insufficient support for modern hardware",
        "Dated software versions"
      ],
      "status_note": "No updates since 9.1 in 2021; the project is dormant",
      "target_user": "Linux history researchers, offline rescue and teaching demonstrations",
      "release_cycle": "No new version has been released for a long time"
    },
    "ubuntu": {
      "intro": "Ubuntu was released in 2004 by Canonical, the company founded by Mark Shuttleworth, and is based on Debian with the goal of making free software \"usable for ordinary people\". It established the cadence of a release every 6 months and an LTS every 2 years, backed by 5 years of standard support (extendable to beyond 10 years). Ubuntu uses GNOME by default and offers official flavours such as Kubuntu, Xubuntu, Lubuntu, Ubuntu MATE, Ubuntu Budgie, Ubuntu Studio and Ubuntu Kylin, covering different desktop and language needs. apt and snap coexist, the software ecosystem is huge, and both hardware compatibility and cloud image support are very mature. It suits a broad range of uses from personal desktops and developer machines to enterprise servers, and it is also the base for many downstream distributions. Controversy centres mainly on the default promotion of snap, some proprietary components and Canonical's commercial strategy; those who prefer a purely community-driven or fully free-software system may find Debian or Trisquel a better fit. Ubuntu itself is free, while Ubuntu Pro offers paid extended security maintenance.",
      "highlights": [
        "6-month release cadence plus an LTS every 2 years",
        "Many official flavours and plenty of desktop choices",
        "Mature cloud image, server and developer ecosystem",
        "Canonical provides commercial support and Ubuntu Pro"
      ],
      "pros": [
        "Good software and hardware compatibility, abundant documentation",
        "Long LTS life cycle, widely adopted by enterprises",
        "Official flavours cover many desktop preferences"
      ],
      "cons": [
        "The default snap policy is controversial",
        "Some components include proprietary content",
        "Non-LTS releases have a shorter support period"
      ],
      "status_note": "LTS releases get 5 years of standard support, extendable to 10–12 years; non-LTS releases are supported for 9 months",
      "target_user": "A general-purpose Linux platform suitable from beginners to enterprise users",
      "release_cycle": "One release every 6 months; an LTS every 2 years, with LTS support lasting 5–10 years"
    },
    "linux-mint": {
      "intro": "Linux Mint was founded by Clement Lefebvre in 2006 and is one of the most popular distributions among users migrating from Windows. It is based on Ubuntu LTS (LMDE being the Debian-based alternative) but redesigns the desktop experience: the three official editions with Cinnamon, MATE and Xfce all offer a traditional taskbar, start menu and familiar window layout while keeping the apt ecosystem and Ubuntu's repositories. Mint ships its own Update Manager, software manager, backup tool and theme settings, does not force snap by default and follows a fairly conservative update policy, emphasising \"stable, easy to use, unobtrusive\". It suits home users, office desktops, older computers and people trying Linux for the first time. Note that Mint's software versions track Ubuntu LTS and are usually older than those in Fedora or Arch; Cinnamon's Wayland support is still progressing, and some new hardware or high-DPI displays are handled less well than under GNOME. Linux Mint has no commercial edition and is maintained by a community team.",
      "highlights": [
        "Three traditional desktops: Cinnamon, MATE and Xfce",
        "Based on Ubuntu LTS, stable with a long support cycle",
        "Update Manager and the Mint toolchain are easy to use",
        "No forced snap by default, respecting user choice"
      ],
      "pros": [
        "The friendliest option for users migrating from Windows",
        "Stable and usable straight out of the box",
        "Consistent desktop experience with rich documentation"
      ],
      "cons": [
        "Software versions tend to be old",
        "Wayland and support for some new hardware lag behind",
        "Mainly aimed at x86_64"
      ],
      "status_note": "Linux Mint 22.x is based on Ubuntu 24.04 LTS and is supported until 2029",
      "target_user": "Users migrating from Windows who want a stable, easy-to-use desktop",
      "release_cycle": "Follows Ubuntu LTS with roughly one point release per year, supported until 2029"
    },
    "pop-os": {
      "intro": "Pop!_OS is an Ubuntu derivative launched by System76 in 2017, originally to give the company's own Linux laptops and desktops a better out-of-the-box experience and later becoming a general-purpose desktop for developers and creators. It follows Ubuntu LTS and provides encrypted installation, hybrid graphics switching, firmware updates and custom tools such as Pop!_Shop, and it has long been known for a \"low-distraction, keyboard-friendly\" interaction model. Pop!_OS once used a heavily customised GNOME before moving to its own COSMIC desktop environment, which emphasises performance, customisability and a Rust technology stack. It suits developers, data-science users, gamers and Linux users who want more recent hardware support. Note that COSMIC is still evolving and some features and the third-party extension ecosystem are less mature than GNOME's; Pop!_OS's update cadence is also tied to Ubuntu LTS, so software versions are not especially new. System76 makes its money from hardware sales and support services, while the system itself is free to download.",
      "highlights": [
        "System76 hardware optimisation and firmware tools",
        "In-house COSMIC desktop, keyboard-friendly",
        "Encrypted installation and hybrid graphics switching",
        "Based on Ubuntu LTS with ecosystem compatibility"
      ],
      "pros": [
        "A good experience for developers and creators",
        "Active hardware compatibility and driver support",
        "Efficient desktop interaction"
      ],
      "cons": [
        "The COSMIC ecosystem is still growing",
        "Software versions follow LTS and are conservative",
        "Mainly aimed at System76 hardware and x86_64"
      ],
      "status_note": "Actively maintained; System76's desktop and hardware-optimised distribution",
      "target_user": "Developers, creators and System76 hardware users",
      "release_cycle": "Follows Ubuntu LTS, with custom updates provided by System76"
    },
    "elementary": {
      "intro": "elementary OS was initiated by Daniel Foré in 2011, is based on Ubuntu LTS and is best known for its in-house Pantheon desktop. It pursues a clean, macOS-like interaction: top panel, bottom dock, global menu, unified icons and Human Interface Guidelines that make first-party apps highly consistent in both looks and behaviour. elementary's AppCenter offers free and paid apps alike, encouraging developers to earn money from open-source software; the system supports Flatpak by default and reduces clutter through carefully chosen preinstalled software. It suits users who value design consistency and want a quiet, elegant desktop, and it also makes a good Linux system to hand to non-technical users. Note that elementary's hardware compatibility depends on Ubuntu LTS and its software versions are older; Pantheon's extension ecosystem is small compared with GNOME's, and some professional applications may need extra configuration. The project sustains itself through donations, app revenue sharing and enterprise support.",
      "highlights": [
        "In-house Pantheon desktop with unified interaction",
        "AppCenter supports both paid and free apps",
        "Based on Ubuntu LTS, stable and dependable",
        "Strict design guidelines and visual consistency"
      ],
      "pros": [
        "Refined interface and consistent interaction",
        "Friendly to non-technical users",
        "A complete app-centre experience"
      ],
      "cons": [
        "Software versions follow LTS and are older",
        "Limited Pantheon extension ecosystem",
        "Hardware compatibility depends on Ubuntu"
      ],
      "status_note": "Actively maintained, focused on a consistent desktop experience",
      "target_user": "Desktop users who value design consistency and a simple experience",
      "release_cycle": "Follows Ubuntu LTS with major-version releases"
    },
    "zorin": {
      "intro": "Zorin OS was founded by the Zorin brothers in 2009, is based on Ubuntu LTS and has a very clear goal: to let Windows and macOS users move to Linux painlessly. It offers a highly customised GNOME desktop that Zorin Appearance can switch with a single click into layouts resembling Windows 11, Windows 7, macOS or Ubuntu; Zorin Connect links phone and computer, Wine assistance and a Windows app installation entry point are built in, and preinstalled software is chosen to match migrants' habits. Zorin OS comes in a free Core edition and a paid Pro edition that adds more desktop layouts, applications and installation support, making it one of the few desktop distributions with a \"paid value-add\" model. It suits home users, office workers and schools, especially people new to Linux. Note that Zorin's software versions follow Ubuntu LTS and are usually older; the heavily customised desktop may need readjustment on major upgrades, and some advanced features require buying Pro.",
      "highlights": [
        "One-click switching between Windows/macOS-style layouts",
        "Zorin Connect phone integration",
        "Based on Ubuntu LTS, stable and easy to use",
        "Free Core plus paid Pro model"
      ],
      "pros": [
        "Low learning curve for migrating users",
        "Flexible desktop layouts",
        "Preinstalled software close to everyday needs"
      ],
      "cons": [
        "Software versions tend to be old",
        "Advanced features require payment",
        "Heavy customisation raises the cost of adapting to upgrades"
      ],
      "status_note": "Actively maintained, aimed at users migrating from Windows/macOS",
      "target_user": "Ordinary desktop users migrating from Windows/macOS",
      "release_cycle": "Follows Ubuntu LTS with major-version releases"
    },
    "kde-neon": {
      "intro": "KDE neon is a distribution launched by the KDE community in 2016, positioned not as \"yet another general-purpose Linux\" but as \"the official window onto the latest KDE Plasma\". It uses Ubuntu LTS as a stable base and layers KDE's continuously updated repositories on top, so the underlying system stays relatively stable while the Plasma desktop, KDE Frameworks and first-party applications quickly receive new versions. Neon offers channels such as User Edition, Testing and Unstable, and suits users who want to try new Plasma features first without compiling anything themselves or rolling the whole system. It suits KDE enthusiasts, desktop customisation hobbyists, Qt/KDE developers and anyone who wants a modern Plasma desktop without using Arch. Note that Neon's \"rolling\" applies only to the KDE software layer while the Ubuntu base remains LTS; mixing in third-party PPAs may break dependencies, and major Plasma upgrades can bring theme or plugin compatibility issues. It is not for users who want a fully rolling release or who prefer a life without tinkering.",
      "highlights": [
        "Ubuntu LTS base plus the latest KDE Plasma",
        "Maintained by KDE with a fast update cadence",
        "Graphical software management with Discover",
        "Suited to KDE developers and enthusiasts"
      ],
      "pros": [
        "New Plasma versions arrive quickly",
        "The underlying Ubuntu LTS base is fairly stable",
        "Official KDE support with direct documentation"
      ],
      "cons": [
        "The rolling KDE layer may introduce regressions",
        "Compatibility risks with third-party PPAs",
        "Not a fully rolling distribution"
      ],
      "status_note": "Actively maintained; KDE's official showcase distribution for Plasma",
      "target_user": "Users who want to experience the latest KDE Plasma first",
      "release_cycle": "Ubuntu LTS base plus continuously updated KDE software repositories"
    },
    "bodhi": {
      "intro": "Bodhi Linux was founded by Jeff Hoogland in 2010, is based on Ubuntu LTS and uses the Moksha desktop, forked from Enlightenment. Its design philosophy is \"minimal preinstallation, leave the choices to the user\": the system provides only basic applications and everything else is installed on demand through Bodhi AppCenter, so images are small and memory use is low, which suits older computers and users who like building their own environment. Moksha offers modular panels, desktop widgets and a distinctive window-management experience, visually quite different from traditional GNOME or KDE. Bodhi suits lightweight-desktop enthusiasts, users of old hardware and tinkerers willing to spend time customising. Note that Moksha's ecosystem is smaller than those of mainstream desktops and theming plus high-DPI support for some modern apps is incomplete; Bodhi's software versions follow Ubuntu LTS and support for newer hardware may lag. It has no commercial edition and is community-maintained.",
      "highlights": [
        "Moksha desktop, modular and lightweight",
        "Minimal preinstallation, apps installed as needed",
        "Based on Ubuntu LTS, stable",
        "Suited to old hardware and customisation enthusiasts"
      ],
      "pros": [
        "Low resource usage",
        "Clean system that you can build up freely",
        "Compatible with the Ubuntu ecosystem"
      ],
      "cons": [
        "Small Moksha ecosystem",
        "Few default applications, so beginners must configure things themselves",
        "Support for modern hardware may lag"
      ],
      "status_note": "Actively maintained, known for the Moksha desktop and low footprint",
      "target_user": "Users of older computers who like a lightweight, modular desktop",
      "release_cycle": "Follows Ubuntu LTS with major-version releases"
    },
    "trisquel": {
      "intro": "Trisquel GNU/Linux was founded by Rubén Rodríguez in 2007 and is a fully free-software distribution based on Ubuntu LTS that is recognised by the Free Software Foundation (FSF). It removes Ubuntu's proprietary firmware, binary blobs, restricted drivers and some non-free software, keeping only components that meet the free-software definition; the kernel is Linux-libre, and browsers and other tools are replaced with free versions. Trisquel's aim is to give users the freedom to audit, modify and redistribute everything from the system to the applications, which makes it a very good fit for free-software teaching, public institutions and users with software-ethics requirements. The price is markedly limited hardware compatibility: Wi-Fi, graphics cards and acceleration features that depend on proprietary firmware may not work. Trisquel's software versions follow Ubuntu LTS and are fairly conservative; the community is small and documentation and support are mostly in English. It has no commercial edition and is maintained by volunteers. If you simply want a stable Ubuntu experience, standard Ubuntu or Debian is more practical.",
      "highlights": [
        "An FSF-recognised, fully free Ubuntu derivative",
        "Removes proprietary firmware and binary blobs",
        "Uses the Linux-libre kernel",
        "Suited to free-software teaching and public institutions"
      ],
      "pros": [
        "Thorough free-software compliance",
        "Ubuntu ecosystem and documentation remain available for reference",
        "Stable system with long-term support"
      ],
      "cons": [
        "Limited hardware compatibility",
        "Older software versions",
        "Small community"
      ],
      "status_note": "Actively maintained; an FSF-recognised fully free distribution",
      "target_user": "Educational institutions and individuals committed to fully free software",
      "release_cycle": "Follows Ubuntu LTS but retains only free software"
    },
    "linux-lite": {
      "intro": "Linux Lite was founded by Jerry Bezencon in 2012, is based on Ubuntu LTS, uses the Xfce desktop and has a very specific audience: ordinary users migrating from Windows on modest hardware. It offers a familiar desktop layout, the Lite series of tools (update manager, software centre, system information, backup) and a detailed English manual, so that after installation everyday tasks such as browsing, office work and media playback are ready to go. Linux Lite has undemanding minimum hardware requirements and uses fewer resources than Ubuntu's default GNOME, which suits older laptops, office machines and school computer rooms. Because it follows Ubuntu LTS its software versions are fairly conservative, but stability and driver compatibility are good. Note that Linux Lite mainly targets x86_64, its community is relatively small, and some localisation and Chinese-language support is less complete than in deepin or Ubuntu Kylin; its default look is also fairly traditional. It has no commercial edition and is community-maintained.",
      "highlights": [
        "Lightweight Xfce desktop, suited to low-spec hardware",
        "The Linux Lite toolchain simplifies day-to-day maintenance",
        "Based on Ubuntu LTS with good driver compatibility",
        "Detailed manual, suited to Windows migrants"
      ],
      "pros": [
        "Smooth experience on low-spec computers",
        "Easy for migrating users to pick up",
        "Stable system with simple maintenance"
      ],
      "cons": [
        "Software versions tend to be old",
        "Chinese localisation is only average",
        "Relatively small community"
      ],
      "status_note": "Actively maintained, aimed at Windows migrants and low-spec devices",
      "target_user": "Ordinary users with older hardware who are migrating from Windows",
      "release_cycle": "Follows Ubuntu LTS with major-version releases"
    },
    "ubuntu-touch": {
      "intro": "Ubuntu Touch is a mobile operating system launched by Canonical in 2013 and taken over by the UBports community in 2017 after Canonical left the phone business. It is based on Ubuntu, uses the in-house Lomiri desktop environment and emphasises touch gestures, convergent apps (a phone that becomes a desktop when connected to a monitor) and an open-source ecosystem. UBports continues to provide OTA updates for a number of Fairphone, Google Pixel, OnePlus and PinePhone devices, together with an installer and documentation. It suits users who want to escape the closed Android/iOS ecosystems, are willing to accept a limited number of applications and are prepared to flash their devices, as well as mobile Linux developers and privacy advocates. Note that Ubuntu Touch's hardware support depends heavily on the specific model, and features such as the camera, VoLTE and fingerprint may be incomplete; the app ecosystem is dominated by web apps, Qt apps and an Android compatibility layer and cannot be compared with mainstream mobile platforms. It has no commercial edition and is maintained by the UBports Foundation and volunteers.",
      "highlights": [
        "Lomiri touch interface with a convergent desktop",
        "UBports continues to deliver OTA updates",
        "Supports some Fairphone, Pixel and PinePhone devices",
        "An open-source mobile system with a privacy focus"
      ],
      "pros": [
        "Open-source, auditable mobile system",
        "Distinctive convergent-desktop concept",
        "Continuously maintained by the community"
      ],
      "cons": [
        "Limited app ecosystem",
        "Hardware support varies greatly by model",
        "Some phone features are incomplete"
      ],
      "status_note": "Maintained by the UBports community, with ongoing OTA updates for some phones and tablets",
      "target_user": "Mobile Linux enthusiasts willing to flash devices and committed to open source",
      "release_cycle": "UBports publishes OTA updates continuously"
    },
    "opensuse-leap": {
      "intro": "openSUSE Leap is the fixed-release branch of the openSUSE project; since 2015 it has been built from SUSE Linux Enterprise source code, providing a free system that is highly compatible with SLE. It uses zypper and YaST, supports both KDE Plasma and GNOME well, and suits desktop, server and virtualisation scenarios. Leap's release cadence is more conservative than Tumbleweed's, typically one major version per year with a maintenance cycle of about two to three years, which makes it better suited to production environments that do not want frequent upgrades. Note that although openSUSE belongs to the enterprise Linux tradition like the Red Hat family, it uses an independent zypper/rpm ecosystem and SUSE upstream, so in this atlas it is classified under \"other family\" with suse as a secondary tag. Leap suits users who need a stable, enterprise-compatible system without paying for a SUSE subscription; those who want the newest software should choose Tumbleweed. openSUSE's YaST and the OBS build service are further highlights of its ecosystem.",
      "highlights": [
        "Built from SUSE Linux Enterprise source code",
        "Complete system management with zypper + YaST",
        "Excellent KDE Plasma support",
        "Fixed release, suited to production environments"
      ],
      "pros": [
        "Balances enterprise compatibility with stability",
        "Comprehensive YaST functionality",
        "Handles both desktop and server roles"
      ],
      "cons": [
        "Fairly conservative software versions",
        "The Leap 16 architectural change brings migration costs",
        "The Chinese community is less active than in the Debian family"
      ],
      "status_note": "openSUSE Leap 16 was released in 2025 and is maintained until 2027",
      "target_user": "Desktop and server users who need a stable, enterprise-compatible system",
      "release_cycle": "Roughly one major version per year, with a maintenance cycle of about 2–3 years"
    },
    "opensuse-tumbleweed": {
      "intro": "openSUSE Tumbleweed is openSUSE's rolling-release edition and has been one of the project's main lines since 2014. Rather than simply pushing the newest software to users, it runs every snapshot through openQA automated tests covering installation, upgrades and desktop functionality and publishes it only once those pass, which makes its rolling updates relatively robust among comparable distributions. Tumbleweed uses zypper dup for full upgrades, supports KDE Plasma, GNOME, Xfce and other desktops, and is also suitable for servers and development environments. Software versions are very new, with the kernel, compilers and desktop environments usually tracking upstream closely; together with snapper and Btrfs snapshots, a failed upgrade can be rolled back. Tumbleweed suits desktop users and developers willing to update regularly, who want the latest software and can accept occasionally dealing with dependency changes. Compared with Leap it is not suited to production environments that must stay unchanged for years; compared with Arch it adds automated testing and snapshot mechanisms, though the zypper workflow takes some getting used to. The project is community-run with support from SUSE.",
      "highlights": [
        "Snapshot-based rolling updates tested by openQA",
        "zypper dup plus Btrfs snapshot rollback",
        "Recent KDE Plasma and GNOME versions",
        "Suited to development and a cutting-edge desktop"
      ],
      "pros": [
        "New software with relatively high update quality",
        "Snapshot rollback reduces risk",
        "Complete desktop and development tooling"
      ],
      "cons": [
        "Rolling releases still require regular maintenance",
        "zypper has a learning curve",
        "Some proprietary drivers may lag"
      ],
      "status_note": "Actively maintained; rolling updates are safeguarded by openQA testing",
      "target_user": "Desktop users who want new software but steadier updates",
      "release_cycle": "Continuously rolling; snapshots are published after openQA automated testing"
    },
    "sle": {
      "intro": "SUSE Linux Enterprise (SLE) is SUSE's commercial enterprise distribution family, covering product lines such as SLES (server), SLED (desktop), SAP applications, high availability and edge. SUSE's history goes back to 1992 and it is one of the earliest Linux commercialisation companies; SLE uses zypper, YaST and the RPM toolchain and provides multi-year life cycles, certified hardware and software matrices, security advisories and 24×7 support. It shares a large amount of source code with openSUSE Leap: Leap can be seen as the community-compatible branch of SLE, while Tumbleweed is the more cutting-edge rolling version. SLE suits enterprises running SAP, databases, mission-critical servers, mainframes and edge nodes, especially where vendor SLAs and certification are required. It is not a free distribution, so individual users should usually choose openSUSE; moreover SLE's software versions are very conservative and it does not suit desktop users chasing new features. When choosing, the official SUSE support matrix should be the reference.",
      "highlights": [
        "Product lines including SLES / SLED / SAP / high availability",
        "Long-term enterprise support and a certification matrix",
        "zypper + YaST + SUSE Manager",
        "Covers x86, ARM, Power and s390x"
      ],
      "pros": [
        "Enterprise-grade SLAs and thorough certification",
        "Long-term stability, suited to mission-critical workloads",
        "Interoperates with the openSUSE ecosystem"
      ],
      "cons": [
        "Requires a commercial subscription",
        "Very conservative software versions",
        "High cost for individual users"
      ],
      "status_note": "A commercial enterprise distribution; exact versions and support periods depend on the SUSE subscription",
      "target_user": "Enterprises with mission-critical workloads that need vendor support and certification",
      "release_cycle": "One service pack cycle over several years, with long-term enterprise support"
    },
    "gentoo": {
      "intro": "Gentoo was created by Daniel Robbins in 2002 and is the flagship of source-based distributions. Rather than shipping traditional binary packages, it builds software from source through Portage and emerge, following the USE flags, compiler options, and dependencies the user chooses, which allows fine-grained control over features, size, and optimization settings. Gentoo's rolling updates carry no fixed version number, so users can keep upgrading indefinitely; OpenRC is the default init, though systemd is also available. It supports a wide range of architectures, and its documentation (the Gentoo Wiki) is excellent, making it a good fit for users who want to understand compilation, dependencies, and how a system is composed, as well as for embedded work, desktop customization, and performance tuning. The cost is high installation and maintenance effort: compiles are slow, dependency conflicts must be resolved by hand, and rolling updates may require reading the news (eselect news). Gentoo is not for users who need fast deployment or want nothing to do with compilers; if you only want rolling updates, Arch or openSUSE Tumbleweed is less work.",
      "highlights": [
        "Portage/emerge source compilation with USE flags",
        "Extremely high customization freedom and architecture coverage",
        "Rolling release with no fixed version number",
        "OpenRC by default, systemd optional"
      ],
      "pros": [
        "Exceptional customization and optimization capabilities",
        "High-quality documentation with great learning value",
        "Supports many niche architectures"
      ],
      "cons": [
        "High barrier to installation and maintenance",
        "Slow compiles and heavy resource use",
        "Dependency conflicts must be handled manually"
      ],
      "status_note": "Actively maintained; source compilation and deep customization are core",
      "target_user": "Advanced users willing to compile their system and pursue extreme customization",
      "release_cycle": "Continuously rolling; stage images are refreshed periodically"
    },
    "alpine": {
      "intro": "Alpine Linux appeared in 2005 with a focus on being small, fast, and secure, and is one of the most common minimal distributions in containers and embedded systems. It uses musl libc and BusyBox, its base image is only a few MB, the apk package manager is simple and fast, and OpenRC is the default init. Alpine packages are built with security hardening (such as PIE and stack protection), which makes it suitable for Docker images, routers, VPN gateways, CI environments, and low-resource devices. It also offers a desktop install option with Xfce, though the desktop experience is not its focus. Alpine suits developers and sysadmins who are comfortable with the command line and need a minimal attack surface and fast deployment. Note that differences between musl and glibc can prevent some prebuilt binaries from running, requiring compatible packages or self-compilation; software versions are fairly recent, but the ecosystem is smaller than Debian's. Alpine has no commercial edition and is community maintained, with good documentation and wiki quality.",
      "highlights": [
        "musl + BusyBox, tiny image size",
        "apk package management with fast installs and upgrades",
        "OpenRC by default, hardened compilation",
        "First choice for containers, routers, and embedded systems"
      ],
      "pros": [
        "Extremely low resource usage",
        "Small container images and fast startup",
        "Good secure defaults"
      ],
      "cons": [
        "musl compatibility issues",
        "Limited desktop and multimedia ecosystem",
        "Fewer packages than Debian"
      ],
      "status_note": "Actively maintained, widely used in container and embedded scenarios",
      "target_user": "Developers working with containers, embedded systems, and minimal servers",
      "release_cycle": "A release roughly every 6 months, each supported for about 2 years"
    },
    "postmarketos": {
      "intro": "postmarketOS started in 2017 with the goal of giving smartphones a Linux system that can be maintained long-term and extending the life of devices abandoned by Android. It is based on Alpine Linux, uses apk package management, generates images for specific device models through pmbootstrap, and lets users choose Phosh, Plasma Mobile, Sway, GNOME, or other mobile and desktop environments. The project emphasizes upstream-first work and device tree contributions, and community efforts have driven mainline kernel support for many devices. postmarketOS suits developers and enthusiasts who are willing to install and debug on their phones and care about software freedom on mobile devices, and it is also good for turning old phones into small servers, music players, or experimental terminals. Note that support maturity varies enormously between device models: calls, cameras, VoLTE, and fingerprint features may be incomplete, and some devices remain experimental. There is no commercial support, so back up your data and read the device wiki before upgrading.",
      "highlights": [
        "Alpine base with apk package management",
        "Extends the life of old phones with a ten-year maintenance goal",
        "Multiple environments: Phosh / Plasma Mobile / Sway",
        "pmbootstrap generates per-device images"
      ],
      "pros": [
        "High reuse value for old phones",
        "Active mobile Linux ecosystem",
        "Active upstream kernel contributions"
      ],
      "cons": [
        "Device support maturity varies widely",
        "Call and camera features are often incomplete",
        "High barrier to installing and debugging"
      ],
      "status_note": "Actively maintained, aiming for a ten-year lifecycle for phones",
      "target_user": "Mobile Linux enthusiasts willing to install and debug on their devices",
      "release_cycle": "Continuously rolling; kernels and images are maintained per device"
    },
    "nixos": {
      "intro": "NixOS is a declarative Linux distribution built on the Nix package manager, originating in Eelco Dolstra's academic research in 2003. Its system configuration is written in a version-controllable Nix expression: users declare the services, desktops, users, and software they want, and after a rebuild the system switches to the new configuration; every switch generates a new boot entry, and older configurations can be rolled back. Nix packages live in the content-addressed /nix/store, where multiple versions can coexist without overwriting each other, which makes it especially suited to development environments, reproducible builds, and multi-user systems. NixOS suits developers, sysadmins, researchers, and advanced users who want to manage their desktop in an infrastructure-as-code style. The cost is a steep learning curve: the Nix language, the module system, and error messages all take time to get used to, and some proprietary or unpackaged applications require extra configuration. There is no official commercial edition, though the ecosystem includes third-party support and hosted services.",
      "highlights": [
        "Declarative system configuration under version control",
        "Atomic switching and boot-entry rollback",
        "Nix content-addressed store with multiple versions side by side",
        "Reproducible development and build environments"
      ],
      "pros": [
        "Reproducible, rollback-capable system state",
        "Strong isolation and reproducibility for development environments",
        "Configuration as code, well suited to team collaboration"
      ],
      "cons": [
        "Steep Nix language learning curve",
        "Proprietary and niche applications need extra packaging",
        "Large disk usage"
      ],
      "status_note": "Actively maintained; declarative configuration and atomic rollback are core features",
      "target_user": "Developers seeking reproducible systems and declarative configuration",
      "release_cycle": "A release every 6 months, each supported for about 7 months"
    },
    "guix": {
      "intro": "Guix System is the GNU project's declarative distribution, started by Ludovic Courtès in 2012, and it uses GNU Guix as its package manager, GNU Shepherd as init, and Scheme (Guile) as its configuration language. It shares its philosophy with NixOS: reproducible package builds, version-controlled system configuration, and atomic upgrades and rollbacks, but Guix places more emphasis on fully free software, the GNU ecosystem, and the programmability of Scheme. Guix package definitions are Scheme code as well, which users can inherit, rewrite, and combine, making it a good fit for developers and researchers who enjoy functional programming and want deep control over build processes. It suits free software advocates, Scheme/Lisp enthusiasts, and users who need reproducible research environments. Note that Guix's learning curve is even steeper than NixOS's, the package count is relatively small, and non-free firmware is unavailable by default; some hardware and proprietary software require extra configuration. There is no commercial edition; it is maintained by GNU volunteers.",
      "highlights": [
        "GNU Guix + Scheme declarative configuration",
        "GNU Shepherd replaces systemd",
        "Fully free software and reproducible builds",
        "Atomic upgrades and rollbacks"
      ],
      "pros": [
        "Software freedom and reproducibility taken all the way",
        "Highly programmable Scheme configuration",
        "Reliable system rollback"
      ],
      "cons": [
        "Very steep learning curve",
        "Fewer packages available",
        "Limited non-free hardware support"
      ],
      "status_note": "Actively maintained; the GNU project's declarative free-software system",
      "target_user": "Free software advocates and functional programming enthusiasts",
      "release_cycle": "Continuously rolling; releases appear at irregular intervals"
    },
    "slackware": {
      "intro": "Released by Patrick Volkerding in 1993, Slackware is one of the oldest Linux distributions still in existence. It sticks to a Unix-like, simple, stable design: pkgtools and slackpkg manage .tgz packages without resolving dependencies automatically, leaving full control to the administrator; init uses traditional sysvinit scripts, and configuration is mostly plain text files. Slackware's software versions are conservative and its release cycle long, but the system structure is clear and predictable, so it suits users who are willing to read documentation, understand dependencies, and work the traditional Unix way. It is also often used for servers, teaching, and as an embedded base system. Note that Slackware provides no automatic dependency resolution, so third-party software requires manual handling of library dependencies; the official repository is small, and modern desktop applications may need to be compiled. There is no commercial edition; Slackware is maintained by Patrick Volkerding and the community. In this map it is grouped under the other family because its lineage is independent of Arch, RH, Debian, and Ubuntu.",
      "highlights": [
        "One of the oldest surviving Linux distributions",
        "pkgtools/slackpkg with no automatic dependency resolution",
        "Traditional sysvinit and plain-text configuration",
        "Clear structure, stable and predictable"
      ],
      "pros": [
        "Transparent system with a high degree of control",
        "Stable and good for learning Unix administration",
        "Distinctive history and community culture"
      ],
      "cons": [
        "Dependencies must be resolved by hand",
        "Conservative software versions and a small repository",
        "Limited support for modern desktop applications"
      ],
      "status_note": "Still maintained but slow-paced; 15.0 is the current stable release",
      "target_user": "Advanced users who like traditional Unix administration",
      "release_cycle": "Long release cycle, with stability first"
    },
    "puppy": {
      "intro": "Puppy Linux was created by Barry Kauler in 2003 and is a classic lightweight live distribution. Its images are usually only a few hundred MB, and after booting the whole system can run in memory, so it responds extremely quickly and even pulling out the USB stick does not interrupt use; at shutdown the session can optionally be saved to a file. Puppy uses lightweight desktops such as JWM/ROX, package management is handled by Puppy Package Manager, and there are several branches based on Debian, Ubuntu, and Slackware. It suits old computers, system rescue, temporary office work, and a system to carry around, as well as users who want to learn how a live system is built. Note that Puppy has many branches with widely differing versions, package management, and maintenance status, and its official documentation is not unified; the in-memory mode consumes RAM, so watch capacity when handling large files. There is no commercial edition; it is community maintained. Activity has declined in recent years, but the Woof-CE build framework still supports new branches.",
      "highlights": [
        "A live system that can run entirely in memory",
        "Small images, fast boot, good for rescue",
        "Several Debian/Ubuntu/Slackware branches",
        "The session can be saved to a file"
      ],
      "pros": [
        "Extremely low resource usage",
        "Portable and plug-and-play",
        "Practical for old computers and rescue scenarios"
      ],
      "cons": [
        "Many branches with scattered documentation",
        "In-memory mode limits handling of large files",
        "Limited modern software support"
      ],
      "status_note": "Several community branches are still active, but versions and maintenance status vary widely",
      "target_user": "Users who need a portable live system and rescue for old computers",
      "release_cycle": "Released independently by the different Puppy branches"
    },
    "tinycore": {
      "intro": "Tiny Core Linux was created by Robert Shingledecker in 2008 with the goal of providing a minimal but runnable graphical Linux. The Core edition is only a dozen or so MB and runs entirely in memory after boot; users load extensions on demand from the tce repository, so the system keeps only the components actually needed. It uses BusyBox, FLTK, and its own package tools, and ships no full desktop environment by default, offering instead a minimal window manager and control panel. Tiny Core suits embedded devices, old computers, rescue disks, thin clients, and users who want to understand the smallest possible Linux composition. It can also serve as a learning tool: from the kernel and init to libraries and the graphics stack, every layer is exposed to the user. Note that Tiny Core does not aim for out-of-the-box usability; installing a browser, an office suite, or Chinese fonts all require manually selecting extensions, and its software repository is limited in size and update frequency. There is no commercial edition; a small team maintains it. For everyday desktop use, Tiny Core is more of an experimental platform than a first choice.",
      "highlights": [
        "A Core image of a dozen or so MB",
        "Runs entirely in memory, extremely fast",
        "Loads tce extensions on demand",
        "Minimal FLTK/BusyBox system"
      ],
      "pros": [
        "Tiny size and extremely fast boot",
        "Suited to embedded systems and rescue use",
        "Completely transparent system composition"
      ],
      "cons": [
        "Minimal out-of-the-box experience and laborious setup",
        "Limited software repository",
        "Not suited to heavy everyday desktop use"
      ],
      "status_note": "An actively maintained minimal distribution",
      "target_user": "Embedded developers, minimal-system enthusiasts, and rescue scenarios",
      "release_cycle": "Released by version, with a slow update pace"
    },
    "void": {
      "intro": "Void Linux was created by Juan Romero Pardines in 2008 and is an independently developed rolling distribution, not based on Arch, Debian, or RHEL. It uses its own XBPS package manager and runit as init, offers both glibc and musl libc variants, is lightweight with fast boot, and provides both binary packages and source builds (xbps-src). Void's software is fairly current, its community is small but active, and its documentation is clear, making it a good fit for users who want to move away from systemd and like rolling updates without compiling everything as with Gentoo. It suits desktop, server, embedded, and container use, and is often used as a lightweight desktop or development machine. Note that Void's repository is smaller than Arch's, so some niche software must be packaged yourself; runit's approach to service management differs from systemd's, so troubleshooting takes some adjustment. There is no commercial edition; it is community maintained. It has seen infrastructure and maintainer changes, but the project keeps releasing.",
      "highlights": [
        "Independent XBPS package management and runit",
        "glibc / musl dual variants",
        "Rolling release, lightweight and fast",
        "Binary packages and source builds side by side"
      ],
      "pros": [
        "Lightweight with fast boot",
        "No systemd, simple service management",
        "Independent ecosystem, not dependent on a big upstream"
      ],
      "cons": [
        "Limited repository size",
        "runit requires relearning",
        "Small community with limited support resources"
      ],
      "status_note": "Actively maintained, an independent rolling distribution",
      "target_user": "Users who want an independent, lightweight rolling system without systemd",
      "release_cycle": "Continuously rolling, with both glibc and musl variants"
    },
    "solus": {
      "intro": "Solus is an independent rolling distribution started by Ikey Doherty in 2015 and is not based on any major upstream. It uses its own eopkg package manager, the Budgie desktop, and Software Center, emphasizing a consistent desktop experience and moderate rolling: software is fairly current, but it does not chase the newest releases blindly. Solus's Budgie desktop later became the independent Buddies of Budgie project, and Solus remains an important showcase for it. It offers GNOME, KDE Plasma, and MATE editions and suits desktop users who want a clean, modern, rolling system without the fiddling that Arch demands. Note that Solus is a small independent project that has gone through maintainer changes and infrastructure outages, and both package update speed and community size trail the major distributions; the eopkg ecosystem is also fairly niche. There is no commercial edition. If you value long-term stability and broad software support, Ubuntu or Fedora is the safer bet; if you like independent desktop innovation, Solus is worth watching.",
      "highlights": [
        "Independent eopkg and the Budgie desktop",
        "Rolling updates with a relatively restrained pace",
        "Graphical management through Software Center",
        "A clean desktop experience"
      ],
      "pros": [
        "Independent, design-coherent desktop experience",
        "Non-aggressive rolling updates",
        "Relatively easy to install and use"
      ],
      "cons": [
        "Small independent project with sustainability risk",
        "Limited repository size",
        "Niche eopkg ecosystem"
      ],
      "status_note": "Actively maintained, an independent rolling desktop distribution",
      "target_user": "Users who like independent desktops and moderate rolling updates",
      "release_cycle": "Rolling updates, with ISO snapshots released as needed"
    },
    "clear-linux": {
      "intro": "Clear Linux was a rolling distribution launched by Intel in 2015, designed around extreme performance optimization and cloud-native scenarios. It used swupd for atomic system updates, shipped relatively new kernels and compilers by default, and applied extensive tuning to x86_64 instruction sets, libraries, and runtimes; it once stood out in container, microservice, and cloud benchmarks. Clear Linux embraced a stateless design in which system configuration is separated from user data and the system can be replaced wholesale during upgrades, reducing configuration drift. It suited cloud platforms, CI/CD, container hosts, and servers that needed Intel platform optimization. On July 21, 2025, Intel announced that it was discontinuing the Clear Linux OS project, so it is now only suitable for historical research or offline environments. It offered no commercial support and its package ecosystem was fairly limited; users who still need immutable cloud images are better served by Flatcar, Fedora CoreOS, and similar projects.",
      "highlights": [
        "swupd atomic updates and stateless design",
        "Deep performance optimization for Intel platforms",
        "Strong showing in cloud-native and container scenarios",
        "Project discontinued in July 2025"
      ],
      "pros": [
        "Aggressive performance optimization with strong benchmark results",
        "Atomic updates reduce configuration drift",
        "Suited to cloud and container hosts"
      ],
      "cons": [
        "Discontinued, with no security updates",
        "Narrow software ecosystem",
        "x86_64 only"
      ],
      "status_note": "Intel discontinued the Clear Linux OS project on 2025-07-21",
      "target_user": "Only suitable for historical research, archiving, and evaluating alternatives",
      "release_cycle": "Discontinued; formerly Intel's rolling optimized distribution"
    },
    "mageia": {
      "intro": "Mageia is an independent distribution started in 2010 by former Mandriva employees and community volunteers, with its first release in 2011, inheriting Mandriva's rpm tradition and the Mageia Control Center graphical tool. It uses dnf/urpmi and offers KDE Plasma, GNOME, Xfce, and LXQt desktops; its default configuration is friendly to newcomers, and the installer and hardware detection are fairly complete. Mageia releases about once a year with roughly 18 months of support, suiting desktop users and small servers. It shares its Mandriva origin with OpenMandriva, but governance and packaging differ: Mageia emphasizes stable community releases, while OpenMandriva tries new technology more eagerly. Mageia suits users who want an independent, European community-backed, easy-to-use rpm desktop distribution. Note that its software repository and international community are limited in size, support for some new hardware drivers may lag, and Chinese-language material is relatively scarce. There is no commercial edition; a non-profit organization maintains it.",
      "highlights": [
        "The community successor to Mandriva",
        "Mageia Control Center graphical management",
        "Multiple desktops: KDE/GNOME/Xfce/LXQt",
        "An rpm distribution independent of the big vendors"
      ],
      "pros": [
        "Easy to use out of the box with complete tools",
        "Independent community governance",
        "Rich choice of desktops"
      ],
      "cons": [
        "Limited community and repository size",
        "Fairly conservative software versions",
        "Scarce Chinese-language material"
      ],
      "status_note": "Actively maintained, the community-driven successor to Mandriva",
      "target_user": "Users who prefer an independent, European-community rpm desktop",
      "release_cycle": "Roughly one major release per year, supported for about 18 months"
    },
    "openmandriva": {
      "intro": "OpenMandriva Lx is a distribution continued by the community in 2012-2013 after Mandriva was discontinued, using rpm and dnf, with KDE Plasma as the default desktop and GNOME and LXQt editions also available. It comes in a fixed-release Lx edition and a rolling ROME edition: ROME tracks upstream more closely and suits users who want a steady stream of new software, while Lx ships by version and suits those who want a stable desktop. OpenMandriva's distinguishing features include close tracking of KDE, newer compilers and toolchains, and experiments with new architectures such as RISC-V. It suits users who like the Mandriva lineage, are willing to join a small community, and want a KDE-first experience. Note that OpenMandriva's community is limited in size, its repository and documentation are less complete than Mageia's, and ROME's rolling updates may require users to follow announcements. There is no commercial edition; a non-profit association maintains it. For most users, Mageia or openSUSE may be the safer choice.",
      "highlights": [
        "One of the community successors to Mandriva",
        "KDE Plasma first, with the rolling ROME branch",
        "Experiments with new architectures such as RISC-V",
        "dnf/rpm toolchain"
      ],
      "pros": [
        "KDE experience that closely tracks upstream",
        "Choice of rolling and fixed releases",
        "Small but open community"
      ],
      "cons": [
        "Limited repository and documentation",
        "The rolling branch requires following announcements",
        "Small international community"
      ],
      "status_note": "Actively maintained, offering the rolling ROME and fixed Lx releases",
      "target_user": "Desktop users who like the Mandriva lineage and a KDE-first approach",
      "release_cycle": "ROME rolling branch plus periodic Lx releases"
    },
    "pclinuxos": {
      "intro": "PCLinuxOS was created by Bill Reynolds (Texstar) in 2003, initially based on Mandrake and later developing into an independent rolling distribution. It uses apt-rpm and Synaptic to manage rpm packages, with a traditional interface and straightforward configuration. KDE Plasma is the default, and MATE and Xfce editions are also offered. PCLinuxOS has long refused to adopt systemd, using sysvinit instead, which appeals to many users who prefer a traditional init. Its software versions are relatively new, and the installation images provide complete desktop and multimedia support, making it a good fit for desktop users migrating from Windows who like KDE and Synaptic and do not want systemd. Note that PCLinuxOS is a small community project: its software repositories are limited and support for some new hardware and niche software is weak; security updates depend on volunteer effort, so enterprises should evaluate it carefully. No commercial edition is offered; it is maintained by the community.",
      "highlights": [
        "A distinctive combination of apt-rpm and Synaptic",
        "KDE Plasma by default with a complete desktop",
        "Sticks with sysvinit rather than systemd",
        "Rolling release aimed at desktop users"
      ],
      "pros": [
        "Synaptic is friendly to users migrating from other systems",
        "No systemd, which matches some users' preferences",
        "A complete desktop out of the box"
      ],
      "cons": [
        "Limited repository size",
        "Small community, security updates rely on volunteers",
        "Support for new hardware may lag"
      ],
      "status_note": "Actively maintained; an independent rolling distribution for the desktop",
      "target_user": "Desktop users who like KDE, Synaptic and sysvinit",
      "release_cycle": "Continuously rolling, with ISOs refreshed periodically"
    },
    "kaos": {
      "intro": "KaOS is an independent rolling distribution that appeared in 2013 with a very focused goal: build a clean, modern desktop system around KDE Plasma. Although it uses pacman, it is not an Arch derivative; it maintains its own repositories and packages only Qt/KDE and selected applications, so the repositories are smaller and dependencies more controllable. KaOS uses KDE Plasma by default together with SDDM, Octopi and a consistent visual design, which means fast startup and little preinstalled software. It suits users who like Plasma and want rolling updates without the complexity of Arch's full repositories, as well as KDE enthusiasts who want to keep the system lean. Note that KaOS's software selection is limited, so non-KDE applications may require Flatpak or compiling them yourself; maintenance by a small team means update pace and security response are not on par with large distributions. No commercial edition is offered. If you need broad software compatibility, Arch or openSUSE Tumbleweed are better fits.",
      "highlights": [
        "Built solely around KDE Plasma",
        "Independent pacman repositories, not an Arch derivative",
        "Clean, lean default system",
        "Octopi graphical package management"
      ],
      "pros": [
        "Pure, consistent Plasma experience",
        "Lean system with controllable dependencies",
        "Rolling release"
      ],
      "cons": [
        "Narrow software repositories",
        "Maintained by a small team",
        "Non-KDE apps need extra solutions"
      ],
      "status_note": "Actively maintained; an independent distribution focused on KDE Plasma",
      "target_user": "Lean desktop users focused on KDE Plasma",
      "release_cycle": "Continuously rolling, with ISOs refreshed periodically"
    },
    "qubes": {
      "intro": "Qubes OS was initiated by Joanna Rutkowska in 2012 as a desktop operating system built around security isolation. It splits different purposes into separate virtual machines (called qubes) — for example one VM each for work, personal use, banking and browsing untrusted websites — isolated from one another through Xen virtualization; even if an application is compromised, it struggles to affect other qubes or the underlying dom0 directly. Qubes' dom0 is usually based on Fedora, and application VMs can use Fedora, Debian and other templates, with tools such as Qubes Update, Qubes Manager and secure copy between domains. It suits journalists, researchers, security professionals and high-risk targets, as well as anyone who needs strict separation of identities and data. The cost is high hardware requirements, complex configuration, and graphics performance and convenience below that of an ordinary desktop; some peripherals and hibernation are only partially supported. Qubes offers no commercial edition and relies on donations and community maintenance.",
      "highlights": [
        "Xen virtualization for strongly isolated security domains",
        "dom0 separated from multiple application VMs",
        "Templated systems with centralized updates",
        "Aimed at high-risk threat models"
      ],
      "pros": [
        "Isolation far stronger than an ordinary desktop",
        "Suited to handling sensitive and untrusted content",
        "Active security community"
      ],
      "cons": [
        "High hardware requirements and complex configuration",
        "Limited graphics performance and peripheral support",
        "Less convenient for everyday use"
      ],
      "status_note": "Actively maintained, centred on security isolation",
      "target_user": "High-risk targets and security professionals who need strong isolation",
      "release_cycle": "Released in major versions, with security updates"
    },
    "openwrt": {
      "intro": "OpenWrt began in 2004, originally as a project to extend the firmware of Linksys routers, and has become one of the most mature open source systems for routers and embedded network devices. It provides a writable filesystem and a package manager (opkg, with newer releases gradually introducing apk), so users can install VPN, firewall, QoS, AdGuard, mesh and Docker components and turn a home router into a programmable network node. OpenWrt uses the procd init system and unified UCI configuration, with LuCI providing a web management interface; it supports a large number of routers, single-board computers and x86 devices, and lean firmware can be built as needed. It suits users who want control over their home network, or who want to build a side router, software router, IoT gateway or lab environment. Note that support quality varies widely between devices and flashing carries a risk of bricking; configuration compatibility should also be checked when upgrading major versions. OpenWrt offers no commercial edition and is maintained by the community.",
      "highlights": [
        "A router system that can install software packages",
        "LuCI web management and UCI configuration",
        "VPN, firewall, QoS and mesh extensions",
        "Covers a large number of routers and embedded devices"
      ],
      "pros": [
        "Powerful, programmable networking features",
        "Broad device coverage and an active community",
        "Lean firmware can be built to order"
      ],
      "cons": [
        "Flashing carries risk",
        "Support quality varies by device",
        "Configuration and troubleshooting have a steep learning curve"
      ],
      "status_note": "Actively maintained; one of the de facto standards for routers and embedded networking",
      "target_user": "Advanced users who want control of their home or lab network",
      "release_cycle": "Roughly one release per year, with point-release security updates"
    },
    "truenas-scale": {
      "intro": "TrueNAS SCALE is a NAS and hyperconverged system introduced by iXsystems in 2022. Based on Debian and using ZFS as its storage core, it manages storage pools, snapshots, replication, SMB/NFS/iSCSI shares and virtual machines through a web UI. Unlike the earlier FreeBSD-based TrueNAS CORE, SCALE uses the Linux kernel and supports Docker/Kubernetes applications, containers and a wider range of hardware drivers, making it better suited to homelabs, media servers and unified storage for small and medium businesses. It offers a free community edition and a paid enterprise edition, the latter including support, clustering and advanced features. TrueNAS SCALE suits users willing to invest time in planning ZFS storage and who need snapshots, replication and data integrity. Note that ZFS has memory and disk configuration requirements, and application and VM features may change between versions; production environments should use ECC memory and keep backups. It is not a general-purpose desktop distribution.",
      "highlights": [
        "ZFS storage, snapshots and replication",
        "A web UI to manage shares and VMs in one place",
        "Debian base for broader container and driver support",
        "Free community edition plus an enterprise edition"
      ],
      "pros": [
        "Professional storage features with high data integrity",
        "Easy-to-use web management",
        "Strong application and virtualization capabilities"
      ],
      "cons": [
        "ZFS has relatively high hardware requirements",
        "Version upgrades need care",
        "Not a general-purpose desktop system"
      ],
      "status_note": "Actively maintained; iXsystems' NAS and hyperconverged system",
      "target_user": "Homelab and small-business NAS and storage users",
      "release_cycle": "Roughly one release per year, with an enterprise update channel"
    },
    "libreelec": {
      "intro": "LibreELEC is a media centre system forked from OpenELEC in 2016 with a single goal: to run Kodi on TV boxes, Raspberry Pi boards, mini PCs and old computers as stably and lightly as possible. Built on Buildroot, its images are small and start quickly, booting straight into Kodi by default with support for 4K/HDR, hardware decoding, remotes and CEC. LibreELEC performs system updates through its settings interface, and an add-on repository provides PVR, streaming and skin extensions; it offers no general-purpose desktop environment and is not suited to office or server use. It suits home theatre, living-room TV, reuse of old hardware and HTPC users. Note that users must judge the add-on ecosystem and copyright compliance for themselves; hardware decoding support varies considerably between devices, and some newer formats may require a kernel update or a different device. LibreELEC offers no commercial edition and is maintained by the community.",
      "highlights": [
        "A minimalist system that boots straight into Kodi",
        "Supports 4K/HDR and hardware decoding",
        "Runs on Raspberry Pi, TV boxes and mini PCs",
        "System and add-on updates managed in one place"
      ],
      "pros": [
        "A pure HTPC experience with fast startup",
        "Good hardware decoding support",
        "Simple to maintain"
      ],
      "cons": [
        "Cannot serve as a general-purpose desktop",
        "Decoding capability varies widely by device",
        "Add-on ecosystem must be vetted by the user"
      ],
      "status_note": "Actively maintained, focused on the Kodi media centre",
      "target_user": "Home theatre and Kodi media centre users",
      "release_cycle": "Released alongside Kodi versions, with point updates"
    },
    "batocera": {
      "intro": "Batocera.linux is a retro gaming and emulator integration system that appeared in 2018. Built on Buildroot, it boots straight into the EmulationStation interface, so users only need to add ROMs to browse and launch games by platform. It ships with a large number of emulator cores and supports controllers, Bluetooth, network shares, scraping, save states and multiplayer, running on x86_64, Raspberry Pi, Odroid, handhelds and other devices. Batocera updates as whole images and configuration is relatively simple, which makes it well suited to turning an old computer or single-board computer into a living-room retro console. It suits nostalgic players, emulator enthusiasts, arcade cabinet builders and handheld modders. Note that copyright in ROMs and BIOS files belongs to their respective rights holders and users must ensure lawful use; emulation accuracy and performance vary considerably between platforms, and emulation of some newer consoles is still immature. Batocera offers no commercial edition and is maintained by the community.",
      "highlights": [
        "An out-of-the-box EmulationStation gaming interface",
        "Many emulator cores and controller support",
        "Runs on old PCs, Raspberry Pi and handhelds",
        "Network shares, scraping and save management"
      ],
      "pros": [
        "A complete retro gaming experience",
        "Simple configuration and broad hardware coverage",
        "Active community"
      ],
      "cons": [
        "Users are responsible for ROM/BIOS copyright",
        "Emulation accuracy varies by platform",
        "Not suited to general computing"
      ],
      "status_note": "Actively maintained; a retro gaming and emulator integration system",
      "target_user": "Retro gamers and living-room console modders",
      "release_cycle": "Released by version, with fairly frequent updates"
    },
    "android": {
      "intro": "The Android Open Source Project (AOSP) is the mobile operating system led by Google, released in 2008 with the first Android phone. It uses the Linux kernel at the bottom and, above it, a Java/Kotlin application framework, the ART runtime, Binder IPC and system services. AOSP itself is open under licences such as Apache-2.0 and vendors may customise it freely, but most phones on the market also add Google Mobile Services, vendor UIs and proprietary drivers, so “open source Android” and “the Android on your phone” are not the same thing. AOSP suits phone manufacturers, ROM developers, embedded device makers and anyone who wants to study a mobile system; ordinary users usually meet it through vendor releases from Pixel, Samsung, Xiaomi and others. Note that AOSP does not include Google Play services, so ordinary users who flash pure AOSP lose push notifications, payments and some apps; closed-source device kernels and drivers also make long-term updates difficult. In this atlas it is listed under other families as the mobile/embedded representative.",
      "highlights": [
        "Linux kernel plus the Android application framework",
        "AOSP is open source and vendors can customise it",
        "The APK app ecosystem and the ART runtime",
        "Covers phones, tablets, TVs, cars and embedded devices"
      ],
      "pros": [
        "Enormous mobile ecosystem and hardware coverage",
        "AOSP can be customised freely",
        "Mature apps and development tools"
      ],
      "cons": [
        "Real devices contain many closed-source components",
        "Long-term system updates depend on vendors",
        "Pure AOSP lacks Google services"
      ],
      "status_note": "AOSP is continuously updated; real device support depends on the chipset and vendor",
      "target_user": "Mobile device makers, ROM developers and embedded vendors",
      "release_cycle": "One major version per year; vendors and devices determine actual updates"
    },
    "openkylin": {
      "intro": "openKylin is a desktop operating system community initiated in 2022 by Chinese vendors such as Kylin Soft together with the community, aiming to build an open and controllable Linux desktop ecosystem. It uses the UKUI desktop environment and, on the basis of the Linux kernel and the deb/apt package system, supports domestic hardware architectures including x86_64, ARM64, RISC-V and LoongArch, with localisation for Chinese input, office work, multimedia and peripheral compatibility. openKylin is related to the ecosystem of the commercial Kylin release, but the community edition is published independently. It suits users and institutions that need a domestic desktop, a Chinese-language environment and multi-architecture support, as well as developers interested in the RISC-V/LoongArch desktop ecosystem. Note that openKylin's software repositories still lag behind mainstream international distributions and some professional software needs adaptation; the update cadence of the community edition and the support scope of the commercial edition also differ. It is not directly equivalent to the commercial Kylin release, so specific versions and support policies should be confirmed when choosing.",
      "highlights": [
        "The UKUI desktop with Chinese localisation",
        "Supports x86, ARM, RISC-V and LoongArch",
        "Incubated by the OpenAtom Foundation",
        "Tied to the commercial Kylin ecosystem"
      ],
      "pros": [
        "Active adaptation to domestic hardware and Chinese-language environments",
        "Leading multi-architecture support",
        "Complete desktop localisation"
      ],
      "cons": [
        "Limited international software ecosystem",
        "Limited support scope for the community edition",
        "The relationship with the commercial edition needs clarifying"
      ],
      "status_note": "Actively maintained; an OpenAtom Foundation incubation project",
      "target_user": "Institutions and developers needing a domestic Chinese desktop",
      "release_cycle": "Released by community version; the commercial edition is provided by Kylin Soft"
    },
    "uos": {
      "intro": "UnionTech UOS is a Chinese commercial operating system launched by UnionTech Software in 2019, aimed at desktop and server scenarios in government, finance, education, energy and other sectors. It inherits the technical legacy of deepin/DDE and uses apt/dpkg with its own app store, offering Chinese input, an office suite, peripheral compatibility and centralised management, and supports architectures including x86_64, ARM64, LoongArch and RISC-V. UOS comes in Professional, Server and Education editions and normally requires a licence and a technical support contract; individual users can experience a similar desktop through the community edition or deepin. It suits organisations that need domestic substitution, local services and compliance support. Note that UOS is a commercial distribution whose source code and update policies are not fully public; its software ecosystem centres on adapting Chinese applications and offers limited support for international professional software. Unlike openKylin's community route, UOS emphasises enterprise delivery and support. When choosing, confirm the version, licensing scope and hardware compatibility.",
      "highlights": [
        "A domestic commercial distribution for government and enterprise",
        "A customised DDE desktop and a Chinese office ecosystem",
        "Support for multi-architecture domestic hardware",
        "Centralised management and commercial support"
      ],
      "pros": [
        "Well-developed localisation and support for government and enterprise",
        "Active adaptation to domestic hardware",
        "Clear commercial services"
      ],
      "cons": [
        "Requires a licence and is limited in openness",
        "Weaker international software ecosystem",
        "Version and support policies must be confirmed item by item"
      ],
      "status_note": "A commercial distribution; specific versions and lifecycles are subject to UnionTech",
      "target_user": "Government and enterprise users needing domestic substitution and commercial support",
      "release_cycle": "Released on Professional and Server cycles with commercial support"
    },
    "flatcar": {
      "intro": "Flatcar Container Linux is a container-optimised operating system forked from CoreOS Container Linux in 2018. After CoreOS was acquired by Red Hat and redirected to Fedora CoreOS, Flatcar took over the “immutable, auto-updating, built for containers” path. It has no traditional package manager: the system image is updated atomically through update_engine, users configure it at first boot through Ignition, and applications run as containers. Flatcar supports x86_64 and aarch64 and provides cloud images, ISO and PXE boot, making it suitable for Kubernetes nodes, container hosts and edge devices. It suits operations and platform teams comfortable with declarative configuration who want to reduce system drift. Note that Flatcar provides no general-purpose desktop and debugging requires getting used to a read-only root partition and containerised tools; automatic update channels should be aligned with maintenance windows. It offers a free version and commercial support, is maintained by the Kinvolk team sponsored by Microsoft, and keeps open source governance.",
      "highlights": [
        "A community heir to CoreOS",
        "Immutable system with atomic automatic updates",
        "Declarative first-boot configuration with Ignition",
        "Designed for containers and Kubernetes nodes"
      ],
      "pros": [
        "Little system drift, suited to large node fleets",
        "Reliable automatic updates and rollback",
        "Cloud images and multi-architecture support"
      ],
      "cons": [
        "Not suited to general-purpose desktops",
        "Troubleshooting requires adapting to a read-only system",
        "Automatic updates need planned maintenance windows"
      ],
      "status_note": "Actively maintained; the spiritual successor to CoreOS",
      "target_user": "Platform operations teams running containers and Kubernetes",
      "release_cycle": "Continuously rolling, released through update channels"
    },
    "sailfish": {
      "intro": "Sailfish OS was launched by Jolla in 2013 and descends from the MeeGo/Mer project; it is a mobile Linux system known for gesture-based operation and privacy. It uses rpm/zypper package management, systemd and Wayland, and its interface emphasises swipe navigation, multitasking cards and operation without physical buttons; some versions support Android apps through Alien Dalvik, but the core remains Linux and Qt. Sailfish is aimed mainly at Jolla's own devices, licensed manufacturers and part of the Sony Xperia porting community, and suits users who want to move away from Google services and value privacy and the European open source ecosystem. Note that Sailfish is “partly open source”: many system components are available, but the UI and some commercial components are closed; device support is narrow and the app ecosystem is far smaller than Android or iOS, so everyday use involves compromises. It is offered through commercial licences and devices, not as a fully free distribution.",
      "highlights": [
        "A gesture-driven mobile system with MeeGo/Mer lineage",
        "rpm/zypper and Wayland",
        "Some versions support Android apps",
        "Maintained by Jolla and licensed manufacturers"
      ],
      "pros": [
        "A privacy-oriented and independent ecosystem",
        "Distinctive gesture interaction",
        "A European representative of mobile Linux"
      ],
      "cons": [
        "Limited device and app ecosystem",
        "Some components are closed source",
        "Everyday use requires compromises"
      ],
      "status_note": "Maintained by Jolla and licensed manufacturers, with limited device support",
      "target_user": "Mobile Linux users who value privacy and accept a limited ecosystem",
      "release_cycle": "Released by version; Jolla and licensed manufacturers provide updates"
    }
  },
  "fi": {
    "arch-linux": {
      "intro": "Arch Linux on itsenäinen KISS-filosofiaan (Keep It Simple, Stupid) nojaava rullaava jakelu, jonka Judd Vinet loi vuonna 2002. Se ei asenna työpöytäympäristöä valmiiksi, vaan käyttäjä valitsee asennuksen aikana ytimen, näyttöpalvelimen, työpöydän ja komponentit, joten kokemus on kuin rakentaisi järjestelmää osista. Archin viralliset varastot sisältävät vain melko tuoreita upstream-ohjelmistoja, ja rullaavat päivitykset pitävät käyttäjän jatkuvasti uusimmissa versioissa ilman puolen vuoden välein tehtävää järjestelmäpäivitystä. Sen paketinhallinta on pacman, jonka syntaksi on suoraviivainen ja nopea; AUR (Arch User Repository) tarjoaa valtavan määrän yhteisön PKGBUILD-tiedostoja, ja yay- ja paru-avustimet kattavat virallisten varastojen ulkopuoliset ohjelmat. Arch Wikiä pidetään laajalti Linux-maailman yksityiskohtaisimpana dokumentaationa, ja myös muiden jakelujen käyttäjät lukevat sitä. Se sopii keskitason ja edistyneille käyttäjille, jotka ovat valmiita lukemaan dokumentaatiota, ymmärtämään järjestelmän rakenteen ja hyväksymään, että päivitykset voivat vaatia käsityötä; jos haluat suoraan käyttövalmiin työpöydän ilman jatkuvaa säätämistä, Manjaro tai EndeavourOS on helpompi valinta. On hyvä huomata, että Arch sisältää oletuksena osan firmwaresta ja binääriblobeista, joten se ei ole täysin vapaan ohjelmiston jakelu.",
      "highlights": [
        "Rullaava julkaisu, viralliset varastot lähellä upstream-versioita",
        "pacman + AUR, erittäin laaja ohjelmistovalikoima",
        "Arch Wiki: laadukas ja muihinkin jakeluihin soveltuva järjestelmädokumentaatio",
        "Hyvin pelkistetty perusjärjestelmä, työpöytä ja komponentit täysin vapaasti valittavissa"
      ],
      "pros": [
        "Tuoreet ohjelmistot ja paljon mukautusvapautta",
        "Syvällinen dokumentaatio ja vahva yhteisön tietopohja",
        "Yksinkertainen ja läpinäkyvä paketinhallinta, hyvä Linuxin opetteluun"
      ],
      "cons": [
        "Asennuksen ja ylläpidon kynnys on korkea",
        "Rullaavat päivitykset vaativat joskus käsityötä",
        "Virallisesti ei tarjota täyttä valmista työpöytäkokemusta"
      ],
      "status_note": "Jatkuvasti rullaava, yhteisön itsenäisesti ylläpitämä",
      "target_user": "Keskitason ja edistyneet käyttäjät, jotka haluavat säätää ja ymmärtää Linuxia syvemmin",
      "release_cycle": "Jatkuva rullaus, asennuskuvat päivitetään kuukausittain"
    },
    "manjaro": {
      "intro": "Manjaro on yksi tunnetuimmista Arch Linuxin jatkokehityksistä, ja vuodesta 2011 lähtien sen tavoitteena on ollut tehdä Archista helpommin lähestyttävä tarjoamalla valmiiksi määritettyjä työpöytiä, graafinen asennusohjelma sekä laitteiston tunnistus- ja ydin-hallintatyökalut. Se ei kopioi Archin pakettivarastoja suoraan, vaan pidättää päivityksiä vakautusjakson ajan ennen niiden jakelua, mikä pienentää riskiä siitä, että rullaava jakelu rikkoo järjestelmän yhtäkkiä. Virallisia versioita ovat muun muassa Xfce, KDE Plasma ja GNOME, ja Pamac-graafisen paketinhallinnan kautta varastot, AUR ja Flatpak ovat samassa paikassa, mikä tekee päivittämisestä, hakemisesta ja versioiden palauttamisesta selkeämpää. Manjaro ylläpitää myös omia ytimiä, ajureita ja osaa sovellusten korjauksista, joten ohjelmistoversiot jäävät yleensä hieman Archia jälkeen, vaikka kyseessä on edelleen rullaava jakelu. Sen keskustelufoorumi ja wiki ovat aloittelijaystävällisiä, ja se sopii käyttäjille, jotka haluavat kokea Arch-ekosysteemin asentamatta kaikkea komentoriviltä. On kuitenkin hyvä muistaa, että viivästetyt päivitykset eivät tarkoita ehdotonta vakautta; suuret versiopäivitykset, AUR-paketit ja ajuriristiriidat voivat yhä vaatia tiedotteiden lukemista ja käsityötä. Manjaron tavaramerkkiä ja infrastruktuuria koordinoi yritys, mutta jakelu itsessään on ilmainen.",
      "highlights": [
        "Arch-ekosysteemi ja valmiiksi määritetty työpöytä, käyttövalmis heti asennuksen jälkeen",
        "Pamac yhdistää viralliset varastot, AUR:n ja Flatpakin",
        "Vakautusviiveellä rullaava, päivitystahti Archia varovaisempi",
        "Valmiit ydin- ja laitteistohallintatyökalut"
      ],
      "pros": [
        "Aloittelijaystävällinen ja pitkälle graafinen",
        "Melko tuoreet ohjelmistot ja hyvä laitteistoyhteensopivuus",
        "Runsas valikoima virallisia versioita"
      ],
      "cons": [
        "Viivästetyt päivitykset voivat aiheuttaa riippuvuuksien epäsuhdetta",
        "AUR ja Manjaron varastot eivät ole virallisesti taattuja",
        "Osa päätöksistä ja yhteisöviestinnästä on herättänyt kiistaa"
      ],
      "status_note": "Aktiivisesti ylläpidetty, Manjaro GmbH & Co. KG:n koordinoima",
      "target_user": "Työpöytäkäyttäjät, jotka haluavat Arch-ekosysteemin mutta arvostavat valmista asennusta",
      "release_cycle": "Vakautusviiveellä rullaava; tilannekuvat julkaistaan yleensä viikkoja Arch-päivitysten jälkeen"
    },
    "endeavouros": {
      "intro": "EndeavourOS syntyi vuonna 2019 jatkamaan lopetetun Antergosin työtä, ja se määrittelee itsensä Archia lähimmäksi ystävälliseksi asennuskokemukseksi. Se käyttää Archin virallisia pakettivarastoja eikä ylläpidä omaa rinnakkaista varastoa, joten päivitystahti ja ohjelmistoversiot vastaavat pitkälti Archia; erot ovat asennusohjelmassa, oletusteemassa, tervetulotyökalussa ja muutamassa apuskriptissä. Oletuksena on Xfce-työpöytä, ja asennuksen aikana voi valita myös KDE Plasman, GNOMEn, Budgien, Cinnamonin tai MATEn. Projekti korostaa terminaalilähtöisyyttä graafisella tuella: asennuksen jälkeen järjestelmä ei piilota pacmania, mutta tervetulosovellus auttaa peilipalvelinten, ajurien, tulostimien ja yleisohjelmien määrittämisessä. EndeavourOSin yhteisö on pieni mutta aktiivinen, ja tärkeimmät tukikanavat ovat keskustelufoorumi ja Discovery-dokumentaatio. Se sopii käyttäjille, jotka jo tuntevat Archin perusteet ja haluavat nopeasti käyttövalmiin järjestelmän, jota he sitten ylläpitävät Archin tapaan; jos et halua koskea komentoriviin lainkaan, Manjaro tai Mint sopii paremmin.",
      "highlights": [
        "Käyttää Archin virallisia varastoja lähes ilman lisäviivettä",
        "Graafinen asennusohjelma ja vapaasti valittava työpöytäympäristö",
        "Tervetulotyökalu kokoaa peilit, ajurit ja yleisasetukset yhteen",
        "Pieni, aktiivinen ja ystävällinen yhteisö"
      ],
      "pros": [
        "Säästää aikaa puhtaaseen Arch-asennukseen verrattuna",
        "Tuoreet ohjelmistot ja yhteensopivuus Arch-dokumentaation kanssa",
        "Kevyt oletusjärjestelmä ilman turhia ohjelmia"
      ],
      "cons": [
        "Edellyttää yhä Archin ylläpitotavan ymmärtämistä",
        "Pieni projekti, jonka tuki nojaa yhteisöön",
        "Graafisten työkalujen kattavuus on rajallinen"
      ],
      "status_note": "Aktiivisesti ylläpidetty yhteisöprojekti",
      "target_user": "Käyttäjät, jotka haluavat Archin nopeasti asennettua ja ovat valmiita ylläpitämään sitä Archin tapaan",
      "release_cycle": "Rullaa Arch-varastojen tahdissa, ISO-kuvat päivitetään säännöllisesti"
    },
    "garuda": {
      "intro": "Garuda Linux on vuonna 2020 ilmestynyt Arch-johdannainen, joka tunnetaan heti käyttövalmiista suorituskyvystä ja visuaalisesta kokemuksesta. Archin päälle se asentaa valmiiksi runsaasti virityksiä: Btrfs Snapperin automaattisine tilannekuvineen, zram, CPU-ajastimet ja pelaamiseen liittyvät komponentit, sekä graafiset työkalut kuten Garuda Assistant ja Garuda Gamer, joilla voi hallita järjestelmän ylläpitoa, ajureita ja pelialustoja keskitetysti. Suosituin versio käyttää KDE Plasmaa, ja lisäksi tarjolla on GNOME-, Xfce-, Cinnamon- ja Sway-makuja. Visuaalinen tyyli on omaleimainen: oletusteema, ikkunakoristeet ja kuvakkeet on suunniteltu yhtenäisesti. Garuda sopii työpöytäkäyttäjille, jotka haluavat tuoreita ohjelmistoja, eivät halua rakentaa tilannekuva- ja peliympäristöä itse ja hyväksyvät visuaalisesti raskaan järjestelmän, johon on asennettu paljon valmiita paketteja. On hyvä huomata, että se on EndeavourOSia raskaampi ja sisältää enemmän komponentteja; rullaavat päivitykset ja syvällinen mukauttaminen tarkoittavat myös, että vianetsinnässä ei voi täysin seurata Arch Wikiä. Projekti on yhteisön ylläpitämä, eikä siitä ole maksullista kaupallista versiota.",
      "highlights": [
        "Btrfs-tilannekuvat ja järjestelmän palautus suoraan käyttövalmiina",
        "Garuda Gamer kokoaa pelialustat ja -työkalut yhteen",
        "Suorituskykyviritykset ja zram oletuksena käytössä",
        "Yhtenäinen ja omaleimainen työpöydän visuaalinen ilme"
      ],
      "pros": [
        "Peli- ja työpöytäkokemus on valmiiksi konfiguroitu",
        "Tilannekuvapalautus vähentää säätämisen riskiä",
        "Ohjelmistoversiot seuraavat Archia ja pysyvät tuoreina"
      ],
      "cons": [
        "Paljon valmiiksi asennettuja paketteja tekee järjestelmästä raskaan",
        "Syvällinen mukauttaminen tekee vianetsinnästä erilaista kuin puhtaassa Archissa",
        "Visuaalinen tyyli on vahvasti tekijänsä näköinen"
      ],
      "status_note": "Aktiivisesti ylläpidetty, keskittyy suorituskykyyn ja pelaamiseen",
      "target_user": "Arch-pelityöpöytää käyttävät, jotka haluavat huippusuorituskykyä suoraan käyttövalmiina",
      "release_cycle": "Rullaa Archin tahdissa, ISO-kuvat päivitetään säännöllisesti"
    },
    "cachyos": {
      "intro": "CachyOS on vuodesta 2016 lähtien kehitetty Arch-johdannainen, jonka ydinmyyntivaltti on suorituskykyyn optimointi. Se tarjoaa käännettyjä ja optimoituja ytimiä ja paketteja, tukee x86-64-v3:n kaltaisia käskykantatasoja ja säätää ajastimia, muistinhallintaa ja CPU-taajuuskäytäntöjä työpöydän reagointikyvyn, pelaamisen ja matalan latenssin tarpeisiin. Asennusohjelmassa voi valita KDE Plasman, GNOMEn, Xfcen, Hyprlandin ja muita työpöytiä, ja mukana ovat oletuksena paru, CachyOS Hello ja tavalliset ajurityökalut. Garudaan verrattuna CachyOS korostaa matalan tason suorituskykyparametreja ja valinnaisia virityksiä runsaiden esiasennettujen sovellusten sijaan; se käyttää edelleen Archin varastoja ja AUR-ekosysteemiä, joten Arch Wikin ja AUR:n tuntemus on suoraan hyödynnettävissä. Se sopii käyttäjille, jotka tavoittelevat kuvataajuutta, kääntötehoa tai matalaa latenssia ja hyväksyvät rullaavat päivitykset, sekä niille, jotka käyttävät Linuxia pääasiallisena pelijärjestelmänä. On hyvä huomata, että optimoidut ytimet ja kolmannen osapuolen varastot voivat monimutkaistaa vianetsintää; tuotantopalvelimilla, joilla vakaus on ratkaisevaa, kiinteän version jakelu on edelleen parempi valinta.",
      "highlights": [
        "Suorituskykyyn suunnatut ytimet ja käyttäjäavaruuden paketit",
        "Tuki mikroarkkitehtuurin optimoinneille, kuten x86-64-v3",
        "Ajastimien viritys työpöytä- ja pelikuormille",
        "Säilyttää Archin varastot ja AUR-ekosysteemin"
      ],
      "pros": [
        "Suorituskykyyn painottuvat oletusasetukset ovat melko kattavat",
        "Laaja työpöytävalikoima ja nykyaikainen asennusprosessi",
        "Yhteensopiva Arch-ekosysteemin kanssa, joten osaaminen siirtyy"
      ],
      "cons": [
        "Optimointivalinnat lisäävät vianetsinnän muuttujia",
        "Rullaavat päivitykset vaativat edelleen aktiivista ylläpitoa",
        "Osa suorituskykyhyödyistä riippuu laitteistosta ja kuormasta"
      ],
      "status_note": "Aktiivisesti ylläpidetty, keskittyy suorituskyvyn optimointiin",
      "target_user": "Arch-käyttäjät, jotka tavoittelevat suorituskykyä ja pelikokemusta",
      "release_cycle": "Jatkuvasti rullaava, asennuskuvat päivitetään säännöllisesti"
    },
    "artix": {
      "intro": "Artix Linux on vuonna 2017 Arch Linuxista haarautunut jakelu, jonka näkyvin piirre on systemd-vapaus. Se säilyttää pacmanin, Archin pakettimuodon ja rullaavan julkaisumallin, mutta korvaa init-järjestelmän OpenRC:llä, runitilla, s6:lla tai dinitillä, jonka käyttäjä valitsee asennuksen yhteydessä. Artix ylläpitää omia varastojaan, ja monet Arch-paketit on käännettävä uudelleen systemd-riippuvuuksien poistamiseksi tai toisen initin tukemiseksi; AUR-paketit eivät aina toimi suoraan, vaan ne on tarkistettava itse. Tarjolla on Xfce-, KDE Plasma-, LXQt-, MATE- ja muita työpöytä-ISOja, ja se sopii myös kevyisiin palvelimiin tai sulautettuihin laitteisiin. Artix sopii käyttäjille, joilla on selkeä mieltymys init-järjestelmään, jotka ymmärtävät palvelunhallinnan erot ja ovat valmiita hoitamaan riippuvuuksien sovittamisen; jos et vain pidä systemdistä mutta et halua ylimääräistä työtä, Devuan voi olla kypsempi vaihtoehto. Artixin yhteisö on pieni, dokumentaatio ja foorumi ovat tärkeimpiä tukilähteitä, ja joillekin harvinaisille ohjelmille ei välttämättä ole valmista pakettia.",
      "highlights": [
        "Sama jakelu tarjoaa neljä initiä: OpenRC, runit, s6 ja dinit",
        "Säilyttää pacmanin ja Archin rullaavan mallin",
        "Kevyt, sopii palvelimille ja vanhalle laitteistolle",
        "Itsenäiset varastot, joista systemd-riippuvuudet on poistettu"
      ],
      "pros": [
        "Vapaus valita init ja hallittavissa oleva järjestelmä",
        "Devuania tuoreemmat ohjelmistot, lähempänä Archia",
        "Kevyt eikä sidottu systemdiin"
      ],
      "cons": [
        "Pakettien sovittaminen vaatii melko paljon työtä",
        "AUR-yhteensopivuus on epävakaata",
        "Yhteisö ja dokumentaatio ovat suppeita"
      ],
      "status_note": "Aktiivisesti ylläpidetty, tarjoaa systemd-vapaita Arch-muunnelmia",
      "target_user": "Käyttäjät, jotka haluavat Arch-ekosysteemin mutta hylkäävät systemdin",
      "release_cycle": "Jatkuvasti rullaava, useita init-muunnelmia"
    },
    "blackarch": {
      "intro": "BlackArch Linux on Arch-johdannainen tietoturvatestaukseen ja tunkeutumistestaukseen, aloitettu vuonna 2012. Sen tärkein ominaisuus on erittäin laaja tietoturvatyökalujen varasto, joka kattaa tiedonkeruun, haavoittuvuuksien analysoinnin, verkkotestauksen, langattomat verkot, käänteismallinnuksen ja forensiikan; työkalut tarjotaan pacman-paketteina, jotka voi asentaa yksitellen olemassa olevaan Arch-järjestelmään asentamatta koko jakelua uudelleen. Viralliset ISO-kuvat tarjoavat kevyitä työpöytiä tai ikkunamanagereita, kuten Xfce, Openbox, Fluxbox ja i3, jotta tietoturvatyökalujen päälle ei kasata raskasta työpöytää. BlackArch noudattaa Archin rullaavia päivityksiä ja KISS-tyyliä, ja se sopii tietoturva-alan ammattilaisille ja CTF-pelaajille, jotka jo tuntevat Archin ja tarvitsevat työkaluketjun, jota voi laajentaa milloin tahansa. On korostettava, että näitä työkaluja tulee käyttää vain ympäristöissä, joihin on saatu lupa; projekti itse vastustaa selvästi kaikkea laitonta käyttöä. Koska työkaluja on valtava määrä, varaston laatu ja ylläpidon tila vaihtelevat, ja jotkin paketit voivat olla pitkään päivittämättä.",
      "highlights": [
        "Laaja tietoturvatyökalujen varasto, asennettavissa tarpeen mukaan",
        "Voidaan lisätä olemassa olevan Arch-järjestelmän päälle",
        "Kevyitä työpöytiä ja ikkunamanagereita valittavana",
        "Noudattaa Archin rullaavia päivityksiä ja pacman-työnkulkua"
      ],
      "pros": [
        "Tietoturvatyökalujen laaja kattavuus",
        "Varasto on käytettävissä Archissa ilman uudelleenasennusta",
        "Kevyt työpöytä ja hallittu resurssien käyttö"
      ],
      "cons": [
        "Työkalujen laatu ja ylläpidon tila vaihtelevat",
        "Ei paras valinta jokapäiväiseksi yleistyöpöydäksi",
        "Käyttö on tiukasti rajattu lain ja valtuuksien mukaan"
      ],
      "status_note": "Aktiivisesti ylläpidetty, tietoturvatyökalujen varasto kasvaa jatkuvasti",
      "target_user": "Valtuutetut tietoturvatestaajat, jotka jo tuntevat Archin",
      "release_cycle": "Jatkuvasti rullaava, tietoturvatyökalujen varasto laajenee jatkuvasti"
    },
    "archcraft": {
      "intro": "Aditya Shakyan vuonna 2020 perustama Archcraft on työpöytäjakelu, joka yhdistää Arch Linuxin huolellisesti konfiguroituihin kevyisiin ikkunamanagereihin. Oletusympäristö käyttää yleensä bspwm:ää tai Openboxia ja tarjoaa yhtenäisen värimaailman, tilarivin, ilmoitukset, käynnistimen ja pikanäppäimet, joten käyttöön saa heti minimalistisen mutta täydellisen laatoittavan tai pinoutuvan työpöydän. Toisin kuin puhdasta Archia tavoitteleva EndeavourOS, Archcraft keskittyy visuaaliseen ja vuorovaikutuksen suunnitteluun; se säilyttää pacmanin, AUR:n ja Archin varastot, joten pohjimmiltaan kyse on edelleen tavallisesta Arch-työnkulusta. Projekti tarjoaa myös Hyprland-, i3- ja awesome-yhteisö-ISOja, ja se sopii käyttäjille, jotka pitävät näppäimistöohjatusta ja vähän resursseja vaativasta ympäristöstä mutta eivät halua kirjoittaa dotfilejä alusta asti. On hyvä huomata, että valmiiksi määritetyt teemat ja skriptit lisäävät monimutkaisuutta, joten varmuuskopiointi kannattaa ennen ikkunamanagerin päivitystä tai asetusten muuttamista; se ei myöskään sovi käyttäjille, jotka odottavat GNOMEn tai KDE:n täyttä toiminnallisuutta.",
      "highlights": [
        "Valmiiksi määritetyt minimalistiset työpöydät, kuten bspwm ja Openbox",
        "Yhtenäinen teema, tilarivi ja pikanäppäimet",
        "Pohjimmiltaan edelleen tavallinen Arch pacmanilla ja AUR:lla",
        "Vähäinen resurssien käyttö, sopii vanhoille koneille ja näppäimistökäyttäjille"
      ],
      "pros": [
        "Viimeistelty minimalistinen työpöytä suoraan käyttövalmiina",
        "Erittäin mukautettavissa, ja esimerkkikonfiguraatiot ovat kattavia",
        "Kevyt ja nopeasti käynnistyvä"
      ],
      "cons": [
        "Monimutkainen esikonfiguraatio tekee päivityksistä varovaisuutta vaativia",
        "Ei sovi käyttäjille, jotka tarvitsevat täyden työpöytäpaketin",
        "Ylläpito nojaa pääosin yhteen henkilöön tai pieneen tiimiin"
      ],
      "status_note": "Aktiivisesti ylläpidetty, keskittyy minimalistiseen ikkunamanager-estetiikkaan",
      "target_user": "Arch-käyttäjät, jotka pitävät laatoittavista ikkunamanagereista ja minimalistisesta estetiikasta",
      "release_cycle": "Jatkuvasti rullaava, ISO-kuvat päivitetään säännöllisesti"
    },
    "steamos": {
      "intro": "SteamOS on Valven pelaamiseen rakentama käyttöjärjestelmä. Se ilmestyi ensimmäisen kerran vuonna 2013 Debianin pohjalta, ja vuonna 2022 Steam Deckin mukana tullut versio 3.0 siirtyi Arch Linuxiin. Se käyttää muuttumatonta järjestelmäkuvaa, jonka juuritiedostojärjestelmä on vain luku -tilassa, ja Valve jakaa järjestelmäpäivitykset kokonaisuutena, mikä pienentää riskiä siitä, että käyttäjä rikkoo järjestelmän vahingossa; lisäohjelmien virallinen asennustapa on Flatpak, ja kehittäjätila voi väliaikaisesti avata pacmanin. Kokemuksen ydin on pelitila: laite käynnistyy suoraan Steamin ison kuvan käyttöliittymään, jota ohjataan peliohjaimella, ja Proton-yhteensopivuuskerros pyörittää suurta osaa Windows-peleistä; työpöytätilaan siirryttäessä käytössä on KDE Plasma. Se sopii käyttäjille, jotka pelaavat pääasiassa ja haluavat käyttää PC:tä kuin konsolia, sekä niille, jotka haluavat vähän ylläpitoa vaativan kokemuksen käsikonsolissa tai olohuonelaitteessa. On hyvä huomata, että SteamOS tukee virallisesti lähinnä Valven omia laitteita, ja kolmannen osapuolen laitteisiin asennettuna ajureita tai ominaisuuksia voi puuttua; kyse ei myöskään ole yleiskäyttöisestä työpöytäjakelusta.",
      "highlights": [
        "Muuttumaton järjestelmäkuva, jonka päivitykset Valve jakaa kokonaisuutena",
        "Pelitila ja KDE Plasma -työpöytätila",
        "Proton-yhteensopivuuskerros kattaa laajan joukon Windows-pelejä",
        "Optimoitu Steam Deckin ohjaimille ja virranhallinnalle"
      ],
      "pros": [
        "Konsolimainen pelikokemus ja vähäinen ylläpito",
        "Järjestelmäpäivitykset ovat atomaarisia, eikä käyttäjä riko niitä helposti",
        "Työpöytätilassa hoituu tavallinen kevyt toimistotyö"
      ],
      "cons": [
        "Virallinen laitetuki on rajallinen",
        "Vain luku -järjestelmä rajoittaa syvällistä mukauttamista",
        "Muiden kuin pelien ohjelmistoekosysteemi nojaa Flatpakiin"
      ],
      "status_note": "Päivittyy jatkuvasti Steam Deckin ja Valven laitteiden mukana",
      "target_user": "Pelaajat, jotka pelaavat pääasiassa ja haluavat vähän ylläpitoa vaativan olohuone- tai käsikonsolijärjestelmän",
      "release_cycle": "Valve jakaa järjestelmäkuvapäivitykset erissä"
    },
    "chimeraos": {
      "intro": "ChimeraOS on Arch-johdannainen, joka muuttaa PC:n olohuoneen pelikonsoliksi; se alkoi GamerOS-nimisenä vuonna 2019 ja nimettiin myöhemmin uudelleen. Se käyttää muuttumatonta järjestelmärakennetta, käynnistyy oletuksena Steamin ison kuvan tilaan ja tarjoaa myös GNOME-työpöydän arkikäyttöön; se tukee Steamia, Epiciä, GOG:ta ja muita alustoja ja laajentaa peliyhteensopivuutta Protonin, Lutriksen ja vastaavien työkalujen avulla. Järjestelmäpäivitykset toimitetaan atomaarisina kuvina, joten käyttäjän ei tarvitse päivittää paketti paketilta kuten tavallisessa Archissa, mikä vähentää riskiä siitä, että olohuonelaite huononee ajan myötä. ChimeraOS sopii käyttäjille, jotka liittävät laitteen televisioon, käyttävät peliohjainta ja haluavat pelata heti käynnistyksen jälkeen, sekä niille, jotka muuttavat vanhan PC:n pelikonsoliksi. SteamOSiin verrattuna se on avoimempi kolmannen osapuolen laitteistolle ja useammille käynnistystavoille, mutta laitteistoyhteensopivuus riippuu silti kokoonpanosta; osa huijauksenestopeleistä ei toimi Linuxilla, mikä on kaikkien Linux-pelijärjestelmien yhteinen rajoitus.",
      "highlights": [
        "Käynnistyy suoraan Steamin ison kuvan tilaan",
        "Muuttumaton järjestelmä ja atomaariset päivitykset",
        "Tukee kolmannen osapuolen PC:itä ja useita pelialustoja",
        "GNOME-työpöytätila arkikäyttöön"
      ],
      "pros": [
        "Täysipainoinen olohuonepelikokemus",
        "Yksinkertaiset järjestelmäpäivitykset ja helppo palautus",
        "Avoimempi muulle kuin Valven laitteistolle"
      ],
      "cons": [
        "Laitteistoyhteensopivuus on varmistettava tapauskohtaisesti",
        "Huijauksenestopelien tuki on rajallinen",
        "Yhteisö on pienempi kuin SteamOSin"
      ],
      "status_note": "Aktiivisesti ylläpidetty olohuonepelijärjestelmä",
      "target_user": "Pelaajat, jotka haluavat muuttaa vanhan PC:n olohuoneen pelikonsoliksi",
      "release_cycle": "Jatkuvasti rullaava, järjestelmäkuvat julkaistaan versioittain"
    },
    "parabola": {
      "intro": "Parabola GNU/Linux-libre on Arch Linuxin täysin vapaan ohjelmiston johdannainen, jota on kehitetty vuodesta 2009 ja jonka Free Software Foundation (FSF) on hyväksynyt. Se säilyttää pacmanin, rullaavat päivitykset ja Archin pakettimuodon mutta poistaa tai korvaa kaikki komponentit, jotka eivät täytä vapaan ohjelmiston määritelmää, mukaan lukien omisteiset firmwaret, binääriblobit ja ei-vapaat ajurit; ytimenä on Linux-libre, ja myös selaimet ja vastaavat ohjelmat korvataan vapailla versioilla. Tämän vuoksi jotkin omisteista firmwarea vaativat verkkokortit, näytönohjaimet tai laitteistokiihdytystoiminnot eivät välttämättä toimi, ja tämä on käyttäjän hyväksyttävä valitessaan Parabolaa. Se sopii käyttäjille, jotka arvostavat ohjelmistovapautta, ovat valmiita tinkimään laitteistoyhteensopivuudesta ja osaavat ylläpitää Archia, ja sitä käytetään usein myös vapaan ohjelmiston edistämiseen ja opetukseen. Parabolan yhteisö on pieni ja pakettipäivitykset voivat jäädä hieman Archista jälkeen; laitteisto-ongelmissa tärkeimmät tukikanavat ovat virallinen wiki ja postituslistat.",
      "highlights": [
        "FSF:n hyväksymä täysin vapaa GNU/Linux-jakelu",
        "Perustuu Archiin ja säilyttää pacmanin sekä rullaavat päivitykset",
        "Poistaa omisteisen firmwaren, blobit ja ei-vapaat ohjelmistot",
        "Käyttää Linux-libre-ydintä"
      ],
      "pros": [
        "Ohjelmistovapauden periaatteet toteutuvat perusteellisesti",
        "Archin paketinhallintaa ja dokumentaatiota voi hyödyntää",
        "Sopii vapaan ohjelmiston opetukseen ja tutkimukseen"
      ],
      "cons": [
        "Laitteistoyhteensopivuus on selvästi rajallinen",
        "Pakettipäivitykset voivat jäädä jälkeen",
        "Pieni yhteisö ja niukat tukiresurssit"
      ],
      "status_note": "Aktiivisesti ylläpidetty, FSF:n hyväksymä täysin vapaa jakelu",
      "target_user": "Käyttäjät, jotka pitäytyvät täysin vapaassa ohjelmistossa ja hyväksyvät laitteistorajoitukset",
      "release_cycle": "Jatkuvasti rullaava, sisältää vain vapaata ohjelmistoa"
    },
    "archlinux-arm": {
      "intro": "Arch Linux ARM on Arch Linux -yhteisön vuonna 2011 käynnistämä ARM-porttausprojekti, jonka tavoitteena on tuoda Archin pacman, rullaavat päivitykset ja AUR-ekosysteemi ARM-pohjaisille yhden piirilevyn tietokoneille, kuten Raspberry Pi, Pine64, Rockchip ja Odroid. Se ylläpitää eri levyille räätälöityjä U-Booteja, ytimiä ja asennuskuvia, ja käyttäjä voi valita laitteen virallisilta alustasivuilta ja kirjoittaa kuvan muistikortille. Järjestelmä säilyttää Archin pelkistetyn tyylin eikä asenna työpöytää valmiiksi, joten ARM-laitteiden työpöydät, ajurit ja palvelut on määritettävä itse. Arch Linux ARM sopii käyttäjille, jotka jo tuntevat Archin ja haluavat ajaa uusimpia ohjelmistoja tai pystyttää kevyen palvelimen ARM-levyille, sekä sulautetun Linuxin opiskelijoille. On hyvä huomata, että levyjen tukilaatu ja ydinversiot vaihtelevat suuresti ja osa laitteista vaatii yhteisön korjauksia; laitteistokiihdytys ja videonpurkaus ovat ARMilla yleensä vähemmän kypsiä kuin x86_64:llä. Siitä ei ole kaupallista versiota, se on yhteisön ylläpitämä, ja ennen päivitystä kannattaa varmuuskopioida ja varmistaa palautusmahdollisuus.",
      "highlights": [
        "Archin virallinen yhteisön ARM-porttaus",
        "Kattaa levyt kuten Raspberry Pi, Pine64 ja Odroid",
        "Säilyttää pacmanin, rullaavat päivitykset ja AUR:n",
        "Pelkistetty järjestelmä, työpöytä ja palvelut valitaan itse"
      ],
      "pros": [
        "ARM-levyt voivat hyödyntää Arch-ekosysteemiä",
        "Tuoreet ohjelmistoversiot",
        "Yksinkertainen ja hallittava järjestelmä"
      ],
      "cons": [
        "Levyjen tukilaatu vaihtelee suuresti",
        "Laitteistokiihdytys on ARMilla rajallista",
        "Edellyttää Archin ylläpitotavan tuntemusta"
      ],
      "status_note": "Aktiivisesti ylläpidetty Arch ARM -porttausprojekti",
      "target_user": "Archin tuntevat käyttäjät, jotka haluavat ajaa tuoreita ohjelmistoja ARM-levyillä",
      "release_cycle": "Jatkuvasti rullaava, asennuskuvat laitekohtaisesti"
    },
    "rhel": {
      "intro": "Red Hat Enterprise Linux (RHEL) on yksi yritys-Linuxin de facto -standardeista. Red Hat perustettiin vuonna 1993 ja julkaisi RHEL 2.1:n vuonna 2002, minkä jälkeen vakiintui malli, jossa Fedora innovoi, RHEL on vakaa ja CentOS Stream yhdistää ne. RHEL julkaisee uuden pääversion noin kolmen vuoden välein, ja jokaisella pääversiolla on noin kymmenen vuoden elinkaari, joka kattaa ytimen, systemdin, SELinuxin, Podmanin, Ansiblen ja täyden sertifiointiekosysteemin. Binääreihin, tietoturvatiedotteisiin, tietopankkiin ja kaupalliseen tukeen pääsee käsiksi tilauksen kautta, joten kyse ei ole perinteisessä mielessä ilmaiseksi ladattavasta jakelusta; kehittäjät voivat saada sen ilmaiseksi Red Hat Developer -ohjelman kautta. RHEL sopii yrityksille, jotka tarvitsevat pitkäaikaista vakautta, laitteisto- ja ohjelmistosertifiointeja, vaatimustenmukaisuuden valvontaa ja toimittajatukea, erityisesti rahoitus-, televiestintä-, julkishallinnon ja pilvi-infrastruktuurin aloilla. Yksittäisille työpöytäkäyttäjille RHEL on yleensä liian konservatiivinen ja tilausprosessi hankala; Fedora tai yhteensopivat uudelleenrakennukset, kuten Rocky ja Alma, sopivat paremmin.",
      "highlights": [
        "Noin 10 vuoden elinkaari ja yritystason tuki",
        "SELinuxin, Podmanin ja Ansiblen syvä integraatio",
        "Laaja laitteisto- ja ISV-sertifiointi",
        "Vakaa ABI/API ja pitkäaikaiset tietoturvapäivitykset"
      ],
      "pros": [
        "Vahva yritystuki ja hyvät vaatimustenmukaisuusvalmiudet",
        "Pitkä elinkaari ja selkeä päivityspolku",
        "Kypsä sertifiointi- ja dokumentaatioekosysteemi"
      ],
      "cons": [
        "Vaatii tilauksen, mikä on korkea kynnys yksityisille",
        "Konservatiiviset ohjelmistoversiot",
        "Ilmainen yhteisötuki on rajallista"
      ],
      "status_note": "RHEL 10 julkaistiin vuonna 2025, vakiotuki jatkuu vuoteen 2030 ja laajennettu elinkaarituki pidempään",
      "target_user": "Yritysten IT-tiimit, jotka tarvitsevat pitkäaikaista vakautta ja kaupallista tukea",
      "release_cycle": "Uusi pääversio noin 3 vuoden välein, ja kullakin on noin 10 vuoden elinkaari"
    },
    "fedora": {
      "intro": "Fedora on Red Hatin sponsoroima yhteisöjakelu, joka syntyi vuonna 2003 Red Hat Linuxin kuluttajatuotesarjasta ja on nykyään RHEL:n ja CentOS Streamin ylävirta. Se julkaisee uuden version noin kuuden kuukauden välein ja käyttää melko uusia ytimiä, GNOMEa, systemdiä ja konttityökaluja pitäen samalla kiinni vapaan ohjelmiston periaatteista. Fedora Workstation on oletustyöpöytä, ja lisäksi on KDE-, Xfce-, Budgie- ja Sway-Spinnejä sekä palvelin-, pilvi-, IoT- ja Atomic-työpöytäversiot. Fedora sopii kehittäjille ja työpöytäkäyttäjille, jotka haluavat uudempia ohjelmistoja ja osallisuutta ylävirran ekosysteemiin mutta tarvitsevat melko luotettavan julkaisurytmin; SELinux on oletuksena käytössä, Wayland-tuki on aktiivista ja jakelua käytetään usein uusien teknologioiden testausalustana. Hinta on, että kunkin version tuki kestää noin 13 kuukautta, joten käyttäjän on päivitettävä säännöllisesti; osa multimedia-koodekeista ja NVIDIA-ajurista vaatii lisämäärityksiä. Fedoralla ei ole kaupallista versiota, mutta Red Hat tarjoaa infrastruktuurin ja insinöörityön tuen.",
      "highlights": [
        "Noin 6 kuukauden julkaisusykli, ohjelmistot lähellä ylävirtaa",
        "RHEL:n ja CentOS Streamin ylävirta",
        "SELinux ja Wayland oletuksena käytössä",
        "Workstation-, Atomic-, Server- ja IoT-muodot"
      ],
      "pros": [
        "Uudet ohjelmistot ja ennustettava julkaisurytmi",
        "Vahva osallistuminen ylävirtaan ja kattava dokumentaatio",
        "Nykyaikainen työpöytäkokemus ja aktiivinen laitetuki"
      ],
      "cons": [
        "Lyhyt tukiaika versiota kohden, säännölliset päivitykset tarpeen",
        "Multimedia-koodekit vaativat lisätyötä",
        "Joissakin uusissa ominaisuuksissa voi olla alkuvaiheen yhteensopivuusongelmia"
      ],
      "status_note": "Aktiivisesti ylläpidetty; RHEL:n ja CentOS Streamin ylävirta",
      "target_user": "Kehittäjät ja työpöytäkäyttäjät, jotka haluavat uudempia ohjelmistoja ja ylävirran ekosysteemiä",
      "release_cycle": "Noin 6 kuukauden välein uusi versio, kunkin tuki noin 13 kuukautta"
    },
    "fedora-silverblue": {
      "intro": "Fedora Silverblue on Fedoran muuttumaton työpöytäversio, joka ilmestyi vuonna 2018 nimellä Atomic Workstation ja nimettiin myöhemmin Silverblueksi; Kinoite on samaan teknologiapinoon perustuva KDE Plasma -versio. Sen juuritiedostojärjestelmä toimitetaan vain luku -tilassa olevana OSTree-kuvana ja järjestelmäpäivitykset ovat atomaarisia: uusi versio otetaan käyttöön erillisessä tilannekuvassa, se astuu voimaan uudelleenkäynnistyksen jälkeen ja ongelmatilanteessa voi palata edelliseen versioon. Arjen sovellukset asennetaan pääosin Flatpakilla, ja kehitystyökalut sijoitetaan Toolbox- tai Distrobox-kontteihin, jotta perusjärjestelmä pysyy puhtaana. Tämä malli sopii käyttäjille, jotka haluavat pitkään vakaana pysyvän järjestelmän, jota paketinhallintatoimet eivät voi rikkoa, mutta jotka haluavat silti melko uusia Fedora-ohjelmistoja, ja se sopii erityisen hyvin kehittäjille, ylläpitäjille ja perheenjäsenten työpöydille. Hinta on, että perinteinen rpm-asennus on rajoitettua ja rpm-ostree- sekä konttityönkulkuihin on totuttava; osa ajureista, syöttötavoista ja järjestelmätason työkaluista vaatii edelleen kerrostamista tai lisämäärityksiä. Silverblue ei ole muuttumaton siinä mielessä, ettei sitä voisi muuttaa — se tekee muutoksista nimenomaisia ja peruttavia.",
      "highlights": [
        "Vain luku -juuritiedostojärjestelmä ja atomaariset päivitykset",
        "Epäonnistunut päivitys voidaan palauttaa edelliseen käyttöönottoon",
        "Flatpak + Toolbox/Distrobox -sovellustyönkulku",
        "Kaksi muotoa: Silverblue (GNOME) ja Kinoite (KDE)"
      ],
      "pros": [
        "Järjestelmä on erittäin vakaa ja päivitysriski pieni",
        "Selkeä palautusmekanismi",
        "Sopii hyvin konttipohjaiseen kehitykseen ja arkityöpöytään"
      ],
      "cons": [
        "Perinteisten rpm-ohjelmistojen asentaminen ei ole suoraviivaista",
        "Järjestelmätason räätälöinti vaatii lisäopiskelua",
        "Joidenkin ajureiden ja syöttötapojen määrittäminen on monimutkaisempaa"
      ],
      "status_note": "Fedora Atomic -työpöytäversio, aktiivisesti ylläpidetty",
      "target_user": "Kehittäjät ja kokeneet käyttäjät, jotka haluavat vakaan ja palautettavan työpöydän",
      "release_cycle": "Seuraa Fedoran 6 kuukauden julkaisurytmiä, atomaariset kuvat päivittyvät jatkuvasti"
    },
    "centos-stream": {
      "intro": "CentOS Stream on jakelu, joka esiteltiin vuonna 2019 CentOSin strategisen uudelleensuuntauksen myötä ja sijoittuu Fedoran ja RHEL:n väliin: se saa jatkuvasti päivityksiä, jotka ovat matkalla seuraavaan RHEL:n alavertioon, joten sitä voi pitää RHEL:n ylävirran rullaavana haarana. Toisin kuin vanha CentOS, joka rakensi RHEL-binäärit uudelleen, Streamin versiot ovat yleensä vastaavaa RHEL:n alavertiota edellä, mikä sopii käyttäjille, jotka haluavat varmistaa yhteensopivuuden etukäteen, osallistua RHEL-ekosysteemin kehitykseen tai saada yritystason ohjelmistopinon ilmaiseksi. Se käyttää dnfiä, systemdiä ja SELinuxia, ja sen elinkaari on lähellä vastaavaa RHEL-pääversiota. CentOS Stream ei sovellu tuotantoympäristöihin, jotka vaativat täyttä binääriyhteneväisyyttä RHEL:n kanssa; sellaisiin tarpeisiin kannattaa valita Rocky Linux, AlmaLinux tai maksullinen RHEL-tilaus. Kehittäjille Stream on edullinen tapa seurata RHEL:n seuraavia muutoksia ja testata paketteja sekä konttikuvia, mutta rullaavuus tarkoittaa, että joskus voi tulla vastaan päivityksiä, jotka eivät ole vielä vakaita.",
      "highlights": [
        "Jatkuvaan toimitukseen perustuva haara Fedoran ja RHEL:n välissä",
        "Seuraavan RHEL-alaversion muutosten ennakkovarmistus",
        "Yritystason ohjelmistopino ja SELinux ilmaiseksi",
        "Elinkaari on suurin piirtein RHEL:n mukainen"
      ],
      "pros": [
        "RHEL:n ylävirran koodi ja ekosysteemi ilmaiseksi",
        "Sopii ennakkovarmistukseen ja kehitystestaukseen",
        "Vakaa ohjelmistopino ja kattavat yritystyökalut"
      ],
      "cons": [
        "Ei ole RHEL:n binäärirebuild",
        "Rullaavat päivitykset voivat tuoda vielä epävakaita muutoksia",
        "Ei sovellu tuotantoympäristöihin, jotka vaativat täydellistä yhdenmukaisuutta"
      ],
      "status_note": "RHEL:n ylävirran kehityshaara, CentOS Stream 10 on aktiivisesti ylläpidetty",
      "target_user": "Kehittäjät ja ekosysteemikumppanit, joiden on varmistettava RHEL-ekosysteemi etukäteen",
      "release_cycle": "Rullaava pääversion sisällä, Fedoran ja RHEL:n välissä"
    },
    "centos": {
      "intro": "CentOS Linux oli aikanaan tunnetuin RHEL:n ilmainen uudelleenrakennus: se ilmestyi vuonna 2004 ja tarjosi RHEL-lähdekoodin uudelleenkääntämiseen perustuvan, erittäin yhteensopivan binäärijakelun. Siinä ei ollut Red Hatin tavaramerkkejä eikä kaupallista tukea, mutta se peri RHEL:n vakaan ABI:n, SELinuxin ja kymmenen vuoden elinkaaren, minkä vuoksi se oli erittäin suosittu web-hotellipalveluissa, tutkimusklustereissa ja yritysten sisäisissä järjestelmissä. Loppuvuodesta 2020 Red Hat ilmoitti, että CentOS Linux 8 päättyy ennenaikaisesti vuoden 2021 lopussa ja projektin painopiste siirtyy CentOS Streamiin; CentOS 7:n ylläpito päättyi suunnitellusti 30. kesäkuuta 2024. Päätös synnytti suoraan uusia uudelleenrakennuksia, kuten Rocky Linuxin ja AlmaLinuxin. Nykyään CentOS Linuxia pitäisi nähdä vain historiallisissa ympäristöissä tai offline-arkistoissa; EOL-version käyttäminen tarkoittaa turvapäivitysten menettämistä, ja jos siirtymä on tarpeen, kannattaa arvioida Rocky, Alma, Oracle Linux tai suoraan RHEL-tilaus.",
      "highlights": [
        "Aikoinaan laajimmin käytetty RHEL:n ilmainen uudelleenrakennus",
        "Erittäin hyvä binääriyhteensopivuus RHEL:n kanssa",
        "Kymmenen vuoden elinkaari ja SELinux-yrityspino",
        "Vuoden 2021 käännekohta kohti CentOS Streamia"
      ],
      "pros": [
        "Historiallisesti vakaa ja hyvin yhteensopiva",
        "Yritysohjelmistot ja dokumentaatio olivat suoraan uudelleenkäytettävissä",
        "Ei tilauskustannuksia"
      ],
      "cons": [
        "Turvapäivitykset ovat päättyneet",
        "8-sarjan ennenaikainen EOL aiheutti siirtymähaasteita",
        "Vanhempien versioiden ohjelmistopino on vanhentunut"
      ],
      "status_note": "CentOS Linux 8 päättyi ennenaikaisesti 31.12.2021, ja projekti siirtyi CentOS Streamiin; CentOS 7 saavutti EOL:n 30.6.2024",
      "target_user": "Sopii vain historialliseen tutkimukseen, offline-arkistointiin tai siirtymän arviointiin",
      "release_cycle": "Päättynyt; oli alun perin RHEL:ää seuraava uudelleenrakennus"
    },
    "rocky": {
      "intro": "Rocky Linuxin käynnisti CentOSin toinen perustaja Gregory Kurtzer loppuvuodesta 2020, ja se julkaistiin vuonna 2021. Tavoitteena oli jatkaa ilmaisen, RHEL-yhteensopivan uudelleenrakennuksen tarjoamista sen jälkeen, kun CentOS Linux siirtyi Streamiin. Se rakentaa paketit kääntämällä RHEL-lähdekoodin uudelleen, säilyttää saman ABI:n, SELinux-käytännöt, dnf-työkaluketjun ja elinkaaren kuin RHEL ja sitoutuu yhteisösäätiön hallintoon, jotta yksikään toimittaja ei voi hallita sitä. Rocky tarjoaa muun muassa arkkitehtuurit x86_64, aarch64, ppc64le ja s390x, ja se sopii CentOSista siirtyville palvelimille, virtualisointisolmuihin, HPC:hen ja yritysten sisäisiin sovelluksiin. Sen asemointi on hyvin lähellä AlmaLinuxia: molemmat tavoittelevat RHEL-yhteensopivuutta, ja erot liittyvät enemmän hallintorakenteeseen, julkaisurytmiin, pilvikuvien saatavuuteen ja tukikumppaneihin. Rockylla ei ole virallista kaupallista tilausta, mutta ekosysteemissä on kolmannen osapuolen tukipalveluja. Jos tarvitset ohjelmistoa, joka löytyy vain RHEL:n sertifiointimatriisista, Rockyn yhteensopivuuslausumat kannattaa silti tarkistaa.",
      "highlights": [
        "RHEL:n kanssa binääriyhteensopiva yhteisön uudelleenrakennus",
        "Yhteisösäätiön hallinto estää yhden toimittajan vallan",
        "Noin 10 vuoden elinkaari ja yritystason työkaluketju",
        "Monen arkkitehtuurin palvelin- ja pilvikuvat"
      ],
      "pros": [
        "RHEL-yhteensopiva pino ilmaiseksi",
        "CentOSista siirtyminen on edullista",
        "Läpinäkyvä hallintorakenne"
      ],
      "cons": [
        "Ekosysteemin sertifioinnit eivät ole yhtä kattavia kuin RHEL:llä",
        "Yhteisön tuki nojaa foorumeihin ja kolmansiin osapuoliin",
        "Ohjelmistoversiot seuraavat RHEL:ää ja ovat maltillisia"
      ],
      "status_note": "Aktiivisesti ylläpidetty RHEL-yhteensopiva uudelleenrakennus, jota yhteisösäätiö hallinnoi",
      "target_user": "Yritykset ja voittoa tavoittelemattomat organisaatiot, jotka tarvitsevat ilmaisia RHEL-yhteensopivia palvelimia",
      "release_cycle": "Seuraa RHEL:n pääversioita ja tarjoaa noin 10 vuoden elinkaaren"
    },
    "alma": {
      "intro": "AlmaLinuxin esitteli CloudLinux-tiimi vuonna 2021 vaihtoehtoisena RHEL-yhteensopivana polkuna CentOS Linuxin päättymisen jälkeen. Se tarjoaa ilmaisen yritystason jakelun kääntämällä RHEL-lähdekoodin uudelleen, pitää dnfin, SELinuxin, systemdin ja RHEL:n elinkaaren linjassa ja on siirtynyt vähitellen AlmaLinux OS Foundationin hallintaan. Alman erityispiirteitä ovat melko aktiivinen pilvi- ja konttikuvien julkaisu, ystävällinen tuki kolmannen osapuolen varastoille kuten EPELille sekä siirtymiseen tarkoitetut työkalut. Tekninen asemointi on hyvin lähellä Rocky Linuxia, joten valinta riippuu yleensä organisaation mieltymyksistä hallintoon, tukikumppaneihin, pilvialustan esiasennettuihin kuviin ja julkaisurytmiin. AlmaLinux sopii web-palvelimille, tietokannoille, virtualisointiin, tutkimukseen ja yritysten sisäisiin järjestelmiin, ja sitä käytetään usein RHEL:n kehitys- ja testiympäristönä. Kuten kaikki uudelleenrakennukset, se ei sisällä Red Hatin virallista tukea eikä tavaramerkkilisenssiä; sertifioitujen ohjelmistojen kohdalla on varmistettava, hyväksyykö toimittaja AlmaLinuxin.",
      "highlights": [
        "Binääriyhteensopiva RHEL:n kanssa ja ilmainen",
        "Aktiivinen pilvi- ja konttikuvien julkaisu",
        "Säätiön hallinto ja avoin rakennusprosessi",
        "Siirtymätyökalut ja kattava dokumentaatio"
      ],
      "pros": [
        "Hyvä RHEL-yhteensopivuus ja helppo siirtymä",
        "Vahva tuki pilvi- ja konttikäyttöön",
        "Ilmainen ja pitkä elinkaari"
      ],
      "cons": [
        "Sertifiointiekosysteemi on yhä RHEL:ää suppeampi",
        "Selvästi samankaltainen Rockyn kanssa",
        "Yritystuki vaatii erillisen toimittajan"
      ],
      "status_note": "Aktiivisesti ylläpidetty, AlmaLinux OS Foundationin hallinnoima",
      "target_user": "Pilvi- ja yrityskäyttäjät, jotka etsivät ilmaista RHEL-yhteensopivaa pinoa",
      "release_cycle": "Seuraa RHEL:n pääversioita ja tarjoaa noin 10 vuoden elinkaaren"
    },
    "oracle-linux": {
      "intro": "Oracle Linux on Oraclen vuodesta 2006 tarjoama yritystason Linux, joka rakennetaan RHEL-lähdekoodista uudelleen ja joka on syvästi integroitu Oraclen tietokantoihin, middlewareen ja pilvi-infrastruktuuriin. Siinä on kaksi ydintä: RHEL-yhteensopiva Red Hat Compatible Kernel sekä Oracle-kuormituksille optimoitu Unbreakable Enterprise Kernel (UEK). Oracle Linuxin voi ladata ja sitä voi käyttää ilmaiseksi, ja turvapäivitykset sekä erratat tarjotaan maksutta, kun taas kaupallinen tuki ostetaan Oracle-tilauksella. Se sopii Oracle Databasen, Oracle Cloud Infrastructure -instanssien ja RHEL-yhteensopivuutta vaativien yrityssovellusten ajamiseen; UEK tarjoaa lisäoptimoinnit joissakin I/O-, virtualisointi- ja tietokantaskenaarioissa. Huomattavaa on, että ilmaisen tuen laajuus eroaa RHEL-tilauksesta ja monimutkaiset ongelmat vaativat yhä kaupallista tukea; jakelu on myös melko tiukasti sidoksissa Oracle-ekosysteemiin, joten muut kuin Oracle-käyttäjät saattavat suosia Rockyä tai AlmaLinuxia.",
      "highlights": [
        "Valittavana RHEL-yhteensopiva ydin tai UEK",
        "Ilmainen lataus ja turvapäivitykset",
        "Syvä integraatio Oracle Databasen ja OCI:n kanssa",
        "Yritystason elinkaari ja tukitilaukset"
      ],
      "pros": [
        "RHEL-yhteensopiva pino ilmaiseksi",
        "UEK on optimoitu Oracle-kuormituksille",
        "Hyvä integraatio Oraclen pilveen ja tietokantoihin"
      ],
      "cons": [
        "Melko tiukasti Oracle-ekosysteemiin sidottu",
        "Ilmaisen tuen laajuus on rajallinen",
        "Yhteisö on vähemmän aktiivinen kuin Rockyllä tai Almalla"
      ],
      "status_note": "Aktiivisesti ylläpidetty, tarjolla sekä ilmainen että maksullinen tuki",
      "target_user": "Yritykset, jotka ajavat Oracle Database- tai OCI-kuormituksia",
      "release_cycle": "Seuraa RHEL:n pääversioita ja tarjoaa pitkäaikaistuen"
    },
    "amazon-linux": {
      "intro": "Amazon Linux on AWS:n pilviympäristöihin optimoima Linux-jakelu, joka julkaistiin ensimmäisen kerran vuonna 2011 ja on nyt kolmannessa sukupolvessaan: Amazon Linux AMI, Amazon Linux 2 ja Amazon Linux 2023. Se perustuu Fedora/RHEL-ekosysteemin rpm- ja dnf-työkaluketjuun mutta lisää ytimen, käynnistysnopeuden, turva-agenttien ja pilvityökalujen integraation AWS-palveluihin, kuten EC2:een, Lambdaan, ECS:ään ja EKS:ään. Amazon Linux 2023 ottaa käyttöön selkeämmän versiopolitiikan: neljännesvuosittaiset päivitykset, viiden vuoden tuen ja varastojen lukituksen, joka estää tahattoman pääversiosiirtymän. Se sopii verkkopalveluiden, konttisolmujen ja eräajojen ajamiseen AWS:ssä, ja sitä käytetään usein CI-kuvien ja automaattisen skaalauksen perustana. Huomattavaa on, että Amazon Linux on suunnattu AWS-ympäristöön, joten osa integraatiotyökaluista ja tukikanavista lakkaa toimimasta AWS:n ulkopuolella; sen ohjelmistolähteet eivät ole täysin RHEL-yhteensopivia, eikä sitä pidä pitää yleiskäyttöisenä RHEL-uudelleenrakennuksena.",
      "highlights": [
        "AWS-pilviympäristöön optimoitu ydin ja käynnistysprosessi",
        "Neljännesvuosittaiset päivitykset ja määritelty viiden vuoden tukijakso",
        "Valmiiksi integroidut AWS CLI, SSM ja pilviagentit",
        "x86_64- ja aarch64-arkkitehtuurit"
      ],
      "pros": [
        "Toimii AWS:ssä suoraan käyttöönotettuna",
        "Ennustettava päivityspolitiikka",
        "Tiivis integraatio AWS-palveluihin"
      ],
      "cons": [
        "Merkitys vähenee AWS:n ulkopuolella",
        "Ohjelmistolähteet eivät ole täysin RHEL-yhteensopivia",
        "Työpöytä- ja yleiskäyttö on rajallisesti tuettu"
      ],
      "status_note": "Amazon Linux 2023 on tuettu vuoteen 2029, ja AWS jatkaa päivitysten tarjoamista",
      "target_user": "Pilvi-insinöörit, jotka ottavat palveluita käyttöön AWS:ssä",
      "release_cycle": "Amazon Linux 2023 tarjoaa ennustettavan pitkäaikaistuen ja neljännesvuosittaiset päivitykset"
    },
    "nobara": {
      "intro": "Nobara on Fedoran pelaamiseen ja sisällöntuotantoon suuntautuva johdannainen, jonka käynnisti vuonna 2022 Thomas Crider (GloriousEggroll), Proton-GEn ylläpitäjä. Fedoran päälle se asentaa valmiiksi monia peliaiheisia komponentteja — Steamin, Protonin, Winen, MangoHudin, Gamescopen, OBS Studion, multimedia-koodekit ja NVIDIA-ajurityökalut — ja ottaa oletuksena käyttöön joitakin korjauksia, jotka Fedora jättää pois käytäntösyistä tai vakauden vuoksi. Nobarasta on GNOME- ja KDE Plasma -versiot, ja asennuksen jälkeen pelit ja suoratoistotyönkulut toimivat pitkälti suoraan, mikä säästää paljon manuaalista säätöä. Se sopii Linux-pelaajille ja sisällöntuottajille, jotka eivät halua säätää ajureita, Protonia ja OBS:ää, sekä käyttäjille, jotka pitävät Fedoraa pääjärjestelmänään mutta haluavat vahvemman valmiin kokemuksen. Huomattavaa on, että Nobara on yksittäisen henkilön vetämä projekti, sen julkaisurytmi voi jäädä Fedorasta jälkeen ja osa mukautetuista paketeista eroaa virallisista varastoista; lue tiedotteet ja varmuuskopioi tiedot ennen pääversion päivitystä.",
      "highlights": [
        "Pelikomponentit kuten Proton-GE, Wine ja MangoHud valmiiksi asennettuina",
        "OBS Studio ja multimediayön työkalut integroitu",
        "NVIDIA-ajurit ja koodekit valmiiksi määritettyinä",
        "Sekä GNOME- että KDE Plasma -versiot"
      ],
      "pros": [
        "Erittäin hyvä valmis kokemus pelaamiseen ja suoratoistoon",
        "Säästää paljon Fedoran asennuksen jälkeistä säätöä",
        "Seuraa Proton-ekosysteemiä tiiviisti"
      ],
      "cons": [
        "Yhden henkilön vetämä, pitkän aikavälin jatkuvuus epävarmaa",
        "Versiopäivitykset voivat jäädä Fedorasta jälkeen",
        "Mukautetut paketit lisäävät päivityksen monimutkaisuutta"
      ],
      "status_note": "Aktiivisesti ylläpidetty Fedora-johdannainen pelaamiseen ja sisällöntuotantoon",
      "target_user": "Pelaajat, jotka haluavat pelata ja tallentaa Fedoralla ilman säätämistä",
      "release_cycle": "Seuraa Fedoran julkaisuja ja päivittyy yleensä muutaman kuukauden kuluessa uudesta Fedorasta"
    },
    "bazzite": {
      "intro": "Bazzite on Universal Blue -yhteisön Fedora Atomicin päälle rakentama muuttumaton järjestelmä, joka ilmestyi vuonna 2023. Tavoitteena on tarjota PC-käsikonsoleille, olohuoneen pelikoneille ja tavallisille työpöydille lähes SteamOS:n veroinen pelikokemus säilyttäen Fedoran työpöytäominaisuudet. Se asentaa valmiiksi muun muassa Steamin, Protonin, Gamescopen, MangoHudin, Lutriksen ja EmuDeckin, tarjoaa KDE Plasma- ja GNOME-versiot sekä kuvat, jotka on suunnattu esimerkiksi Steam Deckille ja ROG Allylle. Bazzite käyttää rpm-ostreen atomaarisia päivityksiä, joten järjestelmän palauttaminen on helppoa, sovellukset asennetaan pääosin Flatpakilla ja ujust-komentosarja kokoaa yhteen monia yleisiä ylläpito- ja viritystoimenpiteitä. Se sopii pelaajille, jotka haluavat vähän ylläpitoa vaativan konsolimaisen kokemuksen sitoutumatta Valven laitteistoon, sekä Fedora-käyttäjille, jotka haluavat sekä työpöydän että pelaamisen. Huomattavaa on, että kolmannen osapuolen laitteistoyhteensopivuus on varmistettava laitekohtaisesti, osa huijauksenestopeleistä ei toimi ja yhteisökuvien päivitysrytmi ei ole täysin synkronissa virallisen Fedoran kanssa.",
      "highlights": [
        "Fedora Atomic -muuttumaton perusta ja atomaariset päivitykset",
        "Kuvat käsikonsoleille, olohuoneeseen ja työpöydälle",
        "Steam, Proton ja EmuDeck valmiiksi määritettyinä",
        "ujust-komentosarja yksinkertaistaa ylläpitoa"
      ],
      "pros": [
        "Laajempi laitteistotuki kuin SteamOS:ssä",
        "Järjestelmä on palautettavissa ja ylläpito on vähäistä",
        "Kattava pelityökaluketju"
      ],
      "cons": [
        "Kuvat ovat melko suuria",
        "Epävirallinen laitteisto vaatii yhä varmistusta",
        "Huijauksenestopelien tuki on rajallista"
      ],
      "status_note": "Aktiivisesti ylläpidetty Fedora Atomic -pohjainen peli- ja käsikonsolijärjestelmä",
      "target_user": "Pelaajat, jotka haluavat SteamOS-tyylisen kokemuksen eri PC-laitteistoilla",
      "release_cycle": "Seuraa Fedora Atomic -julkaisuja, ja kuvat päivittyvät jatkuvasti"
    },
    "openeuler": {
      "intro": "openEuler on palvelinkäyttöjärjestelmäyhteisö, jonka Huawei käynnisti vuonna 2019 ja joka lahjoitettiin myöhemmin OpenAtom-säätiölle; se on asemoitu yritystason yleiskäyttöiseksi Linux-alustaksi. Se hyödyntää EulerOSiin kertynyttä insinöörityötä ja käyttää rpm/dnf-työkaluketjua, tukee muun muassa arkkitehtuureja x86_64, aarch64, riscv64 ja loongarch64, ja sitä käytetään laajalti kotimaisissa laitteistoympäristöissä, kuten Kunpengissa ja Ascendissa. openEuler julkaisee LTS-version suunnilleen kahden vuoden välein, ja yhteisö tarjoaa pitkäaikaisen ylläpidon ytimelle, virtualisoinnille, konteille, tietokannoille ja cloud native -komponenteille; siitä on johdettu myös Kylinin ja UnionTechin kaltaisia kaupallisia jakeluja. Se sopii yrityksille ja laitoksille, jotka tarvitsevat kotimaista sovitusta, ARM-palvelimia, pilvi-infrastruktuuria tai pitkäaikaistukea. RHEL-perheeseen verrattuna openEulerilla on omat ohjelmistolähteensä ja versionsa rytmi, joten RHEL-sertifiointien johtopäätöksiä ei voi soveltaa suoraan; yhteisön dokumentaatio on pääosin kiinaksi, mikä on käyttäjäystävällistä Kiinassa. Ennen valintaa kannattaa varmistaa, ovatko kohdelaitteisto, tietokannat ja middleware openEulerin yhteensopivuusluettelossa.",
      "highlights": [
        "Tukee x86-, ARM-, RISC-V- ja LoongArch-arkkitehtuureja",
        "LTS kahden vuoden välein ja yritystason pitkäaikaisylläpito",
        "Laaja sovitus kotimaiseen laitteisto- ja pilviekosysteemiin",
        "OpenAtom-säätiön hallinnoima"
      ],
      "pros": [
        "Hyvä sovitus kotimaiselle laitteistolle ja ARM-palvelimille",
        "Kiinankielinen dokumentaatio ja yhteisötuki",
        "Johtava monen arkkitehtuurin tuki"
      ],
      "cons": [
        "Kansainvälinen ekosysteemi ja sertifioinnit ovat vielä rakenteilla",
        "RHEL-sertifioinnit eivät siirry sellaisinaan",
        "Osa kaupallisista ominaisuuksista on alavirran toimittajien varassa"
      ],
      "status_note": "Aktiivisesti ylläpidetty palvelinkäyttöjärjestelmä, jonka OpenAtom-säätiö on hautonut",
      "target_user": "Yritykset ja laitokset, jotka tarvitsevat kotimaisen moniarkkitehtuurisen palvelinalustan",
      "release_cycle": "LTS-versio noin kahden vuoden välein, ja yhteisö tarjoaa jatkuvia päivityksiä"
    },
    "scientific-linux": {
      "intro": "Scientific Linux oli RHEL:n uudelleenrakennus, jota Fermilab, CERN ja muut tutkimuslaitokset ylläpitivät yhdessä vuodesta 2004 lähtien. Tavoitteena oli tarjota hiukkasfysiikalle, laboratorioklustereille ja tieteelliselle laskennalle vakaa, ennustettava ja ilmainen alusta. Siitä poistettiin Red Hatin tavaramerkit, siihen lisättiin pieni määrä tutkimuskäyttöön tarkoitettuja ajureita ja työkaluja, ja se pysyi erittäin yhteensopivana RHEL:n kanssa; CentOSin ohella se oli aikanaan monien laboratorioiden ja yliopistojen konesalien oletusjärjestelmä. CentOS-ekosysteemin muuttuessa ja ylläpitokustannusten noustessa Fermilab ilmoitti, että kehitys lopetetaan version 7.9 jälkeen ja tuki päättyi 30. kesäkuuta 2024, ja suositteli käyttäjiä siirtymään AlmaLinuxiin, Rocky Linuxiin tai muulle tuetulle alustalle. Nykyään Scientific Linux sopii historialliseksi tapausesimerkiksi ja offline-ympäristöihin, eikä sitä pitäisi enää käyttää verkkoyhteydessä olevissa tuotantojärjestelmissä. Se ilmensi tutkimuslaitosten tarvetta pitkäaikaisesti toistettaviin ympäristöihin ja muistuttaa myös siitä, että yhteisöjakelujen kestävyyttä on arvioitava.",
      "highlights": [
        "Fermilabin ja CERNin kaltaisten tutkimuslaitosten yhdessä ylläpitämä",
        "RHEL:n kanssa erittäin yhteensopiva tieteellisen laskennan alusta",
        "Aikanaan laajalti laboratorioissa ja yliopistoklustereissa käytetty",
        "Virallinen tuki päättyi vuonna 2024"
      ],
      "pros": [
        "Historiallisesti vakaa ja tutkimusklustereihin sopiva",
        "Yhteensopiva RHEL-ohjelmistopinon kanssa",
        "Ilmainen ja ennustettava"
      ],
      "cons": [
        "Turvapäivitykset ovat päättyneet",
        "Siirtymäpolut ovat rajallisia",
        "Paketit ovat vanhentuneita"
      ],
      "status_note": "Fermilab päätti tuen 30.6.2024 ja suosittaa siirtymistä AlmaLinuxiin, Rocky Linuxiin ja muihin",
      "target_user": "Sopii vain historialliseen tutkimukseen, arkistointiin tai siirtymän arviointiin",
      "release_cycle": "Päättynyt; oli alun perin tutkimuskäyttöön suunnattu RHEL:n uudelleenrakennus"
    },
    "debian": {
      "intro": "Debian GNU/Linuxin perusti Ian Murdock vuonna 1993, ja se on yksi varhaisimmista ja täydellisimmistä yhteisöjakeluista. Sitä ylläpitävät vapaaehtoiset ympäri maailmaa Debianin yhteiskuntasopimuksen ja Debianin vapaan ohjelmiston ohjeiden (DFSG) mukaisesti, ja se tunnetaan vakaudestaan, ohjelmistovarastonsa koosta ja arkkitehtuurien laajasta tuesta. Debianin julkaisuprosessi on huolellinen: testiversiosta tulee vakaa vasta pitkän jäädytyksen ja virheiden korjauksen jälkeen, joten ohjelmistoversiot eivät yleensä ole uusia mutta sopivat erittäin hyvin palvelimille, tutkimukseen ja pitkään käynnissä pysyviin järjestelmiin. apt/dpkg muodostavat sen paketinhallinnan perustan, ja lähes kaikki Debian-perheen jakelut perivät tai hyödyntävät näitä työkaluja. Debian tarjoaa oletuksena GNOMEn ja myös KDE-, Xfce- ja LXQt-asennusvaihtoehdot; main-varasto sisältää vain vapaata ohjelmistoa, ja non-free sekä firmware on otettava erikseen käyttöön. Se sopii käyttäjille, jotka hyväksyvät vakaus ensin -periaatteen, arvostavat yhteisön hallintoa ja ohjelmistovapautta ja haluavat erittäin pitkän elinkaaren. Ubuntuun verrattuna Debian on puhtaampi, hitaampi ja vähemmän kaupallisen vaikutuksen alainen.",
      "highlights": [
        "Maailmanlaajuisten vapaaehtoisten hallinnoima yhteisöjakelu",
        "Valtava ohjelmistovarasto ja laaja arkkitehtuurituki",
        "Vakaiden versioiden pitkä elinkaari, sopii palvelimille",
        "DFSG:n vapaan ohjelmiston ohjeet ovat vaikuttaneet laajalti"
      ],
      "pros": [
        "Erittäin vakaa ja luotettava päivityspolku",
        "Laaja paketti- ja arkkitehtuurivalikoima",
        "Läpinäkyvä yhteisöhallinto ilman toimittajalukkoa"
      ],
      "cons": [
        "Vakaiden versioiden ohjelmistot ovat vanhempia",
        "Asennusohjelma ja työpöydän määritys ovat perinteisiä",
        "Firmware ja suljetut ajurit on otettava erikseen käyttöön"
      ],
      "status_note": "Debian 13 (Trixie) on nykyinen vakaa versio, ja LTS-tuki jatkuu 2030-luvulle",
      "target_user": "Palvelin- ja työpöytäkäyttäjät, jotka arvostavat vakautta, vapautta ja yhteisöhallintoa",
      "release_cycle": "Vakaa versio noin 2 vuoden välein, tuki noin 5 vuotta (LTS mukaan lukien)"
    },
    "mx-linux": {
      "intro": "MX Linux on vuonna 2014 MEPIS- ja antiX-yhteisöjen yhteistyönä syntynyt Debian stable -johdannainen, joka on pitkään ollut DistroWatchin kiinnostavuustilaston kärjessä. Se käyttää oletuksena Xfceä ja tarjoaa myös KDE Plasma- ja Fluxbox-versiot; järjestelmä on kevyt ja käynnistyy nopeasti, ja MX Tools tarjoaa joukon graafisia ylläpitotyökaluja: tilannekuvat, käynnistyksen korjauksen, ytimen asennuksen, paketinhallinnan, ajurit ja käyttäjäasetukset voi hoitaa muutamalla napsautuksella. MX antaa käyttäjän myös valita systemd:n ja sysvinitin välillä käynnistyksen yhteydessä, joten se palvelee sekä nykyaikaista ohjelmistoa että perinteistä palvelunhallintaa. Koska se perustuu Debian stable -jakeluun, ohjelmistoversiot ovat melko varovaisia, mutta vakaus ja laitteistoyhteensopivuus ovat hyvät, joten se sopii vanhoille tietokoneille, toimistotyöpöydälle, kotikäyttäjille ja Windowsista siirtyville. Huomattavaa on, että MX:n räätälöidyt työkalut ja Debianin natiivit käytännöt elävät rinnakkain, joten apua pyytäessä on kerrottava, kumpaa mekanismia käyttää; myös oletusteema ja vuorovaikutus ovat melko perinteisiä, eikä kyseessä ole tuoreinta visuaalista tyyliä tavoitteleva järjestelmä.",
      "highlights": [
        "MX Tools tarjoaa runsaasti graafisia ylläpitotyökaluja",
        "Perustuu Debian stableen: vakaa ja hyvin yhteensopiva",
        "Voit valita systemd:n ja sysvinitin välillä",
        "Kevyt Xfce-työpöytä sopii vanhalle laitteistolle"
      ],
      "pros": [
        "Toimii heti asennuksen jälkeen ja on aloittelijaystävällinen",
        "Hyvä kokemus vanhoilla ja vähätehoisilla laitteilla",
        "Tilannekuva- ja korjaustyökalut ovat aidosti käytännöllisiä"
      ],
      "cons": [
        "Ohjelmistoversiot ovat melko vanhoja",
        "Oletusulkoasu on melko perinteinen",
        "Räätälöidyt työkalut lisäävät opittavaa"
      ],
      "status_note": "Aktiivisesti ylläpidetty Debian stable -pohjainen työpöytäjakelu",
      "target_user": "Tavalliset käyttäjät, jotka haluavat vakaan, kevyen ja helposti ylläpidettävän työpöydän",
      "release_cycle": "Seuraa Debian stablea ja julkaisee säännöllisiä pisteversioita"
    },
    "antix": {
      "intro": "antiX on vuonna 2007 MEPIS-yhteisöstä eriytynyt kevyt Debian-johdannainen, jonka ydinajatus on sujuva toiminta myös vanhalla laitteistolla. Se käyttää oletuksena IceWM:ää ja tarjoaa myös erittäin kevyet ikkunanhallinnat Fluxbox ja JWM; se ei ole riippuvainen systemd:stä vaan käyttää oletuksena sysvinitiä ja valinnaisesti runitia. antiX perustuu Debian stableen ja käyttää apt/dpkg:tä, mutta esiasennettu ohjelmisto on karsittu ja muistinkäyttö vähäistä, joten se sopii vanhoille 32-bittisille koneille, minikannettaville, kierrätetyille tietokoneille ja opetusympäristöihin. Siinä on live-tila, pysyvä tallennus ja remaster-työkalut, joten sitä voi ajaa suoraan USB-tikulta. antiX sopii käyttäjille, jotka hyväksyvät pelkistetymmän käyttöliittymän ja tarvitsevat pientä resurssien kulutusta ja ennustettavaa vakautta; jos haluat nykyaikaisen työpöydän ja täyden sovellusvalikoiman, MX Linux tai Linux Mint sopivat paremmin. Huomattavaa on, että antiXin ohjelmistoversiot ovat vanhempia ja osa nykyaikaisista verkko- ja videosovelluksista on silti raskaita vanhalla laitteistolla.",
      "highlights": [
        "Erittäin pieni resurssienkulutus, tukee vanhoja 32-bittisiä koneita",
        "Kevyet IceWM/Fluxbox/JWM-työpöydät",
        "Oletuksena sysvinit, valinnaisesti runit",
        "Live-pysyväisyys ja remaster-työkalut"
      ],
      "pros": [
        "Herättää vanhan laitteiston hyvin henkiin",
        "Karsittu järjestelmä, joka käynnistyy nopeasti",
        "Perustuu Debian stableen, luotettava"
      ],
      "cons": [
        "Pelkistetty käyttöliittymä ja opettelua",
        "Nykyaikaiset raskaat sovellukset toimivat rajoitetusti",
        "Vanhemmat ohjelmistoversiot"
      ],
      "status_note": "Aktiivisesti ylläpidetty kevyt Debian-johdannainen",
      "target_user": "Vanhojen tietokoneiden käyttäjät, kevyen työpöydän harrastajat ja opetusympäristöt",
      "release_cycle": "Seuraa Debian stablea; pisteversioita julkaistaan epäsäännöllisesti"
    },
    "devuan": {
      "intro": "Devuan on vuonna 2014 joukon Debian-kehittäjiä ja järjestelmänvalvojia käynnistämä Debian-haara, jonka ensimmäinen vakaa versio julkaistiin vuonna 2017. Sen tavoite on tarjota Debian-yhteensopiva järjestelmä, joka ei pakota systemd:tä. Se säilyttää apt/dpkg:n, Debianin pakettivarastorakenteen ja yhteiskuntasopimuksen, mutta vaihtaa oletukseksi sysvinitin ja tukee myös vaihtoehtoisia init-järjestelmiä kuten openrc:tä; monet systemd:stä riippuvat paketit on paketoitava uudelleen tai korvattava vaihtoehdoilla. Devuan sopii käyttäjille, joilla on selkeitä teknisiä tai aatteellisia vastalauseita systemd:tä kohtaan mutta jotka haluavat pysyä Debianin ekosysteemissä, sekä sulautettuihin järjestelmiin, kontteihin ja perinteiseen palvelunhallintaan. Artixiin verrattuna Devuan pysyy lähempänä Debianin julkaisurytmiä ja paketinhallintatapoja, mutta ohjelmistoversiot ovat samoin melko varovaisia. Huomattavaa on, että Devuanin paketit eivät ole täysin binääriyhteensopivia Debianin kanssa, joten kolmannen osapuolen .deb-pakettien asentaminen tai Ubuntu PPA -lähteiden käyttö voi tuottaa riippuvuusongelmia; myös työpöytäympäristöt ja laitteistotuki laahaavat hieman jäljessä.",
      "highlights": [
        "Debianin systemd-vapaa haara",
        "Oletuksena sysvinit, valinnaisesti openrc",
        "Säilyttää apt/dpkg:n ja Debianin ekosysteemin",
        "Yhteisöhallinto, jossa korostuu init-vapaus"
      ],
      "pros": [
        "Debian-käyttäjille siirtyminen on helppoa",
        "Init-valinta vastaa perinteisiä Unix-tapoja",
        "Vakaa ja ennustettava"
      ],
      "cons": [
        "Paketit eivät ole täysin yhteensopivia Debianin kanssa",
        "Osa nykyaikaisesta ohjelmistosta on riippuvainen systemd:stä",
        "Julkaisutahti on melko hidas"
      ],
      "status_note": "Aktiivisesti ylläpidetty Debianin systemd-vapaa haara",
      "target_user": "Käyttäjät, jotka torjuvat systemd:n mutta haluavat pysyä Debianin ekosysteemissä",
      "release_cycle": "Seuraa Debianin vakaata versiota hieman jäljessä"
    },
    "kali": {
      "intro": "Kali Linuxin julkaisi OffSec (aiemmin Offensive Security) vuonna 2013 BackTrackin seuraajaksi, ja se on yksi tunnetuimmista tunkeutumistestauksen ja tietoturva-auditoinnin jakeluista. Se perustuu Debian testingiin ja rullaaviin päivityksiin, ja siinä on esiasennettuna satoja tietoturvatyökaluja, jotka kattavat tiedonkeruun, haavoittuvuusskannauksen, verkkotestauksen, langattomat hyökkäykset, käänteismallinnuksen, forensiikan ja raportoinnin. Kali tarjoaa Xfce-, GNOME- ja KDE-työpöytäversiot sekä WSL-, ARM-, kontti- ja pilvikuvat, joten valtuutettuja testejä voi tehdä eri ympäristöissä. Se korostaa olevansa alusta eikä arkinen työpöytä: oletusasetukset, ydin ja työkaluketju palvelevat tietoturvatestausta, eikä tavallinen toimistokäyttö ole sen optimointikohde. Kali sopii tietoturva-alan opiskelijoille, tunkeutumistestaajille, CTF-pelaajille ja tietoturvatiimeille, jotka tarvitsevat mukaan otettavan työkalukokoelman. On korostettava, että kaikkia työkaluja saa käyttää vain kohteisiin, joihin sinulla on selkeä valtuutus. Kalin kaupallinen puoli on pääasiassa koulutusta, sertifiointeja ja tukipalveluita; itse jakelu on ladattavissa ilmaiseksi.",
      "highlights": [
        "Paljon esiasennettuja tietoturvatestaus- ja forensiikkatyökaluja",
        "Perustuu Debian testingiin ja rullaaviin päivityksiin",
        "WSL-, ARM-, kontti- ja pilvikuvat saatavilla",
        "OffSecin koulutus- ja sertifiointiekosysteemi"
      ],
      "pros": [
        "Kattava tietoturvatyökalujen valikoima",
        "Runsaasti dokumentaatiota ja koulutusmateriaalia",
        "Useat alustamuodot helpottavat mukana kuljettamista"
      ],
      "cons": [
        "Ei sovellu tavalliseksi arkityöpöydäksi",
        "Valtava työkalumäärä vaatii omaa harkintaa",
        "Rullaavat päivitykset voivat aiheuttaa yhteensopivuusongelmia"
      ],
      "status_note": "Aktiivisesti ylläpidetty OffSecin tukema tietoturvatestausalusta",
      "target_user": "Valtuutetut tietoturvatestaajat ja kyberturvallisuuden opiskelijat",
      "release_cycle": "Jatkuvasti rullaava Debian testing -pohjalla, kuvapäivitykset neljännesvuosittain"
    },
    "parrot": {
      "intro": "Parrot OS (Parrot Security OS) on vuonna 2013 ilmestynyt Debian testing -johdannainen. Se kuuluu Kalin kanssa samaan tietoturvatestauksen kenttään mutta korostaa tietoturvan, yksityisyyden ja arkikäytettävyyden välistä tasapainoa. Siinä on esiasennettuna tunkeutumistestauksen, digitaalisen forensiikan, käänteismallinnuksen ja anonyymin viestinnän työkaluja, ja lisäksi melko täydellinen työpöytäympäristö ja kehitystyökalut; oletustyöpöytänä oli pitkään MATE, ja tarjolla on myös KDE Plasma- ja Xfce-versiot. Parrotin Home-versio on tarkoitettu arkikäyttöön, kun taas Security-versio painottuu testaustyönkulkuihin; järjestelmään sisältyvät Tor, AnonSurf, palomuuri ja salausohjelmat, mikä sopii yksityisyydestä huolehtiville. Se sopii tietoturva-alan opiskelijoille, tunkeutumistestaajille, yksityisyyden puolustajille ja niille, jotka haluavat yhden koneen sekä kehitykseen että tietoturvakokeiluihin. Huomattavaa on, että myös Parrot rullaa, joten työkalut ja työpöytäkomponentit voivat muuttua Debian testingin mukana; tietoturvatyökaluja on käytettävä lain ja valtuutuksen rajoissa. Parrotin kaupallinen tuotto tulee pääasiassa tuesta, koulutuksesta ja yrityspalveluista.",
      "highlights": [
        "Yhdistää tietoturvatestauksen ja yksityisyystyökalut",
        "Perustuu Debian testingiin ja rullaaviin päivityksiin",
        "Home- ja Security-versiot eri käyttötarkoituksiin",
        "Sisäänrakennetut Tor, AnonSurf ja salausohjelmat"
      ],
      "pros": [
        "Palvelee sekä tietoturvakokeiluja että arkikäyttöä",
        "Yksityisyystyökalut on integroitu tiiviisti",
        "Työpöytäkokemus on täydellisempi kuin osassa tietoturvajakeluista"
      ],
      "cons": [
        "Rullaavat päivitykset vaativat aktiivista ylläpitoa",
        "Myös tietoturvatyökalut edellyttävät valtuutusta",
        "Yritystukiekosysteemi on Kalia pienempi"
      ],
      "status_note": "Aktiivisesti ylläpidetty Debian-johdannainen, jossa yhdistyvät tietoturva ja yksityisyys",
      "target_user": "Tietoturva-alan ammattilaiset, jotka arvostavat yksityisyyttä ja tarvitsevat tietoturvatyökaluja",
      "release_cycle": "Jatkuvasti rullaava Debian testing -pohjalla"
    },
    "deepin": {
      "intro": "deepin (Deepin-käyttöjärjestelmä) juontaa juurensa vuoden 2004 Hiweed Linuxiin, ja vuoden 2010 jälkeen siitä on kehittynyt Deepin Desktop Environment (DDE) -työpöytäympäristöön keskittyvä työpöytäjakelu. Se perustuu Debianiin mutta tarjoaa oman työpöytäkuorensa, Ohjauskeskuksen, Deepin-kaupan, kuvakaappaus- ja näytöntallennustyökalut, tiedostonhallinnan ja muita komponentteja; ulkoasu ja vuorovaikutus ovat kiinalaisista jakeluista melko kypsiä. deepin on panostanut runsaasti kiinalaisten syöttömenetelmien, fonttien, toimisto- ja mediakäytön lokalisointiin, joten se sopii kiinankielisille käyttäjille, jotka haluavat valmiin kokemuksen ja nykyaikaisen käyttöliittymän eivätkä tunne Linuxin sisäistä rakennetta. Se tukee muun muassa arkkitehtuureja x86_64, ARM64 ja LoongArch, ja tarjolla on sekä yhteisöversio että kaupallisen ekosysteemin tuotteita. Huomattavaa on, että deepinin pakettivarastoissa on joitakin suljetun lähdekoodin komponentteja eikä se ole täysin yhteensopiva Debianin virallisten varastojen kanssa; myös sen julkaisurytmistä ja ylävirran synkronointistrategiasta on käyty keskustelua. Jos tarvitset yritystukea ja pidemmän elinkaaren, kannattaa arvioida kaupallisia versioita kuten UnionTech UOS.",
      "highlights": [
        "Oma DDE-työpöytä, jossa ulkoasu ja vuorovaikutus ovat viimeisteltyjä",
        "Hyvät kiinalaiset syöttömenetelmät, fontit ja lokalisointi",
        "Deepin-kauppa tarjoaa yhden napsautuksen asennukset",
        "Tukee arkkitehtuureja x86, ARM ja LoongArch"
      ],
      "pros": [
        "Käyttäjäystävällinen kiinalaisille käyttäjille, valmis heti asennuksen jälkeen",
        "Kypsä työpöytäsuunnittelu ja yhtenäiset komponentit",
        "Sopeutuu aktiivisesti kotimaiseen laitteistoon"
      ],
      "cons": [
        "Sisältää suljetun lähdekoodin komponentteja ja on vähemmän vapaa kuin Debian",
        "Ei täysin yhteensopiva Debianin pakettivarastojen kanssa",
        "Julkaisurytmi on herättänyt kritiikkiä"
      ],
      "status_note": "Aktiivisesti ylläpidetty; tunnettu kiinankielisestä työpöytäkokemuksestaan",
      "target_user": "Tavalliset käyttäjät, jotka haluavat nykyaikaisen kiinankielisen työpöytäkokemuksen",
      "release_cycle": "Suuret versiot julkaistaan vuosittain, päivityksiä tarjotaan jatkuvasti"
    },
    "q4os": {
      "intro": "Q4OS on vuonna 2013 ilmestynyt Debian-johdannainen, jonka näkyvin piirre on Trinity Desktop Environment (TDE) -työpöytäympäristön käyttö. TDE jatkaa KDE 3:n suunnittelukieltä: käyttöliittymä on tiivis ja resurssien käyttö vähäistä, mikä on hyvin ystävällistä perinteiseen Windowsiin tai KDE 3:een tottuneille. Q4OS tarjoaa sekä Trinity- että KDE Plasma -työpöydän, tukee 32-bittisiä ja ARM-laitteita ja perustuu Debian stableen käyttäen apt/dpkg:tä, joten vakaus ja ohjelmistoyhteensopivuus ovat hyvät. Siinä on myös esimerkiksi XPQ4-teemaratkaisuja, joilla työpöydän ulkoasun saa lähemmäksi vanhoja Windows-versioita, minkä vuoksi sitä käytetään usein vanhojen koneiden kunnostukseen, kouluissa ja toimistoympäristöissä. Q4OS sopii käyttäjille, jotka tarvitsevat kevyen, vakaan ja perinteisen työpöytäasettelun, erityisesti Windowsista siirtyville, jotka eivät halua nykyaikaista GNOME-vuorovaikutusta. Huomattavaa on, että Trinityn ohjelmistoekosysteemi poikkeaa valtavirran työpöydistä, joten osasta nykyaikaisia sovelluksia voi puuttua natiivisti integraatio; myös Q4OS:n yhteisö on pieni.",
      "highlights": [
        "Trinity Desktop Environment jatkaa KDE 3:n tyyliä",
        "Pieni resurssienkulutus, sopii vanhoille koneille",
        "Perustuu Debian stableen, vakaa ja luotettava",
        "Tarjoaa perinteisiä Windows-tyylisiä teemoja"
      ],
      "pros": [
        "Ystävällinen vanhalle laitteistolle, tuttu käyttöliittymä",
        "Vakaa järjestelmä, helppo ylläpitää",
        "32-bittiselle tuelle on yhä käyttöä"
      ],
      "cons": [
        "Trinityn ekosysteemi on melko marginaalinen",
        "Nykyaikaisten sovellusten integraatio on rajallinen",
        "Yhteisö on pieni"
      ],
      "status_note": "Aktiivisesti ylläpidetty; erottuu Trinity-työpöydällään ja keveydellään",
      "target_user": "Vanhojen tietokoneiden käyttäjät, jotka pitävät perinteisestä työpöytäasettelusta",
      "release_cycle": "Seuraa Debian stablea ja tarjoaa pisteversioita"
    },
    "pureos": {
      "intro": "PureOS on Purismin ylläpitämä Debian-johdannainen, joka ilmestyi vuonna 2014 ja jonka Free Software Foundation (FSF) on hyväksynyt täysin vapaaksi jakeluksi. Se ottaa oletuksena käyttöön vain vapaiden ohjelmistojen määritelmän täyttävät pakettivarastot, käyttää Linux-libre-ydintä ja sisältää GNOMEn sekä joukon yksityisyystyökaluja; tavoitteena on pitää käyttäjä vapaiden ohjelmistojen ekosysteemissä laiteohjelmistosta sovelluksiin. PureOS on Purismin Librem-kannettavien ja Librem 5 -puhelimen tehdasasennettu järjestelmä, ja työpöytä- ja mobiiliversio (joka perustuu Phoshiin) jakavat paljon komponentteja. Se sopii käyttäjille, jotka arvostavat yksityisyyttä, ohjelmistovapautta ja auditoitavuutta, erityisesti Purismin asiakkaille, jotka ovat valmiita maksamaan laitteistosta lisähintaa. Huomattavaa on, että täysin vapaiden laitteistojen tuki on rajallista ja osa Wi-Fi-, näytönohjain- ja kiihdytysominaisuuksista voi puuttua; yritysvetoisena projektina PureOSin suunta on myös tiiviisti sidoksissa Purismin laitemyyntiin. Jos haluat vain Debianin vakautta ja vapaan ohjelmiston ihannetta, tavallinen Debian voi olla joustavampi.",
      "highlights": [
        "FSF:n hyväksymä täysin vapaa jakelu",
        "Purism Librem -laitteiden tehdasjärjestelmä",
        "Oletuksena käytössä yksityisyys- ja vapaiden ohjelmistojen työkalut",
        "Työpöydällä GNOME ja mobiilissa Phosh rinnakkain"
      ],
      "pros": [
        "Vahva vapaiden ohjelmistojen vaatimustenmukaisuus",
        "Hyvät yksityisyyden oletusasetukset",
        "Syvällisesti sovitettu Purismin laitteistoon"
      ],
      "cons": [
        "Laitteistoyhteensopivuus on rajallinen",
        "Ohjelmistoversiot ovat melko varovaisia",
        "Sidoksissa valmistajan ekosysteemiin"
      ],
      "status_note": "Aktiivisesti ylläpidetty FSF:n hyväksymä täysin vapaa jakelu",
      "target_user": "Purism-käyttäjät, jotka arvostavat yksityisyyttä ja ohjelmistovapautta",
      "release_cycle": "Seuraa Debian stablea, Purism tarjoaa päivitykset"
    },
    "tails": {
      "intro": "Tails (The Amnesic Incognito Live System) on käynnistettävä live-järjestelmä, jonka keskiössä ovat yksityisyys ja anonyymi viestintä, ja se ilmestyi vuonna 2009. Se käynnistyy USB-tikulta tai DVD:ltä, ohjaa oletuksena kaiken verkkoliikenteen Torin kautta eikä jätä istunnosta jälkiä sammuttamisen jälkeen; käyttäjä voi valita salatun pysyvän tallennustilan pienen tiedosto- tai asetusmäärän säilyttämiseen. Tails perustuu Debianiin ja sisältää Tor Browserin, salasanahallinnan, salausohjelmat ja toimisto-ohjelmistot, ja sen tavoite on madaltaa tavallisten käyttäjien kynnystä turvalliseen viestintään. Sitä käyttävät laajasti toimittajat, aktivistit, yksityisyyden tutkijat ja henkilöt, jotka käsittelevät arkaluonteisia tietoja. Tails sopii väliaikaiseen käyttöön epäluotettavissa tietokoneissa ja tilanteisiin, joissa paikalliset jäljet on vältettävä; se ei ole tarkoitettu päivittäiseksi päätyöpöydäksi eikä tarjoa perinteistä kiintolevylle asennusta. Huomattavaa on, että Tails ei voi suojata kaikilta uhkilta: laitteistotason takaovet, liikenteen korrelaatioanalyysi ja käyttäjän virheet voivat yhä paljastaa henkilöllisyyden, joten virallinen uhkamalli ja turvaohjeet kannattaa lukea ennen käyttöä.",
      "highlights": [
        "Ohjaa kaiken verkkoliikenteen oletuksena Torin kautta",
        "Jäljetön live-järjestelmä: sammutus pyyhkii istunnon",
        "Valinnainen salattu pysyvä tallennustila",
        "Sisäänrakennettu Tor Browser, salaus- ja toimistotyökalut"
      ],
      "pros": [
        "Yksityisyys- ja anonymiteettisuoja päällä oletuksena",
        "Kannettava ja käytettävissä epäluotettavilla koneilla",
        "Selkeä tietoturvapäivitysten rytmi"
      ],
      "cons": [
        "Ei sovellu jokapäiväiseksi järjestelmäksi",
        "Suorituskyky ja laitteistoyhteensopivuus ovat rajallisia",
        "Ei pysty torjumaan kaikkia uhkia"
      ],
      "status_note": "Aktiivisesti ylläpidetty kannettava järjestelmä anonyymiin viestintään ja yksityisyyden suojaan",
      "target_user": "Toimittajat, aktivistit ja käyttäjät, jotka tarvitsevat anonyymiä viestintää",
      "release_cycle": "Tietoturvapäivitysversiot noin 4–8 viikon välein"
    },
    "vanilla": {
      "intro": "Vanilla OS on vuonna 2022 ilmestynyt työpöytäjakelu. Se perustui alun perin Ubuntuun, mutta siirtyi versiosta 2.0 (Orchid) alkaen Debian unstableen ja otti käyttöön ABRootin muuttumattoman järjestelmän ja atomisten päivitysten toteuttamiseen. Sen ydinajatus on siisti isäntäjärjestelmä ja tarpeen mukaan luotavat kontit: perusjärjestelmä pysyy vain luettavana ja palautettavana, ja sovellukset ja kehitysympäristöt voidaan sijoittaa Distrobox/APX-kontteihin, jolloin riippuvuusristiriidat eivät sotke pääjärjestelmää. Vanilla OS käyttää oletuksena GNOMEa ja tarjoaa ohjauskeskuksen, omia sovelluksia ja Flatpak-tuen; käyttöliittymä on lähellä puhdasta GNOMEa mutta painottaa enemmän helppokäyttöisyyttä. Se sopii työpöytäkäyttäjille, jotka haluavat Debianin ohjelmistoekosysteemin ja muuttumattoman järjestelmän vakauden, erityisesti kehittäjille ja uusien työnkulkujen kokeilijoille. Huomattavaa on, että Vanilla OS:n konttipohjainen työnkulku eroaa perinteisestä apt install -tottumuksesta; se ei myöskään ole Debianin virallinen projekti, ja 2.0:n arkkitehtuuri muuttui merkittävästi, joten varhainen dokumentaatio ja yhteisön kokemukset voivat olla vanhentuneita. Siitä, kuuluuko se Debian- vai Ubuntu-sukuun, on erimielisyyttä; tässä se luokitellaan Debian-sukuun 2.0-version todellisen ylävirran perusteella.",
      "highlights": [
        "ABRoot-muuttumaton järjestelmä ja atomiset päivitykset",
        "APX/Distrobox-konttipohjainen sovellustyönkulku",
        "Uudempi ohjelmisto Debian unstable -pohjalta",
        "GNOME-työpöytä ja ohjauskeskus"
      ],
      "pros": [
        "Vakaa ja palautettavissa oleva järjestelmä",
        "Siisti isäntäjärjestelmä, vähän riippuvuusristiriitoja",
        "Nykyaikainen ja selkeä työpöytäkokemus"
      ],
      "cons": [
        "Eroaa paljon perinteisestä apt-työnkulusta",
        "Nuori projekti, jonka dokumentaatio kehittyy yhä",
        "Kontittaminen lisää resurssi- ja oppimiskustannuksia"
      ],
      "status_note": "Aktiivisesti ylläpidetty Debian-pohjainen muuttumaton työpöytäjärjestelmä",
      "target_user": "Kehittäjät ja edistyneet käyttäjät, jotka haluavat kokeilla muuttumatonta Debian-työpöytää",
      "release_cycle": "Julkaistaan suurina versioina; järjestelmäpäivitykset toimitetaan atomisina kuvina"
    },
    "armbian": {
      "intro": "Armbian on vuonna 2015 ilmestynyt ARM-piirilevyjen jakelujen rakennuskehys ja kuvakokoelma. Se tukee suurta joukkoa kortteja, kuten Raspberry Pi, Orange Pi, Rock Pi, Banana Pi ja Odroid, ja pohjana voi olla joko Debian tai Ubuntu. Se tarjoaa minimoituja palvelinkuvia ja Xfce-työpöydällä varustettuja työpöytäkuvia sekä sisältää armbian-config-työkalun verkon, SSH:n, ytimen, overlays-määritelmien ja kortin laitteiston määrittämiseen. Armbinin arvo on siinä, että se yhdistää ylävirran ytimet, U-Bootin ja korttikohtaiset korjaukset käynnistettäviksi ja ylläpidettäviksi kuviksi ja säästää käyttäjän käsin tehtävän siirron työn; tarjolla on myös nightly- ja stable-kanavat, joten se sopii NAS-laitteisiin, kotipalvelimiin, reunalaskentaan ja esineiden internetin prototyyppeihin. Huomattavaa on, että korttien tukilaatu vaihtelee suuresti, osa kuvista nojaa yhteisön ylläpitoon ja ydinpäivitykset voivat vaikuttaa laitteisto-ominaisuuksiin; toimivuus kannattaa varmistaa kohdekortilla ennen tuotantokäyttöä. Armbian ei ole yksittäinen työpöytäjakelu vaan pikemminkin järjestelmäjakelualusta ARM-korteille.",
      "highlights": [
        "Kattaa suuren joukon ARM-piirilevyjä",
        "Pohjana voi valita Debianin tai Ubuntun",
        "armbian-config keskittää laitteiston ja palvelujen määrittämisen",
        "Sekä palvelin- että kevyet työpöytäkuvat"
      ],
      "pros": [
        "Säästää ARM-korttien siirtotyön",
        "Laaja korttituki ja aktiivinen yhteisö",
        "Sopii NAS-, reuna- ja IoT-käyttöön"
      ],
      "cons": [
        "Tuen laatu vaihtelee korteittain",
        "Ydin- ja U-Boot-päivityksiin liittyy suurempi riski",
        "Dokumentaatio on hajallaan korttien ja versioiden välillä"
      ],
      "status_note": "Aktiivisesti ylläpidetty ARM-piirilevyille suunnattu jakelu",
      "target_user": "Käyttäjät, jotka rakentavat palvelimia tai prototyyppejä ARM-piirilevyille",
      "release_cycle": "Jatkuvia korttikuvia ja ydinpäivityksiä"
    },
    "raspberry-pi-os": {
      "intro": "Raspberry Pi OS on Raspberry Pi Foundationin virallinen järjestelmä sen omille piirilevyille. Se polveutuu vuonna 2012 ilmestyneestä Raspbianista, ja nimi vaihtui Raspberry Pi OS:ksi vuonna 2020. Se perustuu Debianiin ja käyttää apt/dpkg:tä, ja se on sovitettu erityisesti Raspberry Pin VideoCore-grafiikkapiiriin, GPIO-liitäntöihin, kameraan ja virranhallintaan; tarjolla on työpöytä- ja Lite-palvelinversio. Työpöytäympäristönä oli pitkään PIXEL, LXDE:stä räätälöity versio, ja uudet versiot siirtyvät vähitellen Waylandiin ja Labwc:hen; järjestelmään kuuluvat myös raspi-config, Raspberry Pi Imager ja runsaasti opetusohjelmistoja. Se sopii opiskelijoille, opettajille, tekijöille, kotipalvelinten käyttäjille ja Linuxiin ensi kertaa tutustuville, ja se on Raspberry Pi -laitteistoekosysteemin oletusportti. Huomattavaa on, että Raspberry Pi OS seuraa ohjelmistoversioissa Debian stablea, joten uudemmat työpöytä- ja ydinominaisuudet voivat viivästyä; muilla kuin Raspberry Pi -laitteilla osa ajureista ja työkaluista ei ole käytettävissä. Kyseessä on virallinen maksuton järjestelmä, jonka kaupallinen arvo syntyy pääasiassa laitemyynnistä.",
      "highlights": [
        "Raspberry Pin virallinen järjestelmä ja kattava laitteistosovitus",
        "Työpöytä- ja Lite-palvelinversiot",
        "raspi-config sekä kamera- ja GPIO-työkalut",
        "Monipuolinen opetusohjelmisto ja tekijäekosysteemi"
      ],
      "pros": [
        "Raspberry Pi toimii heti asennuksen jälkeen",
        "Erinomainen laitteisto- ja GPIO-tuki",
        "Runsaasti opetusohjeita ja yhteisöresursseja"
      ],
      "cons": [
        "Ohjelmistoversiot seuraavat Debiania ja ovat vanhempia",
        "Suunnattu pääasiassa Raspberry Pi -laitteistolle",
        "Työpöydän suorituskyky on kortin rajoittama"
      ],
      "status_note": "Raspberry Pi Ltd:n ylläpitämä virallinen laitteistoon esiasennettu järjestelmä",
      "target_user": "Raspberry Pin käyttäjät, opiskelijat, opettajat ja tekijät",
      "release_cycle": "Seuraa Debian stablea, kuvapäivityksiä julkaistaan tarpeen mukaan"
    },
    "knoppix": {
      "intro": "Knoppixin julkaisi saksalainen kehittäjä Klaus Knopper vuonna 2000, ja se on yksi varhaisimmista jakeluista, jotka levittivät ajatusta kokonaisesta Linux-työpöydästä live-CD:llä. Se perustuu Debianiin ja tunnistaa laitteiston automaattisesti käynnistyksen yhteydessä; aikoinaan se tarjosi selaimen, toimisto-ohjelmiston, verkkotyökalut ja pelastusympäristön ilman järjestelmän asennusta, ja se vaikutti syvästi myöhempiin Ubuntu Live CD -levyihin ja Tailsiin. Knoppix tukee myös pysyvää tallennustilaa ja asennusta kiintolevylle, ja sitä on pitkään käytetty järjestelmän pelastukseen, opetusdemonstraatioihin ja vanhojen tietokoneiden kokeiluun. Kun live-järjestelmistä tuli valtavirtaa ja Knoppixin päivitystahti hidastui, projekti ei ole julkaissut uutta versiota vuoden 2021 version 9.1 jälkeen ja on vaipunut horrostilaan. Nykyään se sopii paremmin Linuxin historian ja live-tekniikan tutkimuskohteeksi; jos tarvitset pelastusjärjestelmän nykyaikaiselle laitteistolle, kannattaa harkita yhä ylläpidettyjä vaihtoehtoja, kuten GParted Live, SystemRescue tai Tails.",
      "highlights": [
        "Yksi ensimmäisistä jakeluista, jotka levittivät live-CD-työpöydän",
        "Vahva automaattinen laitteistontunnistus ja pelastuskyky",
        "Perustuu Debianiin ja tukee pysyvää tallennustilaa",
        "Vaikutti syvästi myöhempiin live-järjestelmiin"
      ],
      "pros": [
        "Historiallisesti merkittävä ja suunnittelultaan edistyksellinen",
        "Täyden työpöydän voi kokea ilman asennusta",
        "Käytännöllinen järjestelmän pelastustilanteissa"
      ],
      "cons": [
        "Pitkään päivittämätön, suuri tietoturvariski",
        "Nykyaikaisen laitteiston tuki on puutteellinen",
        "Vanhentuneet ohjelmistoversiot"
      ],
      "status_note": "Ei päivityksiä 9.1-version (2021) jälkeen; projekti on horrostilassa",
      "target_user": "Linuxin historian tutkijat, offline-pelastus ja opetusdemonstraatiot",
      "release_cycle": "Uutta versiota ei ole julkaistu pitkään aikaan"
    },
    "ubuntu": {
      "intro": "Ubuntu julkaistiin vuonna 2004 Mark Shuttleworthin perustaman Canonicalin toimesta, ja se pohjautuu Debianiin tavoitteenaan tehdä vapaasta ohjelmistosta \"tavallisille ihmisille\" käytettävää. Se vakiinnutti tahdin: julkaisu 6 kuukauden välein ja LTS-versio 2 vuoden välein, sekä 5 vuoden vakiotuen (laajennettavissa yli 10 vuoteen). Ubuntu käyttää oletuksena GNOMEa ja tarjoaa viralliset mausteet Kubuntu, Xubuntu, Lubuntu, Ubuntu MATE, Ubuntu Budgie, Ubuntu Studio ja Ubuntu Kylin, jotka kattavat erilaisia työpöytä- ja kielitarpeita. apt ja snap elävät rinnakkain, ohjelmistoekosysteemi on valtava ja sekä laitteistoyhteensopivuus että pilvikuvien tuki ovat erittäin kypsiä. Se sopii laajasti henkilökohtaisista työpöydistä ja kehityskoneista yrityspalvelimiin, ja se on myös monien jatkojakelujen perusta. Kiistat keskittyvät lähinnä snapin oletustarjontaan, joihinkin suljetun lähdekoodin komponentteihin ja Canonicalin kaupalliseen strategiaan; jos suosii puhtaasti yhteisöllistä tai täysin vapaata ohjelmistoa, Debian tai Trisquel voi sopia paremmin. Ubuntu itsessään on ilmainen, kun taas Ubuntu Pro tarjoaa maksullisen laajennetun tietoturvaylläpidon.",
      "highlights": [
        "6 kuukauden julkaisutahti ja LTS 2 vuoden välein",
        "Monipuoliset viralliset mausteet, paljon työpöytävaihtoehtoja",
        "Kypsä pilvikuvien, palvelinten ja kehittäjien ekosysteemi",
        "Canonical tarjoaa kaupallista tukea ja Ubuntu Pron"
      ],
      "pros": [
        "Hyvä ohjelmisto- ja laitteistoyhteensopivuus, runsaasti dokumentaatiota",
        "Pitkä LTS-elinkaari, laajalti yrityksissä käytössä",
        "Viralliset mausteet kattavat monia työpöytämieltymyksiä"
      ],
      "cons": [
        "snapin oletuskäytäntö on kiistanalainen",
        "Jotkin komponentit sisältävät suljetun lähdekoodin sisältöä",
        "Muiden kuin LTS-versioiden tukiaika on lyhyempi"
      ],
      "status_note": "LTS-versiot saavat 5 vuoden vakiotuen, laajennettavissa 10–12 vuoteen; muut kuin LTS-versiot tuetaan 9 kuukautta",
      "target_user": "Yleiskäyttöinen Linux-alusta niin aloittelijoille kuin yrityskäyttäjille",
      "release_cycle": "Uusi versio 6 kuukauden välein; LTS 2 vuoden välein, LTS-tuki 5–10 vuotta"
    },
    "linux-mint": {
      "intro": "Linux Mintin perusti Clement Lefebvre vuonna 2006, ja se on yksi suosituimmista jakeluista Windowsista siirtyvien käyttäjien keskuudessa. Se pohjautuu Ubuntu LTS:ään (LMDE on Debian-pohjainen vaihtoehto), mutta suunnittelee työpöytäkokemuksen uudelleen: Cinnamon-, MATE- ja Xfce-versiot tarjoavat kaikki perinteisen tehtäväpalkin, käynnistysvalikon ja tutun ikkuna-asettelun säilyttäen samalla apt-ekosysteemin ja Ubuntun ohjelmavarastot. Mint sisältää oman Update Managerin, ohjelmistohallinnan, varmuuskopiointityökalun ja teema-asetukset, ei tyrkytä snapia oletuksena ja pitää päivityskäytäntönsä melko konservatiivisena korostaen vakaata, helppokäyttöistä ja huomaamatonta kokemusta. Se sopii kotikäyttäjille, toimistotyöpöydille, vanhoille tietokoneille ja Linuxia ensimmäistä kertaa kokeileville. Huomattavaa on, että Mintin ohjelmistoversiot seuraavat Ubuntu LTS:ää ja ovat yleensä vanhempia kuin Fedoran tai Archin; Cinnamonin Wayland-tuki on vielä kehitteillä, ja joidenkin uusien laitteiden tai suuritarkkuusnäyttöjen tuki on GNOMEa heikompi. Linux Mintillä ei ole kaupallista versiota, ja sitä ylläpitää yhteisötiimi.",
      "highlights": [
        "Kolme perinteistä työpöytää: Cinnamon, MATE ja Xfce",
        "Pohjautuu Ubuntu LTS:ään: vakaa ja pitkä tukijakso",
        "Update Manager ja Mintin työkaluketju ovat helppokäyttöisiä",
        "Ei pakotettua snapia oletuksena, käyttäjän valintaa kunnioittaen"
      ],
      "pros": [
        "Ystävällisin vaihtoehto Windowsista siirtyville",
        "Vakaa ja käyttövalmis heti asennuksen jälkeen",
        "Yhtenäinen työpöytäkokemus ja kattava dokumentaatio"
      ],
      "cons": [
        "Ohjelmistoversiot ovat melko vanhoja",
        "Wayland- ja joidenkin uusien laitteiden tuki laahaa jäljessä",
        "Suunnattu pääosin x86_64-alustalle"
      ],
      "status_note": "Linux Mint 22.x pohjautuu Ubuntu 24.04 LTS:ään, ja sitä tuetaan vuoteen 2029 asti",
      "target_user": "Windowsista siirtyvät käyttäjät, jotka haluavat vakaan ja helppokäyttöisen työpöydän",
      "release_cycle": "Seuraa Ubuntu LTS:ää, noin yksi pisteversio vuodessa, tuki vuoteen 2029"
    },
    "pop-os": {
      "intro": "Pop!_OS on System76:n vuonna 2017 julkaisema Ubuntu-johdannainen, joka alun perin tarjosi yhtiön omille Linux-kannettaville ja -pöytäkoneille paremman kokemuksen suoraan paketista ja josta myöhemmin tuli kehittäjille ja sisällöntekijöille suunnattu yleiskäyttöinen työpöytä. Se seuraa Ubuntu LTS:ää ja tarjoaa salatun asennuksen, hybridinäytönohjaimen vaihdon, laiteohjelmistopäivitykset ja Pop!_Shopin kaltaisia räätälöityjä työkaluja, ja se on kauan tunnettu vähän häiritsevästä ja näppäimistöystävällisestä käyttötavastaan. Pop!_OS käytti aiemmin voimakkaasti muokattua GNOMEa ja siirtyi sitten omaan COSMIC-työpöytäympäristöönsä, joka korostaa suorituskykyä, muokattavuutta ja Rust-teknologiapinoa. Se sopii kehittäjille, datatieteen käyttäjille, pelaajille ja Linux-käyttäjille, jotka haluavat tuoreempaa laitteistotukea. Huomattavaa on, että COSMIC kehittyy edelleen ja osa ominaisuuksista sekä kolmannen osapuolen laajennusekosysteemistä on GNOMEa vähemmän kypsää; myös Pop!_OS:n päivitystahti on sidottu Ubuntu LTS:ään, joten ohjelmistoversiot eivät ole erityisen tuoreita. System76 ansaitsee rahaa laitemyynnillä ja tukipalveluilla, ja käyttöjärjestelmä itsessään on ladattavissa ilmaiseksi.",
      "highlights": [
        "System76-laitteiston optimointi ja laiteohjelmistotyökalut",
        "Oma COSMIC-työpöytä, näppäimistöystävällinen",
        "Salattu asennus ja hybridinäytönohjaimen vaihto",
        "Pohjautuu Ubuntu LTS:ään, ekosysteemiyhteensopivuus"
      ],
      "pros": [
        "Hyvä kokemus kehittäjille ja sisällöntekijöille",
        "Aktiivinen laitteistoyhteensopivuus ja ajurituki",
        "Tehokas työpöytävuorovaikutus"
      ],
      "cons": [
        "COSMIC-ekosysteemi on vielä kasvuvaiheessa",
        "Ohjelmistoversiot seuraavat LTS:ää ja ovat konservatiivisia",
        "Suunnattu pääosin System76-laitteistolle ja x86_64:lle"
      ],
      "status_note": "Aktiivisesti ylläpidetty; System76:n työpöytä- ja laitteisto-optimoitu jakelu",
      "target_user": "Kehittäjät, sisällöntekijät ja System76-laitteiston käyttäjät",
      "release_cycle": "Seuraa Ubuntu LTS:ää, System76 tarjoaa räätälöidyt päivitykset"
    },
    "elementary": {
      "intro": "elementary OS:n käynnisti Daniel Foré vuonna 2011; se pohjautuu Ubuntu LTS:ään ja tunnetaan parhaiten omasta Pantheon-työpöydästään. Se tavoittelee macOS:ää muistuttavaa pelkistettyä vuorovaikutusta: yläpaneeli, alaosassa telakka, yleinen valikko, yhtenäiset kuvakkeet ja Human Interface Guidelines, jotka tekevät ensimmäisen osapuolen sovelluksista visuaalisesti ja toiminnallisesti hyvin yhtenäisiä. elementaryn AppCenter tarjoaa sekä ilmaisia että maksullisia sovelluksia ja kannustaa kehittäjiä ansaitsemaan avoimen lähdekoodin ohjelmistoilla; järjestelmä tukee oletuksena Flatpakia ja vähentää sekavuutta huolella valituilla esiasennetuilla ohjelmistoilla. Se sopii käyttäjille, jotka arvostavat suunnittelun yhtenäisyyttä ja haluavat rauhallisen ja tyylikkään työpöytäkokemuksen, ja se sopii myös Linux-järjestelmäksi ei-tekniselle käyttäjälle. Huomattavaa on, että elementaryn laitteistoyhteensopivuus riippuu Ubuntu LTS:stä ja ohjelmistoversiot ovat vanhempia; Pantheonin laajennusekosysteemi on GNOMEen verrattuna pieni, ja osa ammattisovelluksista voi vaatia lisämäärityksiä. Projekti rahoittaa toimintansa lahjoituksilla, sovellustuottojen jaolla ja yritystukipalveluilla.",
      "highlights": [
        "Oma Pantheon-työpöytä, yhtenäinen vuorovaikutus",
        "AppCenter tukee sekä maksullisia että ilmaisia sovelluksia",
        "Pohjautuu Ubuntu LTS:ään, vakaa ja luotettava",
        "Tarkat suunnitteluohjeet ja visuaalinen yhtenäisyys"
      ],
      "pros": [
        "Hienostunut käyttöliittymä ja yhtenäinen vuorovaikutus",
        "Ystävällinen ei-teknisille käyttäjille",
        "Kattava sovelluskeskuskokemus"
      ],
      "cons": [
        "Ohjelmistoversiot seuraavat LTS:ää ja ovat vanhempia",
        "Pantheonin laajennusekosysteemi on suppea",
        "Laitteistoyhteensopivuus riippuu Ubuntusta"
      ],
      "status_note": "Aktiivisesti ylläpidetty, keskittyy yhtenäiseen työpöytäkokemukseen",
      "target_user": "Työpöytäkäyttäjät, jotka arvostavat suunnittelun yhtenäisyyttä ja pelkistettyä kokemusta",
      "release_cycle": "Seuraa Ubuntu LTS:ää pääversiojulkaisuina"
    },
    "zorin": {
      "intro": "Zorin OS:n perustivat Zorin-veljekset vuonna 2009; se pohjautuu Ubuntu LTS:ään ja sen tavoite on hyvin selkeä: antaa Windows- ja macOS-käyttäjien siirtyä Linuxiin vaivattomasti. Se tarjoaa voimakkaasti räätälöidyn GNOME-työpöydän, jonka Zorin Appearance voi yhdellä napsautuksella vaihtaa Windows 11:tä, Windows 7:ää, macOS:ää tai Ubuntu:a muistuttavaan asetteluun; Zorin Connect yhdistää puhelimen ja tietokoneen, Wine-avustus ja Windows-sovellusten asennuspolku ovat sisäänrakennettuja, ja esiasennetut ohjelmistot on valittu siirtyvien käyttäjien tottumusten mukaan. Zorin OS:stä on ilmainen Core-versio ja maksullinen Pro-versio, joka sisältää enemmän työpöytäasetteluja, sovelluksia ja asennustukea, ja se on yksi harvoista työpöytäjakeluista, joissa on maksullisen lisäarvon malli. Se sopii kotikäyttäjille, toimistotyöntekijöille ja kouluille, erityisesti Linuxia ensimmäistä kertaa kokeileville. Huomattavaa on, että Zorinin ohjelmistoversiot seuraavat Ubuntu LTS:ää ja ovat yleensä vanhempia; voimakkaasti räätälöity työpöytä voi vaatia uudelleensovittamista pääversiopäivityksissä, ja osa lisäominaisuuksista edellyttää Pron ostamista.",
      "highlights": [
        "Yhden napsautuksen vaihto Windows- ja macOS-tyylisten asettelujen välillä",
        "Zorin Connect -puhelinintegrointi",
        "Pohjautuu Ubuntu LTS:ään, vakaa ja helppokäyttöinen",
        "Ilmainen Core ja maksullinen Pro"
      ],
      "pros": [
        "Pieni oppimiskynnys siirtyville käyttäjille",
        "Joustavat työpöytäasettelut",
        "Esiasennetut ohjelmistot vastaavat arjen tarpeita"
      ],
      "cons": [
        "Ohjelmistoversiot ovat melko vanhoja",
        "Lisäominaisuudet ovat maksullisia",
        "Voimakas räätälöinti lisää päivityksiin sopeutumisen työtä"
      ],
      "status_note": "Aktiivisesti ylläpidetty, suunnattu Windows- ja macOS-käyttäjille",
      "target_user": "Tavalliset työpöytäkäyttäjät, jotka siirtyvät Windowsista tai macOS:stä",
      "release_cycle": "Seuraa Ubuntu LTS:ää pääversiojulkaisuina"
    },
    "kde-neon": {
      "intro": "KDE neon on KDE-yhteisön vuonna 2016 julkaisema jakelu, jonka asema ei ole vielä yksi yleiskäyttöinen Linux vaan virallinen ikkuna uusimpaan KDE Plasmaan. Se käyttää Ubuntu LTS:ää vakaana perustana ja lisää sen päälle KDE:n jatkuvasti päivittyvät ohjelmavarastot, joten järjestelmän pohja on suhteellisen vakaa, kun taas Plasma-työpöytä, KDE Frameworks ja ensimmäisen osapuolen sovellukset saavat nopeasti uudet versiot. Neon tarjoaa kanavia kuten User Edition, Testing ja Unstable, ja se sopii käyttäjille, jotka haluavat kokeilla Plasman uusia ominaisuuksia ensimmäisten joukossa ilman itse kääntämistä tai koko järjestelmän rullaamista. Se sopii KDE-harrastajille, työpöydän muokkaajille, Qt- ja KDE-kehittäjille ja niille, jotka haluavat modernin Plasma-työpöydän käyttämättä Archia. Huomattavaa on, että Neonin rullaus koskee vain KDE-ohjelmistokerrosta, kun taas Ubuntu-pohja pysyy LTS:nä; kolmannen osapuolen PPA-lähteiden sekoittaminen voi rikkoa riippuvuudet, ja Plasman pääversiopäivitykset voivat tuoda teemojen tai liitännäisten yhteensopivuusongelmia. Se ei sovi käyttäjille, jotka haluavat täysin rullaavan julkaisun tai jotka eivät halua säätää.",
      "highlights": [
        "Ubuntu LTS -pohja ja uusin KDE Plasma",
        "KDE:n ylläpitämä, nopea päivitystahti",
        "Discover-graafinen ohjelmistohallinta",
        "Sopii KDE-kehittäjille ja -harrastajille"
      ],
      "pros": [
        "Uudet Plasma-versiot saatavilla nopeasti",
        "Ubuntu LTS -pohja on melko vakaa",
        "KDE:n virallinen tuki ja suora dokumentaatio"
      ],
      "cons": [
        "Rullaava KDE-kerros voi tuoda regressioita",
        "Kolmannen osapuolen PPA-lähteiden yhteensopivuusriski",
        "Ei täysin rullaava jakelu"
      ],
      "status_note": "Aktiivisesti ylläpidetty; KDE:n virallinen Plasma-esittelyjakelu",
      "target_user": "Käyttäjät, jotka haluavat uusimman KDE Plasman ensimmäisten joukossa",
      "release_cycle": "Ubuntu LTS -pohja sekä jatkuvasti päivittyvät KDE-ohjelmavarastot"
    },
    "bodhi": {
      "intro": "Bodhi Linuxin perusti Jeff Hoogland vuonna 2010; se pohjautuu Ubuntu LTS:ään ja käyttää Enlightenmentista haarautunutta Moksha-työpöytää. Sen suunnittelufilosofia on mahdollisimman vähän esiasennusta ja valinnat käyttäjälle: järjestelmä tarjoaa vain perussovellukset ja kaikki muu asennetaan tarpeen mukaan Bodhi AppCenterin kautta, joten levykuva on pieni ja muistinkäyttö vähäistä, mikä sopii vanhoille tietokoneille ja ympäristöään itse rakentaville käyttäjille. Moksha tarjoaa modulaariset paneelit, työpöytäkomponentit ja omaleimaisen ikkunanhallintakokemuksen, joka poikkeaa visuaalisesti selvästi perinteisestä GNOMEsta ja KDE:stä. Bodhi sopii kevyiden työpöytien ihailijoille, vanhan laitteiston käyttäjille ja säätämiseen aikaa käyttäville harrastajille. Huomattavaa on, että Mokshan ekosysteemi on pienempi kuin valtavirran työpöytien ja joidenkin nykyaikaisten sovellusten teema- ja suuritarkkuusnäyttötuki on puutteellinen; Bodhin ohjelmistoversiot seuraavat Ubuntu LTS:ää ja uudemman laitteiston tuki voi olla jäljessä. Sillä ei ole kaupallista versiota, ja sitä ylläpitää yhteisö.",
      "highlights": [
        "Moksha-työpöytä: modulaarinen ja kevyt",
        "Niukka esiasennus, sovellukset asennetaan tarpeen mukaan",
        "Pohjautuu Ubuntu LTS:ään, vakaa",
        "Sopii vanhalle laitteistolle ja muokkauksesta pitäville"
      ],
      "pros": [
        "Vähäinen resurssien käyttö",
        "Puhdas järjestelmä, jonka voi rakentaa vapaasti",
        "Ubuntu-ekosysteemin yhteensopivuus"
      ],
      "cons": [
        "Pieni Moksha-ekosysteemi",
        "Vähän oletussovelluksia, aloittelijan on määritettävä itse",
        "Nykyaikaisen laitteiston tuki voi olla jäljessä"
      ],
      "status_note": "Aktiivisesti ylläpidetty, tunnettu Moksha-työpöydästä ja keveydestä",
      "target_user": "Vanhojen tietokoneiden käyttäjät, jotka pitävät kevyestä ja modulaarisesta työpöydästä",
      "release_cycle": "Seuraa Ubuntu LTS:ää pääversiojulkaisuina"
    },
    "trisquel": {
      "intro": "Trisquel GNU/Linuxin perusti Rubén Rodríguez vuonna 2007, ja se on Ubuntu LTS:ään pohjautuva täysin vapaan ohjelmiston jakelu, jonka Free Software Foundation (FSF) on hyväksynyt. Se poistaa Ubuntusta suljetun laiteohjelmiston, binääriblobit, rajoitetut ajurit ja osan ei-vapaista ohjelmistoista ja säilyttää vain vapaiden ohjelmistojen määritelmän mukaiset komponentit; ydin on Linux-libre, ja myös selaimet ja muut työkalut on korvattu vapailla versioilla. Trisquelin tavoite on antaa käyttäjälle vapaus tarkastaa, muokata ja edelleen jakaa kaikkea järjestelmästä sovelluksiin, minkä vuoksi se sopii erinomaisesti vapaan ohjelmiston opetukseen, julkishallintoon ja käyttäjille, joilla on ohjelmistoetiikkaan liittyviä vaatimuksia. Hinta on selvästi rajoittunut laitteistoyhteensopivuus: Wi-Fi, näytönohjaimet ja kiihdytystoiminnot, jotka vaativat suljettua laiteohjelmistoa, eivät välttämättä toimi. Trisquelin ohjelmistoversiot seuraavat Ubuntu LTS:ää ja ovat melko konservatiivisia; yhteisö on pieni ja dokumentaatio ja tuki ovat pääosin englanniksi. Sillä ei ole kaupallista versiota, ja sitä ylläpitävät vapaaehtoiset. Jos haluat vain vakaan Ubuntu-kokemuksen, tavallinen Ubuntu tai Debian on käytännöllisempi.",
      "highlights": [
        "FSF:n hyväksymä täysin vapaa Ubuntu-johdannainen",
        "Poistaa suljetun laiteohjelmiston ja binääriblobit",
        "Käyttää Linux-libre-ydintä",
        "Sopii vapaan ohjelmiston opetukseen ja julkishallintoon"
      ],
      "pros": [
        "Perusteellinen vapaan ohjelmiston vaatimustenmukaisuus",
        "Ubuntun ekosysteemiin ja dokumentaatioon voi tukeutua",
        "Vakaa järjestelmä ja pitkäaikainen tuki"
      ],
      "cons": [
        "Rajoittunut laitteistoyhteensopivuus",
        "Vanhemmat ohjelmistoversiot",
        "Pieni yhteisö"
      ],
      "status_note": "Aktiivisesti ylläpidetty; FSF:n hyväksymä täysin vapaa jakelu",
      "target_user": "Oppilaitokset ja yksityishenkilöt, jotka pitäytyvät täysin vapaassa ohjelmistossa",
      "release_cycle": "Seuraa Ubuntu LTS:ää, mutta säilyttää vain vapaan ohjelmiston"
    },
    "linux-lite": {
      "intro": "Linux Liten perusti Jerry Bezencon vuonna 2012; se pohjautuu Ubuntu LTS:ään, käyttää Xfce-työpöytää ja sen kohderyhmä on hyvin selkeä: vaatimattomalla laitteistolla varustetut tavalliset käyttäjät, jotka siirtyvät Windowsista. Se tarjoaa tutun työpöytäasettelun, Lite-sarjan työkalut (päivitysten hallinta, ohjelmistokeskus, järjestelmätiedot, varmuuskopiointi) sekä yksityiskohtaisen englanninkielisen käsikirjan, joten asennuksen jälkeen arjen tehtävät kuten selailu, toimistotyö ja median toisto hoituvat. Linux Litellä on vaatimaton vähimmäislaitteistovaatimus ja se käyttää vähemmän resursseja kuin Ubuntun oletus-GNOME, joten se sopii vanhoille kannettaville, toimistokoneille ja koulujen tietokoneluokkiin. Koska se seuraa Ubuntu LTS:ää, ohjelmistoversiot ovat melko konservatiivisia, mutta vakaus ja ajuriyhteensopivuus ovat hyviä. Huomattavaa on, että Linux Lite on suunnattu pääosin x86_64-alustalle, sen yhteisö on melko pieni ja osa lokalisoinnista ja kiinankielisestä tuesta on puutteellisempaa kuin deepinissä tai Ubuntu Kylinissä; myös oletusulkoasu on melko perinteinen. Sillä ei ole kaupallista versiota, ja sitä ylläpitää yhteisö.",
      "highlights": [
        "Kevyt Xfce-työpöytä, sopii vaatimattomalle laitteistolle",
        "Linux Liten työkalut helpottavat arjen ylläpitoa",
        "Pohjautuu Ubuntu LTS:ään, hyvä ajuriyhteensopivuus",
        "Yksityiskohtainen käsikirja, sopii Windowsista siirtyville"
      ],
      "pros": [
        "Sujuva kokemus vaatimattomilla tietokoneilla",
        "Siirtyvän käyttäjän on helppo omaksua",
        "Vakaa järjestelmä ja yksinkertainen ylläpito"
      ],
      "cons": [
        "Ohjelmistoversiot ovat melko vanhoja",
        "Kiinankielinen lokalisointi on keskitasoa",
        "Melko pieni yhteisö"
      ],
      "status_note": "Aktiivisesti ylläpidetty, suunnattu Windowsista siirtyville ja vaatimattomille laitteille",
      "target_user": "Tavalliset käyttäjät, joilla on vanhempi laitteisto ja jotka siirtyvät Windowsista",
      "release_cycle": "Seuraa Ubuntu LTS:ää pääversiojulkaisuina"
    },
    "ubuntu-touch": {
      "intro": "Ubuntu Touch on Canonicalin vuonna 2013 julkaisema mobiilikäyttöjärjestelmä, jonka UBports-yhteisö otti haltuunsa vuonna 2017 Canonicalin vetäydyttyä puhelinliiketoiminnasta. Se pohjautuu Ubuntuun, käyttää omaa Lomiri-työpöytäympäristöä ja korostaa kosketuseleitä, konvergentteja sovelluksia (puhelimesta tulee työpöytä, kun se liitetään näyttöön) ja avoimen lähdekoodin ekosysteemiä. UBports tarjoaa edelleen OTA-päivityksiä joillekin Fairphone-, Google Pixel-, OnePlus- ja PinePhone-laitteille sekä asennusohjelman ja dokumentaation. Se sopii käyttäjille, jotka haluavat irti suljetuista Android- ja iOS-ekosysteemeistä, hyväksyvät rajoitetun sovellusmäärän ja ovat valmiita asentamaan laitteeseensa uuden järjestelmän, sekä mobiilin Linuxin kehittäjille ja yksityisyyden puolustajille. Huomattavaa on, että Ubuntu Touchin laitteistotuki riippuu vahvasti mallista ja esimerkiksi kamera, VoLTE ja sormenjälki voivat olla puutteellisia; sovellusekosysteemi koostuu pääosin verkkosovelluksista, Qt-sovelluksista ja Android-yhteensopivuuskerroksesta eikä vedä vertoja valtavirran mobiilialustoille. Sillä ei ole kaupallista versiota, ja sitä ylläpitävät UBports-säätiö ja vapaaehtoiset.",
      "highlights": [
        "Lomiri-kosketuskäyttöliittymä ja konvergentti työpöytä",
        "UBports tarjoaa edelleen OTA-päivityksiä",
        "Tukee joitakin Fairphone-, Pixel- ja PinePhone-laitteita",
        "Avoimen lähdekoodin mobiilijärjestelmä, yksityisyyteen painottuva"
      ],
      "pros": [
        "Avoimen lähdekoodin, tarkastettavissa oleva mobiilijärjestelmä",
        "Omaleimainen konvergentin työpöydän ajatus",
        "Yhteisö ylläpitää sitä jatkuvasti"
      ],
      "cons": [
        "Rajoittunut sovellusekosysteemi",
        "Laitteistotuki vaihtelee suuresti mallikohtaisesti",
        "Osa puhelinominaisuuksista on puutteellisia"
      ],
      "status_note": "UBports-yhteisön ylläpitämä, jatkuvia OTA-päivityksiä joillekin puhelimille ja tableteille",
      "target_user": "Mobiilin Linuxin harrastajat, jotka ovat valmiita asentamaan järjestelmän itse ja arvostavat avoimuutta",
      "release_cycle": "UBports julkaisee OTA-päivityksiä jatkuvasti"
    },
    "opensuse-leap": {
      "intro": "openSUSE Leap on openSUSE-projektin kiinteän julkaisun haara; vuodesta 2015 se on rakennettu SUSE Linux Enterprisen lähdekoodista ja tarjoaa ilmaisen järjestelmän, joka on erittäin yhteensopiva SLE:n kanssa. Se käyttää zypperiä ja YaSTia, tukee hyvin sekä KDE Plasmaa että GNOMEa ja sopii työpöytä-, palvelin- ja virtualisointikäyttöön. Leapin julkaisutahti on Tumbleweedia konservatiivisempi, tyypillisesti yksi pääversio vuodessa ja noin kahdesta kolmeen vuoden ylläpitojakso, joten se sopii paremmin tuotantoympäristöihin, joissa ei haluta päivittää usein. Huomattavaa on, että vaikka openSUSE kuuluu Red Hat -perheen tavoin yritys-Linuxin perinteeseen, se käyttää itsenäistä zypper- ja rpm-ekosysteemiä ja SUSE-alkulähdettä, joten tässä kartastossa se on luokiteltu muu perhe -kategoriaan ja suse on toissijainen tunniste. Leap sopii käyttäjille, jotka tarvitsevat vakaan ja yritysyhteensopivan järjestelmän maksamatta SUSE-tilausta; uusinta ohjelmistoa haluavien kannattaa valita Tumbleweed. openSUSEn YaST ja OBS-koontipalvelu ovat myös sen ekosysteemin kohokohtia.",
      "highlights": [
        "Rakennettu SUSE Linux Enterprisen lähdekoodista",
        "Kattava järjestelmänhallinta zypperillä ja YaSTilla",
        "Erinomainen KDE Plasma -tuki",
        "Kiinteä julkaisu, sopii tuotantoympäristöihin"
      ],
      "pros": [
        "Yhdistää yritysyhteensopivuuden ja vakauden",
        "Kattava YaST-toiminnallisuus",
        "Sopii sekä työpöydälle että palvelimeen"
      ],
      "cons": [
        "Melko konservatiiviset ohjelmistoversiot",
        "Leap 16:n arkkitehtuurimuutos tuo siirtymäkustannuksia",
        "Kiinankielinen yhteisö on vähemmän aktiivinen kuin Debian-perheessä"
      ],
      "status_note": "openSUSE Leap 16 julkaistiin vuonna 2025, ja sitä ylläpidetään vuoteen 2027",
      "target_user": "Työpöytä- ja palvelinkäyttäjät, jotka tarvitsevat vakaan ja yritysyhteensopivan järjestelmän",
      "release_cycle": "Noin yksi pääversio vuodessa, ylläpitojakso noin 2–3 vuotta"
    },
    "opensuse-tumbleweed": {
      "intro": "openSUSE Tumbleweed on openSUSEn rullaavan julkaisun versio, ja se on ollut projektin päälinjoja vuodesta 2014. Se ei yksinkertaisesti työnnä uusinta ohjelmistoa käyttäjille, vaan ajaa jokaisen tilannekuvan openQA-automaatiotestien läpi, jotka kattavat asennuksen, päivitykset ja työpöytätoiminnot, ja julkaisee sen vasta kun ne menevät läpi, minkä ansiosta sen rullaavat päivitykset ovat vertaistensa joukossa melko vakaita. Tumbleweed käyttää kokonaispäivityksiin zypper dup -komentoa, tukee KDE Plasmaa, GNOMEa, Xfce:tä ja muita työpöytiä ja sopii myös palvelimiin ja kehitysympäristöihin. Ohjelmistoversiot ovat hyvin tuoreita: ydin, kääntäjät ja työpöytäympäristöt seuraavat yleensä tiiviisti ylävirtaa; yhdessä snapperin ja Btrfs-tilannekuvien kanssa epäonnistunut päivitys voidaan palauttaa. Tumbleweed sopii työpöytäkäyttäjille ja kehittäjille, jotka ovat valmiita päivittämään säännöllisesti, haluavat uusinta ohjelmistoa ja kestävät satunnaista riippuvuuksien muutosten käsittelyä. Leapiin verrattuna se ei sovi tuotantoympäristöihin, joiden on pysyttävä muuttumattomina vuosia; Archiin verrattuna siinä on automaattitestaus ja tilannekuvamekanismit, mutta zypper-työnkulkuun on totuttava. Projekti on yhteisövetoinen, ja SUSE tarjoaa tukea.",
      "highlights": [
        "openQA-testatut tilannekuvapohjaiset rullaavat päivitykset",
        "zypper dup ja Btrfs-tilannekuvien palautus",
        "Tuoreet KDE Plasma ja GNOME",
        "Sopii kehitykseen ja työpöydän eturintamaan"
      ],
      "pros": [
        "Tuore ohjelmisto ja melko korkea päivityslaatu",
        "Tilannekuvien palautus pienentää riskiä",
        "Kattavat työpöytä- ja kehitystyökalut"
      ],
      "cons": [
        "Rullaava julkaisu vaatii silti säännöllistä ylläpitoa",
        "zypperin oppimiskynnys",
        "Jotkin suljetut ajurit voivat olla jäljessä"
      ],
      "status_note": "Aktiivisesti ylläpidetty; rullaavat päivitykset on suojattu openQA-testeillä",
      "target_user": "Työpöytäkäyttäjät, jotka haluavat uutta ohjelmistoa mutta vakaampia päivityksiä",
      "release_cycle": "Jatkuvasti rullaava; tilannekuvat julkaistaan openQA-automaatiotestien jälkeen"
    },
    "sle": {
      "intro": "SUSE Linux Enterprise (SLE) on SUSEn kaupallinen yritysjakeluperhe, joka kattaa tuotelinjat kuten SLES (palvelin), SLED (työpöytä), SAP-sovellukset, korkea käytettävyys ja edge. SUSEn historia ulottuu vuoteen 1992, ja se on yksi Linuxin kaupallistamisen varhaisimmista yrityksistä; SLE käyttää zypperiä, YaSTia ja RPM-työkaluketjua ja tarjoaa monivuotiset elinkaaret, sertifioidut laitteisto- ja ohjelmistomatriisit, tietoturvatiedotteet ja 24×7-tuen. Se jakaa suuren määrän lähdekoodia openSUSE Leapin kanssa: Leapia voi pitää SLE:n yhteisöllisenä yhteensopivana haarana, kun taas Tumbleweed on edistyksellisempi rullaava versio. SLE sopii yrityksille, jotka ajavat SAPia, tietokantoja, liiketoimintakriittisiä palvelimia, suurtietokoneita ja edge-solmuja, erityisesti silloin kun vaaditaan toimittajan SLA-taso ja sertifiointi. Se ei ole ilmainen jakelu, joten yksityiskäyttäjän kannattaa yleensä valita openSUSE; lisäksi SLE:n ohjelmistoversiot ovat hyvin konservatiivisia eikä se sovi uusien ominaisuuksien perässä kulkeville työpöytäkäyttäjille. Valinnassa kannattaa pitää SUSEn virallista tukimatriisia ohjenuorana.",
      "highlights": [
        "Tuotelinjat kuten SLES, SLED, SAP ja korkea käytettävyys",
        "Pitkäaikainen yritystuki ja sertifiointimatriisi",
        "zypper + YaST + SUSE Manager",
        "Kattaa x86:n, ARM:n, Powerin ja s390x:n"
      ],
      "pros": [
        "Yritystason SLA-tasot ja kattava sertifiointi",
        "Pitkäaikainen vakaus, sopii liiketoimintakriittisiin kuormiin",
        "Toimii yhdessä openSUSE-ekosysteemin kanssa"
      ],
      "cons": [
        "Vaatii kaupallisen tilauksen",
        "Hyvin konservatiiviset ohjelmistoversiot",
        "Korkeat kustannukset yksityiskäyttäjälle"
      ],
      "status_note": "Kaupallinen yritysjakelu; tarkat versiot ja tukijaksot määräytyvät SUSE-tilauksen mukaan",
      "target_user": "Yritykset, joilla on liiketoimintakriittisiä kuormia ja jotka tarvitsevat toimittajan tukea ja sertifiointia",
      "release_cycle": "Yksi service pack -jakso useiden vuosien aikana, pitkäaikainen yritystuki"
    },
    "gentoo": {
      "intro": "Daniel Robbinsin vuonna 2002 luoma Gentoo on lähdekoodista koottavien jakeluversioiden tunnetuin edustaja. Se ei tarjoile perinteisiä binääripaketteja, vaan kokoaa ohjelmistot lähdekoodista Portagen ja emergen kautta käyttäjän valitsemien USE-lippujen, käännösasetusten ja riippuvuuksien mukaisesti, jolloin ominaisuuksia, kokoa ja optimointiasetuksia voi säätää hienojakoisesti. Gentoon rullaavat päivitykset eivät käytä kiinteää versionumeroa, joten järjestelmää voi päivittää loputtomasti; oletusinit on OpenRC, mutta myös systemd on valittavissa. Se tukee laajasti eri arkkitehtuureja ja sen dokumentaatio (Gentoo Wiki) on erittäin laadukasta, joten se sopii käyttäjille, jotka haluavat ymmärtää kääntämistä, riippuvuuksia ja järjestelmän rakennetta, sekä sulautettuihin järjestelmiin, työpöydän räätälöintiin ja suorituskyvyn viritykseen. Hinta on korkea asennus- ja ylläpitotyö: käännökset kestävät kauan, riippuvuusristiriidat on ratkaistava käsin ja rullaavat päivitykset voivat edellyttää uutisten lukemista (eselect news). Gentoo ei sovi käyttäjille, jotka tarvitsevat nopeaa käyttöönottoa tai eivät halua olla tekemisissä kääntäjän kanssa; jos haluat vain rullaavia päivityksiä, Arch tai openSUSE Tumbleweed on vaivattomampi.",
      "highlights": [
        "Portage/emerge ja lähdekoodikäännökset USE-lipuilla",
        "Erittäin suuri räätälöintivapaus ja laaja arkkitehtuurituki",
        "Rullaava julkaisu ilman kiinteää versionumeroa",
        "OpenRC oletuksena, systemd valinnaisena"
      ],
      "pros": [
        "Erittäin hyvät räätälöinti- ja optimointimahdollisuudet",
        "Laadukas dokumentaatio ja suuri oppimisarvo",
        "Tukee monia harvinaisiakin arkkitehtuureja"
      ],
      "cons": [
        "Asennuksen ja ylläpidon korkea kynnys",
        "Hitaat käännökset ja suuri resurssienkulutus",
        "Riippuvuusristiriidat on hoidettava käsin"
      ],
      "status_note": "Aktiivisesti ylläpidetty; lähdekoodikäännökset ja syvä räätälöinti ovat ydintä",
      "target_user": "Edistyneet käyttäjät, jotka haluavat kääntää järjestelmänsä ja tavoitella äärimmäistä räätälöintiä",
      "release_cycle": "Jatkuvasti rullaava; stage-levykuvat päivittyvät säännöllisesti"
    },
    "alpine": {
      "intro": "Alpine Linux ilmestyi vuonna 2005, ja sen ytimessä on pieni koko, nopeus ja turvallisuus; se on yksi yleisimmistä minimalistisista jakeluversioista kontti- ja sulautetuissa ympäristöissä. Se käyttää musl libc:tä ja BusyBoxia, peruslevykuva on vain muutaman megatavun kokoinen, apk-paketinhallinta on yksinkertainen ja nopea ja oletusinit on OpenRC. Alpinen paketit on koottu tietoturvaa koventaen (muun muassa PIE ja pinon suojaus), joten se sopii Docker-levykuviin, reitittimiin, VPN-yhdyskäytäviin, CI-ympäristöihin ja vähäresurssisiin laitteisiin. Tarjolla on myös Xfce-työpöytäasennus, mutta työpöytäkokemus ei ole sen painopiste. Alpine sopii kehittäjille ja ylläpitäjille, jotka tuntevat komentorivin hyvin ja tarvitsevat mahdollisimman pienen hyökkäyspinnan ja nopean käyttöönoton. Huomattavaa on, että musl:n ja glibc:n erot voivat estää joidenkin valmiiksi käännettyjen binäärien toiminnan, jolloin tarvitaan yhteensopivia paketteja tai omaa käännöstä; ohjelmistoversiot ovat melko tuoreita, mutta ekosysteemi on Debiania pienempi. Alpinesta ei ole kaupallista versiota, ja sitä ylläpitää yhteisö, jonka dokumentaatio ja wiki ovat laadukkaita.",
      "highlights": [
        "musl + BusyBox, erittäin pieni levykuva",
        "apk-paketinhallinta, nopeat asennukset ja päivitykset",
        "OpenRC oletuksena, kovennettu käännös",
        "Ensisijainen valinta kontteihin, reitittimiin ja sulautettuihin järjestelmiin"
      ],
      "pros": [
        "Erittäin alhainen resurssienkulutus",
        "Pienet konttilevykuvat ja nopea käynnistys",
        "Hyvät turvalliset oletusasetukset"
      ],
      "cons": [
        "musl-yhteensopivuusongelmat",
        "Rajallinen työpöytä- ja multimediaekosysteemi",
        "Vähemmän paketteja kuin Debianissa"
      ],
      "status_note": "Aktiivisesti ylläpidetty, laajalti käytössä kontti- ja sulautetuissa ympäristöissä",
      "target_user": "Kehittäjät, jotka työskentelevät konttien, sulautettujen järjestelmien ja minimalististen palvelimien parissa",
      "release_cycle": "Uusi versio noin 6 kuukauden välein, kutakin tuetaan noin 2 vuotta"
    },
    "postmarketos": {
      "intro": "postmarketOS käynnistyi vuonna 2017 tavoitteenaan tarjota älypuhelimille pitkäaikaisesti ylläpidetty Linux-järjestelmä ja jatkaa Androidin hylkäämien laitteiden käyttöikää. Se pohjautuu Alpine Linuxiin, käyttää apk-paketinhallintaa, luo laitekohtaiset levykuvat pmbootstrapilla ja antaa käyttäjän valita Phosh-, Plasma Mobile-, Sway-, GNOME- tai muita mobiili- ja työpöytäympäristöjä. Projekti painottaa upstream-edellä-periaatetta ja device tree -kontribuutioita, ja yhteisön työ on edistänyt monen laitteen tukea päälinjan ytimessä. postmarketOS sopii kehittäjille ja harrastajille, jotka ovat valmiita asentamaan ja debuggaamaan puhelimeensa ja joille mobiilin ohjelmistovapaus on tärkeää; se soveltuu myös vanhojen puhelimien muuttamiseen pieniksi palvelimiksi, musiikkisoittimiksi tai kokeellisiksi päätteiksi. Huomattavaa on, että laitetuen kypsyys vaihtelee valtavasti: puhelut, kamera, VoLTE ja sormenjälkitunnistus voivat olla puutteellisia ja osa laitteista on yhä kokeellisia. Kaupallista tukea ei ole, joten varmuuskopioi tiedot ja lue laitteen wiki ennen päivitystä.",
      "highlights": [
        "Alpine-pohja ja apk-paketinhallinta",
        "Pidentää vanhojen puhelimien ikää kymmenen vuoden ylläpitotavoitteella",
        "Useita ympäristöjä: Phosh / Plasma Mobile / Sway",
        "pmbootstrap luo laitekohtaiset levykuvat"
      ],
      "pros": [
        "Vanhojen puhelimien uusiokäyttö on arvokasta",
        "Aktiivinen mobiilin Linuxin ekosysteemi",
        "Aktiivista ydinkehitystä upstreamiin"
      ],
      "cons": [
        "Laitetuen kypsyys vaihtelee suuresti",
        "Puhelin- ja kameratoiminnot ovat usein puutteellisia",
        "Asennuksen ja debuggaamisen korkea kynnys"
      ],
      "status_note": "Aktiivisesti ylläpidetty, tavoitteena kymmenen vuoden elinkaari puhelimille",
      "target_user": "Mobiilin Linuxin harrastajat, jotka ovat valmiita asentamaan ja debuggaamaan laitteitaan",
      "release_cycle": "Jatkuvasti rullaava; ytimet ja levykuvat ylläpidetään laitekohtaisesti"
    },
    "nixos": {
      "intro": "NixOS on Nix-paketinhallintaan perustuva deklaratiivinen Linux-jakeluversio, joka sai alkunsa Eelco Dolstran akateemisesta tutkimuksesta vuonna 2003. Järjestelmän asetukset kirjoitetaan versiohallittavaan Nix-lausekkeeseen: käyttäjä ilmoittaa haluamansa palvelut, työpöydät, käyttäjät ja ohjelmistot, ja rebuildin jälkeen järjestelmä siirtyy uuteen asetukseen; jokainen siirtymä luo uuden käynnistysmerkinnän ja vanhoihin asetuksiin voi palata. Nix-paketit sijaitsevat sisältöosoitteisessa /nix/store-hakemistossa, jossa useat versiot voivat olla rinnakkain toisiaan ylikirjoittamatta, mikä tekee siitä erityisen sopivan kehitysympäristöihin, toistettaviin käännöksiin ja monen käyttäjän järjestelmiin. NixOS sopii kehittäjille, ylläpitäjille, tutkijoille ja edistyneille käyttäjille, jotka haluavat hallita työpöytään infrastructure as code -tyyliin. Hinta on jyrkkä oppimiskäyrä: Nix-kieli, moduulijärjestelmä ja virheilmoitukset vaativat aikaa tottua, ja jotkin ei-vapaat tai paketoimattomat sovellukset edellyttävät lisäasetuksia. Virallista kaupallista versiota ei ole, mutta ekosysteemissä on kolmannen osapuolen tukea ja isännöityjä palveluita.",
      "highlights": [
        "Deklaratiivinen järjestelmäasetus versiohallinnassa",
        "Atominen vaihto ja paluu aiempaan käynnistysmerkintään",
        "Nixin sisältöosoitteinen varasto, jossa versiot ovat rinnakkain",
        "Toistettavat kehitys- ja käännösympäristöt"
      ],
      "pros": [
        "Toistettava ja palautettava järjestelmän tila",
        "Vahva eristys ja toistettavuus kehitysympäristöissä",
        "Asetukset koodina, sopii hyvin tiimityöhön"
      ],
      "cons": [
        "Nix-kielen jyrkkä oppimiskäyrä",
        "Ei-vapaat ja harvinaiset sovellukset vaativat lisäpaketointia",
        "Suuri levytilan kulutus"
      ],
      "status_note": "Aktiivisesti ylläpidetty; deklaratiivinen konfiguraatio ja atominen palautus ovat keskeisiä ominaisuuksia",
      "target_user": "Kehittäjät, jotka tavoittelevat toistettavia järjestelmiä ja deklaratiivista konfiguraatiota",
      "release_cycle": "Uusi versio 6 kuukauden välein, kutakin tuetaan noin 7 kuukautta"
    },
    "guix": {
      "intro": "Guix System on GNU-projektin deklaratiivinen jakeluversio, jonka Ludovic Courtès käynnisti vuonna 2012; se käyttää GNU Guixia paketinhallintana, GNU Shepherdia initinä ja Schemeä (Guile) asetuskielenä. Sen ajatusmaailma on sama kuin NixOSin: pakettien käännökset ovat toistettavia, järjestelmäasetukset ovat versiohallittavia ja päivitykset sekä palautukset tapahtuvat atonisesti, mutta Guix korostaa enemmän täysin vapaata ohjelmistoa, GNU-ekosysteemiä ja Schemen ohjelmoitavuutta. Myös Guixin pakettimääritelmät ovat Scheme-koodia, jota käyttäjä voi periä, muokata ja yhdistää, joten se sopii kehittäjille ja tutkijoille, jotka pitävät funktionaalisesta ohjelmoinnista ja haluavat hallita käännösprosessia syvällisesti. Se sopii vapaan ohjelmiston puolestapuhujille, Scheme/Lisp-harrastajille ja käyttäjille, jotka tarvitsevat toistettavia tutkimusympäristöjä. Huomattavaa on, että Guixin oppimiskäyrä on vielä jyrkempi kuin NixOSin, pakettien määrä on suhteellisen pieni eikä ei-vapaa laiteohjelmisto ole oletuksena käytettävissä; jotkin laitteistot ja suljetut ohjelmistot vaativat lisäasetuksia. Kaupallista versiota ei ole, ja sitä ylläpitävät GNU:n vapaaehtoiset.",
      "highlights": [
        "GNU Guix + Scheme-deklaratiivinen konfiguraatio",
        "GNU Shepherd korvaa systemdin",
        "Täysin vapaa ohjelmisto ja toistettavat käännökset",
        "Atomiset päivitykset ja palautukset"
      ],
      "pros": [
        "Ohjelmistovapaus ja toistettavuus viety pitkälle",
        "Erittäin ohjelmoitava Scheme-konfiguraatio",
        "Luotettava järjestelmän palautus"
      ],
      "cons": [
        "Erittäin jyrkkä oppimiskäyrä",
        "Vähemmän paketteja",
        "Rajallinen ei-vapaan laitteiston tuki"
      ],
      "status_note": "Aktiivisesti ylläpidetty; GNU-projektin deklaratiivinen vapaan ohjelmiston järjestelmä",
      "target_user": "Vapaan ohjelmiston puolestapuhujat ja funktionaalisen ohjelmoinnin harrastajat",
      "release_cycle": "Jatkuvasti rullaava; julkaisut tulevat epäsäännöllisin väliajoin"
    },
    "slackware": {
      "intro": "Patrick Volkerdingin vuonna 1993 julkaisema Slackware on yksi vanhimmista yhä olemassa olevista Linux-jakeluversioista. Se pitäytyy Unix-henkisessä, yksinkertaisessa ja vakaassa suunnittelussa: pkgtools ja slackpkg hallinnoivat .tgz-paketteja ilman automaattista riippuvuuksien ratkaisua, jättäen hallinnan täysin ylläpitäjälle; init käyttää perinteisiä sysvinit-skriptejä ja asetukset ovat pääosin pelkkiä tekstitiedostoja. Slackwaren ohjelmistoversiot ovat konservatiivisia ja julkaisuväli pitkä, mutta järjestelmän rakenne on selkeä ja ennustettava, joten se sopii käyttäjille, jotka ovat valmiita lukemaan dokumentaatiota, ymmärtämään riippuvuuksia ja työskentelemään perinteiseen Unix-tapaan. Sitä käytetään usein myös palvelimissa, opetuksessa ja sulautettujen järjestelmien perustana. Huomattavaa on, että Slackware ei ratkaise riippuvuuksia automaattisesti, joten kolmannen osapuolen ohjelmistot vaativat kirjastoriippuvuuksien käsittelyä käsin; virallinen varasto on pieni ja nykyaikaiset työpöytäsovellukset voivat vaatia itse kääntämistä. Kaupallista versiota ei ole; Slackwarea ylläpitävät Patrick Volkerding ja yhteisö. Tässä kartassa se kuuluu muut-jakeluiden ryhmään, koska sen sukulinja on riippumaton Archista, RH:sta, Debianista ja Ubuntusta.",
      "highlights": [
        "Yksi vanhimmista yhä olemassa olevista Linux-jakeluversioista",
        "pkgtools/slackpkg ilman automaattista riippuvuuksien ratkaisua",
        "Perinteinen sysvinit ja tekstitiedostopohjaiset asetukset",
        "Selkeä rakenne, vakaa ja ennustettava"
      ],
      "pros": [
        "Läpinäkyvä järjestelmä ja suuri hallinnan vapaus",
        "Vakaa ja hyvä Unix-hallinnon opiskeluun",
        "Omanlaisensa historia ja yhteisökulttuuri"
      ],
      "cons": [
        "Riippuvuudet on ratkaistava käsin",
        "Konservatiiviset ohjelmistoversiot ja pieni varasto",
        "Rajallinen nykyaikaisten työpöytäsovellusten tuki"
      ],
      "status_note": "Yhä ylläpidetty mutta hitaalla tahdilla; 15.0 on nykyinen vakaa versio",
      "target_user": "Edistyneet käyttäjät, jotka pitävät perinteisestä Unix-hallinnosta",
      "release_cycle": "Pitkä julkaisuväli, vakaus etusijalla"
    },
    "puppy": {
      "intro": "Barry Kaulerin vuonna 2003 luoma Puppy Linux on kevyiden live-jakeluversioiden klassikko. Levykuvat ovat yleensä vain muutaman sadan megatavun kokoisia, ja käynnistyksen jälkeen koko järjestelmä voi toimia muistissa, joten se on erittäin nopea eikä USB-tikun irrottaminen keskeytä käyttöä; sammutettaessa istunnon voi halutessaan tallentaa tiedostoon. Puppy käyttää kevyitä työpöytiä, kuten JWM/ROX, paketinhallinnasta vastaa Puppy Package Manager, ja tarjolla on useita Debian-, Ubuntu- ja Slackware-pohjaisia haaroja. Se sopii vanhoille tietokoneille, järjestelmän pelastukseen, tilapäiseen työskentelyyn ja mukaan otettavaksi järjestelmäksi sekä käyttäjille, jotka haluavat oppia, miten live-järjestelmä rakennetaan. Huomattavaa on, että Puppyn haaroja on paljon ja niiden versiot, paketinhallinta ja ylläpidon tila vaihtelevat suuresti, eikä virallinen dokumentaatio ole yhtenäistä; muistissa toimiva tila vie RAM-muistia, joten suurten tiedostojen kohdalla kannattaa seurata kapasiteettia. Kaupallista versiota ei ole; sitä ylläpitää yhteisö. Projektin aktiivisuus on vähentynyt viime vuosina, mutta Woof-CE-rakennuskehys tukee yhä uusia haaroja.",
      "highlights": [
        "Live-järjestelmä, joka voi toimia kokonaan muistissa",
        "Pienet levykuvat, nopea käynnistys, sopii pelastukseen",
        "Useita Debian/Ubuntu/Slackware-haaroja",
        "Istunto voidaan tallentaa tiedostoon"
      ],
      "pros": [
        "Erittäin alhainen resurssienkulutus",
        "Helposti mukana kulkeva ja plug and play -tyyppinen",
        "Käytännöllinen vanhoille koneille ja pelastustilanteisiin"
      ],
      "cons": [
        "Paljon haaroja ja hajallaan oleva dokumentaatio",
        "Muistitila rajoittaa suurten tiedostojen käsittelyä",
        "Rajallinen nykyaikaisten ohjelmistojen tuki"
      ],
      "status_note": "Useat yhteisön haarat ovat yhä aktiivisia, mutta versiot ja ylläpidon tila vaihtelevat paljon",
      "target_user": "Käyttäjät, jotka tarvitsevat helposti mukana kulkevan live-järjestelmän ja apua vanhojen koneiden pelastukseen",
      "release_cycle": "Eri Puppy-haarat julkaisevat itsenäisesti"
    },
    "tinycore": {
      "intro": "Robert Shingledeckerin vuonna 2008 luoma Tiny Core Linux pyrkii tarjoamaan minimaalisen mutta käyttökelpoisen graafisen Linuxin. Core-versio on vain runsaan kymmenen megatavun kokoinen ja toimii käynnistyksen jälkeen kokonaan muistissa; käyttäjä lataa laajennukset tce-varastosta tarpeen mukaan, joten järjestelmä sisältää vain todella tarvittavat osat. Se käyttää BusyBoxia, FLTK:ta ja omia pakettityökalujaan, eikä siinä ole oletuksena täyttä työpöytäympäristöä, vaan minimaalinen ikkunanhallinta ja ohjauspaneeli. Tiny Core sopii sulautettuihin laitteisiin, vanhoille tietokoneille, pelastuslevyiksi, ohuiksi asiakkaiksi ja käyttäjille, jotka haluavat ymmärtää pienimmän mahdollisen Linux-kokoonpanon. Se toimii myös oppimisvälineenä: ytimestä ja initistä kirjastoihin ja grafiikkapinoon asti jokainen kerros on käyttäjän nähtävissä. Huomattavaa on, että Tiny Core ei tavoittele valmista käyttökokemusta; selaimen, toimisto-ohjelmiston ja kiinankielisten fonttien asentaminen edellyttää laajennusten valintaa käsin, ja ohjelmistovarasto on kooltaan ja päivitystahdiltaan rajallinen. Kaupallista versiota ei ole; sitä ylläpitää pieni tiimi. Arkipäivän työpöytäkäytössä Tiny Core on enemmän kokeilualusta kuin ensisijainen valinta.",
      "highlights": [
        "Runsaan kymmenen megatavun Core-levykuva",
        "Toimii kokonaan muistissa, erittäin nopea",
        "tce-laajennukset ladataan tarpeen mukaan",
        "Minimaalinen FLTK/BusyBox-järjestelmä"
      ],
      "pros": [
        "Erittäin pieni koko ja nopea käynnistys",
        "Sopii sulautettuihin järjestelmiin ja pelastuskäyttöön",
        "Täysin läpinäkyvä järjestelmän kokoonpano"
      ],
      "cons": [
        "Niukka valmis käyttökokemus, työläs käyttöönotto",
        "Rajallinen ohjelmistovarasto",
        "Ei sovi raskaaseen arki-työpöytäkäyttöön"
      ],
      "status_note": "Aktiivisesti ylläpidetty minimalistinen jakeluversio",
      "target_user": "Sulautettujen järjestelmien kehittäjät, minimalististen järjestelmien harrastajat ja pelastustilanteet",
      "release_cycle": "Julkaistaan versioittain, päivitystahti on hidas"
    },
    "void": {
      "intro": "Juan Romero Pardinesin vuonna 2008 luoma Void Linux on itsenäisesti kehitetty rullaava jakeluversio, joka ei pohjaudu Archiin, Debianiin tai RHELiin. Se käyttää omaa XBPS-paketinhallintaansa ja runitia initinä, tarjoaa sekä glibc- että musl-libc-variantit, on kevyt ja käynnistyy nopeasti, ja siinä on sekä binääripaketteja että lähdekoodista kääntäminen (xbps-src). Voidin ohjelmistot ovat melko tuoreita, yhteisö on pieni mutta aktiivinen ja dokumentaatio selkeää, joten se sopii käyttäjille, jotka haluavat eroon systemdistä ja pitävät rullaavista päivityksistä ilman Gentoon tapaista kaiken kääntämistä. Se sopii työpöydälle, palvelimille, sulautettuihin järjestelmiin ja kontteihin, ja sitä käytetään usein kevyenä työpöytänä tai kehityskoneena. Huomattavaa on, että Voidin ohjelmistovarasto on Archia pienempi, joten osa harvinaisemmista ohjelmista on paketoitava itse; runitin tapa hallita palveluita poikkeaa systemdistä, joten vianetsintä vaatii totuttelua. Kaupallista versiota ei ole; sitä ylläpitää yhteisö. Projektissa on ollut infrastruktuuri- ja ylläpitäjämuutoksia, mutta julkaisuja tulee edelleen.",
      "highlights": [
        "Itsenäinen XBPS-paketinhallinta ja runit",
        "glibc- ja musl-variantit",
        "Rullaava julkaisu, kevyt ja nopea",
        "Binääripaketit ja lähdekoodikäännökset rinnakkain"
      ],
      "pros": [
        "Kevyt ja nopea käynnistys",
        "Ei systemdiä, yksinkertainen palveluiden hallinta",
        "Itsenäinen ekosysteemi, ei riipu suuresta upstreamista"
      ],
      "cons": [
        "Rajallinen ohjelmistovarasto",
        "runit vaatii uuden opettelua",
        "Pieni yhteisö ja rajalliset tukiresurssit"
      ],
      "status_note": "Aktiivisesti ylläpidetty, itsenäinen rullaava jakeluversio",
      "target_user": "Käyttäjät, jotka haluavat itsenäisen, kevyen ja systemdittömän rullaavan järjestelmän",
      "release_cycle": "Jatkuvasti rullaava, tarjolla glibc- ja musl-variantit"
    },
    "solus": {
      "intro": "Solus on Ikey Dohertyn vuonna 2015 käynnistämä itsenäinen rullaava jakeluversio, joka ei pohjaudu mihinkään suureen upstreamiin. Se käyttää omaa eopkg-paketinhallintaansa, Budgie-työpöytää ja Software Centeriä ja painottaa yhtenäistä työpöytäkokemusta sekä maltillista rullaavuutta: ohjelmistot ovat melko tuoreita, mutta uusimpia julkaisuja ei tavoitella sokeasti. Solusin Budgie-työpöydästä tuli myöhemmin itsenäinen Buddies of Budgie -projekti, ja Solus on edelleen sen tärkeä näytealusta. Tarjolla on GNOME-, KDE Plasma- ja MATE-versiot, ja se sopii työpöytäkäyttäjille, jotka haluavat siistin, nykyaikaisen ja rullaavan järjestelmän ilman Archin säätämistä. Huomattavaa on, että Solus on pieni itsenäinen projekti, joka on kokenut ylläpitäjämuutoksia ja infrastruktuurikatkoja, ja sekä pakettien päivitysnopeus että yhteisön koko jäävät suuria jakeluversioita pienemmiksi; myös eopkg-ekosysteemi on melko marginaalinen. Kaupallista versiota ei ole. Jos arvostat pitkäaikaista vakautta ja laajaa ohjelmistotukea, Ubuntu tai Fedora on turvallisempi valinta; jos pidät itsenäisestä työpöytäinnovaatiosta, Solus on seuraamisen arvoinen.",
      "highlights": [
        "Itsenäinen eopkg ja Budgie-työpöytä",
        "Rullaavat päivitykset melko maltillisella tahdilla",
        "Graafinen hallinta Software Centerin kautta",
        "Siisti työpöytäkokemus"
      ],
      "pros": [
        "Itsenäinen ja yhtenäisen designin työpöytäkokemus",
        "Ei-aggressiiviset rullaavat päivitykset",
        "Melko helppo asentaa ja käyttää"
      ],
      "cons": [
        "Pieni itsenäinen projekti, jatkuvuusriski",
        "Rajallinen ohjelmistovarasto",
        "Marginaalinen eopkg-ekosysteemi"
      ],
      "status_note": "Aktiivisesti ylläpidetty, itsenäinen rullaava työpöytäjakelu",
      "target_user": "Käyttäjät, jotka pitävät itsenäisistä työpöydistä ja maltillisista rullaavista päivityksistä",
      "release_cycle": "Rullaavat päivitykset, ISO-vedokset julkaistaan tarpeen mukaan"
    },
    "clear-linux": {
      "intro": "Clear Linux oli Intelin vuonna 2015 lanseeraama rullaava jakeluversio, joka suunniteltiin äärimmäisen suorituskykyoptimoinnin ja cloud native -skenaarioiden ympärille. Se käytti swupd:tä atomisiin järjestelmäpäivityksiin, toimitti oletuksena melko uudet ytimet ja kääntäjät ja viritti laajasti x86_64-käskykantoja, kirjastoja ja ajonaikaisia ympäristöjä; se erottui aikoinaan konttien, mikropalveluiden ja pilven vertailuissa. Clear Linuxissa oli stateless-suunnittelu, jossa järjestelmäasetukset on erotettu käyttäjän tiedoista ja järjestelmä voidaan päivityksessä korvata kokonaan, mikä vähentää asetusten ajautumista. Se sopi pilvialustoille, CI/CD:hen, kontti-isännille ja Intel-alustan optimointia tarvitseville palvelimille. Intel ilmoitti 21. heinäkuuta 2025 lopettavansa Clear Linux OS -projektin, joten se soveltuu nyt vain historialliseen tutkimukseen tai offline-ympäristöihin. Kaupallista tukea ei ollut ja ohjelmistoekosysteemi oli melko suppea; käyttäjille, jotka tarvitsevat muuttumattomia pilvilevykuvia, Flatcar ja Fedora CoreOS ovat realistisempia vaihtoehtoja.",
      "highlights": [
        "swupd-atomipäivitykset ja stateless-suunnittelu",
        "Syvä suorituskykyoptimointi Intel-alustoille",
        "Vahva menestys cloud native-ympäristöissä ja konteissa",
        "Projekti lopetettu heinäkuussa 2025"
      ],
      "pros": [
        "Voimakas suorituskykyoptimointi ja hyvät vertailutulokset",
        "Atomipäivitykset vähentävät asetusten ajautumista",
        "Sopii pilvi- ja kontti-isänniksi"
      ],
      "cons": [
        "Lopetettu, ei tietoturvapäivityksiä",
        "Suppea ohjelmistoekosysteemi",
        "Vain x86_64"
      ],
      "status_note": "Intel lopetti Clear Linux OS -projektin 21.7.2025",
      "target_user": "Sopii vain historialliseen tutkimukseen, arkistointiin ja vaihtoehtojen arviointiin",
      "release_cycle": "Lopetettu; oli aiemmin Intelin rullaava optimoitu jakeluversio"
    },
    "mageia": {
      "intro": "Mageia on itsenäinen jakeluversio, jonka käynnistivät Mandrivan entiset työntekijät ja yhteisön vapaaehtoiset vuonna 2010 ja jonka ensimmäinen versio julkaistiin 2011. Se jatkaa Mandrivan rpm-perinnettä ja Mageia Control Center -grafiikkatyökalua. Se käyttää dnf/urpmi-työkaluja ja tarjoaa KDE Plasma-, GNOME-, Xfce- ja LXQt-työpöydät; oletusasetukset ovat aloittelijaystävällisiä ja asennusohjelma sekä laitteistontunnistus melko kattavia. Mageia julkaisee uuden version noin vuoden välein ja tukee kutakin noin 18 kuukautta, joten se sopii työpöytäkäyttäjille ja pienille palvelimille. Se jakaa Mandriva-taustan OpenMandrivan kanssa, mutta hallinto ja paketointi eroavat: Mageia painottaa yhteisön vakaita julkaisuja, kun taas OpenMandriva kokeilee uutta teknologiaa innokkaammin. Mageia sopii käyttäjille, jotka haluavat itsenäisen, eurooppalaisen yhteisön taustalla olevan ja helposti käyttöön otettavan rpm-työpöytäjakelun. Huomattavaa on, että sen ohjelmistovarasto ja kansainvälinen yhteisö ovat rajallisia, joidenkin uusien laiteajurien tuki voi tulla jäljessä ja kiinankielistä aineistoa on suhteellisen vähän. Kaupallista versiota ei ole; sitä ylläpitää voittoa tavoittelematon yhdistys.",
      "highlights": [
        "Mandrivan yhteisöperillinen",
        "Mageia Control Center -graafinen hallinta",
        "Useita työpöytiä: KDE/GNOME/Xfce/LXQt",
        "Suurista valmistajista riippumaton rpm-jakelu"
      ],
      "pros": [
        "Helppokäyttöinen valmiina ja kattavat työkalut",
        "Itsenäinen yhteisöhallinto",
        "Monipuolinen työpöytävalikoima"
      ],
      "cons": [
        "Rajallinen yhteisö ja ohjelmistovarasto",
        "Melko konservatiiviset ohjelmistoversiot",
        "Vähän kiinankielistä aineistoa"
      ],
      "status_note": "Aktiivisesti ylläpidetty, yhteisön vetämä Mandrivan seuraaja",
      "target_user": "Käyttäjät, jotka suosivat itsenäistä eurooppalaisen yhteisön rpm-työpöytää",
      "release_cycle": "Noin yksi pääversio vuodessa, tuettu noin 18 kuukautta"
    },
    "openmandriva": {
      "intro": "OpenMandriva Lx on jakeluversio, jota yhteisö jatkoi vuosina 2012–2013 Mandrivan lopetettua. Se käyttää rpmiä ja dnf:ää, oletustyöpöytä on KDE Plasma ja tarjolla on myös GNOME- ja LXQt-versiot. Siitä on kiinteäversioinen Lx ja rullaava ROME: ROME seuraa upstreamia tiiviimmin ja sopii käyttäjille, jotka haluavat uusia ohjelmistoja jatkuvasti, kun taas Lx julkaistaan versioittain ja sopii vakautta arvostavalle työpöydälle. OpenMandrivan erityispiirteitä ovat KDE:n tiivis seuraaminen, melko tuoreet kääntäjät ja työkaluketjut sekä kokeilut uusilla arkkitehtuureilla, kuten RISC-V:llä. Se sopii käyttäjille, jotka pitävät Mandriva-perinnöstä, ovat valmiita liittymään pieneen yhteisöön ja haluavat KDE-vetoisen kokemuksen. Huomattavaa on, että OpenMandrivan yhteisö on kooltaan rajallinen, ohjelmistovarasto ja dokumentaatio eivät ole yhtä kattavia kuin Mageialla ja ROMEn rullaavat päivitykset voivat edellyttää tiedotteiden seuraamista. Kaupallista versiota ei ole; sitä ylläpitää voittoa tavoittelematon yhdistys. Useimmille käyttäjille Mageia tai openSUSE voi olla turvallisempi valinta.",
      "highlights": [
        "Yksi Mandrivan yhteisöperillisistä",
        "KDE Plasma etusijalla ja rullaava ROME-haara",
        "Kokeiluja uusilla arkkitehtuureilla, kuten RISC-V:llä",
        "dnf/rpm-työkaluketju"
      ],
      "pros": [
        "KDE-kokemus seuraa tiiviisti upstreamia",
        "Valittavana rullaava tai kiinteä versio",
        "Pieni mutta avoin yhteisö"
      ],
      "cons": [
        "Rajallinen ohjelmistovarasto ja dokumentaatio",
        "Rullaava haara edellyttää tiedotteiden seuraamista",
        "Pieni kansainvälinen yhteisö"
      ],
      "status_note": "Aktiivisesti ylläpidetty; tarjolla rullaava ROME ja kiinteä Lx",
      "target_user": "Työpöytäkäyttäjät, jotka pitävät Mandriva-perinnöstä ja KDE-vetoisuudesta",
      "release_cycle": "ROME-rullaava haara sekä säännölliset Lx-versiot"
    },
    "pclinuxos": {
      "intro": "PCLinuxOS:n loi Bill Reynolds (Texstar) vuonna 2003. Se perustui alun perin Mandrakeen ja kehittyi myöhemmin itsenäiseksi vieriväksi julkaisuksi. Se käyttää apt-rpm:ää ja Synapticia rpm-pakettien hallintaan, ja sen käyttöliittymä on perinteinen ja asetukset suoraviivaisia. Oletustyöpöytä on KDE Plasma, ja tarjolla on myös MATE- ja Xfce-versioita. PCLinuxOS on pitkään kieltäytynyt ottamasta systemd:tä käyttöön ja käyttää sen sijaan sysvinitiä, mikä vetoaakin moniin perinteistä initiä suosiviin käyttäjiin. Ohjelmistoversiot ovat melko tuoreita, ja asennuskuvat tarjoavat täyden työpöytä- ja multimediätuen, joten se sopii hyvin Windowsista siirtyville työpöytäkäyttäjille, jotka pitävät KDE:stä ja Synapticista eivätkä halua systemd:tä. Huomattavaa on, että PCLinuxOS on pieni yhteisöhanke: ohjelmistovarastot ovat rajallisia ja joidenkin uusien laitteiden ja harvinaisempien ohjelmien tuki on heikkoa; tietoturvapäivitykset ovat vapaaehtoisten varassa, joten yritysten kannattaa arvioida sitä huolellisesti. Kaupallista versiota ei tarjota, ja sitä ylläpitää yhteisö.",
      "highlights": [
        "Ainutlaatuinen apt-rpm:n ja Synapticin yhdistelmä",
        "KDE Plasma oletuksena ja täysi työpöytä",
        "Pysyy sysvinitissä eikä käytä systemd:tä",
        "Vierivä julkaisu työpöytäkäyttäjille"
      ],
      "pros": [
        "Synaptic on ystävällinen muualta siirtyville käyttäjille",
        "Ei systemd:tä, mikä vastaa joidenkin käyttäjien mieltymyksiä",
        "Työpöytä on täydellinen heti asennuksen jälkeen"
      ],
      "cons": [
        "Varastot ovat kooltaan rajallisia",
        "Pieni yhteisö, tietoturvapäivitykset vapaaehtoisten varassa",
        "Uusien laitteiden tuki voi tulla jäljessä"
      ],
      "status_note": "Aktiivisesti ylläpidetty; itsenäinen vierivä työpöytäjulkaisu",
      "target_user": "Työpöytäkäyttäjät, jotka pitävät KDE:stä, Synapticista ja sysvinitistä",
      "release_cycle": "Jatkuvasti vierivä, ISO-kuvat päivitetään säännöllisesti"
    },
    "kaos": {
      "intro": "KaOS on vuonna 2013 ilmestynyt itsenäinen vierivä julkaisu, jonka tavoite on hyvin keskittynyt: rakentaa puhdas ja moderni työpöytäjärjestelmä KDE Plasman ympärille. Vaikka se käyttää pacmania, se ei ole Archin johdannainen, vaan ylläpitää omia varastojaan ja paketoi vain Qt/KDE:n ja valikoidut sovellukset, minkä vuoksi varastot ovat pienempiä ja riippuvuudet hallittavampia. KaOS käyttää oletuksena KDE Plasmaa yhdessä SDDM:n, Octopin ja yhtenäisen visuaalisen ilmeen kanssa, joten järjestelmä käynnistyy nopeasti ja esiasennettua sisältöä on vähän. Se sopii käyttäjille, jotka pitävät Plasmasta ja haluavat vieriviä päivityksiä kohtaamatta Archin koko varaston monimutkaisuutta, sekä KDE-harrastajille, jotka haluavat pitää järjestelmän kevyenä. Huomattavaa on, että KaOS:n ohjelmistovalikoima on rajallinen, joten muut kuin KDE-sovellukset voivat vaatia Flatpakin tai itse kääntämistä; pienen tiimin ylläpitämänä päivitystahti ja tietoturvavasteet eivät ole suurten jakelujen tasolla. Kaupallista versiota ei tarjota. Jos tarvitset laajaa ohjelmistoyhteensopivuutta, Arch tai openSUSE Tumbleweed sopivat paremmin.",
      "highlights": [
        "Rakennettu vain KDE Plasman ympärille",
        "Itsenäiset pacman-varastot, ei Archin johdannainen",
        "Puhdas ja kevyt oletusjärjestelmä",
        "Octopi graafiseen paketinhallintaan"
      ],
      "pros": [
        "Puhdas ja yhtenäinen Plasma-kokemus",
        "Kevyt järjestelmä ja hallittavat riippuvuudet",
        "Vierivät päivitykset"
      ],
      "cons": [
        "Ohjelmistovarastot ovat kapeat",
        "Pienen tiimin ylläpitämä",
        "Muut kuin KDE-sovellukset vaativat lisäratkaisuja"
      ],
      "status_note": "Aktiivisesti ylläpidetty; KDE Plasmaan keskittyvä itsenäinen julkaisu",
      "target_user": "KDE Plasmaan keskittyvät kevyen työpöydän käyttäjät",
      "release_cycle": "Jatkuvasti vierivä, ISO-kuvat päivitetään säännöllisesti"
    },
    "qubes": {
      "intro": "Qubes OS:n käynnisti Joanna Rutkowska vuonna 2012, ja se on tietoturvaeristykseen keskittyvä työpöytäkäyttöjärjestelmä. Se jakaa eri käyttötarkoitukset erillisiin virtuaalikoneisiin (qubeihin) – esimerkiksi työlle, henkilökohtaiseen käyttöön, pankkiasioille ja epäluotettujen verkkosivujen selailuun on kullakin oma virtuaalikone – jotka on eristetty toisistaan Xen-virtualisoinnin avulla; vaikka jokin sovellus kaapattaisiin, sen on vaikea vaikuttaa suoraan muihin qubeihin tai taustalla olevaan dom0:aan. Qubesin dom0 perustuu yleensä Fedoraan, ja sovellus-VM:t voivat käyttää Fedoran, Debianin ja muiden jakelujen malleja; mukana on työkaluja kuten Qubes Update, Qubes Manager ja turvallinen tietojen kopiointi domeenien välillä. Se sopii toimittajille, tutkijoille, tietoturva-alan ammattilaisille ja korkean riskin kohteille sekä kaikille, jotka tarvitsevat tiukkaa erottelua eri identiteettien ja tietojen välillä. Hinta on korkeat laitevaatimukset, monimutkainen määritys sekä tavallista työpöytää heikompi grafiikkasuorituskyky ja mukavuus; joidenkin oheislaitteiden ja lepotilan tuki on rajallinen. Qubes ei tarjoa kaupallista versiota, vaan se nojaa lahjoituksiin ja yhteisön ylläpitoon.",
      "highlights": [
        "Xen-virtualisointi vahvasti eristettyihin tietoturvavyöhykkeisiin",
        "dom0 erotettu useista sovellus-VM:istä",
        "Malleihin perustuvat järjestelmät ja keskitetyt päivitykset",
        "Suunnattu korkean riskin uhkamalleihin"
      ],
      "pros": [
        "Eristys on selvästi tavallista työpöytää vahvempi",
        "Sopii arkaluonteisen ja epäluotettavan sisällön käsittelyyn",
        "Aktiivinen tietoturvayhteisö"
      ],
      "cons": [
        "Korkeat laitevaatimukset ja monimutkainen määritys",
        "Rajoitettu grafiikkasuorituskyky ja oheislaitetuki",
        "Vähemmän kätevä jokapäiväisessä käytössä"
      ],
      "status_note": "Aktiivisesti ylläpidetty, keskiössä tietoturvaeristys",
      "target_user": "Korkean riskin kohteet ja tietoturva-ammattilaiset, jotka tarvitsevat vahvaa eristystä",
      "release_cycle": "Julkaistaan pääversioina, tietoturvapäivityksiä tarjolla"
    },
    "openwrt": {
      "intro": "OpenWrt sai alkunsa vuonna 2004 alun perin hankkeena, jolla laajennettiin Linksys-reitittimien laiteohjelmistoa, ja siitä on tullut yksi kypsimmistä avoimen lähdekoodin järjestelmistä reitittimille ja sulautetuille verkkolaitteille. Se tarjoaa kirjoitettavan tiedostojärjestelmän ja paketinhallinnan (opkg, ja uudemmat versiot ottavat vähitellen käyttöön apk:n), joten käyttäjät voivat asentaa VPN-, palomuuri-, QoS-, AdGuard-, mesh- ja Docker-komponentteja ja muuttaa kotireitittimen ohjelmoitavaksi verkkosolmuksi. OpenWrt käyttää procd-init-järjestelmää ja yhtenäistä UCI-määritystä, ja LuCI tarjoaa verkkopohjaisen hallintaliittymän; se tukee suurta joukkoa reitittimiä, yhden piirilevyn tietokoneita ja x86-laitteita, ja kevyitä laiteohjelmistoja voi koota tarpeen mukaan. Se sopii käyttäjille, jotka haluavat hallita kotiverkkoaan tai rakentaa sivureitittimen, ohjelmistoreitittimen, IoT-yhdyskäytävän tai laboratorioympäristön. Huomattavaa on, että laitetuki vaihtelee suuresti ja laiteohjelmiston asentaminen voi tehdä laitteesta käyttökelvottoman; myös asetusten yhteensopivuus kannattaa tarkistaa pääversioita päivitettäessä. OpenWrt ei tarjoa kaupallista versiota, ja sitä ylläpitää yhteisö.",
      "highlights": [
        "Reititinjärjestelmä, johon voi asentaa ohjelmistopaketteja",
        "LuCI-verkkohallinta ja UCI-määritys",
        "VPN-, palomuuri-, QoS- ja mesh-laajennukset",
        "Kattaa suuren joukon reitittimiä ja sulautettuja laitteita"
      ],
      "pros": [
        "Tehokkaat ja ohjelmoitavat verkkotoiminnot",
        "Laaja laitetuki ja aktiivinen yhteisö",
        "Kevyt laiteohjelmisto koottavissa tarpeen mukaan"
      ],
      "cons": [
        "Laiteohjelmiston asentamiseen liittyy riskejä",
        "Laitetuen laatu vaihtelee",
        "Määritys ja vianetsintä vaativat osaamista"
      ],
      "status_note": "Aktiivisesti ylläpidetty; yksi reitittimien ja sulautetun verkon de facto -standardeista",
      "target_user": "Edistyneet käyttäjät, jotka haluavat hallita koti- tai laboratorioverkkoaan",
      "release_cycle": "Noin yksi versio vuodessa, pisteversioina tietoturvapäivityksiä"
    },
    "truenas-scale": {
      "intro": "TrueNAS SCALE on iXsystemsin vuonna 2022 esittelemä NAS- ja hyperkonvergoitu järjestelmä. Se perustuu Debianiin ja käyttää tallennuksen ytimenä ZFS:ää, ja sen verkkokäyttöliittymästä hallitaan tallennuspoolit, tilannevedokset, replikointi, SMB/NFS/iSCSI-jaot ja virtuaalikoneet. Toisin kuin aiempi FreeBSD-pohjainen TrueNAS CORE, SCALE käyttää Linux-ydintä ja tukee Docker/Kubernetes-sovelluksia, kontteja ja laajempaa valikoimaa laiteajureita, joten se sopii paremmin kotilaboratorioihin, mediaservereihin ja pienten ja keskisuurten yritysten yhtenäiseen tallennukseen. Tarjolla on ilmainen yhteisöversio ja maksullinen yritysversio, johon sisältyvät tuki, klusterointi ja edistyneet ominaisuudet. TrueNAS SCALE sopii käyttäjille, jotka ovat valmiita käyttämään aikaa ZFS-tallennuksen suunnitteluun ja tarvitsevat tilannevedoksia, replikointia ja tietojen eheyttä. Huomattavaa on, että ZFS:llä on muisti- ja levyvaatimuksia ja sovellus- ja VM-ominaisuudet voivat muuttua versioiden välillä; tuotantoympäristöissä kannattaa käyttää ECC-muistia ja huolehtia varmuuskopioista. Se ei ole yleiskäyttöinen työpöytäjakelu.",
      "highlights": [
        "ZFS-tallennus, tilannevedokset ja replikointi",
        "Verkkokäyttöliittymä jakojen ja virtuaalikoneiden hallintaan",
        "Debian-pohja laajempaan kontti- ja ajuritukeen",
        "Ilmainen yhteisöversio ja yritysversio"
      ],
      "pros": [
        "Ammattimaiset tallennusominaisuudet ja korkea tietojen eheys",
        "Helppokäyttöinen verkkohallinta",
        "Vahvat sovellus- ja virtualisointiominaisuudet"
      ],
      "cons": [
        "ZFS:llä on melko korkeat laitevaatimukset",
        "Versiopäivityksissä on oltava huolellinen",
        "Ei yleiskäyttöinen työpöytäjärjestelmä"
      ],
      "status_note": "Aktiivisesti ylläpidetty; iXsystemsin NAS- ja hyperkonvergoitu järjestelmä",
      "target_user": "Kotilaboratorioiden ja pk-yritysten NAS- ja tallennuskäyttäjät",
      "release_cycle": "Noin yksi versio vuodessa, mukana yritystason päivityskanava"
    },
    "libreelec": {
      "intro": "LibreELEC on vuonna 2016 OpenELECistä haarautunut mediakeskusjärjestelmä, jolla on yksi tavoite: ajaa Kodia televisiobokseissa, Raspberry Pi -laitteissa, minitietokoneissa ja vanhoissa tietokoneissa mahdollisimman vakaasti ja kevyesti. Buildrootiin perustuvana sen kuvat ovat pieniä ja käynnistyvät nopeasti, ja oletuksena järjestelmä käynnistyy suoraan Kodiin. Se tukee 4K/HDR:ää, laitteistopurua, kaukosäätimiä ja CEC:tä. LibreELEC tekee järjestelmäpäivitykset asetusliittymän kautta, ja liitännäisvarasto tarjoaa PVR-, suoratoisto- ja teemalaajennuksia; siinä ei ole yleiskäyttöistä työpöytäympäristöä, eikä se sovellu toimisto- tai palvelinkäyttöön. Se sopii kotiteatteriin, olohuoneen televisioon, vanhan laitteiston uudelleenkäyttöön ja HTPC-käyttäjille. Huomattavaa on, että käyttäjän on itse arvioitava liitännäisympäristö ja tekijänoikeuksien noudattaminen; laitteistopurun tuki vaihtelee huomattavasti laitteittain, ja jotkin uudemmat formaatit voivat vaatia ytimen päivityksen tai toisen laitteen. LibreELEC ei tarjoa kaupallista versiota, ja sitä ylläpitää yhteisö.",
      "highlights": [
        "Erittäin kevyt järjestelmä, joka käynnistyy suoraan Kodiin",
        "Tukee 4K/HDR:ää ja laitteistopurua",
        "Raspberry Pi, televisioboksit ja minitietokoneet",
        "Järjestelmä- ja liitännäispäivitykset keskitetysti"
      ],
      "pros": [
        "Puhdas HTPC-kokemus ja nopea käynnistys",
        "Hyvä laitteistopurun tuki",
        "Helppo ylläpitää"
      ],
      "cons": [
        "Ei sovellu yleiskäyttöiseksi työpöydäksi",
        "Laitteiden purkukyky vaihtelee suuresti",
        "Liitännäisympäristö on arvioitava itse"
      ],
      "status_note": "Aktiivisesti ylläpidetty, keskittyy Kodi-mediakeskukseen",
      "target_user": "Kotiteatterin ja Kodi-mediakeskuksen käyttäjät",
      "release_cycle": "Julkaistaan Kodi-versioiden tahtiin, pisteversiopäivityksiä"
    },
    "batocera": {
      "intro": "Batocera.linux on vuonna 2018 ilmestynyt retropeleihin ja emulaattoreihin keskittyvä järjestelmä. Buildrootiin perustuvana se käynnistyy suoraan EmulationStation-käyttöliittymään, joten käyttäjän tarvitsee vain lisätä ROM-tiedostot, ja pelejä voi selata ja käynnistää alustan mukaan. Mukana tulee suuri joukko emulaattoriytimiä, ja se tukee ohjaimia, Bluetoothia, verkkojakoja, tietojen hakua verkosta, tallennuksia ja moninpeliä, ja se toimii x86_64-, Raspberry Pi-, Odroid- ja käsikonsolilaitteissa. Batocera päivittyy kokonaisina kuvina ja määritys on melko yksinkertaista, joten se sopii hyvin vanhan tietokoneen tai yhden piirilevyn tietokoneen muuttamiseen olohuoneen retrokonsoliksi. Se sopii nostalgisille pelaajille, emulaattoriharrastajille, arcade-kaappien rakentajille ja käsikonsolien muokkaajille. Huomattavaa on, että ROM- ja BIOS-tiedostojen tekijänoikeudet kuuluvat oikeudenhaltijoilleen ja käyttäjän on varmistettava laillinen käyttö; emuloinnin tarkkuus ja suorituskyky vaihtelevat huomattavasti alustoittain, ja joidenkin uudempien konsolien emulointi on vielä kehittymätöntä. Batocera ei tarjoa kaupallista versiota, ja sitä ylläpitää yhteisö.",
      "highlights": [
        "Valmis EmulationStation-pelikäyttöliittymä",
        "Paljon emulaattoriytimiä ja ohjaintuki",
        "Vanhat tietokoneet, Raspberry Pi ja käsikonsolit",
        "Verkkojaot, tietojen haku ja tallennusten hallinta"
      ],
      "pros": [
        "Kattava retropelikokemus",
        "Yksinkertainen määritys ja laaja laitetuki",
        "Aktiivinen yhteisö"
      ],
      "cons": [
        "ROM- ja BIOS-tekijänoikeuksista vastaa käyttäjä",
        "Emuloinnin tarkkuus vaihtelee alustoittain",
        "Ei sovellu yleiskäyttöön"
      ],
      "status_note": "Aktiivisesti ylläpidetty; retropeleihin ja emulaattoreihin keskittyvä järjestelmä",
      "target_user": "Retropelaajat ja olohuoneen pelikonsolien muokkaajat",
      "release_cycle": "Julkaistaan versioittain, päivitykset ovat melko tiheitä"
    },
    "android": {
      "intro": "Android Open Source Project (AOSP) on Googlen johtama mobiilikäyttöjärjestelmä, joka julkaistiin vuonna 2008 ensimmäisen Android-puhelimen mukana. Sen pohjalla on Linux-ydin ja sen päällä Java/Kotlin-sovelluskehys, ART-ajoympäristö, Binder IPC ja järjestelmäpalvelut. AOSP itsessään on avointa Apache-2.0:n ja muiden lisenssien alaisena, ja laitevalmistajat voivat mukauttaa sitä vapaasti; markkinoiden useimpiin puhelimiin on kuitenkin lisätty Google Mobile Services, valmistajan käyttöliittymä ja suljetut ajurit, joten ”avoin Android” ja ”puhelimesi Android” eivät ole sama asia. AOSP sopii puhelinvalmistajille, ROM-kehittäjille, sulautettujen laitteiden valmistajille ja kaikille, jotka haluavat tutkia mobiilijärjestelmää; tavalliset käyttäjät kohtaavat sen yleensä Pixelin, Samsungin, Xiaomin ja muiden valmistajien julkaisujen kautta. Huomattavaa on, että AOSP ei sisällä Google Play -palveluita, joten tavallinen käyttäjä menettää asentaessaan puhdasta AOSP:tä push-ilmoitukset, maksut ja osan sovelluksista; suljetut laiteytimet ja ajurit vaikeuttavat myös pitkäaikaisia päivityksiä. Tässä kartastossa se on listattu muihin perheisiin mobiili- ja sulautettujen laitteiden edustajana.",
      "highlights": [
        "Linux-ydin ja Android-sovelluskehys",
        "AOSP on avointa lähdekoodia ja mukautettavissa",
        "APK-sovellusekosysteemi ja ART-ajoympäristö",
        "Kattaa puhelimet, tabletit, televisiot, autot ja sulautetut laitteet"
      ],
      "pros": [
        "Erittäin laaja mobiiliekosysteemi ja laitepohja",
        "AOSP:tä voi mukauttaa vapaasti",
        "Kypsät sovellukset ja kehitystyökalut"
      ],
      "cons": [
        "Todelliset laitteet sisältävät paljon suljettuja komponentteja",
        "Pitkäaikaiset päivitykset riippuvat valmistajista",
        "Puhtaasta AOSP:stä puuttuvat Google-palvelut"
      ],
      "status_note": "AOSP päivittyy jatkuvasti; todellisten laitteiden tuki riippuu piiristä ja valmistajasta",
      "target_user": "Mobiililaitevalmistajat, ROM-kehittäjät ja sulautettujen laitteiden valmistajat",
      "release_cycle": "Yksi pääversio vuodessa; valmistajat ja laitteet määräävät todelliset päivitykset"
    },
    "openkylin": {
      "intro": "openKylin on vuonna 2022 Kylin Softin kaltaisten kiinalaisten valmistajien ja yhteisön käynnistämä työpöytäkäyttöjärjestelmäyhteisö, jonka tavoitteena on rakentaa avoin ja hallittava Linux-työpöytäekosysteemi. Se käyttää UKUI-työpöytäympäristöä ja perustuu Linux-ytimeen sekä deb/apt-pakettijärjestelmään, ja se tukee kiinalaisia laitteistoarkkitehtuureja, kuten x86_64, ARM64, RISC-V ja LoongArch, ja siinä on lokalisointi kiinalaiseen syöttöön, toimistotyöhön, mediaan ja oheislaitteisiin. openKylin liittyy kaupallisen Kylin-julkaisun ekosysteemiin, mutta yhteisöversio julkaistaan erikseen. Se sopii käyttäjille ja organisaatioille, jotka tarvitsevat kotimaista työpöytää, kiinankielistä ympäristöä ja moniarkkitehtuuritukea, sekä kehittäjille, jotka seuraavat RISC-V/LoongArch-työpöytäekosysteemiä. Huomattavaa on, että openKylinin ohjelmistovarastot ovat vielä jäljessä kansainvälisistä valtajakeluista ja osa ammattiohjelmistoista vaatii sovitusta; myös yhteisöversion päivitystahti ja kaupallisen version tukilaajuus eroavat toisistaan. Se ei vastaa suoraan kaupallista Kylin-julkaisua, joten valinnassa kannattaa varmistaa tarkat versiot ja tukikäytännöt.",
      "highlights": [
        "UKUI-työpöytä ja kiinankielinen lokalisointi",
        "Tukee x86-, ARM-, RISC-V- ja LoongArch-arkkitehtuureja",
        "OpenAtom-säätiön inkuboima",
        "Kytkeytyy kaupalliseen Kylin-ekosysteemiin"
      ],
      "pros": [
        "Aktiivinen kotimaisen laitteiston ja kiinankielisen ympäristön sovitus",
        "Johtava moniarkkitehtuurituki",
        "Kattava työpöydän lokalisointi"
      ],
      "cons": [
        "Kansainvälinen ohjelmistoekosysteemi on rajallinen",
        "Yhteisöversion tukilaajuus on rajallinen",
        "Suhde kaupalliseen versioon on selvitettävä"
      ],
      "status_note": "Aktiivisesti ylläpidetty; OpenAtom-säätiön inkubointihanke",
      "target_user": "Organisaatiot ja kehittäjät, jotka tarvitsevat kotimaisen kiinankielisen työpöydän",
      "release_cycle": "Julkaistaan yhteisöversioina; kaupallisen version tarjoaa Kylin Soft"
    },
    "uos": {
      "intro": "UnionTech UOS on UnionTech Softwaren vuonna 2019 lanseeraama kiinalainen kaupallinen käyttöjärjestelmä, joka on suunnattu julkishallinnon, rahoituksen, koulutuksen, energian ja muiden alojen työpöytä- ja palvelinkäyttöön. Se jatkaa deepin/DDE:n teknistä perintöä ja käyttää apt/dpkg:ta sekä omaa sovelluskauppaa, ja se tarjoaa kiinalaisen syötön, toimisto-ohjelmiston, oheislaitesovituksen ja keskitetyn hallinnan sekä tukee muun muassa x86_64-, ARM64-, LoongArch- ja RISC-V-arkkitehtuureja. UOS:stä on Professional-, Server- ja Education-versiot, ja se vaatii yleensä lisenssin ja teknisen tuen sopimuksen; yksityiskäyttäjät voivat kokea vastaavan työpöydän yhteisöversion tai deepinin kautta. Se sopii organisaatioille, jotka tarvitsevat kotimaista korvaavaa ratkaisua, paikallisia palveluita ja vaatimustenmukaisuustukea. Huomattavaa on, että UOS on kaupallinen jakelu, jonka lähdekoodi ja päivityskäytännöt eivät ole täysin julkisia; sen ohjelmistoekosysteemi keskittyy kiinalaisten sovellusten sovittamiseen ja kansainvälisten ammattiohjelmistojen tuki on rajallinen. Toisin kuin openKylinin yhteisölinja, UOS korostaa yritystoimitusta ja tukea. Valinnassa kannattaa selvittää versio, lisenssien laajuus ja laitteistoyhteensopivuus.",
      "highlights": [
        "Julkishallinnolle ja yrityksille suunnattu kotimainen kaupallinen jakelu",
        "Mukautettu DDE-työpöytä ja kiinalainen toimistoekosysteemi",
        "Tuki moniarkkitehtuuriselle kotimaiselle laitteistolle",
        "Keskitetty hallinta ja kaupallinen tuki"
      ],
      "pros": [
        "Kehittynyt lokalisointi sekä julkishallinnon ja yritysten tuki",
        "Aktiivinen kotimaisen laitteiston sovitus",
        "Selkeät kaupalliset palvelut"
      ],
      "cons": [
        "Vaatii lisenssin ja on avoimuudeltaan rajallinen",
        "Kansainvälinen ohjelmistoekosysteemi on heikompi",
        "Versio- ja tukikäytännöt on varmistettava erikseen"
      ],
      "status_note": "Kaupallinen jakelu; tarkat versiot ja elinkaaret UnionTechin ilmoittamien mukaan",
      "target_user": "Julkishallinnon ja yritysten käyttäjät, jotka tarvitsevat kotimaista korvaavaa ratkaisua ja kaupallista tukea",
      "release_cycle": "Julkaistaan Professional- ja Server-sykleillä, kaupallinen tuki mukana"
    },
    "flatcar": {
      "intro": "Flatcar Container Linux on vuonna 2018 CoreOS Container Linuxista haarautunut kontteihin optimoitu käyttöjärjestelmä. Kun Red Hat osti CoreOSin ja ohjasi sen Fedora CoreOS:ään, Flatcar otti haltuunsa linjan ”muuttumaton, automaattisesti päivittyvä ja kontteja varten rakennettu”. Siinä ei ole perinteistä paketinhallintaa: järjestelmäkuva päivitetään atomisesti update_enginen kautta, käyttäjä tekee määritykset ensimmäisellä käynnistyksellä Ignitionin avulla ja sovellukset ajetaan kontteina. Flatcar tukee x86_64- ja aarch64-arkkitehtuureja ja tarjoaa pilvikuvia, ISO:n ja PXE-käynnistyksen, joten se sopii Kubernetes-solmuihin, kontti-isäntiin ja reunalaitteiden. Se sopii deklaratiiviseen määritykseen tottuneille ylläpito- ja alustatiimeille, jotka haluavat vähentää järjestelmän ajautumista. Huomattavaa on, että Flatcar ei tarjoa yleiskäyttöistä työpöytää ja vianetsintä vaatii tottumista vain luku -juuriosioon ja konttipohjaisiin työkaluihin; automaattiset päivityskanavat kannattaa sovittaa huoltoikkunoihin. Se tarjoaa ilmaisen version ja kaupallista tukea, sitä ylläpitää Microsoftin sponsoroima Kinvolk-tiimi, ja se säilyttää avoimen lähdekoodin hallinnon.",
      "highlights": [
        "CoreOSin yhteisöllinen perillinen",
        "Muuttumaton järjestelmä ja atomiset automaattipäivitykset",
        "Deklaratiivinen ensikäynnistyksen määritys Ignitionilla",
        "Suunniteltu kontteihin ja Kubernetes-solmuihin"
      ],
      "pros": [
        "Vähän järjestelmän ajautumista, sopii suuriin solmumääriin",
        "Luotettavat automaattipäivitykset ja palautus",
        "Pilvikuvat ja moniarkkitehtuurituki"
      ],
      "cons": [
        "Ei sovellu yleiskäyttöiseksi työpöydäksi",
        "Vianetsintä vaatii vain luku -järjestelmään tottumista",
        "Automaattipäivitykset vaativat huoltoikkunoiden suunnittelua"
      ],
      "status_note": "Aktiivisesti ylläpidetty; CoreOSin henkinen seuraaja",
      "target_user": "Kontteja ja Kubernetesia ajavat alustaylläpidon tiimit",
      "release_cycle": "Jatkuvasti vierivä, julkaistaan päivityskanavien kautta"
    },
    "sailfish": {
      "intro": "Sailfish OS:n toi markkinoille Jolla vuonna 2013, ja se polveutuu MeeGo/Mer-hankkeesta. Se on eleohjaukseen ja yksityisyyteen keskittyvä mobiili Linux-järjestelmä. Se käyttää rpm/zypper-paketinhallintaa, systemd:tä ja Waylandia, ja sen käyttöliittymä korostaa pyyhkäisynavigointia, moniajon kortteja ja käyttöä ilman fyysisiä painikkeita; osa versioista tukee Android-sovelluksia Alien Dalvikin kautta, mutta ydin on edelleen Linux ja Qt. Sailfish on suunnattu pääasiassa Jollan omiin laitteisiin, lisenssivalmistajille ja osalle Sony Xperia -porttausyhteisöä, ja se sopii käyttäjille, jotka haluavat irtautua Google-palveluista ja arvostavat yksityisyyttä ja eurooppalaista avoimen lähdekoodin ekosysteemiä. Huomattavaa on, että Sailfish on ”osittain avointa lähdekoodia”: monet järjestelmäkomponentit ovat saatavilla, mutta käyttöliittymä ja osa kaupallisista komponenteista ovat suljettuja; laitetuki on kapea ja sovellusekosysteemi on selvästi Androidia ja iOS:ää pienempi, joten jokapäiväinen käyttö vaatii kompromisseja. Se tarjotaan kaupallisten lisenssien ja laitteiden kautta, ei täysin ilmaisena jakeluna.",
      "highlights": [
        "MeeGo/Mer-perintöä jatkava eleohjattu mobiilijärjestelmä",
        "rpm/zypper ja Wayland",
        "Osa versioista tukee Android-sovelluksia",
        "Jollan ja lisenssivalmistajien ylläpitämä"
      ],
      "pros": [
        "Yksityisyyteen ja itsenäiseen ekosysteemiin nojaava",
        "Omanlaisensa eleohjaus",
        "Eurooppalainen mobiilin Linuxin edustaja"
      ],
      "cons": [
        "Rajallinen laite- ja sovellusekosysteemi",
        "Osa komponenteista on suljettuja",
        "Jokapäiväinen käyttö vaatii kompromisseja"
      ],
      "status_note": "Jollan ja lisenssivalmistajien ylläpitämä, laitetuki rajallinen",
      "target_user": "Mobiilin Linuxin käyttäjät, jotka arvostavat yksityisyyttä ja hyväksyvät rajallisen ekosysteemin",
      "release_cycle": "Julkaistaan versioittain, Jolla ja lisenssivalmistajat tarjoavat päivitykset"
    }
  }
};

window.DISTRO_META_I18N = {
  "en": {
    "maintainer": {
      "Alpine Linux 开发团队": "Alpine Linux development team",
      "Arch Linux ARM 团队": "Arch Linux ARM team",
      "Arch Linux 团队": "Arch Linux team",
      "Armbian 团队": "Armbian team",
      "Artix Linux 团队": "Artix Linux team",
      "Batocera 团队": "Batocera team",
      "BlackArch 团队": "BlackArch team",
      "Bodhi Linux 团队": "Bodhi Linux team",
      "CachyOS 团队": "CachyOS team",
      "ChimeraOS 团队": "ChimeraOS team",
      "Devuan 团队": "Devuan team",
      "EndeavourOS 团队": "EndeavourOS team",
      "Fermilab / 科研机构联盟": "Fermilab / research institution consortium",
      "Flatcar 项目（Microsoft 赞助）": "Flatcar project (sponsored by Microsoft)",
      "GNU Guix 社区": "GNU Guix community",
      "Garuda Linux 团队": "Garuda Linux team",
      "KDE 社区": "KDE community",
      "KaOS 团队": "KaOS team",
      "LibreELEC 团队": "LibreELEC team",
      "Linux Lite 团队": "Linux Lite team",
      "Linux Mint 团队": "Linux Mint team",
      "MX Linux 团队": "MX Linux team",
      "Manjaro 团队": "Manjaro team",
      "OpenWrt 项目": "OpenWrt project",
      "PCLinuxOS 团队": "PCLinuxOS team",
      "Parabola 团队": "Parabola team",
      "Patrick Volkerding 与 Slackware 团队": "Patrick Volkerding and the Slackware team",
      "Puppy Linux 社区": "Puppy Linux community",
      "Q4OS 团队": "Q4OS team",
      "Solus 项目": "Solus project",
      "Tiny Core Linux 团队": "Tiny Core Linux team",
      "Trisquel 项目": "Trisquel project",
      "Universal Blue 社区": "Universal Blue community",
      "Vanilla OS 团队": "Vanilla OS team",
      "Void Linux 团队": "Void Linux team",
      "antiX 团队": "antiX team",
      "openEuler 社区": "openEuler community",
      "openKylin 社区": "openKylin community",
      "openSUSE 项目": "openSUSE project",
      "postmarketOS 社区": "postmarketOS community",
      "武汉深之度科技有限公司": "Wuhan Deepin Technology Co., Ltd.",
      "统信软件技术有限公司": "UnionTech Software Technology Co., Ltd."
    },
    "org": {
      "Alpine Linux 社区": "Alpine Linux community",
      "Arch Linux ARM 社区": "Arch Linux ARM community",
      "Arch Linux 社区": "Arch Linux community",
      "Archcraft 项目": "Archcraft project",
      "Armbian 社区": "Armbian community",
      "Artix Linux 社区": "Artix Linux community",
      "Batocera.linux 项目": "Batocera.linux project",
      "BlackArch 社区": "BlackArch community",
      "Bodhi Linux 社区": "Bodhi Linux community",
      "CachyOS 社区": "CachyOS community",
      "CentOS Project（Red Hat 赞助）": "CentOS Project (sponsored by Red Hat)",
      "CentOS Project（原 Red Hat 赞助）": "CentOS Project (formerly sponsored by Red Hat)",
      "ChimeraOS 社区": "ChimeraOS community",
      "Devuan 社区": "Devuan community",
      "EndeavourOS 社区": "EndeavourOS community",
      "Fedora Project（Red Hat 支持）": "Fedora Project (supported by Red Hat)",
      "Flatcar 项目": "Flatcar project",
      "Garuda Linux 社区": "Garuda Linux community",
      "KaOS 社区": "KaOS community",
      "Knoppix 项目": "Knoppix project",
      "LibreELEC 项目": "LibreELEC project",
      "Linux Lite 项目": "Linux Lite project",
      "Linux Mint 项目": "Linux Mint project",
      "MX Linux 社区": "MX Linux community",
      "OpenWrt 项目": "OpenWrt project",
      "PCLinuxOS 社区": "PCLinuxOS community",
      "Parabola GNU/Linux-libre 社区": "Parabola GNU/Linux-libre community",
      "Puppy Linux 社区": "Puppy Linux community",
      "Q4OS 项目": "Q4OS project",
      "Red Hat（IBM 旗下）": "Red Hat (part of IBM)",
      "Slackware Linux 项目": "Slackware Linux project",
      "Solus 项目": "Solus project",
      "Tiny Core Linux 社区": "Tiny Core Linux community",
      "Trisquel 项目": "Trisquel project",
      "Vanilla OS 社区": "Vanilla OS community",
      "Void Linux 社区": "Void Linux community",
      "antiX 社区": "antiX community",
      "openSUSE Project（SUSE 赞助）": "openSUSE Project (sponsored by SUSE)",
      "postmarketOS 社区": "postmarketOS community",
      "开放原子开源基金会": "OpenAtom Foundation",
      "武汉深之度科技有限公司": "Wuhan Deepin Technology Co., Ltd.",
      "统信软件技术有限公司": "UnionTech Software Technology Co., Ltd."
    },
    "founder": {
      "Andy Rubin 等（Android Inc.）": "Andy Rubin et al. (Android Inc.)",
      "Batocera 团队": "Batocera team",
      "Bryan Poerwoatmodjo 等": "Bryan Poerwoatmodjo et al.",
      "Canonical（原项目）/ UBports": "Canonical (original project) / UBports",
      "CentOS 社区": "CentOS community",
      "CloudLinux 团队": "CloudLinux team",
      "Fermilab 等": "Fermilab et al.",
      "Igor Pečovnik 等": "Igor Pečovnik et al.",
      "KDE 社区": "KDE community",
      "LibreELEC 团队": "LibreELEC team",
      "Librewish（社区昵称）等": "Librewish (community nickname) et al.",
      "MX Linux 团队": "MX Linux team",
      "Mageia 社区（Mandriva 前员工与贡献者）": "Mageia community (former Mandriva employees and contributors)",
      "Oliver Smith 等": "Oliver Smith et al.",
      "OpenMandriva 社区": "OpenMandriva community",
      "OpenWrt 社区": "OpenWrt community",
      "Raspberry Pi Foundation / Raspbian 社区": "Raspberry Pi Foundation / Raspbian community",
      "Red Hat / CentOS 社区": "Red Hat / CentOS community",
      "Roland Singer、Philip Müller 等": "Roland Singer, Philip Müller et al.",
      "Tails 团队": "Tails team",
      "Universal Blue 团队": "Universal Blue team",
      "Veteran Unix Admins 集体": "Veteran Unix Admins collective",
      "Warren Togami、Red Hat 等": "Warren Togami, Red Hat et al.",
      "antiX 社区": "antiX community",
      "openSUSE 社区": "openSUSE community",
      "刘闻欢": "Liu Wenhuan",
      "华为等贡献者": "Huawei and other contributors",
      "统信软件": "UnionTech Software",
      "麒麟软件等贡献者": "KylinSoft and other contributors"
    },
    "upstream": {
      "Arch Linux（3.0 起）": "Arch Linux (since 3.0)",
      "Deepin / Debian 生态": "Deepin / Debian ecosystem",
      "Fedora / RHEL 生态": "Fedora / RHEL ecosystem",
      "Ubuntu LTS + KDE 仓库": "Ubuntu LTS + KDE repositories",
      "Xen / Fedora / Debian 模板": "Xen / Fedora / Debian templates",
      "独立开发": "Independent development",
      "独立开发（GNU 项目）": "Independent development (GNU project)",
      "独立开发（Linux 内核 + UKUI）": "Independent development (Linux kernel + UKUI)",
      "独立开发（Mandrake 分支）": "Independent development (Mandrake branch)",
      "独立开发（Mandriva 分支）": "Independent development (Mandriva branch)",
      "独立开发（RHEL 的上游）": "Independent development (upstream of RHEL)",
      "独立开发（受 CRUX 启发）": "Independent development (inspired by CRUX)",
      "独立开发（多底座构建）": "Independent development (built from multiple bases)",
      "独立开发（源自 EulerOS / CentOS 生态）": "Independent development (derived from the EulerOS / CentOS ecosystem)"
    },
    "latest_version": {
      "滚动更新": "Rolling release",
      "滚动更新（KDE Plasma）": "Rolling release (KDE Plasma)",
      "滚动更新（ROME）": "Rolling release (ROME)",
      "滚动更新（随 Steam 客户端推送）": "Rolling release (delivered via the Steam client)"
    },
    "gui_updater": {
      "AppCenter / 系统设置": "AppCenter / System Settings",
      "Batocera 系统菜单": "Batocera system menu",
      "Bodhi 更新管理器": "Bodhi Update Manager",
      "CachyOS Hello / Octopi（可选）": "CachyOS Hello / Octopi (optional)",
      "ChimeraOS 系统更新": "ChimeraOS system update",
      "GNOME Software / Discover（视桌面而定）": "GNOME Software / Discover (depending on the desktop)",
      "GNOME Software（rpm-ostree 后端）": "GNOME Software (rpm-ostree backend)",
      "GNOME Software（历史版本）": "GNOME Software (legacy versions)",
      "GNOME Software（受订阅与仓库限制）": "GNOME Software (limited by subscription and repositories)",
      "GNOME Software（可选）": "GNOME Software (optional)",
      "LibreELEC 设置": "LibreELEC settings",
      "Octopi（可选）": "Octopi (optional)",
      "Octoxbps（可选）": "Octoxbps (optional)",
      "Pop!_Shop / 系统更新": "Pop!_Shop / system update",
      "Q4OS 更新管理器": "Q4OS update manager",
      "Raspberry Pi OS 更新器": "Raspberry Pi OS updater",
      "Sailfish 系统更新": "Sailfish system update",
      "Steam 客户端系统更新": "Steam client system update",
      "Synaptic / PCLinuxOS 更新器": "Synaptic / PCLinuxOS updater",
      "Synaptic（历史版本）": "Synaptic (legacy versions)",
      "UOS 控制中心 / 应用商店": "UOS Control Center / App Store",
      "YaST 软件管理 / Discover": "YaST Software Management / Discover",
      "Zorin 更新器 / GNOME Software": "Zorin Updater / GNOME Software",
      "无官方图形更新器": "No official graphical updater",
      "无官方图形更新器（可自行安装）": "No official graphical updater (can be installed separately)",
      "无官方图形更新器（可选 Portage 前端）": "No official graphical updater (optional Portage frontend)",
      "无官方图形更新器（可选第三方工具）": "No official graphical updater (optional third-party tools)",
      "无官方图形更新器（社区提供 Pamac、Octopi 等）": "No official graphical updater (community-provided Pamac, Octopi, etc.)",
      "无（命令行/桌面环境自带工具）": "None (command line / tools included with the desktop environment)",
      "无（面向云/服务器）": "None (targeted at cloud/servers)",
      "无（面向云与服务器）": "None (targeted at cloud and servers)",
      "无（面向服务器/容器）": "None (targeted at servers/containers)",
      "无（面向服务器）": "None (targeted at servers)",
      "深度商店 / 系统更新": "Deepin Store / system update",
      "系统更新": "System update",
      "系统更新（厂商实现）": "System update (vendor implementation)",
      "麒麟软件商店 / 系统更新": "Kylin Software Store / system update"
    },
    "default_desktop": {
      "Budgie 等": "Budgie, etc.",
      "Cinnamon 等": "Cinnamon, etc.",
      "DDE（UOS 定制）": "DDE (UOS customization)",
      "GNOME 等": "GNOME, etc.",
      "GNOME（历史版本）": "GNOME (legacy versions)",
      "GNOME（可选）": "GNOME (optional)",
      "GNOME（深度定制）": "GNOME (heavily customized)",
      "Hyprland 等": "Hyprland, etc.",
      "IceWM（可选）": "IceWM (optional)",
      "KDE Plasma 等": "KDE Plasma, etc.",
      "KDE Plasma（游戏模式 + 桌面模式）": "KDE Plasma (game mode + desktop mode)",
      "KDE（历史版本）": "KDE (legacy versions)",
      "LXQt 等": "LXQt, etc.",
      "Labwc/Wayland（新版）": "Labwc/Wayland (new versions)",
      "Launcher3 / 厂商启动器": "Launcher3 / vendor launcher",
      "Lubuntu（LXQt）等官方风味": "Lubuntu (LXQt) and other official flavors",
      "MATE 等": "MATE, etc.",
      "Moksha（Enlightenment 分支）": "Moksha (Enlightenment fork)",
      "Phosh（移动设备）": "Phosh (mobile devices)",
      "Steam 大屏模式 / GNOME": "Steam Big Picture mode / GNOME",
      "Sway 等（配置选择）": "Sway, etc. (depending on configuration)",
      "UKUI（部分版本）": "UKUI (some versions)",
      "Xfce 等（配置选择）": "Xfce, etc. (depending on configuration)",
      "Xfce（可选）": "Xfce (optional)",
      "Xfce（部分版本）": "Xfce (some versions)",
      "i3 等": "i3, etc.",
      "无默认桌面（Xfce 等镜像可选）": "No default desktop (Xfce and other images available)",
      "无默认桌面（用户自选自由软件桌面）": "No default desktop (users choose a free software desktop)",
      "无默认桌面（用户自选）": "No default desktop (user's choice)",
      "无（LuCI Web 管理界面）": "None (LuCI web interface)",
      "无（SLES）": "None (SLES)",
      "无（Web 管理界面）": "None (web interface)",
      "无（服务器/云）": "None (server/cloud)",
      "无（服务器/容器）": "None (server/container)",
      "无（服务器/科研集群）": "None (server/scientific cluster)",
      "无（服务器安装选项）": "None (server installation option)",
      "无（服务器）": "None (server)"
    },
    "commercial_edition": {
      "AWS 云服务与支持计划": "AWS cloud services and support plans",
      "Armbian 支持服务（社区/合作）": "Armbian support services (community/partner)",
      "Google Mobile Services 与各厂商定制版": "Google Mobile Services and vendor-specific editions",
      "Kali 培训与认证、企业支持": "Kali training and certification, enterprise support",
      "Oracle Linux 支持订阅、Oracle Cloud 镜像": "Oracle Linux support subscriptions, Oracle Cloud images",
      "Parrot 企业支持与培训": "Parrot enterprise support and training",
      "Purism Librem 设备预装": "Preinstalled on Purism Librem devices",
      "RHEL 订阅（Server、Workstation、Developer 等）": "RHEL subscriptions (Server, Workstation, Developer, etc.)",
      "Raspberry Pi 硬件预装与配件": "Preinstalled on Raspberry Pi hardware, plus accessories",
      "SUSE Linux Enterprise Server / Desktop / High Availability 等订阅": "SUSE Linux Enterprise Server / Desktop / High Availability subscriptions and more",
      "Sailfish OS 授权与 Jolla 设备": "Sailfish OS licensing and Jolla devices",
      "Steam Deck 预装系统": "Preinstalled system on Steam Deck",
      "System76 硬件预装与支持": "Preinstalled on System76 hardware with support",
      "UOS 专业版 / 服务器版 / 教育版等": "UOS Professional / Server / Education editions, etc.",
      "Ubuntu Pro（扩展安全维护与合规服务）": "Ubuntu Pro (extended security maintenance and compliance services)",
      "云市场镜像与商业支持": "Cloud marketplace images and commercial support",
      "多家厂商的商业发行版（如麒麟、统信等生态产品）": "Commercial distributions from multiple vendors (ecosystem products such as Kylin, UnionTech, etc.)",
      "无": "None",
      "无（CloudLinux 提供相关商业支持）": "None (CloudLinux provides related commercial support)",
      "无（SUSE 提供企业支持）": "None (SUSE provides enterprise support)",
      "无（存在第三方商业支持）": "None (third-party commercial support exists)",
      "无（接受捐赠与付费应用）": "None (accepts donations and paid apps)",
      "无（接受捐赠与企业支持合作）": "None (accepts donations and enterprise support partnerships)",
      "无（提供第三方支持生态）": "None (offers a third-party support ecosystem)",
      "统信 UOS（生态关联的商业发行版）": "UnionTech UOS (ecosystem-related commercial distribution)",
      "银河麒麟商业版（生态关联）": "Galaxy Kylin commercial edition (ecosystem-related)"
    },
    "license": {
      "Apache-2.0 等": "Apache-2.0 etc.",
      "Apache-2.0（AOSP）等": "Apache-2.0 (AOSP) etc.",
      "DFSG 自由软件许可证（GPL、MIT、BSD 等）": "DFSG free software licenses (GPL, MIT, BSD, etc.)",
      "GPL-2.0 / BSD 等": "GPL-2.0 / BSD etc.",
      "GPL-2.0-or-later / BSD 等": "GPL-2.0-or-later / BSD etc.",
      "GPL-2.0-or-later / 专有 UI 组件": "GPL-2.0-or-later / proprietary UI components",
      "GPL-2.0-or-later 等": "GPL-2.0-or-later etc.",
      "GPL-2.0-or-later 等（仅自由许可证）": "GPL-2.0-or-later etc. (free licenses only)",
      "GPL-2.0-or-later 等（各软件包许可证不同）": "GPL-2.0-or-later etc. (license varies by package)",
      "GPL-2.0-or-later 等（含专有 Steam 客户端）": "GPL-2.0-or-later etc. (includes proprietary Steam client)",
      "GPL-2.0-or-later 等（含专有组件）": "GPL-2.0-or-later etc. (includes proprietary components)",
      "GPL-2.0-or-later 等（商业订阅）": "GPL-2.0-or-later etc. (commercial subscription)",
      "GPL-2.0-or-later 等（工具许可证各异）": "GPL-2.0-or-later etc. (tool licenses vary)",
      "GPL-2.0-or-later 等（订阅制商业发行版）": "GPL-2.0-or-later etc. (subscription-based commercial distribution)",
      "GPL-3.0-or-later 等（仅自由许可证）": "GPL-3.0-or-later etc. (free licenses only)",
      "MIT / GPL-2.0-or-later 等": "MIT / GPL-2.0-or-later etc.",
      "MIT / LGPL-2.1 等": "MIT / LGPL-2.1 etc.",
      "商业许可 + 开源组件": "Commercial license + open-source components"
    },
    "update_command": {
      "Qubes Update 工具（图形或命令行）": "Qubes Update tool (graphical or command line)",
      "pamac update  # 或 sudo pacman -Syu": "pamac update  # or sudo pacman -Syu",
      "sudo dnf upgrade  # 仓库已停止更新": "sudo dnf upgrade  # repository no longer updated",
      "sudo frzr-deploy  # 或通过系统更新界面": "sudo frzr-deploy  # or via the system update interface",
      "sudo rpm-ostree upgrade  # 或 ujust update": "sudo rpm-ostree upgrade  # or ujust update",
      "sudo swupd update  # 项目已停止": "sudo swupd update  # project discontinued",
      "sudo yum update  # 仓库已停止更新": "sudo yum update  # repository no longer updated",
      "系统设置 → 更新": "System Settings → Updates",
      "通过 Batocera 菜单 → 系统更新": "Via the Batocera menu → System Update",
      "通过 LibreELEC 设置 → 更新": "Via LibreELEC settings → Updates",
      "通过 LuCI 或 sysupgrade 刷写固件": "Flash firmware via LuCI or sysupgrade",
      "通过 Puppy Package Manager 更新": "Update via Puppy Package Manager",
      "通过 Steam 客户端「设置 → 系统」检查更新": "Check for updates via the Steam client under Settings → System",
      "通过 Tails Updater 进行增量升级": "Incremental upgrade via Tails Updater",
      "通过 UOS 控制中心更新": "Update via UOS Control Center",
      "通过 Web UI 的系统更新": "System update via the Web UI",
      "通过 update_engine / 云平台自动更新": "Automatic updates via update_engine / cloud platform",
      "通过系统 OTA 或厂商工具": "Via system OTA or vendor tools",
      "通过系统设置 → 更新": "Via System Settings → Updates"
    },
    "package_manager": {
      "APK / Google Play（厂商版）": "APK / Google Play (vendor editions)",
      "LibreELEC 更新器 + 插件仓库": "LibreELEC updater + add-on repository",
      "Puppy Package Manager / apt 兼容": "Puppy Package Manager / apt compatible",
      "apt + Click/Snap 封装": "apt + Click/Snap packaging",
      "apt / dpkg + 应用商店": "apt / dpkg + app store",
      "apt / dpkg + 深度商店": "apt / dpkg + Deepin Store",
      "apt / dpkg（系统更新由 Tails Updater 管理）": "apt / dpkg (system updates managed by Tails Updater)",
      "apt（容器内）+ Flatpak + apx": "apt (in container) + Flatpak + apx",
      "apt（底层）+ 应用目录": "apt (underlying) + app catalog",
      "dnf / rpm-ostree（Atomic 版）": "dnf / rpm-ostree (Atomic edition)",
      "dnf（dom0）/ apt（模板）": "dnf (dom0) / apt (templates)",
      "pacman + yay（预装）": "pacman + yay (preinstalled)",
      "pacman（只读根分区）+ Flatpak": "pacman (read-only root partition) + Flatpak",
      "无传统包管理（容器 + 自更新）": "No traditional package management (containers + self-update)",
      "无传统包管理（系统镜像更新）": "No traditional package management (system image updates)"
    },
    "supported_arch": {
      "aarch64（社区镜像）": "aarch64 (community images)",
      "aarch64（部分硬件）": "aarch64 (some hardware)",
      "aarch64（部分设备）": "aarch64 (some devices)",
      "i386（历史版本）": "i386 (historical versions)",
      "i386（部分版本）": "i386 (some versions)",
      "riscv64 等": "riscv64 etc.",
      "x86_64（部分设备）": "x86_64 (some devices)"
    },
    "init_system": {
      "OpenRC（部分设备支持 systemd）": "OpenRC (systemd supported on some devices)",
      "systemd（可选 sysvinit 等）": "systemd (sysvinit etc. optional)",
      "systemd（可选择 sysvinit）": "systemd (sysvinit selectable)",
      "sysvinit（可选 runit）": "sysvinit (runit optional)"
    }
  },
  "fi": {
    "maintainer": {
      "Alpine Linux 开发团队": "Alpine Linuxin kehitystiimi",
      "Arch Linux ARM 团队": "Arch Linux ARM:n tiimi",
      "Arch Linux 团队": "Arch Linuxin tiimi",
      "Armbian 团队": "Armbianin tiimi",
      "Artix Linux 团队": "Artix Linuxin tiimi",
      "Batocera 团队": "Batoseran tiimi",
      "BlackArch 团队": "BlackArchin tiimi",
      "Bodhi Linux 团队": "Bodhi Linuxin tiimi",
      "CachyOS 团队": "CachyOS:n tiimi",
      "ChimeraOS 团队": "ChimeraOS:n tiimi",
      "Devuan 团队": "Devuanin tiimi",
      "EndeavourOS 团队": "EndeavourOS:n tiimi",
      "Fermilab / 科研机构联盟": "Fermilab / tutkimuslaitosten yhteenliittymä",
      "Flatcar 项目（Microsoft 赞助）": "Flatcar-projekti (Microsoftin sponsoroima)",
      "GNU Guix 社区": "GNU Guixin yhteisö",
      "Garuda Linux 团队": "Garuda Linuxin tiimi",
      "KDE 社区": "KDE-yhteisö",
      "KaOS 团队": "KaOS:n tiimi",
      "LibreELEC 团队": "LibreELECin tiimi",
      "Linux Lite 团队": "Linux Liten tiimi",
      "Linux Mint 团队": "Linux Mintin tiimi",
      "MX Linux 团队": "MX Linuxin tiimi",
      "Manjaro 团队": "Manjaron tiimi",
      "OpenWrt 项目": "OpenWrt-projekti",
      "PCLinuxOS 团队": "PCLinuxOS:n tiimi",
      "Parabola 团队": "Parabolan tiimi",
      "Patrick Volkerding 与 Slackware 团队": "Patrick Volkerding ja Slackware-tiimi",
      "Puppy Linux 社区": "Puppy Linuxin yhteisö",
      "Q4OS 团队": "Q4OS:n tiimi",
      "Solus 项目": "Solus-projekti",
      "Tiny Core Linux 团队": "Tiny Core Linuxin tiimi",
      "Trisquel 项目": "Trisquel-projekti",
      "Universal Blue 社区": "Universal Bluen yhteisö",
      "Vanilla OS 团队": "Vanilla OS:n tiimi",
      "Void Linux 团队": "Void Linuxin tiimi",
      "antiX 团队": "antiX:n tiimi",
      "openEuler 社区": "openEuler-yhteisö",
      "openKylin 社区": "openKylin-yhteisö",
      "openSUSE 项目": "openSUSE-projekti",
      "postmarketOS 社区": "postmarketOS-yhteisö",
      "武汉深之度科技有限公司": "Wuhan Deepin Technology Co., Ltd.",
      "统信软件技术有限公司": "UnionTech Software Technology Co., Ltd."
    },
    "org": {
      "Alpine Linux 社区": "Alpine Linuxin yhteisö",
      "Arch Linux ARM 社区": "Arch Linux ARM:n yhteisö",
      "Arch Linux 社区": "Arch Linuxin yhteisö",
      "Archcraft 项目": "Archcraft-projekti",
      "Armbian 社区": "Armbianin yhteisö",
      "Artix Linux 社区": "Artix Linuxin yhteisö",
      "Batocera.linux 项目": "Batocera.linux-projekti",
      "BlackArch 社区": "BlackArchin yhteisö",
      "Bodhi Linux 社区": "Bodhi Linuxin yhteisö",
      "CachyOS 社区": "CachyOS:n yhteisö",
      "CentOS Project（Red Hat 赞助）": "CentOS Project (Red Hatin sponsoroima)",
      "CentOS Project（原 Red Hat 赞助）": "CentOS Project (aiemmin Red Hatin sponsoroima)",
      "ChimeraOS 社区": "ChimeraOS:n yhteisö",
      "Devuan 社区": "Devuanin yhteisö",
      "EndeavourOS 社区": "EndeavourOS:n yhteisö",
      "Fedora Project（Red Hat 支持）": "Fedora Project (Red Hatin tukema)",
      "Flatcar 项目": "Flatcar-projekti",
      "Garuda Linux 社区": "Garuda Linuxin yhteisö",
      "KaOS 社区": "KaOS:n yhteisö",
      "Knoppix 项目": "Knoppix-projekti",
      "LibreELEC 项目": "LibreELEC-projekti",
      "Linux Lite 项目": "Linux Liten projekti",
      "Linux Mint 项目": "Linux Mintin projekti",
      "MX Linux 社区": "MX Linuxin yhteisö",
      "OpenWrt 项目": "OpenWrt-projekti",
      "PCLinuxOS 社区": "PCLinuxOS:n yhteisö",
      "Parabola GNU/Linux-libre 社区": "Parabola GNU/Linux-libre -yhteisö",
      "Puppy Linux 社区": "Puppy Linuxin yhteisö",
      "Q4OS 项目": "Q4OS-projekti",
      "Red Hat（IBM 旗下）": "Red Hat (IBM:n tytäryhtiö)",
      "Slackware Linux 项目": "Slackware Linuxin projekti",
      "Solus 项目": "Solus-projekti",
      "Tiny Core Linux 社区": "Tiny Core Linuxin yhteisö",
      "Trisquel 项目": "Trisquel-projekti",
      "Vanilla OS 社区": "Vanilla OS:n yhteisö",
      "Void Linux 社区": "Void Linuxin yhteisö",
      "antiX 社区": "antiX:n yhteisö",
      "openSUSE Project（SUSE 赞助）": "openSUSE Project (SUSEn sponsoroima)",
      "postmarketOS 社区": "postmarketOS-yhteisö",
      "开放原子开源基金会": "OpenAtom-säätiö",
      "武汉深之度科技有限公司": "Wuhan Deepin Technology Co., Ltd.",
      "统信软件技术有限公司": "UnionTech Software Technology Co., Ltd."
    },
    "founder": {
      "Andy Rubin 等（Android Inc.）": "Andy Rubin ym. (Android Inc.)",
      "Batocera 团队": "Batoseran tiimi",
      "Bryan Poerwoatmodjo 等": "Bryan Poerwoatmodjo ym.",
      "Canonical（原项目）/ UBports": "Canonical (alkuperäinen projekti) / UBports",
      "CentOS 社区": "CentOS-yhteisö",
      "CloudLinux 团队": "CloudLinuxin tiimi",
      "Fermilab 等": "Fermilab ym.",
      "Igor Pečovnik 等": "Igor Pečovnik ym.",
      "KDE 社区": "KDE-yhteisö",
      "LibreELEC 团队": "LibreELECin tiimi",
      "Librewish（社区昵称）等": "Librewish (yhteisön lempinimi) ym.",
      "MX Linux 团队": "MX Linuxin tiimi",
      "Mageia 社区（Mandriva 前员工与贡献者）": "Mageian yhteisö (entiset Mandrivan työntekijät ja avustajat)",
      "Oliver Smith 等": "Oliver Smith ym.",
      "OpenMandriva 社区": "OpenMandriva-yhteisö",
      "OpenWrt 社区": "OpenWrt-yhteisö",
      "Raspberry Pi Foundation / Raspbian 社区": "Raspberry Pi Foundation / Raspbian-yhteisö",
      "Red Hat / CentOS 社区": "Red Hat / CentOS-yhteisö",
      "Roland Singer、Philip Müller 等": "Roland Singer, Philip Müller ym.",
      "Tails 团队": "Tails-tiimi",
      "Universal Blue 团队": "Universal Bluen tiimi",
      "Veteran Unix Admins 集体": "Veteran Unix Admins -kollektiivi",
      "Warren Togami、Red Hat 等": "Warren Togami, Red Hat ym.",
      "antiX 社区": "antiX:n yhteisö",
      "openSUSE 社区": "openSUSE-yhteisö",
      "刘闻欢": "Liu Wenhuan",
      "华为等贡献者": "Huawei ja muut avustajat",
      "统信软件": "UnionTech Software",
      "麒麟软件等贡献者": "KylinSoft ja muut avustajat"
    },
    "upstream": {
      "Arch Linux（3.0 起）": "Arch Linux (3.0:sta lähtien)",
      "Deepin / Debian 生态": "Deepin / Debian -ekosysteemi",
      "Fedora / RHEL 生态": "Fedora / RHEL -ekosysteemi",
      "Ubuntu LTS + KDE 仓库": "Ubuntu LTS + KDE-ohjelmavarastot",
      "Xen / Fedora / Debian 模板": "Xen / Fedora / Debian -mallit",
      "独立开发": "Itsenäinen kehitys",
      "独立开发（GNU 项目）": "Itsenäinen kehitys (GNU-projekti)",
      "独立开发（Linux 内核 + UKUI）": "Itsenäinen kehitys (Linux-ydin + UKUI)",
      "独立开发（Mandrake 分支）": "Itsenäinen kehitys (Mandrake-haara)",
      "独立开发（Mandriva 分支）": "Itsenäinen kehitys (Mandriva-haara)",
      "独立开发（RHEL 的上游）": "Itsenäinen kehitys (RHEL:n ylävirta)",
      "独立开发（受 CRUX 启发）": "Itsenäinen kehitys (CRUXin innoittama)",
      "独立开发（多底座构建）": "Itsenäinen kehitys (useasta perustasta rakennettu)",
      "独立开发（源自 EulerOS / CentOS 生态）": "Itsenäinen kehitys (perustuu EulerOS / CentOS -ekosysteemiin)"
    },
    "latest_version": {
      "滚动更新": "Rullaava julkaisu",
      "滚动更新（KDE Plasma）": "Rullaava julkaisu (KDE Plasma)",
      "滚动更新（ROME）": "Rullaava julkaisu (ROME)",
      "滚动更新（随 Steam 客户端推送）": "Rullaava julkaisu (jaetaan Steam-asiakasohjelman kautta)"
    },
    "gui_updater": {
      "AppCenter / 系统设置": "AppCenter / Järjestelmäasetukset",
      "Batocera 系统菜单": "Batoseran järjestelmävalikko",
      "Bodhi 更新管理器": "Bodhin päivityshallinta",
      "CachyOS Hello / Octopi（可选）": "CachyOS Hello / Octopi (valinnainen)",
      "ChimeraOS 系统更新": "ChimeraOS:n järjestelmäpäivitys",
      "GNOME Software / Discover（视桌面而定）": "GNOME Software / Discover (työpöydästä riippuen)",
      "GNOME Software（rpm-ostree 后端）": "GNOME Software (rpm-ostree-taustajärjestelmä)",
      "GNOME Software（历史版本）": "GNOME Software (vanhemmat versiot)",
      "GNOME Software（受订阅与仓库限制）": "GNOME Software (tilauksen ja ohjelmavarastojen rajoittama)",
      "GNOME Software（可选）": "GNOME Software (valinnainen)",
      "LibreELEC 设置": "LibreELEC-asetukset",
      "Octopi（可选）": "Octopi (valinnainen)",
      "Octoxbps（可选）": "Octoxbps (valinnainen)",
      "Pop!_Shop / 系统更新": "Pop!_Shop / järjestelmäpäivitys",
      "Q4OS 更新管理器": "Q4OS:n päivityshallinta",
      "Raspberry Pi OS 更新器": "Raspberry Pi OS:n päivitin",
      "Sailfish 系统更新": "Sailfishin järjestelmäpäivitys",
      "Steam 客户端系统更新": "Steam-asiakasohjelman järjestelmäpäivitys",
      "Synaptic / PCLinuxOS 更新器": "Synaptic / PCLinuxOS:n päivitin",
      "Synaptic（历史版本）": "Synaptic (vanhemmat versiot)",
      "UOS 控制中心 / 应用商店": "UOS-ohjauskeskus / sovelluskauppa",
      "YaST 软件管理 / Discover": "YaST-ohjelmistohallinta / Discover",
      "Zorin 更新器 / GNOME Software": "Zorinin päivitin / GNOME Software",
      "无官方图形更新器": "Ei virallista graafista päivitintä",
      "无官方图形更新器（可自行安装）": "Ei virallista graafista päivitintä (voidaan asentaa erikseen)",
      "无官方图形更新器（可选 Portage 前端）": "Ei virallista graafista päivitintä (valinnainen Portage-käyttöliittymä)",
      "无官方图形更新器（可选第三方工具）": "Ei virallista graafista päivitintä (valinnaiset kolmannen osapuolen työkalut)",
      "无官方图形更新器（社区提供 Pamac、Octopi 等）": "Ei virallista graafista päivitintä (yhteisön tarjoamat Pamac, Octopi ym.)",
      "无（命令行/桌面环境自带工具）": "Ei mitään (komentorivi / työpöytäympäristön omat työkalut)",
      "无（面向云/服务器）": "Ei mitään (pilvi-/palvelinkäyttöön)",
      "无（面向云与服务器）": "Ei mitään (pilvi- ja palvelinkäyttöön)",
      "无（面向服务器/容器）": "Ei mitään (palvelin- ja konttikäyttöön)",
      "无（面向服务器）": "Ei mitään (palvelinkäyttöön)",
      "深度商店 / 系统更新": "Deepin Store / järjestelmäpäivitys",
      "系统更新": "Järjestelmäpäivitys",
      "系统更新（厂商实现）": "Järjestelmäpäivitys (valmistajan toteuttama)",
      "麒麟软件商店 / 系统更新": "Kylin-ohjelmistokauppa / järjestelmäpäivitys"
    },
    "default_desktop": {
      "Budgie 等": "Budgie ym.",
      "Cinnamon 等": "Cinnamon ym.",
      "DDE（UOS 定制）": "DDE (UOS-räätälöinti)",
      "GNOME 等": "GNOME ym.",
      "GNOME（历史版本）": "GNOME (vanhemmat versiot)",
      "GNOME（可选）": "GNOME (valinnainen)",
      "GNOME（深度定制）": "GNOME (voimakkaasti räätälöity)",
      "Hyprland 等": "Hyprland ym.",
      "IceWM（可选）": "IceWM (valinnainen)",
      "KDE Plasma 等": "KDE Plasma ym.",
      "KDE Plasma（游戏模式 + 桌面模式）": "KDE Plasma (pelitila + työpöytätila)",
      "KDE（历史版本）": "KDE (vanhemmat versiot)",
      "LXQt 等": "LXQt ym.",
      "Labwc/Wayland（新版）": "Labwc/Wayland (uudet versiot)",
      "Launcher3 / 厂商启动器": "Launcher3 / valmistajan käynnistin",
      "Lubuntu（LXQt）等官方风味": "Lubuntu (LXQt) ja muut viralliset versiot",
      "MATE 等": "MATE ym.",
      "Moksha（Enlightenment 分支）": "Moksha (Enlightenmentin haarautuma)",
      "Phosh（移动设备）": "Phosh (mobiililaitteet)",
      "Steam 大屏模式 / GNOME": "Steam Big Picture -tila / GNOME",
      "Sway 等（配置选择）": "Sway ym. (kokoonpanon mukaan)",
      "UKUI（部分版本）": "UKUI (osassa versioita)",
      "Xfce 等（配置选择）": "Xfce ym. (kokoonpanon mukaan)",
      "Xfce（可选）": "Xfce (valinnainen)",
      "Xfce（部分版本）": "Xfce (osassa versioita)",
      "i3 等": "i3 ym.",
      "无默认桌面（Xfce 等镜像可选）": "Ei oletustyöpöytää (Xfce ym. kuvia valittavissa)",
      "无默认桌面（用户自选自由软件桌面）": "Ei oletustyöpöytää (käyttäjä valitsee vapaan ohjelmiston työpöydän)",
      "无默认桌面（用户自选）": "Ei oletustyöpöytää (käyttäjän valittavissa)",
      "无（LuCI Web 管理界面）": "Ei mitään (LuCI-verkkokäyttöliittymä)",
      "无（SLES）": "Ei mitään (SLES)",
      "无（Web 管理界面）": "Ei mitään (verkkokäyttöliittymä)",
      "无（服务器/云）": "Ei mitään (palvelin/pilvi)",
      "无（服务器/容器）": "Ei mitään (palvelin/kontti)",
      "无（服务器/科研集群）": "Ei mitään (palvelin/tutkimusklusteri)",
      "无（服务器安装选项）": "Ei mitään (palvelinasennusvaihtoehto)",
      "无（服务器）": "Ei mitään (palvelin)"
    },
    "commercial_edition": {
      "AWS 云服务与支持计划": "AWS-pilvipalvelut ja tukiohjelmat",
      "Armbian 支持服务（社区/合作）": "Armbian-tukipalvelut (yhteisö/kumppani)",
      "Google Mobile Services 与各厂商定制版": "Google Mobile Services ja valmistajakohtaiset versiot",
      "Kali 培训与认证、企业支持": "Kalin koulutus ja sertifiointi, yritystuki",
      "Oracle Linux 支持订阅、Oracle Cloud 镜像": "Oracle Linux -tukitilaukset, Oracle Cloud -kuvat",
      "Parrot 企业支持与培训": "Parrotin yritystuki ja koulutus",
      "Purism Librem 设备预装": "Esiasennettu Purism Librem -laitteisiin",
      "RHEL 订阅（Server、Workstation、Developer 等）": "RHEL-tilaukset (Server, Workstation, Developer ym.)",
      "Raspberry Pi 硬件预装与配件": "Esiasennettu Raspberry Pi -laitteistoihin, sekä lisävarusteet",
      "SUSE Linux Enterprise Server / Desktop / High Availability 等订阅": "SUSE Linux Enterprise Server / Desktop / High Availability -tilaukset ym.",
      "Sailfish OS 授权与 Jolla 设备": "Sailfish OS -lisensointi ja Jolla-laitteet",
      "Steam Deck 预装系统": "Steam Deck -laitteen esiasennettu järjestelmä",
      "System76 硬件预装与支持": "Esiasennettu System76-laitteistoihin ja tuki",
      "UOS 专业版 / 服务器版 / 教育版等": "UOS Professional / Server / Education -versiot ym.",
      "Ubuntu Pro（扩展安全维护与合规服务）": "Ubuntu Pro (laajennettu tietoturvaylläpito ja vaatimustenmukaisuuspalvelut)",
      "云市场镜像与商业支持": "Pilvimarkkinapaikan kuvat ja kaupallinen tuki",
      "多家厂商的商业发行版（如麒麟、统信等生态产品）": "Useiden valmistajien kaupalliset jakelut (ekosysteemituotteet kuten Kylin, UnionTech ym.)",
      "无": "Ei mitään",
      "无（CloudLinux 提供相关商业支持）": "Ei mitään (CloudLinux tarjoaa siihen liittyvää kaupallista tukea)",
      "无（SUSE 提供企业支持）": "Ei mitään (SUSE tarjoaa yritystukea)",
      "无（存在第三方商业支持）": "Ei mitään (kolmannen osapuolen kaupallista tukea on saatavilla)",
      "无（接受捐赠与付费应用）": "Ei mitään (vastaanottaa lahjoituksia ja maksullisia sovelluksia)",
      "无（接受捐赠与企业支持合作）": "Ei mitään (vastaanottaa lahjoituksia ja yritystukikumppanuuksia)",
      "无（提供第三方支持生态）": "Ei mitään (tarjoaa kolmannen osapuolen tukiekosysteemin)",
      "统信 UOS（生态关联的商业发行版）": "UnionTech UOS (ekosysteemiin liittyvä kaupallinen jakelu)",
      "银河麒麟商业版（生态关联）": "Galaxy Kylin -kaupallinen versio (ekosysteemiin liittyvä)"
    },
    "license": {
      "Apache-2.0 等": "Apache-2.0 ym.",
      "Apache-2.0（AOSP）等": "Apache-2.0 (AOSP) ym.",
      "DFSG 自由软件许可证（GPL、MIT、BSD 等）": "DFSG-vapaat ohjelmistolisenssit (GPL, MIT, BSD ym.)",
      "GPL-2.0 / BSD 等": "GPL-2.0 / BSD ym.",
      "GPL-2.0-or-later / BSD 等": "GPL-2.0-or-later / BSD ym.",
      "GPL-2.0-or-later / 专有 UI 组件": "GPL-2.0-or-later / omisteiset UI-komponentit",
      "GPL-2.0-or-later 等": "GPL-2.0-or-later ym.",
      "GPL-2.0-or-later 等（仅自由许可证）": "GPL-2.0-or-later ym. (vain vapaita lisenssejä)",
      "GPL-2.0-or-later 等（各软件包许可证不同）": "GPL-2.0-or-later ym. (lisenssi vaihtelee paketeittain)",
      "GPL-2.0-or-later 等（含专有 Steam 客户端）": "GPL-2.0-or-later ym. (sisältää omisteisen Steam-asiakasohjelman)",
      "GPL-2.0-or-later 等（含专有组件）": "GPL-2.0-or-later ym. (sisältää omisteisia komponentteja)",
      "GPL-2.0-or-later 等（商业订阅）": "GPL-2.0-or-later ym. (kaupallinen tilaus)",
      "GPL-2.0-or-later 等（工具许可证各异）": "GPL-2.0-or-later ym. (työkalujen lisenssit vaihtelevat)",
      "GPL-2.0-or-later 等（订阅制商业发行版）": "GPL-2.0-or-later ym. (tilauspohjainen kaupallinen jakelu)",
      "GPL-3.0-or-later 等（仅自由许可证）": "GPL-3.0-or-later ym. (vain vapaita lisenssejä)",
      "MIT / GPL-2.0-or-later 等": "MIT / GPL-2.0-or-later ym.",
      "MIT / LGPL-2.1 等": "MIT / LGPL-2.1 ym.",
      "商业许可 + 开源组件": "Kaupallinen lisenssi + avoimen lähdekoodin komponentit"
    },
    "update_command": {
      "Qubes Update 工具（图形或命令行）": "Qubes Update -työkalu (graafinen tai komentorivi)",
      "pamac update  # 或 sudo pacman -Syu": "pamac update  # tai sudo pacman -Syu",
      "sudo dnf upgrade  # 仓库已停止更新": "sudo dnf upgrade  # pakettivarastoa ei enää päivitetä",
      "sudo frzr-deploy  # 或通过系统更新界面": "sudo frzr-deploy  # tai järjestelmän päivityskäyttöliittymän kautta",
      "sudo rpm-ostree upgrade  # 或 ujust update": "sudo rpm-ostree upgrade  # tai ujust update",
      "sudo swupd update  # 项目已停止": "sudo swupd update  # projekti lopetettu",
      "sudo yum update  # 仓库已停止更新": "sudo yum update  # pakettivarastoa ei enää päivitetä",
      "系统设置 → 更新": "Järjestelmäasetukset → Päivitykset",
      "通过 Batocera 菜单 → 系统更新": "Batocera-valikon kautta → Järjestelmän päivitys",
      "通过 LibreELEC 设置 → 更新": "LibreELEC-asetusten kautta → Päivitykset",
      "通过 LuCI 或 sysupgrade 刷写固件": "Päivitä laiteohjelmisto LuCI:n tai sysupgraden kautta",
      "通过 Puppy Package Manager 更新": "Päivitä Puppy Package Managerin kautta",
      "通过 Steam 客户端「设置 → 系统」检查更新": "Tarkista päivitykset Steam-asiakasohjelman kautta kohdasta Asetukset → Järjestelmä",
      "通过 Tails Updater 进行增量升级": "Vaiheittainen päivitys Tails Updaterin kautta",
      "通过 UOS 控制中心更新": "Päivitä UOS-ohjauskeskuksen kautta",
      "通过 Web UI 的系统更新": "Järjestelmän päivitys verkkokäyttöliittymän kautta",
      "通过 update_engine / 云平台自动更新": "Automaattiset päivitykset update_enginen / pilvialustan kautta",
      "通过系统 OTA 或厂商工具": "Järjestelmän OTA-päivityksen tai valmistajan työkalujen kautta",
      "通过系统设置 → 更新": "Järjestelmäasetusten kautta → Päivitykset"
    },
    "package_manager": {
      "APK / Google Play（厂商版）": "APK / Google Play (valmistajaversiot)",
      "LibreELEC 更新器 + 插件仓库": "LibreELEC-päivittäjä + lisäosavarasto",
      "Puppy Package Manager / apt 兼容": "Puppy Package Manager / apt-yhteensopiva",
      "apt + Click/Snap 封装": "apt + Click/Snap-paketointi",
      "apt / dpkg + 应用商店": "apt / dpkg + sovelluskauppa",
      "apt / dpkg + 深度商店": "apt / dpkg + Deepin Store",
      "apt / dpkg（系统更新由 Tails Updater 管理）": "apt / dpkg (järjestelmäpäivityksiä hallinnoi Tails Updater)",
      "apt（容器内）+ Flatpak + apx": "apt (kontin sisällä) + Flatpak + apx",
      "apt（底层）+ 应用目录": "apt (taustalla) + sovellusluettelo",
      "dnf / rpm-ostree（Atomic 版）": "dnf / rpm-ostree (Atomic-versio)",
      "dnf（dom0）/ apt（模板）": "dnf (dom0) / apt (mallit)",
      "pacman + yay（预装）": "pacman + yay (esiasennettu)",
      "pacman（只读根分区）+ Flatpak": "pacman (vain luku -juuriosio) + Flatpak",
      "无传统包管理（容器 + 自更新）": "Ei perinteistä paketinhallintaa (kontit + itsepäivitys)",
      "无传统包管理（系统镜像更新）": "Ei perinteistä paketinhallintaa (järjestelmäkuvan päivitykset)"
    },
    "supported_arch": {
      "aarch64（社区镜像）": "aarch64 (yhteisön kuvat)",
      "aarch64（部分硬件）": "aarch64 (osa laitteistoista)",
      "aarch64（部分设备）": "aarch64 (osa laitteista)",
      "i386（历史版本）": "i386 (historialliset versiot)",
      "i386（部分版本）": "i386 (osa versioista)",
      "riscv64 等": "riscv64 ym.",
      "x86_64（部分设备）": "x86_64 (osa laitteista)"
    },
    "init_system": {
      "OpenRC（部分设备支持 systemd）": "OpenRC (systemd tuettu joillakin laitteilla)",
      "systemd（可选 sysvinit 等）": "systemd (valinnainen sysvinit ym.)",
      "systemd（可选择 sysvinit）": "systemd (voi valita sysvinitin)",
      "sysvinit（可选 runit）": "sysvinit (valinnainen runit)"
    }
  }
};
