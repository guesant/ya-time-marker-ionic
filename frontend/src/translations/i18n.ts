//region Preamble
/**
 * SPDX-License-Identifier: MIT
 * Copyright © 2021 Gabriel Rodrigues
 */
//endregion

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { TRANSLATIONS_EN } from "./en/translations";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    supportedLngs: ["en"],
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
    },
    detection: {
      order: ["querystring", "localStorage", "navigator", "htmlTag"],
      lookupQuerystring: "lng",
      lookupLocalStorage: "i18nextLng",
      cookieOptions: { path: "/", sameSite: "strict" },
    },
  });

i18n.on("languageChanged", (lang) => {
  localStorage.setItem("i18nextLng", lang);
});

function loadLocalLanguage() {
  const localLanguage =
    localStorage.getItem("i18nextLng") ?? i18n.languages[0] ?? "en";
  i18n.changeLanguage(localLanguage);
}

loadLocalLanguage();
