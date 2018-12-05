import * as express 	from "express";

import IResponse 		from "@interfaces/IResponse"
import send 			from "@utils/send";

export default function makeSend(result: IResponse, status?: number){
	return function(req: express.Request, res: express.Response){
		if(status){
			send(res, status, result);
		} else {
			send(res, result);
		}
	}
}