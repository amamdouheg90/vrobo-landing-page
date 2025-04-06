"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const translations = {
  en: {
    title: "What Our Clients Say",
    subtitle: "Success stories from businesses using Vrobo",
    testimonials: [
      {
        text: "The shipping validation service helped us detect fake delivery reports effectively. Our delivery success rate improved significantly since implementing Vrobo's verification system.",
        author: "Shady",
        position: "Cizaro Jeans",
        service: "Shipping Validation"
      },
      {
        text: "Using both order confirmation and shipping validation has transformed our delivery process. The AI-powered calls and verification system reduced our failed deliveries by 45%.",
        author: "Mazen",
        position: "Dr Gomla - Hats & Accessories",
        service: "Order Confirmation & Shipping Validation"
      },
      {
        text: "As a fulfillment company, accurate delivery verification is crucial. Vrobo's shipping validation service has helped us maintain high delivery success rates and detect issues early.",
        author: "Ahmed",
        position: "Stox Fulfillment",
        service: "Shipping Validation"
      },
      {
        text: "The shipping validation service has been instrumental in improving our delivery accuracy. We can now quickly verify and address any delivery issues.",
        author: "Mr Samer",
        position: "Mylerz",
        service: "Shipping Validation"
      },
      {
        text: "The combination of pre-shipping confirmation and delivery validation has significantly reduced our failed deliveries. Vrobo's multi-channel approach ensures we reach every customer.",
        author: "Mohamed",
        position: "Mazalle",
        service: "Order Confirmation & Shipping Validation"
      }
    ]
  },
  ar: {
    title: "آراء عملائنا",
    subtitle: "قصص نجاح الشركات اللي بتستخدم فروبو",
    testimonials: [
      {
        text: "خدمة التحقق من الشحن ساعدتنا نكتشف تقارير التوصيل المزيفة بكفاءة. معدل نجاح التوصيل اتحسن بشكل كبير من ساعة ما استخدمنا نظام التحقق بتاع فروبو.",
        author: "شادي",
        position: "سيزارو جينز",
        service: "التحقق من الشحن"
      },
      {
        text: "استخدام خدمتي تأكيد الطلبات والتحقق من الشحن غير نظام التوصيل بتاعنا بالكامل. المكالمات الذكية ونظام التحقق قللوا حالات فشل التوصيل بنسبة 45%.",
        author: "مازن",
        position: "دكتور جملة - إكسسوارات وقبعات",
        service: "تأكيد الطلبات والتحقق من الشحن"
      },
      {
        text: "كشركة تخزين وتوصيل، التحقق الدقيق من التوصيل مهم جداً. خدمة التحقق من الشحن من فروبو ساعدتنا نحافظ على معدلات نجاح توصيل عالية ونكتشف المشاكل بسرعة.",
        author: "أحمد",
        position: "ستوكس للتخزين والتوصيل",
        service: "التحقق من الشحن"
      },
      {
        text: "خدمة التحقق من الشحن كان ليها دور كبير في تحسين دقة التوصيل. دلوقتي نقدر نتحقق من أي مشاكل في التوصيل ونحلها بسرعة.",
        author: "الأستاذ سمير",
        position: "مايلرز",
        service: "التحقق من الشحن"
      },
      {
        text: "الجمع بين خدمتي التأكيد قبل الشحن والتحقق من التوصيل قلل بشكل كبير من حالات فشل التوصيل. نظام فروبو متعدد القنوات بيضمن إننا نوصل لكل عميل.",
        author: "محمد",
        position: "مازال",
        service: "تأكيد الطلبات والتحقق من الشحن"
      }
    ]
  },
}

export function Testimonials() {
  const { language, direction } = useLanguage()
  const t = translations[language]

  return (
    <section id="testimonials" className={`w-full py-12 md:py-24 lg:py-32 bg-black ${direction}`}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-foreground">
              {t.title}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {t.subtitle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {t.testimonials.slice(0, 3).map((testimonial, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-6 bg-white/5 rounded-lg border border-gray-800"
            >
              <div>
                <div className={`flex items-center mb-4 ${direction === "rtl" ? "flex-row-reverse" : ""}`}>
                  <div className={`h-12 w-12 rounded-full bg-[#CE035F] flex items-center justify-center text-white font-bold text-lg ${direction === "rtl" ? "ml-4" : "mr-4"}`}>
                    {testimonial.author[0].toUpperCase()}
                  </div>
                  <div className={`flex flex-col ${direction === "rtl" ? "text-right" : "text-left"}`}>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                    <p className="text-xs text-[#CE035F] mt-1">{testimonial.service}</p>
                  </div>
                </div>
                <p className={`flex-grow mb-4 text-gray-400 ${direction === "rtl" ? "text-right" : "text-left"}`}>
                  "{testimonial.text}"
                </p>
              </div>
              <div className={`flex ${direction === "rtl" ? "justify-end" : ""}`}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#CE035F] fill-[#CE035F]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 lg:max-w-[66%] mx-auto">
          {t.testimonials.slice(3).map((testimonial, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-6 bg-white/5 rounded-lg border border-gray-800"
            >
              <div>
                <div className={`flex items-center mb-4 ${direction === "rtl" ? "flex-row-reverse" : ""}`}>
                  <div className={`h-12 w-12 rounded-full bg-[#CE035F] flex items-center justify-center text-white font-bold text-lg ${direction === "rtl" ? "ml-4" : "mr-4"}`}>
                    {testimonial.author[0].toUpperCase()}
                  </div>
                  <div className={`flex flex-col ${direction === "rtl" ? "text-right" : "text-left"}`}>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                    <p className="text-xs text-[#CE035F] mt-1">{testimonial.service}</p>
                  </div>
                </div>
                <p className={`flex-grow mb-4 text-gray-400 ${direction === "rtl" ? "text-right" : "text-left"}`}>
                  "{testimonial.text}"
                </p>
              </div>
              <div className={`flex ${direction === "rtl" ? "justify-end" : ""}`}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#CE035F] fill-[#CE035F]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

