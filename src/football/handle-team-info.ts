import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../bot';
import { getTeamInfo } from './api/team-info.api';
import { Player } from './utils/types/player.type';
import { Coach } from './utils/types/coach.type';
import { TeamInfo } from './utils/types/team-info.stype';

export async function handleTeamInfoSelection(
  chatId: ChatId,
  data: string,
): Promise<void> {
  const teamId: number = parseInt(data.replace('team_', ''));
  try {
    const team: TeamInfo = (await getTeamInfo(teamId))[0];

    if (team) {
      let message = '<b>Coaches:</b>\n\n';
      message += '<pre>';
      message += '<b>| Name         |</b>\n';
      message += '|--------------|\n';
      team.coaches.forEach((coach: Coach) => {
        const coachName =
          coach.coach_name.length > 10
            ? coach.coach_name.substring(0, 7) + '...'
            : coach.coach_name.padEnd(10);
        message += `| ${coachName} |\n`;
      });
      message += '</pre>';

      if (team.players.length > 0) {
        message += '<b>Players:</b>\n\n';
        message += '<pre>';
        message += '<b>| # | Name      | Type | Played | Goals |</b>\n';
        message += '|---|-----------|------|--------|-------|\n';
        team.players.forEach((player: Player): void => {
          const playerName =
            player.player_name.length > 10
              ? player.player_name.substring(0, 7) + '...'
              : player.player_name.padEnd(10);
          const playerNumber: string = player.player_number
            .toString()
            .padStart(2); // Incremented index to start from 1
          const playerType: string = getPlayerTypeAbbreviation(
            player.player_type,
          ).padStart(5);
          const playerMatches: string = player.player_match_played
            .toString()
            .padStart(6);
          const playerGoals: string = player.player_goals
            .toString()
            .padStart(5);
          message += `| ${playerNumber} | ${playerName} | ${playerType} | ${playerMatches} | ${playerGoals} |\n`;
        });
        message += '</pre>';
      }

      bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
    } else {
      bot.sendMessage(chatId, 'Failed to fetch team data.');
    }
  } catch (error) {
    console.error('Error:', error);
    bot.sendMessage(chatId, 'An error occurred while fetching team data.');
  }
}

// Function to get the abbreviated player type
function getPlayerTypeAbbreviation(playerType: string): string {
  switch (playerType) {
    case 'Forwards':
      return 'FW';
    case 'Defenders':
      return 'DF';
    case 'Goalkeepers':
      return 'GK';
    case 'Midfielders':
      return 'MD';
    default:
      return playerType;
  }
}
