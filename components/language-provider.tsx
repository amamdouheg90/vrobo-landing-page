"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Update the Language type to only include 'en' and 'ar'
type Direction = "ltr" | "rtl"
type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  direction: Direction
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  direction: "ltr",
  setLanguage: () => { },
})

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [direction, setDirection] = useState<Direction>("ltr")

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    const dir = lang === "en" ? "ltr" : "rtl"
    setDirection(dir)
    document.documentElement.dir = dir
    document.documentElement.lang = lang
    // Set the font family based on language
    document.documentElement.style.setProperty(
      '--font-family-primary',
      lang === 'en' ? 'var(--font-poppins)' : 'var(--font-almarai)'
    )
  }

  useEffect(() => {
    // Check browser language on initial load
    const browserLang = navigator.language.split("-")[0]
    if (browserLang === "ar") {
      setLanguage("ar")
    } else {
      // Ensure font is set even for default English
      document.documentElement.style.setProperty(
        '--font-family-primary',
        'var(--font-poppins)'
      )
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage }}>
      <div className={`${direction === "rtl" ? "rtl" : "ltr"} font-primary`}>{children}</div>
    </LanguageContext.Provider>
  )
}

