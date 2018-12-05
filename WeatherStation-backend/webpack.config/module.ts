import {root, source, client, dist} 	from "./_utils";
import {MODE, preprocessorOptions} 		from "./_config";

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
	]
}