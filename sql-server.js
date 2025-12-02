const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const { dbOperations } = require('./database');

const app = express();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.use(session({
    secret: 'choosewise-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    }
}));

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// POST /signup
app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, email and password are required' });
        }
        
        // Check if user exists
        const existingUser = await dbOperations.getUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({ message: 'Account already exists. Please login.' });
        }
        
        // Create user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await dbOperations.createUser(name, email, hashedPassword);
        
        // Log registration event
        await dbOperations.logUserEvent(newUser.id, 'registration', { name, email });
        
        res.status(201).json({ message: 'Account created. Please login on your next visit.' });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// POST /login
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        
        // Check if user exists
        const user = await dbOperations.getUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'you don\'t have an account please sign up' });
        }
        
        // Verify password
        const validPassword = await bcrypt.compare(password, user.password_hash);
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        // Update last login
        await dbOperations.updateLastLogin(user.id);
        
        // Create session
        req.session.userId = user.id;
        req.session.userEmail = user.email;
        req.session.isAuthenticated = true;
        
        // Log login event
        await dbOperations.logUserEvent(user.id, 'login', { email });
        
        res.status(200).json({ message: 'Logged in successfully' });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// POST /logout
app.post('/logout', (req, res) => {
    req.session.destroy();
    res.json({ message: 'Logged out successfully' });
});

// GET /profile
app.get('/profile', async (req, res) => {
    if (!req.session.isAuthenticated) {
        return res.status(401).json({ message: 'Not authenticated' });
    }
    
    try {
        const user = await dbOperations.getUserByEmail(req.session.userEmail);
        res.json({ 
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.created_at,
            lastLogin: user.last_login
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching profile' });
    }
});

// POST /log-visitor
app.post('/log-visitor', async (req, res) => {
    try {
        const { sessionId, page, userAgent } = req.body;
        const ipAddress = req.ip || req.connection.remoteAddress;
        
        await dbOperations.logVisitor(sessionId, page, userAgent, ipAddress);
        res.json({ success: true });
    } catch (error) {
        console.error('Visitor logging error:', error);
        res.status(500).json({ message: 'Error logging visitor' });
    }
});

// GET /dashboard-data (for owner dashboard)
app.get('/dashboard-data', async (req, res) => {
    try {
        const users = await dbOperations.getAllUsers();
        const visitors = await dbOperations.getRecentVisitors();
        const stats = await dbOperations.getVisitorStats();
        
        res.json({
            users,
            visitors,
            stats
        });
    } catch (error) {
        console.error('Dashboard data error:', error);
        res.status(500).json({ message: 'Error fetching dashboard data' });
    }
});

// Debug endpoint
app.get('/debug/database', async (req, res) => {
    try {
        const users = await dbOperations.getAllUsers();
        const visitors = await dbOperations.getRecentVisitors(10);
        const stats = await dbOperations.getVisitorStats();
        
        res.json({
            message: 'Database connected successfully',
            stats,
            userCount: users.length,
            recentUsers: users.slice(0, 5),
            recentVisitors: visitors.slice(0, 5)
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 ChooseWise with SQLite running at: http://localhost:${PORT}`);
    console.log(`📊 Dashboard: http://localhost:${PORT}/owner-dashboard.html`);
    console.log(`🔍 Debug: http://localhost:${PORT}/debug/database`);
});