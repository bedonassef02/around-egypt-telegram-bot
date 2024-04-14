import { Option } from '../bot/utils/types/option.type';

export const CURRENCY_FREAKS_API_KEY: string = process.env
  .CURRENCY_FREAKS_API_KEY as string;

export const currencyEmojis: Record<string, string> = {
  EGP: '🇪🇬',
  USD: '🇺🇸',
  SAR: '🇸🇦',
  AED: '🇦🇪',
  QAR: '🇶🇦',
  EUR: '🇪🇺',
  GBP: '🇬🇧',
  JPY: '🇯🇵',
  CAD: '🇨🇦',
};

export const currencyOptions: Option[] = [
  { text: '🇪🇬 EGP to 🇺🇸 USD', callback_data: 'currency_EGP_USD' },
  { text: '🇺🇸 USD to 🇪🇬 EGP', callback_data: 'currency_USD_EGP' },
  { text: '🇪🇬 EGP to 🇸🇦 SAR', callback_data: 'currency_EGP_SAR' },
  { text: '🇸🇦 SAR to 🇪🇬 EGP', callback_data: 'currency_SAR_EGP' },
  { text: '🇪🇬 EGP to 🇦🇪 AED', callback_data: 'currency_EGP_AED' },
  { text: '🇦🇪 AED to 🇪🇬 EGP', callback_data: 'currency_AED_EGP' },
  { text: '🇪🇬 EGP to 🇶🇦 QAR', callback_data: 'currency_EGP_QAR' },
  { text: '🇶🇦 QAR to 🇪🇬 EGP', callback_data: 'currency_QAR_EGP' },
  { text: '🇪🇬 EGP to 🇪🇺 EUR', callback_data: 'currency_EGP_EUR' },
  { text: '🇪🇺 EUR to 🇪🇬 EGP', callback_data: 'currency_EUR_EGP' },
  { text: '🇪🇬 EGP to 🇬🇧 GBP', callback_data: 'currency_EGP_GBP' },
  { text: '🇬🇧 GBP to 🇪🇬 EGP', callback_data: 'currency_GBP_EGP' },
  { text: '🇪🇬 EGP to 🇯🇵 JPY', callback_data: 'currency_EGP_JPY' },
  { text: '🇯🇵 JPY to 🇪🇬 EGP', callback_data: 'currency_JPY_EGP' },
  { text: '🇪🇬 EGP to 🇨🇦 CAD', callback_data: 'currency_EGP_CAD' },
  { text: '🇨🇦 CAD to 🇪🇬 EGP', callback_data: 'currency_CAD_EGP' },
];
