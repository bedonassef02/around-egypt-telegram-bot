import { Option } from '../bot/utils/types/option.type';

export const keyboard: Option[][] = [
  [{ text: '⚽️ Standing', callback_data: 'football_standing' }], // Option for standing
  [{ text: '👥 Teams', callback_data: 'football_teams' }], // Option for teams
  [{ text: '🏆 Top Score', callback_data: 'football_top_score' }], // Option for top score
  // You can add more rows of options here if needed
];

export const ALL_SPORTS_API_KEY: string = process.env
  .ALL_SPORTS_API_KEY as string;
export const LEAGUE_ID: number = parseInt(process.env.LEAGUE_ID as string);
