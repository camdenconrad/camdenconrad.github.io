// Projects Data
const projectsData = [
    {
        id: 1,
        title: "Ajaara",
        shortDescription: "Narrative action-adventure game with custom systems and original soundtrack",
        fullDescription: "Ajaara is an ongoing narrative action-adventure game built in Unreal Engine 5. As the sole developer, I'm building gameplay systems for combat mechanics, AI behaviors, and player decision-making from the ground up. The project showcases my ability to handle multiple disciplines including programming, 3D modeling, rigging, animation, and audio production.",
        image: "https://via.placeholder.com/400x250/0a0a0f/00ff88?text=Ajaara",
        category: "Unreal",
        tags: ["Unreal Engine 5", "C++", "AI Systems", "3D Modeling", "Audio Design"],
        youtubeId: "", // Add when available
        githubUrl: "https://github.com/camdenconrad/ajaara",
        features: [
            "Custom combat mechanics with responsive controls",
            "AI behavior systems for dynamic enemy interactions",
            "Player decision-making framework affecting narrative flow",
            "Optimized 3D models, rigging, and animation pipeline",
            "Original soundtrack and audio effects in Ableton Live",
            "Performance-focused development for real-time gameplay"
        ],
        technologies: "Unreal Engine 5, C++, Blueprints, Autodesk Maya, Ableton Live"
    },
    {
        id: 2,
        title: "Rule-Based Imaging (RBI)",
        shortDescription: "Generative AI system using Wave Function Collapse and structural analysis",
        fullDescription: "RBI is a cutting-edge generative AI system that synthesizes images through probabilistic application of learned spatial and chromatic rules. The system analyzes grayscale properties (luminance, gradients, entropy) to preserve logical image structure, then applies Wave Function Collapse with 8-directional weighted adjacency constraints for coherent generation. This project demonstrates advanced understanding of procedural generation algorithms and AI-driven content creation.",
        image: "https://via.placeholder.com/400x250/0a0a0f/0099ff?text=Rule-Based+Imaging",
        category: "AI",
        tags: ["C#", "AI/ML", "Wave Function Collapse", "Procedural Generation", "Avalonia UI"],
        youtubeId: "",
        githubUrl: "https://github.com/camdenconrad/rule-based-imaging",
        features: [
            "Structural rule graph analyzing luminance, gradients, and entropy",
            "Wave Function Collapse with 8-directional weighted adjacency",
            "Structure-aware color placement maintaining adjacency patterns",
            "Probabilistic generation based on learned spatial rules",
            "Custom UI built with Avalonia for interactive parameter tuning",
            "Coherent image synthesis from training data analysis"
        ],
        technologies: "C#, Avalonia UI, Custom Algorithms, Image Processing, WFC Algorithm"
    },
    {
        id: 3,
        title: "ARIA Neural Network",
        shortDescription: "Experimental self-reflective AI with dynamic neural architecture",
        fullDescription: "ARIA is a research project exploring self-restructuring neural network architectures capable of introspection and dynamic rewiring. This experimental system investigates autonomous control patterns for memory structures, identity modules, and optimization pathways. The project pushes boundaries in adaptive AI systems and emergent self-organization patterns, representing cutting-edge exploration in neural network design.",
        image: "https://via.placeholder.com/400x250/0a0a0f/ff0099?text=ARIA+Neural+Network",
        category: "AI",
        tags: ["C#", "Neural Networks", "LLM Integration", "Research", "Adaptive Systems"],
        youtubeId: "",
        githubUrl: "https://github.com/camdenconrad/aria-neural-network",
        features: [
            "Self-restructuring neural architecture with introspection capabilities",
            "Dynamic rewiring based on performance metrics",
            "Autonomous control patterns for memory and identity structures",
            "LLM integration for enhanced reasoning capabilities",
            "Experimental emergent self-organization patterns",
            "Custom training pipeline for adaptive optimization"
        ],
        technologies: "C#, Custom Neural Architecture, LLM APIs, Advanced Algorithms"
    },
    {
        id: 4,
        title: "Full-Stack Multiplayer Platform",
        shortDescription: "Real-time multiplayer web platform with cross-device synchronization",
        fullDescription: "A complete full-stack multiplayer platform enabling real-time gameplay across desktop and mobile devices. Built from the ground up with custom client-server architecture using WebSocket communication for synchronized game state. This project demonstrates proficiency in networking, database operations, server hosting, and responsive front-end development with focus on performance and scalability.",
        image: "https://via.placeholder.com/400x250/0a0a0f/667eea?text=Multiplayer+Platform",
        category: "Web",
        tags: ["C#", "Web Technologies", "Multiplayer", "Networking", "Full-Stack"],
        youtubeId: "",
        githubUrl: "https://github.com/camdenconrad/multiplayer-platform",
        features: [
            "Real-time WebSocket communication for game state sync",
            "Custom client-server architecture built from scratch",
            "Desktop-hosted server with database operations",
            "Responsive front-end supporting desktop and mobile",
            "Cross-device play with seamless synchronization",
            "Scalable networking infrastructure for concurrent players"
        ],
        technologies: "C#, WebSockets, Web Technologies, Database Management, Server Architecture"
    },
    {
        id: 5,
        title: "Axis Games — Professional Work",
        shortDescription: "Systems developer specializing in AI, ML, and gameplay architecture",
        fullDescription: "As a Systems Developer at Axis Games (April 2025 - Present), I specialize in AI, machine learning, and gameplay systems in Unity. Key contributions include rewriting and shipping the Axis Replay System with improved memory management, optimizing major tools like the crowd system editor for faster iteration, and designing the Article System from scratch for data-driven gameplay. I work independently on complex systems while maintaining clear communication with the broader team.",
        image: "https://via.placeholder.com/400x250/0a0a0f/00ff88?text=Axis+Games",
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
        title: "Game Design & Development Projects",
        shortDescription: "Advanced systems from UNC Charlotte coursework",
        fullDescription: "Game projects from UNC Charlotte's Intro to Game Design and Development course (Fall 2023). These projects focused on advanced technical implementations including sophisticated memory management techniques for character customization systems and iterative playtesting workflows. The projects demonstrate fundamental game development skills and systematic approach to game design iteration.",
        image: "https://via.placeholder.com/400x250/0a0a0f/ff6600?text=UNC+Game+Projects",
        category: "Unity",
        tags: ["Unity", "C#", "Memory Management", "Game Design", "Academic"],
        youtubeId: "",
        githubUrl: "https://github.com/camdenconrad/uncc-game-projects",
        features: [
            "Advanced memory management for character customization",
            "Iterative playtesting and feedback integration",
            "Systematic gameplay refinement process",
            "Implementation of core game mechanics",
            "Performance optimization techniques",
            "Academic foundation in game development principles"
        ],
        technologies: "Unity, C#, Game Design Principles, Memory Management"
    }
];

// State Management
let currentFilter = 'all';
let currentProjects = [...projectsData];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initializeEventListeners();
    initializeIntersectionObserver();
});

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

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.shortDescription}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
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
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h2 class="modal-title">${project.title}</h2>
        <div class="modal-meta">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="modal-media">
            ${project.youtubeId ? `
                <iframe 
                    class="modal-video"
                    src="https://www.youtube.com/embed/${project.youtubeId}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            ` : ''}
            <img src="${project.image}" alt="${project.title}" class="modal-image">
        </div>
        <p class="modal-description">${project.fullDescription}</p>
        <div class="modal-features">
            <h3>Key Features</h3>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        <div class="modal-features">
            <h3>Technologies Used</h3>
            <p style="color: var(--text-secondary); padding-left: 1.5rem;">${project.technologies}</p>
        </div>
        <div class="modal-actions">
            <a href="${project.githubUrl}" target="_blank" rel="noopener" class="modal-action-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View on GitHub
            </a>
            <button onclick="closeModal()" class="modal-action-btn secondary">Close</button>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
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
