import { ChatId } from 'node-telegram-bot-api';
import { getStanding } from '../../api/standing.api';
import { StandingTeam } from '../types/standing-team.type';
import { bot } from '../../../bot';
import { formatStandingData } from './format-standing-data';

// Function to handle successful fetching of standing data
export async function handleSuccessfulStandingFetch(
  chatId: ChatId,
): Promise<void> {
  try {
    const standingData: StandingTeam[] = await getStanding();
    if (standingData && standingData.length > 0) {
      const message = formatStandingData(standingData);
      bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
    } else {
      bot.sendMessage(chatId, 'Failed to fetch Standing data.');
    }
  } catch (error) {
    console.error('Error:', error);
    bot.sendMessage(chatId, 'An error occurred while fetching Standing data.');
  }
}
