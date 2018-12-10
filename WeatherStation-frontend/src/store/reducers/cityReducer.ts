import { cityState } from "@store/initialStates";
import {
	CITY_START_LOADING,
	CITY_DONE_LOADING,
	CITY_SET
} from "@actions/cityActions";

import ICityResultItem from "@interfaces/ICityResultItem";

export default function cityReducer(state = cityState, action) {
	switch (action.type) {
		case CITY_START_LOADING:
			state = {
				...state,
				loading: true
			};
			break;
		case CITY_DONE_LOADING:
			state = {
				...state,
				loading: false
			};
			break;
		case CITY_SET:
			let city: ICityResultItem = action.value;
			state = {
				...state,
				loaded: !!city,
				title: city ? city.title : "",
				woeid: city ? city.woeid : 0
			};
			break;
	}
	return state;
}
