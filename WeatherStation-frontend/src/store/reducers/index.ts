import {combineReducers} 	from "redux";

import IStateRoot			from "@interfaces/IStateRoot";

import appReducer 			from "@reducers/appReducer";
import weatherReducer 		from "@reducers/weatherReducer";
import cityReducer 			from "@reducers/cityReducer";
import cityChooseReducer 			from "@reducers/cityChooseReducer";

const reducers = combineReducers<IStateRoot>({
	app: appReducer,
	weather: weatherReducer,
	city: cityReducer,
	cityChoose: cityChooseReducer,
})

export default reducers;