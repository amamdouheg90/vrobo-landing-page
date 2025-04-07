"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

const translations = {
  en: {
    orderConfirmation: "Order Confirmation",
    shippingVerification: "Shipping Verification",
    legal: "Legal",
    policies: {
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      refund: "Refund Policy"
    },
    copyright: "All rights reserved."
  },
  ar: {
    orderConfirmation: "تأكيد الطلبات",
    shippingVerification: "التحقق من التوصيل",
    legal: "الأحكام القانونية",
    policies: {
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      refund: "سياسة الاسترداد"
    },
    copyright: "جميع الحقوق محفوظة."
  }
}

export function Footer() {
  const { language, direction } = useLanguage()
  const t = translations[language]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-6 md:py-8 bg-white" dir={direction}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Name */}
          <div className="flex items-center gap-2">
            <Image src="/images/vrobo-logo-white-bg.png" width={40} height={40} alt="Vrobo Logo" className="rounded-md" />
            <span className="text-lg font-semibold text-gray-900">Vrobo</span>
          </div>
          {/* Policy Links */}
          <nav className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.policies.privacy}
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.policies.terms}
            </Link>
            <Link
              href="/refund"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t.policies.refund}
            </Link>
          </nav>
        </div>
        <div className="border-t border-gray-200 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-600">© {currentYear} Vrobo. {t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

