import { Player } from '../types/player.type';
import { TeamInfo } from '../types/team-info.stype';
import { getPlayerTypeAbbreviation } from './get-playe-type';

export async function formatPlayers(team: TeamInfo): Promise<string> {
  let playersMessage = '';
  if (team.players.length > 0) {
    playersMessage += '<b>Players:</b>\n\n';
    playersMessage += '<pre>';
    playersMessage += '<b>| # | Name      | Type | Played | Goals |</b>\n';
    playersMessage += '|---|-----------|------|--------|-------|\n';
    team.players.forEach((player: Player): void => {
      const playerName =
        player.player_name.length > 10
          ? player.player_name.substring(0, 7) + '...'
          : player.player_name.padEnd(10);
      const playerNumber: string = player.player_number.toString().padStart(2);
      const playerType: string = getPlayerTypeAbbreviation(
        player.player_type,
      ).padStart(5);
      const playerMatches: string = player.player_match_played
        .toString()
        .padStart(6);
      const playerGoals: string = player.player_goals.toString().padStart(5);
      playersMessage += `| ${playerNumber} | ${playerName} | ${playerType} | ${playerMatches} | ${playerGoals} |\n`;
    });
    playersMessage += '</pre>';
  }
  return playersMessage;
}
