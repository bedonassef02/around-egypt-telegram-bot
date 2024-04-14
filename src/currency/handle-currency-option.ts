import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../bot';
import { constructInlineKeyboardOptions } from './utils/helpers/construct-inline-keyboard-options';
import { sendMessageWithInlineKeyboard } from './utils/helpers/send-message-with-inline-keyboard';

export async function constructCurrencyConversionOptions(
  chatId: ChatId,
): Promise<void> {
  try {
    const inlineKeyboardOptions = await constructInlineKeyboardOptions();
    const messageOptions = {
      reply_markup: {
        inline_keyboard: inlineKeyboardOptions,
      },
    };
    await sendMessageWithInlineKeyboard(chatId, messageOptions);
  } catch (error) {
    console.error('Error constructing currency conversion options:', error);
    await bot.sendMessage(
      chatId,
      'An error occurred while processing your request. Please try again later.',
    );
  }
}
