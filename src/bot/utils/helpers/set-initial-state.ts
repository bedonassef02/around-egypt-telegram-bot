import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../../index';
import { initOptions } from './init-options';

export function sendInitialOptions(chatId: ChatId): void {
  bot.sendMessage(chatId, 'Choose an option:', {
    reply_markup: {
      inline_keyboard: initOptions,
    },
  });
}
