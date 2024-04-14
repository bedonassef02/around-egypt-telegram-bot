import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../bot';
import { currencyOptions } from './constants';

// Function to construct currency conversion options
export async function constructCurrencyConversionOptions(
  chatId: ChatId,
): Promise<void> {
  // Splitting currency options into pairs for inline keyboard display
  const inlineKeyboard: { text: string; callback_data: string }[][] = [];
  for (let i = 0; i < currencyOptions.length; i += 2) {
    const line: { text: string; callback_data: string }[] = [];
    line.push(currencyOptions[i]);
    if (i + 1 < currencyOptions.length) {
      line.push(currencyOptions[i + 1]);
    }
    inlineKeyboard.push(line);
  }

  bot.sendMessage(chatId, 'Select a currency:', {
    reply_markup: {
      inline_keyboard: inlineKeyboard,
    },
  });
}
