import { Client, GatewayIntentBits, Message } from 'discord.js';
import { sendGeminiRequest } from './gemini-request/request';
import { discordKey } from './keys';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`Bot is online as ${client.user?.tag}!`);
});

client.on('messageCreate', async (message: Message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("!gem ")) {
    const geminiMessagepayload = message.content.substring(4);
    const geminiMessageResponse = await sendGeminiRequest(geminiMessagepayload);
    message.reply(geminiMessageResponse);
  }
});

client.login(discordKey);
