import axios from 'axios'; 
const apiKey = '6a78596d062df78380eff5944c4e5567';
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}`;
export const FETCH_WEATHER='FETCH_WEATHER'; 
export function fetchWeather(city){
    const url=`${rootUrl}&q=${city}`;
    const request = axios.get(url);
    return{
    type: FETCH_WEATHER,
    payload:request
    };
}