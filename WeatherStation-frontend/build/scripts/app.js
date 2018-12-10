(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./containers/AppProgress/index.tsx":
/*!******************************************!*\
  !*** ./containers/AppProgress/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
var LinearProgress_1 = __webpack_require__(/*! @material-ui/core/LinearProgress */ "../node_modules/@material-ui/core/LinearProgress/index.js");
function AppProgress(props) {
    return (props.visible ? (React.createElement(AppProgressStyled, null,
        React.createElement(LinearProgress_1.default, { color: "secondary" }))) : null);
}
var AppProgressStyled = styled_components_1.default("div")(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tz-index: 1101;\n"], ["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tz-index: 1101;\n"])));
exports.default = react_redux_1.connect(function mapStateToProps(state) {
    return {
        visible: state.app.loading > 0
    };
})(AppProgress);
var templateObject_1;


/***/ }),

/***/ "./containers/CityButton/index.tsx":
/*!*****************************************!*\
  !*** ./containers/CityButton/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var redux_1 = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
var notistack_1 = __webpack_require__(/*! notistack */ "../node_modules/notistack/build/index.js");
var Button_1 = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/Button/index.js");
var LocationCity_1 = __webpack_require__(/*! @material-ui/icons/LocationCity */ "../node_modules/@material-ui/icons/LocationCity.js");
var CircularProgress_1 = __webpack_require__(/*! @material-ui/core/CircularProgress */ "../node_modules/@material-ui/core/CircularProgress/index.js");
var cityActions_1 = __webpack_require__(/*! @actions/cityActions */ "./store/actions/cityActions.ts");
var cityChooseActions_1 = __webpack_require__(/*! @actions/cityChooseActions */ "./store/actions/cityChooseActions.ts");
var CityButton = /** @class */ (function (_super) {
    tslib_1.__extends(CityButton, _super);
    function CityButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loading: false,
        };
        return _this;
    }
    CityButton.prototype.render = function () {
        var _this = this;
        return (React.createElement(Button_1.default, { variant: "contained", color: "default", onClick: function () { return _this.props.cityChooseOpen(); } },
            this.state.loading || this.props.loading ? React.createElement(CircularProgress_1.default, { size: 24 }) : React.createElement(LocationCity_1.default, null),
            "\u00A0",
            this.props.loaded && this.props.title ? this.props.title : 'Выбрать город'));
    };
    CityButton.prototype.getGeolocation = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var location_1, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({
                            loading: true,
                        });
                        return [4 /*yield*/, ymaps.ready()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, ymaps.geolocation.get()];
                    case 3:
                        location_1 = _a.sent();
                        location_1 = location_1.geoObjects.position;
                        this.props.cityLoadByCoordinates(location_1[0], location_1[1]);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        this.props.enqueueSnackbar(e_1.message, {
                            variant: 'error'
                        });
                        return [3 /*break*/, 5];
                    case 5:
                        this.setState({
                            loading: false,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CityButton.prototype.componentDidMount = function () {
        this.getGeolocation();
    };
    return CityButton;
}(React.Component));
function mapStateToProps(state) {
    return state.city;
}
function mapDispatchToProps(dispatch) {
    return {
        cityLoadByName: function (name) { return dispatch(cityActions_1.loadByName(name)); },
        cityLoadByCoordinates: function (latt, lang) { return dispatch(cityActions_1.loadByCoordinates(latt, lang)); },
        cityChooseOpen: function () { return dispatch(cityChooseActions_1.open()); }
    };
}
exports.default = redux_1.compose(react_redux_1.connect(mapStateToProps, mapDispatchToProps), notistack_1.withSnackbar)(CityButton);


/***/ }),

/***/ "./containers/ModalCityChoose/index.tsx":
/*!**********************************************!*\
  !*** ./containers/ModalCityChoose/index.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
var Button_1 = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/Button/index.js");
var TextField_1 = __webpack_require__(/*! @material-ui/core/TextField */ "../node_modules/@material-ui/core/TextField/index.js");
var InputAdornment_1 = __webpack_require__(/*! @material-ui/core/InputAdornment */ "../node_modules/@material-ui/core/InputAdornment/index.js");
var Dialog_1 = __webpack_require__(/*! @material-ui/core/Dialog */ "../node_modules/@material-ui/core/Dialog/index.js");
var DialogContent_1 = __webpack_require__(/*! @material-ui/core/DialogContent */ "../node_modules/@material-ui/core/DialogContent/index.js");
var DialogTitle_1 = __webpack_require__(/*! @material-ui/core/DialogTitle */ "../node_modules/@material-ui/core/DialogTitle/index.js");
var DialogActions_1 = __webpack_require__(/*! @material-ui/core/DialogActions */ "../node_modules/@material-ui/core/DialogActions/index.js");
var MenuItem_1 = __webpack_require__(/*! @material-ui/core/MenuItem */ "../node_modules/@material-ui/core/MenuItem/index.js");
var MenuList_1 = __webpack_require__(/*! @material-ui/core/MenuList */ "../node_modules/@material-ui/core/MenuList/index.js");
var CircularProgress_1 = __webpack_require__(/*! @material-ui/core/CircularProgress */ "../node_modules/@material-ui/core/CircularProgress/index.js");
var cityChooseActions_1 = __webpack_require__(/*! @actions/cityChooseActions */ "./store/actions/cityChooseActions.ts");
var cityActions_1 = __webpack_require__(/*! @actions/cityActions */ "./store/actions/cityActions.ts");
var ModalCityChoose = /** @class */ (function (_super) {
    tslib_1.__extends(ModalCityChoose, _super);
    function ModalCityChoose() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onInputChange = function (e) {
            _this.props.cityCooseLoad(e.target.value);
        };
        _this.handlerCityClick = function (e, item) {
            _this.props.setCity(item);
            _this.props.cityChooseClose();
        };
        return _this;
    }
    ModalCityChoose.prototype.render = function () {
        var _this = this;
        return (React.createElement(Dialog_1.default, { open: this.props.open, scroll: 'paper', "aria-labelledby": "scroll-dialog-title", className: this.props.className, fullWidth: true, maxWidth: 'xs' },
            React.createElement(DialogTitle_1.default, { id: "scroll-dialog-title" }, "\u0412\u044B\u0431\u043E\u0440 \u0433\u043E\u0440\u043E\u0434\u0430"),
            React.createElement(DialogContent_1.default, null,
                React.createElement(TextField_1.default, { label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u043E\u0440\u043E\u0434\u0430", value: this.props.query, onChange: this.onInputChange, margin: "normal", variant: "outlined", fullWidth: true, InputProps: {
                        endAdornment: (React.createElement(InputAdornment_1.default, { position: "start" }, this.props.loading ? React.createElement(CircularProgress_1.default, { size: 24 }) : "")),
                    } }),
                this.renderList()),
            React.createElement(DialogActions_1.default, null,
                React.createElement(Button_1.default, { onClick: function () { return _this.props.cityChooseClose(); }, color: "primary" }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))));
    };
    ModalCityChoose.prototype.renderList = function () {
        var _this = this;
        return (React.createElement(MenuList_1.default, { style: { height: '200px', overflow: 'auto' } }, this.props.result.map(function (item) { return (React.createElement(MenuItem_1.default, { onClick: function (e) { return _this.handlerCityClick(e, item); }, key: item.woeid, selected: item.woeid === _this.props.currentCity }, item.title)); })));
    };
    return ModalCityChoose;
}(React.Component));
var mapStateToProps = function (state) {
    return tslib_1.__assign({}, state.cityChoose, { currentCity: state.city.woeid });
};
var mapDispatchToProps = function (dispatch) {
    return {
        cityChooseClose: function () { return dispatch(cityChooseActions_1.close()); },
        cityCooseLoad: function (query) { return dispatch(cityChooseActions_1.load(query)); },
        setCity: function (city) { return dispatch(cityActions_1.setCity(city)); },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ModalCityChoose);


/***/ }),

/***/ "./containers/Weather/index.tsx":
/*!**************************************!*\
  !*** ./containers/Weather/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
var styled_components_1 = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
var Button_1 = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/Button/index.js");
var CircularProgress_1 = __webpack_require__(/*! @material-ui/core/CircularProgress */ "../node_modules/@material-ui/core/CircularProgress/index.js");
var Typography_1 = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/Typography/index.js");
var cityChooseActions_1 = __webpack_require__(/*! @actions/cityChooseActions */ "./store/actions/cityChooseActions.ts");
var weatherActions_1 = __webpack_require__(/*! @actions/weatherActions */ "./store/actions/weatherActions.ts");
var WeatherItem_1 = __webpack_require__(/*! @components/WeatherItem */ "./components/WeatherItem/index.tsx");
var Weather = /** @class */ (function (_super) {
    tslib_1.__extends(Weather, _super);
    function Weather() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handlerButtonLoad = function (e) {
            if (_this.props.selectedCity) {
                _this.props.getWeather(_this.props.selectedCity);
            }
            else {
                _this.props.cityChooseOpen();
            }
        };
        return _this;
    }
    Weather.prototype.render = function () {
        return (React.createElement(WeatherStyled, null,
            React.createElement(Typography_1.default, { variant: "h1", align: "center" }, this.props.selectedCityTitle
                ? "\u041F\u043E\u0433\u043E\u0434\u0430 \u0432 \u0433\u043E\u0440\u043E\u0434\u0435 " + this.props.selectedCityTitle
                : React.createElement("span", null, "\u00A0")),
            this.props.showLoading
                ? React.createElement(WeatherContentWrapper, null,
                    React.createElement(CircularProgress_1.default, null))
                : (this.props.isLoaded
                    ? this.renderItems(this.props.list)
                    : this.renderButtonLoad())));
    };
    Weather.prototype.renderButtonLoad = function () {
        return (React.createElement(WeatherContentWrapper, null,
            React.createElement(Button_1.default, { onClick: this.handlerButtonLoad, variant: "contained", color: "primary", size: "large" }, this.props.selectedCity ? 'Получить прогноз погоды' : 'Выбрать город')));
    };
    Weather.prototype.renderItems = function (items) {
        return (React.createElement(WeatherItems, null, items.map(function (item, index) { return (React.createElement(WeatherItem_1.default, tslib_1.__assign({ key: item.applicable_date, big: index === 0 }, item))); })));
    };
    Weather.prototype.componentDidUpdate = function (prevProps) {
        if (!this.props.isLoaded)
            return;
        if (this.props.selectedCity == prevProps.selectedCity)
            return;
        this.props.getWeather(this.props.selectedCity);
    };
    return Weather;
}(React.Component));
var WeatherStyled = styled_components_1.default("div")(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-grow: 1;\n\tmargin: 100px 20px;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-grow: 1;\n\tmargin: 100px 20px;\n"])));
var WeatherContentWrapper = styled_components_1.default("div")(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\tdisplay: flex;\n\tflex-grow: 1;\n\talign-items: center;\n\tjustify-content: center;\n"], ["\n\tdisplay: flex;\n\tflex-grow: 1;\n\talign-items: center;\n\tjustify-content: center;\n"])));
var WeatherItems = styled_components_1.default("div")(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\tdisplay: flex;\n\tmargin: 30px 0;\n\tflex-wrap: wrap;\n\twidth: 100%;\n\tjustify-content: center;\n\t> * {\n\t\tpadding: 10px;\n\t}\n"], ["\n\tdisplay: flex;\n\tmargin: 30px 0;\n\tflex-wrap: wrap;\n\twidth: 100%;\n\tjustify-content: center;\n\t> * {\n\t\tpadding: 10px;\n\t}\n"])));
var mapStateToProps = function (state) {
    return tslib_1.__assign({}, state.weather, { selectedCity: state.city.woeid, selectedCityTitle: state.city.title, showLoading: state.city.loading || state.weather.loading });
};
var mapDispatchToProps = function (dispatch) {
    return {
        cityChooseOpen: function () { return dispatch(cityChooseActions_1.open()); },
        getWeather: function (cityWoeid) { return dispatch(weatherActions_1.getWeather(cityWoeid)); },
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Weather);
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");
var notistack_1 = __webpack_require__(/*! notistack */ "../node_modules/notistack/build/index.js");
var _store_1 = __webpack_require__(/*! @store */ "./store/index.ts");
var Layout_1 = __webpack_require__(/*! @components/Layout */ "./components/Layout/index.tsx");
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(react_redux_1.Provider, { store: _store_1.default },
        React.createElement(notistack_1.SnackbarProvider, { maxSnack: 5, anchorOrigin: { vertical: 'bottom', horizontal: 'right' } },
            React.createElement(Layout_1.default, null)))), document.querySelector('#root'));


/***/ }),

/***/ "./store/actions/cityActions.ts":
/*!**************************************!*\
  !*** ./store/actions/cityActions.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var city_1 = __webpack_require__(/*! @models/city */ "./models/city/index.ts");
exports.CITY_START_LOADING = 'CITY_START_LOADING';
exports.CITY_DONE_LOADING = 'CITY_DONE_LOADING';
exports.CITY_SET = 'CITY_SET';
exports.loadByName = function (name) {
    return function (dispatch) {
        dispatch({ type: exports.CITY_START_LOADING, value: { type: 'byName', name: name } });
        city_1.loadByName(name)
            .then(function (data) {
            loaded(dispatch, data);
        }).catch(function (e) {
            loaded(dispatch, []);
        });
    };
};
exports.loadByCoordinates = function (latt, lang) {
    return function (dispatch) {
        dispatch({ type: exports.CITY_START_LOADING, value: { type: 'byCoordinates', latt: latt, lang: lang } });
        city_1.loadByCoordinates(latt, lang)
            .then(function (data) {
            loaded(dispatch, data);
        }).catch(function (e) {
            loaded(dispatch, []);
        });
    };
};
var loaded = function (dispatch, value) {
    dispatch({ type: exports.CITY_DONE_LOADING, value: value });
    dispatch(exports.setCity(value[0] || null));
};
exports.setCity = function (city) {
    return {
        type: exports.CITY_SET,
        value: city,
    };
};


/***/ }),

/***/ "./store/actions/cityChooseActions.ts":
/*!********************************************!*\
  !*** ./store/actions/cityChooseActions.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var city_1 = __webpack_require__(/*! @models/city */ "./models/city/index.ts");
exports.CITY_CHOOSE_START_LOADING = 'CITY_CHOOSE_START_LOADING';
exports.CITY_CHOOSE_CANCELED_LOADING = 'CITY_CHOOSE_CANCELED_LOADING';
exports.CITY_CHOOSE_DONE_LOADING = 'CITY_CHOOSE_DONE_LOADING';
exports.CITY_CHOOSE_OPEN = 'CITY_CHOOSE_OPEN';
exports.CITY_CHOOSE_CLOSE = 'CITY_CHOOSE_CLOSE';
var loadDebounced = (function () {
    var timeout;
    var lastCancelHandler = function () { };
    return function (handler, cancelHandler) {
        if (timeout) {
            clearTimeout(timeout);
            if (lastCancelHandler)
                lastCancelHandler();
        }
        lastCancelHandler = cancelHandler;
        timeout = setTimeout(function () {
            timeout = null;
            handler();
        }, 500);
    };
})();
exports.load = function (query) {
    return function (dispatch) {
        dispatch({ type: exports.CITY_CHOOSE_START_LOADING, value: query });
        loadDebounced(function () {
            city_1.loadByName(query)
                .then(function (data) {
                dispatch({ type: exports.CITY_CHOOSE_DONE_LOADING, value: data });
            }).catch(function (e) {
                dispatch({ type: exports.CITY_CHOOSE_DONE_LOADING, value: [] });
            });
        }, function () {
            dispatch({ type: exports.CITY_CHOOSE_CANCELED_LOADING, value: query });
        });
    };
};
exports.open = function () {
    return {
        type: exports.CITY_CHOOSE_OPEN
    };
};
exports.close = function () {
    return {
        type: exports.CITY_CHOOSE_CLOSE
    };
};


/***/ }),

/***/ "./store/actions/weatherActions.ts":
/*!*****************************************!*\
  !*** ./store/actions/weatherActions.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var weather_1 = __webpack_require__(/*! @models/weather */ "./models/weather/index.ts");
exports.WEATHER_START_LOADING = 'WEATHER_START_LOADING';
exports.WEATHER_DONE_LOADING = 'WEATHER_DONE_LOADING';
exports.getWeather = function (cityWoeid) {
    return function (dispatch) {
        dispatch({ type: exports.WEATHER_START_LOADING, value: cityWoeid });
        weather_1.getWeather(cityWoeid).then(function (data) {
            dispatch({ type: exports.WEATHER_DONE_LOADING, value: data });
        });
    };
};


/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
var redux_thunk_1 = __webpack_require__(/*! redux-thunk */ "../node_modules/redux-thunk/es/index.js");
var _reducers_1 = __webpack_require__(/*! @reducers */ "./store/reducers/index.ts");
var middlewares = [redux_thunk_1.default];
var plugins = [redux_1.applyMiddleware.apply(void 0, middlewares), window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()].filter(Boolean);
var store = redux_1.createStore(_reducers_1.default, redux_1.compose.apply(void 0, plugins));
exports.default = store;


/***/ }),

/***/ "./store/initialStates.ts":
/*!********************************!*\
  !*** ./store/initialStates.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherState = {
    list: [],
    isLoaded: false,
    loading: false,
};
exports.appState = {
    loading: 0,
};
exports.cityState = {
    loading: false,
    loaded: false,
};
exports.cityChooseState = {
    open: false,
    loading: false,
    result: [],
    query: '',
};


/***/ }),

/***/ "./store/reducers/appReducer.ts":
/*!**************************************!*\
  !*** ./store/reducers/appReducer.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var initialStates_1 = __webpack_require__(/*! @store/initialStates */ "./store/initialStates.ts");
function weatherReducer(state, action) {
    if (state === void 0) { state = initialStates_1.appState; }
    return state;
}
exports.default = weatherReducer;


/***/ }),

/***/ "./store/reducers/cityChooseReducer.ts":
/*!*********************************************!*\
  !*** ./store/reducers/cityChooseReducer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var initialStates_1 = __webpack_require__(/*! @store/initialStates */ "./store/initialStates.ts");
var cityChooseActions_1 = __webpack_require__(/*! @actions/cityChooseActions */ "./store/actions/cityChooseActions.ts");
function cityChooseReducer(state, action) {
    if (state === void 0) { state = initialStates_1.cityChooseState; }
    switch (action.type) {
        case cityChooseActions_1.CITY_CHOOSE_START_LOADING:
            state = tslib_1.__assign({}, state, { loading: true, query: action.value });
            break;
        case cityChooseActions_1.CITY_CHOOSE_DONE_LOADING:
            var cities = Array.isArray(action.value) ? action.value : [];
            state = tslib_1.__assign({}, state, { loading: false, result: cities });
            break;
        case cityChooseActions_1.CITY_CHOOSE_OPEN:
            state = tslib_1.__assign({}, state, { open: true });
            break;
        case cityChooseActions_1.CITY_CHOOSE_CLOSE:
            state = tslib_1.__assign({}, state, { open: false });
            break;
    }
    return state;
}
exports.default = cityChooseReducer;


/***/ }),

/***/ "./store/reducers/cityReducer.ts":
/*!***************************************!*\
  !*** ./store/reducers/cityReducer.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var initialStates_1 = __webpack_require__(/*! @store/initialStates */ "./store/initialStates.ts");
var cityActions_1 = __webpack_require__(/*! @actions/cityActions */ "./store/actions/cityActions.ts");
function cityReducer(state, action) {
    if (state === void 0) { state = initialStates_1.cityState; }
    switch (action.type) {
        case cityActions_1.CITY_START_LOADING:
            state = tslib_1.__assign({}, state, { loading: true });
            break;
        case cityActions_1.CITY_DONE_LOADING:
            state = tslib_1.__assign({}, state, { loading: false });
            break;
        case cityActions_1.CITY_SET:
            var city = action.value;
            state = tslib_1.__assign({}, state, { loaded: !!city, title: city ? city.title : '', woeid: city ? city.woeid : 0 });
            break;
    }
    return state;
}
exports.default = cityReducer;


/***/ }),

/***/ "./store/reducers/index.ts":
/*!*********************************!*\
  !*** ./store/reducers/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
var appReducer_1 = __webpack_require__(/*! @reducers/appReducer */ "./store/reducers/appReducer.ts");
var weatherReducer_1 = __webpack_require__(/*! @reducers/weatherReducer */ "./store/reducers/weatherReducer.ts");
var cityReducer_1 = __webpack_require__(/*! @reducers/cityReducer */ "./store/reducers/cityReducer.ts");
var cityChooseReducer_1 = __webpack_require__(/*! @reducers/cityChooseReducer */ "./store/reducers/cityChooseReducer.ts");
var reducers = redux_1.combineReducers({
    app: appReducer_1.default,
    weather: weatherReducer_1.default,
    city: cityReducer_1.default,
    cityChoose: cityChooseReducer_1.default,
});
exports.default = reducers;


/***/ }),

/***/ "./store/reducers/weatherReducer.ts":
/*!******************************************!*\
  !*** ./store/reducers/weatherReducer.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var initialStates_1 = __webpack_require__(/*! @store/initialStates */ "./store/initialStates.ts");
var weatherActions_1 = __webpack_require__(/*! @actions/weatherActions */ "./store/actions/weatherActions.ts");
function weatherReducer(state, action) {
    if (state === void 0) { state = initialStates_1.weatherState; }
    switch (action.type) {
        case weatherActions_1.WEATHER_START_LOADING:
            state = tslib_1.__assign({}, state, { loading: true });
            break;
        case weatherActions_1.WEATHER_DONE_LOADING:
            state = tslib_1.__assign({}, state, { loading: false, isLoaded: true, list: action.value });
            break;
    }
    return state;
}
exports.default = weatherReducer;


/***/ })

},[["./index.tsx","runtime","vendors","components","models","system"]]]);
//# sourceMappingURL=app.js.map