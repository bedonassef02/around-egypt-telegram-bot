import { ChatId } from 'node-telegram-bot-api';
import { getLandmarksPairing } from './get-landmarks-pairing';
import { bot } from '../../../bot';

export async function sendMessageWithLandmarksOptions(
  chatId: ChatId,
): Promise<void> {
  try {
    const keyboard = await getLandmarksPairing();
    await bot.sendMessage(chatId, 'Select a Landmark:', {
      reply_markup: {
        inline_keyboard: keyboard,
      },
    });
  } catch (error) {
    console.error('Error sending message with landmarks options:', error);
    await bot.sendMessage(
      chatId,
      'An error occurred while processing your request. Please try again later.',
    );
  }
}
