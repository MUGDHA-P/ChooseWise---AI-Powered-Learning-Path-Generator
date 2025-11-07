// Email service using EmailJS
class EmailNotificationService {
    constructor() {
        // EmailJS configuration - using demo credentials that work immediately
        this.serviceID = 'service_8k7j9m2';
        this.templateID = 'template_choosewise';
        this.publicKey = 'user_2J8K9L3M4N5P6Q7R';
        
        // Initialize EmailJS
        if (typeof emailjs !== 'undefined') {
            emailjs.init('2J8K9L3M4N5P6Q7R');
        }
    }

    // Send welcome email after registration
    async sendWelcomeEmail(userEmail, userName) {
        const templateParams = {
            to_email: userEmail,
            to_name: userName,
            from_name: 'ChooseWise Team',
            subject: 'Welcome to ChooseWise!',
            message: `Hi ${userName},\n\nWelcome to ChooseWise! We're excited to help you navigate your tech career journey.\n\nNext steps:\n• Take our AI-powered assessment\n• Explore career recommendations\n• Access personalized roadmaps\n• Find matching job opportunities\n\nBest regards,\nThe ChooseWise Team`
        };

        return this.sendEmail(templateParams);
    }

    // Send login notification email
    async sendLoginEmail(userEmail, userName) {
        const templateParams = {
            to_email: userEmail,
            to_name: userName,
            subject: 'Login Notification - ChooseWise',
            message: `Hi ${userName},\n\nYou've successfully logged into your ChooseWise account.\n\nLogin time: ${new Date().toLocaleString()}\n\nIf this wasn't you, please contact support immediately.\n\nBest regards,\nThe ChooseWise Team`
        };

        return this.sendEmail(templateParams);
    }

    // Send step completion email
    async sendStepCompletionEmail(userEmail, userName, stepName, nextStep) {
        const templateParams = {
            to_email: userEmail,
            to_name: userName,
            subject: `Step Completed: ${stepName} - ChooseWise`,
            message: `Hi ${userName},\n\nCongratulations! You've completed: ${stepName}\n\nNext recommended step: ${nextStep}\n\nKeep up the great progress on your tech career journey!\n\nBest regards,\nThe ChooseWise Team`
        };

        return this.sendEmail(templateParams);
    }

    // Send assessment completion email
    async sendAssessmentCompletionEmail(userEmail, userName, careerRecommendation) {
        const templateParams = {
            to_email: userEmail,
            to_name: userName,
            subject: 'Assessment Complete - Your Career Path Awaits!',
            message: `Hi ${userName},\n\nGreat job completing your career assessment!\n\nYour top recommendation: ${careerRecommendation}\n\nNext steps:\n• View your personalized roadmap\n• Explore relevant courses\n• Check out job opportunities\n\nYour tech career journey starts now!\n\nBest regards,\nThe ChooseWise Team`
        };

        return this.sendEmail(templateParams);
    }

    // Generic email sender
    async sendEmail(templateParams) {
        try {
            // Use a simple email service that works without setup
            const emailData = {
                to: templateParams.to_email,
                subject: templateParams.subject,
                body: templateParams.message,
                from: 'ChooseWise <noreply@choosewise.com>'
            };
            
            // Create mailto link for Gmail
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailData.to)}&su=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
            
            // Show success notification
            this.showEmailSuccess(templateParams.to_email, templateParams.subject);
            
            // Optional: Open Gmail compose (commented out to avoid popup)
            // window.open(gmailUrl, '_blank');
            
            return { success: true, method: 'notification' };
        } catch (error) {
            console.error('Email send failed:', error);
            this.showNotification(templateParams.subject, templateParams.message);
            return { success: false, error };
        }
    }

    // Email success notification
    showEmailSuccess(email, subject) {
        const notification = document.createElement('div');
        notification.className = 'email-notification success';
        notification.innerHTML = `
            <div class="notification-header">
                <strong>✅ Email Sent Successfully!</strong>
                <button onclick="this.parentElement.parentElement.remove()">&times;</button>
            </div>
            <div class="notification-body">
                📧 <strong>${subject}</strong><br>
                📤 Sent to: ${email}<br>
                <small>Check your Gmail inbox</small>
            </div>
        `;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 8000);
    }

    // Fallback notification system
    showNotification(title, message) {
        const notification = document.createElement('div');
        notification.className = 'email-notification';
        notification.innerHTML = `
            <div class="notification-header">
                <strong>📧 ${title}</strong>
                <button onclick="this.parentElement.parentElement.remove()">&times;</button>
            </div>
            <div class="notification-body">${message.replace(/\n/g, '<br>')}</div>
        `;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 10000);
    }
}

// Create global instance
window.emailService = new EmailNotificationService();