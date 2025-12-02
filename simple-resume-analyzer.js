// Simple Resume Analyzer - Working Version
document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('resumeFile');
    
    if (!uploadArea || !fileInput) return;

    // Sample jobs data
    const jobs = [
        {
            title: "Frontend Developer",
            company: "TechCorp",
            location: "Bangalore",
            salary: "₹12-18 LPA",
            skills: ["React", "JavaScript", "HTML", "CSS"],
            match: 85
        },
        {
            title: "Backend Developer", 
            company: "StartupXYZ",
            location: "Mumbai",
            salary: "₹10-15 LPA",
            skills: ["Node.js", "Python", "MongoDB"],
            match: 72
        },
        {
            title: "Full Stack Developer",
            company: "InnovateLabs", 
            location: "Remote",
            salary: "₹15-22 LPA",
            skills: ["React", "Node.js", "JavaScript"],
            match: 90
        }
    ];

    // File upload handlers
    uploadArea.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFile);

    function handleFile(e) {
        const file = e.target.files[0];
        if (file) {
            // Show analysis section immediately
            const analysisDiv = document.getElementById('resumeAnalysis');
            analysisDiv.style.display = 'block';
            
            // Show loading
            analysisDiv.innerHTML = '<div class="loading">📄 Processing your resume...</div>';
            
            // Process after delay
            setTimeout(() => {
                processResume(file);
            }, 1000);
        }
    }

    async function processResume(file) {
        try {
            let text = '';
            
            if (file.type === 'text/plain') {
                text = await readTextFile(file);
            } else if (file.type === 'application/pdf') {
                text = await extractPDFText(file);
            } else {
                // Fallback for unsupported files
                showTextInput(file.name);
                return;
            }
            
            if (text.trim()) {
                const analysis = analyzeText(text);
                showResults(analysis);
            } else {
                showTextInput(file.name);
            }
        } catch (error) {
            console.error('Error processing file:', error);
            showTextInput(file.name);
        }
    }
    
    function readTextFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => resolve(e.target.result);
            reader.onerror = reject;
            reader.readAsText(file);
        });
    }
    
    async function extractPDFText(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = async function(e) {
                try {
                    // Load PDF.js if not already loaded
                    if (typeof pdfjsLib === 'undefined') {
                        const script = document.createElement('script');
                        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
                        document.head.appendChild(script);
                        await new Promise(resolve => script.onload = resolve);
                        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
                    }
                    
                    const typedarray = new Uint8Array(e.target.result);
                    const pdf = await pdfjsLib.getDocument(typedarray).promise;
                    let fullText = '';
                    
                    for (let i = 1; i <= pdf.numPages; i++) {
                        const page = await pdf.getPage(i);
                        const textContent = await page.getTextContent();
                        const pageText = textContent.items.map(item => item.str).join(' ');
                        fullText += pageText + '\n';
                    }
                    
                    resolve(fullText);
                } catch (error) {
                    reject(error);
                }
            };
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    }

    function showTextInput(fileName) {
        const analysisDiv = document.getElementById('resumeAnalysis');
        analysisDiv.innerHTML = `
            <div style="padding: 2rem; text-align: center;">
                <h3>⚠️ Could not extract text from ${fileName}</h3>
                <p>File type not supported or text extraction failed. Please paste your resume text below:</p>
                <textarea id="resumeTextInput" placeholder="Paste your resume content here..." 
                         style="width: 100%; height: 200px; padding: 1rem; border: 1px solid #ddd; border-radius: 0.5rem; margin: 1rem 0;"></textarea>
                <div>
                    <button class="btn btn-primary" onclick="analyzeInputText()">Analyze Resume</button>
                    <button class="btn btn-secondary" onclick="useSampleData()">Use Sample Data</button>
                </div>
            </div>
        `;
    }

    // Make functions global so they can be called from HTML
    window.analyzeInputText = function() {
        const text = document.getElementById('resumeTextInput').value.trim();
        if (text) {
            const analysis = analyzeText(text);
            showResults(analysis);
        } else {
            alert('Please paste your resume text first.');
        }
    };

    window.useSampleData = function() {
        const sampleText = `John Smith
Software Developer
Email: john.smith@email.com | Phone: (555) 123-4567

EXPERIENCE
Software Developer at TechCorp (2020-2024)
• Developed web applications using JavaScript, React, and Node.js
• Collaborated with cross-functional teams
• Implemented best practices and coding standards

SKILLS
Programming: JavaScript, Python, Java, React, Node.js, HTML, CSS
Databases: MySQL, MongoDB
Tools: Git, npm`;
        
        const analysis = analyzeText(sampleText);
        showResults(analysis);
    };

    function analyzeText(text) {
        const name = extractName(text);
        const email = extractEmail(text);
        const phone = extractPhone(text);
        const skills = extractSkills(text);
        const experience = extractExperience(text);
        
        return {
            name: name || 'Not found',
            email: email || 'Not found', 
            phone: phone || 'Not found',
            skills: skills,
            totalSkills: skills.length,
            experienceLevel: determineLevel(experience, skills.length)
        };
    }

    function extractName(text) {
        const lines = text.split('\n').filter(line => line.trim());
        // Look for name patterns - usually first non-empty line or line with common name indicators
        for (let line of lines.slice(0, 5)) {
            line = line.trim();
            // Skip lines that look like headers, emails, phones
            if (!line.includes('@') && !line.match(/\d{3}/) && !line.toLowerCase().includes('resume') && line.length > 2) {
                return line;
            }
        }
        return lines[0] ? lines[0].trim() : 'Not found';
    }

    function extractEmail(text) {
        const emailMatches = text.match(/[\w\.-]+@[\w\.-]+\.\w+/g);
        return emailMatches ? emailMatches[0] : null;
    }

    function extractPhone(text) {
        // Look for various phone patterns
        const phonePatterns = [
            /\+?\d{1,3}[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4}/,
            /\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4}/,
            /\d{10}/
        ];
        
        for (let pattern of phonePatterns) {
            const match = text.match(pattern);
            if (match) return match[0];
        }
        return null;
    }

    function extractSkills(text) {
        const skillKeywords = [
            'javascript', 'js', 'python', 'java', 'react', 'reactjs', 'node.js', 'nodejs', 'html', 'html5', 'css', 'css3',
            'angular', 'vue', 'vuejs', 'php', 'c++', 'cpp', 'c#', 'csharp', 'sql', 'mongodb', 'mysql',
            'aws', 'docker', 'kubernetes', 'git', 'github', 'typescript', 'ts', 'express', 'expressjs',
            'django', 'flask', 'bootstrap', 'jquery', 'postgresql', 'postgres', 'redis', 'sass', 'scss',
            'webpack', 'npm', 'yarn', 'firebase', 'graphql', 'rest', 'api', 'json', 'xml',
            'spring', 'springboot', 'hibernate', 'maven', 'gradle', 'jenkins', 'ci/cd', 'devops',
            'linux', 'ubuntu', 'windows', 'macos', 'bash', 'shell', 'powershell'
        ];
        
        const lowerText = text.toLowerCase();
        const foundSkills = [];
        
        skillKeywords.forEach(skill => {
            // Check for exact matches and word boundaries
            const regex = new RegExp(`\\b${skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
            if (regex.test(text)) {
                // Normalize skill names
                let normalizedSkill = skill;
                if (skill === 'js') normalizedSkill = 'JavaScript';
                if (skill === 'reactjs') normalizedSkill = 'React';
                if (skill === 'nodejs') normalizedSkill = 'Node.js';
                if (skill === 'html5') normalizedSkill = 'HTML5';
                if (skill === 'css3') normalizedSkill = 'CSS3';
                if (skill === 'ts') normalizedSkill = 'TypeScript';
                if (skill === 'cpp') normalizedSkill = 'C++';
                if (skill === 'csharp') normalizedSkill = 'C#';
                
                if (!foundSkills.includes(normalizedSkill)) {
                    foundSkills.push(normalizedSkill);
                }
            }
        });
        
        return foundSkills;
    }

    function extractExperience(text) {
        const expKeywords = ['experience', 'work', 'employment', 'developer', 'engineer'];
        const lines = text.split('\n');
        let count = 0;
        
        lines.forEach(line => {
            if (expKeywords.some(keyword => line.toLowerCase().includes(keyword))) {
                count++;
            }
        });
        
        return count;
    }

    function determineLevel(expCount, skillCount) {
        if (expCount >= 3 && skillCount >= 8) return 'Senior';
        if (expCount >= 2 && skillCount >= 5) return 'Mid-Level';
        if (expCount >= 1 && skillCount >= 3) return 'Junior';
        return 'Entry-Level';
    }

    function showResults(analysis) {
        const analysisDiv = document.getElementById('resumeAnalysis');
        analysisDiv.innerHTML = `
            <div class="analysis-tabs">
                <button class="tab-btn active" data-tab="parsed">📋 Parsed Resume</button>
                <button class="tab-btn" data-tab="skills">🔧 Skills Analysis</button>
                <button class="tab-btn" data-tab="matches">🎯 Job Matches</button>
                <button class="tab-btn" data-tab="suggestions">💡 Improvements</button>
            </div>
            
            <div class="tab-content" id="parsedTab">
                <h3>Structured Resume Data</h3>
                <div class="parsed-resume">
                    <div class="resume-section">
                        <h4>📞 Contact Information</h4>
                        <p><strong>Name:</strong> ${analysis.name}</p>
                        <p><strong>Email:</strong> ${analysis.email}</p>
                        <p><strong>Phone:</strong> ${analysis.phone}</p>
                    </div>
                    <div class="resume-section">
                        <h4>🔧 Skills Detected (${analysis.totalSkills})</h4>
                        ${analysis.skills.length > 0 ? 
                            analysis.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('') :
                            '<p>No technical skills detected.</p>'
                        }
                    </div>
                </div>
            </div>
            
            <div class="tab-content" id="skillsTab" style="display: none;">
                <h3>Skills & Experience Analysis</h3>
                <div class="skills-breakdown">
                    <div class="skill-category">
                        <h4>📊 Skills Overview</h4>
                        <div class="skill-item">
                            <span>Total Skills</span>
                            <span class="skill-level">${analysis.totalSkills}</span>
                        </div>
                        <div class="skill-item">
                            <span>Experience Level</span>
                            <span class="skill-level">${analysis.experienceLevel}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="tab-content" id="matchesTab" style="display: none;">
                <h3>Ranked Job Opportunities</h3>
                <div class="job-matches">
                    ${jobs.map(job => `
                        <div class="job-match-card">
                            <div class="match-score">${job.match}%</div>
                            <h4>${job.title}</h4>
                            <p><strong>🏢 ${job.company}</strong> • 📍 ${job.location}</p>
                            <p><strong>💰 ${job.salary}</strong></p>
                            
                            <div class="match-details">
                                <div>
                                    <strong>✅ Required Skills:</strong>
                                    <div class="matched-skills">
                                        ${job.skills.map(skill => `<span class="matched-skill">${skill}</span>`).join('')}
                                    </div>
                                </div>
                                
                                <div style="margin-top: 1rem;">
                                    <a href="https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(job.title)}" 
                                       target="_blank" class="btn btn-secondary" style="margin-right: 0.5rem;">
                                       Apply on LinkedIn
                                    </a>
                                    <a href="https://www.naukri.com/jobs" 
                                       target="_blank" class="btn btn-secondary">
                                       View on Naukri
                                    </a>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="tab-content" id="suggestionsTab" style="display: none;">
                <h3>Resume Improvement Suggestions</h3>
                <div class="suggestions-list">
                    <div class="suggestion-card">
                        <h4>🎯 Learn TypeScript</h4>
                        <p>TypeScript is in high demand and will boost your job prospects.</p>
                    </div>
                    <div class="suggestion-card">
                        <h4>☁️ Add Cloud Skills</h4>
                        <p>Consider learning AWS or Azure for better opportunities.</p>
                    </div>
                </div>
            </div>
            
            <div class="analysis-actions">
                <button class="btn btn-secondary" onclick="downloadReport()">📊 Download Report</button>
            </div>
        `;

        // Add tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const tab = this.dataset.tab;
                
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.style.display = 'none';
                });
                document.getElementById(tab + 'Tab').style.display = 'block';
            });
        });
    }

    window.downloadReport = function() {
        const report = `RESUME ANALYSIS REPORT
Generated by ChooseWise
Date: ${new Date().toLocaleDateString()}

ANALYSIS COMPLETE
Your resume has been processed successfully.

TOP JOB MATCHES:
1. Full Stack Developer at InnovateLabs - 90% match
2. Frontend Developer at TechCorp - 85% match  
3. Backend Developer at StartupXYZ - 72% match

RECOMMENDATIONS:
- Learn TypeScript for better opportunities
- Add cloud skills (AWS/Azure)
- Consider advanced React frameworks`;
        
        const blob = new Blob([report], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume-analysis.txt';
        a.click();
        URL.revokeObjectURL(url);
    };
});