// Resume Analysis and Job Matching System
class ResumeAnalyzer {
    constructor() {
        this.extractedSkills = [];
        this.jobDatabase = this.initializeJobDatabase();
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const uploadArea = document.getElementById('uploadArea');
        const resumeFile = document.getElementById('resumeFile');
        const findMatchingJobs = document.getElementById('findMatchingJobs');

        if (uploadArea) {
            uploadArea.addEventListener('click', () => resumeFile.click());
            uploadArea.addEventListener('dragover', this.handleDragOver.bind(this));
            uploadArea.addEventListener('drop', this.handleDrop.bind(this));
        }

        if (resumeFile) {
            resumeFile.addEventListener('change', this.handleFileSelect.bind(this));
        }

        if (findMatchingJobs) {
            findMatchingJobs.addEventListener('click', this.findMatchingJobs.bind(this));
        }

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.filterJobs(e.target.dataset.filter);
            });
        });
    }

    handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('dragover');
    }

    handleDrop(e) {
        e.preventDefault();
        e.currentTarget.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            this.processFile(files[0]);
        }
    }

    handleFileSelect(e) {
        const file = e.target.files[0];
        if (file) {
            this.processFile(file);
        }
    }

    async processFile(file) {
        if (file.size > 5 * 1024 * 1024) {
            alert('File size must be less than 5MB');
            return;
        }

        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(file.type)) {
            alert('Please upload a PDF, DOC, or DOCX file');
            return;
        }

        try {
            const text = await this.extractTextFromFile(file);
            this.analyzeResume(text);
        } catch (error) {
            console.error('Error processing file:', error);
            alert('Error processing file. Please try again.');
        }
    }

    async extractTextFromFile(file) {
        // For demo purposes, we'll simulate text extraction
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                // Simulate extracted text with common resume content
                const simulatedText = `
                    John Doe
                    Software Developer
                    
                    Skills: JavaScript, React, Node.js, Python, HTML, CSS, MongoDB, Express.js, 
                    Git, Docker, AWS, REST APIs, GraphQL, TypeScript, Vue.js, Angular, 
                    Machine Learning, Data Analysis, SQL, PostgreSQL, Redis, Kubernetes
                    
                    Experience:
                    - Frontend Developer at Tech Corp (2020-2023)
                    - Full Stack Developer at StartupXYZ (2018-2020)
                    - Junior Developer at WebSolutions (2017-2018)
                `;
                resolve(simulatedText);
            };
            reader.readAsText(file);
        });
    }

    analyzeResume(text) {
        const skillKeywords = [
            'javascript', 'react', 'vue', 'angular', 'html', 'css', 'typescript', 'nodejs', 
            'python', 'java', 'php', 'mongodb', 'mysql', 'postgresql', 'aws', 'docker', 
            'kubernetes', 'git', 'express', 'django', 'flask', 'spring', 'machine learning',
            'data analysis', 'sql', 'nosql', 'redis', 'graphql', 'rest api', 'microservices'
        ];

        const foundSkills = [];
        const lowerText = text.toLowerCase();

        skillKeywords.forEach(skill => {
            if (lowerText.includes(skill.toLowerCase())) {
                foundSkills.push(skill);
            }
        });

        this.extractedSkills = [...new Set(foundSkills)];
        this.displayAnalysisResults();
    }

    displayAnalysisResults() {
        const analysisSection = document.getElementById('resumeAnalysis');
        const skillsContainer = document.getElementById('skillsDetected');

        if (this.extractedSkills.length > 0) {
            skillsContainer.innerHTML = this.extractedSkills
                .map(skill => `<span class="skill-tag">${skill}</span>`)
                .join('');
            
            analysisSection.style.display = 'block';
        } else {
            skillsContainer.innerHTML = '<p>No technical skills detected. Please ensure your resume contains relevant keywords.</p>';
            analysisSection.style.display = 'block';
        }
    }

    findMatchingJobs() {
        if (this.extractedSkills.length === 0) {
            alert('Please upload and analyze your resume first.');
            return;
        }

        const matchedJobs = this.jobDatabase.map(job => {
            const matchingSkills = job.requiredSkills.filter(skill => 
                this.extractedSkills.some(userSkill => 
                    userSkill.toLowerCase().includes(skill.toLowerCase()) ||
                    skill.toLowerCase().includes(userSkill.toLowerCase())
                )
            );
            
            const matchPercentage = Math.round((matchingSkills.length / job.requiredSkills.length) * 100);
            
            return {
                ...job,
                matchingSkills,
                matchPercentage,
                isMatched: matchPercentage >= 30
            };
        }).sort((a, b) => b.matchPercentage - a.matchPercentage);

        this.displayJobs(matchedJobs);
        document.querySelector('.jobs-section').scrollIntoView({ behavior: 'smooth' });
    }

    filterJobs(filter) {
        let jobsToShow = this.jobDatabase;
        
        if (filter === 'matched' && this.extractedSkills.length > 0) {
            jobsToShow = this.jobDatabase.filter(job => {
                const matchingSkills = job.requiredSkills.filter(skill => 
                    this.extractedSkills.some(userSkill => 
                        userSkill.toLowerCase().includes(skill.toLowerCase())
                    )
                );
                return (matchingSkills.length / job.requiredSkills.length) >= 0.3;
            });
        } else if (filter !== 'all') {
            jobsToShow = this.jobDatabase.filter(job => 
                job.category.toLowerCase() === filter.toLowerCase()
            );
        }

        this.displayJobs(jobsToShow);
    }

    displayJobs(jobs) {
        const jobsList = document.getElementById('jobsList');
        
        if (jobs.length === 0) {
            jobsList.innerHTML = '<p>No jobs found matching your criteria.</p>';
            return;
        }

        jobsList.innerHTML = jobs.map(job => `
            <div class="job-card ${job.isMatched ? 'matched' : ''}" data-category="${job.category}">
                ${job.matchPercentage ? `<div class="match-percentage">${job.matchPercentage}% Match</div>` : ''}
                <h3 class="job-title">${job.title}</h3>
                <div class="job-company">${job.company}</div>
                <div class="job-location">${job.location}</div>
                <div class="job-description">${job.description}</div>
                <div class="job-skills">
                    <strong>Required Skills:</strong>
                    ${job.requiredSkills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
                ${job.matchingSkills && job.matchingSkills.length > 0 ? `
                    <div class="matching-skills">
                        <strong>Your Matching Skills:</strong>
                        ${job.matchingSkills.map(skill => `<span class="skill-tag" style="background: #10b981;">${skill}</span>`).join('')}
                    </div>
                ` : ''}
                <div class="job-action">
                    <a href="${job.applyLink}" target="_blank" class="btn btn-primary">Apply Now</a>
                </div>
            </div>
        `).join('');
    }

    initializeJobDatabase() {
        return [
            {
                id: 1,
                title: "Frontend React Developer",
                company: "TechCorp Inc.",
                location: "San Francisco, CA",
                category: "frontend",
                description: "Build modern web applications using React and TypeScript.",
                requiredSkills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Redux"],
                applyLink: "https://example.com/apply/1"
            },
            {
                id: 2,
                title: "Full Stack Developer",
                company: "StartupXYZ",
                location: "New York, NY",
                category: "fullstack",
                description: "Work on both frontend and backend systems using modern technologies.",
                requiredSkills: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "AWS"],
                applyLink: "https://example.com/apply/2"
            },
            {
                id: 3,
                title: "Backend Python Developer",
                company: "DataSoft Solutions",
                location: "Austin, TX",
                category: "backend",
                description: "Develop scalable backend services using Python and Django.",
                requiredSkills: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "AWS"],
                applyLink: "https://example.com/apply/3"
            },
            {
                id: 4,
                title: "Data Scientist",
                company: "AI Innovations",
                location: "Seattle, WA",
                category: "data",
                description: "Analyze large datasets and build machine learning models.",
                requiredSkills: ["Python", "Machine Learning", "Pandas", "NumPy", "TensorFlow", "SQL"],
                applyLink: "https://example.com/apply/4"
            },
            {
                id: 5,
                title: "DevOps Engineer",
                company: "CloudTech",
                location: "Remote",
                category: "backend",
                description: "Manage cloud infrastructure and deployment pipelines.",
                requiredSkills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Linux"],
                applyLink: "https://example.com/apply/5"
            },
            {
                id: 6,
                title: "Vue.js Frontend Developer",
                company: "WebSolutions",
                location: "Los Angeles, CA",
                category: "frontend",
                description: "Create interactive user interfaces using Vue.js and modern CSS.",
                requiredSkills: ["Vue.js", "JavaScript", "HTML", "CSS", "Vuex", "Webpack"],
                applyLink: "https://example.com/apply/6"
            }
        ];
    }
}

// Initialize the resume analyzer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('uploadArea')) {
        new ResumeAnalyzer();
    }
});