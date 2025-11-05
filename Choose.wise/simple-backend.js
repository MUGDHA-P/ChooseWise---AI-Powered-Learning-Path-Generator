const express = require('express');
const path = require('path');
const app = express();

const users = [];

app.use(express.json());
app.use(express.static('.'));

app.get('/api/auth/test', (req, res) => {
  res.json({ message: 'Auth API is working!' });
});

app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body;
  
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'User already exists' });
  }
  
  const user = { id: Date.now().toString(), name, email };
  users.push({ ...user, password });
  
  console.log('✅ User registered:', user);
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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log('✅ Simple server running on http://localhost:' + PORT);
  console.log('✅ Account creation ready!');
});