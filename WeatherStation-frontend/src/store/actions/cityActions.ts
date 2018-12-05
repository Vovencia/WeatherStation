import ICityResultItem 					from "@interfaces/ICityResultItem";

import {
	loadByCoordinates as cityLoadByCoordinates,
	loadByName as cityLoadByName
} 										from "@models/city"

export const CITY_START_LOADING = 'CITY_START_LOADING';
export const CITY_DONE_LOADING = 'CITY_DONE_LOADING';
export const CITY_SET = 'CITY_SET';

export const loadByName = (name: string) => {
	return (dispatch) => {
		dispatch({type: CITY_START_LOADING, value: {type: 'byName', name}});
		cityLoadByName(name)
			.then(data => {
				loaded(dispatch, data);
			}).catch(e => {
				loaded(dispatch, []);
			})
	}
}

export const loadByCoordinates = (latt: number, lang: number) => {
	return (dispatch) => {
		dispatch({type: CITY_START_LOADING, value: {type: 'byCoordinates', latt, lang}});
		cityLoadByCoordinates(latt, lang)
			.then(data => {
				loaded(dispatch, data);
			}).catch(e => {
				loaded(dispatch, []);
			})
	}
}

const loaded = (dispatch, value) => {
	dispatch({type: CITY_DONE_LOADING, value});
	dispatch(setCity(value[0] || null))
}

export const setCity = (city: ICityResultItem) => {
	return {
		type: CITY_SET,
		value: city,
	}
}