import api from "@system/api";

export const getWeather = (cityWoeid: (string | number)) => {
	return api(`/weather/${ cityWoeid }`);
}