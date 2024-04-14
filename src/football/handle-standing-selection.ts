import { ChatId } from 'node-telegram-bot-api';
import { getStanding } from './api/standing.api';
import { bot } from '../bot';
import { StandingTeam } from './utils/types/standing-team.type';

// Function to handle standing selection
export async function handleStandingSelection(chatId: ChatId): Promise<void> {
  try {
    const standingData: StandingTeam[] = await getStanding();

    if (standingData && standingData.length > 0) {
      let message = '<b>Standing Data:</b>\n\n';
      message += '<pre>';
      message += '<b>| # |     Team      | Pts |  W  |  D  |  L  |</b>\n';
      message += '|---|----------------|-----|-----|-----|-----|\n';
      standingData.forEach((team: StandingTeam) => {
        const teamName =
          team.standing_team.length > 13
            ? team.standing_team.substring(0, 10) + '...'
            : team.standing_team.padEnd(13);
        message += `| ${team.standing_place.toString().padStart(2)} | ${teamName} | ${team.standing_PTS.toString().padStart(3)} | ${team.standing_W.toString().padStart(2)} | ${team.standing_D.toString().padStart(2)} | ${team.standing_L.toString().padStart(2)} |\n`;
      });
      message += '</pre>';

      bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
    } else {
      bot.sendMessage(chatId, 'Failed to fetch Standing data.');
    }
  } catch (error) {
    console.error('Error:', error);
    bot.sendMessage(chatId, 'An error occurred while fetching Standing data.');
  }
}
