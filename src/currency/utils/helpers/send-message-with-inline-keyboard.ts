import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../../../bot';

export async function sendMessageWithInlineKeyboard(
  chatId: ChatId,
  options: {
    reply_markup: {
      inline_keyboard: { text: string; callback_data: string }[][];
    };
  },
): Promise<void> {
  bot.sendMessage(chatId, 'Select a currency:', options);
}
