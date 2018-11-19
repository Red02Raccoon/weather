import React from "react";
import { Redirect } from "react-router-dom";
// import { localizeRoutes } from "../services/i18n/util";
// import { defaultLocale } from "../config/i18n";
// import { t } from "../services/i18n";
import Home from "./home";
import News from "./news";

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/news",
    component: News,
    exact: true
  }
];

// Add /:locale/ prefix to our routes path.
