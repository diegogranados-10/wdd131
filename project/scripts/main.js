// ============================================
// DiegoDev Portfolio - Main JavaScript
// ============================================

// ============================================
// Data Objects and Arrays
// ============================================

// Projects data array
const projects = [
    {
        id: 1,
        title: "Temple Album",
        description: "A responsive gallery showcasing beautiful temple images from around the world with dynamic filtering capabilities.",
        image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        categories: ["html-css", "javascript", "responsive"],
        demoUrl: "../filtered-temples.html",
        githubUrl: "https://github.com/diegogranados-10/wdd131",
        featured: true
    },
    {
        id: 2,
        title: "Product Review Form",
        description: "An interactive form with dynamic product selection, validation, and submission tracking using localStorage.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop",
        tags: ["HTML", "CSS", "JavaScript", "Forms"],
        categories: ["html-css", "javascript"],
        demoUrl: "../form.html",
        githubUrl: "https://github.com/diegogranados-10/wdd131",
        featured: true
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "A responsive place page displaying weather information with wind chill calculations and dynamic content.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
        tags: ["HTML", "CSS", "Responsive"],
        categories: ["html-css", "responsive"],
        demoUrl: "../place.html",
        githubUrl: "https://github.com/diegogranados-10/wdd131",
        featured: true
    },
    {
        id: 4,
        title: "Personal Portfolio",
        description: "This portfolio website showcasing my web development skills, projects, and professional experience.",
        image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop",
        tags: ["HTML", "CSS", "JavaScript", "Responsive"],
        categories: ["html-css", "javascript", "responsive"],
        demoUrl: "index.html",
        githubUrl: "https://github.com/diegogranados-10/wdd131",
        featured: false
    },
    {
        id: 5,
        title: "Basic Layout Exercise",
        description: "A foundational exercise demonstrating CSS layout techniques including flexbox and grid.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
        tags: ["HTML", "CSS"],
        categories: ["html-css"],
        demoUrl: "../week01/basic-layout.html",
        githubUrl: "https://github.com/diegogranados-10/wdd131",
        featured: false
    }
];

// Skills data
const skills = {
    core: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git", "VS Code"],
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "Flexbox", "CSS Grid", "Responsive Design"],
    backend: ["Git", "GitHub", "VS Code", "Node.js (Learning)", "npm"],
    design: ["Figma (Basic)", "UI/UX Principles", "Accessibility", "Color Theory"]
};

// Timeline data
const timeline = [
    {
        date: "2024 - Present",
        title: "Web Development Student",
        description: "Currently studying Web Development at BYU-Pathway Worldwide, building skills in HTML, CSS, JavaScript, and modern web technologies."
    },
    {
        date: "2024",
        title: "Started Learning Web Development",
        description: "Began my journey into web development, learning the fundamentals of HTML and CSS through online courses and practice projects."
    },
    {
        date: "2023",
        title: "Technology Interest Sparked",
        description: "Discovered my passion for technology and decided to pursue a career in web development and software engineering."
    }
];

// Certificates data
const certificates = [
    {
        title: "WDD 130 - Web Fundamentals",
        issuer: "BYU-Pathway Worldwide",
        date: "2024",
        description: "Foundational course covering HTML, CSS, and web design principles.",
        verifyUrl: "#"
    },
    {
        title: "WDD 131 - Dynamic Web Fundamentals",
        issuer: "BYU-Pathway Worldwide",
        date: "In Progress",
        description: "Advanced course covering JavaScript, DOM manipulation, and dynamic web applications.",
        verifyUrl: "#"
    }
];

// FAQ data
const faqs = [
    {
        question: "What services do you offer?",
        answer: "I offer web development services including responsive website design, front-end development with HTML, CSS, and JavaScript, and basic web application development."
    },
    {
        question: "What is your typical project timeline?",
        answer: "Project timelines vary based on complexity. Simple websites can be completed in 1-2 weeks, while more complex projects may require additional time. I always provide detailed timelines during initial consultations."
    },
    {
        question: "Do you offer maintenance services?",
        answer: "Yes, I offer ongoing maintenance and support services to keep your website updated, secure, and performing optimally."
    },
    {
        question: "How can we start working together?",
        answer: "Simply fill out the contact form on this page or reach out via email. I'll get back to you within 24-48 hours to discuss your project needs."
    }
];

// ============================================
// Utility Functions
// ============================================

// Get current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// Format last modified date
function getLastModified() {
    const lastModified = new Date(document.lastModified);
    const options = {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    return lastModified.toLocaleDateString('en-US', options);
}

// Get item from localStorage
function getFromStorage(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

// Set item to localStorage
function setToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// ============================================
// DOM Element Creation Functions
// ============================================

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.dataset.categories = project.categories.join(' ');

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer">View Demo</a>
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    `;

    return card;
}

// Create skill tag element
function createSkillTag(skill) {
    const span = document.createElement('span');
    span.className = 'skill-tag';
    span.textContent = skill;
    return span;
}

// Create skill list item
function createSkillListItem(skill) {
    const li = document.createElement('li');
    li.textContent = skill;
    return li;
}

// Create timeline item element
function createTimelineItem(item) {
    const div = document.createElement('div');
    div.className = 'timeline-item';

    div.innerHTML = `
        <div class="timeline-dot"></div>
        <span class="timeline-date">${item.date}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
    `;

    return div;
}

// Create certificate card element
function createCertificateCard(cert) {
    const div = document.createElement('div');
    div.className = 'certificate-card';

    div.innerHTML = `
        <h3>${cert.title}</h3>
        <p>${cert.issuer}</p>
        <p>${cert.date}</p>
        <p>${cert.description}</p>
        ${cert.verifyUrl !== '#' ? `<a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer">Verify Certificate</a>` : ''}
    `;

    return div;
}

// Create FAQ item element
function createFAQItem(faq, index) {
    const div = document.createElement('div');
    div.className = 'faq-item';

    div.innerHTML = `
        <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${index}">
            <span>${faq.question}</span>
            <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer" id="faq-answer-${index}">
            <p>${faq.answer}</p>
        </div>
    `;

    return div;
}

// ============================================
// Display Functions
// ============================================

// Display featured projects on home page
function displayFeaturedProjects() {
    const grid = document.getElementById('featured-projects-grid');
    if (!grid) return;

    const featuredProjects = projects.filter(project => project.featured);
    featuredProjects.forEach(project => {
        grid.appendChild(createProjectCard(project));
    });
}

// Display all projects on projects page
function displayAllProjects(filter = 'all') {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.categories.includes(filter));

    filteredProjects.forEach(project => {
        grid.appendChild(createProjectCard(project));
    });

    // Update stats
    updateProjectStats();
}

// Update project statistics
function updateProjectStats() {
    const totalProjectsEl = document.getElementById('total-projects');
    const techUsedEl = document.getElementById('technologies-used');
    const hoursCodedEl = document.getElementById('hours-coded');

    if (totalProjectsEl) {
        animateNumber(totalProjectsEl, projects.length);
    }

    if (techUsedEl) {
        const allTags = new Set();
        projects.forEach(p => p.tags.forEach(t => allTags.add(t)));
        animateNumber(techUsedEl, allTags.size);
    }

    if (hoursCodedEl) {
        animateNumber(hoursCodedEl, 150);
    }
}

// Animate number counting
function animateNumber(element, target) {
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 50);
}

// Display core skills on home page
function displayCoreSkills() {
    const list = document.getElementById('skills-list');
    if (!list) return;

    skills.core.forEach(skill => {
        list.appendChild(createSkillListItem(skill));
    });
}

// Display all skills on about page
function displayAllSkills() {
    const frontendContainer = document.getElementById('frontend-skills');
    const backendContainer = document.getElementById('backend-skills');
    const designContainer = document.getElementById('design-skills');

    if (frontendContainer) {
        skills.frontend.forEach(skill => {
            frontendContainer.appendChild(createSkillTag(skill));
        });
    }

    if (backendContainer) {
        skills.backend.forEach(skill => {
            backendContainer.appendChild(createSkillTag(skill));
        });
    }

    if (designContainer) {
        skills.design.forEach(skill => {
            designContainer.appendChild(createSkillTag(skill));
        });
    }
}

// Display timeline on about page
function displayTimeline() {
    const container = document.getElementById('timeline');
    if (!container) return;

    timeline.forEach(item => {
        container.appendChild(createTimelineItem(item));
    });
}

// Display certificates on about page
function displayCertificates() {
    const grid = document.getElementById('certificates-grid');
    if (!grid) return;

    certificates.forEach(cert => {
        grid.appendChild(createCertificateCard(cert));
    });
}

// Display FAQs on contact page
function displayFAQs() {
    const grid = document.getElementById('faq-grid');
    if (!grid) return;

    faqs.forEach((faq, index) => {
        grid.appendChild(createFAQItem(faq, index));
    });

    // Add click handlers for FAQ accordion
    initFAQAccordion();
}

// ============================================
// Event Handlers
// ============================================

// Initialize hamburger menu
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close menu on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Initialize project filter buttons
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            const filter = button.dataset.filter;
            displayAllProjects(filter);
        });
    });
}

// Initialize FAQ accordion
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// Initialize contact form
function initContactForm() {
    const form = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const submissionCount = document.getElementById('submission-count');

    if (!form) return;

    // Load submission count from localStorage
    let count = getFromStorage('contactSubmissions') || 0;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            newsletter: formData.get('newsletter') === 'on',
            timestamp: new Date().toISOString()
        };

        // Save to localStorage
        const submissions = getFromStorage('contactFormSubmissions') || [];
        submissions.push(data);
        setToStorage('contactFormSubmissions', submissions);

        // Update submission count
        count++;
        setToStorage('contactSubmissions', count);

        // Show success message
        form.style.display = 'none';
        formSuccess.classList.remove('hidden');

        if (submissionCount) {
            submissionCount.textContent = count;
        }

        // Reset form
        form.reset();
    });
}

// ============================================
// Footer Functions
// ============================================

// Update footer dates
function updateFooterDates() {
    const currentYearEl = document.getElementById('currentyear');
    const lastModifiedEl = document.getElementById('lastModified');

    if (currentYearEl) {
        currentYearEl.textContent = getCurrentYear();
    }

    if (lastModifiedEl) {
        lastModifiedEl.textContent = `Last Modified: ${getLastModified()}`;
    }
}

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Common initializations
    updateFooterDates();
    initHamburgerMenu();

    // Page-specific initializations
    const currentPage = window.location.pathname;

    // Home page
    if (currentPage.includes('index.html') || currentPage.endsWith('/project/') || currentPage.endsWith('/project')) {
        displayFeaturedProjects();
        displayCoreSkills();
    }

    // About page
    if (currentPage.includes('about.html')) {
        displayAllSkills();
        displayTimeline();
        displayCertificates();
    }

    // Projects page
    if (currentPage.includes('projects.html')) {
        displayAllProjects();
        initProjectFilters();
    }

    // Contact page
    if (currentPage.includes('contact.html')) {
        displayFAQs();
        initContactForm();
    }

    // Store visit count
    let visitCount = getFromStorage('visitCount') || 0;
    visitCount++;
    setToStorage('visitCount', visitCount);
});
