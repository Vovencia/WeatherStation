import makeResponse from "@utils/makeResponse";


export default function makeError(value){
	return makeResponse("error", {
		message: value,
	});
}