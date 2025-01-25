# Discord Gemini Bot

This bot integrates with Gemini AI to allow you to interact with Gemini directly through your Discord server.

## Description

The Discord Gemini Bot is designed to provide users with a way to interact with Gemini's AI services through a simple Discord interface. By sending a message with the prefix `!gem`, the bot will respond with information generated by Gemini AI.

## Requirements

- Node.js
- Discord Bot Token
- Gemini API Key

## How to Use

1. Clone the repository to your local machine.
2. Open the `keys.ts` file.
3. Add your **Discord Bot Token** and **Gemini API Key** to the file. 
   - To get your Gemini API key, visit the Gemini AI Studio page and generate a new key.
4. Run the following commands to compile and execute the bot:
   - First, compile the TypeScript files:
     ```
     npx tsc
     ```
   - Then, run the compiled JavaScript file:
     ```
     node dist/bot.js
     ```
5. In your Discord server, send a message starting with `!gem` followed by your query. The bot will respond based on the Gemini AI response.

Example:
 ```
 !gem What is the weather today?
 ```

The bot will respond with the information provided by Gemini AI.
