import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "@reducers";

const middlewares = [thunkMiddleware];
const plugins = [
	applyMiddleware(...middlewares),
	window["__REDUX_DEVTOOLS_EXTENSION__"] &&
		window["__REDUX_DEVTOOLS_EXTENSION__"]()
].filter(Boolean);

const store = createStore(rootReducer, compose(...plugins));

export default store;
