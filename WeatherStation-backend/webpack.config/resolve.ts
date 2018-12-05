import {source, dist, client, root} from "./_utils";

export default {
	extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
	alias: {
		'@root'			: root(),
		'@source'		: source(),
		'@src'			: source(),
		'@system'		: source('system'),
		'@utils'		: source('utils'),
		'@api'			: source('api'),
		'@interfaces'	: source('interfaces'),
		'@models'		: source('models'),
	}
}