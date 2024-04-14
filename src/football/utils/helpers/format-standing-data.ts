import { StandingTeam } from '../types/standing-team.type';

export function formatStandingData(standingData: StandingTeam[]): string {
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
  return message;
}
