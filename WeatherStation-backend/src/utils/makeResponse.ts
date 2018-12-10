import IResponse from "@interfaces/IResponse";

export default function makeResponse(type: string, value: any): IResponse {
	return {
		type,
		value
	};
}
