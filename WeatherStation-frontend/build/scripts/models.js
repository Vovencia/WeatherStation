(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["models"],{

/***/ "./models/city/index.ts":
/*!******************************!*\
  !*** ./models/city/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __webpack_require__(/*! @system/api */ "./system/api.ts");
exports.loadByName = function (name) {
    return api_1.default("/city/by-name/" + name);
};
exports.loadByCoordinates = function (latt, lang) {
    return api_1.default("/city/by-coordinates/" + latt + "," + lang);
};


/***/ }),

/***/ "./models/weather/index.ts":
/*!*********************************!*\
  !*** ./models/weather/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __webpack_require__(/*! @system/api */ "./system/api.ts");
exports.getWeather = function (cityWoeid) {
    return api_1.default("/weather/" + cityWoeid);
};


/***/ })

}]);
//# sourceMappingURL=models.js.map