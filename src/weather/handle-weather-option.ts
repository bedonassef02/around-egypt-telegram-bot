import { ChatId } from 'node-telegram-bot-api';
import { getAllCities } from '../cities/api/cities.api';
import { bot } from '../bot';

// Function to handle weather option
export async function handleWeatherOption(chatId: ChatId): Promise<void> {
  const states = await getAllCities();
  const keyboard = states.map((state: any) => [
    { text: state.name, callback_data: `weather_${state.id}_${state.name}` },
  ]);

  bot.sendMessage(chatId, 'Select a state:', {
    reply_markup: {
      inline_keyboard: keyboard,
    },
  });
}
