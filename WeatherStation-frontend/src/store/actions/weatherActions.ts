import { getWeather as weatherGetWeather } from "@models/weather";

export const WEATHER_START_LOADING = "WEATHER_START_LOADING";
export const WEATHER_DONE_LOADING = "WEATHER_DONE_LOADING";

export const getWeather = (cityWoeid: string | number) => {
	return dispatch => {
		dispatch({ type: WEATHER_START_LOADING, value: cityWoeid });
		weatherGetWeather(cityWoeid).then(data => {
			dispatch({ type: WEATHER_DONE_LOADING, value: data });
		});
	};
};
