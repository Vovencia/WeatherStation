import * as React 				from "react";
import styled, {createGlobalStyle} 					from "styled-components";
import {Switch, Route} 			from "react-router-dom"
import {connect}				from "react-redux";

import Header 					from "@components/Header";
import Footer 					from "@components/Footer";

import Weather 					from "@containers/Weather"
import AppProgress 				from "@containers/AppProgress"
import ModalCityChoose			from "@containers/ModalCityChoose"

const GlobalStyle = createGlobalStyle`
	html {
		background: #fafafa;
	}
	body, #root, #root-placeholder{
		height: auto;
		min-height: 100%;
	}
	*,
	&:before,
	&:after {
		box-sizing: padding-box;
		box-sizing: border-box;
	}
`

function Layout(props){
	return (
		<LayoutStyled>
			<GlobalStyle />
			<AppProgress />
			<Header />
			<LayoutContent>
				<Switch>
					<Route exact path="/" component={Weather} />
					<Route exact path="/:city/" component={Weather} />
					<Route exact path="/:city/:range/" component={Weather} />
				</Switch>
			</LayoutContent>
			<Footer />
			<ModalCityChoose />
		</LayoutStyled>
	)
}

const LayoutStyled = styled("div")`
	display: flex;
	flex-direction: column;
`

export default Layout
const LayoutContent = styled("div")`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	flex-shrink: 0;
`