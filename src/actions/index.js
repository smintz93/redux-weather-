import axios from 'axios'

const API_KEY = "086fef982e4203eca859ad3f295c9cb8";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// action creator always has to return object.
// has to have a type

export const FETCH_WEATHER = "FETCH_WEATHER"
// in order to keep action types consistent 
export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	
	// pass request as paylaod
	return {
		type: FETCH_WEATHER,
		payload: request

	};	
}

//redux promise allows us to do this