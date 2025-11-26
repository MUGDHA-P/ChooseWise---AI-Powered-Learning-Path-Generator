const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Rate limiting for login attempts
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 login attempts per windowMs
  message: { success: false, error: 'Too many login attempts. Please try again later.' }
});

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Format timestamp
const formatTimestamp = () => {
  const now = new Date();
  return now.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  });
};

// Login confirmation endpoint
app.post('/api/login-confirmation', loginLimiter, async (req, res) => {
  try {
    const { email } = req.body;

    // Validation
    if (!email) {
      return res.status(400).json({
        success: false,
        error: 'Email is required'
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    const loginTime = formatTimestamp();
    const userIP = req.ip || req.connection.remoteAddress;

    // Login confirmation email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'ChooseWise - Login Confirmation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin: 0; font-size: 28px;">ChooseWise</h1>
              <p style="color: #666; margin: 5px 0 0 0;">AI-Powered Career Guidance</p>
            </div>

            <!-- Welcome Message -->
            <div style="background: linear-gradient(135deg, #2563eb, #3b82f6); color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 25px;">
              <h2 style="margin: 0 0 10px 0; font-size: 24px;">🎉 Welcome Back!</h2>
              <p style="margin: 0; font-size: 16px; opacity: 0.9;">You've successfully logged into your ChooseWise account</p>
            </div>

            <!-- Login Details -->
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin-bottom: 25px;">
              <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">📋 Login Details</h3>
              
              <div style="margin-bottom: 12px;">
                <strong style="color: #475569;">📧 Email:</strong>
                <span style="color: #1e293b; margin-left: 10px;">${email}</span>
              </div>
              
              <div style="margin-bottom: 12px;">
                <strong style="color: #475569;">🕒 Login Time:</strong>
                <span style="color: #1e293b; margin-left: 10px;">${loginTime}</span>
              </div>
              
              <div style="margin-bottom: 0;">
                <strong style="color: #475569;">🌐 IP Address:</strong>
                <span style="color: #1e293b; margin-left: 10px;">${userIP}</span>
              </div>
            </div>

            <!-- Quick Actions -->
            <div style="text-align: center; margin-bottom: 25px;">
              <h3 style="color: #1e293b; margin-bottom: 15px;">🚀 Quick Actions</h3>
              <div style="display: inline-block; margin: 0 10px;">
                <a href="${process.env.WEBSITE_URL}/careers.html" style="background-color: #2563eb; color: white; padding: 12px 20px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 5px;">Explore Careers</a>
              </div>
              <div style="display: inline-block; margin: 0 10px;">
                <a href="${process.env.WEBSITE_URL}/assessment.html" style="background-color: #059669; color: white; padding: 12px 20px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 5px;">Take Assessment</a>
              </div>
            </div>

            <!-- Security Notice -->
            <div style="background-color: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
              <p style="margin: 0; color: #92400e; font-size: 14px;">
                <strong>🔒 Security Notice:</strong> If you didn't log in to ChooseWise, please secure your account immediately and contact our support team.
              </p>
            </div>

            <!-- Footer -->
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0 0 10px 0;">
                Thank you for choosing ChooseWise for your career journey!
              </p>
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                This is an automated email. Please do not reply to this message.
              </p>
              <p style="color: #94a3b8; font-size: 12px; margin: 5px 0 0 0;">
                © 2024 ChooseWise. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Login confirmation sent to your email successfully!',
      email: email,
      timestamp: loginTime
    });

  } catch (error) {
    console.error('Login confirmation error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send login confirmation. Please try again later.'
    });
  }
});

// Contact form endpoint (existing)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // Admin email
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `ChooseWise Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // User confirmation email
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting ChooseWise',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>We've received your message and will get back to you within 24 hours.</p>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3>Your Message:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          <p>Best regards,<br>The ChooseWise Team</p>
        </div>
      `
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    res.json({
      success: true,
      message: 'Email sent successfully! We\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later.'
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`🔐 Login page: http://localhost:${PORT}/login.html`);
  console.log(`📧 Contact page: http://localhost:${PORT}/contact.html`);
});