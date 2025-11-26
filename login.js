// Login confirmation email system
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    const loginBtn = document.getElementById('loginBtn');
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');
    const emailInput = document.getElementById('email');

    // Show message function
    function showMessage(message, type) {
        loginMessage.textContent = message;
        loginMessage.className = `message ${type}`;
        loginMessage.style.display = 'block';
        
        // Auto-hide success messages after 8 seconds
        if (type === 'success') {
            setTimeout(() => {
                loginMessage.style.display = 'none';
            }, 8000);
        }
    }

    // Set loading state
    function setLoading(loading) {
        loginBtn.disabled = loading;
        if (loading) {
            btnText.style.display = 'none';
            btnLoader.style.display = 'inline';
        } else {
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
        }
    }

    // Validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Real-time email validation
    emailInput.addEventListener('input', function() {
        const email = this.value.trim();
        if (email && !isValidEmail(email)) {
            this.style.borderColor = '#ef4444';
            this.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
        } else {
            this.style.borderColor = '#e5e7eb';
            this.style.boxShadow = 'none';
        }
    });

    // Handle form submission
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();

        // Client-side validation
        if (!email) {
            showMessage('Please enter your email address.', 'error');
            emailInput.focus();
            return;
        }

        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            emailInput.focus();
            return;
        }

        // Set loading state
        setLoading(true);
        showMessage('Sending login confirmation email...', 'loading');

        try {
            // Send login confirmation request to server
            const response = await fetch('http://localhost:3001/api/login-confirmation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email })
            });

            const result = await response.json();

            if (result.success) {
                showMessage(
                    `✅ ${result.message} Check your inbox at ${result.email}`, 
                    'success'
                );
                
                // Store login info for potential use
                localStorage.setItem('loginEmail', email);
                localStorage.setItem('loginTime', result.timestamp);
                
                // Optional: Redirect after successful login confirmation
                setTimeout(() => {
                    // Uncomment to redirect to dashboard after login
                    // window.location.href = 'index.html';
                }, 3000);
                
            } else {
                showMessage(result.error || 'Failed to send login confirmation.', 'error');
            }

        } catch (error) {
            console.error('Login confirmation error:', error);
            
            // Handle different types of errors
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                showMessage(
                    'Unable to connect to server. Please make sure the server is running on port 3000.', 
                    'error'
                );
            } else if (error.name === 'SyntaxError') {
                showMessage('Server response error. Please try again.', 'error');
            } else {
                showMessage('Network error. Please check your connection and try again.', 'error');
            }
        } finally {
            setLoading(false);
        }
    });

    // Auto-focus email input
    emailInput.focus();

    // Handle Enter key in email input
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            loginForm.dispatchEvent(new Event('submit'));
        }
    });

    // Password toggle functionality
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('passwordToggle');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passwordToggle && passwordInput && eyeIcon) {
        passwordToggle.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon.textContent = '🙈'; // See-no-evil monkey
            } else {
                passwordInput.type = 'password';
                eyeIcon.textContent = '👁️'; // Eye
            }
        });
    }
    
    // Check if user has previously logged in
    const previousEmail = localStorage.getItem('loginEmail');
    if (previousEmail) {
        emailInput.value = previousEmail;
        emailInput.select();
    }
});