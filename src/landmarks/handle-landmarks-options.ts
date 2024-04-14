import { ChatId } from 'node-telegram-bot-api';
import { sendMessageWithLandmarksOptions } from './utils/helpers/send-message-with-landmarks-options';

export async function handleLandmarksOption(chatId: ChatId): Promise<void> {
  await sendMessageWithLandmarksOptions(chatId);
}
