import * as React 				from "react";
import styled 					from "styled-components";
import * as moment 				from "moment"
import round 					= require("lodash/round")
import startCase				= require("lodash/startCase")

import "moment/locale/ru";

import Card 					from '@material-ui/core/Card';
import CardHeader 				from '@material-ui/core/CardHeader';
import CardMedia 				from '@material-ui/core/CardMedia';
import CardContent 				from '@material-ui/core/CardContent';
import CardActions 				from '@material-ui/core/CardActions';
import Typography 				from '@material-ui/core/Typography';

import IWeatherResultItem 		from "@interfaces/IWeatherResultItem";

type IWeatherItemProps = (IWeatherResultItem & {
	big?: boolean;
	className?:string;
});

class WeatherItem extends React.Component<IWeatherItemProps> {
	render(){
		return (
			<div className={this.props.className}>
				<Card>
					<CardHeader
						avatar={
							<WeatherItemIcon className="weather-item__icon" src={ this.getIcon() } />
						}
						title={<WeatherItemCaption className="weather-item__caption">{this.props.weather_state_name}</WeatherItemCaption>}
						subheader={<WeatherItemCaption className="weather-item__caption">{this.getDate()}</WeatherItemCaption>}
					/>
					<CardContent className="weather-item__content">
						<Typography>
							Тек. темп.: { round(this.props.the_temp, 1) }°C
						</Typography>
						<Typography>
							Мин. темп.: { round(this.props.min_temp, 1) }°C
						</Typography>
						<Typography>
							Макс. темп.: { round(this.props.max_temp, 1) }°C
						</Typography>
						<Typography>
							Ветер: { round(this.props.wind_speed*0.44704, 1) } м/с { this.renderWindIcon() }
						</Typography>
					</CardContent>
				</Card>
			</div>
		)
	}
	getDate(){
		return startCase(moment(this.props.applicable_date).calendar(null,{
			lastDay : '[Вчера]',
			sameDay : '[Сегодня]',
			nextDay : '[Завтра]',
			lastWeek : '[last] dddd',
			nextWeek : 'dddd',
			sameElse : 'L'
		}))
	}
	getIcon(){
		return `https://www.metaweather.com/static/img/weather/${ this.props.weather_state_abbr }.svg`;
	}
	renderWindIcon(){
		return (
			<WeatherItemWindIcon src="https://www.metaweather.com/static/img/windarrow.svg" style={{
				transform: `rotate(${ this.props.wind_direction }deg)`
			}} />
		)
	}
}

const WeatherItemStyled = styled(WeatherItem)`
	min-width: 280px;
	width: 16.666%;
	&,
	.weather-item__caption {
		font-size: ${ (props: IWeatherItemProps) => props.big ? '1.5rem' : '1.2rem' };
		font-weight: ${ (props: IWeatherItemProps) => props.big ? '400' : '500' };
	}
	.weather-item__icon {
		width: ${ (props: IWeatherItemProps) => props.big ? '60px' : '48px' };
	}
	.weather-item__content p {
		font-size: inherit;
	}
`

const WeatherItemIcon = styled("img")`
`

const WeatherItemWindIcon = styled("img")`
	width: 1em;
	display: inline-block;
	vertical-align: middle;
	margin-left: 0.2em;
`

const WeatherItemCaption = styled('span')`
`

export default WeatherItemStyled;