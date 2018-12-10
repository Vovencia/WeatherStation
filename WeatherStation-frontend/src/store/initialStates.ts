import IStateApp from "@interfaces/IStateApp";
import IStateWeather from "@interfaces/IStateWeather";
import IStateCity from "@interfaces/IStateCity";
import IStateCityChoose from "@interfaces/IStateCityChoose";

export const weatherState: IStateWeather = {
	list: [],
	isLoaded: false,
	loading: false
};

export const appState: IStateApp = {
	loading: 0
};

export const cityState: IStateCity = {
	loading: false,
	loaded: false
};

export const cityChooseState: IStateCityChoose = {
	open: false,
	loading: false,
	result: [],
	query: ""
};
