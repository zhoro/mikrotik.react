import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import i18enLang from './locales/en/i18en.json';
import i18ukLang from './locales/uk/i18uk.json';

export const resources = {
    uk: {translation: i18ukLang},
    en: {translation: i18enLang}
}

i18n
    .use(LanguageDetector) // detect user language
    .use(initReactI18next) // pass the i18n instance to react-i18next.
    .init({
        resources,
        fallbackLng: "en",
        debug: false,
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;