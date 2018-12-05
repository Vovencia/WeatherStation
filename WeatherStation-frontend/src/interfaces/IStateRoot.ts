import IStateApp 			from "@interfaces/IStateApp";
import IStateWeather 		from "@interfaces/IStateWeather";
import IStateCity 			from "@interfaces/IStateCity";
import IStateCityChoose		from "@interfaces/IStateCityChoose";

export default interface IStateRoot {
	app: IStateApp,
	weather: IStateWeather,
	city: IStateCity,
	cityChoose: IStateCityChoose,
}