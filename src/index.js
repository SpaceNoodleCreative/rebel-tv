import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppContainer } from "./components/App";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(<AppContainer />, document.getElementById("root"));
serviceWorker.unregister();
