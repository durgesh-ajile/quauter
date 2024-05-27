import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "../src/translation/en/en.json";
import hn from "../src/translation/hn/hn.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      hn: {
        translation: hn,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;