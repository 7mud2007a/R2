import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'EN' | 'AR';

interface LanguageContextType {
  language: Language;
  isArabic: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('veltrion-language');

    if (savedLanguage === 'AR' || savedLanguage === 'EN') {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = language === 'AR' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'AR' ? 'ar' : 'en';

    localStorage.setItem('veltrion-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'EN' ? 'AR' : 'EN'));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        isArabic: language === 'AR',
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  return context;
}
