"use client"

import { useLanguage } from "@/components/language-provider"
import { Bot, CheckCircle2, ArrowRight, RefreshCcw, BarChart3 } from "lucide-react"

const translations = {
  en: {
    title: "How Vrobo Works",
    subtitle: "Smart order validation and shipping verification process",
    description: "Two powerful services to prevent failed deliveries",
    steps: [
      {
        title: "Order Validation",
        description: "Before shipping any order, Vrobo automatically verifies delivery details with customers through multiple channels.",
        icon: <Bot className="w-8 h-8" />,
        details: [
          "IVR-powered Robo calls with 3 attempts",
          "Smart WhatsApp chat analysis",
          "SMS and email backup"
        ]
      },
      {
        title: "Shipping Verification",
        description: "When shipping companies report failed deliveries, Vrobo verifies the status directly with customers to detect fake reports.",
        icon: <CheckCircle2 className="w-8 h-8" />,
        details: [
          "Verify shipping status with customer",
          "Detect fake rejection reports",
          "Update customer contact info"
        ]
      },
      {
        title: "Smart Communication",
        description: "Vrobo uses an intelligent system across different channels to ensure maximum response and reach.",
        icon: <RefreshCcw className="w-8 h-8" />,
        details: [
          "Start with IVR-powered Robo calls",
          "Switch to smart WhatsApp chat",
          "Fallback to SMS and email"
        ]
      },
      {
        title: "Instant Updates",
        description: "Automatic updates to your e-commerce platform and shipping partners when order status or customer information changes.",
        icon: <BarChart3 className="w-8 h-8" />,
        details: [
          "Real-time platform updates",
          "Instant merchant notifications",
          "Shipping company alerts"
        ]
      }
    ]
  },
  ar: {
    title: "طريقة عمل فروبو",
    subtitle: "نظام ذكي للتحقق من الطلبات والشحن",
    description: "خدمتين أساسيين لمنع فشل عمليات التوصيل",
    steps: [
      {
        title: "التحقق من الطلبات",
        description: "قبل شحن أي طلب، فروبو بيتأكد تلقائياً من تفاصيل التوصيل مع العملاء من خلال قنوات متعددة.",
        icon: <Bot className="w-8 h-8" />,
        details: [
          "مكالمات ذكية مع 3 محاولات",
          "تحليل ذكي لمحادثات الواتساب",
          "رسايل وإيميل احتياطي"
        ]
      },
      {
        title: "التحقق من الشحن",
        description: "لما شركات الشحن تبلغ عن فشل التوصيل، فروبو بيتأكد من الحالة مباشرة مع العملاء عشان يكتشف التقارير المزيفة.",
        icon: <CheckCircle2 className="w-8 h-8" />,
        details: [
          "التأكد من حالة الشحن مع العميل",
          "كشف تقارير الرفض المزيفة",
          "تحديث بيانات العميل"
        ]
      },
      {
        title: "نظام تواصل ذكي",
        description: "فروبو بيستخدم نظام ذكي للتواصل عبر قنوات مختلفة عشان يضمن أعلى نسبة وصول ورد.",
        icon: <RefreshCcw className="w-8 h-8" />,
        details: [
          "نبدأ بالمكالمات الذكية",
          "ننتقل لمحادثات الواتساب الذكية",
          "نستخدم الرسايل والإيميل كاحتياطي"
        ]
      },
      {
        title: "تحديثات فورية",
        description: "تحديثات تلقائية لمنصة التجارة الإلكترونية وشركات الشحن لما حالة الطلب أو بيانات العميل تتغير.",
        icon: <BarChart3 className="w-8 h-8" />,
        details: [
          "تحديثات فورية للمنصة",
          "إشعارات فورية للتجار",
          "تنبيهات لشركات الشحن"
        ]
      }
    ]
  }
}

export function HowItWorks() {
  const { language, direction } = useLanguage()
  const t = translations[language]

  const fontClass = language === 'ar' ? 'font-[var(--font-almarai)]' : 'font-[var(--font-poppins)]'

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-[#CE035F] to-[#CE035F]/70 bg-clip-text text-transparent ${fontClass}`}>
            {t.title}
          </h2>
          <p className={`text-muted-foreground max-w-[700px] md:text-lg ${fontClass}`}>
            {t.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {t.steps.map((step, index) => (
            <div
              key={index}
              className={`relative p-6 bg-card rounded-xl border border-border/50 hover:border-[#CE035F]/30 transition-colors group ${fontClass}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-[#CE035F]/10 text-[#CE035F] group-hover:bg-[#CE035F] group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {step.description}
              </p>
              <ul className="space-y-2">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-[#CE035F]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

