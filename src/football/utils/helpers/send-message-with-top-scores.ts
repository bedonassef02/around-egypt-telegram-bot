import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../../../bot';

export async function sendMessageWithTopScores(
  chatId: ChatId,
  message: string,
): Promise<void> {
  bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
}
