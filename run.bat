@echo off
cd /d "c:\Users\MUGDHA P\Documents\Choose.wise"
start cmd /k "node auth-server.js"
timeout /t 2 >nul
start cmd /k "python -m http.server 8000"
timeout /t 2 >nul
start http://localhost:8000/index.html
echo Project started! Visit http://localhost:8000/index.html