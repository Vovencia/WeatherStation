import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import store from "@store";

import Layout from "@components/Layout";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<SnackbarProvider
				maxSnack={5}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			>
				<Layout />
			</SnackbarProvider>
		</Provider>
	</BrowserRouter>,
	document.querySelector("#root")
);
