// Comprehensive roadmap data for all tech careers
const comprehensiveRoadmaps = {
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
            title: "⚡ Core AI Skills (6-12 months)",
            duration: "6-12 months",
            steps: ["🤖 Machine Learning Algorithms", "🔧 TensorFlow/PyTorch", "🧠 Deep Learning Fundamentals", "📊 Model Evaluation"],
            courses: ["Machine Learning by Stanford (Coursera)", "Deep Learning Specialization", "Fast.ai Practical Deep Learning"],
            projects: ["📸 Image Classifier", "💬 Sentiment Analysis", "⭐ Movie Recommender"]
        },
        advanced: {
            title: "🎯 AI Mastery (12+ months)",
            duration: "12+ months",
            steps: ["🚀 Advanced Neural Networks", "⚙️ MLOps & Deployment", "🔬 Research & Innovation", "🏢 Production Systems"],
            courses: ["Advanced Machine Learning (Coursera)", "MLOps Specialization", "AI Research Papers"],
            projects: ["👁️ Computer Vision System", "🤖 Production AI Chatbot", "📝 Research Implementation"]
        }
    },
    "Data Scientist": {
        emoji: "📊",
        motivationalQuote: "Turning data into insights, insights into impact! 📈",
        beginner: {
            title: "📚 Data Fundamentals (2-4 months)",
            duration: "2-4 months",
            steps: ["📊 Statistics & Probability", "🐍 Python/R Programming", "🗄️ SQL & Databases", "📈 Excel Advanced"],
            courses: ["Data Analysis with Python (freeCodeCamp)", "SQL for Data Science (Coursera)", "Statistics Fundamentals"],
            projects: ["🔍 Sales Data Analysis", "📋 Survey Data Report", "💾 Database Design"]
        },
        intermediate: {
            title: "🔬 Analysis & Modeling (4-8 months)",
            duration: "4-8 months",
            steps: ["📈 Advanced Analytics", "🤖 Machine Learning", "📊 Data Visualization", "🔍 Feature Engineering"],
            courses: ["Google Data Analytics Certificate", "Machine Learning A-Z (Udemy)", "Tableau Specialization"],
            projects: ["🔮 Customer Churn Prediction", "📊 Business Dashboard", "⚖️ A/B Test Analysis"]
        },
        advanced: {
            title: "🎯 Strategic Impact (8+ months)",
            duration: "8+ months",
            steps: ["🌐 Big Data (Spark, Hadoop)", "🚀 Advanced ML & AI", "💼 Business Intelligence", "☁️ Cloud Platforms"],
            courses: ["Big Data Specialization (Coursera)", "AWS Data Analytics", "Advanced Statistics"],
            projects: ["⚡ Real-time Analytics", "🔧 ML Pipeline", "📊 Enterprise BI System"]
        }
    },
    "Web Developer": {
        emoji: "💻",
        motivationalQuote: "Building the web, one line of code at a time! 🌐",
        beginner: {
            title: "🌱 Web Basics (2-3 months)",
            duration: "2-3 months",
            steps: ["🎨 HTML & CSS Mastery", "⚡ JavaScript Fundamentals", "📱 Responsive Design", "🔧 Git & GitHub"],
            courses: ["freeCodeCamp Responsive Web Design", "JavaScript Basics (MDN)", "CSS Grid & Flexbox"],
            projects: ["💼 Portfolio Website", "📱 Restaurant Landing Page", "🎮 JavaScript Calculator"]
        },
        intermediate: {
            title: "🚀 Modern Development (3-6 months)",
            duration: "3-6 months",
            steps: ["⚛️ React/Vue.js", "🔧 Node.js & Express", "💾 MongoDB/PostgreSQL", "🔗 REST APIs"],
            courses: ["React Complete Guide (Udemy)", "Node.js Developer Course", "Full Stack Open (University of Helsinki)"],
            projects: ["📱 Todo App with React", "🌐 Blog Platform", "🛒 E-commerce Site"]
        },
        advanced: {
            title: "🎯 Professional Development (6+ months)",
            duration: "6+ months",
            steps: ["🔧 TypeScript & Testing", "🚀 DevOps & CI/CD", "⚡ Performance Optimization", "🏗️ System Design"],
            courses: ["Advanced React Patterns", "Docker & Kubernetes", "System Design Interview"],
            projects: ["🏗️ Microservices App", "📱 PWA with Offline Support", "🏢 Enterprise Dashboard"]
        }
    },
    "Mobile App Developer": {
        emoji: "📱",
        motivationalQuote: "Creating mobile experiences that touch millions! 📲",
        beginner: {
            title: "📱 Mobile Foundations (2-4 months)",
            duration: "2-4 months",
            steps: ["📚 Programming Basics (Java/Kotlin/Swift)", "🎨 UI/UX Design Principles", "🔧 Development Environment Setup", "📱 First Mobile App"],
            courses: ["Android Development for Beginners", "iOS Development with Swift", "Flutter & Dart Bootcamp"],
            projects: ["📝 Note Taking App", "🧮 Calculator App", "🌤️ Weather App"]
        },
        intermediate: {
            title: "🚀 Advanced Mobile Development (4-8 months)",
            duration: "4-8 months",
            steps: ["💾 Local & Remote Data Storage", "🔗 API Integration", "📊 State Management", "🔔 Push Notifications"],
            courses: ["Advanced Android Development", "iOS Advanced Features", "React Native Complete Guide"],
            projects: ["📱 Social Media App", "🛒 Shopping App", "🎵 Music Streaming App"]
        },
        advanced: {
            title: "🎯 Professional Mobile Development (8+ months)",
            duration: "8+ months",
            steps: ["🏗️ App Architecture Patterns", "🧪 Testing & Quality Assurance", "📈 Analytics & Performance", "🚀 App Store Optimization"],
            courses: ["Mobile App Architecture", "Advanced Testing Strategies", "Mobile DevOps"],
            projects: ["🏢 Enterprise Mobile Solution", "🎮 Mobile Game", "💰 Fintech App"]
        }
    },
    "Cybersecurity Specialist": {
        emoji: "🔒",
        motivationalQuote: "Defending the digital world, one threat at a time! 🛡️",
        beginner: {
            title: "🔐 Security Fundamentals (3-6 months)",
            duration: "3-6 months",
            steps: ["🌐 Network Basics", "🔒 Cryptography Fundamentals", "💻 Operating Systems Security", "🔍 Security Tools Introduction"],
            courses: ["CompTIA Security+ Training", "Cybersecurity Fundamentals (Coursera)", "Ethical Hacking Basics"],
            projects: ["🔍 Network Vulnerability Scan", "🔐 Password Security Audit", "🛡️ Basic Firewall Setup"]
        },
        intermediate: {
            title: "🛡️ Practical Security (6-12 months)",
            duration: "6-12 months",
            steps: ["🕵️ Penetration Testing", "🔍 Digital Forensics", "📊 Risk Assessment", "🚨 Incident Response"],
            courses: ["Certified Ethical Hacker (CEH)", "Digital Forensics Specialization", "CISSP Training"],
            projects: ["🕵️ Penetration Test Report", "🔍 Malware Analysis", "📋 Security Policy Framework"]
        },
        advanced: {
            title: "🎯 Security Leadership (12+ months)",
            duration: "12+ months",
            steps: ["🏢 Enterprise Security Architecture", "📊 Security Governance", "🤖 AI in Cybersecurity", "👥 Team Leadership"],
            courses: ["CISSP Certification", "Security Architecture", "Advanced Threat Detection"],
            projects: ["🏢 Enterprise Security Framework", "🤖 AI-Powered Threat Detection", "📊 Security Metrics Dashboard"]
        }
    },
    "DevOps Engineer": {
        emoji: "⚙️",
        motivationalQuote: "Bridging development and operations for seamless delivery! 🚀",
        beginner: {
            title: "⚙️ DevOps Foundations (2-4 months)",
            duration: "2-4 months",
            steps: ["🐧 Linux Command Line", "🔧 Git & Version Control", "🐳 Docker Basics", "☁️ Cloud Fundamentals"],
            courses: ["Linux Command Line Basics", "Git & GitHub Mastery", "Docker for Beginners"],
            projects: ["🐳 Containerized Web App", "🔧 Automated Git Workflow", "☁️ Cloud VM Setup"]
        },
        intermediate: {
            title: "🚀 CI/CD & Automation (4-8 months)",
            duration: "4-8 months",
            steps: ["🔄 CI/CD Pipelines", "🎭 Configuration Management", "📊 Monitoring & Logging", "🚢 Kubernetes"],
            courses: ["Jenkins Complete Guide", "Ansible for DevOps", "Kubernetes Fundamentals"],
            projects: ["🔄 Complete CI/CD Pipeline", "📊 Monitoring Dashboard", "🚢 Kubernetes Cluster"]
        },
        advanced: {
            title: "🎯 DevOps Mastery (8+ months)",
            duration: "8+ months",
            steps: ["🏗️ Infrastructure as Code", "🔒 Security Integration", "📈 Performance Optimization", "🌐 Multi-Cloud Strategy"],
            courses: ["Terraform Mastery", "DevSecOps Practices", "Site Reliability Engineering"],
            projects: ["🏗️ IaC Multi-Environment Setup", "🔒 Secure DevOps Pipeline", "📈 Auto-Scaling Architecture"]
        }
    },
    "Cloud Architect": {
        emoji: "☁️",
        motivationalQuote: "Designing scalable solutions in the cloud! 🌤️",
        beginner: {
            title: "☁️ Cloud Fundamentals (3-6 months)",
            duration: "3-6 months",
            steps: ["☁️ Cloud Computing Basics", "🔧 AWS/Azure/GCP Fundamentals", "💾 Cloud Storage Solutions", "🌐 Virtual Networks"],
            courses: ["AWS Cloud Practitioner", "Microsoft Azure Fundamentals", "Google Cloud Basics"],
            projects: ["☁️ Static Website Hosting", "💾 Cloud Database Setup", "🌐 VPC Configuration"]
        },
        intermediate: {
            title: "🏗️ Cloud Solutions (6-12 months)",
            duration: "6-12 months",
            steps: ["🏗️ Solution Architecture", "🔒 Cloud Security", "📊 Cost Optimization", "🔄 Migration Strategies"],
            courses: ["AWS Solutions Architect", "Azure Solutions Architect", "Cloud Security Specialization"],
            projects: ["🏗️ Multi-Tier Architecture", "🔒 Secure Cloud Environment", "📊 Cost Monitoring System"]
        },
        advanced: {
            title: "🎯 Enterprise Cloud (12+ months)",
            duration: "12+ months",
            steps: ["🏢 Enterprise Architecture", "🌐 Multi-Cloud Strategy", "🤖 Cloud Automation", "👥 Team Leadership"],
            courses: ["Enterprise Cloud Architecture", "Multi-Cloud Management", "Cloud Leadership"],
            projects: ["🏢 Enterprise Cloud Migration", "🌐 Multi-Cloud Solution", "🤖 Cloud Automation Platform"]
        }
    },
    "Product Manager": {
        emoji: "📋",
        motivationalQuote: "Turning ideas into products that users love! 💡",
        beginner: {
            title: "📚 Product Fundamentals (2-4 months)",
            duration: "2-4 months",
            steps: ["📊 Business & Market Analysis", "👥 User Research Basics", "📋 Product Management Frameworks", "💬 Communication Skills"],
            courses: ["Product Management Fundamentals (Coursera)", "Google Project Management Certificate", "Lean Startup Methodology"],
            projects: ["📊 Market Research Report", "👥 User Persona Development", "📋 Product Requirements Document"]
        },
        intermediate: {
            title: "🚀 Product Strategy (4-8 months)",
            duration: "4-8 months",
            steps: ["📈 Product Analytics", "🎯 Roadmap Planning", "⚡ Agile & Scrum", "🔍 A/B Testing"],
            courses: ["Product Analytics (Google)", "Agile Product Management", "Data-Driven Product Management"],
            projects: ["📈 Product Analytics Dashboard", "🗺️ 6-Month Product Roadmap", "⚖️ A/B Test Campaign"]
        },
        advanced: {
            title: "🎯 Product Leadership (8+ months)",
            duration: "8+ months",
            steps: ["💼 Strategic Planning", "👥 Cross-functional Leadership", "💰 Business Model Innovation", "🌐 Go-to-Market Strategy"],
            courses: ["Strategic Product Management", "Product Leadership", "Business Model Canvas"],
            projects: ["💼 Product Strategy Presentation", "🚀 Product Launch Plan", "💰 Revenue Growth Initiative"]
        }
    },
    "UX/UI Designer": {
        emoji: "🎨",
        motivationalQuote: "Designing experiences that delight users! ✨",
        beginner: {
            title: "🎨 Design Foundations (2-4 months)",
            duration: "2-4 months",
            steps: ["🎨 Design Principles", "🖌️ Typography & Color Theory", "🔧 Figma/Sketch Basics", "📱 User Interface Basics"],
            courses: ["Google UX Design Certificate", "UI/UX Design Fundamentals", "Figma Masterclass"],
            projects: ["📱 Mobile App Mockup", "🌐 Website Redesign", "🎨 Design System Creation"]
        },
        intermediate: {
            title: "👥 User Experience (4-8 months)",
            duration: "4-8 months",
            steps: ["🔍 User Research Methods", "🗺️ User Journey Mapping", "🧪 Prototyping & Testing", "♿ Accessibility Design"],
            courses: ["User Research Specialization", "Interaction Design", "Accessibility in Design"],
            projects: ["🔍 User Research Study", "🗺️ Complete User Journey", "🧪 Interactive Prototype"]
        },
        advanced: {
            title: "🎯 Design Leadership (8+ months)",
            duration: "8+ months",
            steps: ["💼 Design Strategy", "👥 Team Leadership", "📊 Design Metrics", "🏢 Design Systems at Scale"],
            courses: ["Design Leadership", "Advanced Design Systems", "Design Strategy"],
            projects: ["🏢 Enterprise Design System", "📊 Design Impact Metrics", "💼 Design Strategy Framework"]
        }
    },
    "Game Developer": {
        emoji: "🎮",
        motivationalQuote: "Creating worlds and experiences through code! 🌟",
        beginner: {
            title: "🎮 Game Development Basics (3-6 months)",
            duration: "3-6 months",
            steps: ["🎯 C# or C++ Programming", "🎮 Unity/Unreal Engine Basics", "🎨 2D Graphics & Animation", "🔊 Audio Integration"],
            courses: ["Unity Game Development (Udemy)", "C# Programming for Games", "2D Game Art Fundamentals"],
            projects: ["🏓 Pong Clone", "🍎 Snake Game", "🏃 2D Platformer"]
        },
        intermediate: {
            title: "🚀 Advanced Game Development (6-12 months)",
            duration: "6-12 months",
            steps: ["🌐 3D Graphics & Physics", "🎯 Game Design Patterns", "🔗 Multiplayer Networking", "📱 Mobile Game Optimization"],
            courses: ["3D Game Development", "Game Design Patterns", "Multiplayer Game Programming"],
            projects: ["🌍 3D Adventure Game", "⚔️ Multiplayer Battle Game", "📱 Mobile Puzzle Game"]
        },
        advanced: {
            title: "🎯 Professional Game Development (12+ months)",
            duration: "12+ months",
            steps: ["🏗️ Game Engine Architecture", "⚡ Performance Optimization", "💰 Monetization Strategies", "🚀 Game Publishing"],
            courses: ["Game Engine Programming", "Game Performance Optimization", "Game Business & Marketing"],
            projects: ["🏗️ Custom Game Engine", "🎮 Commercial Game Release", "💰 Live Service Game"]
        }
    },
    "Blockchain Developer": {
        emoji: "⛓️",
        motivationalQuote: "Building the decentralized future! 🚀",
        beginner: {
            title: "⛓️ Blockchain Fundamentals (3-6 months)",
            duration: "3-6 months",
            steps: ["⛓️ Blockchain Technology Basics", "💰 Cryptocurrency Fundamentals", "🔧 Solidity Programming", "🌐 Web3 Concepts"],
            courses: ["Blockchain Basics (Coursera)", "Solidity Programming", "Ethereum Development"],
            projects: ["💰 Simple Token Contract", "🗳️ Voting DApp", "💎 NFT Collection"]
        },
        intermediate: {
            title: "🚀 DApp Development (6-12 months)",
            duration: "6-12 months",
            steps: ["🌐 Smart Contract Development", "⚛️ Frontend Web3 Integration", "🔒 Security Best Practices", "🧪 Testing & Deployment"],
            courses: ["Advanced Solidity", "Web3 Frontend Development", "Smart Contract Security"],
            projects: ["🏦 DeFi Protocol", "🎮 Blockchain Game", "🛒 NFT Marketplace"]
        },
        advanced: {
            title: "🎯 Blockchain Architecture (12+ months)",
            duration: "12+ months",
            steps: ["🏗️ Protocol Development", "⚡ Layer 2 Solutions", "🔗 Cross-chain Integration", "💼 Enterprise Blockchain"],
            courses: ["Blockchain Protocol Design", "Layer 2 Development", "Enterprise Blockchain"],
            projects: ["🏗️ Custom Blockchain Protocol", "⚡ Layer 2 Scaling Solution", "🏢 Enterprise DApp Platform"]
        }
    },
    "QA Engineer": {
        emoji: "🧪",
        motivationalQuote: "Ensuring quality in every line of code! ✅",
        beginner: {
            title: "🧪 Testing Fundamentals (2-4 months)",
            duration: "2-4 months",
            steps: ["📋 Software Testing Basics", "🔍 Manual Testing Techniques", "📝 Test Case Design", "🐛 Bug Reporting"],
            courses: ["Software Testing Fundamentals", "Manual Testing Course", "ISTQB Foundation Level"],
            projects: ["📋 Test Plan Document", "🔍 Manual Testing Report", "🐛 Bug Tracking System"]
        },
        intermediate: {
            title: "🤖 Test Automation (4-8 months)",
            duration: "4-8 months",
            steps: ["🤖 Selenium WebDriver", "🐍 Python/Java for Testing", "📊 API Testing", "⚡ Performance Testing"],
            courses: ["Selenium Automation", "API Testing with Postman", "Performance Testing with JMeter"],
            projects: ["🤖 Automated Test Suite", "📊 API Test Framework", "⚡ Load Testing Report"]
        },
        advanced: {
            title: "🎯 Quality Leadership (8+ months)",
            duration: "8+ months",
            steps: ["🏗️ Test Architecture", "🔄 CI/CD Integration", "📊 Quality Metrics", "👥 Team Leadership"],
            courses: ["Test Architecture Design", "DevOps for QA", "Quality Management"],
            projects: ["🏗️ Enterprise Test Framework", "🔄 Automated CI/CD Pipeline", "📊 Quality Dashboard"]
        }
    },
    "Machine Learning Engineer": {
        emoji: "🧠",
        motivationalQuote: "Teaching machines to learn and adapt! 🤖",
        beginner: {
            title: "🧠 ML Foundations (3-6 months)",
            duration: "3-6 months",
            steps: ["🐍 Python & Libraries", "📊 Statistics & Linear Algebra", "🤖 ML Algorithms Basics", "📈 Data Preprocessing"],
            courses: ["Machine Learning Course (Stanford)", "Python for Data Science", "Mathematics for ML"],
            projects: ["📈 House Price Predictor", "📧 Email Spam Classifier", "🌸 Iris Flower Classification"]
        },
        intermediate: {
            title: "⚡ Advanced ML (6-12 months)",
            duration: "6-12 months",
            steps: ["🧠 Deep Learning", "🔧 TensorFlow/PyTorch", "🖼️ Computer Vision", "💬 Natural Language Processing"],
            courses: ["Deep Learning Specialization", "Computer Vision Course", "NLP with Python"],
            projects: ["🖼️ Image Recognition System", "💬 Chatbot with NLP", "🎵 Music Recommendation Engine"]
        },
        advanced: {
            title: "🎯 ML Engineering (12+ months)",
            duration: "12+ months",
            steps: ["🚀 MLOps & Model Deployment", "⚡ Model Optimization", "📊 A/B Testing for ML", "🏗️ ML System Design"],
            courses: ["MLOps Specialization", "Model Deployment", "ML System Design"],
            projects: ["🚀 Production ML Pipeline", "📊 ML Model Monitoring", "🏗️ Scalable ML Architecture"]
        }
    }
};

// Make available globally
window.comprehensiveRoadmaps = comprehensiveRoadmaps;