const express = require('express');
const path = require('path');
const app = express();

// Simple in-memory user storage for testing
const users = [];

// Middleware
app.use(express.json());
app.use(express.static('.'));

// Test endpoint
app.get('/api/auth/test', (req, res) => {
  res.json({ message: 'Auth API is working!' });
});

// Register endpoint
app.post('/api/auth/register', (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Create user
    const user = {
      id: Date.now().toString(),
      name,
      email,
      password, // In real app, hash this
      createdAt: new Date()
    };
    
    users.push(user);
    
    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login endpoint
app.post('/api/auth/login', (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Serve static files
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`ChooseWise simple server running on http://localhost:${PORT}`);
  console.log('Account creation is now working!');
});