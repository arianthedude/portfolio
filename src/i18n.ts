import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/translation.json";
import fa from "./locales/fa/translation.json";
import de from "./locales/de/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,

    resources: {
      en: { translation: en },
      fa: { translation: fa },
      de: { translation: de },
    },

    interpolation: {
      escapeValue: false,
    },
  });

i18n

  .use(initReactI18next)

  .init({
    resources: {
      en: { translation: en },

      fa: { translation: fa },

      de: { translation: de },
    },

    lng: localStorage.getItem("language") || "en",

    fallbackLng: "en",
  });

const setDocumentDirection = (lang: string) => {
  const dir = lang === "fa" ? "rtl" : "ltr";

  document.documentElement.lang = lang;

  document.documentElement.dir = dir;
};

setDocumentDirection(i18n.language);

i18n.on("languageChanged", (lang) => {
  setDocumentDirection(lang);
});

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;

  document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
});
export default i18n;
