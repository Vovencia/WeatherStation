import {cityChooseState} 			from "@store/initialStates";
import {
	CITY_CHOOSE_START_LOADING,
	CITY_CHOOSE_DONE_LOADING,
	CITY_CHOOSE_OPEN,
	CITY_CHOOSE_CLOSE,
} 									from "@actions/cityChooseActions";

import ICityResultItem 				from "@interfaces/ICityResultItem"

export default function cityChooseReducer (state = cityChooseState, action){
	switch(action.type){
		case CITY_CHOOSE_START_LOADING:
			state = {
				...state,
				loading: true,
				query: action.value,
			}
		break;
		case CITY_CHOOSE_DONE_LOADING:
			const cities: (ICityResultItem[]) = Array.isArray(action.value) ? action.value : [];
			state = {
				...state,
				loading: false,
				result: cities,
			}
		break;
		case CITY_CHOOSE_OPEN:
			state = {
				...state,
				open: true,
			}
		break;
		case CITY_CHOOSE_CLOSE:
			state = {
				...state,
				open: false,
			}
		break;
	}
	return state;
}