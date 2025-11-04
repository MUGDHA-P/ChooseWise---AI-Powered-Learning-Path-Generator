const express = require('express');
const OpenAI = require('openai');
const User = require('../models/User');
const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// AI Career Recommendation Engine
router.post('/recommend-career', async (req, res) => {
  try {
    const { userId, skills, interests, experience } = req.body;
    
    const prompt = `Based on the following profile:
    Skills: ${skills.join(', ')}
    Interests: ${interests.join(', ')}
    Experience Level: ${experience}
    
    Recommend the top 3 tech career paths with match scores (0-100) and detailed reasons.
    Format as JSON: [{"career": "name", "score": number, "reasons": ["reason1", "reason2"]}]`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 500
    });

    const recommendations = JSON.parse(completion.choices[0].message.content);
    
    // Save recommendations to user profile
    if (userId) {
      await User.findByIdAndUpdate(userId, {
        'recommendations.careers': recommendations,
        lastActive: new Date()
      });
    }

    res.json({ success: true, recommendations });
  } catch (error) {
    res.status(500).json({ error: 'AI recommendation failed' });
  }
});

// AI-Powered Skill Assessment
router.post('/assess-skills', async (req, res) => {
  try {
    const { userId, answers } = req.body;
    
    const prompt = `Evaluate these skill assessment answers and provide scores (1-10):
    ${JSON.stringify(answers)}
    
    Return JSON: {"skills": [{"name": "skill", "level": number, "feedback": "text"}]}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 400
    });

    const assessment = JSON.parse(completion.choices[0].message.content);
    
    if (userId) {
      const skillAssessments = assessment.skills.map(skill => ({
        skill: skill.name,
        level: skill.level,
        assessedAt: new Date()
      }));
      
      await User.findByIdAndUpdate(userId, {
        $push: { 'progress.skillAssessments': { $each: skillAssessments } }
      });
    }

    res.json({ success: true, assessment });
  } catch (error) {
    res.status(500).json({ error: 'Skill assessment failed' });
  }
});

// AI Chatbot Enhanced
router.post('/chat', async (req, res) => {
  try {
    const { message, userId } = req.body;
    
    let userContext = '';
    if (userId) {
      const user = await User.findById(userId);
      userContext = `User Profile: ${JSON.stringify(user.profile)}`;
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: `You are ChooseWise AI, a career guidance assistant for tech students. ${userContext}` },
        { role: "user", content: message }
      ],
      max_tokens: 300
    });

    res.json({ 
      success: true, 
      response: completion.choices[0].message.content 
    });
  } catch (error) {
    res.status(500).json({ error: 'Chat failed' });
  }
});

module.exports = router;