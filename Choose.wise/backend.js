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