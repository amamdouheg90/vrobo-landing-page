"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { HeroIllustration } from "@/components/hero-illustration"
import Link from "next/link"

const translations = {
  en: {
    headline: "Order Confirmation & Shipping Validation",
    subheading:
      "Vrobo confirms orders before shipping and validates delivery feedback through IVR-powered Robo calls, WhatsApp, SMS, and email. We make up to 3 trials to ensure accurate order fulfillment and detect fake shipping updates.",
    cta: "Start Free Trial",
  },
  ar: {
    headline: "تأكيد الطلبات والتحقق من التوصيل",
    subheading:
      "فروبو بيتأكد من الطلبات قبل الشحن وبيتابع حالة التوصيل عن طريق المكالمات الذكية والواتساب والرسايل والإيميل. بنعمل لحد 3 محاولات عشان نمنع فشل التوصيل ونكتشف تحديثات الشحن المزيفة.",
    cta: "جرب مجاناً",
  },
}

export function HeroSection() {
  const { language, direction } = useLanguage()
  const t = translations[language]

  return (
    <section className={`w-full pt-24 md:pt-8 pb-12 md:pb-8 lg:py-12 bg-background ${direction}`}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className={`flex flex-col gap-6 md:gap-8 ${direction === "rtl" ? "lg:order-1" : ""}`}>
            <h1 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground ${direction === "rtl" ? "leading-[1.5] tracking-[0.15px]" : ""}`}>
              {t.headline}
            </h1>
            <p className={`text-gray-500 text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 ${direction === "rtl" ? "leading-[1.8] tracking-[0.3px]" : ""}`}>
              {t.subheading}
            </p>
            <div className={`flex flex-col gap-2 min-[400px]:flex-row ${direction === "rtl" ? "justify-end" : "justify-start"}`}>
              <Link href="https://admin.Vrobo.co/createAccount" target="_blank" rel="noopener noreferrer">
                <Button className={`bg-[#d01e3f] hover:bg-[#d01e3f] text-white px-8 py-6 text-lg w-full min-[400px]:w-auto ${direction === "rtl" ? "tracking-[0.5px]" : ""}`}>
                  {t.cta}
                </Button>
              </Link>
            </div>
          </div>
          <div className={`flex justify-center mt-8 lg:mt-0 ${direction === "rtl" ? "lg:order-2" : ""}`}>
            <div className="relative w-full max-w-[500px]">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

