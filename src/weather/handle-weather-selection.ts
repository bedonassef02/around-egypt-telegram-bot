import { ChatId } from 'node-telegram-bot-api';
import { getWeather } from './api/weather.api';
import { bot } from '../bot';

// Function to handle weather selection
export async function handleWeatherSelection(
  chatId: ChatId,
  data: string,
): Promise<void> {
  const [stateId, stateName] = data.split('_').slice(1);
  const weatherData = await getWeather(stateId);

  if (weatherData) {
    bot.sendMessage(
      chatId,
      `Weather in ${stateName}: ${weatherData.description}, ${weatherData.temperature}°C`,
    );
  } else {
    bot.sendMessage(chatId, 'Failed to fetch weather data.');
  }
}
