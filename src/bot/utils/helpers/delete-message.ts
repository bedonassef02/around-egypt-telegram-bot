import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../../index';

export async function deleteMessage(
  chatId: ChatId,
  messageId: number,
): Promise<void> {
  try {
    await bot.deleteMessage(chatId, messageId);
  } catch (error) {
    console.error('Error deleting message:', error);
  }
}
