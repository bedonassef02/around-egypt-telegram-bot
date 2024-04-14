import { ChatId, InlineKeyboardMarkup } from 'node-telegram-bot-api';
import { bot } from '../../../bot';

export async function sendMessageWithKeyboard(
  chatId: ChatId,
  message: string,
  keyboard: InlineKeyboardMarkup,
): Promise<void> {
  const options = {
    reply_markup: keyboard,
  };
  bot.sendMessage(chatId, message, options);
}
