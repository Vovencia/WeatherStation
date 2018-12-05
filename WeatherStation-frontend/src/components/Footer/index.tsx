import * as React	from "react"
import AppBar 		from '@material-ui/core/AppBar';
import Toolbar 		from '@material-ui/core/Toolbar';
import Typography 	from '@material-ui/core/Typography';

export default function Footer(){
	return (
		<AppBar position="static" color="default">
			<Toolbar>
				<Typography variant="h6" color="inherit" align="right" style={{width: '100%'}}>
					Powered with <a href="https://www.metaweather.com/" target="_blank" rel="nofollow">MetaWeather.com</a>
				</Typography>
			</Toolbar>
		</AppBar>
	)
}