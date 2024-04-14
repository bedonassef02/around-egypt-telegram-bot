import axios from 'axios';

import { ALL_SPORTS_API_KEY, LEAGUE_ID } from '../constants';

export async function getTeamInfo(teamId: number): Promise<any> {
  try {
    const response = await axios.get(
      `https://apiv2.allsportsapi.com/football/?&met=Teams&leagueId=${LEAGUE_ID}&APIkey=${ALL_SPORTS_API_KEY}&teamId=${teamId}`,
    );

    return response.data.result;
  } catch (error: any) {
    console.error('Error fetching Standing:', error.message);
    return null;
  }
}
