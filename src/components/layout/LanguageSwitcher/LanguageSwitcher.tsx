import { useEffect } from "react";
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

import './LanguageSwitcher.scss';
import type { Language } from "./types.ts";
import { useLocalStorage } from "../../../hooks/";

const languages: Language[] = [
    { code: 'en', countryCode: 'GB', label: 'English' },
    { code: 'ka', countryCode: 'GE', label: 'ქართული' },
];

const LanguageSwitcher: FC = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useLocalStorage('app-language', 'en')

    useEffect(() => {
        if (i18n.language !== language) {
            i18n.changeLanguage(language);
        }
    }, [language, i18n]);

    const handleLanguageChange = (lng: string) => {
        i18n.changeLanguage(lng);
        setLanguage(lng); // update localStorage
    };


    return (
        <div className="language-switcher">
            {languages.map(({ code, countryCode, label }) => (
                <button
                    key={code}
                    onClick={() => handleLanguageChange(code)}
                    className={`lang-btn ${i18n.language === code ? 'active' : ''}`}
                    title={label}
                >
                    <Flag
                        code={countryCode}
                        style={{ width: 32, height: 20, borderRadius: 4 }}
                    />
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
