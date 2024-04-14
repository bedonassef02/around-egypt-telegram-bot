import { ChatId } from 'node-telegram-bot-api';
import { handleSuccessfulStandingFetch } from './utils/helpers/handle-successful-standing-fetch';

// Function to handle standing selection
export async function handleStandingSelection(chatId: ChatId): Promise<void> {
  await handleSuccessfulStandingFetch(chatId);
}
