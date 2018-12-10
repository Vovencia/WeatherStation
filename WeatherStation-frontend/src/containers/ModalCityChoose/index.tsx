import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Menu from "@material-ui/core/Menu";
import CircularProgress from "@material-ui/core/CircularProgress";

import IStateRoot from "@interfaces/IStateRoot";
import IStateCityChoose from "@interfaces/IStateCityChoose";
import ICityResultItem from "@interfaces/ICityResultItem";

import {
	close as cityChooseClose,
	load as cityCooseLoad
} from "@actions/cityChooseActions";

import { setCity } from "@actions/cityActions";

class ModalCityChoose extends React.Component<
	React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> &
		IStateCityChoose & {
			cityChooseClose;
			cityCooseLoad;
			setCity;
			currentCity: number;
		}
> {
	render() {
		return (
			<Dialog
				open={this.props.open}
				scroll={"paper"}
				aria-labelledby="scroll-dialog-title"
				className={this.props.className}
				fullWidth
				maxWidth={"xs"}
			>
				<DialogTitle id="scroll-dialog-title">Выбор города</DialogTitle>
				<DialogContent>
					<TextField
						label="Название города"
						value={this.props.query}
						onChange={this.onInputChange}
						margin="normal"
						variant="outlined"
						fullWidth
						InputProps={{
							endAdornment: (
								<InputAdornment position="start">
									{this.props.loading ? (
										<CircularProgress size={24} />
									) : (
										""
									)}
								</InputAdornment>
							)
						}}
					/>
					{this.renderList()}
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => this.props.cityChooseClose()}
						color="primary"
					>
						Закрыть
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
	onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.props.cityCooseLoad(e.target.value);
	};
	renderList() {
		return (
			<MenuList style={{ height: "200px", overflow: "auto" }}>
				{this.props.result.map(item => (
					<MenuItem
						onClick={e => this.handlerCityClick(e, item)}
						key={item.woeid}
						selected={item.woeid === this.props.currentCity}
					>
						{item.title}
					</MenuItem>
				))}
			</MenuList>
		);
	}
	handlerCityClick = (e: React.MouseEvent, item: ICityResultItem) => {
		this.props.setCity(item);
		this.props.cityChooseClose();
	};
}

const mapStateToProps = (state: IStateRoot) => {
	return {
		...state.cityChoose,
		currentCity: state.city.woeid
	};
};

const mapDispatchToProps = dispatch => {
	return {
		cityChooseClose: () => dispatch(cityChooseClose()),
		cityCooseLoad: (query: string) => dispatch(cityCooseLoad(query)),
		setCity: (city: ICityResultItem) => dispatch(setCity(city))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ModalCityChoose);
