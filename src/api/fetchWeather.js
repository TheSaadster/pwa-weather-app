import axios from "axios";
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "6425b7df947268c09e6e0e80a94bff21";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "imperial",
      APPID: API_KEY,
    },
  });
  return data;
};
