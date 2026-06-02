"use client";

import React, {
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { type Language, getTranslation, isRTL } from "@/lib/i18n";

type Translations = ReturnType<typeof getTranslation>;

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: "ltr" | "rtl";
  isRTLLayout: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const LANG_KEY = "noir-florale-lang";

function subscribeToLanguage(callback: () => void) {
  const handler = () => callback();
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}

function getLanguageSnapshot(): Language {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem(LANG_KEY);
  return saved === "ar" || saved === "en" ? saved : "en";
}

function getLanguageServerSnapshot(): Language {
  return "en";
}

// Track language changes from within the app
let listeners: (() => void)[] = [];
function notifyLanguageChange() {
  listeners.forEach((fn) => fn());
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getLanguageServerSnapshot
  );

  const setLanguage = useCallback((lang: Language) => {
    localStorage.setItem(LANG_KEY, lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = isRTL(lang) ? "rtl" : "ltr";
    }
    notifyLanguageChange();
  }, []);

  // Keep dir in sync
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.dir = isRTL(language) ? "rtl" : "ltr";
    }
  }, [language]);

  const t = getTranslation(language);
  const dir = isRTL(language) ? "rtl" : "ltr";
  const isRTLLayout = isRTL(language);

  return React.createElement(
    LanguageContext.Provider,
    { value: { language, setLanguage, t, dir, isRTLLayout } },
    children
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
