import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import * as serviceWorker from "./services/serviceWorker";
import configuredStore from "./services/configureStore";
import App from "./containers/App";

import "./styles/index.scss";

ReactDOM.render(
  <Provider store={configuredStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
