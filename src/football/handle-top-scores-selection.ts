import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../bot';
import { getTopScores } from './api/top-scores.api';
import { TopScores } from './utils/types/top-scores.type';

// Function to handle top scores selection
export async function handleTopScoresSelection(chatId: ChatId): Promise<void> {
  try {
    const topScoresData: TopScores[] = await getTopScores();

    if (topScoresData && topScoresData.length > 0) {
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

      bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
    } else {
      bot.sendMessage(chatId, 'Failed to fetch top scorers data.');
    }
  } catch (error) {
    console.error('Error:', error);
    bot.sendMessage(
      chatId,
      'An error occurred while fetching top scorers data.',
    );
  }
}
