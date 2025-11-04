# ChooseWise - Quick Start Guide

## Backend Setup for Account Creation

### 1. Prerequisites
- Node.js (v16+)
- Supabase account (free tier available)

### 2. Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   - Update `.env` file with your Supabase credentials:
   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-anon-key-here
   ```

3. **Start Server**
   ```bash
   npm start
   ```
   Or double-click `start.bat` on Windows

### 3. Features Available

✅ **Account Creation**: Users can register with name, email, password
✅ **User Login**: Secure authentication with Supabase
✅ **Session Management**: Persistent login state
✅ **User Profile**: Automatic profile creation with default settings

### 4. API Endpoints

- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - User login
- All other routes from the original specification

### 5. Frontend Integration

The frontend now includes:
- Dynamic signup/login forms
- Backend API integration
- Session persistence
- User state management

### 6. Testing

1. Open `http://localhost:5000`
2. Click "Login" button
3. Click "Create Account"
4. Fill in details and submit
5. Account will be created and user logged in

### 7. Next Steps

- Set up your Supabase database
- Configure email verification (optional)
- Add more user profile features
- Integrate with AI services

The minimal backend for account creation is now ready! 🚀