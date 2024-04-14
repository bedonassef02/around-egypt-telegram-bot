import { ChatId } from 'node-telegram-bot-api';
import { handleWeatherOption } from '../../../weather/handle-weather-option';
import { handleWeatherSelection } from '../../../weather/handle-weather-selection';
import { constructCurrencyConversionOptions } from '../../../currency/handle-currency-option';
import { handleCurrencySelection } from '../../../currency/handle-currency-selection';
import { handleFootballOption } from '../../../football/handle-football-option';
import { handleStandingSelection } from '../../../football/handle-standing-selection';
import { handleTeamSelection } from '../../../football/handle-teams-option';
import { handleTeamInfoSelection } from '../../../football/handle-team-info';
import { handleTopScoresSelection } from '../../../football/handle-top-scores-selection';
import { handleLandmarksOption } from '../../../landmarks/handle-landmarks-options';
import { handleLandmarksSelection } from '../../../landmarks/handle-landmark-selection';

export async function handleQueryData(
  chatId: ChatId,
  data: string,
): Promise<void> {
  if (data === 'get_weather') {
    await handleWeatherOption(chatId);
  } else if (data.startsWith('weather_')) {
    await handleWeatherSelection(chatId, data);
  } else if (data === 'get_currency') {
    await constructCurrencyConversionOptions(chatId);
  } else if (data.startsWith('currency_')) {
    await handleCurrencySelection(chatId, data);
  } else if (data === 'get_football') {
    await handleFootballOption(chatId);
  } else if (data === 'football_standing') {
    await handleStandingSelection(chatId);
  } else if (data === 'football_teams') {
    await handleTeamSelection(chatId);
  } else if (data.startsWith('team_')) {
    await handleTeamInfoSelection(chatId, data);
  } else if (data === 'football_top_score') {
    await handleTopScoresSelection(chatId);
  } else if (data === 'get_landmarks') {
    await handleLandmarksOption(chatId);
  } else if (data.startsWith('landmark_')) {
    await handleLandmarksSelection(chatId, data);
  }
}
