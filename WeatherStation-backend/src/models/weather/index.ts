import fetch from "cross-fetch";


export const getWeather = function(cityWoeid: number){
	return fetch(`https://www.metaweather.com/api/location/${ cityWoeid }`).then((res) => {
		return res.json();
	}).then(data => {
		if(data && data.consolidated_weather && data.consolidated_weather.length) return data.consolidated_weather;
		return [];
	})
}