import { createContext, useContext, useState, type ReactNode } from "react";
import type { Lang, Translations } from "./types";
import { en } from "./en";
import { es } from "./es";

const translations: Record<Lang, Translations> = { en, es };

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = (): void => {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLang must be used within LanguageProvider");
  return context;
};

export type { Lang, Translations };
