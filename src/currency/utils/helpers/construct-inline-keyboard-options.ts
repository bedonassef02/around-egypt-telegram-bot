import { currencyOptions } from '../../constants';

export async function constructInlineKeyboardOptions(): Promise<
  { text: string; callback_data: string }[][]
> {
  const inlineKeyboard: { text: string; callback_data: string }[][] = [];
  for (let i = 0; i < currencyOptions.length; i += 2) {
    const line: { text: string; callback_data: string }[] = [];
    line.push(currencyOptions[i]);
    if (i + 1 < currencyOptions.length) {
      line.push(currencyOptions[i + 1]);
    }
    inlineKeyboard.push(line);
  }
  return inlineKeyboard;
}
