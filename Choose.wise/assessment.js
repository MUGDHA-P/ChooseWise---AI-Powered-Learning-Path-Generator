// Assessment questionnaire data
const assessmentQuestions = [
    {
        id: 1,
        question: "What interests you most in technology?",
        type: "multiple",
        options: [
            { text: "Building websites and apps", value: "web-dev", weight: { "web-developer": 3, "ai-engineer": 1 } },
            { text: "Analyzing data and finding patterns", value: "data", weight: { "data-scientist": 3, "ai-engineer": 2 } },
            { text: "Creating intelligent systems", value: "ai", weight: { "ai-engineer": 3, "data-scientist": 1 } },
            { text: "Protecting systems from threats", value: "security", weight: { "cybersecurity": 3, "cloud-architect": 1 } },
            { text: "Managing cloud infrastructure", value: "cloud", weight: { "cloud-architect": 3, "cybersecurity": 1 } },
            { text: "Building decentralized applications", value: "blockchain", weight: { "blockchain": 3, "web-developer": 1 } }
        ]
    },
    {
        id: 2,
        question: "Which programming languages do you prefer or want to learn?",
        type: "multiple",
        options: [
            { text: "Python", value: "python", weight: { "ai-engineer": 3, "data-scientist": 3, "web-developer": 1 } },
            { text: "JavaScript", value: "javascript", weight: { "web-developer": 3, "blockchain": 2 } },
            { text: "Java", value: "java", weight: { "web-developer": 2, "cloud-architect": 2 } },
            { text: "C++", value: "cpp", weight: { "ai-engineer": 2, "cybersecurity": 2 } },
            { text: "Solidity", value: "solidity", weight: { "blockchain": 3 } },
            { text: "R", value: "r", weight: { "data-scientist": 3 } }
        ]
    },
    {
        id: 3,
        question: "What type of work environment do you prefer?",
        type: "single",
        options: [
            { text: "Creative and innovative projects", value: "creative", weight: { "web-developer": 2, "ai-engineer": 2, "blockchain": 2 } },
            { text: "Data-driven decision making", value: "analytical", weight: { "data-scientist": 3, "ai-engineer": 1 } },
            { text: "Security-focused and methodical", value: "security", weight: { "cybersecurity": 3, "cloud-architect": 1 } },
            { text: "Scalable system architecture", value: "systems", weight: { "cloud-architect": 3, "web-developer": 1 } }
        ]
    },
    {
        id: 4,
        question: "Which skills do you currently have or want to develop?",
        type: "multiple",
        options: [
            { text: "Machine Learning", value: "ml", weight: { "ai-engineer": 3, "data-scientist": 2 } },
            { text: "Web Development", value: "web", weight: { "web-developer": 3, "blockchain": 1 } },
            { text: "Data Analysis", value: "analysis", weight: { "data-scientist": 3, "ai-engineer": 1 } },
            { text: "Network Security", value: "network", weight: { "cybersecurity": 3 } },
            { text: "Cloud Platforms", value: "cloud-platforms", weight: { "cloud-architect": 3, "web-developer": 1 } },
            { text: "Smart Contracts", value: "contracts", weight: { "blockchain": 3 } }
        ]
    },
    {
        id: 5,
        question: "What motivates you most in your career?",
        type: "single",
        options: [
            { text: "High salary potential", value: "salary", weight: { "ai-engineer": 2, "data-scientist": 2, "blockchain": 2 } },
            { text: "Creative problem solving", value: "creativity", weight: { "web-developer": 3, "ai-engineer": 2 } },
            { text: "Making data-driven impact", value: "impact", weight: { "data-scientist": 3, "ai-engineer": 1 } },
            { text: "Protecting digital assets", value: "protection", weight: { "cybersecurity": 3, "cloud-architect": 1 } }
        ]
    },
    {
        id: 6,
        question: "How do you prefer to learn new technologies?",
        type: "single",
        options: [
            { text: "Hands-on projects and coding", value: "practical", weight: { "web-developer": 2, "blockchain": 2 } },
            { text: "Research and experimentation", value: "research", weight: { "ai-engineer": 3, "data-scientist": 2 } },
            { text: "Structured courses and certifications", value: "structured", weight: { "cloud-architect": 2, "cybersecurity": 2 } },
            { text: "Community and open source", value: "community", weight: { "web-developer": 2, "blockchain": 3 } }
        ]
    },
    {
        id: 7,
        question: "Which industry excites you most?",
        type: "single",
        options: [
            { text: "Tech startups and innovation", value: "startup", weight: { "web-developer": 2, "ai-engineer": 2, "blockchain": 3 } },
            { text: "Finance and fintech", value: "finance", weight: { "blockchain": 3, "data-scientist": 2, "cybersecurity": 2 } },
            { text: "Healthcare and life sciences", value: "healthcare", weight: { "ai-engineer": 2, "data-scientist": 3 } },
            { text: "Enterprise and cloud services", value: "enterprise", weight: { "cloud-architect": 3, "cybersecurity": 2 } }
        ]
    },
    {
        id: 8,
        question: "What's your experience level with technology?",
        type: "single",
        options: [
            { text: "Beginner - Just starting out", value: "beginner", weight: { "web-developer": 1, "data-scientist": 1 } },
            { text: "Intermediate - Some experience", value: "intermediate", weight: { "ai-engineer": 1, "cloud-architect": 1 } },
            { text: "Advanced - Strong technical background", value: "advanced", weight: { "ai-engineer": 2, "cybersecurity": 2, "blockchain": 2 } },
            { text: "Expert - Deep technical expertise", value: "expert", weight: { "ai-engineer": 3, "cybersecurity": 3, "blockchain": 3 } }
        ]
    },
    {
        id: 9,
        question: "Which work style suits you best?",
        type: "single",
        options: [
            { text: "Independent and self-directed", value: "independent", weight: { "blockchain": 2, "ai-engineer": 2 } },
            { text: "Collaborative team projects", value: "team", weight: { "web-developer": 3, "cloud-architect": 2 } },
            { text: "Research and analysis focused", value: "research-focused", weight: { "data-scientist": 3, "ai-engineer": 1 } },
            { text: "Security and compliance oriented", value: "security-focused", weight: { "cybersecurity": 3, "cloud-architect": 1 } }
        ]
    },
    {
        id: 10,
        question: "What's your preferred learning timeline?",
        type: "single",
        options: [
            { text: "Quick skills (3-6 months)", value: "quick", weight: { "web-developer": 2, "data-scientist": 1 } },
            { text: "Moderate learning (6-12 months)", value: "moderate", weight: { "web-developer": 1, "cloud-architect": 2, "cybersecurity": 2 } },
            { text: "Deep expertise (1-2 years)", value: "deep", weight: { "ai-engineer": 3, "data-scientist": 2, "blockchain": 2 } },
            { text: "Continuous learning journey", value: "continuous", weight: { "ai-engineer": 2, "cybersecurity": 3, "blockchain": 3 } }
        ]
    }
];

// Career definitions
const careerPaths = {
    "ai-engineer": {
        title: "AI Engineer",
        description: "Design and develop artificial intelligence systems and machine learning models",
        salary: "₹8-25 LPA",
        growth: "Very High"
    },
    "data-scientist": {
        title: "Data Scientist",
        description: "Analyze complex data to extract insights and drive business decisions",
        salary: "₹6-20 LPA",
        growth: "High"
    },
    "web-developer": {
        title: "Web Developer",
        description: "Build responsive websites and web applications",
        salary: "₹3-15 LPA",
        growth: "Steady"
    },
    "cybersecurity": {
        title: "Cybersecurity Specialist",
        description: "Protect digital assets and systems from security threats",
        salary: "₹5-18 LPA",
        growth: "Very High"
    },
    "cloud-architect": {
        title: "Cloud Architect",
        description: "Design and manage scalable cloud infrastructure solutions",
        salary: "₹10-30 LPA",
        growth: "Excellent"
    },
    "blockchain": {
        title: "Blockchain Developer",
        description: "Build decentralized applications and smart contracts",
        salary: "₹6-25 LPA",
        growth: "Emerging"
    }
};

// Assessment logic
class AssessmentManager {
    constructor() {
        this.currentQuestion = 0;
        this.answers = {};
        this.scores = {};
        this.init();
    }

    init() {
        console.log('Assessment initialized');
        this.loadQuestion();
        this.setupEventListeners();
        this.updateProgress();
        this.updateButtons();
    }

    setupEventListeners() {
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        const retakeBtn = document.getElementById('retakeBtn');
        
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());
        if (prevBtn) prevBtn.addEventListener('click', () => this.prevQuestion());
        if (retakeBtn) retakeBtn.addEventListener('click', () => this.resetAssessment());
    }

    loadQuestion() {
        const question = assessmentQuestions[this.currentQuestion];
        document.getElementById('questionTitle').textContent = question.question;
        
        const optionsGrid = document.getElementById('optionsGrid');
        optionsGrid.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option-card';
            optionDiv.innerHTML = `
                <input type="${question.type === 'single' ? 'radio' : 'checkbox'}" 
                       id="option${index}" 
                       name="question${question.id}" 
                       value="${option.value}">
                <label for="option${index}">${option.text}</label>
            `;
            
            // Add click handler for option selection
            optionDiv.addEventListener('click', (e) => {
                const input = optionDiv.querySelector('input');
                if (question.type === 'single') {
                    // Clear all selections for radio buttons
                    document.querySelectorAll('.option-card').forEach(card => {
                        card.classList.remove('selected');
                    });
                    // Select current option
                    input.checked = true;
                    optionDiv.classList.add('selected');
                } else {
                    // Toggle checkbox
                    input.checked = !input.checked;
                    optionDiv.classList.toggle('selected', input.checked);
                }
                this.updateNextButton();
            });
            
            optionsGrid.appendChild(optionDiv);
        });

        // Restore previous answers
        if (this.answers[question.id]) {
            this.answers[question.id].forEach(value => {
                const input = document.querySelector(`input[value="${value}"]`);
                if (input) {
                    input.checked = true;
                    input.closest('.option-card').classList.add('selected');
                }
            });
        }
        
        this.updateNextButton();
    }

    nextQuestion() {
        if (!this.validateCurrentQuestion()) {
            this.showValidationMessage();
            return;
        }
        
        this.saveCurrentAnswer();
        
        if (this.currentQuestion < assessmentQuestions.length - 1) {
            this.currentQuestion++;
            this.loadQuestion();
            this.updateProgress();
            this.updateButtons();
        } else {
            this.showResults();
        }
    }
    
    showValidationMessage() {
        const existingMessage = document.querySelector('.validation-message');
        if (existingMessage) existingMessage.remove();
        
        const message = document.createElement('div');
        message.className = 'validation-message';
        message.textContent = 'Please select at least one option to continue.';
        message.style.cssText = `
            color: #dc2626;
            text-align: center;
            margin-top: 1rem;
            padding: 0.5rem;
            background: rgba(220, 38, 38, 0.1);
            border-radius: 0.25rem;
            animation: fadeInUp 0.3s ease;
        `;
        
        document.querySelector('.form-actions').insertBefore(message, document.getElementById('nextBtn'));
        
        setTimeout(() => {
            if (message.parentNode) message.remove();
        }, 3000);
    }

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.loadQuestion();
            this.updateProgress();
            this.updateButtons();
        }
    }

    validateCurrentQuestion() {
        const question = assessmentQuestions[this.currentQuestion];
        const checkedInputs = document.querySelectorAll(`input[name="question${question.id}"]:checked`);
        return checkedInputs.length > 0;
    }

    saveCurrentAnswer() {
        const question = assessmentQuestions[this.currentQuestion];
        const checkedInputs = document.querySelectorAll(`input[name="question${question.id}"]:checked`);
        this.answers[question.id] = Array.from(checkedInputs).map(input => input.value);
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / assessmentQuestions.length) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('currentQuestion').textContent = this.currentQuestion + 1;
        document.getElementById('totalQuestions').textContent = assessmentQuestions.length;
    }

    updateButtons() {
        document.getElementById('prevBtn').disabled = this.currentQuestion === 0;
        document.getElementById('nextBtn').textContent = 
            this.currentQuestion === assessmentQuestions.length - 1 ? 'Get Results' : 'Next';
    }
    
    updateNextButton() {
        const nextBtn = document.getElementById('nextBtn');
        if (!nextBtn) return;
        
        const hasSelection = this.validateCurrentQuestion();
        nextBtn.disabled = !hasSelection;
        nextBtn.style.opacity = hasSelection ? '1' : '0.5';
    }

    calculateScores() {
        this.scores = {};
        
        Object.keys(this.answers).forEach(questionId => {
            const question = assessmentQuestions.find(q => q.id == questionId);
            const selectedAnswers = this.answers[questionId];
            
            selectedAnswers.forEach(answerValue => {
                const option = question.options.find(opt => opt.value === answerValue);
                if (option && option.weight) {
                    Object.keys(option.weight).forEach(career => {
                        this.scores[career] = (this.scores[career] || 0) + option.weight[career];
                    });
                }
            });
        });
    }

    showResults() {
        this.calculateScores();
        
        // Sort careers by score
        const sortedCareers = Object.entries(this.scores)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3);

        const recommendationsGrid = document.getElementById('recommendationsGrid');
        recommendationsGrid.innerHTML = '';

        sortedCareers.forEach(([careerKey, score], index) => {
            const career = careerPaths[careerKey];
            const matchPercentage = Math.min(Math.round((score / 15) * 100), 100);
            
            const recommendationCard = document.createElement('div');
            recommendationCard.className = 'recommendation-card';
            recommendationCard.innerHTML = `
                <div class="rank">#${index + 1}</div>
                <h3>${career.title}</h3>
                <div class="match-score">${matchPercentage}% Match</div>
                <p>${career.description}</p>
                <div class="career-details">
                    <span class="salary">💰 ${career.salary}</span>
                    <span class="growth">📈 ${career.growth}</span>
                </div>
                <button class="btn btn-primary roadmap-btn" onclick="goToRoadmap('${career.title}')">View Roadmap</button>
            `;
            recommendationsGrid.appendChild(recommendationCard);
        });

        document.getElementById('questionCard').style.display = 'none';
        document.getElementById('resultsSection').style.display = 'block';
    }

    resetAssessment() {
        this.currentQuestion = 0;
        this.answers = {};
        this.scores = {};
        document.getElementById('questionCard').style.display = 'block';
        document.getElementById('resultsSection').style.display = 'none';
        this.loadQuestion();
        this.updateProgress();
        this.updateButtons();
    }
}

// Function to navigate to roadmap with selected career
function goToRoadmap(careerTitle) {
    // Create career object for roadmap
    const careerData = {
        title: careerTitle,
        description: careerPaths[Object.keys(careerPaths).find(key => careerPaths[key].title === careerTitle)]?.description || '',
        skills: getCareerSkills(careerTitle),
        roadmap: getCareerRoadmap(careerTitle),
        fromAssessment: true // Flag to indicate this came from assessment
    };
    
    // Store selected career in localStorage
    localStorage.setItem('selectedCareer', JSON.stringify(careerData));
    
    // Navigate to roadmap page
    window.location.href = 'roadmap.html';
}

// Get skills for career
function getCareerSkills(careerTitle) {
    const skillsMap = {
        'AI Engineer': ['Python', 'TensorFlow', 'Machine Learning', 'Deep Learning'],
        'Data Scientist': ['Python', 'R', 'Statistics', 'SQL', 'Visualization'],
        'Web Developer': ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
        'Cybersecurity Specialist': ['Network Security', 'Ethical Hacking', 'Risk Assessment', 'Compliance'],
        'Cloud Architect': ['AWS', 'Azure', 'Docker', 'Kubernetes', 'DevOps'],
        'Blockchain Developer': ['Solidity', 'Web3', 'Smart Contracts', 'Cryptocurrency']
    };
    return skillsMap[careerTitle] || [];
}

// Get roadmap for career
function getCareerRoadmap(careerTitle) {
    const roadmapMap = {
        'AI Engineer': ['Learn Python & Math', 'Study ML Algorithms', 'Practice with TensorFlow', 'Build AI Projects', 'Get ML Certification'],
        'Data Scientist': ['Master Statistics', 'Learn Python/R', 'Practice SQL', 'Create Dashboards', 'Build Portfolio'],
        'Web Developer': ['Master HTML/CSS', 'Learn JavaScript', 'Study React/Vue', 'Backend with Node.js', 'Deploy Projects'],
        'Cybersecurity Specialist': ['Learn Networking', 'Study Security Basics', 'Practice Ethical Hacking', 'Get Certified', 'Join Security Team'],
        'Cloud Architect': ['Learn Cloud Basics', 'Get AWS/Azure Certified', 'Master Docker', 'Practice Kubernetes', 'Design Solutions'],
        'Blockchain Developer': ['Understand Blockchain', 'Learn Solidity', 'Build Smart Contracts', 'Create DApps', 'Join Blockchain Projects']
    };
    return roadmapMap[careerTitle] || [];
}

// Initialize assessment when page loads
function initAssessment() {
    if (document.getElementById('assessmentForm')) {
        new AssessmentManager();
    }
}

// Try multiple initialization methods
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAssessment);
} else {
    initAssessment();
}

// Fallback initialization
window.addEventListener('load', () => {
    if (!window.assessmentInitialized) {
        initAssessment();
        window.assessmentInitialized = true;
    }
});