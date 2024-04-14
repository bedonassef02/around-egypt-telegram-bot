import { ChatId, InlineKeyboardMarkup } from 'node-telegram-bot-api'; // Import InlineKeyboardMarkup
import { bot } from '../bot';
import { getTeams } from './api/teams.api';
import { Team } from './utils/types/team.type';
import { chunkArray } from './utils/helpers/chuck-array';

// Function to handle team selection
export async function handleTeamSelection(chatId: ChatId): Promise<void> {
  try {
    const teams: Team[] = await getTeams();

    if (teams && teams.length > 0) {
      const keyboard = {
        inline_keyboard: chunkArray(teams, 2).map((chunk) =>
          chunk.map((team) => ({
            text: team.team_name,
            callback_data: `team_${team.team_key}`, // You can replace this with a unique identifier for each team
          })),
        ),
      };

      const options = {
        reply_markup: keyboard as InlineKeyboardMarkup, // Cast keyboard to InlineKeyboardMarkup
      };

      bot.sendMessage(chatId, 'Please select a team:', options);
    } else {
      bot.sendMessage(chatId, 'Failed to fetch team data.');
    }
  } catch (error) {
    console.error('Error:', error);
    bot.sendMessage(chatId, 'An error occurred while fetching team data.');
  }
}
