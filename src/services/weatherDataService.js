import axios from "axios";
import { constants } from "../constants";
export const getContryData = (countryname) => {
  return axios.get(`${constants.COUNTRY_FETCH_BASE_URL}name/${countryname}`);
};

export const getContryWeatherData = (capitalName) => {
  return axios.get(
    `${constants.WEATHER_DATA_FETCH_BASE_URL}?access_key=${constants.API_KEY}&query=${capitalName}`
  );
};
