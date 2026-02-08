"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Locale, defaultLocale, localeDirection } from "./settings";
import { getDictionary } from "./dictionary";
import type { Dictionary } from "./dictionary";

interface LanguageContextType {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  direction: "ltr" | "rtl";
  isLoaded: boolean;
  isTransitioning: boolean; // جديد
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [dictionary, setDictionary] = useState<Dictionary>(
    getDictionary(defaultLocale)
  );
  const [direction, setDirection] = useState<"ltr" | "rtl">(
    localeDirection[defaultLocale]
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false); // جديد

  // Load saved locale on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale | null;

    if (savedLocale && (savedLocale === "en" || savedLocale === "ar")) {
      setLocaleState(savedLocale);
      setDictionary(getDictionary(savedLocale));
      setDirection(localeDirection[savedLocale]);
      document.documentElement.lang = savedLocale;
      document.documentElement.dir = localeDirection[savedLocale];
    }

    setIsLoaded(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    // Start transition
    setIsTransitioning(true);

    // Wait for fade out, then change language
    setTimeout(() => {
      setLocaleState(newLocale);
      setDictionary(getDictionary(newLocale));
      setDirection(localeDirection[newLocale]);
      localStorage.setItem("locale", newLocale);
      document.documentElement.lang = newLocale;
      document.documentElement.dir = localeDirection[newLocale];

      // End transition after fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  const value: LanguageContextType = {
    locale,
    dictionary,
    setLocale,
    direction,
    isLoaded,
    isTransitioning,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}