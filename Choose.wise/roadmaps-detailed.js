// Detailed career roadmaps with beginner, intermediate, and pro levels
const detailedCareerRoadmaps = {
    "AI Engineer": {
        emoji: "🤖",
        motivationalQuote: "Building the future, one algorithm at a time! 🚀",
        beginner: {
            title: "🌱 Foundation Building (3-6 months)",
            steps: [
                "🐍 Master Python Programming (variables, functions, OOP)",
                "📊 Learn Mathematics (Linear Algebra, Calculus, Statistics)",
                "🏗️ Understand Data Structures & Algorithms",
                "📚 Study Machine Learning Basics",
                "🔧 Get familiar with NumPy, Pandas, Matplotlib"
            ],
            projects: [
                "📈 Linear Regression from Scratch",
                "📊 Data Analysis with Pandas",
                "🎯 Simple Classification Model",
                "📉 Data Visualization Dashboard"
            ]
        },
        intermediate: {
            title: "⚡ Core AI Skills (6-12 months)",
            steps: [
                "🤖 Master Supervised & Unsupervised Learning",
                "🧠 Deep Learning with TensorFlow/PyTorch",
                "🔍 Computer Vision Fundamentals",
                "💬 Natural Language Processing Basics",
                "📊 Model Evaluation & Validation Techniques"
            ],
            projects: [
                "📸 Image Classification CNN",
                "💬 Sentiment Analysis NLP Model",
                "⭐ Movie Recommendation System",
                "🏠 House Price Prediction Model"
            ]
        },
        advanced: {
            title: "🎯 AI Mastery (12+ months)",
            steps: [
                "🚀 Advanced Neural Networks (GANs, Transformers)",
                "⚙️ MLOps & Model Deployment (Docker, Kubernetes)",
                "🔬 Research & Paper Implementation",
                "☁️ Cloud AI Services (AWS, GCP, Azure)",
                "🏢 Production ML Systems & Monitoring"
            ],
            projects: [
                "👁️ Real-time Object Detection System",
                "🤖 Conversational AI Chatbot",
                "🎨 GAN for Image Generation",
                "📝 Research Paper Implementation"
            ]
        }
    },
    "Data Scientist": {
        emoji: "📊",
        motivationalQuote: "Turning data into insights, insights into impact! 📈",
        beginner: {
            title: "📚 Data Fundamentals (3-6 months)",
            steps: [
                "📊 Statistics & Probability Theory",
                "🐍 Python Programming (Pandas, NumPy)",
                "🗄️ SQL & Database Management",
                "📈 Data Visualization (Matplotlib, Seaborn)",
                "🔍 Exploratory Data Analysis Techniques"
            ],
            projects: [
                "🔍 Customer Data Analysis",
                "📋 Sales Performance Report",
                "💾 Database Design & Queries",
                "📊 Interactive Data Dashboard"
            ]
        },
        intermediate: {
            title: "🔬 Analysis & Modeling (6-12 months)",
            steps: [
                "📈 Advanced Statistical Methods",
                "🤖 Machine Learning Algorithms",
                "📊 Advanced Visualization (Plotly, Tableau)",
                "⚖️ A/B Testing & Experimental Design",
                "🔮 Predictive Modeling Techniques"
            ],
            projects: [
                "🔮 Customer Churn Prediction",
                "📊 Business Intelligence Dashboard",
                "⚖️ A/B Test Analysis Framework",
                "📈 Time Series Forecasting Model"
            ]
        },
        advanced: {
            title: "🎯 Strategic Impact (12+ months)",
            steps: [
                "🌐 Big Data Technologies (Spark, Hadoop)",
                "🚀 Advanced ML & Deep Learning",
                "💼 Business Strategy & Domain Expertise",
                "☁️ Cloud Data Platforms",
                "👥 Team Leadership & Communication"
            ],
            projects: [
                "⚡ Real-time Analytics Pipeline",
                "🔧 End-to-End ML Pipeline",
                "📊 Executive Decision Support System",
                "🏢 Enterprise Data Strategy"
            ]
        }
    },
    "Web Developer": {
        emoji: "💻",
        motivationalQuote: "Building the web, one line of code at a time! 🌐",
        beginner: {
            title: "🌱 Web Basics (2-4 months)",
            steps: [
                "🎨 HTML5 & Semantic Markup",
                "🎨 CSS3 & Flexbox/Grid Layout",
                "⚡ JavaScript Fundamentals (ES6+)",
                "📱 Responsive Design Principles",
                "🔧 Version Control with Git"
            ],
            projects: [
                "💼 Personal Portfolio Website",
                "📱 Responsive Landing Page",
                "🎮 Interactive JavaScript Game",
                "📋 To-Do List Application"
            ]
        },
        intermediate: {
            title: "🚀 Modern Development (4-8 months)",
            steps: [
                "⚛️ Frontend Framework (React/Vue/Angular)",
                "🔧 Backend Development (Node.js/Express)",
                "💾 Database Integration (MongoDB/PostgreSQL)",
                "🔗 RESTful API Development",
                "🧪 Testing & Debugging"
            ],
            projects: [
                "📱 Single Page Application (SPA)",
                "🌐 Full-Stack CRUD Application",
                "🔗 RESTful API with Authentication",
                "🛒 E-commerce Website"
            ]
        },
        advanced: {
            title: "🎯 Professional Development (8+ months)",
            steps: [
                "🏗️ Microservices Architecture",
                "🚀 DevOps & CI/CD Pipelines",
                "⚡ Performance Optimization",
                "☁️ Cloud Deployment (AWS/Azure)",
                "🔒 Security Best Practices"
            ],
            projects: [
                "🏗️ Scalable Microservices System",
                "📱 Progressive Web App (PWA)",
                "🏢 Enterprise-Level Application",
                "⚡ High-Performance Web Platform"
            ]
        }
    },
    "Cybersecurity Specialist": {
        emoji: "🔒",
        motivationalQuote: "Defending the digital world, one threat at a time! 🛡️",
        beginner: {
            title: "🌱 Security Fundamentals (3-6 months)",
            steps: [
                "🌐 Network Fundamentals & Protocols",
                "🔒 Information Security Principles",
                "💻 Operating Systems Security (Windows/Linux)",
                "🔐 Cryptography Basics",
                "📋 Risk Assessment Fundamentals"
            ],
            projects: [
                "🔍 Network Vulnerability Scan",
                "🔐 Password Security Audit",
                "📊 Risk Assessment Report",
                "🛡️ Basic Firewall Configuration"
            ]
        },
        intermediate: {
            title: "⚡ Security Operations (6-12 months)",
            steps: [
                "🕵️ Ethical Hacking & Penetration Testing",
                "🚨 Incident Response & Forensics",
                "🔍 Security Monitoring & SIEM",
                "📜 Compliance & Governance",
                "🛡️ Advanced Threat Detection"
            ],
            projects: [
                "🕵️ Penetration Testing Lab",
                "🚨 Incident Response Playbook",
                "🔍 SIEM Dashboard Setup",
                "📜 Compliance Audit Framework"
            ]
        },
        advanced: {
            title: "🎯 Security Leadership (12+ months)",
            steps: [
                "🏢 Enterprise Security Architecture",
                "☁️ Cloud Security (AWS/Azure/GCP)",
                "🤖 AI/ML for Cybersecurity",
                "👥 Security Team Management",
                "📈 Strategic Security Planning"
            ],
            projects: [
                "🏢 Enterprise Security Framework",
                "☁️ Cloud Security Assessment",
                "🤖 AI-Powered Threat Detection",
                "📈 Security Metrics Dashboard"
            ]
        }
    },
    "Cloud Architect": {
        emoji: "☁️",
        motivationalQuote: "Architecting the future in the clouds! 🌤️",
        beginner: {
            title: "🌱 Cloud Fundamentals (3-6 months)",
            steps: [
                "☁️ Cloud Computing Concepts",
                "🏗️ AWS/Azure/GCP Basics",
                "💻 Linux System Administration",
                "🌐 Networking & DNS",
                "🔧 Infrastructure as Code Basics"
            ],
            projects: [
                "☁️ Deploy Web App on AWS/Azure",
                "💾 Set up Cloud Database",
                "🌐 Configure Load Balancer",
                "🔧 Basic Terraform Scripts"
            ]
        },
        intermediate: {
            title: "⚡ Cloud Operations (6-12 months)",
            steps: [
                "🐳 Containerization (Docker/Kubernetes)",
                "🚀 CI/CD Pipeline Implementation",
                "📊 Monitoring & Logging Solutions",
                "🔒 Cloud Security Best Practices",
                "💰 Cost Optimization Strategies"
            ],
            projects: [
                "🐳 Kubernetes Cluster Setup",
                "🚀 Complete CI/CD Pipeline",
                "📊 Cloud Monitoring Dashboard",
                "💰 Cost Optimization Report"
            ]
        },
        advanced: {
            title: "🎯 Architecture Mastery (12+ months)",
            steps: [
                "🏗️ Multi-Cloud Architecture Design",
                "🔄 Disaster Recovery & High Availability",
                "📈 Auto-scaling & Performance Tuning",
                "🏢 Enterprise Cloud Migration",
                "👥 Cloud Team Leadership"
            ],
            projects: [
                "🏗️ Multi-Cloud Architecture",
                "🔄 Disaster Recovery System",
                "📈 Auto-scaling Infrastructure",
                "🏢 Enterprise Migration Plan"
            ]
        }
    },
    "Blockchain Developer": {
        emoji: "⛓️",
        motivationalQuote: "Decentralizing the future, block by block! 🔗",
        beginner: {
            title: "🌱 Blockchain Basics (3-6 months)",
            steps: [
                "⛓️ Blockchain Technology Fundamentals",
                "💰 Cryptocurrency & Bitcoin Basics",
                "🔐 Cryptography & Hash Functions",
                "💻 Programming Fundamentals (JavaScript/Python)",
                "🌐 Web3 Concepts"
            ],
            projects: [
                "⛓️ Simple Blockchain Implementation",
                "💰 Cryptocurrency Tracker",
                "🔐 Hash Function Demo",
                "🌐 Web3 Wallet Connection"
            ]
        },
        intermediate: {
            title: "⚡ Smart Contract Development (6-12 months)",
            steps: [
                "📝 Solidity Programming Language",
                "🔧 Ethereum Development Environment",
                "📋 Smart Contract Design Patterns",
                "🧪 Testing & Debugging Contracts",
                "🌐 DApp Frontend Development"
            ],
            projects: [
                "📝 ERC-20 Token Contract",
                "🏪 Decentralized Marketplace",
                "🗳️ Voting DApp",
                "💸 DeFi Lending Protocol"
            ]
        },
        advanced: {
            title: "🎯 Blockchain Architecture (12+ months)",
            steps: [
                "🏗️ Blockchain Architecture Design",
                "⚡ Layer 2 Solutions & Scaling",
                "🔗 Cross-chain Interoperability",
                "🔒 Security Auditing",
                "🏢 Enterprise Blockchain Solutions"
            ],
            projects: [
                "🏗️ Custom Blockchain Network",
                "⚡ Layer 2 Scaling Solution",
                "🔗 Cross-chain Bridge",
                "🏢 Enterprise Blockchain Platform"
            ]
        }
    }
};

// Replace the existing careerRoadmaps with detailed version
if (typeof careerRoadmaps !== 'undefined') {
    Object.assign(careerRoadmaps, detailedCareerRoadmaps);
}