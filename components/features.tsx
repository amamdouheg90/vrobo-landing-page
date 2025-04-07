"use client"

import { useLanguage } from "@/components/language-provider"
import { Bot, MessageSquare, BarChart, Globe, MessageCircle, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const translations = {
  en: {
    title: "Features",
    subtitle: "Comprehensive Order Confirmation and shipping confirmation platform",
    features: [
      {
        title: "Pre-Shipping Validation",
        description: "Validate order details with customers through IVR-powered Robo calls before shipping to prevent delivery issues and reduce costs.",
      },
      {
        title: "Shipping Status Verification",
        description: "Detect fake delivery reports by verifying shipping status directly with customers through multiple communication channels.",
      },
      {
        title: "Smart Communication",
        description: "Strategic communication sequence with 3 Robo-IVR call attempts, followed by WhatsApp with smart analysis, SMS, and email.",
      },
      {
        title: "Brand Integration",
        description: "Customized voice messages and templates for each brand to maintain consistent and professional communication.",
      },
      {
        title: "Platform Integration",
        description: "Seamless integration with Shopify, WooCommerce, and other platforms for automatic order status updates.",
      },
      {
        title: "Real-time Updates",
        description: "Instant notifications to merchants and shipping partners when fake updates are detected or customer information changes.",
      },
    ],
  },
  ar: {
    title: "المميزات",
    subtitle: "منصة متكاملة للتحقق من الطلبات وتأكيد الشحن",
    features: [
      {
        title: "التأكيد قبل الشحن",
        description: "بنتأكد من تفاصيل الطلب مع العملاء من خلال المكالمات الذكية قبل الشحن عشان نمنع مشاكل التوصيل ونقلل التكاليف.",
      },
      {
        title: "التحقق من حالة الشحن",
        description: "بنكتشف تقارير التوصيل المزيفة عن طريق التأكد من حالة الشحن مباشرة مع العملاء من خلال قنوات اتصال متعددة.",
      },
      {
        title: "التواصل الذكي",
        description: "نظام اتصال متطور بيعمل 3 محاولات مكالمات ذكية، وبعدين واتساب مع تحليل ذكي، ورسايل قصيرة، وإيميل.",
      },
      {
        title: "دمج العلامة التجارية",
        description: "رسايل صوتية وقوالب مخصصة لكل علامة تجارية للحفاظ على تواصل احترافي ومتناسق.",
      },
      {
        title: "دمج المنصات",
        description: "دمج سلس مع شوبيفاي وووكومرس والمنصات التانية لتحديث حالة الطلبات تلقائياً.",
      },
      {
        title: "تحديثات فورية",
        description: "إشعارات فورية للتجار وشركات الشحن لما نكتشف تحديثات مزيفة أو تغيير في معلومات العميل.",
      },
    ],
  },
}

const icons = [
  <Bot key="bot" className="w-10 h-10 text-[#de354c]" />,
  <MessageSquare key="message" className="w-10 h-10 text-[#de354c]" />,
  <BarChart key="chart" className="w-10 h-10 text-[#de354c]" />,
  <Globe key="globe" className="w-10 h-10 text-[#de354c]" />,
  <MessageCircle key="sms" className="w-10 h-10 text-[#de354c]" />,
  <Shield key="shield" className="w-10 h-10 text-[#de354c]" />,
]

export function Features() {
  const { language, direction } = useLanguage()
  const t = translations[language]

  return (
    <section id="features" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ${direction === "rtl" ? "tracking-[0.15px]" : ""}`}>
            {t.title}
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-[#de354c] transition-all duration-300">
              <CardHeader className={direction === "rtl" ? "text-right" : "text-left"}>
                <div className={`mb-2 ${direction === "rtl" ? "mr-0" : ""}`}>{icons[index]}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-base ${direction === "rtl" ? "text-right" : "text-left"}`}>
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

