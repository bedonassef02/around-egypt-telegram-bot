import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../bot';
import { fetchConversionRate } from './api/conversion-rate.api';
import { currencyEmojis } from './constants';

export async function handleCurrencySelection(
  chatId: ChatId,
  data: string,
): Promise<void> {
  console.log(data);
  const [fromCurrency, toCurrency] = data.split('_').slice(1);

  try {
    const conversionRate: number = await fetchConversionRate(
      fromCurrency,
      toCurrency,
    );

    if (conversionRate) {
      // Perform the conversion (assuming amount is 1 unit for simplicity)
      const convertedAmount: number = 1 * conversionRate;

      // Send the result back to the user with fromCurrency displayed first followed by its emoji
      bot.sendMessage(
        chatId,
        `1 ${fromCurrency} ${currencyEmojis[fromCurrency]} equals ${convertedAmount.toFixed(2)} ${currencyEmojis[toCurrency]} ${toCurrency}`,
      );
    } else {
      bot.sendMessage(chatId, 'Failed to fetch currency conversion data.');
    }
  } catch (error) {
    console.error('Error handling currency selection:', error);
    bot.sendMessage(
      chatId,
      'An error occurred while processing your request. Please try again later.',
    );
  }
}
