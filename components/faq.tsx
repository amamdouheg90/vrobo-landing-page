"use client"

import { useLanguage } from "@/components/language-provider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const translations = {
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Common questions about Vrobo",
    faqs: [
      {
        question: "What are Vrobo's main services?",
        answer:
          "Vrobo offers two main services: 1) Order Confirmation - verifying orders with customers before shipping through IVR-powered Robo calls, WhatsApp, SMS, and email, and 2) Shipping Verification - checking shipping companies' reports when orders are marked as undelivered to detect fake updates.",
      },
      {
        question: "How does Vrobo's communication process work?",
        answer:
          "Vrobo follows a smart communication sequence: First, it makes up to 3 IVR-powered Robo calls call attempts with customized messages for your brand. If calls are unsuccessful, it switches to WhatsApp messaging with smart response analysis. If WhatsApp fails, SMS messages are sent. As a final step, email notifications ensure maximum reach.",
      },
      {
        question: "How does Vrobo integrate with e-commerce platforms?",
        answer:
          "Vrobo seamlessly integrates with major platforms like Shopify and WooCommerce. When order status changes or customer information is updated, Vrobo automatically syncs this data with your platform and notifies shipping partners in real-time.",
      },
      {
        question: "How does Vrobo handle shipping verification?",
        answer:
          "When a shipping company reports a failed delivery, Vrobo automatically contacts the customer through multiple channels to verify if the report is genuine. This helps prevent fake delivery status reports and ensures accurate order tracking.",
      },
      {
        question: "What happens when Vrobo detects fake shipping updates?",
        answer:
          "When Vrobo detects a discrepancy between the shipping company's report and the customer's feedback, it immediately notifies both the merchant and the shipping company. The order status in your e-commerce platform is updated with the correct information.",
      },
      {
        question: "Can Vrobo update customer contact information?",
        answer:
          "Yes, when Vrobo communicates with customers, it can collect updated contact information or delivery preferences. This information is automatically synced with your e-commerce platform and shared with shipping partners to prevent future delivery issues.",
      },
      {
        question: "How is Vrobo priced?",
        answer:
          "Vrobo offers volume-based pricing starting from EGP 3.00 per order for merchants with fewer than 2,000 orders/month, down to EGP 1.50 per order for those with more than 20,000 orders/month. All plans include both validation services and all communication channels.",
      },
    ],
  },
  ar: {
    title: "الأسئلة المتكررة",
    subtitle: "إجابات على الأسئلة المتكررة عن فروبو",
    faqs: [
      {
        question: "إيه هي خدمات فروبو الرئيسية؟",
        answer:
          "فروبو بيقدم خدمتين رئيسيين: 1) التحقق من الطلبات - بنتأكد من الطلبات مع العملاء قبل الشحن عن طريق المكالمات الذكية والواتساب والرسايل والإيميل، و 2) التحقق من الشحن - بنتأكد من تقارير شركات الشحن لما الطلبات تتبلغ كمرفوضة.",
      },
      {
        question: "إزاي بيشتغل نظام التواصل بتاع فروبو؟",
        answer:
          "فروبو بيتبع نظام تواصل ذكي: الأول، بيعمل لحد 3 محاولات مكالمات ذكية برسايل مخصصة لعلامتك التجارية. لو المكالمات مانجحتش، بينتقل لمحادثات واتساب مع تحليل ذكي للردود. لو الواتساب مانجحش، بيبعت رسايل قصيرة. وأخيراً، بيبعت إيميل عشان نضمن أعلى نسبة وصول.",
      },
      {
        question: "إزاي فروبو بيتكامل مع منصات التجارة الإلكترونية؟",
        answer:
          "فروبو بيتكامل بسهولة مع المنصات الكبيرة زي شوبيفاي وووكومرس. لما حالة الطلب تتغير أو معلومات العميل تتحدث، فروبو بيزامن البيانات دي تلقائياً مع منصتك وبيبلغ شركات الشحن في نفس اللحظة.",
      },
      {
        question: "إزاي فروبو بيتعامل مع التحقق من الشحن؟",
        answer:
          "لما شركة الشحن تبلغ عن فشل توصيل، فروبو بيتواصل تلقائياً مع العميل من خلال قنوات متعددة عشان يتأكد إذا كان البلاغ حقيقي. ده بيساعد في منع تقارير حالة التوصيل المزيفة وبيضمن تتبع دقيق للطلبات.",
      },
      {
        question: "بيحصل إيه لما فروبو يكتشف تحديثات شحن مزيفة؟",
        answer:
          "لما فروبو يلاقي اختلاف بين تقرير شركة الشحن ورد العميل، بيبلغ التاجر وشركة الشحن على طول. وبيحدث حالة الطلب في منصة التجارة الإلكترونية بالمعلومات الصحيحة.",
      },
      {
        question: "فروبو ممكن يحدث معلومات الاتصال بالعملاء؟",
        answer:
          "أيوة، لما فروبو بيتواصل مع العملاء، بيقدر يجمع معلومات الاتصال المحدثة أو تفضيلات التوصيل. المعلومات دي بتتزامن تلقائياً مع منصة التجارة الإلكترونية وبتتشارك مع شركات الشحن عشان نمنع مشاكل التوصيل في المستقبل.",
      },
      {
        question: "إيه نظام تسعير فروبو؟",
        answer:
          "فروبو بيقدم أسعار حسب حجم الطلبات الشهرية، بتبدأ من 3 جنيه للطلب للتجار اللي عندهم أقل من 2,000 طلب شهرياً، وبتوصل لـ 1.5 جنيه للطلب للي عندهم أكتر من 20,000 طلب شهرياً. كل الباقات بتشمل خدمتي التحقق وكل قنوات التواصل.",
      },
    ],
  },
}

export function Faq() {
  const { language, direction } = useLanguage()
  const t = translations[language]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.title}</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {t.subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {t.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className={`${direction === "rtl" ? "text-right" : "text-left"} font-medium`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className={direction === "rtl" ? "text-right" : "text-left"}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

