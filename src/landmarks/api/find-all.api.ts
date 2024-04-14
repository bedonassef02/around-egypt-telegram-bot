import axios, { AxiosResponse } from 'axios';
import { EGY_LANDMARKS_URL } from '../utils/constants';

export async function getAllLandmarks(): Promise<any> {
  try {
    const response: AxiosResponse<any, any> =
      await axios.get(EGY_LANDMARKS_URL);

    return response.data.data;
  } catch (error: any) {
    console.error('Error fetching landmarks:', error.message);
    return null;
  }
}
