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

## Deploy to Vercel

1. Push your repo to GitHub.
2. Go to https://vercel.com and log in.
3. Import the `weather_check` repository.
4. Set an environment variable on Vercel:
   - `OPENWEATHER_API_KEY` = your real OpenWeatherMap key
5. Deploy.

The app will use the serverless function at `/api/weather` to keep the key hidden.

## How it works

- The browser sends city requests to `/api/weather`.
- The serverless function reads the API key from Vercel environment variables.
- Only the server contacts OpenWeatherMap.
- The key is not exposed in `javascript.js` or `index.html`.
