import axios from 'axios';
import { ALL_SPORTS_API_KEY, LEAGUE_ID } from '../constants';

export async function getTopScores(): Promise<any> {
  try {
    const response = await axios.get(
      `https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=${LEAGUE_ID}&APIkey=${ALL_SPORTS_API_KEY}`,
    );

    return response.data.result;
  } catch (error: any) {
    console.error('Error fetching Standing:', error.message);
    return null;
  }
}
