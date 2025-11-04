const express = require('express');
const axios = require('axios');
const User = require('../models/User');
const router = express.Router();

// Course API integrations
const courseProviders = {
  coursera: {
    baseUrl: 'https://api.coursera.org/api/courses.v1',
    apiKey: process.env.COURSERA_API_KEY
  },
  udemy: {
    baseUrl: 'https://www.udemy.com/api-2.0',
    apiKey: process.env.UDEMY_API_KEY
  }
};

// Get personalized course recommendations
router.get('/recommendations/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const { skills, interests, experience } = user.profile;
    
    // AI-powered course matching
    const recommendations = [];
    
    // Fetch from multiple providers
    for (const skill of skills) {
      try {
        // Coursera integration
        const courseraResponse = await axios.get(`${courseProviders.coursera.baseUrl}/courses`, {
          params: { q: skill, limit: 5 },
          headers: { 'Authorization': `Bearer ${courseProviders.coursera.apiKey}` }
        });
        
        courseraResponse.data.elements?.forEach(course => {
          recommendations.push({
            id: course.id,
            title: course.name,
            provider: 'Coursera',
            url: `https://www.coursera.org/learn/${course.slug}`,
            rating: course.averageRating || 4.0,
            difficulty: course.difficultyLevel,
            duration: course.workload,
            relevanceScore: calculateRelevance(course, user.profile)
          });
        });
      } catch (error) {
        console.log('Coursera API error:', error.message);
      }
    }

    // Sort by relevance score
    recommendations.sort((a, b) => b.relevanceScore - a.relevanceScore);
    
    // Update user recommendations
    await User.findByIdAndUpdate(req.params.userId, {
      'recommendations.courses': recommendations.slice(0, 10)
    });

    res.json({ success: true, recommendations: recommendations.slice(0, 10) });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get recommendations' });
  }
});

// Search courses across platforms
router.get('/search', async (req, res) => {
  try {
    const { query, provider, level } = req.query;
    const results = [];

    // Search multiple providers
    const providers = provider ? [provider] : ['coursera', 'udemy', 'edx'];
    
    for (const p of providers) {
      try {
        let apiResults = [];
        
        if (p === 'coursera' && courseProviders.coursera.apiKey) {
          const response = await axios.get(`${courseProviders.coursera.baseUrl}/courses`, {
            params: { q: query, limit: 10 },
            headers: { 'Authorization': `Bearer ${courseProviders.coursera.apiKey}` }
          });
          apiResults = response.data.elements || [];
        }
        
        // Transform API results to standard format
        apiResults.forEach(course => {
          results.push({
            id: course.id,
            title: course.name || course.title,
            provider: p.charAt(0).toUpperCase() + p.slice(1),
            description: course.description,
            rating: course.averageRating || course.rating || 4.0,
            students: course.enrollmentCount || course.num_subscribers,
            duration: course.workload || course.content_info,
            level: course.difficultyLevel || level,
            url: generateCourseUrl(course, p),
            image: course.photoUrl || course.image_480x270
          });
        });
      } catch (error) {
        console.log(`${p} API error:`, error.message);
      }
    }

    res.json({ success: true, results, total: results.length });
  } catch (error) {
    res.status(500).json({ error: 'Search failed' });
  }
});

// Track course enrollment
router.post('/enroll', async (req, res) => {
  try {
    const { userId, courseId, provider } = req.body;
    
    await User.findByIdAndUpdate(userId, {
      $push: {
        'progress.completedCourses': {
          courseId,
          provider,
          enrolledAt: new Date(),
          status: 'enrolled'
        }
      }
    });

    res.json({ success: true, message: 'Enrollment tracked' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to track enrollment' });
  }
});

// Helper functions
function calculateRelevance(course, profile) {
  let score = 0;
  
  // Match skills
  profile.skills.forEach(skill => {
    if (course.name?.toLowerCase().includes(skill.toLowerCase())) {
      score += 30;
    }
  });
  
  // Match interests
  profile.interests.forEach(interest => {
    if (course.description?.toLowerCase().includes(interest.toLowerCase())) {
      score += 20;
    }
  });
  
  // Experience level matching
  if (course.difficultyLevel === profile.experience) {
    score += 25;
  }
  
  // Rating bonus
  score += (course.averageRating || 4.0) * 5;
  
  return Math.min(score, 100);
}

function generateCourseUrl(course, provider) {
  const baseUrls = {
    coursera: 'https://www.coursera.org/learn/',
    udemy: 'https://www.udemy.com/course/',
    edx: 'https://www.edx.org/course/'
  };
  
  return `${baseUrls[provider]}${course.slug || course.id}`;
}

module.exports = router;