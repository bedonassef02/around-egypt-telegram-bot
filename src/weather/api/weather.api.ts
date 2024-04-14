import axios from 'axios';

const OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY as string;

// Function to fetch weather data
export async function getWeather(cityName: string): Promise<any> {
  try {
    // Make a GET request to the OpenWeatherMap API
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${OPEN_WEATHER_MAP_API_KEY}&units=metric`,
    );

    // Extract relevant data from the response
    const weatherData = {
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
    };

    return weatherData;
  } catch (error: any) {
    console.error('Error fetching weather data:', error.message);
    return null;
  }
}
