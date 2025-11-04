# ChooseWise - Setup & Run Guide

## 🚀 Quick Start (Frontend Only)

### Option 1: Simple Static Website
```bash
# Navigate to project folder
cd "c:\Users\Shree\Desktop\choose wise"

# Open in browser (double-click)
index.html
```

## 🔧 Full Stack Setup (Backend + AI Features)

### Prerequisites
```bash
# Install Node.js (v16+)
https://nodejs.org/download/

# Create Supabase Account & Project
https://supabase.com/dashboard

# Get OpenAI API Key
https://platform.openai.com/api-keys
```

### Step 1: Install Dependencies
```bash
# Open terminal in project folder
cd "c:\Users\Shree\Desktop\choose wise"

# Install packages
npm install
```

### Step 2: Environment Setup
```bash
# Copy environment file
copy .env.example .env

# Edit .env file with your API keys:
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_key_here
```

### Step 3: Setup Database
```bash
# Run SQL schema in Supabase Dashboard
# Go to SQL Editor and run: database/schema.sql
```

### Step 4: Run Server
```bash
# Start development server
npm run dev

# Or production mode
npm start
```

### Step 5: Access Application
```
Frontend: http://localhost:5000
API: http://localhost:5000/api
```

## 🎯 Demo Mode (No Setup Required)

### Current Features Working:
- ✅ Responsive design
- ✅ Theme toggle (dark/light)
- ✅ Career exploration
- ✅ Learning roadmap
- ✅ Course recommendations
- ✅ Job listings
- ✅ Contact form
- ✅ Basic chatbot

### Backend Features (Requires Setup):
- 🔧 AI-powered recommendations
- 🔧 User authentication
- 🔧 Progress tracking
- 🔧 Course API integration
- 🔧 Job portal APIs

## 🛠️ Troubleshooting

### Common Issues:
```bash
# Port already in use
netstat -ano | findstr :5000
taskkill /PID <process_id> /F

# MongoDB connection error
net start MongoDB

# Missing dependencies
npm install --force
```

## 📱 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## 🌐 Deployment Options

### Heroku
```bash
git init
git add .
git commit -m "Initial commit"
heroku create choosewise-app
git push heroku main
```

### Netlify (Frontend Only)
```bash
# Drag and drop folder to netlify.com
# Or connect GitHub repository
```

### AWS/Azure
```bash
# Use provided deployment scripts
# Configure environment variables
# Set up database connection
```