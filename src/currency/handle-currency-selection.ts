import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../bot';
import { performCurrencyConversion } from './utils/helpers/perform-currency-conversion';
import { formatCurrencyMessage } from './utils/helpers/format-currency-message';
import { sendMessageWithCurrencyConversion } from './utils/helpers/send-message-with-currency-conversion';

export async function handleCurrencySelection(
  chatId: ChatId,
  data: string,
): Promise<void> {
  console.log(data);
  const [fromCurrency, toCurrency] = data.split('_').slice(1);

  try {
    const conversionRate: number | null = await performCurrencyConversion(
      fromCurrency,
      toCurrency,
    );

    if (conversionRate !== null) {
      const message: string = formatCurrencyMessage(
        fromCurrency,
        toCurrency,
        conversionRate,
      );
      await sendMessageWithCurrencyConversion(chatId, message);
    } else {
      await bot.sendMessage(
        chatId,
        'Failed to fetch currency conversion data.',
      );
    }
  } catch (error) {
    console.error('Error handling currency selection:', error);
    await bot.sendMessage(
      chatId,
      'An error occurred while processing your request. Please try again later.',
    );
  }
}
