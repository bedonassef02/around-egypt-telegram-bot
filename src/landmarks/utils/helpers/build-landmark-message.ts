import { Landmark } from '../types/landmark.type';

export async function buildLandmarkMessage(
  landmarkData: Landmark,
): Promise<string> {
  let message = `<b>${landmarkData.name}</b>\n\n`;
  message += `<b>Description:</b>\n${landmarkData.description}\n\n`;
  message += `<b>Era:</b> ${landmarkData.era}\n`;
  message += `<b>Famous Figures:</b> ${landmarkData.famous_figures}\n`;
  message += `<b>Location:</b> ${landmarkData.location.name} (${landmarkData.location.latitude}, ${landmarkData.location.longitude})\n`;
  message += `<b>City:</b> ${landmarkData.city.name}\n`;
  message += `<b>Tags:</b> ${landmarkData.tags.map((tag) => tag.name).join(', ')}\n`;
  message += `<b>Price:</b> ${landmarkData.price}\n`;
  message += `<b>Opening Hours:</b> ${landmarkData.opening_hours}\n`;
  message += `<b>Is Recommended:</b> ${landmarkData.is_recommended ? 'Yes' : 'No'}`;
  return message;
}
