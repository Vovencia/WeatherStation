import { Router } from "express";

import send from "@utils/send";
import makeSend from "@utils/makeSend";
import makeOk from "@utils/makeOk";
import makeError from "@utils/makeError";

import { getWeather } from "@models/weather";

const router = Router();

router.get("/:cityWoeid", function(req, res) {
	getWeather(req.params.cityWoeid)
		.then(data => {
			send(res, makeOk(data));
		})
		.catch(error => {
			console.error(error);
			send(res, makeError(error.message));
		});
});

router.use(makeSend(makeOk([])));

export default router;
