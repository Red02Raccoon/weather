import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { Provider } from "react-redux";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./services/serviceWorker";
import configuredStore from "./services/configureStore";

import en from "./translations/en.json";
import ru from "./translations/ru.json";

i18next
  .init({
  interpolation: {
    escapeValue: false
  }, 
  lng: 'en', 
  resources: {
    en: en,
    ru: ru,
  },
});

ReactDOM.render(
  <Provider store={configuredStore}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
