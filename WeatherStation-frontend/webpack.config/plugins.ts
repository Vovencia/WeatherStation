import {BUILD, PROD, SERVER} 			from "./_config";
import {source, dist, root, client} 	from "./_utils";

import * as HtmlWebpackPlugin 			from 'html-webpack-plugin'
import * as CleanWebpackPlugin 			from 'clean-webpack-plugin'
import * as CaseSensitivePathsPlugin 	from 'case-sensitive-paths-webpack-plugin'
import { CheckerPlugin } 				from 'awesome-typescript-loader'
import * as webpack 					from 'webpack'
import * as CopyWebpackPlugin 			from 'copy-webpack-plugin'

const HtmlWebpackPluginOptions = {
	inject: true,
	template: client('layouts', 'index.pug'),
	minify: PROD
}

let plugins = [
	( BUILD ? new CleanWebpackPlugin([ dist('') ], {root: dist('..')}) : false ),
	new CopyWebpackPlugin([
		{
			from: client('fonts'),
			to: '../fonts',
		},
		{
			from: client('libs'),
			to: '../libs',
		},
		{
			from: source('icons'),
			to: '../icons',
		}
	], {}),
	new CheckerPlugin(),
	// Generates an `index.html` file with the <script> injected.
	new HtmlWebpackPlugin({
		...HtmlWebpackPluginOptions,
		filename: "../index.html",
	}),
	// Watcher doesn't work well if you mistype casing in a path so we use
	// a plugin that prints an error when you attempt to do this.
	// See https://github.com/facebookincubator/create-react-app/issues/240
	new CaseSensitivePathsPlugin(),
	// Moment.js is an extremely popular library that bundles large locale files
	// by default due to how Webpack interprets its code. This is a practical
	// solution that requires the user to opt into importing specific locales.
	// https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
	// You can remove this if you don't use Moment.js:
	new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

	( SERVER ? new webpack.HotModuleReplacementPlugin() : false ),
];



export default plugins.filter(Boolean);