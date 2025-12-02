// Data arrays for dynamic content
const careersData = [
    {
        title: "AI Engineer",
        description: "Design and develop artificial intelligence systems and machine learning models.",
        skills: ["Python", "TensorFlow", "Machine Learning", "Deep Learning"],
        roadmap: ["Learn Python & Math", "Study ML Algorithms", "Practice with TensorFlow", "Build AI Projects", "Get ML Certification"],
        beginner: ["Python Basics", "Math & Statistics", "Data Analysis", "Basic ML Concepts"],
        intermediate: ["TensorFlow/PyTorch", "Deep Learning", "Computer Vision", "NLP Basics"],
        advanced: ["Advanced Neural Networks", "MLOps", "Research Papers", "Production Systems"]
    },
    {
        title: "Data Scientist",
        description: "Analyze complex data to help organizations make informed decisions.",
        skills: ["Python", "R", "Statistics", "SQL", "Visualization"],
        roadmap: ["Master Statistics", "Learn Python/R", "Practice SQL", "Create Dashboards", "Build Portfolio"],
        beginner: ["Statistics Fundamentals", "Python/R Programming", "SQL Basics", "Excel Advanced"],
        intermediate: ["Machine Learning", "Data Visualization", "Feature Engineering", "A/B Testing"],
        advanced: ["Big Data Technologies", "Advanced Analytics", "Business Intelligence", "Leadership"]
    },
    {
        title: "Cybersecurity Specialist",
        description: "Protect organizations from digital threats and security breaches.",
        skills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Compliance"],
        roadmap: ["Learn Networking", "Study Security Basics", "Practice Ethical Hacking", "Get Certified", "Join Security Team"],
        beginner: ["Network Fundamentals", "Security Basics", "Operating Systems", "Cryptography"],
        intermediate: ["Penetration Testing", "Digital Forensics", "Risk Assessment", "Incident Response"],
        advanced: ["Security Architecture", "Governance", "AI in Security", "Team Leadership"]
    },
    {
        title: "Cloud Architect",
        description: "Design and manage cloud computing strategies and infrastructure.",
        skills: ["AWS", "Azure", "Docker", "Kubernetes", "DevOps"],
        roadmap: ["Learn Cloud Basics", "Get AWS/Azure Certified", "Master Docker", "Practice Kubernetes", "Design Solutions"],
        beginner: ["Cloud Fundamentals", "AWS/Azure Basics", "Virtual Networks", "Storage Solutions"],
        intermediate: ["Solution Architecture", "Cloud Security", "Cost Optimization", "Migration Strategies"],
        advanced: ["Enterprise Architecture", "Multi-Cloud Strategy", "Automation", "Leadership"]
    },
    {
        title: "Blockchain Developer",
        description: "Build decentralized applications and blockchain solutions.",
        skills: ["Solidity", "Web3", "Smart Contracts", "Cryptocurrency"],
        roadmap: ["Understand Blockchain", "Learn Solidity", "Build Smart Contracts", "Create DApps", "Join Blockchain Projects"],
        beginner: ["Blockchain Basics", "Cryptocurrency", "Solidity Programming", "Web3 Concepts"],
        intermediate: ["Smart Contracts", "DApp Development", "Security Practices", "Testing & Deployment"],
        advanced: ["Protocol Development", "Layer 2 Solutions", "Cross-chain", "Enterprise Blockchain"]
    },
    {
        title: "Web Developer",
        description: "Create and maintain websites and web applications.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        roadmap: ["Master HTML/CSS", "Learn JavaScript", "Study React/Vue", "Backend with Node.js", "Deploy Projects"],
        beginner: ["HTML & CSS", "JavaScript Basics", "Responsive Design", "Git & GitHub"],
        intermediate: ["React/Vue.js", "Node.js & Express", "Databases", "REST APIs"],
        advanced: ["TypeScript", "DevOps & CI/CD", "Performance Optimization", "System Design"]
    },
    {
        title: "Mobile App Developer",
        description: "Create mobile applications for iOS and Android platforms.",
        skills: ["Swift", "Kotlin", "React Native", "Flutter", "Mobile UI/UX"],
        roadmap: ["Choose Platform", "Learn Native Languages", "Study Frameworks", "Build Apps", "Publish to Stores"],
        beginner: ["Programming Basics", "UI/UX Principles", "Development Environment", "First Mobile App"],
        intermediate: ["Data Storage", "API Integration", "State Management", "Push Notifications"],
        advanced: ["App Architecture", "Testing & QA", "Analytics", "App Store Optimization"]
    },
    {
        title: "DevOps Engineer",
        description: "Bridge development and operations to streamline software delivery.",
        skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Monitoring"],
        roadmap: ["Learn Linux", "Master Containerization", "Study CI/CD", "Infrastructure as Code", "Monitoring & Logging"],
        beginner: ["Linux Command Line", "Git & Version Control", "Docker Basics", "Cloud Fundamentals"],
        intermediate: ["CI/CD Pipelines", "Configuration Management", "Monitoring", "Kubernetes"],
        advanced: ["Infrastructure as Code", "Security Integration", "Performance Optimization", "Multi-Cloud"]
    },
    {
        title: "Game Developer",
        description: "Design and develop video games for various platforms.",
        skills: ["Unity", "Unreal Engine", "C#", "C++", "Game Design"],
        roadmap: ["Learn Game Engines", "Study Programming", "Game Design Principles", "Build Games", "Portfolio Development"],
        beginner: ["C# or C++", "Unity/Unreal Basics", "2D Graphics", "Audio Integration"],
        intermediate: ["3D Graphics & Physics", "Game Design Patterns", "Multiplayer", "Mobile Optimization"],
        advanced: ["Game Engine Architecture", "Performance Optimization", "Monetization", "Publishing"]
    },
    {
        title: "Product Manager",
        description: "Guide product development from conception to launch.",
        skills: ["Product Strategy", "User Research", "Analytics", "Agile", "Communication"],
        roadmap: ["Business Fundamentals", "User Research", "Product Strategy", "Agile Methodologies", "Leadership Skills"],
        beginner: ["Business Analysis", "User Research", "Product Frameworks", "Communication"],
        intermediate: ["Product Analytics", "Roadmap Planning", "Agile & Scrum", "A/B Testing"],
        advanced: ["Strategic Planning", "Leadership", "Business Innovation", "Go-to-Market"]
    },
    {
        title: "UX/UI Designer",
        description: "Design user interfaces and experiences for digital products.",
        skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
        roadmap: ["Design Principles", "Learn Design Tools", "User Research", "Prototyping", "Build Portfolio"],
        beginner: ["Design Principles", "Typography & Color", "Figma/Sketch", "UI Basics"],
        intermediate: ["User Research", "Journey Mapping", "Prototyping", "Accessibility"],
        advanced: ["Design Strategy", "Team Leadership", "Design Metrics", "Design Systems"]
    },
    {
        title: "Database Administrator",
        description: "Manage and maintain database systems for organizations.",
        skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "Database Security"],
        roadmap: ["SQL Fundamentals", "Database Design", "Administration", "Performance Tuning", "Security & Backup"],
        beginner: ["SQL Basics", "Database Concepts", "Basic Administration", "Data Types"],
        intermediate: ["Query Optimization", "Backup & Recovery", "Security", "Performance Tuning"],
        advanced: ["High Availability", "Disaster Recovery", "Cloud Databases", "Architecture"]
    },
    {
        title: "Network Engineer",
        description: "Design, implement, and maintain computer networks.",
        skills: ["Networking", "Cisco", "Routing", "Switching", "Network Security"],
        roadmap: ["Network Basics", "Cisco Certification", "Routing & Switching", "Network Security", "Advanced Protocols"],
        beginner: ["Network Fundamentals", "OSI Model", "Basic Routing", "Switching Basics"],
        intermediate: ["Advanced Routing", "VLANs", "Network Security", "Troubleshooting"],
        advanced: ["Network Design", "SDN", "Automation", "Enterprise Networks"]
    },
    {
        title: "Systems Administrator",
        description: "Maintain and configure computer systems and servers.",
        skills: ["Linux", "Windows Server", "Scripting", "Virtualization", "System Monitoring"],
        roadmap: ["Operating Systems", "Server Administration", "Scripting", "Virtualization", "Monitoring & Automation"],
        beginner: ["Operating Systems", "Command Line", "Basic Administration", "User Management"],
        intermediate: ["Server Configuration", "Scripting", "Virtualization", "Monitoring"],
        advanced: ["Automation", "Cloud Integration", "Security Hardening", "Architecture"]
    },
    {
        title: "Quality Assurance Engineer",
        description: "Test software applications to ensure quality and functionality.",
        skills: ["Testing", "Automation", "Selenium", "Test Planning", "Bug Tracking"],
        roadmap: ["Testing Fundamentals", "Manual Testing", "Automation Tools", "Test Planning", "Performance Testing"],
        beginner: ["Testing Basics", "Manual Testing", "Test Cases", "Bug Reporting"],
        intermediate: ["Selenium", "API Testing", "Performance Testing", "Test Automation"],
        advanced: ["Test Architecture", "CI/CD Integration", "Quality Metrics", "Leadership"]
    },
    {
        title: "Software Architect",
        description: "Design high-level software system architecture and technical solutions.",
        skills: ["System Design", "Architecture Patterns", "Scalability", "Microservices", "Leadership"],
        roadmap: ["Software Engineering", "Design Patterns", "System Architecture", "Scalability", "Technical Leadership"],
        beginner: ["Software Engineering", "Design Patterns", "Code Quality", "Documentation"],
        intermediate: ["System Design", "Architecture Patterns", "Scalability", "Microservices"],
        advanced: ["Enterprise Architecture", "Technology Strategy", "Team Leadership", "Innovation"]
    },
    {
        title: "IoT Developer",
        description: "Build Internet of Things solutions connecting devices and sensors.",
        skills: ["Embedded Systems", "Arduino", "Raspberry Pi", "MQTT", "Edge Computing"],
        roadmap: ["Electronics Basics", "Microcontrollers", "Sensor Integration", "Cloud Connectivity", "IoT Platforms"],
        beginner: ["Electronics Basics", "Arduino Programming", "Sensors", "Basic Circuits"],
        intermediate: ["Raspberry Pi", "Communication Protocols", "Cloud Integration", "Data Processing"],
        advanced: ["Edge Computing", "IoT Security", "Industrial IoT", "Platform Development"]
    },
    {
        title: "AR/VR Developer",
        description: "Create immersive augmented and virtual reality experiences.",
        skills: ["Unity 3D", "Unreal Engine", "C#", "3D Modeling", "Computer Graphics"],
        roadmap: ["3D Programming", "Game Engines", "VR/AR SDKs", "3D Graphics", "Immersive UX"],
        beginner: ["3D Programming", "Unity Basics", "VR/AR Concepts", "3D Modeling"],
        intermediate: ["Advanced Unity", "VR/AR SDKs", "Interaction Design", "Performance Optimization"],
        advanced: ["Custom Engines", "Advanced Graphics", "Spatial Computing", "Enterprise Solutions"]
    },
    {
        title: "Site Reliability Engineer",
        description: "Ensure system reliability, scalability, and performance at scale.",
        skills: ["Linux", "Monitoring", "Automation", "Incident Response", "Performance Tuning"],
        roadmap: ["System Administration", "Monitoring Tools", "Automation Scripts", "SLA Management", "Chaos Engineering"],
        beginner: ["Linux Administration", "Monitoring Basics", "Scripting", "System Metrics"],
        intermediate: ["Advanced Monitoring", "Automation", "Incident Response", "Performance Tuning"],
        advanced: ["Chaos Engineering", "SLA Management", "Capacity Planning", "Architecture"]
    },
    {
        title: "Technical Writer",
        description: "Create clear documentation and technical content for software products.",
        skills: ["Technical Writing", "Documentation Tools", "API Documentation", "Content Strategy", "User Experience"],
        roadmap: ["Writing Skills", "Technical Knowledge", "Documentation Tools", "Content Management", "User Research"],
        beginner: ["Writing Fundamentals", "Technical Concepts", "Documentation Tools", "Style Guides"],
        intermediate: ["API Documentation", "Content Strategy", "User Research", "Information Architecture"],
        advanced: ["Content Leadership", "Documentation Strategy", "Team Management", "Process Optimization"]
    },
    {
        title: "Business Intelligence Analyst",
        description: "Transform business data into actionable insights and reports.",
        skills: ["SQL", "Power BI", "Tableau", "Data Warehousing", "Business Analysis"],
        roadmap: ["SQL Mastery", "BI Tools", "Data Modeling", "Dashboard Design", "Business Strategy"],
        beginner: ["SQL Basics", "Excel Advanced", "Data Analysis", "Basic Reporting"],
        intermediate: ["BI Tools", "Data Modeling", "Dashboard Design", "ETL Processes"],
        advanced: ["Data Architecture", "Advanced Analytics", "Business Strategy", "Leadership"]
    },
    {
        title: "Robotics Engineer",
        description: "Design and develop robotic systems for various applications.",
        skills: ["ROS", "Python", "Computer Vision", "Control Systems", "Mechanical Design"],
        roadmap: ["Programming Basics", "Robotics Fundamentals", "ROS Framework", "Sensor Integration", "AI Integration"],
        beginner: ["Programming Basics", "Robotics Fundamentals", "Basic Electronics", "Mechanical Concepts"],
        intermediate: ["ROS Framework", "Sensor Integration", "Computer Vision", "Control Systems"],
        advanced: ["AI Integration", "Advanced Robotics", "Autonomous Systems", "Research & Development"]
    },
    {
        title: "Security Analyst",
        description: "Monitor and analyze security threats to protect organizational assets.",
        skills: ["SIEM Tools", "Threat Analysis", "Incident Response", "Forensics", "Risk Assessment"],
        roadmap: ["Security Fundamentals", "SIEM Platforms", "Threat Hunting", "Incident Response", "Security Certifications"],
        beginner: ["Security Fundamentals", "Network Security", "Basic Tools", "Threat Landscape"],
        intermediate: ["SIEM Tools", "Threat Analysis", "Incident Response", "Forensics"],
        advanced: ["Advanced Threat Hunting", "Security Architecture", "Risk Management", "Leadership"]
    },
    {
        title: "Machine Learning Engineer",
        description: "Deploy and maintain machine learning models in production systems.",
        skills: ["MLOps", "Docker", "Kubernetes", "Model Deployment", "Feature Engineering"],
        roadmap: ["ML Fundamentals", "Model Development", "MLOps Tools", "Production Deployment", "Model Monitoring"],
        beginner: ["Python & Libraries", "Statistics", "ML Algorithms", "Data Preprocessing"],
        intermediate: ["Deep Learning", "TensorFlow/PyTorch", "Computer Vision", "NLP"],
        advanced: ["MLOps", "Model Optimization", "A/B Testing", "ML System Design"]
    },
    {
        title: "Frontend Engineer",
        description: "Specialize in user interface development and user experience optimization.",
        skills: ["React", "Vue.js", "TypeScript", "CSS Frameworks", "Performance Optimization"],
        roadmap: ["HTML/CSS/JS", "Modern Frameworks", "State Management", "Testing", "Performance Tuning"],
        beginner: ["HTML/CSS/JS", "Responsive Design", "Git Basics", "Browser DevTools"],
        intermediate: ["React/Vue.js", "State Management", "Build Tools", "Testing"],
        advanced: ["Performance Optimization", "Architecture", "Accessibility", "Leadership"]
    },
    {
        title: "Backend Engineer",
        description: "Focus on server-side development, APIs, and system architecture.",
        skills: ["Node.js", "Python", "Databases", "API Design", "Microservices"],
        roadmap: ["Server Programming", "Database Design", "API Development", "System Design", "Scalability Patterns"],
        beginner: ["Server Programming", "Database Basics", "API Fundamentals", "Version Control"],
        intermediate: ["Advanced APIs", "Database Optimization", "Caching", "Security"],
        advanced: ["System Design", "Microservices", "Scalability", "Architecture"]
    }
];

const coursesData = [
    {
        name: "Coursera",
        description: "University-level courses from top institutions worldwide",
        url: "https://www.coursera.org",
        recommendations: [
            { title: "Machine Learning by Stanford", link: "https://www.coursera.org/learn/machine-learning" },
            { title: "Python for Everybody", link: "https://www.coursera.org/specializations/python" },
            { title: "Google Data Analytics Certificate", link: "https://www.coursera.org/professional-certificates/google-data-analytics" }
        ]
    },
    {
        name: "Udemy",
        description: "Practical skills courses taught by industry experts",
        url: "https://www.udemy.com",
        recommendations: [
            { title: "Complete Web Development Bootcamp", link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/" },
            { title: "React - The Complete Guide", link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
            { title: "AWS Certified Solutions Architect", link: "https://www.udemy.com/course/aws-certified-solutions-architect-associate/" }
        ]
    },
    {
        name: "NPTEL",
        description: "Free online courses by Indian Institutes of Technology",
        url: "https://nptel.ac.in",
        recommendations: [
            { title: "Programming in Java", link: "https://nptel.ac.in/courses/106105151" },
            { title: "Data Structures and Algorithms", link: "https://nptel.ac.in/courses/106104128" },
            { title: "Database Management System", link: "https://nptel.ac.in/courses/106106093" }
        ]
    },
    {
        name: "freeCodeCamp",
        description: "Free coding bootcamp with hands-on projects",
        url: "https://www.freecodecamp.org",
        recommendations: [
            { title: "Responsive Web Design", link: "https://www.freecodecamp.org/learn/responsive-web-design/" },
            { title: "JavaScript Algorithms and Data Structures", link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
            { title: "Front End Development Libraries", link: "https://www.freecodecamp.org/learn/front-end-development-libraries/" }
        ]
    },
    {
        name: "edX",
        description: "University courses from Harvard, MIT, and other top institutions",
        url: "https://www.edx.org",
        recommendations: [
            { title: "CS50's Introduction to Computer Science", link: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x" },
            { title: "MIT Introduction to Programming in Python", link: "https://www.edx.org/course/introduction-to-computer-science-and-programming-7" },
            { title: "Microsoft Azure Fundamentals", link: "https://www.edx.org/course/microsoft-azure-fundamentals-az-900" }
        ]
    }
];

// LinkedIn job search integration
const linkedInJobSearch = {
    baseUrl: "https://www.linkedin.com/jobs/search/",
    
    generateSearchUrl(keywords, location = "India") {
        const params = new URLSearchParams({
            keywords: keywords,
            location: location,
            f_TPR: "r86400"
        });
        return `${this.baseUrl}?${params.toString()}`;
    },
    
    getJobsByCareer(careerTitle) {
        const jobKeywords = {
            "AI Engineer": "artificial intelligence engineer",
            "Data Scientist": "data scientist",
            "Web Developer": "web developer",
            "Mobile App Developer": "mobile app developer",
            "DevOps Engineer": "devops engineer",
            "Cybersecurity Specialist": "cybersecurity analyst",
            "Cloud Architect": "cloud architect",
            "Blockchain Developer": "blockchain developer",
            "Game Developer": "game developer",
            "Product Manager": "product manager",
            "UX/UI Designer": "ux ui designer",
            "Database Administrator": "database administrator",
            "Network Engineer": "network engineer",
            "Systems Administrator": "systems administrator",
            "Quality Assurance Engineer": "qa engineer",
            "Software Architect": "software architect",
            "IoT Developer": "iot developer",
            "AR/VR Developer": "ar vr developer",
            "Site Reliability Engineer": "sre site reliability",
            "Technical Writer": "technical writer",
            "Business Intelligence Analyst": "business intelligence analyst",
            "Robotics Engineer": "robotics engineer",
            "Security Analyst": "security analyst",
            "Machine Learning Engineer": "machine learning engineer",
            "Frontend Engineer": "frontend engineer",
            "Backend Engineer": "backend engineer"
        };
        
        return jobKeywords[careerTitle] || careerTitle.toLowerCase();
    }
};

const jobsData = [];

// Theme toggle functionality
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
}

// Navigation active link highlighting
function initNavigation() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        
        // Handle root path and index.html
        if ((currentPage === '' || currentPage === 'index.html' || currentPath === '/') && linkHref === 'index.html') {
            link.classList.add('active');
        } else if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Load careers data
function loadCareers() {
    const careersGrid = document.getElementById('careersGrid');
    if (!careersGrid) return;
    
    careersGrid.innerHTML = careersData.map((career, index) => `
        <div class="card" data-career="${index}" style="cursor: pointer;">
            <h3>${career.title}</h3>
            <p>${career.description}</p>
            <div style="margin-top: 1rem;">
                <strong>Learning Levels:</strong>
                <div style="margin-top: 0.5rem;">
                    <div style="margin-bottom: 0.5rem;"><strong>🌱 Beginner:</strong> ${career.beginner.slice(0,2).join(', ')}</div>
                    <div style="margin-bottom: 0.5rem;"><strong>⚡ Intermediate:</strong> ${career.intermediate.slice(0,2).join(', ')}</div>
                    <div><strong>🎯 Advanced:</strong> ${career.advanced.slice(0,2).join(', ')}</div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click handlers for career cards
    document.querySelectorAll('.card[data-career]').forEach(card => {
        card.addEventListener('click', () => {
            const careerIndex = card.getAttribute('data-career');
            updateRoadmap(careersData[careerIndex]);
            
            // Remove active class from all cards
            document.querySelectorAll('.card[data-career]').forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            card.classList.add('active');
        });
    });
}

// Update roadmap based on selected career
function updateRoadmap(career) {
    const roadmapTitle = document.querySelector('.career-roadmap h3');
    const roadmapSteps = document.querySelector('.roadmap-steps-mini');
    
    if (roadmapTitle && roadmapSteps) {
        roadmapTitle.innerHTML = `🗺️ ${career.title} Path`;
        roadmapSteps.innerHTML = career.roadmap.map((step, index) => 
            `<div class="step-mini">${index + 1}. ${step}</div>`
        ).join('');
    }
    
    // Store for roadmap page
    localStorage.setItem('selectedCareer', JSON.stringify(career));
}

// Load courses data with recommendations
function loadCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    if (!coursesGrid) return;
    
    coursesGrid.innerHTML = coursesData.map(course => `
        <div class="card">
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <div style="margin: 1rem 0;">
                <h4 style="color: var(--primary-color); margin-bottom: 0.5rem; font-size: 0.9rem;">📚 Recommended Courses:</h4>
                <ul style="list-style: none; padding: 0; margin: 0;">
                    ${course.recommendations.map(rec => `
                        <li style="margin-bottom: 0.25rem;">
                            <a href="${rec.link}" target="_blank" style="color: var(--secondary-color); text-decoration: none; font-size: 0.85rem; display: block; padding: 0.25rem 0; border-bottom: 1px solid var(--border-color);">
                                ${rec.title} →
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <a href="${course.url}" target="_blank" class="btn btn-primary" style="margin-top: 1rem; display: inline-block;">
                Visit Platform
            </a>
        </div>
    `).join('');
}

// Load jobs data with LinkedIn integration
function loadJobs() {
    const jobsList = document.getElementById('jobsList');
    if (!jobsList) return;
    
    const careerJobs = careersData.slice(0, 8).map(career => {
        const keywords = linkedInJobSearch.getJobsByCareer(career.title);
        const searchUrl = linkedInJobSearch.generateSearchUrl(keywords);
        
        return `
            <div class="job-card linkedin-job" onclick="window.open('${searchUrl}', '_blank')" style="cursor: pointer;">
                <div class="job-title">${career.title} Jobs</div>
                <div class="job-company">🔗 Search on LinkedIn</div>
                <div class="job-location">📍 Live Opportunities</div>
                <div class="job-action" style="margin-top: 0.5rem; color: var(--primary-color); font-size: 0.9rem;">Click to view latest jobs →</div>
            </div>
        `;
    }).join('');
    
    const generalSearches = `
        <div class="job-card linkedin-job" onclick="window.open('${linkedInJobSearch.generateSearchUrl('software engineer')}', '_blank')" style="cursor: pointer;">
            <div class="job-title">All Software Jobs</div>
            <div class="job-company">🔗 LinkedIn Jobs</div>
            <div class="job-location">📍 India</div>
            <div class="job-action" style="margin-top: 0.5rem; color: var(--primary-color); font-size: 0.9rem;">Browse all tech jobs →</div>
        </div>
        <div class="job-card linkedin-job" onclick="window.open('${linkedInJobSearch.generateSearchUrl('fresher software')}', '_blank')" style="cursor: pointer;">
            <div class="job-title">Fresher Opportunities</div>
            <div class="job-company">🔗 LinkedIn Jobs</div>
            <div class="job-location">📍 Entry Level</div>
            <div class="job-action" style="margin-top: 0.5rem; color: var(--primary-color); font-size: 0.9rem;">Find fresher jobs →</div>
        </div>
    `;
    
    jobsList.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <h3>🚀 Live Job Opportunities</h3>
            <p>Click on any career to search real-time jobs on LinkedIn</p>
        </div>
        ${careerJobs}
        ${generalSearches}
    `;
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simulate form submission
        alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email}.`);
        this.reset();
    });
}

// Login modal functionality
function initLoginModal() {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const loginForm = document.getElementById('loginForm');
    const signupBtn = document.getElementById('signupBtn');
    
    if (!loginBtn || !loginModal) return;
    
    // Open modal
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
        setTimeout(() => loginModal.classList.add('show'), 10);
    });
    
    // Close modal
    function closeModal() {
        loginModal.classList.remove('show');
        setTimeout(() => loginModal.style.display = 'none', 300);
    }
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    // Form submission for login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email') || e.target.querySelector('input[type="email"]').value;
        const password = formData.get('password') || e.target.querySelector('input[type="password"]').value;
        
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('choosewise_users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            
            // Update last login for dashboard
            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
            const userIndex = registeredUsers.findIndex(u => u.email === user.email);
            if (userIndex !== -1) {
                registeredUsers[userIndex].lastLogin = new Date().toISOString();
                localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
            }
            
            // Send login notification email
            emailService.sendLoginEmail(user.email, user.name);
            
            alert(`Welcome back, ${user.name}! Login notification sent to your email.`);
            closeModal();
            updateUIForLoggedInUser(user);
        } else {
            alert('Invalid email or password');
        }
    });
    
    // Signup button - show signup form
    signupBtn.addEventListener('click', () => {
        const signupModal = document.getElementById('signupModal');
        closeModal();
        signupModal.style.display = 'flex';
        setTimeout(() => signupModal.classList.add('show'), 10);
        
        // Handle signup form
        const signupForm = document.getElementById('signupForm');
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const password = formData.get('password');
            
            // Get existing users
            const users = JSON.parse(localStorage.getItem('choosewise_users') || '[]');
            
            // Check if user already exists
            if (users.find(u => u.email === email)) {
                alert('User with this email already exists');
                return;
            }
            
            // Create new user
            const newUser = {
                id: Date.now().toString(),
                name,
                email,
                password,
                createdAt: new Date().toISOString()
            };
            
            // Save user
            users.push(newUser);
            localStorage.setItem('choosewise_users', JSON.stringify(users));
            localStorage.setItem('user', JSON.stringify(newUser));
            
            // Update registered users for dashboard
            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
            registeredUsers.push({
                name: newUser.name,
                email: newUser.email,
                registrationDate: newUser.createdAt,
                lastLogin: null
            });
            localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
            
            // Send welcome email
            emailService.sendWelcomeEmail(newUser.email, newUser.name);
            
            alert(`Welcome to ChooseWise, ${newUser.name}! Check your email for welcome message.`);
            signupModal.style.display = 'none';
            updateUIForLoggedInUser(newUser);
        });
        
        // Back to login
        document.getElementById('backToLoginBtn').addEventListener('click', () => {
            signupModal.style.display = 'none';
            loginModal.style.display = 'flex';
        });
        
        // Close signup modal
        document.getElementById('signupClose').addEventListener('click', () => {
            signupModal.style.display = 'none';
        });
    });
}

// Password validation function
function validatePassword(password) {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return {
        valid: minLength && hasUpper && hasNumber && hasSpecial,
        minLength,
        hasUpper,
        hasNumber,
        hasSpecial
    };
}

// Show signup form
function showSignupForm() {
    const loginModal = document.getElementById('loginModal');
    const modalContent = loginModal.querySelector('.modal-content');
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>Create Account</h2>
            <button class="modal-close" id="modalClose">&times;</button>
        </div>
        <form class="login-form" id="signupForm">
            <div class="form-group">
                <input type="text" name="name" placeholder="Full Name" required>
            </div>
            <div class="form-group">
                <input type="email" name="email" placeholder="Email" required>
            </div>
            <div class="form-group">
                <input type="password" name="password" id="password" placeholder="Password" required>
                <div class="password-requirements" id="passwordReqs" style="font-size: 0.8em; margin-top: 5px; color: #666;">
                    <div id="req-length">• At least 8 characters</div>
                    <div id="req-upper">• One uppercase letter</div>
                    <div id="req-number">• One number</div>
                    <div id="req-special">• One special character</div>
                </div>
            </div>
            <div class="form-group">
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" required>
                <div id="password-match" style="font-size: 0.8em; margin-top: 5px;"></div>
            </div>
            <button type="submit" class="btn btn-primary btn-full" id="createAccountBtn" disabled>Create Account</button>
            <div class="form-divider">or</div>
            <button type="button" class="btn btn-secondary btn-full" id="backToLogin">Back to Login</button>
        </form>
    `;
    
    // Re-attach close handler
    document.getElementById('modalClose').addEventListener('click', () => {
        const loginModal = document.getElementById('loginModal');
        loginModal.classList.remove('show');
        setTimeout(() => loginModal.style.display = 'none', 300);
    });
    
    // Password validation on input
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const createBtn = document.getElementById('createAccountBtn');
    
    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        const validation = validatePassword(password);
        
        // Update requirement indicators
        document.getElementById('req-length').style.color = validation.minLength ? 'green' : '#666';
        document.getElementById('req-upper').style.color = validation.hasUpper ? 'green' : '#666';
        document.getElementById('req-number').style.color = validation.hasNumber ? 'green' : '#666';
        document.getElementById('req-special').style.color = validation.hasSpecial ? 'green' : '#666';
        
        checkFormValidity();
    });
    
    confirmPasswordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const matchDiv = document.getElementById('password-match');
        
        if (confirmPassword) {
            if (password === confirmPassword) {
                matchDiv.textContent = '✓ Passwords match';
                matchDiv.style.color = 'green';
            } else {
                matchDiv.textContent = '✗ Passwords do not match';
                matchDiv.style.color = 'red';
            }
        } else {
            matchDiv.textContent = '';
        }
        
        checkFormValidity();
    });
    
    function checkFormValidity() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const validation = validatePassword(password);
        const passwordsMatch = password === confirmPassword && password.length > 0;
        
        createBtn.disabled = !(validation.valid && passwordsMatch);
    }
    
    // Handle signup form submission
    document.getElementById('signupForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
        
        // Final validation
        const validation = validatePassword(password);
        if (!validation.valid) {
            alert('Password does not meet requirements');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        try {
            
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });
            
            const data = await response.json();
            
            if (data.success) {
                localStorage.setItem('user', JSON.stringify(data.user));
                alert(`Welcome to ChooseWise, ${data.user.name}!`);
                const loginModal = document.getElementById('loginModal');
                loginModal.classList.remove('show');
                setTimeout(() => loginModal.style.display = 'none', 300);
                updateUIForLoggedInUser(data.user);
            } else {
                alert(data.error || 'Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed. Make sure server is running on port 3000.');
        }
    });
    
    // Back to login button
    document.getElementById('backToLogin').addEventListener('click', () => {
        showLoginForm();
    });
}

// Show login form
function showLoginForm() {
    const loginModal = document.getElementById('loginModal');
    const modalContent = loginModal.querySelector('.modal-content');
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>Welcome Back</h2>
            <button class="modal-close" id="modalClose">&times;</button>
        </div>
        <form class="login-form" id="loginForm">
            <div class="form-group">
                <input type="email" name="email" placeholder="Email" required>
            </div>
            <div class="form-group">
                <input type="password" name="password" placeholder="Password" required>
            </div>
            <button type="submit" class="btn btn-primary btn-full">Sign In</button>
            <div class="form-divider">or</div>
            <button type="button" class="btn btn-secondary btn-full" id="signupBtn">Create Account</button>
        </form>
    `;
    
    // Re-initialize login modal functionality
    initLoginModal();
}

// Update UI for logged in user
function updateUIForLoggedInUser(user) {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.querySelector('.btn-signup');
    
    if (loginBtn) {
        loginBtn.textContent = `Hi, ${user.name.split(' ')[0]}`;
        loginBtn.style.background = 'var(--primary-color)';
        loginBtn.style.color = 'var(--background-color)';
        loginBtn.onclick = () => {
            if (confirm('Do you want to logout?')) {
                localStorage.removeItem('choosewise_current_user');
                location.reload();
            }
        };
    }
    
    // Hide signup button when user is logged in
    if (signupBtn) {
        signupBtn.style.display = 'none';
    }
}

// Check if user is already logged in
function checkUserSession() {
    const user = JSON.parse(localStorage.getItem('choosewise_current_user') || 'null');
    if (user) {
        updateUIForLoggedInUser(user);
    }
}

// Update roadmap based on selected career
function updateRoadmapPage(career) {
    // Store selected career in localStorage for roadmap page
    localStorage.setItem('selectedCareer', JSON.stringify(career));
}

// Use comprehensive roadmap data
const careerRoadmaps = window.comprehensiveRoadmaps || {
    "AI Engineer": {
        emoji: "🤖",
        motivationalQuote: "Building the future, one algorithm at a time! 🚀",
        beginner: {
            title: "🌱 Foundation Building (3-6 months)",
            duration: "3-6 months",
            steps: ["🐍 Python Programming Basics", "📊 Mathematics & Statistics", "🏗️ Data Structures & Algorithms", "📈 Data Analysis with Pandas"],
            courses: ["Python for Everybody (Coursera)", "Khan Academy Statistics", "CS50 Introduction to Computer Science"],
            projects: ["📈 Stock Price Predictor", "📊 Sales Data Dashboard", "🧮 Calculator App"]
        },
        intermediate: {
            title: "⚡ Core AI Skills",
            emoji: "🔥",
            steps: ["🤖 Study Machine Learning Algorithms", "🔧 Practice with TensorFlow/PyTorch", "🧠 Learn Deep Learning Concepts"],
            projects: ["📸 Image Classification Model", "💬 Natural Language Processing App", "⭐ Recommendation System"]
        },
        advanced: {
            title: "🎯 AI Mastery",
            emoji: "👑",
            steps: ["🚀 Advanced Neural Networks", "⚙️ MLOps & Model Deployment", "🔬 Research & Innovation"],
            projects: ["👁️ Computer Vision System", "🤖 AI-Powered Chatbot", "📝 Research Paper Implementation"]
        }
    },
    "Data Scientist": {
        emoji: "📊",
        motivationalQuote: "Turning data into insights, insights into impact! 📈",
        beginner: {
            title: "📚 Data Fundamentals",
            steps: ["📊 Master Statistics & Probability", "🐍 Learn Python/R Programming", "🗄️ Database & SQL Skills"],
            projects: ["🔍 Exploratory Data Analysis", "📋 Statistical Report", "💾 Database Query Project"]
        },
        intermediate: {
            title: "🔬 Analysis & Modeling",
            steps: ["📈 Advanced Analytics Techniques", "🤖 Machine Learning Models", "📊 Data Visualization Mastery"],
            projects: ["🔮 Predictive Analytics Model", "📊 Interactive Dashboard", "⚖️ A/B Testing Analysis"]
        },
        advanced: {
            title: "🎯 Strategic Impact",
            steps: ["🌐 Big Data Technologies", "🚀 Advanced ML & AI", "💼 Business Strategy Integration"],
            projects: ["⚡ Real-time Analytics Pipeline", "🔧 Advanced ML Pipeline", "📊 Business Intelligence System"]
        }
    },
    "Web Developer": {
        emoji: "💻",
        motivationalQuote: "Building the web, one line of code at a time! 🌐",
        beginner: {
            title: "🌱 Web Basics",
            steps: ["🎨 Master HTML & CSS", "⚡ Learn JavaScript Fundamentals", "📱 Responsive Design Principles"],
            projects: ["💼 Personal Portfolio Website", "📱 Responsive Landing Page", "🎮 Interactive Web App"]
        },
        intermediate: {
            title: "🚀 Modern Development",
            steps: ["⚛️ Frontend Frameworks (React/Vue)", "🔧 Backend Development (Node.js)", "💾 Database Integration"],
            projects: ["📱 Single Page Application", "🌐 Full-Stack Web App", "🔗 RESTful API Development"]
        },
        advanced: {
            title: "🎯 Professional Development",
            steps: ["🔧 Advanced Frameworks & Tools", "🚀 DevOps & Deployment", "⚡ Performance Optimization"],
            projects: ["🏗️ Microservices Architecture", "📱 Progressive Web App", "🏢 Enterprise-Level Application"]
        }
    }
};

// Load dynamic roadmap based on selected career
function loadDynamicRoadmap(selectedLevel = 'all') {
    const selectedCareer = JSON.parse(localStorage.getItem('selectedCareer') || 'null');
    const roadmapTitle = document.getElementById('roadmapTitle');
    const roadmapDescription = document.getElementById('roadmapDescription');
    const roadmapTimeline = document.getElementById('roadmapTimeline');
    const selectCareerBtn = document.getElementById('selectCareerBtn');
    
    if (!roadmapTimeline) return;
    
    // Setup level filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.level === selectedLevel) {
            btn.classList.add('active');
        }
        btn.addEventListener('click', () => {
            loadDynamicRoadmap(btn.dataset.level);
        });
    });
    
    if (selectedCareer) {
        // Update header
        if (roadmapTitle) roadmapTitle.textContent = `${selectedCareer.title} Roadmap`;
        if (roadmapDescription) roadmapDescription.textContent = `Your personalized path to becoming a ${selectedCareer.title}`;
        
        // Generate roadmap based on selected level
        if (selectedLevel === 'all') {
            // Show all levels
            roadmapTimeline.innerHTML = `
                <div class="roadmap-level" data-level="beginner">
                    <h2>🌱 Beginner Level</h2>
                    <div class="roadmap-steps">
                        ${selectedCareer.beginner ? selectedCareer.beginner.map((step, index) => 
                            `<div class="step">${index + 1}. ${step}</div>`
                        ).join('') : '<div class="step">No beginner roadmap available</div>'}
                    </div>
                </div>
                <div class="roadmap-level" data-level="intermediate">
                    <h2>⚡ Intermediate Level</h2>
                    <div class="roadmap-steps">
                        ${selectedCareer.intermediate ? selectedCareer.intermediate.map((step, index) => 
                            `<div class="step">${index + 1}. ${step}</div>`
                        ).join('') : '<div class="step">No intermediate roadmap available</div>'}
                    </div>
                </div>
                <div class="roadmap-level" data-level="advanced">
                    <h2>🎯 Advanced Level</h2>
                    <div class="roadmap-steps">
                        ${selectedCareer.advanced ? selectedCareer.advanced.map((step, index) => 
                            `<div class="step">${index + 1}. ${step}</div>`
                        ).join('') : '<div class="step">No advanced roadmap available</div>'}
                    </div>
                </div>
            `;
        } else {
            // Show specific level
            const levelData = selectedCareer[selectedLevel];
            const levelTitles = {
                beginner: '🌱 Beginner Level',
                intermediate: '⚡ Intermediate Level',
                advanced: '🎯 Advanced Level'
            };
            
            roadmapTimeline.innerHTML = `
                <div class="roadmap-level" data-level="${selectedLevel}">
                    <h2>${levelTitles[selectedLevel]}</h2>
                    <div class="roadmap-steps">
                        ${levelData ? levelData.map((step, index) => 
                            `<div class="step">${index + 1}. ${step}</div>`
                        ).join('') : `<div class="step">No ${selectedLevel} roadmap available</div>`}
                    </div>
                    <div class="suggested-projects">
                        <h3>📚 Next Steps:</h3>
                        <ul>
                            <li><a href="courses.html">Find ${selectedLevel} Courses</a></li>
                            <li><a href="jobs.html">Explore ${selectedLevel} Jobs</a></li>
                            ${selectedLevel !== 'advanced' ? `<li><button onclick="loadDynamicRoadmap('${selectedLevel === 'beginner' ? 'intermediate' : 'advanced'}')">Next Level →</button></li>` : ''}
                        </ul>
                    </div>
                </div>
            `;
        }
    } else {
        // Default generic roadmap
        roadmapTimeline.innerHTML = `
            <div class="roadmap-level">
                <h2>Choose Your Career Path</h2>
                <div class="roadmap-steps">
                    <div class="step">Visit the Careers page to select your desired tech career</div>
                    <div class="step">Get a personalized roadmap based on your choice</div>
                    <div class="step">Follow the step-by-step learning path</div>
                </div>
                <div class="suggested-projects">
                    <h3>Get Started:</h3>
                    <ul>
                        <li><a href="careers.html">Explore Career Options</a></li>
                        <li><a href="assessment.html">Take Career Assessment</a></li>
                        <li><a href="courses.html">Browse Learning Resources</a></li>
                    </ul>
                </div>
            </div>
        `;
    }
    

}



// Password visibility toggle
function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🙈';
    } else {
        input.type = 'password';
        button.textContent = '👁️';
    }
}

// Step completion tracking
function trackStepCompletion(stepName, nextStep) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && emailService) {
        emailService.sendStepCompletionEmail(user.email, user.name, stepName, nextStep);
    }
}

// Assessment completion tracking
function trackAssessmentCompletion(careerRecommendation) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && emailService) {
        emailService.sendAssessmentCompletionEmail(user.email, user.name, careerRecommendation);
    }
}

// Initialize login button to redirect to auth page
function initLoginButton() {
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn && !JSON.parse(localStorage.getItem('choosewise_current_user') || 'null')) {
        loginBtn.onclick = () => {
            window.location.href = 'auth.html';
        };
    }
}

// Track visitor data
function trackVisitor() {
    const visitors = JSON.parse(localStorage.getItem('siteVisitors') || '[]');
    const visitor = {
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent,
        ip: 'Unknown'
    };
    visitors.push(visitor);
    localStorage.setItem('siteVisitors', JSON.stringify(visitors));
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initNavigation();
    initSmoothScroll();
    loadCareers();
    loadCourses();
    loadJobs();
    initContactForm();
    initChatbot();
    initLoginButton();
    loadDynamicRoadmap('all');
    checkUserSession();
    trackVisitor();
});

// AI-Enhanced Chatbot with Advanced Knowledge Base
const aiChatbot = {
    // Comprehensive knowledge base
    knowledge: {
        careers: {
            'ai engineer': {
                description: 'AI Engineers design intelligent systems using machine learning and deep learning.',
                skills: ['Python', 'TensorFlow', 'PyTorch', 'Mathematics', 'Statistics'],
                salary: '₹8-25 LPA',
                growth: 'Exponential growth - 40% YoY demand increase',
                companies: ['Google', 'Microsoft', 'OpenAI', 'NVIDIA'],
                roadmap: ['Python & Math → ML Algorithms → Deep Learning → Specialization']
            },
            'data scientist': {
                description: 'Extract insights from data to drive business decisions.',
                skills: ['Python', 'R', 'SQL', 'Statistics', 'Tableau'],
                salary: '₹6-20 LPA',
                growth: 'High demand across all industries',
                companies: ['Netflix', 'Uber', 'Airbnb', 'Amazon'],
                roadmap: ['Statistics → Programming → ML → Domain Expertise']
            },
            'web developer': {
                description: 'Create websites and web applications.',
                skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
                salary: '₹3-15 LPA',
                growth: 'Steady 15% annual growth',
                companies: ['Meta', 'Netflix', 'Shopify', 'Stripe'],
                roadmap: ['Frontend → Backend → Full Stack → Specialization']
            }
        },
        learning: {
            paths: {
                beginner: 'Choose language → Online courses → Build projects → Practice daily',
                intermediate: 'Frameworks → Databases → Git → Portfolio → Open source',
                advanced: 'System design → Cloud → DevOps → Leadership → Specialization'
            },
            languages: {
                python: 'Best for: AI/ML, Data Science, Backend. Easy to learn, versatile.',
                javascript: 'Best for: Web development, Full-stack. High demand, flexible.',
                java: 'Best for: Enterprise, Android. Stable, well-paying jobs.',
                cpp: 'Best for: Systems, Gaming, Performance-critical apps.'
            }
        },
        interview: {
            preparation: ['Data Structures', 'Algorithms', 'System Design', 'Behavioral Questions'],
            platforms: ['LeetCode', 'HackerRank', 'InterviewBit', 'Pramp'],
            tips: ['Practice daily', 'Mock interviews', 'Research company', 'Prepare questions']
        }
    },
    
    // AI-like response generation
    generateResponse(input) {
        const query = input.toLowerCase().trim();
        
        // Intent recognition
        const intents = this.recognizeIntent(query);
        
        // Generate contextual response
        if (intents.career) {
            return this.generateCareerResponse(intents.career, query);
        } else if (intents.learning) {
            return this.generateLearningResponse(query);
        } else if (intents.salary) {
            return this.generateSalaryResponse(query);
        } else if (intents.interview) {
            return this.generateInterviewResponse(query);
        } else if (intents.roadmap) {
            return this.generateRoadmapResponse(query);
        } else {
            return this.generateFallbackResponse(query);
        }
    },
    
    recognizeIntent(query) {
        const intents = {};
        
        // Career detection
        const careers = ['ai', 'data scientist', 'web developer', 'cybersecurity', 'cloud', 'blockchain', 'mobile', 'devops'];
        careers.forEach(career => {
            if (query.includes(career)) intents.career = career;
        });
        
        // Intent keywords
        if (query.includes('learn') || query.includes('study') || query.includes('course')) intents.learning = true;
        if (query.includes('salary') || query.includes('pay') || query.includes('earn')) intents.salary = true;
        if (query.includes('interview') || query.includes('job') || query.includes('hire')) intents.interview = true;
        if (query.includes('roadmap') || query.includes('path') || query.includes('guide')) intents.roadmap = true;
        
        return intents;
    },
    
    generateCareerResponse(career, query) {
        const careerData = this.knowledge.careers[career] || this.knowledge.careers['ai engineer'];
        
        return `🚀 **${career.toUpperCase()} Career Insights:**

` +
               `📋 **Role:** ${careerData.description}

` +
               `💰 **Salary Range:** ${careerData.salary}

` +
               `📈 **Growth:** ${careerData.growth}

` +
               `🛠️ **Key Skills:** ${careerData.skills.join(', ')}

` +
               `🏢 **Top Companies:** ${careerData.companies.join(', ')}

` +
               `Would you like me to create a personalized roadmap for ${career}?`;
    },
    
    generateLearningResponse(query) {
        if (query.includes('beginner') || query.includes('start')) {
            return `🌱 **Beginner Learning Path:**

` +
                   `1️⃣ Choose your focus area (Web, AI, Mobile, etc.)
` +
                   `2️⃣ Pick a programming language (Python/JavaScript recommended)
` +
                   `3️⃣ Take structured online courses
` +
                   `4️⃣ Build 3-5 projects for your portfolio
` +
                   `5️⃣ Practice coding daily (30-60 minutes)

` +
                   `💡 **Pro Tip:** Start with our Career Assessment to find your ideal path!`;
        } else {
            return `📚 **Learning Resources:**

` +
                   `🎓 **Free:** freeCodeCamp, YouTube, NPTEL
` +
                   `💳 **Paid:** Coursera, Udemy, Pluralsight
` +
                   `🏗️ **Practice:** LeetCode, HackerRank, GitHub

` +
                   `What specific technology would you like to learn?`;
        }
    },
    
    generateSalaryResponse(query) {
        return `💰 **Tech Salary Guide (India):**

` +
               `👶 **Fresher:** ₹3-8 LPA
` +
               `👨‍💻 **Mid-level (2-5 years):** ₹8-20 LPA
` +
               `🎯 **Senior (5+ years):** ₹20-50 LPA
` +
               `🚀 **Principal/Architect:** ₹50+ LPA

` +
               `📊 **Factors affecting salary:**
` +
               `• Skills & expertise level
` +
               `• Company type (Product vs Service)
` +
               `• Location (Bangalore > Mumbai > Others)
` +
               `• Industry domain

` +
               `Which role are you interested in for specific salary info?`;
    },
    
    generateInterviewResponse(query) {
        return `🎯 **Interview Preparation Guide:**

` +
               `📝 **Technical Prep:**
` +
               `• Data Structures & Algorithms (60% weightage)
` +
               `• System Design (for senior roles)
` +
               `• Technology-specific questions

` +
               `🗣️ **Behavioral Prep:**
` +
               `• STAR method for experiences
` +
               `• Company research & culture fit
` +
               `• Questions to ask interviewer

` +
               `⏰ **Timeline:** 2-3 months preparation recommended

` +
               `Need help with a specific company or role?`;
    },
    
    generateRoadmapResponse(query) {
        return `🗺️ **Personalized Roadmap Creation:**

` +
               `I can help create a detailed roadmap for:
` +
               `🤖 AI/ML Engineering
` +
               `💻 Web Development
` +
               `📱 Mobile Development
` +
               `☁️ Cloud Architecture
` +
               `🔒 Cybersecurity
` +
               `📊 Data Science

` +
               `Visit our Roadmap page or take the Career Assessment for a personalized path!

` +
               `Which career interests you most?`;
    },
    
    generateFallbackResponse(query) {
        const responses = [
            `🤔 I understand you're asking about "${query}". Let me help you with that!\n\nI can assist with:\n• Career guidance & roadmaps\n• Salary information\n• Learning resources\n• Interview preparation\n• Technology choices\n\nWhat specific aspect would you like to explore?`,
            `💡 Great question! I'm here to help with your tech career journey.\n\nTry asking me about:\n• "How to become an AI engineer?"\n• "What's the salary for data scientists?"\n• "Best programming language for beginners?"\n• "How to prepare for tech interviews?"`,
            `🚀 I'm your AI career assistant! I can help you navigate the tech industry.\n\nPopular topics:\n• Career transitions\n• Skill development\n• Job market insights\n• Learning paths\n\nWhat would you like to know more about?`
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }
};

// AI Response Engine
function generateAIResponse(input) {
    // Simulate typing delay for more natural feel
    const response = aiChatbot.generateResponse(input);
    return response;
}

function initChatbot() {
    const toggle = document.getElementById('chatbotToggle');
    const window = document.getElementById('chatbotWindow');
    const messages = document.getElementById('chatbotMessages');
    const input = document.getElementById('chatbotInput');
    const send = document.getElementById('chatbotSend');
    
    if (!toggle) return;
    
    toggle.addEventListener('click', () => {
        window.style.display = window.style.display === 'flex' ? 'none' : 'flex';
    });
    
    function addMessage(text, isUser = false) {
        const message = document.createElement('div');
        message.className = `message ${isUser ? 'user' : 'bot'}`;
        message.textContent = text;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    }
    
    function getBotResponse(userInput) {
        return generateAIResponse(userInput);
    }
    
    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;
        
        addMessage(text, true);
        input.value = '';
        
        // Show typing indicator
        const typingMsg = document.createElement('div');
        typingMsg.className = 'message bot typing';
        typingMsg.innerHTML = '💭 AI is thinking...';
        messages.appendChild(typingMsg);
        messages.scrollTop = messages.scrollHeight;
        
        setTimeout(() => {
            messages.removeChild(typingMsg);
            const response = getBotResponse(text);
            addMessage(response);
        }, 1000 + Math.random() * 1000); // Random delay 1-2 seconds
    }
    
    send.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply animation to cards when they load
    setTimeout(() => {
        document.querySelectorAll('.card, .job-card, .roadmap-level').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }, 100);
});