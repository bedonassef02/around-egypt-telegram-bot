import { ChatId } from 'node-telegram-bot-api';
import { bot } from '../bot';
import { getTopScores } from './api/top-scores.api';
import { TopScores } from './utils/types/top-scores.type';
import { formatTopScoresMessage } from './utils/helpers/format-top-scores-message';
import { sendMessageWithTopScores } from './utils/helpers/send-message-with-top-scores';

export async function handleTopScoresSelection(chatId: ChatId): Promise<void> {
  try {
    const topScoresData: TopScores[] = await getTopScores();

    if (topScoresData && topScoresData.length > 0) {
      const message = await formatTopScoresMessage(topScoresData);
      await sendMessageWithTopScores(chatId, message);
    } else {
      await bot.sendMessage(chatId, 'Failed to fetch top scorers data.');
    }
  } catch (error) {
    console.error('Error:', error);
    await bot.sendMessage(
      chatId,
      'An error occurred while fetching top scorers data.',
    );
  }
}
