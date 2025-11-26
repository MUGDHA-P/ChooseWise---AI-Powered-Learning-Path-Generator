// Contact form handling with server communication
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');

    // Show message function
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }

    // Set loading state
    function setLoading(loading) {
        submitBtn.disabled = loading;
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

    // Handle form submission
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name').trim(),
            email: formData.get('email').trim(),
            subject: formData.get('subject'),
            message: formData.get('message').trim()
        };

        // Client-side validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

        if (!isValidEmail(data.email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        if (data.message.length < 10) {
            showMessage('Message must be at least 10 characters long.', 'error');
            return;
        }

        // Set loading state
        setLoading(true);
        showMessage('Sending your message...', 'loading');

        try {
            // Send data to server
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                showMessage(result.message, 'success');
                contactForm.reset(); // Clear form on success
            } else {
                showMessage(result.error || 'Failed to send message. Please try again.', 'error');
            }

        } catch (error) {
            console.error('Contact form error:', error);
            
            // Check if server is running
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                showMessage('Unable to connect to server. Please make sure the server is running on port 3000.', 'error');
            } else {
                showMessage('Network error. Please check your connection and try again.', 'error');
            }
        } finally {
            setLoading(false);
        }
    });

    // Real-time email validation
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('blur', function() {
        const email = this.value.trim();
        if (email && !isValidEmail(email)) {
            this.style.borderColor = '#dc3545';
        } else {
            this.style.borderColor = '';
        }
    });

    // Character counter for message
    const messageInput = document.getElementById('message');
    const maxLength = 1000;
    
    // Create character counter
    const charCounter = document.createElement('div');
    charCounter.style.fontSize = '12px';
    charCounter.style.color = '#666';
    charCounter.style.textAlign = 'right';
    charCounter.style.marginTop = '5px';
    messageInput.parentNode.appendChild(charCounter);
    
    messageInput.addEventListener('input', function() {
        const remaining = maxLength - this.value.length;
        charCounter.textContent = `${remaining} characters remaining`;
        
        if (remaining < 50) {
            charCounter.style.color = '#dc3545';
        } else {
            charCounter.style.color = '#666';
        }
        
        if (remaining < 0) {
            this.value = this.value.substring(0, maxLength);
            charCounter.textContent = '0 characters remaining';
        }
    });
    
    // Initialize character counter
    messageInput.dispatchEvent(new Event('input'));
});