import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

// @ts-ignore
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: localStorage.getItem('i18nextLng') || 'ua',
    debug: false,
    detection: {
      order: ['queryString', 'cookie', 'localStorage'],
      cache: ['cookie', 'localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n;