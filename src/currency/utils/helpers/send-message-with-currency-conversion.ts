import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../../../bot';

export async function sendMessageWithCurrencyConversion(
  chatId: ChatId,
  message: string,
): Promise<void> {
  bot.sendMessage(chatId, message);
}
