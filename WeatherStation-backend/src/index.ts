import * as express from "express";
import * as helmet from "helmet";

import api from "@api";
import shield from "@utils/shield";

const isMainModule = /*@if !PROD*/true/*@endif*/ /*@if PROD*/ /*@echo 'false'*/ /*@endif*/;

const apiPort = /*@if !API_PORT*/3001/*@endif*/ /*@echo API_PORT*/;

let app;

const applyAppMIddleware = (app) => {
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	app.use(helmet());
	app.use(shield());
	app.use(api);
}

if(isMainModule){
	app = express();

	applyAppMIddleware(app);
	
	app.listen(apiPort);

} else {
	app = express.Router();

	applyAppMIddleware(app);
}

export default app;
