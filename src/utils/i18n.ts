import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import de from '../locales/de.json';
import en from '../locales/en.json';

export const SupportedLocales = {
  de: { translation: de },
  en: { translation: en },
};

export const i18n = i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: SupportedLocales,
    fallbackLng: 'de',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en', 'de'],
  });
