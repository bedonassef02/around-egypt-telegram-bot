import { TopScores } from '../types/top-scores.type';

export async function formatTopScoresMessage(
  topScoresData: TopScores[],
): Promise<string> {
  let message = '<b>Top Scorers:</b>\n\n';
  message += '<pre>';
  message += '<b>| # |       Player       | Goals |</b>\n';
  message += '|---|---------------------|-------|\n';
  topScoresData.forEach((player: TopScores, index: number) => {
    const playerNumber = (index + 1).toString().padStart(2);
    const playerName = player.player_name.padEnd(20); // Fixed width for player name
    const playerGoals = player.goals.toString().padStart(5);
    message += `| ${playerNumber} | ${playerName} | ${playerGoals} |\n`;
  });
  message += '</pre>';
  return message;
}
