export default interface IWeatherResultItem {
	id: number;
	applicable_date: string;
	weather_state_name: string;
	weather_state_abbr: String;
	wind_speed: number;
	wind_direction: number;
	wind_direction_compass: string;
	min_temp: number;
	max_temp: number;
	the_temp: number;
	air_pressure: number;
	humidity: number;
	visibility: number;
	predictability: number;
}