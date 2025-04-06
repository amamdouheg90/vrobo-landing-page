"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

const translations = {
  en: {
    policies: {
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      refund: "Refund Policy"
    },
    copyright: "© 2024 Vrobo.co. All rights reserved."
  },
  ar: {
    policies: {
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      refund: "سياسة الاسترداد"
    },
    copyright: "© ٢٠٢٤ فروبو. جميع الحقوق محفوظة."
  }
}

export function Footer() {
  const { language, direction } = useLanguage()
  const t = translations[language]

  return (
    <footer className="w-full py-6 bg-black/5 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 ${direction === "rtl" ? "md:flex-row-reverse" : ""}`}>
          <div className={`flex items-center gap-6 ${direction === "rtl" ? "flex-row-reverse" : ""}`}>
            <Link
              href="/privacy-policy"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {t.policies.privacy}
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {t.policies.terms}
            </Link>
            <Link
              href="/refund"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {t.policies.refund}
            </Link>
          </div>
          <p className="text-sm text-white/70">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

