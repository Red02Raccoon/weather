import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./style/index.scss";
import App from "./containers/App";
import configuredStore from "./services/configureStore";

ReactDOM.render(
  <Provider store={configuredStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
