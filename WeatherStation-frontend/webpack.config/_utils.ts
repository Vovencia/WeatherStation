import * as path from "path"

import {PROD} from "./_config";

export const ROOT = _path(__dirname, '..');

function _path(...args) {
	return path.normalize(path.join(...args));
}

export function root(...args){
	return _path(ROOT, ...args);
}

export function source(...args){
	return root("src", ...args);
}

// export function docs(...args){
// 	return root("dist", ...args);
// }

export function dist(...args){
	return root( PROD ? '../WeatherStation-release/client' : "build", ...args);
}

export function client(...args){
	return source(...args);
}