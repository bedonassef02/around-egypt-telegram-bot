import { Coach } from '../types/coach.type';
import { TeamInfo } from '../types/team-info.stype';

export async function formatCoaches(team: TeamInfo): Promise<string> {
  let coachesMessage = '<b>Coaches:</b>\n\n';
  coachesMessage += '<pre>';
  coachesMessage += '<b>| Name         |</b>\n';
  coachesMessage += '|--------------|\n';
  team.coaches.forEach((coach: Coach) => {
    const coachName =
      coach.coach_name.length > 10
        ? coach.coach_name.substring(0, 7) + '...'
        : coach.coach_name.padEnd(10);
    coachesMessage += `| ${coachName} |\n`;
  });
  coachesMessage += '</pre>';
  return coachesMessage;
}
