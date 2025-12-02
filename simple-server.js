const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session');

const app = express();

// Middleware
app.use(express.static(__dirname));
app.use(express.json());
app.use(session({
    secret: 'choosewise-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }
}));

// In-memory user storage
const users = new Map();

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Auth endpoints
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    
    if (users.has(email)) {
        return res.status(409).json({ message: 'Account already exists. Please login.' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    users.set(email, { email, hashedPassword, createdAt: new Date().toISOString() });
    
    res.status(201).json({ message: 'Account created. Please login on your next visit.' });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    
    if (!users.has(email)) {
        return res.status(404).json({ message: 'you don\'t have an account please sign up' });
    }
    
    const user = users.get(email);
    const validPassword = await bcrypt.compare(password, user.hashedPassword);
    
    if (!validPassword) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    req.session.userId = email;
    req.session.isAuthenticated = true;
    
    res.status(200).json({ message: 'Logged in successfully' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 ChooseWise running at: http://localhost:${PORT}`);
    console.log(`📱 Homepage: http://localhost:${PORT}/index.html`);
    console.log(`🔐 Auth: http://localhost:${PORT}/auth.html`);
    console.log(`📊 Dashboard: http://localhost:${PORT}/owner-dashboard.html`);
    console.log(`🔑 Dashboard Password: choosewise2025`);
});