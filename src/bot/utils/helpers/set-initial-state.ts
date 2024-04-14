import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../../index';
import { initOptions } from './init-options';

export function sendInitialOptions(chatId: ChatId): void {
  const message = 'Welcome! Please select an option below:';

  bot.sendMessage(chatId, message, {
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: initOptions,
    },
  });
}
