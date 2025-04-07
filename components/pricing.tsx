"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const translations = {
  en: {
    title: "Pricing Plans",
    subtitle: "No hidden fees. Transparent and all-inclusive.",
    note: "All Communication Channels Included",
    tiers: [
      {
        price: "EGP 3.00",
        unit: "per order",
        description: "For merchants with fewer than 2,000 orders/month",
      },
      {
        price: "EGP 2.50",
        unit: "per order",
        description: "For merchants with 2,000 to 10,000 orders/month",
      },
      {
        price: "EGP 2.00",
        unit: "per order",
        description: "For merchants with 10,001 to 20,000 orders/month",
      },
      {
        price: "EGP 1.50",
        unit: "per order",
        description: "For merchants with more than 20,000 orders/month",
      },
    ],
    features: [
      "IVR-powered Robo calls",
      "WhatsApp messaging",
      "SMS notifications",
      "Email fallback",
      "Automatic channel switching",
      "3 free Robo calls trial",
    ],
  },
  ar: {
    title: "خطط الأسعار",
    subtitle: "لا توجد رسوم خفية. شفافة وشاملة.",
    note: "جميع قنوات الاتصال مشمولة",
    tiers: [
      {
        price: "٣.٠٠ جنيه مصري",
        unit: "لكل طلب",
        description: "للتجار الذين لديهم أقل من 2,000 طلب/شهر",
      },
      {
        price: "٢.٥٠ جنيه مصري",
        unit: "لكل طلب",
        description: "للتجار الذين لديهم من 2,000 إلى 10,000 طلب/شهر",
      },
      {
        price: "٢.٠٠ جنيه مصري",
        unit: "لكل طلب",
        description: "للتجار الذين لديهم من 10,001 إلى 20,000 طلب/شهر",
      },
      {
        price: "١.٥٠ جنيه مصري",
        unit: "لكل طلب",
        description: "للتجار الذين لديهم أكثر من 20,000 طلب/شهر",
      },
    ],
    features: [
      "مكالمات روبو مدعومة بـ IVR",
      "مراسلة واتساب",
      "إشعارات الرسائل القصيرة",
      "البريد الإلكتروني كخيار احتياطي",
      "التبديل التلقائي للقنوات",
      "تجربة 3 مكالمات روبو مجانية",
    ],
  },
}

export function Pricing() {
  const { language, direction } = useLanguage()
  const t = translations[language]

  return (
    <section id="pricing" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ${direction === "rtl" ? "tracking-[0.15px]" : ""}`}>
            {t.title}
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {t.subtitle}
          </p>
          <p className="text-[#de354c] font-medium">{t.note}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.tiers.map((tier, index) => (
            <Card
              key={index}
              className={`border-2 ${index === 1 ? "border-[#de354c]" : "hover:border-[#de354c]"} transition-all duration-300`}
            >
              <CardHeader className={direction === "rtl" ? "text-right" : "text-left"}>
                <CardTitle className="flex flex-col">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="text-sm font-normal text-muted-foreground mt-1">{tier.unit}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-base mb-6 ${direction === "rtl" ? "text-right" : "text-left"}`}>
                  {tier.description}
                </CardDescription>
                <ul className={`space-y-2 ${direction === "rtl" ? "text-right" : "text-left"}`}>
                  {t.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      {direction === "rtl" ? (
                        <>
                          <span className="text-sm">{feature}</span>
                          <Check className="h-4 w-4 text-[#de354c] mr-auto ml-2" />
                        </>
                      ) : (
                        <>
                          <Check className="h-4 w-4 text-[#de354c] mr-2" />
                          <span className="text-sm">{feature}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

