import * as React 		from "react";
import {compose} 		from "redux";
import {
	connect,
	DispatchProp,
}						from "react-redux";
import {
	withSnackbar,
	InjectedNotistackProps
} 						from 'notistack';
import {
	ThunkDispatch
} 						from "redux-thunk";

import Button  			from '@material-ui/core/Button';
import LocationCity 	from "@material-ui/icons/LocationCity"
import CircularProgress	from "@material-ui/core/CircularProgress"

import IStateRoot 		from "@interfaces/IStateRoot"
import IStateCity 		from "@interfaces/IStateCity"

import {
	loadByName as cityLoadByName,
	loadByCoordinates as cityLoadByCoordinates
} 						from "@actions/cityActions"

import {
	open as cityChooseOpen
} 						from "@actions/cityChooseActions"


declare var ymaps: any;

class CityButton extends React.Component<
	InjectedNotistackProps & IStateCity & {
		cityLoadByName;
		cityLoadByCoordinates;
		cityChooseOpen;
	}
, {
	loading: boolean;
}> {
	state = {
		loading: false,
	}
	render(){
		return (
			<Button variant="contained" color="default" onClick={ () => this.props.cityChooseOpen() }>
				{this.state.loading || this.props.loading ? <CircularProgress size={24} /> : <LocationCity />}
				&nbsp;
				{this.props.loaded && this.props.title ? this.props.title : 'Выбрать город'}
			</Button>
		)
	}
	async getGeolocation(){
		this.setState({
			loading: true,
		})
		await ymaps.ready();

		try {
			let location = await ymaps.geolocation.get();
			location = location.geoObjects.position;
			this.props.cityLoadByCoordinates(location[0], location[1]);
		} catch(e){
			this.props.enqueueSnackbar(e.message, {
				variant: 'error'
			});
		}
		this.setState({
			loading: false,
		})
	}
	componentDidMount(){
		this.getGeolocation();
	}
}

function mapStateToProps(state: IStateRoot){
	return state.city
}
function mapDispatchToProps(dispatch: ThunkDispatch<IStateRoot, undefined, any>){
	return {
		cityLoadByName: (name: string) => dispatch(cityLoadByName(name)),
		cityLoadByCoordinates: (latt: number, lang: number) => dispatch(cityLoadByCoordinates(latt, lang)),
		cityChooseOpen: () => dispatch(cityChooseOpen())
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withSnackbar
)(CityButton)