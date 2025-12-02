const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create database connection
const dbPath = path.join(__dirname, 'choosewise.db');
const db = new sqlite3.Database(dbPath);

// Initialize database tables
function initializeDatabase() {
    db.serialize(() => {
        // Users table
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            last_login DATETIME
        )`);

        // Visitors table
        db.run(`CREATE TABLE IF NOT EXISTS visitors (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id TEXT,
            page TEXT,
            user_agent TEXT,
            ip_address TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        // User events table
        db.run(`CREATE TABLE IF NOT EXISTS user_events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            event_type TEXT,
            event_data TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )`);
    });
}

// Database operations
const dbOperations = {
    // User operations
    createUser: (name, email, passwordHash) => {
        return new Promise((resolve, reject) => {
            db.run('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)', 
                   [name, email, passwordHash], 
                   function(err) {
                if (err) reject(err);
                else resolve({ id: this.lastID, name, email });
            });
        });
    },

    getUserByEmail: (email) => {
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    },

    updateLastLogin: (userId) => {
        return new Promise((resolve, reject) => {
            db.run('UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = ?', 
                   [userId], 
                   (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    },

    getAllUsers: () => {
        return new Promise((resolve, reject) => {
            db.all('SELECT id, name, email, created_at, last_login FROM users ORDER BY created_at DESC', 
                   (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    },

    // Visitor operations
    logVisitor: (sessionId, page, userAgent, ipAddress) => {
        return new Promise((resolve, reject) => {
            db.run('INSERT INTO visitors (session_id, page, user_agent, ip_address) VALUES (?, ?, ?, ?)', 
                   [sessionId, page, userAgent, ipAddress], 
                   function(err) {
                if (err) reject(err);
                else resolve(this.lastID);
            });
        });
    },

    getRecentVisitors: (limit = 50) => {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM visitors ORDER BY timestamp DESC LIMIT ?', 
                   [limit], 
                   (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    },

    getVisitorStats: () => {
        return new Promise((resolve, reject) => {
            db.get(`SELECT 
                        COUNT(*) as total_visits,
                        COUNT(DISTINCT session_id) as unique_visitors,
                        COUNT(CASE WHEN date(timestamp) = date('now') THEN 1 END) as today_visits
                    FROM visitors`, 
                   (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });
    },

    // User events
    logUserEvent: (userId, eventType, eventData) => {
        return new Promise((resolve, reject) => {
            db.run('INSERT INTO user_events (user_id, event_type, event_data) VALUES (?, ?, ?)', 
                   [userId, eventType, JSON.stringify(eventData)], 
                   function(err) {
                if (err) reject(err);
                else resolve(this.lastID);
            });
        });
    }
};

// Initialize database on module load
initializeDatabase();

module.exports = { db, dbOperations };