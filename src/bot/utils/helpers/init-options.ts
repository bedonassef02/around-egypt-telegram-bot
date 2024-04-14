import { Option } from '../types/option.type';

export const initOptions: Option[][] = [
  [{ text: '⛅️ Weather', callback_data: 'get_weather' }], // Emoji for weather
  [{ text: '💱 Currency', callback_data: 'get_currency' }], // Emoji for currency
  [{ text: '⚽️ Football', callback_data: 'get_football' }], // Emoji for football
  [{ text: '🏰 Landmarks', callback_data: 'get_landmarks' }], // Emoji for landmarks
];
