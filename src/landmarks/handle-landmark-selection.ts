import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../bot';
import { getLandmark } from './api/find-one.api';
import { Landmark } from './utils/types/landmark.type';
import { sendLandmarkMessage } from './utils/helpers/send-landmark-message';
import { buildLandmarkMessage } from './utils/helpers/build-landmark-message';

export async function handleLandmarksSelection(
  chatId: ChatId,
  data: string,
): Promise<void> {
  const [landmarkId, landmarkName] = data.split('_').slice(1);

  try {
    const landmarkData: Landmark = await getLandmark(landmarkId);

    if (landmarkData) {
      const message: string = await buildLandmarkMessage(landmarkData);
      await sendLandmarkMessage(chatId, message, landmarkData.cover_image);
    } else {
      await bot.sendMessage(chatId, 'Failed to fetch landmark data.');
    }
  } catch (error) {
    console.error('Error handling landmark selection:', error);
    await bot.sendMessage(
      chatId,
      'An error occurred while processing your request. Please try again later.',
    );
  }
}
