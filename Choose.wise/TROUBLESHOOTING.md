# ChooseWise - Troubleshooting Guide

## Account Creation Issues

### 1. "Cannot connect to server" Error

**Problem**: Frontend cannot reach the backend API

**Solutions**:
1. **Start the backend server**:
   ```bash
   npm start
   ```
   Or double-click `start.bat`

2. **Check if server is running**:
   - Open browser and go to `http://localhost:5000`
   - You should see the ChooseWise homepage

3. **Verify port 5000 is free**:
   - Close any other applications using port 5000
   - Or change PORT in `.env` file

### 2. "Registration failed" Error

**Problem**: Backend server is running but registration fails

**Solutions**:
1. **Check Supabase configuration**:
   - Update `.env` file with correct Supabase credentials
   - Get credentials from your Supabase dashboard

2. **Verify Supabase database**:
   - Make sure your Supabase project is active
   - Check if `users` table exists

### 3. Password Validation

**Requirements** (all must be met):
- ✅ At least 8 characters long
- ✅ One uppercase letter (A-Z)
- ✅ One number (0-9)
- ✅ One special character (!@#$%^&*(),.?\":{}|<>)
- ✅ Passwords must match

**Example valid password**: `MyPass123!`

### 4. Quick Test Steps

1. **Test server connection**:
   - Open browser console (F12)
   - Go to `http://localhost:5000/api/auth/test`
   - Should see: `{"message":"Auth API is working!"}`

2. **Test account creation**:
   - Click "Login" → "Create Account"
   - Fill form with valid data
   - Check browser console for errors

### 5. Common Issues

- **CORS errors**: Make sure you're accessing via `http://localhost:5000`, not file://
- **Network errors**: Check if antivirus/firewall is blocking port 5000
- **Form validation**: Ensure all password requirements are green before submitting

### 6. Getting Help

If issues persist:
1. Check browser console for error messages
2. Check server terminal for error logs
3. Verify all dependencies are installed: `npm install`