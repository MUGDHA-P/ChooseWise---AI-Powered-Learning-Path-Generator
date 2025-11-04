const express = require('express');
const router = express.Router();

const jobsData = [
  {
    id: 'google-swe',
    title: 'Senior Software Engineer',
    company: 'Google',
    location: 'Bangalore, India',
    salary: '₹25-40 LPA',
    type: 'Full-time',
    skills: ['JavaScript', 'Python', 'System Design'],
    posted: '2 days ago'
  },
  {
    id: 'microsoft-ds',
    title: 'Data Scientist',
    company: 'Microsoft',
    location: 'Hyderabad, India',
    salary: '₹20-35 LPA',
    type: 'Full-time',
    skills: ['Python', 'Machine Learning', 'Azure'],
    posted: '1 week ago'
  }
];

// Get all jobs
router.get('/', (req, res) => {
  res.json({ success: true, jobs: jobsData });
});

// Get job recommendations for user
router.get('/recommendations/:userId', async (req, res) => {
  try {
    // AI-powered job matching would go here
    const recommendations = jobsData.map(job => ({
      ...job,
      matchScore: Math.floor(Math.random() * 40) + 60 // Mock score 60-100
    }));
    
    res.json({ success: true, recommendations });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get recommendations' });
  }
});

module.exports = router;