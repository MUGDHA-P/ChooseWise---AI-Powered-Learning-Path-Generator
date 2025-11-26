const express = require('express');
const app = express();
const PORT = 3001;

// Middleware
app.use(express.static('.'));
app.use(express.json());

// Simple login confirmation endpoint (without email)
app.post('/api/login-confirmation', (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.json({ success: false, error: 'Email is required' });
  }
  
  console.log(`Login confirmation requested for: ${email}`);
  
  res.json({
    success: true,
    message: 'Login confirmation sent successfully! (Demo mode - no actual email sent)',
    email: email,
    timestamp: new Date().toLocaleString()
  });
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  console.log('Contact form:', req.body);
  res.json({ success: true, message: 'Message received! (Demo mode)' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`🔐 Login page: http://localhost:${PORT}/login.html`);
  console.log(`📧 Contact page: http://localhost:${PORT}/contact.html`);
  console.log(`🏠 Home page: http://localhost:${PORT}/index.html`);
});