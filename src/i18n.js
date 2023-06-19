import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    Welcome: {
                        text: "Welcome to React",
                    },
                    About: {
                        text: "About",
                    },
                },
            },
            it: {
                translation: {
                    Welcome: {
                        text: "Benvenuti in React",
                    },
                    About: {
                        text: "Chi siamo",
                    },
                },
            },
        },
        lng: "it",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });


