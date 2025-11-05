const nodemailer = require('nodemailer');
require('dotenv').config();

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.gmail.com',
            port: process.env.EMAIL_PORT || 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
    }

    async sendProgressNotification(userEmail, step, data = {}) {
        const templates = {
            'registration': {
                subject: 'Welcome to ChooseWise!',
                html: `<h2>Welcome ${data.name}!</h2><p>Your account has been created successfully. Start your tech career journey now!</p>`
            },
            'assessment_started': {
                subject: 'Assessment Started - ChooseWise',
                html: `<h2>Assessment in Progress</h2><p>You've started your skill assessment. Complete it to get personalized recommendations.</p>`
            },
            'assessment_completed': {
                subject: 'Assessment Complete - Your Results Are Ready!',
                html: `<h2>Assessment Complete!</h2><p>Your skill assessment is done. Score: ${data.score || 'N/A'}. Check your personalized career recommendations.</p>`
            },
            'roadmap_generated': {
                subject: 'Your Personalized Roadmap is Ready!',
                html: `<h2>Roadmap Generated</h2><p>Your personalized learning roadmap for ${data.career || 'your chosen career'} is ready. Start learning today!</p>`
            },
            'course_enrolled': {
                subject: 'Course Enrollment Confirmed',
                html: `<h2>Course Enrolled</h2><p>You've successfully enrolled in: ${data.courseName || 'a course'}. Happy learning!</p>`
            },
            'job_applied': {
                subject: 'Job Application Submitted',
                html: `<h2>Application Sent</h2><p>Your application for ${data.jobTitle || 'the position'} has been submitted successfully.</p>`
            }
        };

        const template = templates[step];
        if (!template) return;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: template.subject,
            html: template.html
        };

        try {
            await this.transporter.sendMail(mailOptions);
            console.log(`✅ Email sent for step: ${step} to ${userEmail}`);
        } catch (error) {
            console.error(`❌ Email failed for step: ${step}`, error.message);
        }
    }
}

module.exports = new EmailService();