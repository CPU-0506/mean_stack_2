@echo off
REM Use system Python, do not create or activate a virtual environment

where python >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Python is not installed or not found in PATH.
    echo Please install the latest version of Python from https://www.python.org/downloads/
    exit /b 1
)

echo [INFO] Upgrading pip...
python -m pip install --upgrade pip

echo [INFO] Installing dependencies...
pip install flask flask_cors

echo [INFO] Starting Flask server...
start "" python server.py

echo [INFO] Server started in a new window.