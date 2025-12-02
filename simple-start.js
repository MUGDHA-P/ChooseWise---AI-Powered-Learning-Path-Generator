const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting ChooseWise Project...\n');

// Start auth server
console.log('📡 Starting authentication server...');
const authServer = spawn('node', ['auth-server.js'], {
    cwd: __dirname,
    stdio: 'inherit'
});

// Wait and start frontend server
setTimeout(() => {
    console.log('🌐 Starting frontend server...');
    const frontendServer = spawn('python', ['-m', 'http.server', '8000'], {
        cwd: __dirname,
        stdio: 'inherit'
    });
    
    // Open browser after servers start
    setTimeout(() => {
        console.log('🌍 Opening browser...');
        require('child_process').exec('start http://localhost:8000/index.html');
        
        console.log('\n✅ ChooseWise is running!');
        console.log('📱 Frontend: http://localhost:8000/index.html');
        console.log('🔐 Auth: http://localhost:8000/auth.html');
        console.log('📊 Dashboard: http://localhost:8000/owner-dashboard.html');
        console.log('🔑 Dashboard Password: choosewise2025\n');
    }, 3000);
}, 2000);

// Handle cleanup
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down servers...');
    authServer.kill();
    process.exit();
});