import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '@/translations/translations';

type Language = 'el' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('el');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      setLanguageState(savedLang);
      setIsInitialized(true);
    } else {
      // Detect location via IP
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          const isGreece = data.country_code === 'GR';
          const defaultLang: Language = isGreece ? 'el' : 'en';
          setLanguageState(defaultLang);
          localStorage.setItem('language', defaultLang);
          setIsInitialized(true);
        })
        .catch(() => {
          // Fallback to English if detection fails
          setLanguageState('en');
          localStorage.setItem('language', 'en');
          setIsInitialized(true);
        });
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value !== undefined ? value : key;
  };

  if (!isInitialized) {
    return null; // or a loading spinner
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
