const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(session({
    secret: 'choosewise-secret-key', // Change in production
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false, // Set to true in production with HTTPS
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// In-memory storage (Replace with database in production)
const users = new Map(); // email -> { email, hashedPassword, createdAt }

// POST /signup
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    
    // Validate input
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    
    // Check if user exists
    if (users.has(email)) {
        return res.status(409).json({ message: 'Account already exists. Please login.' });
    }
    
    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    users.set(email, {
        email,
        hashedPassword,
        createdAt: new Date().toISOString()
    });
    
    // Return success without creating session
    res.status(201).json({ message: 'Account created. Please login on your next visit.' });
});

// POST /login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    // Validate input
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    
    // Check if user exists
    if (!users.has(email)) {
        return res.status(404).json({ message: 'you don\'t have an account please sign up' });
    }
    
    const user = users.get(email);
    
    // Verify password
    const validPassword = await bcrypt.compare(password, user.hashedPassword);
    if (!validPassword) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Create session
    req.session.userId = email;
    req.session.isAuthenticated = true;
    
    res.status(200).json({ message: 'Logged in successfully' });
});

// GET /logout
app.post('/logout', (req, res) => {
    req.session.destroy();
    res.json({ message: 'Logged out successfully' });
});

// Debug endpoint (Remove in production)
app.get('/debug/users', (req, res) => {
    const userList = Array.from(users.values()).map(u => ({
        email: u.email,
        createdAt: u.createdAt
    }));
    res.json({ users: userList, count: users.size });
});

// Protected route example
app.get('/profile', (req, res) => {
    if (!req.session.isAuthenticated) {
        return res.status(401).json({ message: 'Not authenticated' });
    }
    
    const user = users.get(req.session.userId);
    res.json({ 
        email: user.email,
        createdAt: user.createdAt,
        sessionId: req.sessionID
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Auth server running on port ${PORT}`);
    console.log('Debug endpoint: http://localhost:3001/debug/users');
});

// Production notes:
// 1. Replace in-memory Map with database (MongoDB, PostgreSQL, etc.)
// 2. Add rate limiting (express-rate-limit)
// 3. Add input validation (joi, express-validator)
// 4. Set cookie.secure = true with HTTPS
// 5. Use environment variables for secrets
// 6. Add logging (winston, morgan)
// 7. Remove debug endpoints