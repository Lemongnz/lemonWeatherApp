const FORECAST_API_CALL = "https://api.weatherbit.io/v2.0/forecast/daily?";
const CURRENT_API_CALL = "https://api.weatherbit.io/v2.0/current?";

const API_KEY = "8b51f3ddab3b48c0b6ad120c59b03f73";

const COUNT = 5;

export const getCurrentWeather = async (city) => {
  return fetch(`${CURRENT_API_CALL}city=${city}&key=${API_KEY}`)
    .then((res) => res.json())
    .catch((err) => {
      return undefined;
    });
};

export const getForecastWeather = async (city) => {
  const response = await fetch(
    `${FORECAST_API_CALL}city=${city}&days=${COUNT}&key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};
