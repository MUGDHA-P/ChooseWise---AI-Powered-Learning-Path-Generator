// Advanced Resume Parser with Job Matching
class AdvancedResumeParser {
    constructor() {
        this.resumeData = null;
        this.skillsData = null;
        this.jobMatches = [];
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('resumeFile');

        // File upload handlers
        uploadArea.addEventListener('click', () => fileInput.click());
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '#2563eb';
        });
        uploadArea.addEventListener('dragleave', () => {
            uploadArea.style.borderColor = '#ddd';
        });
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '#ddd';
            this.handleFileUpload(e.dataTransfer.files[0]);
        });

        fileInput.addEventListener('change', (e) => {
            this.handleFileUpload(e.target.files[0]);
        });

        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });

        // Filter handlers
        document.getElementById('locationFilter').addEventListener('change', () => this.filterJobs());
        document.getElementById('seniorityFilter').addEventListener('change', () => this.filterJobs());
        document.getElementById('scoreThreshold').addEventListener('input', (e) => {
            document.getElementById('scoreValue').textContent = e.target.value;
            this.filterJobs();
        });

        // Action buttons
        document.getElementById('downloadReport').addEventListener('click', () => this.downloadReport());
        document.getElementById('saveResume').addEventListener('click', () => this.saveResumeData());
        document.getElementById('editResume').addEventListener('click', () => this.editResumeData());
        document.getElementById('testResumeBtn').addEventListener('click', () => this.testSampleResume());
    }

    handleFileUpload(file) {
        if (!file) return;

        const allowedTypes = ['application/pdf', 'application/msword', 
                             'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
                             'text/plain', 'image/jpeg', 'image/png'];
        
        if (!allowedTypes.includes(file.type)) {
            this.showError('Please upload a PDF, DOC, DOCX, TXT, JPG, or PNG file.');
            return;
        }

        this.showLoading('Analyzing resume...');

        // Simulate processing delay
        setTimeout(() => {
            try {
                let text = '';
                if (file.type === 'text/plain') {
                    this.readTextFile(file);
                } else {
                    // Use sample resume text for demo
                    text = this.getSampleResumeText();
                    this.processResumeText(text);
                }
            } catch (error) {
                this.showError('Failed to process resume. Please try again.');
                console.error(error);
            }
        }, 1000);
    }

    readTextFile(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.processResumeText(e.target.result);
        };
        reader.onerror = () => {
            this.showError('Failed to read file. Please try again.');
        };
        reader.readAsText(file);
    }

    getSampleResumeText() {
        return `
John Doe
Software Engineer
Email: john.doe@email.com | Phone: (555) 123-4567

EXPERIENCE
Senior Frontend Developer at TechCorp (2021-2024)
• Developed responsive web applications using React and TypeScript
• Led a team of 3 junior developers
• Improved application performance by 40%
• Implemented CI/CD pipelines using Jenkins

Frontend Developer at WebStudio (2019-2021)
• Built user interfaces with HTML, CSS, and JavaScript
• Collaborated with UX designers on user experience improvements
• Worked with REST APIs and GraphQL

EDUCATION
Bachelor of Technology in Computer Science
Indian Institute of Technology (2015-2019)

SKILLS
Programming: JavaScript, TypeScript, Python, Java
Frontend: React, Vue.js, HTML5, CSS3, SASS
Backend: Node.js, Express, Django
Databases: MongoDB, PostgreSQL, MySQL
Tools: Git, Docker, AWS, Jenkins, Webpack
        `.trim();
    }

    processResumeText(text) {
        try {
            this.parseResume(text);
            this.analyzeSkills();
            this.matchJobs();
            this.displayResults();
        } catch (error) {
            this.showError('Failed to analyze resume. Please try again.');
            console.error(error);
        }
    }

    parseResume(text) {
        if (!text || text.trim().length < 50) {
            throw new Error('Resume text is too short or empty');
        }
        
        this.resumeData = {
            rawText: text,
            contact: this.extractContact(text),
            experience: this.extractExperience(text),
            education: this.extractEducation(text),
            skills: this.extractSkills(text),
            projects: this.extractProjects(text)
        };
    }

    extractContact(text) {
        const emailMatch = text.match(/[\w\.-]+@[\w\.-]+\.\w+/);
        const phoneMatch = text.match(/[\+]?[1-9]?[\d\s\-\(\)]{10,}/);
        const nameMatch = text.split('\n')[0].trim();

        return {
            name: nameMatch || 'Not found',
            email: emailMatch ? emailMatch[0] : 'Not found',
            phone: phoneMatch ? phoneMatch[0] : 'Not found'
        };
    }

    extractExperience(text) {
        const experiences = [];
        const lines = text.split('\n');
        let inExperienceSection = false;
        let currentExp = null;

        for (let line of lines) {
            line = line.trim();
            if (/experience|work|employment/i.test(line) && line.length < 50) {
                inExperienceSection = true;
                continue;
            }
            if (/education|skills|projects/i.test(line) && line.length < 50) {
                inExperienceSection = false;
                if (currentExp) {
                    experiences.push(currentExp);
                    currentExp = null;
                }
                continue;
            }
            if (inExperienceSection && line) {
                if (line.includes('at ') || line.includes('•') || line.includes('-')) {
                    if (currentExp) {
                        experiences.push(currentExp);
                    }
                    currentExp = {
                        title: line,
                        description: []
                    };
                } else if (currentExp && line.startsWith('•')) {
                    currentExp.description.push(line);
                }
            }
        }
        if (currentExp) {
            experiences.push(currentExp);
        }

        return experiences;
    }

    extractEducation(text) {
        const education = [];
        const lines = text.split('\n');
        let inEducationSection = false;

        for (let line of lines) {
            line = line.trim();
            if (/education|degree|university|college/i.test(line) && line.length < 50) {
                inEducationSection = true;
                continue;
            }
            if (/experience|skills|projects/i.test(line) && line.length < 50) {
                inEducationSection = false;
                continue;
            }
            if (inEducationSection && line && !line.startsWith('•')) {
                education.push(line);
            }
        }

        return education;
    }

    extractSkills(text) {
        const skillCategories = {
            programming: ['javascript', 'python', 'java', 'c++', 'c#', 'php', 'ruby', 'go', 'rust', 'typescript'],
            frontend: ['react', 'angular', 'vue', 'html', 'css', 'sass', 'less', 'bootstrap', 'tailwind'],
            backend: ['node.js', 'express', 'django', 'flask', 'spring', 'laravel', 'rails'],
            database: ['mongodb', 'postgresql', 'mysql', 'redis', 'elasticsearch', 'sqlite'],
            cloud: ['aws', 'azure', 'gcp', 'docker', 'kubernetes', 'terraform'],
            tools: ['git', 'jenkins', 'webpack', 'npm', 'yarn', 'jira', 'confluence']
        };

        const foundSkills = {};
        const lowerText = text.toLowerCase();

        for (let [category, skills] of Object.entries(skillCategories)) {
            foundSkills[category] = skills.filter(skill => 
                lowerText.includes(skill.toLowerCase())
            );
        }

        return foundSkills;
    }

    extractProjects(text) {
        const projects = [];
        const lines = text.split('\n');
        let inProjectsSection = false;

        for (let line of lines) {
            line = line.trim();
            if (/projects|portfolio/i.test(line) && line.length < 50) {
                inProjectsSection = true;
                continue;
            }
            if (/experience|education|skills/i.test(line) && line.length < 50) {
                inProjectsSection = false;
                continue;
            }
            if (inProjectsSection && line && !line.startsWith('•')) {
                projects.push(line);
            }
        }

        return projects;
    }

    analyzeSkills() {
        if (!this.resumeData || !this.resumeData.skills) {
            throw new Error('Resume data not available for skills analysis');
        }
        
        const allSkills = [];
        Object.values(this.resumeData.skills).forEach(categorySkills => {
            if (Array.isArray(categorySkills)) {
                allSkills.push(...categorySkills);
            }
        });

        this.skillsData = {
            totalSkills: allSkills.length,
            categories: this.resumeData.skills,
            experienceLevel: this.determineExperienceLevel(),
            strengths: this.identifyStrengths(),
            gaps: this.identifySkillGaps()
        };
    }

    determineExperienceLevel() {
        const expCount = this.resumeData.experience.length;
        const skillCount = Object.values(this.resumeData.skills).flat().length;
        
        if (expCount >= 3 && skillCount >= 15) return 'Senior';
        if (expCount >= 2 && skillCount >= 10) return 'Mid-Level';
        if (expCount >= 1 && skillCount >= 5) return 'Junior';
        return 'Entry-Level';
    }

    identifyStrengths() {
        const strengths = [];
        const skills = this.resumeData.skills;
        
        if (skills.programming.length >= 3) strengths.push('Strong programming foundation');
        if (skills.frontend.length >= 3) strengths.push('Frontend development expertise');
        if (skills.backend.length >= 2) strengths.push('Backend development skills');
        if (skills.cloud.length >= 2) strengths.push('Cloud technology experience');
        if (skills.database.length >= 2) strengths.push('Database management skills');
        
        return strengths;
    }

    identifySkillGaps() {
        const gaps = [];
        const skills = this.resumeData.skills;
        
        if (skills.programming.length < 2) gaps.push('Limited programming languages');
        if (skills.frontend.length === 0) gaps.push('No frontend framework experience');
        if (skills.backend.length === 0) gaps.push('No backend development experience');
        if (skills.cloud.length === 0) gaps.push('No cloud platform experience');
        if (skills.tools.length < 2) gaps.push('Limited development tools knowledge');
        
        return gaps;
    }

    matchJobs() {
        if (!this.skillsData || !window.jobsData) {
            throw new Error('Skills data or jobs data not available');
        }
        
        // Use the jobsData from jobs.html or create sample data
        const jobsData = window.jobsData || this.getSampleJobsData();
        
        this.jobMatches = jobsData.map(job => {
            const score = this.calculateJobMatchScore(job);
            const analysis = this.analyzeJobMatch(job);
            
            return {
                ...job,
                matchScore: score,
                analysis: analysis
            };
        }).sort((a, b) => b.matchScore - a.matchScore);
    }

    calculateJobMatchScore(job) {
        let score = 0;
        let totalWeight = 0;
        const userSkills = Object.values(this.resumeData.skills).flat().map(s => s.toLowerCase());
        
        // Required skills scoring
        job.required_skills.forEach(reqSkill => {
            totalWeight += reqSkill.weight;
            if (userSkills.includes(reqSkill.skill.toLowerCase())) {
                score += reqSkill.weight * 100;
            }
        });
        
        // Preferred skills bonus
        job.preferred_skills.forEach(prefSkill => {
            if (userSkills.includes(prefSkill.skill.toLowerCase())) {
                score += prefSkill.weight * 20;
            }
        });
        
        // Experience level matching
        const userLevel = this.skillsData.experienceLevel.toLowerCase();
        const jobLevel = job.seniority.toLowerCase();
        
        if (userLevel === jobLevel) {
            score += 20;
        } else if (
            (userLevel === 'mid-level' && jobLevel === 'junior') ||
            (userLevel === 'senior' && (jobLevel === 'junior' || jobLevel === 'mid'))
        ) {
            score += 10;
        }
        
        return Math.min(Math.round(score / (totalWeight + 0.4) * 100), 100);
    }

    analyzeJobMatch(job) {
        const userSkills = Object.values(this.resumeData.skills).flat().map(s => s.toLowerCase());
        const requiredSkills = job.required_skills.map(s => s.skill.toLowerCase());
        const preferredSkills = job.preferred_skills.map(s => s.skill.toLowerCase());
        
        const matchedRequired = requiredSkills.filter(skill => userSkills.includes(skill));
        const missingRequired = requiredSkills.filter(skill => !userSkills.includes(skill));
        const matchedPreferred = preferredSkills.filter(skill => userSkills.includes(skill));
        
        return {
            matchedRequired,
            missingRequired,
            matchedPreferred,
            rationale: this.generateMatchRationale(job, matchedRequired, missingRequired)
        };
    }

    generateMatchRationale(job, matched, missing) {
        let rationale = `You match ${matched.length} out of ${job.required_skills.length} required skills. `;
        
        if (missing.length === 0) {
            rationale += "Perfect skill match! You meet all requirements.";
        } else if (missing.length <= 2) {
            rationale += `Consider learning ${missing.join(', ')} to strengthen your application.`;
        } else {
            rationale += `This role requires additional skills: ${missing.slice(0, 3).join(', ')}${missing.length > 3 ? '...' : ''}.`;
        }
        
        return rationale;
    }

    displayResults() {
        document.getElementById('resumeAnalysis').style.display = 'block';
        this.displayParsedResume();
        this.displaySkillsAnalysis();
        this.displayJobMatches();
        this.displaySuggestions();
    }

    displayParsedResume() {
        const container = document.getElementById('parsedResume');
        const data = this.resumeData;
        
        container.innerHTML = `
            <div class="resume-section">
                <h4>📞 Contact Information</h4>
                <p><strong>Name:</strong> ${data.contact.name}</p>
                <p><strong>Email:</strong> ${data.contact.email}</p>
                <p><strong>Phone:</strong> ${data.contact.phone}</p>
            </div>
            
            <div class="resume-section">
                <h4>💼 Experience (${data.experience.length} positions)</h4>
                ${data.experience.map(exp => `
                    <div style="margin-bottom: 1rem;">
                        <strong>${exp.title}</strong>
                        ${exp.description.map(desc => `<br><small>${desc}</small>`).join('')}
                    </div>
                `).join('')}
            </div>
            
            <div class="resume-section">
                <h4>🎓 Education</h4>
                ${data.education.map(edu => `<p>${edu}</p>`).join('')}
            </div>
            
            <div class="resume-section">
                <h4>🔧 Skills by Category</h4>
                ${Object.entries(data.skills).map(([category, skills]) => 
                    skills.length > 0 ? `
                        <p><strong>${category.charAt(0).toUpperCase() + category.slice(1)}:</strong> 
                        ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}</p>
                    ` : ''
                ).join('')}
            </div>
            
            ${data.projects.length > 0 ? `
                <div class="resume-section">
                    <h4>🚀 Projects</h4>
                    ${data.projects.map(project => `<p>${project}</p>`).join('')}
                </div>
            ` : ''}
        `;
    }

    displaySkillsAnalysis() {
        const container = document.getElementById('skillsBreakdown');
        const skills = this.skillsData;
        
        container.innerHTML = `
            <div class="skill-category">
                <h4>📊 Skills Overview</h4>
                <div class="skill-item">
                    <span>Total Skills Identified</span>
                    <span class="skill-level">${skills.totalSkills}</span>
                </div>
                <div class="skill-item">
                    <span>Experience Level</span>
                    <span class="skill-level">${skills.experienceLevel}</span>
                </div>
            </div>
            
            <div class="skill-category">
                <h4>💪 Strengths</h4>
                ${skills.strengths.map(strength => `
                    <div class="skill-item">
                        <span>✅ ${strength}</span>
                    </div>
                `).join('')}
            </div>
            
            ${skills.gaps.length > 0 ? `
                <div class="skill-category">
                    <h4>📈 Areas for Improvement</h4>
                    ${skills.gaps.map(gap => `
                        <div class="skill-item">
                            <span>⚠️ ${gap}</span>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            
            <div class="skill-category">
                <h4>🎯 Skill Distribution</h4>
                ${Object.entries(skills.categories).map(([category, categorySkills]) => `
                    <div class="skill-item">
                        <span>${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                        <span class="skill-level">${categorySkills.length} skills</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    displayJobMatches() {
        const container = document.getElementById('jobMatches');
        this.filterJobs();
    }

    filterJobs() {
        const locationFilter = document.getElementById('locationFilter').value;
        const seniorityFilter = document.getElementById('seniorityFilter').value;
        const scoreThreshold = parseInt(document.getElementById('scoreThreshold').value);
        
        let filteredJobs = this.jobMatches.filter(job => {
            if (locationFilter && !job.location.toLowerCase().includes(locationFilter) && 
                !(locationFilter === 'remote' && job.remote_flag)) return false;
            if (seniorityFilter && job.seniority !== seniorityFilter) return false;
            if (job.matchScore < scoreThreshold) return false;
            return true;
        });
        
        const container = document.getElementById('jobMatches');
        
        if (filteredJobs.length === 0) {
            container.innerHTML = '<p>No jobs match your current filters. Try adjusting the criteria.</p>';
            return;
        }
        
        container.innerHTML = filteredJobs.map(job => `
            <div class="job-match-card">
                <div class="match-score">${job.matchScore}%</div>
                <h4>${job.title}</h4>
                <p><strong>🏢 ${job.company}</strong> • 📍 ${job.location} ${job.remote_flag ? '• 🏠 Remote' : ''}</p>
                <p><strong>💰 ${job.salary_range}</strong> • 📅 ${job.posted_date}</p>
                <p>${job.description}</p>
                
                <div class="match-details">
                    <div>
                        <strong>✅ Matched Skills:</strong>
                        <div class="matched-skills">
                            ${job.analysis.matchedRequired.map(skill => 
                                `<span class="matched-skill">${skill}</span>`
                            ).join('')}
                            ${job.analysis.matchedPreferred.map(skill => 
                                `<span class="matched-skill">${skill} (preferred)</span>`
                            ).join('')}
                        </div>
                    </div>
                    
                    ${job.analysis.missingRequired.length > 0 ? `
                        <div>
                            <strong>❌ Missing Skills:</strong>
                            <div class="missing-skills">
                                ${job.analysis.missingRequired.map(skill => 
                                    `<span class="missing-skill">${skill}</span>`
                                ).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="rationale">
                        <strong>💡 Analysis:</strong> ${job.analysis.rationale}
                    </div>
                    
                    <div style="margin-top: 1rem;">
                        <a href="https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(job.title)}&location=${encodeURIComponent(job.location)}" 
                           target="_blank" class="btn btn-secondary" style="margin-right: 0.5rem;">
                           Apply on LinkedIn
                        </a>
                        <a href="https://www.naukri.com/jobs-in-${job.location.toLowerCase().replace(/[^a-z]/g, '-')}-for-${job.title.toLowerCase().replace(/[^a-z]/g, '-')}" 
                           target="_blank" class="btn btn-secondary">
                           View on Naukri
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    displaySuggestions() {
        const container = document.getElementById('suggestionsList');
        const suggestions = this.generateSuggestions();
        
        container.innerHTML = suggestions.map(suggestion => `
            <div class="suggestion-card">
                <h4>${suggestion.title}</h4>
                <p>${suggestion.description}</p>
                ${suggestion.action ? `<button class="btn btn-primary btn-sm">${suggestion.action}</button>` : ''}
            </div>
        `).join('');
    }

    generateSuggestions() {
        const suggestions = [];
        const skills = this.skillsData;
        const topJobs = this.jobMatches.slice(0, 3);
        
        // Skill-based suggestions
        if (skills.gaps.includes('No cloud platform experience')) {
            suggestions.push({
                title: '☁️ Learn Cloud Technologies',
                description: 'Cloud skills are in high demand. Consider learning AWS, Azure, or Google Cloud Platform.',
                action: 'Find Cloud Courses'
            });
        }
        
        if (skills.gaps.includes('No frontend framework experience')) {
            suggestions.push({
                title: '🎨 Master Frontend Frameworks',
                description: 'React, Angular, or Vue.js skills will significantly boost your job prospects.',
                action: 'Explore Frontend Courses'
            });
        }
        
        // Job-specific suggestions
        const commonMissingSkills = {};
        topJobs.forEach(job => {
            job.analysis.missingRequired.forEach(skill => {
                commonMissingSkills[skill] = (commonMissingSkills[skill] || 0) + 1;
            });
        });
        
        const topMissingSkills = Object.entries(commonMissingSkills)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3);
        
        if (topMissingSkills.length > 0) {
            suggestions.push({
                title: '🎯 Priority Skills to Learn',
                description: `Focus on: ${topMissingSkills.map(([skill]) => skill).join(', ')}. These appear in your top job matches.`,
                action: 'Create Learning Plan'
            });
        }
        
        // Resume improvement suggestions
        if (this.resumeData.contact.email === 'Not found') {
            suggestions.push({
                title: '📧 Add Contact Information',
                description: 'Make sure your email and phone number are clearly visible on your resume.'
            });
        }
        
        if (this.resumeData.projects.length === 0) {
            suggestions.push({
                title: '🚀 Showcase Your Projects',
                description: 'Add a projects section to demonstrate your practical skills and experience.'
            });
        }
        
        return suggestions;
    }

    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        
        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(`${tabName}Tab`).style.display = 'block';
    }

    showLoading(message) {
        document.getElementById('resumeAnalysis').innerHTML = `
            <div class="loading">
                <div style="font-size: 2rem; margin-bottom: 1rem;">⏳</div>
                <p>${message}</p>
            </div>
        `;
        document.getElementById('resumeAnalysis').style.display = 'block';
    }

    showError(message) {
        document.getElementById('resumeAnalysis').innerHTML = `
            <div class="error">
                <div style="font-size: 2rem; margin-bottom: 1rem;">❌</div>
                <p>${message}</p>
            </div>
        `;
        document.getElementById('resumeAnalysis').style.display = 'block';
    }

    downloadReport() {
        const report = this.generateDetailedReport();
        const blob = new Blob([report], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `resume-analysis-${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    generateDetailedReport() {
        const topMatches = this.jobMatches.slice(0, 5);
        
        return `
COMPREHENSIVE RESUME ANALYSIS REPORT
Generated by ChooseWise AI Resume Analyzer
Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}

===========================================
CANDIDATE PROFILE
===========================================
Name: ${this.resumeData.contact.name}
Email: ${this.resumeData.contact.email}
Phone: ${this.resumeData.contact.phone}
Experience Level: ${this.skillsData.experienceLevel}

===========================================
SKILLS ANALYSIS
===========================================
Total Skills Identified: ${this.skillsData.totalSkills}

Programming Languages: ${this.resumeData.skills.programming.join(', ') || 'None detected'}
Frontend Technologies: ${this.resumeData.skills.frontend.join(', ') || 'None detected'}
Backend Technologies: ${this.resumeData.skills.backend.join(', ') || 'None detected'}
Databases: ${this.resumeData.skills.database.join(', ') || 'None detected'}
Cloud Platforms: ${this.resumeData.skills.cloud.join(', ') || 'None detected'}
Development Tools: ${this.resumeData.skills.tools.join(', ') || 'None detected'}

STRENGTHS:
${this.skillsData.strengths.map(s => `• ${s}`).join('\n')}

AREAS FOR IMPROVEMENT:
${this.skillsData.gaps.map(g => `• ${g}`).join('\n')}

===========================================
TOP JOB MATCHES
===========================================
${topMatches.map((job, index) => `
${index + 1}. ${job.title} at ${job.company}
   Match Score: ${job.matchScore}%
   Location: ${job.location}
   Salary: ${job.salary_range}
   
   Matched Skills: ${job.analysis.matchedRequired.join(', ')}
   Missing Skills: ${job.analysis.missingRequired.join(', ') || 'None'}
   
   Analysis: ${job.analysis.rationale}
   
   Apply: https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(job.title)}
`).join('\n')}

===========================================
RECOMMENDATIONS
===========================================
${this.generateSuggestions().map(s => `• ${s.title}: ${s.description}`).join('\n')}

===========================================
NEXT STEPS
===========================================
1. Focus on learning the most commonly required missing skills
2. Update your resume to highlight relevant projects
3. Apply to jobs with 70%+ match scores
4. Consider taking courses to fill skill gaps
5. Network with professionals in your target companies

This analysis is AI-generated and should be used as guidance.
Consider consulting with career professionals for personalized advice.
        `.trim();
    }

    saveResumeData() {
        const data = {
            resumeData: this.resumeData,
            skillsData: this.skillsData,
            jobMatches: this.jobMatches.slice(0, 10),
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('choosewise_resume_analysis', JSON.stringify(data));
        alert('Resume analysis saved successfully!');
    }

    getSampleJobsData() {
        return [
            {
                id: "J-101",
                title: "Senior Frontend Engineer",
                company: "TechCorp",
                location: "Bengaluru, India",
                remote_flag: true,
                seniority: "senior",
                salary_range: "₹15-25 LPA",
                required_skills: [
                    {skill: "React", weight: 1.0, mandatory: true},
                    {skill: "JavaScript", weight: 0.9, mandatory: true},
                    {skill: "TypeScript", weight: 0.8, mandatory: false}
                ],
                preferred_skills: [
                    {skill: "Next.js", weight: 0.6},
                    {skill: "GraphQL", weight: 0.5}
                ],
                description: "Build responsive UIs with React. Lead frontend architecture decisions.",
                posted_date: "2024-01-15",
                category: "frontend"
            },
            {
                id: "J-102",
                title: "Backend Engineer",
                company: "StartupXYZ",
                location: "Mumbai, India",
                remote_flag: false,
                seniority: "mid",
                salary_range: "₹12-18 LPA",
                required_skills: [
                    {skill: "Node.js", weight: 1.0, mandatory: true},
                    {skill: "Express", weight: 0.8, mandatory: true}
                ],
                preferred_skills: [
                    {skill: "Docker", weight: 0.6},
                    {skill: "AWS", weight: 0.5}
                ],
                description: "Design and implement scalable backend services.",
                posted_date: "2024-01-14",
                category: "backend"
            },
            {
                id: "J-103",
                title: "Full Stack Developer",
                company: "InnovateLabs",
                location: "Remote",
                remote_flag: true,
                seniority: "mid",
                salary_range: "₹14-20 LPA",
                required_skills: [
                    {skill: "React", weight: 0.9, mandatory: true},
                    {skill: "Node.js", weight: 0.9, mandatory: true},
                    {skill: "JavaScript", weight: 0.8, mandatory: true}
                ],
                preferred_skills: [
                    {skill: "Python", weight: 0.6},
                    {skill: "PostgreSQL", weight: 0.5}
                ],
                description: "End-to-end development of web applications.",
                posted_date: "2024-01-13",
                category: "fullstack"
            }
        ];
    }

    testSampleResume() {
        this.showLoading('Processing sample resume...');
        setTimeout(() => {
            const sampleText = this.getSampleResumeText();
            this.processResumeText(sampleText);
        }, 1000);
    }

    editResumeData() {
        // This would open a modal or form to edit the parsed data
        alert('Edit functionality would open a form to modify the parsed resume data.');
    }
}

// Initialize the advanced resume parser
document.addEventListener('DOMContentLoaded', () => {
    new AdvancedResumeParser();
});