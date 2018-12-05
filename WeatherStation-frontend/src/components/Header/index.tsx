import * as React	from "react"
import styled		from "styled-components"

import AppBar 		from '@material-ui/core/AppBar';
import Toolbar 		from '@material-ui/core/Toolbar';
import Typography	from '@material-ui/core/Typography';

import CityButton 	from "@containers/CityButton"

export default function Header(){
	return (
		<AppBar position="static">
			<Toolbar>
				<HeaderTitle variant="h6" color="inherit">
					Weather Station
				</HeaderTitle>
				<CityButton />
			</Toolbar>
		</AppBar>
	)
}

const HeaderTitle = styled((props) => <Typography {...props} />)`
	flex-grow: 1;
`