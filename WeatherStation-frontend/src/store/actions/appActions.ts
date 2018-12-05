export const APP_AJAX_BEGIN = 'APP_AJAX_BEGIN';
export const APP_AJAX_END 	= 'APP_AJAX_END';

export function appAjaxBegin(){
	return {type: APP_AJAX_BEGIN};
}
export function appAjaxEnd(){
	return {type: APP_AJAX_END};
}