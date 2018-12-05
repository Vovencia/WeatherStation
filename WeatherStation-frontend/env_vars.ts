export const ENV 		= process.env.NODE_ENV == 'production' 	? 'production' 	: 'development';
export const MODE 		= process.env.RUN_MODE == 'build' 		? 'build' 		: 'dev';

export const BUILD 		= MODE == 'build';
export const DEV 		= ENV == 'development';
export const PROD 		= ENV == 'production';

export const WATCH 		= MODE == 'dev';
export const SERVER 	= MODE == 'dev';
export const DEV_PORT 	= 30 * 1000;
export const API_PORT	= 30 * 1000 + 1;
export const DEV_URL	= `http://localhost:${ DEV_PORT }/`;

export const API_DEV_URL = `http://localhost:${ API_PORT }/`;

export const API_URL = PROD ? '/api/' : API_DEV_URL;

const _preprocessorOptions:any = {
	MODE,
	ENV,
	DEV,
	BUILD,
	PROD,
	WATCH,
	SERVER,
	DEV_PORT,
	API_PORT,
	DEV_URL,
	API_DEV_URL,
	API_URL,
}


export const preprocessorOptions =  Object.keys(_preprocessorOptions).reduce((result, key) => {
	result.push( key + "=" + _preprocessorOptions[key] );
	return result;
}, []).join('&');