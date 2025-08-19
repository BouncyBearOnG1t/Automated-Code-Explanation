# Automated-Code-Explanation

A simple browser extension built with Plasmo that integrates with Google Gemini API and displays the AI model currently being used directly in the popup.

<h2>Features</h2>

<li>Built with Plasmo (fast extension framework).</li>
<li>Connects to Google Gemini API (@google/generative-ai).</li>
<li>Popup UI that shows the active model name.</li>
<li>Easy to customize and extend (add more controls, API calls, etc.).</li>

<h2>Project Structure</h2>

├── popup.tsx         # Popup UI code
├── background.ts     # Extension background script (if used)
├── manifest.json     # Extension manifest
├── package.json
└── README.md

## Installation & Setup
1. Clone the repo
   git clone https://github.com/your-username/Automated-Code-Explanation.git
   cd Automated-Code-Explanation

2. Install dependencies
   backend: npm install @google/generative-ai cors dotenv express
   frontend: npm install plasmo react react-dom

3. Add API Key

   Create a .env file in the root and add your Google Gemini API key: GOOGLE_API_KEY=your_api_key_here

4. Run in development
   npm run dev

5. Build for production
   npm run build

## Load the Extension in Chrome/Brave

Go to chrome://extensions/

1. Enable Developer Mode
2. Click Load unpacked
3. Select the build folder

## Popup shows the current model:

Model: gemini-1.5-flash

## Tech Stack

Plasmo – Extension framework
Google Generative AI – API for Gemini models
React + TypeScript – UI & logic

## Future Ideas

<li>Switch between models in popup</li>
<li>Show API usage stats</li>
<li>Add quick prompts directly from popup</li>

Note: If using local host, turn off the adblock to avoid fetch error.
