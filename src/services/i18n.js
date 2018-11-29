import React from "react";
import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import en from "../translations/en.json";
import ru from "../translations/ru.json";

i18n
  .use(detector)
  .use(reactI18nextModule)
  .init({
    interpolation: {
        escapeValue: false
    }, 
    //   lng: 'en', 
    fallbackLng: "en",
    resources: {
        en: en,
        ru: ru,
    },
});

export default i18n;