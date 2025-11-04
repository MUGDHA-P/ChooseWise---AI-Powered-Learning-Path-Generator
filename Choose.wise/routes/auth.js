const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Test endpoint
router.get('/test', (req, res) => {
  res.json({ message: 'Auth API is working!' });
});

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const result = await User.create({ name, email, password });
    res.json({ 
      success: true, 
      user: { 
        id: result.user.id, 
        name, 
        email,
        access_token: result.user.access_token
      } 
    });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Registration failed' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const result = await User.signIn(email, password);
    const userProfile = await User.findById(result.user.id);
    
    res.json({ 
      success: true, 
      user: { 
        id: result.user.id, 
        name: userProfile?.name || result.user.user_metadata?.name,
        email: result.user.email,
        access_token: result.session.access_token
      } 
    });
  } catch (error) {
    res.status(401).json({ error: error.message || 'Invalid credentials' });
  }
});

module.exports = router;