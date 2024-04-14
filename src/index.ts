import dotenv from 'dotenv'
dotenv.config();
import { bot } from './bot';
import { sendInitialOptions } from './bot/utils/helpers/set-initial-state';
import { info } from './utils/info';
bot.onText(/\/start/, (msg): void => {
  const chatId = msg.chat.id;
  sendInitialOptions(chatId);
});

bot.onText(/\/info/, (msg): void => {
  const chatId: number = msg.chat.id;
  const infoMessage: string = `This bot is designed by Bedo Nassef.\n\nYou can find me on:\n`;

  // Define inline keyboard buttons for social media with icons
  const keyboard = {
    inline_keyboard: info,
  };

  // Send the message with inline keyboard buttons
  bot.sendMessage(chatId, infoMessage, {
    reply_markup: keyboard,
    parse_mode: 'HTML',
  });
});
