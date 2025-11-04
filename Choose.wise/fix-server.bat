@echo off
echo ========================================
echo    ChooseWise Server Troubleshooting
echo ========================================
echo.
echo Checking Node.js...
node --version
if %errorlevel% neq 0 (
    echo ❌ Node.js not found! Please install Node.js first.
    pause
    exit
)
echo ✅ Node.js is installed
echo.

echo Checking if port 5000 is free...
netstat -an | find "5000" > nul
if %errorlevel% equ 0 (
    echo ⚠️  Port 5000 is in use. Trying port 3000...
    set PORT=3000
) else (
    echo ✅ Port 5000 is available
    set PORT=5000
)
echo.

echo Starting server on port %PORT%...
node backend.js
pause