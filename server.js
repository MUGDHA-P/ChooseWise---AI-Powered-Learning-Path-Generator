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

// Rate limiting
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: { success: false, error: 'Too many emails sent. Please try again later.' }
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

// Contact form endpoint
app.post('/api/contact', emailLimiter, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
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

    // Email to admin
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
        <hr>
        <p><em>Sent from ChooseWise Contact Form</em></p>
      `
    };

    // Confirmation email to user
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
          
          <hr style="margin: 30px 0;">
          <p style="font-size: 12px; color: #666;">
            This is an automated confirmation email. Please do not reply to this email.
          </p>
        </div>
      `
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    res.json({
      success: true,
      message: 'Email sent successfully! We\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});