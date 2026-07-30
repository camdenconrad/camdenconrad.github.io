/* ============================================================
   Camden Conrad — portfolio · mission-console showcase
   ============================================================ */

// ---- Stylized console/telemetry thumbnails (projects with no photo) ----
const consoleVisuals = {
    trajectory: `
        <svg viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g class="stroke-line" stroke-width="1">
                <ellipse cx="330" cy="170" rx="300" ry="120"/>
                <ellipse cx="330" cy="170" rx="210" ry="80"/>
                <ellipse cx="330" cy="170" rx="120" ry="46"/>
            </g>
            <circle cx="330" cy="170" r="18" class="fill-accent" opacity="0.9"/>
            <circle cx="330" cy="170" r="42" class="stroke-accent" stroke-width="0.6" opacity="0.4"/>
            <path class="stroke-accent dash-anim" stroke-width="1.6"
                d="M60 250 C 200 300, 470 40, 690 70 S 780 160, 700 220"/>
            <circle class="fill-accent blip" cx="690" cy="70" r="5"/>
            <circle class="fill-accent" cx="60" cy="250" r="4"/>
            <g class="txt-accent" font-size="11" letter-spacing="1">
                <text x="70" y="240">DEPART</text>
                <text x="642" y="58">ARRIVE</text>
            </g>
            <g class="stroke-line" stroke-width="0.6" opacity="0.7">
                <line x1="0" y1="60" x2="800" y2="60"/><line x1="0" y1="260" x2="800" y2="260"/>
            </g>
        </svg>`,
    besom: `
        <svg viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g class="txt-accent" font-size="11" letter-spacing="1">
                <text x="40" y="46">T+00:00:00  CLOCK=OWNED</text>
                <text x="40" y="70">RUN A ─────────────────────────</text>
                <text x="40" y="94">RUN B ─────────────────────────</text>
            </g>
            <g class="stroke-accent" stroke-width="1.5">
                <path d="M40 150 h60 v-34 h60 v50 h60 v-24 h60 v40 h60 v-52 h60 v30 h120"/>
            </g>
            <g class="stroke-line" stroke-width="1.5" opacity="0.55" stroke-dasharray="3 3">
                <path d="M40 210 h60 v-34 h60 v50 h60 v-24 h60 v40 h60 v-52 h60 v30 h120"/>
            </g>
            <g class="txt-accent" font-size="11"><text x="600" y="150">TLM≡</text><text x="600" y="210">TLM≡</text></g>
        </svg>`,
    cauldron: `
        <svg viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g class="txt-accent" font-size="12" letter-spacing="0.5">
                <text x="40" y="60">fn propagate(&amp;mut self) {</text>
                <text x="70" y="92">let dv = burn(node);</text>
                <text x="70" y="124" class="fill-accent">// ⚠ Power-of-Ten: no recursion</text>
                <text x="70" y="156">assert_bounded(loop_iters);</text>
                <text x="40" y="188">}</text>
            </g>
            <rect x="58" y="108" width="360" height="22" class="stroke-accent" stroke-width="1" opacity="0.5" rx="3"/>
            <g class="stroke-line" stroke-width="1"><line x1="30" y1="40" x2="30" y2="280"/></g>
            <g class="fill-accent" font-size="10"><text x="640" y="60">PASS 7/7</text></g>
        </svg>`,
    coven: `
        <svg viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g class="stroke-accent" stroke-width="1.4">
                <line x1="400" y1="160" x2="180" y2="70"/><line x1="400" y1="160" x2="640" y2="80"/>
                <line x1="400" y1="160" x2="200" y2="250"/><line x1="400" y1="160" x2="620" y2="240"/>
            </g>
            <circle cx="400" cy="160" r="26" class="fill-accent" opacity="0.9"/>
            <g class="stroke-accent" stroke-width="1.2" fill="var(--bg-panel)">
                <circle cx="180" cy="70" r="16" class="blip"/><circle cx="640" cy="80" r="16"/>
                <circle cx="200" cy="250" r="16"/><circle cx="620" cy="240" r="16" class="blip"/>
            </g>
            <g class="txt-accent" font-size="10"><text x="120" y="120">SESSION·1</text><text x="600" y="130">SESSION·2</text>
            <text x="150" y="290">RED-TEAM</text><text x="560" y="290">MEMORY</text></g>
        </svg>`,
    replikate: `
        <svg viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <polyline class="stroke-line" stroke-width="1.4" points="40,240 130,225 220,235 310,200 400,205 490,150 580,160 670,90 760,110"/>
            <polyline class="stroke-accent" stroke-width="2" points="40,250 130,200 220,210 310,150 400,155 490,110 580,120 670,70 760,60"/>
            <g class="fill-accent"><circle cx="490" cy="110" r="4" class="blip"/><circle cx="670" cy="70" r="4"/></g>
            <g class="stroke-line" stroke-width="0.6" opacity="0.6"><line x1="40" y1="280" x2="760" y2="280"/><line x1="40" y1="40" x2="40" y2="280"/></g>
            <g class="txt-accent" font-size="11"><text x="560" y="50">ONLINE</text><text x="60" y="60">~100MB RAM</text></g>
        </svg>`,
    rustrent: `
        <svg viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g class="fill-accent">
                ${[110,150,130,200,175,240,210,190,260].map((h,i)=>`<rect x="${50+i*80}" y="${290-h}" width="46" height="${h}" opacity="${0.35+i*0.06}"/>`).join('')}
            </g>
            <polyline class="stroke-accent" stroke-width="2" points="73,180 153,140 233,160 313,90 393,115 473,50 553,100 633,60 713,30"/>
            <g class="txt-accent" font-size="11"><text x="50" y="40">RENT · $/UNIT</text></g>
        </svg>`,
    runeos: `
        <svg viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g class="stroke-line" stroke-width="1"><rect x="40" y="40" width="720" height="240" rx="6"/></g>
            <g class="stroke-accent" stroke-width="1.2" fill="var(--bg-panel)">
                <rect x="60" y="66" width="200" height="120" rx="4"/><rect x="280" y="66" width="220" height="80" rx="4"/>
                <rect x="520" y="66" width="220" height="180" rx="4"/><rect x="60" y="200" width="440" height="46" rx="4"/>
            </g>
            <g class="txt-accent" font-size="10"><text x="72" y="86">smithay/wayland</text><text x="292" y="86">rune-sched</text><text x="532" y="86">cauldron</text><text x="72" y="228">~30 daemons</text></g>
        </svg>`,
    luna: `
        <svg viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g class="stroke-accent" stroke-width="1.4" fill="none">
                <rect x="120" y="70" width="300" height="60" rx="14"/><rect x="360" y="170" width="320" height="60" rx="14" class="fill-accent" opacity="0.85" stroke="none"/>
            </g>
            <g class="txt-accent" font-size="11"><text x="140" y="106">iMessage · native</text></g>
        </svg>`,
    hallow: `
        <svg viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g class="stroke-line" stroke-width="1"><rect x="80" y="60" width="640" height="200" rx="6"/><line x1="80" y1="100" x2="720" y2="100"/></g>
            <rect x="100" y="76" width="300" height="16" class="stroke-accent" stroke-width="1" rx="8" fill="none"/>
            <g class="fill-accent"><circle cx="112" cy="80" r="4"/><circle cx="128" cy="80" r="4"/></g>
            <g class="txt-accent" font-size="11"><text x="100" y="150">browser · fork</text></g>
        </svg>`
};

// ---- Project data, grouped by section ----
const projectsData = [
    // ===== Developer Tools & Platforms =====
    {
        section: 'devtools', code: 'DT-01', flagship: true,
        title: 'Coven',
        why: 'Chat-based AI coding tops out at one conversation. Coven asks what if it were orchestrated instead — many agents in parallel, per-project memory, live GitHub state, adversarial review — so I can coordinate parallel work without losing review discipline or project context.',
        kicker: 'AI agent orchestrator',
        stats: 'Rust · Postgres/pgvector · parallel Claude sessions',
        short: 'Built because chat wasn\'t enough — a workspace that treats AI as a coordinated team, not one assistant: parallel agents, per-project memory, and adversarial red-team review.',
        image: 'images/coven/mission-control.webp',
        tags: ['AI orchestration', 'Parallel agents', 'Postgres / pgvector', 'GitHub API', 'Rust'],
        description: 'Coven is a Rune-native mission-control application that orchestrates multiple parallel Claude Code sessions per project. It integrates with GitHub issues and PRs, runs an adversarial red-team review stage where Codex and Gemini review diffs against each other, keeps a Postgres + pgvector memory, and switches models based on budget. A personal tool for coordinating several automated development workflows at once.',
        features: [
            'Orchestrates multiple parallel Claude Code sessions per project',
            'GitHub issue / PR integration',
            'Adversarial red-team review — Codex + Gemini reviewing diffs',
            'Postgres + pgvector long-term memory',
            'Budget-aware model switching'
        ],
        tech: 'Rust · Postgres · pgvector · LLM orchestration',
        private: true
    },
    {
        section: 'devtools', code: 'DT-02',
        title: 'Cauldron',
        kicker: 'Flight-software IDE',
        stats: 'Rust · wgpu · whole-project call-graph analysis · live JPL-rule checks',
        short: 'GPU-rendered Rust IDE that enforces NASA/JPL coding standards as live, save-time diagnostics.',
        visual: 'cauldron',
        tags: ['Flight-SW linting', 'Power of Ten', 'JPL C', 'Static analysis', 'wgpu'],
        description: 'Cauldron is a GPU-rendered (wgpu) Rust IDE that checks selected NASA/JPL coding rules — from the Power of Ten and the JPL C coding standard — as live, save-time diagnostics. Beyond typical editor diagnostics, it performs whole-project call-graph analysis and recursion detection, and it runs the real cFE contribution CI gates locally (clang-format drift, commit conventions, doxygen, unit-test coupling), folding clang-tidy, cppcheck, and a custom tree-sitter analyzer into one diagnostics model — so violations surface the moment you save rather than in a remote pipeline.',
        features: [
            'GPU-rendered editor built on wgpu',
            'Checks Power of Ten and JPL C coding rules as you save',
            'Whole-project call-graph analysis + recursion detection',
            'Runs the real cFE contribution CI gates locally (clang-format, commit conventions, unit-test coupling)',
            'Unifies clang-tidy, cppcheck, and a custom tree-sitter analyzer into one diagnostics model'
        ],
        tech: 'Rust · wgpu · tree-sitter · clang-tidy / cppcheck · static analysis',
        github: 'https://github.com/camdenconrad/cauldron',
        image: 'images/cauldron/ide.webp'
    },
    {
        section: 'devtools', code: 'DT-03',
        title: 'Bellatrix',
        kicker: 'Face-authored 3D scene editor',
        stats: 'Rust · face-first geometry · from-scratch WGSL path tracer',
        short: 'A face-first 3D scene editor on a from-scratch WGSL path tracer. Instead of sculpting meshes or painting UVs, scenes are authored one grid-snapped face at a time — pixel-art precision and intentionality, in 3D.',
        image: 'images/bellatrix/room.webp',
        gallery: ['images/bellatrix/room.webp', 'images/bellatrix/interior.webp'],
        tags: ['Face-first geometry', 'Path tracing', 'WGSL', 'GI / IBL / PBR', 'wgpu'],
        why: 'I wanted a cozy, lofi, pixel-art world with voxel-like geometry, and no tool fit: Blender optimizes for arbitrary meshes and UVs, voxel editors optimize for cubes, pixel tools stop at 2D. None of them had the right representation — so scenes are grid-snapped faces you author one at a time, pixel-art precision projected into 3D. Building the tool was faster than fighting one that thinks in meshes.',
        description: 'Bellatrix is a 3D scene editor built around a different world model: instead of meshes or cubes, scenes are grid-snapped faces — full, half, and quarter size — that you author and color one at a time, like placing pixels on a canvas that wraps around objects in 3D. The precision comes from the constraint: you\'re never sculpting arbitrary geometry, you\'re deciding what every visible face looks like. Under it is a rendering stack I wrote entirely from scratch — a real WGSL path tracer with soft shadows, bounce global illumination, reflections, and temporal accumulation; HDR image-based environment lighting; PBR metallic/roughness materials; a denoiser; multi-pass bloom; and click-to-focus depth of field — plus a custom immediate-mode GUI, all through hand-written wgpu pipelines. No game engine, no scene-graph library, no UI framework underneath. A custom format stores 20,000+ faces at roughly 2 MB.',
        features: [
            'Face-first world model — grid-snapped full / half / quarter faces, each colored by hand',
            'Pixel-art precision projected into 3D: intentionality over arbitrary freedom',
            'From-scratch WGSL path tracer: soft shadows, bounce GI, reflections, temporal accumulation',
            'HDR image-based lighting, PBR metallic/roughness materials, denoiser',
            'Multi-pass bloom and click-to-focus depth of field',
            'Custom immediate-mode GUI — all hand-written wgpu pipelines, no engine / scene-graph / UI framework',
            'Layers, undo/redo; custom format stores ~20,000 faces at ~2 MB'
        ],
        tech: 'Rust · wgpu · WGSL · path tracing · PBR',
        github: 'https://github.com/camdenconrad/Bellatrix'
    },
    {
        section: 'devtools', code: 'DT-04',
        title: 'glyph',
        kicker: 'Package manager',
        stats: 'Rust · pacman + AUR · one transparent CLI',
        short: 'A fast package manager that unifies official repos and the AUR under one command — and prints exactly what it runs.',
        image: 'images/glyph/glyph.webp',
        tags: ['pacman + AUR', 'Transparent CLI', 'Arch', 'RuneOS'],
        description: 'glyph is the RuneOS package manager — a fast, verbose front-end that unifies pacman (official repos) and yay (AUR) behind a single command. It always announces what it is doing and prints the exact underlying command before it runs, so there is never any mystery about what glyph did to your system: no black-box wrapper, just one fast, explicit interface over both package sources. Official repos are resolved first, with a flag to force the AUR-only path.',
        features: [
            'One command over both official repos (pacman) and the AUR (yay)',
            'Prints the exact underlying command before running it — full transparency',
            'Verbose, explicit output; never a black box',
            'Official repos first, with an --aur override',
            'Fast, single Rust binary'
        ],
        tech: 'Rust · CLI · pacman · yay / AUR',
        github: 'https://github.com/camdenconradsms/livewall-studio'
    },
    {
        section: 'devtools', code: 'DT-05',
        title: 'murder',
        kicker: 'Smart process killer',
        stats: 'Rust · fuzzy match · session-safe',
        short: 'Kill anything by fuzzy name — "murder covn" knows you mean Coven, finds every trace, and ends it. No PIDs, no flags, no pkill trivia.',
        image: 'images/murder/murder.webp',
        tags: ['Fuzzy process kill', 'Session-safe', 'CLI', 'Linux'],
        description: 'murder is Rune\'s kill, built around one idea: you should not have to remember pkill -x versus pkill -f, hunt down a PID, or even spell the name right. You just say "murder covn" and it knows you meant Coven — it fuzzy-matches the process, finds every trace of it (all the matching processes, not just one), and ends them. No flags to memorize, no variants, no PID lookup. As a safety net it also wards the handful of processes that would tear down your live session — the compositor, the wallpaper engine, the dock — so a fat-fingered kill can\'t accidentally sign you out; you override with --ritual when you actually mean it.',
        features: [
            'Fuzzy name matching — "murder covn" resolves to Coven, typo and all',
            'Finds and ends every trace of a process, not a single PID',
            'No PIDs, no flags, no remembering pkill -x / -f variants',
            'Wards session-critical processes (compositor, wallpaper, dock) unless --ritual',
            'One small, fast Rust binary'
        ],
        tech: 'Rust · CLI · Linux · fuzzy process matching',
        github: 'https://github.com/camdenconradsms/livewall-studio'
    },

    // ===== Systems & OS =====
    {
        section: 'systems', code: 'OS-01',
        title: 'RuneOS',
        why: 'Not built to be adopted — built to be inhabited. One coherent philosophy across the whole desktop, tuned to exactly how I want to work.',
        kicker: 'Custom Linux operating system',
        stats: '43 crates · packaged kernel · ~30 daemons · daily-driven',
        short: 'A full custom, daily-driven Linux stack — packaged kernel, Smithay compositor, native Rust shell, ~30 daemons, custom scheduler.',
        image: 'images/runeos/sunset.webp',
        gallery: ['images/runeos/sunset.webp', 'images/runeos/power.webp', 'images/runeos/desktop2.webp'],
        tags: ['Custom OS', 'Wayland / Smithay', 'sched_ext', 'Linux'],
        description: 'RuneOS is a full custom Linux stack that I build and daily-drive. It includes a packaged kernel (linux-rune, Manjaro-based), a Wayland compositor built on Smithay, a native Rust shell, a package manager, roughly 30 system daemons, a custom sched_ext scheduler, and a native application suite. Parts of it are written under deliberately strict, self-imposed coding rules. The app suite includes Luna (an iMessage client), Nocturne (a Spotify client), Cauldron (the IDE above), and Hallow (a browser fork).',
        features: [
            'Packaged kernel — linux-rune, Manjaro-based',
            'Wayland compositor built on Smithay',
            'Native Rust shell and package manager',
            '~30 system daemons and a custom sched_ext scheduler',
            'Native application suite: Luna, Nocturne, Cauldron, Hallow',
            'Parts written under deliberately strict coding rules'
        ],
        tech: 'Rust · Smithay · Wayland · sched_ext · systems programming',
        links: [
            { label: 'rune-net', url: 'https://github.com/camdenconrad/rune-net' },
            { label: 'rune-sched', url: 'https://github.com/camdenconradsms/rune-sched' }
        ]
    },
    {
        section: 'systems', code: 'OS-02',
        title: 'Runic',
        why: 'PipeWire is general-purpose; RuneOS isn\'t. Runic trades portability for what a portable server can\'t assume — a scheduling contract with the OS, and bit-perfect paths that stay bit-perfect.',
        kicker: 'Audio server · PipeWire replacement',
        stats: 'Rust · ALSA · 2nd-order DLL clock · PipeWire-protocol compat',
        short: 'A from-scratch Rust audio server replacing PipeWire — bit-perfect playback, pro low latency, and PipeWire wire-compat.',
        image: 'images/runic/runic.webp',
        tags: ['Audio server', 'Real-time', 'ALSA', 'PipeWire-compat'],
        description: 'Runic is a from-scratch Rust audio server for RuneOS built to replace PipeWire: bit-perfect / hi-res playback, low latency, Bluetooth, and screen sharing, plus a scheduling contract with rune-sched that a portable audio server can\'t have. Its timing substrate is a hand-written second-order DLL (delay-locked loop) that paces a bit-perfect ALSA sink with microsecond-scale error and no xruns in sustained tests; on top sit a graph engine (activation records + an eventfd cascade), a mixer and resampler, a mic effect chain that routes mic → fx → every app, and a Bluetooth sink. Crucially it speaks PipeWire\'s native wire protocol, so OBS and browsers screen-share against it unmodified.',
        features: [
            'Bit-perfect / hi-res playback with no unwanted resampling',
            'Second-order DLL timing substrate — µs-scale clock error, no xruns in sustained local tests',
            'Graph engine: activation records + eventfd cascade',
            'Mixer, resampler, ALSA + Bluetooth sinks',
            'Mic effect chain: mic → fx → every app',
            'Speaks PipeWire\'s native protocol — OBS / browser screen-share unmodified'
        ],
        tech: 'Rust · ALSA · real-time audio · PipeWire protocol',
        github: 'https://github.com/camdenconrad/runic'
    },
    {
        section: 'systems', code: 'OS-03',
        title: 'Seance',
        why: 'Built safety-first, before anything that could break the box exists: the network layer as invariants a teardown path can always undo — not a daemon you have to trust to self-heal.',
        kicker: 'Network control plane',
        stats: 'Rust · eBPF (aya) · fail-safe staged design',
        short: 'A fail-safe network control plane, in staged eBPF layers, slowly replacing NetworkManager.',
        image: 'images/seance/seance.webp',
        tags: ['Network plane', 'eBPF (aya)', 'Fail-safe', 'cgroup_skb'],
        description: 'Seance is a network control plane I am building to replace NetworkManager, designed in staged safety layers. The S0 control plane installs a single inert beacon rule at boot, ticks a fixed loop, runs an invariant pass over the rule table, and proves its own liveness on two independent channels — and deliberately never repairs anything it observes, so the teardown path can always clean up after it even when the daemon is "a corpse or a liar." Above it, an eBPF cgroup_skb classifier puts Rust directly in the egress packet path, and a fanotify canary watchdog watches for tampering. The whole thing is engineered fail-safe-first: every rule is something the panic/teardown path can undo without the daemon\'s cooperation.',
        features: [
            'Staged design: S0 control plane → eBPF egress classifier → canary watchdog',
            'eBPF cgroup_skb classifier — Rust in the egress packet path',
            'S0 proves liveness on two independent channels (sd_notify + heartbeat)',
            'Never repairs what it observes — teardown works without its cooperation',
            'fanotify canary watchdog, observe-only',
            'Fail-safe-first: built before anything that could break the box exists'
        ],
        tech: 'Rust · eBPF (aya) · cgroup_skb · fanotify · netlink',
        github: 'https://github.com/camdenconradsms/rune-sched'
    },
    {
        section: 'systems', code: 'OS-04',
        title: 'livewall-studio',
        kicker: 'Live-wallpaper engine',
        stats: 'Rust · wgpu · Wayland layer-shell',
        short: 'A native Rust + wgpu live-wallpaper engine rendering on the Wayland background layer — the living wallpaper I daily-drive.',
        image: 'images/livewall/fallpark.webp',
        tags: ['Live wallpaper', 'wgpu', 'Wayland layer-shell', 'Tauri'],
        description: 'livewall-studio authors, schedules, and switches whole desktop "environments" — a live wallpaper plus a day/night schedule with effects like rain fading in and out through the day. The wallpaper is rendered by a native Rust + wgpu engine I wrote that draws directly on the Wayland background layer via layer-shell, rather than going through the desktop\'s QML compositor, so I own the renderer end to end. A Tauri GUI authors environments and previews them live through the same engine. It grew out of "fallpark" — the lofi autumn-park scene, with full day/night gradings, that I daily-drive.',
        features: [
            'Native Rust + wgpu engine drawing on the Wayland background layer (layer-shell)',
            'Owns the renderer end to end — not the desktop\'s QML',
            'Environments = live wallpaper + day/night schedule + effects (rain, etc.)',
            'Full time-of-day gradings (dawn → golden → dusk → night)',
            'Tauri authoring GUI with live preview through the same engine'
        ],
        tech: 'Rust · wgpu · Wayland layer-shell · Tauri',
        github: 'https://github.com/camdenconradsms/livewall-studio'
    },
    {
        section: 'systems', code: 'OS-05',
        title: 'Nocturne',
        kicker: 'Native music client',
        stats: 'Rust · wgpu · RuneOS app',
        short: 'Native Rust music client for RuneOS — part of the OS app suite.',
        image: 'images/nocturne/player.webp',
        gallery: ['images/nocturne/player.webp', 'images/nocturne/player-2.webp'],
        tags: ['Music client', 'Native UI', 'Wayland', 'RuneOS'],
        description: 'Nocturne is a native Rust music client built for RuneOS — a clean, keyboard-driven player that fits the OS\'s design language and rendering stack. A small piece of the daily-driven native app suite.',
        features: [
            'Native Rust client for RuneOS',
            'Keyboard-driven, fits the OS design language',
            'Integrated with the RuneOS rendering stack'
        ],
        tech: 'Rust · native UI · audio',
        github: 'https://github.com/camdenconrad/nocturne'
    },

    // ===== Simulation & Flight Software =====
    {
        section: 'aerospace', code: 'SIM-01',
        title: 'Orbital',
        why: 'Rather than extend GMAT or Nyx, start from the equations — own the propagator, the ephemerides, and the determinism end to end, so every trajectory is reproducible and I understand every step.',
        kicker: 'Interplanetary trajectory optimizer',
        stats: 'Rust · JPL DE440 (21 bodies) · Dormand–Prince 5(4) · 1PN relativity',
        short: 'Interplanetary trajectory optimizer + solar-system simulator — designs real transfers and rediscovers the Mars 2020 launch window to within a day.',
        image: 'images/orbital/porkchop.png',
        gallery: ['images/orbital/porkchop.png', 'images/orbital/hero.png'],
        tags: ['Trajectory optimization', 'Lambert / porkchop', '1PN n-body', 'JPL DE440', 'Rust'],
        description: 'Orbital is a from-scratch interplanetary trajectory optimizer and high-fidelity solar-system simulator, built from first principles rather than extending existing astrodynamics frameworks. It designs real transfers under full n-body, first post-Newtonian (1PN) dynamics: Lambert/porkchop screening, a Lambert-seeded beam search, gravity-assist tours, low-thrust (SEP) profiles, and a two-phase corrector with B-plane targeting at arrival. It propagates on real JPL DE440 ephemerides (via ANISE) with an adaptive Dormand–Prince 5(4) integrator written as a pure function of its inputs — no wall clock, no threads, no randomness — so two runs on the same build are bit-for-bit reproducible. Validated against published mission data: it rediscovers the Mars 2020 launch to within a day of departure and ~1% of launch energy, and finds the 2026/27 type-II Mars window consistent with the JPL Trajectory Browser. A single native Rust app (eframe/egui + wgpu) with GPU porkchop screening and a live 3D view.',
        features: [
            'Designs real transfers under full n-body + 1PN post-Newtonian dynamics',
            'Lambert / porkchop screening, Lambert-seeded beam search, gravity-assist tours',
            'Low-thrust (SEP) profiles and a two-phase corrector with B-plane targeting at arrival',
            'Rediscovers Mars 2020 to ~1 day / ~1% launch energy; 2026/27 window matches the JPL Trajectory Browser',
            'Real JPL DE440 ephemerides via ANISE; adaptive Dormand–Prince 5(4) — bit-for-bit reproducible on a given build',
            'Reproduces Mercury\'s ~43″/century perihelion advance in a dedicated validation case',
            'Single native Rust app (eframe/egui + wgpu) — GPU porkchop screening + live 3D view'
        ],
        tech: 'Rust · wgpu / egui · ANISE / JPL DE440 · DP5(4) · B-plane targeting',
        github: 'https://github.com/camdenconrad/Orbital'
    },
    {
        section: 'aerospace', code: 'SIM-02',
        title: 'Besom',
        why: 'Real-time simulators make byte-for-byte reproducibility hard to guarantee. Besom asks what if the simulation owned time instead of the OS — so, on a fixed build, identical scenarios replay byte-for-byte and flight software becomes genuinely regression-testable.',
        kicker: 'Deterministic NASA cFS harness',
        stats: 'Rust · cFS software bus (CI_LAB / TO_LAB) · byte-identical telemetry',
        short: 'Deterministic simulation harness for NASA cFS — identical scenarios produce byte-identical telemetry.',
        image: 'images/besom/ground-station.webp',
        tags: ['Deterministic sim', 'NASA cFS / cFE', 'Software bus', 'Apache-2.0'],
        description: 'Besom is an open-source deterministic simulation harness for NASA\'s core Flight System (cFS). It runs real, unmodified cFE flight software but owns the clock: identical scenarios produce byte-identical telemetry, which supports reproducible regression testing — something NOS3-style real-time simulators aren\'t built for. Besom propagates a two-body orbit in lockstep with the software under test and doubles as a ground station: it publishes simulated vehicle state on the cFS software bus and drives command ingest and telemetry output through CI_LAB and TO_LAB over UDP, so real flight apps consume it unmodified.',
        features: [
            'Runs real, unmodified cFE flight software',
            'Owns the clock — identical scenarios → byte-identical telemetry',
            'Supports reproducible regression testing of flight software',
            'Propagates a two-body orbit in lockstep with the software',
            'Ground station on the cFS software bus — CI_LAB commanding, TO_LAB telemetry (UDP)',
            'Open source, Apache-2.0'
        ],
        tech: 'Rust · cFS / cFE · software bus (CI_LAB / TO_LAB) · Apache-2.0',
        github: 'https://github.com/camdenconrad/besom'
    },
    // ===== Engines, ML & Data =====
    {
        section: 'engines', code: 'ENG-01',
        title: 'Axis Football 2026',
        kicker: 'Shipped commercial game',
        stats: 'Unity · 10,000+ active players · 7.8× tool speedup',
        short: 'Shipped to PC/Xbox/PlayStation, 10,000+ active players — zero-GC replay system and a 7.8× crowd-pipeline speedup.',
        image: 'Axis_football_26-1090110268.png',
        tags: ['Shipped title', 'Zero-GC replay', '7.8× speedup', 'Unity', 'C#'],
        description: 'Axis Football 2026 is a commercial title shipped to PC, Xbox, and PlayStation with 10,000+ active players, where I am credited as Contract Systems Programmer. I rebuilt the replay system to be zero-GC — 25 MB captures 15 seconds of full 22-player data with variable-speed playback, and the added instrumentation eliminated the timing-related crashes we were seeing in QA. I re-architected the Crowd Editor pipeline for a 684% (7.8×) speedup, turning an hour-long task into minutes and enabling 10× more crowd volume, and automated a live-statistics narrative commentary pipeline.',
        features: [
            'Shipped to PC, Xbox, and PlayStation — 10,000+ active players',
            'Rebuilt zero-GC replay: 25 MB for 15s of full 22-player data',
            'Variable-speed playback with timing instrumentation',
            'Eliminated the timing-related crashes seen in QA',
            'Re-architected Crowd Editor pipeline — 684% (7.8×) speedup',
            'An hour → minutes, enabling 10× more crowd volume',
            'Automated live-statistics narrative commentary pipeline'
        ],
        tech: 'Unity · C# · zero-GC systems · data-oriented optimization',
        steam: 'https://store.steampowered.com/app/3219190/Axis_Football_2026/',
        espn: 'https://www.espn.com/gaming/story/_/id/45954475/axis-football-2026-release-date'
    },
    {
        section: 'engines', code: 'ENG-02',
        title: 'Ajaara',
        kicker: 'UE5 action-adventure',
        stats: 'Unreal Engine 5 · C++ · solo',
        short: 'Personal Unreal Engine 5 project — narrative action-adventure with reactive AI, built solo.',
        image: 'images/ajaara/HighresScreenshot00004.jpg',
        gallery: [
            'images/ajaara/Ajara_SS.png', 'images/ajaara/Ajaara_Player_SS.png', 'images/ajaara/Ajaara_Village_SS.png',
            'images/ajaara/HighresScreenshot00001.png', 'images/ajaara/HighresScreenshot00002.png',
            'images/ajaara/HighresScreenshot00003.jpg', 'images/ajaara/HighresScreenshot00004.jpg',
            'images/ajaara/HighresScreenshot00006.jpg', 'images/ajaara/Screenshot 2025-04-22 094645.png',
            'images/ajaara/Screenshot 2025-04-22 094737.png', 'images/ajaara/Screenshot 2025-04-22 094835.png',
            'images/ajaara/Screenshot 2025-04-22 095328.png'
        ],
        tags: ['Reactive AI', 'Solo-built', 'Unreal Engine 5', 'C++'],
        description: 'Ajaara is a personal Unreal Engine 5 project — a narrative action-adventure built solo from the ground up, with a focus on making combat and AI feel reactive and alive through emergent behavior. Beyond the programming I handle the 3D modeling, rigging, animation, and an original soundtrack, so the project also serves as a range piece across engineering and production.',
        features: [
            'Solo-developed in Unreal Engine 5',
            'Reactive combat and emergent AI behavior',
            'Custom systems built from the ground up',
            'Full 3D modeling, rigging, and animation pipeline',
            'Original soundtrack produced in Ableton Live'
        ],
        tech: 'Unreal Engine 5 · C++ · Blueprints · Maya · Ableton Live'
    },

    {
        section: 'aerospace', code: 'SIM-03',
        title: 'Weather',
        kicker: 'Radar + nowcast desktop app',
        stats: 'Rust · NEXRAD L3 decode · ML nowcast · SQLite',
        short: 'Native weather + live-radar desktop app — decodes NEXRAD Level III radar from binary and runs its own ML nowcast.',
        image: 'images/weather/radar.webp',
        tags: ['NEXRAD L3 decode', 'ML nowcast', 'egui / wgpu', 'SQLite'],
        description: 'Weather is a native egui/eframe desktop app that decodes NEXRAD Level III radar straight from its binary product format — fetch, decode, colorize, and render onto a slippy map — alongside forecasts from Open-Meteo and NWS, with everything persisted to SQLite. It also runs a short-range ML nowcast using a from-scratch sequence-prediction model (a Rust port of my TensorSequenceTree), extrapolating recent conditions a few steps forward with a confidence estimate. Binary format parsing, mapping, and ML in one self-contained Rust binary.',
        features: [
            'Decodes NEXRAD Level III radar from the raw binary product format',
            'Colorizes and renders radar onto a slippy map',
            'Forecasts from Open-Meteo and NWS; history persisted to SQLite',
            'Short-range ML nowcast via a from-scratch sequence predictor',
            'Native egui/eframe app on wgpu, async workers on tokio'
        ],
        tech: 'Rust · egui / wgpu · tokio · rusqlite · NEXRAD L3',
        private: true
    },
    {
        section: 'engines', code: 'ENG-03',
        title: 'repliKate',
        kicker: 'Online-learning ML engine',
        stats: 'C# · ILGPU · adapts without pretraining',
        short: 'High-velocity continuous-learning ML engine — adapts online without pretraining at ~100 MB RAM.',
        image: 'images/replikate/online-learning.webp',
        tags: ['Online learning', 'No pretraining', 'ILGPU', 'C#'],
        description: 'repliKate is a high-velocity continuous-learning ML engine that adapts without pretraining, runs thread-safe online learning at roughly 100 MB of RAM, and uses GPU acceleration through ILGPU. I\'ve applied it to a chess AI (MCTS), a top-down-movement game AI (A* pathfinding and bullet-dodging), and ERA5 / NASA POWER weather prediction, and benchmarked it against LSTM and Transformer baselines.',
        features: [
            'Continuous online learning without pretraining',
            'Thread-safe learning at ~100 MB RAM',
            'GPU acceleration via ILGPU',
            'Chess AI (MCTS) and game AI (A*, bullet-dodge) applications',
            'ERA5 / NASA POWER weather prediction',
            'Benchmarked against LSTM and Transformer baselines'
        ],
        tech: 'C# · custom ML · ILGPU · GPU acceleration',
        github: 'https://github.com/camdenconrad/repliKate'
    },
    {
        section: 'engines', code: 'ENG-04',
        title: 'WatchTower',
        kicker: 'Sequence-memory engine',
        stats: 'Rust · Postgres/pgvector · prediction + memory',
        short: 'A from-scratch sequence-memory and prediction engine with a tiered Postgres/pgvector memory backbone.',
        image: 'images/watchtower/watchtower.webp',
        tags: ['Sequence memory', 'Prediction engine', 'pgvector', 'Embeddings', 'Rust'],
        description: 'WatchTower is a parametric memory-and-prediction model ("TensorSequenceTree") that learns sequences of dense float vectors and predicts their continuations — blending n-gram statistics over quantized tensors, a transition graph with self-loop detection, physics-style delta/velocity regression, and prioritized experience replay, with 16-bit quantized storage to stay compact. Around it I built a tiered hot/cold memory store (in-memory plus Postgres/pgvector) with embeddings, ingestion, and retrieval, so other apps can use it as long-term vector memory. The same model, ported to Rust, is what powers the nowcast in my Weather app.',
        features: [
            'Learns sequences of tensors and predicts continuations — from scratch',
            'n-gram stats, transition graph, delta/velocity regression, replay',
            '16-bit quantized tensor storage for compact memory',
            'Tiered hot/cold vector memory: in-memory + Postgres/pgvector',
            'Embeddings, ingestion, and retrieval — a memory backbone for other apps'
        ],
        tech: 'Rust · Postgres / pgvector · embeddings · sequence modeling',
        private: true
    },
    {
        section: 'engines', code: 'ENG-05',
        title: 'RustRent',
        kicker: 'Resilient market scraper',
        stats: 'Rust · async · anti-bot resilient',
        short: 'A resilient rental-market scraper and analysis pipeline in Rust — engineered to get through aggressive anti-bot and rate-limit defenses.',
        image: 'images/rustrent/rent-analysis.webp',
        tags: ['Anti-bot scraping', 'Resilient parsing', 'Async', 'Data pipeline'],
        description: 'RustRent is a rental-market analysis tool in Rust — but the hard part was never the analysis, it was the scraping. Listing sites throw serious defenses at automated clients: fingerprinting, rate limits, bot detection, and markup that shifts under you. RustRent is built to get through all of it reliably — fingerprint-aware request pacing and rotation, careful session handling, and parsing resilient to sites changing — then turns the raw firehose into clean, queryable market data. A job-market-listings variant runs the same scraping engine against hiring data.',
        features: [
            'Resilient scraper that gets through aggressive anti-bot / rate-limit defenses',
            'Fingerprint-aware request pacing, rotation, and session handling',
            'Parsing that survives sites changing their markup',
            'Turns a noisy market into clean, queryable data',
            'Job-market-listings variant on the same engine'
        ],
        tech: 'Rust · async · web scraping · data pipeline',
        private: true
    },
    {
        section: 'engines', code: 'ENG-06',
        title: 'WhoAmI',
        kicker: 'High-dimensional personality model',
        stats: 'C# · Avalonia · sparse trait vectors',
        short: 'A high-dimensional personality model that keeps nuance and contradiction instead of bucketing into Big Five.',
        image: 'images/whoami/whoami.webp',
        tags: ['Personality model', 'High-dimensional vectors', 'Avalonia', 'C#'],
        description: 'WhoAmI is a personality-assessment engine that avoids Big-Five bucketing by representing people as sparse, high-dimensional trait vectors. It tracks co-activation — so "opposite" traits can coexist — keeps context-dependent profiles (Work, Social, Stress) instead of averaging them away, and treats contradictions as signal rather than noise. It outputs both a familiar MBTI-style type and a full nuanced vector profile, in a cross-platform Avalonia desktop app.',
        features: [
            'Sparse multi-hot trait vectors — no Big-Five bucketing',
            'Co-activation tracking: contradictory traits can coexist',
            'Context-specific profiles (Work / Social / Stress), not global averages',
            'Dual output: MBTI-style type + high-dimensional profile',
            'Cross-platform Avalonia desktop GUI'
        ],
        tech: 'C# · .NET · Avalonia · vector modeling',
        github: 'https://github.com/camdenconrad/WhoAmI'
    }
];

// ---- Gallery state ----
let galleryIndex = 0;
let galleryTimer = null;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---- Render ----
document.addEventListener('DOMContentLoaded', () => {
    buildOrbitTicks();
    renderProjects();
    initNav();
    initModal();
    initReveal();
});

function renderProjects() {
    document.querySelectorAll('.projects-grid').forEach(grid => {
        const section = grid.dataset.grid;
        projectsData.filter(p => p.section === section).forEach(p => {
            grid.appendChild(createCard(p));
        });
    });
}

function createCard(project) {
    const card = document.createElement('article');
    card.className = 'project-card';

    let thumb;
    if (project.image) {
        thumb = `<div class="card-thumb photo" style="background-image:url('${esc(project.image)}')" role="img" aria-label="${esc(project.title)} screenshot"></div>`;
    } else {
        thumb = `<div class="card-thumb"><div class="console-thumb">${consoleVisuals[project.visual] || ''}<span class="console-readout">${esc(project.code)}</span></div></div>`;
    }

    const badge = project.flagship ? `<span class="flagship-badge">FLAGSHIP</span>` : '';
    const linkState = project.private ? 'PRIVATE' : (project.github || project.steam ? 'DETAIL ▸' : 'DETAIL ▸');

    const kicker = project.kicker ? `<div class="card-kicker mono">${esc(project.kicker)}</div>` : '';
    const stats = project.stats ? `<div class="card-stats mono">${esc(project.stats)}</div>` : '';
    const repoLink = project.github
        ? `<a class="card-repo" href="${esc(project.github)}" target="_blank" rel="noopener" aria-label="${esc(project.title)} repository on GitHub" onclick="event.stopPropagation()">${gitSvg}</a>`
        : '';

    card.innerHTML = `
        ${badge}
        <span class="card-corner">${esc(project.code)}</span>
        ${thumb}
        <div class="card-info">
            <h3 class="card-title">${esc(project.title)}</h3>
            ${kicker}
            <p class="card-desc">${esc(project.short)}</p>
            ${stats}
            <div class="card-tags">${project.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
            <div class="card-foot">
                <span class="card-foot-right">${repoLink}<span class="open">${linkState}</span></span>
            </div>
        </div>`;

    card.addEventListener('click', () => openModal(project));
    card.tabIndex = 0;
    card.addEventListener('keydown', e => { if (e.key === 'Enter') openModal(project); });
    return card;
}

// ---- Modal ----
function openModal(project) {
    const modal = document.getElementById('projectModal');
    const body = document.getElementById('modalBody');
    const winTitle = document.getElementById('modalWinTitle');
    if (winTitle) winTitle.textContent = `${project.code} — ${project.title}`;
    stopGallery();

    // media
    let media = '';
    if (project.gallery && project.gallery.length) {
        galleryIndex = 0;
        const imgs = project.gallery.map((img, i) =>
            `<img src="${esc(img)}" alt="${esc(project.title)} screenshot ${i + 1}" class="gallery-image ${i === 0 ? 'active' : ''}" loading="lazy">`).join('');
        const dots = project.gallery.map((_, i) =>
            `<button class="gallery-indicator ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})" aria-label="Slide ${i + 1}"></button>`).join('');
        media = `<div class="modal-gallery"><div class="gallery-container">
            <button class="gallery-nav gallery-prev" onclick="navigateGallery(-1)" aria-label="Previous"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg></button>
            <div class="gallery-images">${imgs}</div>
            <button class="gallery-nav gallery-next" onclick="navigateGallery(1)" aria-label="Next"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></button>
            </div><div class="gallery-indicators">${dots}</div></div>`;
    } else if (project.image) {
        media = `<div class="modal-media"><img src="${esc(project.image)}" alt="${esc(project.title)}" loading="lazy"></div>`;
    } else if (project.visual) {
        media = `<div class="modal-media"><div class="console-thumb modal-hero-console">${consoleVisuals[project.visual] || ''}<span class="console-readout">${esc(project.code)}</span></div></div>`;
    }

    // actions
    const btns = [];
    if (project.github) btns.push(actionBtn(project.github, gitSvg + 'View on GitHub'));
    if (project.steam) btns.push(actionBtn(project.steam, 'View on Steam'));
    if (project.espn) btns.push(actionBtn(project.espn, 'Read on ESPN'));
    if (project.links) project.links.forEach(l => btns.push(actionBtn(l.url, esc(l.label))));
    if (project.private) btns.push(`<span class="modal-private-note">Private repository — no public link</span>`);
    btns.push(`<button class="modal-action-btn secondary" data-close>Close</button>`);

    body.innerHTML = `
        <div class="modal-eyebrow">${esc(project.code)} · ${esc(project.section.toUpperCase())}</div>
        <h2 class="modal-title" id="modalTitle">${esc(project.title)}</h2>
        ${project.kicker ? `<div class="modal-kicker mono">${esc(project.kicker)}</div>` : ''}
        <div class="modal-meta">${project.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
        ${project.stats ? `<div class="modal-stats mono">${esc(project.stats)}</div>` : ''}
        ${media}
        <p class="modal-description">${esc(project.description)}</p>
        ${project.why ? `<div class="modal-why"><span class="modal-why-label mono">WHY IT EXISTS</span><p>${esc(project.why)}</p></div>` : ''}
        <div class="modal-section modal-features"><h3>Highlights</h3><ul>${project.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul></div>
        <div class="modal-section"><h3>Stack</h3><p class="modal-tech">${esc(project.tech)}</p></div>
        <div class="modal-actions">${btns.join('')}</div>`;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (project.gallery && project.gallery.length > 1) startGallery();
}

const gitSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>';
function actionBtn(url, label) {
    return `<a href="${esc(url)}" target="_blank" rel="noopener" class="modal-action-btn">${label}</a>`;
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    stopGallery();
}

function initModal() {
    document.getElementById('projectModal').addEventListener('click', e => {
        if (e.target.closest('[data-close]') || e.target.classList.contains('modal-overlay')) closeModal();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ---- Gallery ----
function navigateGallery(dir) {
    const imgs = document.querySelectorAll('.gallery-image');
    const dots = document.querySelectorAll('.gallery-indicator');
    if (!imgs.length) return;
    imgs[galleryIndex].classList.remove('active');
    dots[galleryIndex].classList.remove('active');
    galleryIndex = (galleryIndex + dir + imgs.length) % imgs.length;
    imgs[galleryIndex].classList.add('active');
    dots[galleryIndex].classList.add('active');
    startGallery();
}
function goToSlide(i) {
    const imgs = document.querySelectorAll('.gallery-image');
    const dots = document.querySelectorAll('.gallery-indicator');
    if (!imgs.length) return;
    imgs[galleryIndex].classList.remove('active');
    dots[galleryIndex].classList.remove('active');
    galleryIndex = i;
    imgs[galleryIndex].classList.add('active');
    dots[galleryIndex].classList.add('active');
    startGallery();
}
function startGallery() { stopGallery(); galleryTimer = setInterval(() => navigateGallery(1), 5200); }
function stopGallery() { if (galleryTimer) { clearInterval(galleryTimer); galleryTimer = null; } }

// ---- Navigation ----
function initNav() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const links = document.getElementById('navLinks');
    toggle.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => { links.classList.remove('open'); toggle.setAttribute('aria-expanded', false); });
    });

    const sections = document.querySelectorAll('section[id], header[id]');
    const spy = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                document.querySelectorAll('.nav-link').forEach(l =>
                    l.classList.toggle('active', l.dataset.section === e.target.id));
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));
}

// ---- Reveal on scroll ----
function initReveal() {
    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.project-card').forEach((c, i) => {
        c.style.transitionDelay = `${(i % 4) * 60}ms`;
        io.observe(c);
    });
}

// ---- Hero orbit tick marks ----
function buildOrbitTicks() {
    const g = document.querySelector('.orbit-ticks');
    if (!g) return;
    const cx = 300, cy = 300, r1 = 268, r2 = 280;
    let out = '';
    for (let i = 0; i < 60; i++) {
        const a = (i / 60) * Math.PI * 2;
        const long = i % 5 === 0;
        const ir = long ? 262 : r1;
        out += `<line class="orbit-tick" x1="${cx + Math.cos(a) * ir}" y1="${cy + Math.sin(a) * ir}" x2="${cx + Math.cos(a) * r2}" y2="${cy + Math.sin(a) * r2}" opacity="${long ? 0.5 : 0.25}"/>`;
    }
    g.innerHTML = out;

    // place satellites on their rings
    const satA = document.querySelector('.sat-a');
    const satB = document.querySelector('.sat-b');
    if (satA) { satA.setAttribute('cx', 550); satA.setAttribute('cy', 300); }
    if (satB) { satB.setAttribute('cx', 480); satB.setAttribute('cy', 300); }
}

// expose gallery handlers for inline onclick
window.navigateGallery = navigateGallery;
window.goToSlide = goToSlide;
window.closeModal = closeModal;

console.log('%cCAMDEN CONRAD — systems & flight software', 'color:#E96E2C;font-family:monospace;font-size:13px;');
