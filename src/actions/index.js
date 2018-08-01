import axios from "axios"


const API_KEY = "5d7130c7a8e2eb2086b6e6cc1d63b77c";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = "FETCH_WEATHER"

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)


  return{
    type: FETCH_WEATHER,
    payload: request
  }
}
