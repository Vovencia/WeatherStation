import * as express from "express";
import * as helmet from "helmet";

import api from "@api";
import shield from "@utils/shield";

const isMainModule = /*@if !PROD*/true/*@endif*/ /*@if PROD*/ /*@echo 'false'*/ /*@endif*/;

const apiPort = /*@if !API_PORT*/3001/*@endif*/ /*@echo API_PORT*/;

let app;

if(isMainModule){
	app = express();
	
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});
	
	app.use(helmet());
	app.use(shield());
	app.use(api);
	
	app.listen(apiPort);

} else {
	app = express.Router();

	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	app.use(helmet());
	app.use(shield());
	app.use(api);
}

export default app;