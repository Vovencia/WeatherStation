import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";

import IStateRoot from "@interfaces/IStateRoot";

function AppProgress(props: { visible: boolean }) {
	return props.visible ? (
		<AppProgressStyled>
			<LinearProgress color="secondary" />
		</AppProgressStyled>
	) : null;
}

const AppProgressStyled = styled("div")`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1101;
`;

export default connect(function mapStateToProps(state: IStateRoot) {
	return {
		visible: state.app.loading > 0
	};
})(AppProgress);
