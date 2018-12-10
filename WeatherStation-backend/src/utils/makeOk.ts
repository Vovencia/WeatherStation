import makeResponse from "@utils/makeResponse";

export default function makeOk(value) {
	return makeResponse("ok", value);
}
