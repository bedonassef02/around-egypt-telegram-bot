import { ChatId } from 'node-telegram-bot-api';
import { deleteMessage } from './delete-message';
import { handleQueryData } from './handle-query-data';

export async function handleCallbackQuery(query: any): Promise<void> {
  const chatId: ChatId = query.message?.chat.id;
  const data: string = query.data;

  if (!data) return;

  // Delete previous options if message ID is available
  if (query.message?.message_id !== undefined) {
    await deleteMessage(chatId, query.message?.message_id);
  }

  await handleQueryData(chatId, data);
}
