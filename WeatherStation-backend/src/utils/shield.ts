import * as express from "express";

import send from "@utils/send";
import makeError from "@utils/makeError";
import makeOk from "@utils/makeOk";

let storage = {};
const requestCount = 20;
const resetDelay = 3000;

export default () => function requestShield(req: express.Request, res: express.Response, next: express.NextFunction){
	var ip = ((req.headers['x-forwarded-for'] || req.connection.remoteAddress).toString())[1];

	if(!storage[ip]) storage[ip] = 0;
	storage[ip]++;

	if(storage[ip] >= requestCount){
		storage[ip] = requestCount;
		send(res, 429, makeError("Too Many Requests"));
		return;
	}

	next();
}

setInterval(()=>{
	storage = {};
}, resetDelay);