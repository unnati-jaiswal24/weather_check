# Weather App

This project now uses a local backend proxy so your OpenWeatherMap API key stays hidden on the server.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and add your API key:
   ```bash
   cp .env.example .env
   ```

3. Open `.env` and set your real key:
   ```text
   OPENWEATHER_API_KEY=your_real_api_key_here
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open your browser at:
   ```text
   http://localhost:3000
   ```

## How it works

- The browser sends city requests to `/weather`.
- The backend server reads the API key from `.env`.
- Only the server contacts OpenWeatherMap.
- The key is not exposed in `javascript.js` or `index.html`.
