# How to Start the Development Server

## Quick Start

1. Open PowerShell or Command Prompt in this directory
2. Run: `npm run dev`
3. Wait for the server to start (you'll see "Ready" message)
4. Open http://localhost:8000 in your browser

## Alternative: Use the Batch File

Double-click `start-dev.bat` to start the server automatically.

## Troubleshooting

If you get connection errors:
- Make sure no other application is using port 8000
- Check that Node.js is installed: `node --version`
- Try: `npm install` to reinstall dependencies
- Check firewall settings

## Port Already in Use?

If port 8000 is busy, you can change it in `package.json`:
- Change `"dev": "next dev -p 8000"` to use a different port like `"dev": "next dev -p 3000"`

