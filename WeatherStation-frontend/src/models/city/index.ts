import api from "@system/api";

export const loadByName = (name: string) => {
	return api(`/city/by-name/${ name }`);
}

export const loadByCoordinates = (latt: number, lang: number) => {
	return api(`/city/by-coordinates/${ latt },${ lang }`);
}