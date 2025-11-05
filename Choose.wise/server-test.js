const express = require('express');
const app = express();
const users = [];

app.use(express.json());
app.use(express.static(__dirname));

app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body;
  
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'User already exists' });
  }
  
  const user = { id: Date.now().toString(), name, email };
  users.push({ ...user, password });
  
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

app.listen(3000, () => {
  console.log('\n=================================');
  console.log('✅ ChooseWise Server Started!');
  console.log('🌐 Open your browser and go to:');
  console.log('   http://localhost:3000');
  console.log('=================================\n');
});