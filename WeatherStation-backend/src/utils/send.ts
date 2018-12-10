import * as express from "express";
import IResponse from "@interfaces/IResponse";

const send: ((res: express.Response, result: IResponse) => void) &
	((res: express.Response, status: number, result: IResponse) => void) = (
	...args
) => {
	let status = 200;
	let res = args[0];
	let result = "";
	switch (args.length) {
		case 2:
			result = args[1];
			break;
		case 3:
			status = args[1];
			result = args[2];
			break;
	}

	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "*");
	if (status) {
		res.status(status);
	}
	res.json(result);
};

export default send;
