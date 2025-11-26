# Email Setup Guide for ChooseWise

## Option 1: EmailJS Setup (Recommended)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new email service (Gmail, Outlook, etc.)

### Step 2: Create Email Template
1. Go to Email Templates in your EmailJS dashboard
2. Create a new template with these variables:
   - `{{to_email}}` - Recipient email
   - `{{to_name}}` - Recipient name
   - `{{subject}}` - Email subject
   - `{{message}}` - Email content

### Step 3: Update Configuration
In `emailService.js`, replace:
```javascript
this.serviceID = 'your_service_id';
this.templateID = 'your_template_id';
this.publicKey = 'your_public_key';
```

## Option 2: Notification System (Current)

The system currently shows browser notifications instead of sending actual emails. This works without any setup and provides immediate feedback to users.

## Email Triggers

### Automatic Emails:
1. **Welcome Email** - After account creation
2. **Login Notification** - After successful login
3. **Step Completion** - When user completes any learning step
4. **Assessment Complete** - After finishing career assessment

### Usage Examples:
```javascript
// Track step completion
trackStepCompletion('Career Assessment', 'View Personalized Roadmap');

// Track assessment completion
trackAssessmentCompletion('AI Engineer');
```

## Features:
- ✅ No backend required
- ✅ Client-side email sending
- ✅ Fallback notification system
- ✅ Responsive design
- ✅ Auto-dismiss notifications
- ✅ Multiple email templates