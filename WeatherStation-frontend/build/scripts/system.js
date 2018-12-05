(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["system"],{

/***/ "./system/api.ts":
/*!***********************!*\
  !*** ./system/api.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cross_fetch_1 = __webpack_require__(/*! cross-fetch */ "../node_modules/cross-fetch/dist/browser-ponyfill.js");
var apiUrl = 'http://localhost:30001/';
if (apiUrl[apiUrl.length - 1] == '/') {
    apiUrl = apiUrl.substring(0, apiUrl.length - 1);
}
var api = function () {
    var url = '/';
    var data = null;
    switch (arguments.length) {
        case 1:
            url = arguments[0];
            break;
        case 2:
            url = arguments[0];
            data = url = arguments[1];
            break;
    }
    if (url[0] != '/') {
        url = '/' + url;
    }
    url = apiUrl + url;
    return cross_fetch_1.default(url, {
        method: data ? 'POST' : 'GET',
        headers: data ? {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        } : undefined,
        body: data ? JSON.stringify(data) : undefined,
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        if (data.type == 'ok')
            return data.value;
        var errorMessage = 'Unknown error';
        if (data.value) {
            if (typeof data.value == 'string')
                errorMessage = data.value;
            else if (data.value.message) {
                errorMessage = data.value.message;
            }
        }
        throw new Error(errorMessage);
    }).catch(function (error) {
        console.error(error);
        throw error;
    });
};
exports.default = api;


/***/ })

}]);
//# sourceMappingURL=system.js.map