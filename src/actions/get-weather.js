export const FETCH_WEATHER_DATA = "FETCH_WEATHER_DATA";

export function fetchWeather(payload) {
  return {
    type: FETCH_WEATHER_DATA,
    payload
  };
}
