import fetch from "cross-fetch";


export const findByName = function(name: string){
	return fetch(`https://www.metaweather.com/api/location/search/?query=${ name }`).then((res) => {
		return res.json();
	}).then(data => {
		if(data && data.length) return data;
		return [];
	})
}

export const findByCoordinates = function(latt: number, long: number){
	return fetch(`https://www.metaweather.com/api/location/search/?lattlong=${ latt },${ long }`).then((res) => {
		return res.json();
	}).then(data => {
		if(data && data.length) return data;
		return [];
	}).then(data => {
		return data.sort((a, b) => (
			a.distance - b.distance
		))
	})
}
