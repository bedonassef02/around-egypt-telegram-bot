import axios, { AxiosResponse } from 'axios';
import { COUNTRY_STATE_CITY_API_KEY, EGY_CITIES_URL } from '../constants';

export async function getAllCities(): Promise<any> {
  try {
    const response: AxiosResponse<any, any> = await axios.get(EGY_CITIES_URL, {
      headers: {
        'X-CSCAPI-KEY': COUNTRY_STATE_CITY_API_KEY,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error: any) {
    console.error('Error fetching cities:', error.message);
    return null;
  }
}
