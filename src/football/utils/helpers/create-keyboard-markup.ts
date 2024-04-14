import { InlineKeyboardMarkup } from 'node-telegram-bot-api';
import { Team } from '../types/team.type';
import { chunkArray } from './chuck-array';

export async function createKeyboardMarkup(
  teams: Team[],
): Promise<InlineKeyboardMarkup> {
  const keyboard = {
    inline_keyboard: chunkArray(teams, 2).map((chunk) =>
      chunk.map((team) => ({
        text: team.team_name,
        callback_data: `team_${team.team_key}`, // You can replace this with a unique identifier for each team
      })),
    ),
  };
  return keyboard as InlineKeyboardMarkup;
}
