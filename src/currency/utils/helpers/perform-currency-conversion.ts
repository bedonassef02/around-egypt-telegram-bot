import { fetchConversionRate } from '../../api/conversion-rate.api';

export async function performCurrencyConversion(
  fromCurrency: string,
  toCurrency: string,
): Promise<number | null> {
  try {
    const conversionRate: number = await fetchConversionRate(
      fromCurrency,
      toCurrency,
    );
    if (conversionRate) {
      return conversionRate;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching conversion rate:', error);
    return null;
  }
}
