import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../bot';
import { keyboard } from './constants';

export async function handleFootballOption(chatId: ChatId): Promise<void> {
  bot.sendMessage(chatId, 'Select an option:', {
    reply_markup: {
      inline_keyboard: keyboard,
    },
  });
}
