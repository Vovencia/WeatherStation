import * as path 	from 'path'
import * as fs 		from 'fs'

import {root} from "./_utils";

let snapSvgPath = root('node_modules', 'snapsvg');
if( fs.existsSync( path.join(snapSvgPath, 'dist', 'snap.svg-min.js') ) ){
	snapSvgPath = path.join(snapSvgPath, 'dist', 'snap.svg-min.js');
} else {
	snapSvgPath = path.join(snapSvgPath, 'dist', 'snap.svg.js');
}

export {snapSvgPath};