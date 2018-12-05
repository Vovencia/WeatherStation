import debounce								= require("lodash/debounce");

import {
	loadByName as cityLoadByName
} 													from "@models/city"

export const CITY_CHOOSE_START_LOADING 		= 'CITY_CHOOSE_START_LOADING';
export const CITY_CHOOSE_CANCELED_LOADING 	= 'CITY_CHOOSE_CANCELED_LOADING';
export const CITY_CHOOSE_DONE_LOADING 		= 'CITY_CHOOSE_DONE_LOADING';
export const CITY_CHOOSE_OPEN				= 'CITY_CHOOSE_OPEN';
export const CITY_CHOOSE_CLOSE 				= 'CITY_CHOOSE_CLOSE';


const loadDebounced = (() => {
	let timeout: any;
	let lastCancelHandler: (() => void) = () => {};
	return (handler: () => void, cancelHandler?: () => void) => {
		if(timeout){
			clearTimeout(timeout);
			if(lastCancelHandler) lastCancelHandler();
		}
		lastCancelHandler = cancelHandler;

		timeout = setTimeout(() => {
			timeout = null;
			handler();
		}, 500);
	}
})();

export const load = (query: string) => {
	return (dispatch) => {
		dispatch({type: CITY_CHOOSE_START_LOADING, value: query});
		loadDebounced(() => {
			cityLoadByName(query)
				.then(data => {
					dispatch({type: CITY_CHOOSE_DONE_LOADING, value: data});
				}).catch(e => {
					dispatch({type: CITY_CHOOSE_DONE_LOADING, value: []});
				})
		}, () => {
			dispatch({type: CITY_CHOOSE_CANCELED_LOADING, value: query});
		})
	}
}

export const open = () => {
	return {
		type: CITY_CHOOSE_OPEN
	}
}

export const close = () => {
	return {
		type: CITY_CHOOSE_CLOSE
	}
}