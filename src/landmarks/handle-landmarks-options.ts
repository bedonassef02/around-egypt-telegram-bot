import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../bot';
import { getAllLandmarks } from './api/find-all.api';

export async function handleLandmarksOption(chatId: ChatId): Promise<void> {
  const landmarks = await getAllLandmarks();
  const keyboard = landmarks.map((landmark: any) => [
    {
      text: landmark.name,
      callback_data: `landmark_${landmark._id}_${landmark.name}`,
    },
  ]);

  bot.sendMessage(chatId, 'Select a Landmark:', {
    reply_markup: {
      inline_keyboard: keyboard,
    },
  });
}
