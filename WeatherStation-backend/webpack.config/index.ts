import {source, dist, client, root} from "./_utils";
import resolve 						from "./resolve";
import {DEV_PORT, SERVER, API_URL, WATCH} from "./_config"

import module from "./module";
import _plugins from "./plugins";
import optimization from "./optimization";
import {PROD} from "./_config";

const plugins = [].concat(_plugins);

const config = {
	target: "node",
	mode: PROD ? 'production' : 'development',
	entry: {
		'index': source("index.ts"),
	},
	output: {
		filename: "[name].js",
		path: dist(''),
		publicPath: `/`,

		chunkFilename: '[name].js',

		libraryTarget: 'commonjs2',
	},

	context: source(),

	devtool: PROD ? 'none' : "source-map",

	resolve: resolve,

	node: {},

	module: module,
	plugins: plugins,
	optimization: optimization,

	watch: WATCH,
	watchOptions: {
		aggregateTimeout: 300,
		ignored: /node_modules/,
	}
}

if(SERVER){
	console.log(`
	!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	
	
		API_URL: ${API_URL}
	
	
	!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	`);
}

export default config;