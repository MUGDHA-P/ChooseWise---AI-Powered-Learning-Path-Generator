const express = require('express');
const path = require('path');
require('dotenv').config();
const emailService = require('./services/emailService');
const app = express();

const users = [];

app.use(express.json());
app.use(express.static('.'));

app.get('/api/auth/test', (req, res) => {
  res.json({ message: 'Auth API is working!' });
});

app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'User already exists' });
  }
  
  const user = { id: Date.now().toString(), name, email };
  users.push({ ...user, password });
  
  await emailService.sendProgressNotification(email, 'registration', { name });
  
  res.json({ success: true, user });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  res.json({ success: true, user: { id: user.id, name: user.name, email: user.email } });
});

// Progress tracking endpoints
app.post('/api/progress/assessment-start', async (req, res) => {
  const { email } = req.body;
  await emailService.sendProgressNotification(email, 'assessment_started');
  res.json({ success: true });
});

app.post('/api/progress/assessment-complete', async (req, res) => {
  const { email, score } = req.body;
  await emailService.sendProgressNotification(email, 'assessment_completed', { score });
  res.json({ success: true });
});

app.post('/api/progress/roadmap-generated', async (req, res) => {
  const { email, career } = req.body;
  await emailService.sendProgressNotification(email, 'roadmap_generated', { career });
  res.json({ success: true });
});

app.post('/api/progress/course-enrolled', async (req, res) => {
  const { email, courseName } = req.body;
  await emailService.sendProgressNotification(email, 'course_enrolled', { courseName });
  res.json({ success: true });
});

app.post('/api/progress/job-applied', async (req, res) => {
  const { email, jobTitle } = req.body;
  await emailService.sendProgressNotification(email, 'job_applied', { jobTitle });
  res.json({ success: true });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.error('❌ Error starting server:', err);
    console.log('\n💡 Try these solutions:');
    console.log('1. Close any other applications using port', PORT);
    console.log('2. Run as administrator');
    console.log('3. Try a different port: set PORT=3000 && node backend.js');
    process.exit(1);
  }
  console.log('✅ ChooseWise server running on http://localhost:' + PORT);
  console.log('✅ Ready for account creation!');
  console.log('✅ Open your browser and test the signup form');
  console.log('\n🔗 Direct link: http://localhost:' + PORT);
});