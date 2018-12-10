import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";

import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

import IStateRoot from "@interfaces/IStateRoot";
import IStateWeather from "@interfaces/IStateWeather";
import IWeatherResultItem from "@interfaces/IWeatherResultItem";

import { open as cityChooseOpen } from "@actions/cityChooseActions";
import { getWeather } from "@actions/weatherActions";

import WeatherItem from "@components/WeatherItem";

type IWeatherProps = IStateWeather &
	RouteComponentProps & {
		cityChooseOpen;
		getWeather;
		showLoading: boolean;
		selectedCity: number;
		selectedCityTitle: string;
	};

class Weather extends React.Component<IWeatherProps> {
	render() {
		return (
			<WeatherStyled>
				<Typography variant="h1" align="center">
					{this.props.selectedCityTitle ? (
						`Погода в городе ${this.props.selectedCityTitle}`
					) : (
						<span>&nbsp;</span>
					)}
				</Typography>
				{this.props.showLoading ? (
					<WeatherContentWrapper>
						<CircularProgress />
					</WeatherContentWrapper>
				) : this.props.isLoaded ? (
					this.renderItems(this.props.list)
				) : (
					this.renderButtonLoad()
				)}
			</WeatherStyled>
		);
	}
	renderButtonLoad() {
		return (
			<WeatherContentWrapper>
				<Button
					onClick={this.handlerButtonLoad}
					variant="contained"
					color="primary"
					size="large"
				>
					{this.props.selectedCity
						? "Получить прогноз погоды"
						: "Выбрать город"}
				</Button>
			</WeatherContentWrapper>
		);
	}
	renderItems(items: IWeatherResultItem[]) {
		return (
			<WeatherItems>
				{items.map((item, index) => (
					<WeatherItem
						key={item.applicable_date}
						big={index === 0}
						{...item}
					/>
				))}
			</WeatherItems>
		);
	}
	handlerButtonLoad = (e: React.MouseEvent) => {
		if (this.props.selectedCity) {
			this.props.getWeather(this.props.selectedCity);
		} else {
			this.props.cityChooseOpen();
		}
	};
	componentDidUpdate(prevProps: IWeatherProps) {
		if (!this.props.isLoaded) return;
		if (this.props.selectedCity == prevProps.selectedCity) return;
		this.props.getWeather(this.props.selectedCity);
	}
}

const WeatherStyled = styled("div")`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin: 100px 20px;
`;

const WeatherContentWrapper = styled("div")`
	display: flex;
	flex-grow: 1;
	align-items: center;
	justify-content: center;
`;

const WeatherItems = styled("div")`
	display: flex;
	margin: 30px 0;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
	> * {
		padding: 10px;
	}
`;

const mapStateToProps = (state: IStateRoot) => {
	return {
		...state.weather,
		selectedCity: state.city.woeid,
		selectedCityTitle: state.city.title,
		showLoading: state.city.loading || state.weather.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		cityChooseOpen: () => dispatch(cityChooseOpen()),
		getWeather: (cityWoeid: string | number) =>
			dispatch(getWeather(cityWoeid))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Weather);
