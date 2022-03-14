/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import "./index.css";

import React from "react";
import ReactDOM from "react-dom";

import AppProvider from "./store/context";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
