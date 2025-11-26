# 🔐 Login Confirmation Email System

## 📧 Complete Login Email Flow

This system sends a beautiful confirmation email when users log in to ChooseWise.

## 🚀 Quick Start

### 1. Start the Server
```bash
cd "Choose.wise"
node login-server.js
```

### 2. Access Login Page
Navigate to: `http://localhost:3000/login.html`

### 3. Test Login Flow
1. Enter your email address
2. Click "Send Login Confirmation"
3. Check your email for the confirmation

## 🔄 Login Email Flow Explanation

### **Step 1: User Interaction**
- User visits `login.html`
- Enters email address in the form
- Clicks "Send Login Confirmation" button

### **Step 2: Client-Side Processing (login.js)**
```javascript
// 1. Validate email format
if (!isValidEmail(email)) {
    showMessage('Invalid email format', 'error');
    return;
}

// 2. Send POST request to server
const response = await fetch('/api/login-confirmation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email })
});
```

### **Step 3: Server Processing (login-server.js)**
```javascript
// 1. Validate input
if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email' });
}

// 2. Generate timestamp and user info
const loginTime = formatTimestamp();
const userIP = req.ip;

// 3. Create beautiful HTML email
const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'ChooseWise - Login Confirmation',
    html: `<!-- Beautiful HTML email template -->`
};

// 4. Send email via Nodemailer
await transporter.sendMail(mailOptions);
```

### **Step 4: Response Handling**
```javascript
// Server responds with success/error
res.json({
    success: true,
    message: 'Login confirmation sent!',
    email: email,
    timestamp: loginTime
});

// Client shows success message
showMessage('✅ Login confirmation sent to your email!', 'success');
```

## 📧 Email Template Features

The login confirmation email includes:

### **🎨 Professional Design**
- Responsive HTML template
- ChooseWise branding
- Modern gradient styling
- Mobile-friendly layout

### **📋 Login Information**
- User's email address
- Exact login timestamp
- User's IP address
- Security notice

### **🚀 Quick Action Buttons**
- "Explore Careers" button
- "Take Assessment" button
- Direct links to key features

### **🔒 Security Features**
- Security warning if unauthorized login
- Professional footer with contact info
- Automated email disclaimer

## ⚙️ Configuration

### **Environment Variables (.env)**
```env
# Email Service
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Login Settings
WEBSITE_URL=http://localhost:3000
LOGIN_EMAIL_ENABLED=true
LOGIN_RATE_LIMIT=10
```

### **Gmail Setup**
1. Enable 2-Factor Authentication
2. Generate App Password:
   - Google Account → Security → 2-Step Verification → App passwords
   - Select "Mail" → Generate password
   - Use generated password in `EMAIL_PASS`

## 🛡️ Security Features

### **Rate Limiting**
- 10 login attempts per 15 minutes per IP
- Prevents spam and abuse
- Configurable limits

### **Input Validation**
- Email format validation (client + server)
- Required field validation
- XSS protection via input sanitization

### **Error Handling**
- Graceful error messages
- Network error detection
- Server connectivity checks

## 🎯 API Endpoints

### **POST /api/login-confirmation**
Sends login confirmation email

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Login confirmation sent to your email successfully!",
  "email": "user@example.com",
  "timestamp": "Monday, November 26, 2024 at 11:30:45 AM PST"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Invalid email format"
}
```

## 📁 File Structure
```
Choose.wise/
├── login-server.js       # Enhanced server with login emails
├── login.html           # Login page with email form
├── login.js             # Client-side login handling
├── .env                 # Environment configuration
└── LOGIN_EMAIL_GUIDE.md # This guide
```

## 🧪 Testing

### **Test Login Flow**
1. Start server: `node login-server.js`
2. Open: `http://localhost:3000/login.html`
3. Enter valid email
4. Check email inbox for confirmation

### **Test API Directly**
```bash
curl -X POST http://localhost:3000/api/login-confirmation \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

## 🔧 Customization

### **Email Template**
Edit the HTML template in `login-server.js` to customize:
- Colors and styling
- Company branding
- Content and messaging
- Call-to-action buttons

### **Login Form**
Modify `login.html` to add:
- Additional form fields
- Custom styling
- Extra validation
- Different layouts

### **Client Behavior**
Update `login.js` to change:
- Validation rules
- Success/error handling
- Redirect behavior
- User feedback

## 🚀 Production Deployment

For production use:
1. Use environment-specific .env files
2. Set up SSL certificates
3. Use professional email service (SendGrid, Mailgun)
4. Implement proper logging
5. Add database storage for login records
6. Set up monitoring and alerts

## 📞 Troubleshooting

### **Email Not Received**
- Check spam/junk folder
- Verify EMAIL_USER and EMAIL_PASS
- Ensure Gmail App Password is used
- Check server logs for errors

### **Server Connection Issues**
- Verify server is running on port 3000
- Check firewall settings
- Ensure .env file is properly configured

### **Rate Limit Errors**
- Wait 15 minutes before retrying
- Adjust LOGIN_RATE_LIMIT in .env
- Check IP address restrictions

The login confirmation email system is now fully integrated and ready to use!