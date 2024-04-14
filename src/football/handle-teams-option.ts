import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../bot';
import { getTeams } from './api/teams.api';
import { Team } from './utils/types/team.type';
import { createKeyboardMarkup } from './utils/helpers/create-keyboard-markup';
import { sendMessageWithKeyboard } from './utils/helpers/sen-message-wit-keyboard';

export async function handleTeamSelection(chatId: ChatId): Promise<void> {
  try {
    const teams: Team[] = await getTeams();

    if (teams && teams.length > 0) {
      const keyboard = await createKeyboardMarkup(teams);
      await sendMessageWithKeyboard(chatId, 'Please select a team:', keyboard);
    } else {
      bot.sendMessage(chatId, 'Failed to fetch team data.');
    }
  } catch (error) {
    console.error('Error:', error);
    bot.sendMessage(chatId, 'An error occurred while fetching team data.');
  }
}
