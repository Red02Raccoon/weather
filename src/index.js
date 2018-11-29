import React from "react";
import ReactDOM from "react-dom";
import './services/i18n';
import { Provider } from "react-redux";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./services/serviceWorker";
import configuredStore from "./services/configureStore";





ReactDOM.render(
  <Provider store={configuredStore}>
    {/* <I18nextProvider i18n={i18next}> */}
      <App />
    {/* </I18nextProvider> */}
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
