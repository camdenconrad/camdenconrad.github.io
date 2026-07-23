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
    // ===== Flight Software & Aerospace =====
    {
        section: 'aerospace', code: 'FSW-01', flagship: true,
        title: 'Orbital',
        short: 'High-fidelity solar-system simulator and deterministic trajectory solver — reproduces published mission launch windows from first principles.',
        image: 'images/orbital/porkchop.png',
        gallery: ['images/orbital/porkchop.png', 'images/orbital/hero.png'],
        tags: ['Rust', 'wgpu', 'Orbital mechanics', '1PN n-body', 'JPL DE440'],
        description: 'Orbital is a from-scratch, high-fidelity solar-system simulator and deterministic trajectory solver — not a wrapper around GMAT or Nyx. It queries real JPL DE440 body states through ANISE across a 21-body catalog, then numerically propagates the spacecraft under Newtonian n-body plus first post-Newtonian (1PN) relativistic dynamics using an adaptive Dormand–Prince 5(4) integrator written as a pure function of its inputs — no wall clock, no threads, no randomness — so two runs on the same build are bit-for-bit reproducible. On top of that sits a deterministic beam-search trajectory solver with Lambert seeding and GPU porkchop (C3 / Δv) scans. Given only a departure window, it independently reproduces the Mars 2020 launch opportunity — matching departure date and launch energy to within a day and about 1% — and everything renders live in a wgpu 3D view. It\'s the clearest expression of where I want to be: mission design and GNC.',
        features: [
            'Real JPL DE440 body states via ANISE across a 21-body catalog',
            'Newtonian n-body + 1PN relativity — reproduces Mercury\'s ~43″/century perihelion advance',
            'Deterministic adaptive Dormand–Prince 5(4) propagator — bit-for-bit reproducible on a given build',
            'Beam-search solver reproduces the Mars 2020 launch window to ~1 day / ~1% launch energy',
            'Lambert seeding with GPU porkchop (C3 / Δv) scans',
            'Live wgpu 3D view — orbit trails, arcball camera, true/log-scale toggle',
            'Physics and reproducibility claims covered by automated tests'
        ],
        tech: 'Rust · wgpu · egui · ANISE / JPL DE440 · numerical integration',
        github: 'https://github.com/camdenconrad/Orbital'
    },
    {
        section: 'aerospace', code: 'FSW-02',
        title: 'Besom',
        short: 'Deterministic simulation harness for NASA cFS — identical scenarios produce byte-identical telemetry.',
        image: 'images/besom/ground-station.webp',
        tags: ['Rust', 'Apache-2.0', 'cFS / cFE', 'Determinism', 'Ground station'],
        description: 'Besom is an open-source deterministic simulation harness for NASA\'s core Flight System (cFS). It runs real, unmodified cFE flight software but owns the clock: identical scenarios produce byte-identical telemetry, which supports reproducible regression testing — something NOS3-style real-time simulators aren\'t built for. Besom propagates a two-body orbit in lockstep with the software under test and doubles as a ground station for command and telemetry.',
        features: [
            'Runs real, unmodified cFE flight software',
            'Owns the clock — identical scenarios → byte-identical telemetry',
            'Supports reproducible regression testing of flight software',
            'Propagates a two-body orbit in lockstep with the software',
            'Doubles as a ground station for commanding and telemetry',
            'Open source, Apache-2.0'
        ],
        tech: 'Rust · cFS / cFE · deterministic simulation · Apache-2.0',
        github: 'https://github.com/camdenconrad/besom'
    },
    {
        section: 'aerospace', code: 'FSW-03',
        title: 'Cauldron',
        short: 'GPU-rendered Rust IDE that enforces NASA/JPL coding standards as live, save-time diagnostics.',
        visual: 'cauldron',
        tags: ['Rust', 'wgpu', 'JPL C Standard', 'Power of Ten', 'Static analysis'],
        description: 'Cauldron is a GPU-rendered (wgpu) Rust IDE that checks selected NASA/JPL coding rules — from the Power of Ten and the JPL C coding standard — as live, save-time diagnostics. Beyond typical editor diagnostics, it performs whole-project call-graph analysis and recursion detection, replicating that class of cFS CI check locally so violations surface the moment you save rather than in a remote pipeline.',
        features: [
            'GPU-rendered editor built on wgpu',
            'Checks Power of Ten and JPL C coding rules',
            'Live, save-time diagnostics',
            'Whole-project call-graph analysis beyond typical editor diagnostics',
            'Recursion detection across the full project',
            'Replicates cFS CI checks locally'
        ],
        tech: 'Rust · wgpu · static analysis · call-graph analysis',
        github: 'https://github.com/camdenconrad/cauldron',
        image: 'images/cauldron/ide.webp'
    },

    // ===== Systems & OS =====
    {
        section: 'systems', code: 'OS-01',
        title: 'RuneOS',
        short: 'A full custom, daily-driven Linux stack — packaged kernel, Smithay compositor, native Rust shell, ~30 daemons, custom scheduler.',
        image: 'images/runeos/sunset.webp',
        gallery: ['images/runeos/sunset.webp', 'images/runeos/power.webp', 'images/runeos/desktop2.webp'],
        tags: ['Rust', 'Wayland / Smithay', 'sched_ext', 'Linux', 'Compositor'],
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
        github: 'https://github.com/camdenconrad/rune-runtime',
        links: [
            { label: 'rune-net', url: 'https://github.com/camdenconrad/rune-net' },
            { label: 'runic', url: 'https://github.com/camdenconrad/runic' },
            { label: 'rune-sched', url: 'https://github.com/camdenconradsms/rune-sched' }
        ]
    },
    {
        section: 'systems', code: 'OS-02',
        title: 'Coven',
        short: 'Rune-native mission control orchestrating parallel Claude Code sessions with adversarial red-team review.',
        image: 'images/coven/mission-control.webp',
        tags: ['Rust', 'Orchestration', 'Postgres / pgvector', 'GitHub API'],
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

    // ===== Shipped Games =====
    {
        section: 'games', code: 'GAME-01',
        title: 'Axis Football 2026',
        short: 'Shipped to PC/Xbox/PlayStation, 10,000+ players — zero-GC replay system and a 7.8× crowd-pipeline speedup.',
        image: 'Axis_football_26-1090110268.png',
        tags: ['Unity', 'C#', 'Zero-GC', 'Optimization', 'Shipped'],
        description: 'Axis Football 2026 is a commercial title shipped to PC, Xbox, and PlayStation with 10,000+ players, where I am credited as Contract Systems Programmer. I rebuilt the replay system to be zero-GC — 25 MB captures 15 seconds of full 22-player data with variable-speed playback, and the added instrumentation eliminated the timing-related crashes we were seeing in QA. I re-architected the Crowd Editor pipeline for a 684% (7.8×) speedup, turning a days-long process into minutes and enabling 10× more crowd volume, and automated a live-statistics narrative commentary pipeline.',
        features: [
            'Shipped to PC, Xbox, and PlayStation — 10,000+ players',
            'Rebuilt zero-GC replay: 25 MB for 15s of full 22-player data',
            'Variable-speed playback with timing instrumentation',
            'Eliminated the timing-related crashes seen in QA',
            'Re-architected Crowd Editor pipeline — 684% (7.8×) speedup',
            'Days → minutes, enabling 10× more crowd volume',
            'Automated live-statistics narrative commentary pipeline'
        ],
        tech: 'Unity · C# · zero-GC systems · data-oriented optimization',
        steam: 'https://store.steampowered.com/app/3219190/Axis_Football_2026/',
        espn: 'https://www.espn.com/gaming/story/_/id/45954475/axis-football-2026-release-date'
    },
    {
        section: 'games', code: 'GAME-02',
        title: 'Bellatrix',
        short: 'A from-scratch WGSL path tracer with a custom voxel modeling system on top — no game engine underneath.',
        image: 'images/bellatrix/room.webp',
        gallery: [
            'images/bellatrix/room.webp', 'images/bellatrix/editor-ui.webp', 'images/bellatrix/layers-ai.webp',
            'images/bellatrix/scene-3.webp', 'images/bellatrix/scene-10.webp', 'images/bellatrix/scene-a.webp', 'images/bellatrix/lighting.webp'
        ],
        tags: ['Rust', 'wgpu', 'Path tracing', 'WGSL', 'Renderer'],
        description: 'Bellatrix is a voxel modeling tool built on a rendering engine I wrote entirely from scratch — no game engine underneath. The renderer is a real WGSL path tracer running on wgpu: progressive accumulation, a denoiser, soft shadows, bloom, and depth of field, all hand-written. On top of it sits a custom face-primitive modeling system — ghost placement, depth testing, five selection modes, full undo/redo — with a proprietary format that stores 20,000+ faces at roughly 2 MB. It is where most of my low-level graphics work lives: a physically-based renderer and the editor around it, built end to end.',
        features: [
            'From-scratch WGSL path tracer on wgpu — no engine',
            'Progressive accumulation + denoiser for clean frames',
            'Soft shadows, bloom, and depth-of-field passes',
            'Custom face-primitive voxel modeling system',
            'Ghost placement, depth testing, five selection modes, full undo/redo',
            'Proprietary format: 20,000+ faces at ~2 MB'
        ],
        tech: 'Rust · wgpu · WGSL · path tracing · winit',
        github: 'https://github.com/camdenconrad/Bellatrix'
    },
    {
        section: 'games', code: 'GAME-03',
        title: 'Ajaara',
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
        tags: ['Unreal Engine 5', 'C++', 'AI systems', '3D / Audio'],
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

    // ===== Tools & ML =====
    {
        section: 'tools', code: 'TOOL-01',
        title: 'repliKate',
        short: 'High-velocity continuous-learning ML engine — adapts online without pretraining at ~100 MB RAM.',
        image: 'images/replikate/online-learning.webp',
        tags: ['C#', 'ILGPU', 'Online learning', 'GPU'],
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
        section: 'tools', code: 'TOOL-02',
        title: 'RustRent',
        short: 'Rental-market analysis tool in Rust, with a job-market-listings variant in progress.',
        image: 'images/rustrent/rent-analysis.webp',
        tags: ['Rust', 'Analysis', 'Data'],
        description: 'RustRent is a rental-market analysis tool written in Rust, with a job-market-listings variant currently in progress. It\'s a compact, fast data pipeline for pulling apart a noisy market into something you can reason about.',
        features: [
            'Rental-market analysis in Rust',
            'Fast, compact data pipeline',
            'Job-market-listings variant in progress'
        ],
        tech: 'Rust · data analysis',
        private: true
    },
    {
        section: 'tools', code: 'TOOL-03',
        title: 'Nocturne',
        short: 'Native Rust music client for RuneOS — part of the OS app suite.',
        image: 'images/nocturne/player.webp',
        gallery: ['images/nocturne/player.webp', 'images/nocturne/player-2.webp'],
        tags: ['Rust', 'Wayland', 'Audio', 'Native UI'],
        description: 'Nocturne is a native Rust music client built for RuneOS — a clean, keyboard-driven player that fits the OS\'s design language and rendering stack. A small piece of the daily-driven native app suite.',
        features: [
            'Native Rust client for RuneOS',
            'Keyboard-driven, fits the OS design language',
            'Integrated with the RuneOS rendering stack'
        ],
        tech: 'Rust · native UI · audio',
        github: 'https://github.com/camdenconrad/nocturne'
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

    card.innerHTML = `
        ${badge}
        <span class="card-corner">${esc(project.code)}</span>
        ${thumb}
        <div class="card-info">
            <h3 class="card-title">${esc(project.title)}</h3>
            <p class="card-desc">${esc(project.short)}</p>
            <div class="card-tags">${project.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
            <div class="card-foot">
                <span>${esc(project.tech.split('·')[0].trim())}</span>
                <span class="open">${linkState}</span>
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
        <div class="modal-meta">${project.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
        ${media}
        <p class="modal-description">${esc(project.description)}</p>
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

console.log('%cCAMDEN CONRAD — systems & flight software', 'color:#46d5e0;font-family:monospace;font-size:13px;');
