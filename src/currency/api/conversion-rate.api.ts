import axios from 'axios';
import { CURRENCY_FREAKS_API_KEY } from '../constants';

// Function to fetch currency conversion rate from the CurrencyFreaks API
export async function fetchConversionRate(
  fromCurrency: string,
  toCurrency: string,
): Promise<any> {
  try {
    // Construct the URL with the provided API key and symbols
    const apiUrl: string = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${CURRENCY_FREAKS_API_KEY}&symbols=${fromCurrency},${toCurrency}`;

    // Make an HTTP GET request to the CurrencyFreaks API
    const response = await axios.get(apiUrl);

    // Extract the conversion rate from the response data
    const rates = response.data.rates;
    const conversionRate: number = rates[toCurrency] / rates[fromCurrency];

    // Return the conversion rate
    return conversionRate;
  } catch (error) {
    // If an error occurs during the API request, handle it gracefully
    console.error('Error fetching conversion rate:', error);
    return null; // Return null or another default value to indicate failure
  }
}
