import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../../../bot';

export async function sendLandmarkMessage(
  chatId: ChatId,
  message: string,
  coverImage: string,
): Promise<void> {
  try {
    await bot.sendPhoto(chatId, coverImage, {
      caption: message,
      parse_mode: 'HTML',
    });
  } catch (error) {
    console.error('Error sending landmark message:', error);
    await bot.sendMessage(
      chatId,
      'An error occurred while sending the landmark message.',
    );
  }
}
