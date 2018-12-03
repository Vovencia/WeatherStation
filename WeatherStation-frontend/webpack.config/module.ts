import {root, source, client, dist} 	from "./_utils";
import {MODE, preprocessorOptions} 		from "./_config";
import {snapSvgPath} 					from "./snapSvgPath";

import * as pugIncludeGlob 				from 'pug-include-glob';

const preprocessor = `preprocess-loader?` + preprocessorOptions;

export default {
	rules: [
		{
			test: /\.(t|j)sx?$/,
			exclude: /(node_modules|bower_components)/,
			use: [
				{
					loader: "awesome-typescript-loader",
					options: {
						configFileName: root('tsconfig.json'),
					}
				},
				preprocessor
			],
		},
		{
			test: /\.styl$/,

				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'stylus-loader',
						options: {
							import: client('styles', 'helpers', '*.styl')
						},
					},
					preprocessor
				]

		},
		{
			test: /\.css$/,

				use: [
					'style-loader',
					'css-loader',
					preprocessor
				],

		},
		{
			test: /\.pug$/,
			use : [{
				loader: 'pug-loader',
				options: {
					plugins: [ pugIncludeGlob({ /* options */ }) ]
				}
			}]
		},
		{
			test: /((\/assets\/|\\assets\\)(\/data\/|\\data\\)|(\.(png|jpg|gif)$))/,
			use: [
				{
					loader: 'file-loader',
					options: {
						// useRelativePath: true,
						// outputPath: function(path){
						// 	// console.log('path 1', path)
						// 	// path = path.replace('/src/scripts/', '../');
						// 	// console.log('path 2', path)
						// 	// path = "../" + path;
						// 	// console.log('path 3', path)
						// 	return path;
						// },
						name: '../includes/[path][name].[ext]?[hash]',
					}
				}
			]
		},
		{
			test: /\.svg$/,
			loader: 'svg-inline-loader'
		},
		{
			test: snapSvgPath,
			use: 'imports-loader?this=>window,fix=>module.exports=0',
		},
	]
}