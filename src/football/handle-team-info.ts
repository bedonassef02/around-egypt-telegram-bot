import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../bot';
import { getTeamInfo } from './api/team-info.api';
import { TeamInfo } from './utils/types/team-info.stype';
import { formatCoaches } from './utils/helpers/format-coaches';
import { formatPlayers } from './utils/helpers/format-player';

export async function handleTeamInfoSelection(
  chatId: ChatId,
  data: string,
): Promise<void> {
  const teamId: number = parseInt(data.replace('team_', ''));
  try {
    const team: TeamInfo = (await getTeamInfo(teamId))[0];

    if (team) {
      const coachesMessage = await formatCoaches(team);
      const playersMessage = await formatPlayers(team);

      const message = coachesMessage + playersMessage;

      bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
    } else {
      bot.sendMessage(chatId, 'Failed to fetch team data.');
    }
  } catch (error) {
    console.error('Error:', error);
    bot.sendMessage(chatId, 'An error occurred while fetching team data.');
  }
}
