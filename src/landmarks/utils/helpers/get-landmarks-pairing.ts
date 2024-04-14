import { getAllLandmarks } from '../../api/find-all.api';

export async function getLandmarksPairing(): Promise<
  { text: string; callback_data: string }[][]
> {
  const landmarks = await getAllLandmarks();
  const keyboard = [];
  for (let i = 0; i < landmarks.length; i += 2) {
    const pair = [landmarks[i]];
    if (i + 1 < landmarks.length) {
      pair.push(landmarks[i + 1]);
    }
    keyboard.push(
      pair.map((landmark) => ({
        text: landmark.name,
        callback_data: `landmark_${landmark._id}_${landmark.name}`,
      })),
    );
  }
  return keyboard;
}
