// Projects Data
const projectsData = [
    {
        id: 1,
        title: "Ajaara",
        shortDescription: "Narrative action-adventure blending Indian and Native American mythology with emergent AI",
        fullDescription: "Ajaara is my ongoing capstone project — a narrative action-adventure game that blends Indian and Native American mythological influences into a reverse Bhagavad Gita–inspired story about moral defiance and divine wrath. As the sole developer, I'm building this in Unreal Engine 5 from the ground up, with a focus on making combat and AI systems feel reactive and alive through emergent behavior design. The game is both a technical showcase and a cultural synthesis, exploring themes of duty, rebellion, and consequence through interactive storytelling. Beyond programming, I handle all 3D modeling, rigging, animation, and audio production, creating an original soundtrack in Ableton Live that supports the narrative's emotional weight.",
        image: "images/ajaara/HighresScreenshot00004.jpg",
        category: "Unreal",
        tags: ["Unreal Engine 5", "C++", "AI Systems", "3D Modeling", "Audio Design"],
        youtubeId: "2gdyq9h1tRw",
        githubUrl: "https://github.com/camdenconrad/ajaara",
        gallery: [
            "images/ajaara/Ajara_SS.png",
            "images/ajaara/Ajaara_Player_SS.png",
            "images/ajaara/Ajaara_Village_SS.png",
            "images/ajaara/HighresScreenshot00001.png",
            "images/ajaara/HighresScreenshot00002.png",
            "images/ajaara/HighresScreenshot00003.jpg",
            "images/ajaara/HighresScreenshot00004.jpg",
            "images/ajaara/HighresScreenshot00006.jpg",
            "images/ajaara/Screenshot 2025-04-22 094645.png",
            "images/ajaara/Screenshot 2025-04-22 094737.png",
            "images/ajaara/Screenshot 2025-04-22 094835.png",
            "images/ajaara/Screenshot 2025-04-22 095328.png"
        ],
        features: [
            "Reverse Bhagavad Gita narrative: moral defiance against divine authority",
            "Cultural synthesis of Indian and Native American mythological elements",
            "Emergent AI behavior systems designed to feel reactive and alive",
            "Custom combat mechanics emphasizing player agency and consequence",
            "Player decision-making framework with branching moral implications",
            "Optimized 3D modeling pipeline focused on performance and style",
            "Original soundtrack and soundscape crafted in Ableton Live",
            "Solo-developed: programming, art, animation, audio, and design"
        ],
        technologies: "Unreal Engine 5, C++, Blueprints, Autodesk Maya, Ableton Live"
    },
    {
        id: 2,
        title: "Rule-Based Imaging (RBI)",
        shortDescription: "Research into how AI learns aesthetic logic through spatial reasoning",
        fullDescription: "RBI is a generative AI system exploring how artificial systems can learn aesthetic logic through spatial reasoning — bridging art, math, and cognition. Rather than treating image generation as pure pattern matching, RBI analyzes the structural logic of images (luminance, gradients, entropy) to understand why compositions work, then applies that understanding through Wave Function Collapse with 8-directional weighted adjacency constraints. The system doesn't just copy — it reasons about spatial relationships and chromatic harmony. This research demonstrates that procedural generation can be more than technical novelty; it can be a creative system with intent and structure, capable of learning the 'rules' that make visual art coherent.",
        image: "images/rbi/generated_20251105_030834.png",
        category: "AI",
        tags: ["C#", "AI/ML", "Wave Function Collapse", "Procedural Generation", "Avalonia UI"],
        youtubeId: "",
        githubUrl: "https://github.com/camdenconrad/rule-based-imaging",
        gallery: [
            "images/rbi/generated_20251102_131309.png",
            "images/rbi/generated_20251102_131716.png",
            "images/rbi/generated_20251102_132721.png",
            "images/rbi/generated_20251102_132741.png",
            "images/rbi/generated_20251102_134428.png",
            "images/rbi/generated_20251103_153947.png",
            "images/rbi/generated_20251103_231626.png",
            "images/rbi/generated_20251103_232050.png",
            "images/rbi/generated_20251104_015719.png",
            "images/rbi/generated_20251104_151149.png",
            "images/rbi/generated_20251104_152116.png",
            "images/rbi/generated_20251105_024702.png",
            "images/rbi/generated_20251105_030834.png",
            "images/rbi/generated_20251108_033024.png"
        ],
        features: [
            "Explores how AI learns aesthetic principles through spatial analysis",
            "Bridges art, mathematics, and cognitive reasoning in generative systems",
            "Structural rule graph analyzing luminance, gradients, and entropy",
            "Wave Function Collapse with 8-directional weighted adjacency",
            "Structure-aware color placement maintaining logical coherence",
            "Learns 'why' compositions work, not just 'what' they look like",
            "Custom UI built with Avalonia for real-time experimentation",
            "Research-focused: treats generation as reasoning, not imitation"
        ],
        technologies: "C#, Avalonia UI, Custom Algorithms, Image Processing, WFC Algorithm"
    },
    {
        id: 3,
        title: "ARIA Neural Network",
        shortDescription: "Exploring self-reflective architectures and emergent intelligence",
        fullDescription: "ARIA is part of my ongoing exploration into self-reflective and self-organizing neural architectures — systems that don't just process information, but examine and restructure themselves. This research stems from a broader fascination with adaptive systems and emergent intelligence: the question of whether AI can develop genuine autonomy through introspection rather than external training. ARIA experiments with dynamic rewiring, where the network analyzes its own performance and reorganizes its structure accordingly. It investigates autonomous control patterns for memory, identity modules, and optimization pathways — treating the architecture itself as a living system. This isn't just technical experimentation; it's an exploration of what happens when we give neural networks the tools to reflect on their own existence and adapt from within. Additional image: images/aria/Screenshot_20251013_160535.png.",
        image: "Screenshot_20251110_023031.png",
        category: "AI",
        tags: ["C#", "Neural Networks", "LLM Integration", "Research", "Adaptive Systems"],
        youtubeId: "",
        githubUrl: "https://github.com/camdenconrad/aria-neural-network",
        features: [
            "Self-organizing architectures with introspective capabilities",
            "Explores autonomy through internal reflection, not just training",
            "Dynamic rewiring based on self-analyzed performance metrics",
            "Autonomous control patterns for memory and identity structures",
            "Part of broader research into emergent intelligence systems",
            "LLM integration for enhanced reasoning and self-reflection",
            "Experimental approach: architecture as a living, adaptive system",
            "Investigates what happens when AI can examine its own existence"
        ],
        technologies: "C#, Custom Neural Architecture, LLM APIs, Advanced Algorithms"
    },
    {
        id: 4,
        title: "Full-Stack Multiplayer Platform",
        shortDescription: "Exploring network reliability and seamless cross-device connectivity",
        fullDescription: "This full-stack multiplayer platform was born from a fascination with network reliability and scalable architecture — specifically, how to design systems that connect players seamlessly across devices while maintaining consistent state. Built entirely from scratch, it's a study in distributed systems design: custom client-server architecture with WebSocket communication, desktop-hosted server infrastructure, and responsive front-end that adapts to both desktop and mobile contexts. The project wasn't just about making multiplayer work; it was about understanding how to build resilient, fault-tolerant systems that gracefully handle latency, disconnections, and synchronization challenges. This is systems design at its core — turning a technical challenge into an exploration of what makes networked experiences feel smooth and reliable.",
        image: "generated_20251110_032649.webp",
        category: "Web",
        tags: ["C#", "Web Technologies", "Multiplayer", "Networking", "Full-Stack"],
        youtubeId: "",
        githubUrl: "https://github.com/camdenconrad/multiplayer-platform",
        features: [
            "Explores network reliability and fault-tolerant system design",
            "Seamless cross-device connectivity: desktop and mobile unified",
            "Real-time WebSocket communication with graceful degradation",
            "Custom client-server architecture built from first principles",
            "Desktop-hosted server with scalable database operations",
            "Handles latency, disconnections, and state synchronization elegantly",
            "Study in distributed systems and resilient architecture",
            "Transforms technical challenge into systems-design story"
        ],
        technologies: "C#, WebSockets, Web Technologies, Database Management, Server Architecture"
    },
    {
        id: 5,
        title: "Axis Games — Professional Work",
        shortDescription: "Systems developer specializing in AI, ML, and gameplay architecture",
        fullDescription: "As a Systems Developer at Axis Games (April 2025 - Present), I specialize in AI, machine learning, and gameplay systems in Unity. Key contributions include rewriting and shipping the Axis Replay System with improved memory management, optimizing major tools like the crowd system editor for faster iteration, and designing the Article System from scratch for data-driven gameplay. I work independently on complex systems while maintaining clear communication with the broader team.",
        image: "Axis_football_26-1090110268.png",
        category: "Unity",
        tags: ["Unity", "C#", "AI/ML", "Systems Architecture", "Professional"],
        youtubeId: "",
        githubUrl: "", // Professional work - no public repo
        features: [
            "Rewrote Axis Replay System with fixed memory management",
            "Optimized crowd system editor for dramatically faster iteration",
            "Designed and implemented Article System for data-driven gameplay",
            "Core developer for AI and machine learning systems",
            "Handle complex experimental implementations independently",
            "Maintain scalable, maintainable code for team collaboration"
        ],
        technologies: "Unity, C#, AI/ML Systems, Data-Driven Architecture, Optimization"
    },
    {
        id: 6,
        title: "Titan — UNC Charlotte Game Project",
        shortDescription: "2D action game with advanced character customization and memory management",
        fullDescription: "Titan is a 2D action game developed for UNC Charlotte's Intro to Game Design and Development course (Fall 2023). The project showcases sophisticated technical implementations including advanced memory management techniques for a robust character customization system, allowing players to modify their character's appearance and abilities dynamically. Through iterative playtesting and feedback integration, the game evolved from initial concept to polished experience. The development process emphasized systematic gameplay refinement, performance optimization, and building scalable systems. This project demonstrates strong fundamentals in game development architecture and the ability to translate design concepts into functional, performant code.",
        image: "Screenshot_20251110_023820.png",
        category: "Unity",
        tags: ["Unity", "C#", "Memory Management", "2D Game", "Character Customization"],
        youtubeId: "e40fMZ1vMMs",
        githubUrl: "https://github.com/camdenconrad/titan-game",
        gallery: [],
        features: [
            "Advanced memory management for dynamic character customization",
            "Robust character customization system with persistent data",
            "2D action gameplay with responsive controls",
            "Iterative playtesting and feedback integration workflow",
            "Systematic gameplay refinement and balancing",
            "Performance optimization for smooth gameplay",
            "Scalable architecture for extensible game systems",
            "Academic foundation demonstrating core game dev principles"
        ],
        technologies: "Unity, C#, Memory Management, 2D Game Development, Data Persistence"
    }
];

// State Management
let currentFilter = 'all';
let currentProjects = [...projectsData];
let currentGalleryIndex = 0;
let galleryAutoplayInterval = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initializeEventListeners();
    initializeIntersectionObserver();
});

// Gallery Navigation Functions
function navigateGallery(direction) {
    const images = document.querySelectorAll('.gallery-image');
    const indicators = document.querySelectorAll('.gallery-indicator');

    if (images.length === 0) return;

    // Stop autoplay when user manually navigates
    stopGalleryAutoplay();

    images[currentGalleryIndex].classList.remove('active');
    indicators[currentGalleryIndex].classList.remove('active');

    currentGalleryIndex += direction;

    if (currentGalleryIndex >= images.length) {
        currentGalleryIndex = 0;
    } else if (currentGalleryIndex < 0) {
        currentGalleryIndex = images.length - 1;
    }

    images[currentGalleryIndex].classList.add('active');
    indicators[currentGalleryIndex].classList.add('active');

    // Restart autoplay
    startGalleryAutoplay();
}

function goToSlide(index) {
    const images = document.querySelectorAll('.gallery-image');
    const indicators = document.querySelectorAll('.gallery-indicator');

    if (images.length === 0) return;

    stopGalleryAutoplay();

    images[currentGalleryIndex].classList.remove('active');
    indicators[currentGalleryIndex].classList.remove('active');

    currentGalleryIndex = index;

    images[currentGalleryIndex].classList.add('active');
    indicators[currentGalleryIndex].classList.add('active');

    startGalleryAutoplay();
}

function startGalleryAutoplay() {
    stopGalleryAutoplay();
    galleryAutoplayInterval = setInterval(() => {
        navigateGallery(1);
    }, 5000); // Change slide every 5 seconds
}

function stopGalleryAutoplay() {
    if (galleryAutoplayInterval) {
        clearInterval(galleryAutoplayInterval);
        galleryAutoplayInterval = null;
    }
}

// Render Projects
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';

    currentProjects.forEach((project, index) => {
        const card = createProjectCard(project);
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
        grid.appendChild(card);
    });
}

// Create Project Card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.category = project.category;

    const hasImage = project.image && project.image.trim().length > 0;
    const bgStyle = hasImage ? `style=\"background-image: url('${project.image.replace(/"/g, '&quot;')}')\"` : '';

    card.innerHTML = `
        <div class="project-thumb ${hasImage ? '' : 'no-image'}" ${bgStyle} aria-label="${project.title}"></div>
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.shortDescription}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class=\"project-tag\">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    card.addEventListener('click', () => openModal(project));

    return card;
}

// Filter Projects
function filterProjects(category) {
    currentFilter = category;

    if (category === 'all') {
        currentProjects = [...projectsData];
    } else {
        currentProjects = projectsData.filter(project => project.category === category);
    }

    // Animate out
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
    });

    // Render new projects after animation
    setTimeout(() => {
        renderProjects();
    }, 300);
}

// Open Modal
function openModal(project) {
    console.log('=== OPENING MODAL ===');
    console.log('Project:', project.title);
    console.log('YouTube ID:', project.youtubeId);
    console.log('Gallery:', project.gallery);

    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');

    if (!modal || !modalBody) {
        console.error('Modal elements not found!');
        return;
    }

    // Build gallery HTML if gallery exists
    let galleryHTML = '';
    if (project.gallery && project.gallery.length > 0) {
        const galleryImages = project.gallery.map((img, index) => {
            return '<img src="' + img + '" alt="' + project.title + ' screenshot ' + (index + 1) + '" class="gallery-image ' + (index === 0 ? 'active' : '') + '" data-index="' + index + '" loading="lazy">';
        }).join('');

        const galleryIndicators = project.gallery.map((_, index) => {
            return '<button class="gallery-indicator ' + (index === 0 ? 'active' : '') + '" onclick="goToSlide(' + index + ')" data-index="' + index + '" aria-label="Go to slide ' + (index + 1) + '"></button>';
        }).join('');

        galleryHTML = '<div class="modal-gallery"><h3>Gallery</h3><div class="gallery-container"><button class="gallery-nav gallery-prev" onclick="navigateGallery(-1)" aria-label="Previous image"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg></button><div class="gallery-images">' + galleryImages + '</div><button class="gallery-nav gallery-next" onclick="navigateGallery(1)" aria-label="Next image"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button></div><div class="gallery-indicators">' + galleryIndicators + '</div></div>';
    }

    // Build YouTube video HTML if video exists
    let mediaHTML = '';
    if (project.youtubeId) {
        console.log('Adding YouTube video:', project.youtubeId);
        mediaHTML = '<div class="modal-media"><iframe class="modal-video" src="https://www.youtube.com/embed/' + project.youtubeId + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>';
    } else if (project.image && project.image.trim().length > 0) {
        mediaHTML = '<div class="modal-media"><img src="' + project.image + '" alt="' + project.title + '" class="modal-image"></div>';
    } else {
        mediaHTML = '<div class="modal-media"><div class="media-placeholder" aria-label="No media available"></div></div>';
    }

    // Build tags HTML
    const tagsHTML = project.tags.map(tag => '<span class="project-tag">' + tag + '</span>').join('');

    // Build features HTML
    const featuresHTML = project.features.map(feature => '<li>' + feature + '</li>').join('');

    // Build GitHub button HTML if URL exists
    const githubButtonHTML = project.githubUrl ? '<a href="' + project.githubUrl + '" target="_blank" rel="noopener" class="modal-action-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>View on GitHub</a>' : '';

    // Construct full modal HTML
    const fullHTML = '<h2 class="modal-title">' + project.title + '</h2><div class="modal-meta">' + tagsHTML + '</div>' + mediaHTML + galleryHTML + '<p class="modal-description">' + project.fullDescription + '</p><div class="modal-features"><h3>Key Features</h3><ul>' + featuresHTML + '</ul></div><div class="modal-features"><h3>Technologies Used</h3><p style="color: var(--text-secondary); padding-left: 1.5rem;">' + project.technologies + '</p></div><div class="modal-actions">' + githubButtonHTML + '<button onclick="closeModal()" class="modal-action-btn secondary">Close</button></div>';

    // Set the modal content
    modalBody.innerHTML = fullHTML;

    console.log('Modal HTML constructed successfully');
    console.log('Media HTML present:', mediaHTML.length > 0);
    console.log('Gallery HTML present:', galleryHTML.length > 0);

    // Show the modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Initialize gallery if it exists
    if (project.gallery && project.gallery.length > 0) {
        currentGalleryIndex = 0;
        startGalleryAutoplay();
        console.log('Gallery autoplay started with', project.gallery.length, 'images');
    }

    console.log('=== MODAL OPENED ===');
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    stopGalleryAutoplay();
}

// Scroll to Projects
function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

// Event Listeners
function initializeEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterProjects(e.target.dataset.filter);
        });
    });

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');

            const section = e.target.dataset.section;
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' });

            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        });
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Update Active Nav Link on Scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.dataset.section === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Intersection Observer for Animations
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Dynamic Background Particles
function createDynamicParticles() {
    const background = document.querySelector('.background-animation');
    const particleCount = 10;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;
        background.appendChild(particle);
    }
}

// Call on load
createDynamicParticles();

// Smooth reveal animations for elements
function revealOnScroll() {
    const reveals = document.querySelectorAll('.project-card, .about-content, .contact-container');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Console Easter Egg
console.log('%c👾 Welcome to my portfolio! 👾', 'font-size: 20px; color: #00ff88; font-weight: bold;');
console.log('%cLooking for something cool? Try opening the dev tools and exploring the code!', 'font-size: 14px; color: #0099ff;');
console.log('%cInterested in working together? Reach out via the contact section!', 'font-size: 14px; color: #ff0099;');
