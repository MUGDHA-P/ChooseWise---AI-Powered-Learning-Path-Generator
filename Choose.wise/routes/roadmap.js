const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Dynamic Roadmap Generation
const roadmapTemplates = {
  'web-developer': {
    beginner: [
      { id: 'html-css', title: 'HTML & CSS Fundamentals', duration: '2 weeks', projects: ['Personal Portfolio', 'Landing Page'] },
      { id: 'javascript', title: 'JavaScript Basics', duration: '3 weeks', projects: ['Calculator', 'To-Do App'] },
      { id: 'responsive', title: 'Responsive Design', duration: '1 week', projects: ['Mobile-First Website'] }
    ],
    intermediate: [
      { id: 'react', title: 'React Framework', duration: '4 weeks', projects: ['E-commerce Site', 'Blog Platform'] },
      { id: 'nodejs', title: 'Node.js & Express', duration: '3 weeks', projects: ['REST API', 'Authentication System'] },
      { id: 'database', title: 'Database Integration', duration: '2 weeks', projects: ['Full-Stack App'] }
    ],
    advanced: [
      { id: 'deployment', title: 'Cloud Deployment', duration: '2 weeks', projects: ['AWS/Heroku Deploy'] },
      { id: 'testing', title: 'Testing & CI/CD', duration: '2 weeks', projects: ['Automated Testing Suite'] },
      { id: 'performance', title: 'Performance Optimization', duration: '1 week', projects: ['Optimized Production App'] }
    ]
  },
  'data-scientist': {
    beginner: [
      { id: 'python', title: 'Python Programming', duration: '3 weeks', projects: ['Data Analysis Scripts'] },
      { id: 'statistics', title: 'Statistics & Math', duration: '4 weeks', projects: ['Statistical Analysis Report'] },
      { id: 'pandas', title: 'Pandas & NumPy', duration: '2 weeks', projects: ['Data Cleaning Project'] }
    ],
    intermediate: [
      { id: 'ml-basics', title: 'Machine Learning Basics', duration: '4 weeks', projects: ['Prediction Model'] },
      { id: 'visualization', title: 'Data Visualization', duration: '2 weeks', projects: ['Interactive Dashboard'] },
      { id: 'sql', title: 'SQL & Databases', duration: '2 weeks', projects: ['Database Analysis'] }
    ],
    advanced: [
      { id: 'deep-learning', title: 'Deep Learning', duration: '6 weeks', projects: ['Neural Network Model'] },
      { id: 'big-data', title: 'Big Data Tools', duration: '3 weeks', projects: ['Spark/Hadoop Project'] },
      { id: 'deployment-ml', title: 'ML Model Deployment', duration: '2 weeks', projects: ['Production ML API'] }
    ]
  }
};

// Get personalized roadmap
router.get('/generate/:careerPath', async (req, res) => {
  try {
    const { careerPath } = req.params;
    const { userId } = req.query;
    
    let roadmap = roadmapTemplates[careerPath];
    if (!roadmap) {
      return res.status(404).json({ error: 'Career path not found' });
    }

    // Personalize based on user progress
    if (userId) {
      const user = await User.findById(userId);
      const userProgress = user.progress.roadmapProgress.find(p => p.roadmapId === careerPath);
      
      if (userProgress) {
        // Mark completed steps
        Object.keys(roadmap).forEach(level => {
          roadmap[level].forEach(step => {
            step.completed = userProgress.completedSteps.includes(step.id);
            step.current = userProgress.currentStep === step.id;
          });
        });
      }
    }

    res.json({ success: true, roadmap, careerPath });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate roadmap' });
  }
});

// Update progress
router.post('/progress', async (req, res) => {
  try {
    const { userId, roadmapId, stepId, action } = req.body;
    
    const user = await User.findById(userId);
    let roadmapProgress = user.progress.roadmapProgress.find(p => p.roadmapId === roadmapId);
    
    if (!roadmapProgress) {
      roadmapProgress = { roadmapId, completedSteps: [], currentStep: stepId };
      user.progress.roadmapProgress.push(roadmapProgress);
    }

    if (action === 'complete') {
      if (!roadmapProgress.completedSteps.includes(stepId)) {
        roadmapProgress.completedSteps.push(stepId);
      }
    } else if (action === 'start') {
      roadmapProgress.currentStep = stepId;
    }

    await user.save();
    res.json({ success: true, progress: roadmapProgress });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update progress' });
  }
});

// Get milestone achievements
router.get('/milestones/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const milestones = [];
    
    user.progress.roadmapProgress.forEach(roadmap => {
      const completedCount = roadmap.completedSteps.length;
      if (completedCount >= 3) milestones.push({ type: 'beginner', roadmap: roadmap.roadmapId });
      if (completedCount >= 6) milestones.push({ type: 'intermediate', roadmap: roadmap.roadmapId });
      if (completedCount >= 9) milestones.push({ type: 'advanced', roadmap: roadmap.roadmapId });
    });

    res.json({ success: true, milestones });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get milestones' });
  }
});

module.exports = router;