import {Router} 						from "express";

import send 							from "@utils/send"
import makeSend 						from "@utils/makeSend";
import makeOk							from "@utils/makeOk";
import makeError						from "@utils/makeError";

import {findByCoordinates, findByName}	from "@models/city";

const router = Router();

router.get('/by-name/:cityName', function(req, res){
	findByName(req.params.cityName).then(data => {
		send(res, makeOk(data))
	}).catch(error => {
		send(res, makeError(error.message))
	})
})
router.get('/by-coordinates/:latt,:long', function(req, res){
	findByCoordinates(req.params.latt, req.params.long).then(data => {
		send(res, makeOk(data))
	}).catch(error => {
		send(res, makeError(error.message))
	})
})

router.use(makeSend(makeOk([])));

export default router;