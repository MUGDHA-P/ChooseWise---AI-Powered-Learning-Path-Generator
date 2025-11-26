const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));

// Basic contact form endpoint (without email)
app.use(express.json());

app.post('/api/contact', (req, res) => {
  console.log('Contact form submitted:', req.body);
  res.json({ 
    success: true, 
    message: 'Message received! (Email functionality disabled in demo mode)' 
  });
});

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`📧 Contact form: http://localhost:${PORT}/contact.html`);
});