# Email System Setup Instructions

## 📧 Complete Email Interaction System

This system provides a working contact form with server-client email functionality.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd "Choose.wise"
npm install
```

### 2. Setup Environment Variables
1. Copy `.env.example` to `.env`:
```bash
copy .env.example .env
```

2. Configure your email settings in `.env`:
```env
# Email Service Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_actual_email@gmail.com
EMAIL_PASS=your_app_password
ADMIN_EMAIL=admin@choosewise.com
WEBSITE_URL=http://localhost:3000
PORT=3000
```

### 3. Gmail Setup (Recommended)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password in `EMAIL_PASS`

### 4. Start the Server
```bash
node server.js
```

### 5. Open the Website
Navigate to: `http://localhost:3000`

## 📋 System Workflow

### Client-Side (contact.html + contact.js)
1. **Form Validation**: Real-time email validation, required fields check
2. **Data Collection**: Gathers name, email, subject, message
3. **API Request**: Sends POST request to `/api/contact` endpoint
4. **Response Handling**: Shows success/error messages to user

### Server-Side (server.js)
1. **Request Validation**: Validates all required fields and email format
2. **Rate Limiting**: Prevents spam (5 emails per 15 minutes per IP)
3. **Email Sending**: 
   - Sends notification email to admin
   - Sends confirmation email to user
4. **Response**: Returns JSON success/error response

## 🔧 Email Configuration Options

### Gmail (Recommended)
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### Outlook/Hotmail
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your_email@outlook.com
EMAIL_PASS=your_password
```

### Yahoo Mail
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USER=your_email@yahoo.com
EMAIL_PASS=your_app_password
```

### Custom SMTP
```env
EMAIL_HOST=your_smtp_host.com
EMAIL_PORT=587
EMAIL_USER=your_username
EMAIL_PASS=your_password
```

## 🛡️ Security Features

- **Rate Limiting**: Prevents email spam
- **Input Validation**: Server-side validation of all inputs
- **CORS Protection**: Configured for security
- **Helmet**: Security headers
- **Email Sanitization**: Prevents injection attacks

## 🧪 Testing

### Test the Contact Form
1. Fill out the contact form at `http://localhost:3000/contact.html`
2. Check server console for logs
3. Check your admin email for the message
4. Check the sender's email for confirmation

### Test API Directly
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

## 🔍 Troubleshooting

### Common Issues

**1. "Authentication failed" Error**
- Ensure 2FA is enabled on Gmail
- Use App Password, not regular password
- Check EMAIL_USER and EMAIL_PASS in .env

**2. "Connection refused" Error**
- Check if server is running on port 3000
- Verify PORT in .env file
- Check firewall settings

**3. "Rate limit exceeded" Error**
- Wait 15 minutes before sending more emails
- Adjust rate limit in server.js if needed

**4. Emails not received**
- Check spam/junk folders
- Verify ADMIN_EMAIL in .env
- Check server logs for errors

### Debug Mode
Add this to server.js for detailed logging:
```javascript
// Add after transporter setup
transporter.verify((error, success) => {
  if (error) {
    console.log('SMTP Error:', error);
  } else {
    console.log('SMTP Server ready');
  }
});
```

## 📁 File Structure
```
Choose.wise/
├── server.js              # Backend server with email functionality
├── contact.html           # Enhanced contact form
├── contact.js             # Client-side form handling
├── .env.example          # Environment variables template
├── .env                  # Your actual environment variables
├── package.json          # Dependencies
└── SETUP_INSTRUCTIONS.md # This file
```

## 🎯 Features Included

✅ **Complete Contact Form** with validation
✅ **Server-Client Communication** via fetch API
✅ **Email Sending** to admin and user confirmation
✅ **Rate Limiting** for spam protection
✅ **Real-time Validation** on client-side
✅ **Error Handling** with user-friendly messages
✅ **Security Features** (CORS, Helmet, input sanitization)
✅ **Multiple SMTP Providers** support
✅ **Responsive Design** integration

## 🚀 Production Deployment

For production, consider:
1. Use environment-specific .env files
2. Set up proper SSL certificates
3. Use a dedicated email service (SendGrid, Mailgun)
4. Implement proper logging
5. Add database storage for contact submissions
6. Set up monitoring and alerts

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify all environment variables are set correctly
3. Check server logs for detailed error messages
4. Ensure your email provider allows SMTP access