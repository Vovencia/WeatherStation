import * as opn 					from 'opn';

import {source, dist, client, root} from "./_utils";
import resolve 						from "./resolve";
import {DEV_PORT, SERVER, DEV_URL}		from "./_config"

import module from "./module";
import plugins from "./plugins";
import optimization from "./optimization";
import {PROD} from "./_config";

const config = {
	target: "web",
	mode: PROD ? 'production' : 'development',
	entry: {
		'app': source("index.tsx"),
	},
	output: {
		filename: "[name].js",
		path: dist('scripts'),
		publicPath: `/scripts/`,

		chunkFilename: '[name].js',
	},

	context: source(),

	devtool: PROD ? 'none' : "source-map",

	resolve: resolve,

	node: {},

	module: module,
	plugins: plugins,
	optimization: optimization,

	devServer: {
		historyApiFallback: true,
		contentBase: dist(),
		watchContentBase: true,
		hot: true,
		port: DEV_PORT,
	},
}

if(SERVER){
	console.log(`
	!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	
	
		DEV_URL: ${DEV_URL}
	
	
	!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	`);
	opn(DEV_URL);
}

export default config;
