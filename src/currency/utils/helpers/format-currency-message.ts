import { currencyEmojis } from '../../constants';

export function formatCurrencyMessage(
  fromCurrency: string,
  toCurrency: string,
  conversionRate: number,
): string {
  const convertedAmount: number = 1 * conversionRate;
  return `1 ${fromCurrency} ${currencyEmojis[fromCurrency]} equals ${convertedAmount.toFixed(2)} ${currencyEmojis[toCurrency]} ${toCurrency}`;
}
