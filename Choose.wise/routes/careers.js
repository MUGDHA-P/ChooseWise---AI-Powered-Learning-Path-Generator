const express = require('express');
const router = express.Router();

const careersData = [
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    description: 'Design and develop artificial intelligence systems and machine learning models.',
    skills: ['Python', 'TensorFlow', 'Machine Learning', 'Deep Learning'],
    salary: { min: 800000, max: 2500000 },
    growth: 'High',
    companies: ['Google', 'Microsoft', 'OpenAI', 'NVIDIA']
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Analyze complex data to help organizations make informed decisions.',
    skills: ['Python', 'R', 'Statistics', 'SQL', 'Visualization'],
    salary: { min: 600000, max: 2000000 },
    growth: 'Excellent',
    companies: ['Netflix', 'Uber', 'Airbnb', 'Amazon']
  }
];

// Get all careers
router.get('/', (req, res) => {
  res.json({ success: true, careers: careersData });
});

// Get career by ID
router.get('/:id', (req, res) => {
  const career = careersData.find(c => c.id === req.params.id);
  if (!career) {
    return res.status(404).json({ error: 'Career not found' });
  }
  res.json({ success: true, career });
});

module.exports = router;