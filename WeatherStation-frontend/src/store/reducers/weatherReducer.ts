import {weatherState} from "@store/initialStates";

import {WEATHER_START_LOADING, WEATHER_DONE_LOADING} from "@actions/weatherActions"

export default function weatherReducer (state = weatherState, action){
	switch(action.type){
		case WEATHER_START_LOADING:
			state = {
				...state,
				loading: true,
			}
		break;
		case WEATHER_DONE_LOADING:
			state = {
				...state,
				loading: false,
				isLoaded: true,
				list: action.value,
			}
		break;
	}
	return state;
}