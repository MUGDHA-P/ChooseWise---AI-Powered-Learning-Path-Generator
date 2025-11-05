@echo off
echo Installing email notification dependencies...
npm install nodemailer dotenv
echo.
echo Email notification system installed successfully!
echo.
echo Next steps:
echo 1. Copy .env.example to .env
echo 2. Configure your email settings in .env file
echo 3. Restart your server
echo.
pause