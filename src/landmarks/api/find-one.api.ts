import axios, { AxiosResponse } from 'axios';
import { EGY_LANDMARKS_URL } from '../utils/constants';

export async function getLandmark(id: string): Promise<any> {
  try {
    const response: AxiosResponse<any, any> = await axios.get(
      `${EGY_LANDMARKS_URL}/${id}`,
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching landmark:', error.message);
    return null;
  }
}
