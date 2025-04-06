"use client"

import { useLanguage } from "@/components/language-provider"

const translations = {
    en: {
        title: "Terms and Conditions",
        lastUpdated: "Last Updated: March 20, 2024",
        sections: [
            {
                title: "Service Description",
                content: "Vrobo.co provides order validation and shipping verification services through:\n- IVR-powered Robo calls\n- WhatsApp messaging\n- SMS notifications\n- Email communications\nOur services are designed to reduce failed deliveries and detect fake shipping updates."
            },
            {
                title: "User Obligations",
                content: "By using our services, you agree to:\n- Provide accurate and up-to-date information\n- Maintain the security of your account credentials\n- Use our services in compliance with applicable laws\n- Not interfere with or disrupt our services"
            },
            {
                title: "Service Limitations",
                content: "- We make up to 3 Robo-call attempts per order\n- Response times may vary based on customer availability\n- Service availability depends on third-party communication channels\n- We cannot guarantee 100% detection of all fake shipping updates"
            },
            {
                title: "Pricing and Payment",
                content: "- Pricing is based on monthly order volume\n- Fees are charged per order processed\n- All communication channels are included in the price\n- Payment terms are specified in your service agreement"
            },
            {
                title: "Termination",
                content: "We reserve the right to suspend or terminate services if:\n- Account information is inaccurate\n- Services are used for unauthorized purposes\n- Payment obligations are not met\n- Terms of service are violated"
            }
        ]
    },
    ar: {
        title: "الشروط والأحكام",
        lastUpdated: "آخر تحديث: ٢٠ مارس ٢٠٢٤",
        sections: [
            {
                title: "وصف الخدمة",
                content: "يقدم فروبو.كو خدمات التحقق من الطلبات والشحن من خلال:\n- مكالمات روبو مدعومة بـ IVR\n- مراسلة واتساب\n- إشعارات الرسائل القصيرة\n- مراسلات البريد الإلكتروني\nخدماتنا مصممة لتقليل فشل عمليات التوصيل وكشف تحديثات الشحن المزيفة."
            },
            {
                title: "التزامات المستخدم",
                content: "باستخدام خدماتنا، أنت توافق على:\n- تقديم معلومات دقيقة ومحدثة\n- الحفاظ على أمان بيانات حسابك\n- استخدام خدماتنا وفقاً للقوانين المعمول بها\n- عدم التدخل في خدماتنا أو تعطيلها"
            },
            {
                title: "حدود الخدمة",
                content: "- نقوم بما يصل إلى 3 محاولات مكالمات روبو لكل طلب\n- قد تختلف أوقات الاستجابة حسب توفر العميل\n- يعتمد توفر الخدمة على قنوات الاتصال الخارجية\n- لا يمكننا ضمان كشف 100% من جميع تحديثات الشحن المزيفة"
            },
            {
                title: "التسعير والدفع",
                content: "- يعتمد التسعير على حجم الطلبات الشهرية\n- يتم احتساب الرسوم لكل طلب تتم معالجته\n- جميع قنوات الاتصال مشمولة في السعر\n- شروط الدفع محددة في اتفاقية الخدمة الخاصة بك"
            },
            {
                title: "إنهاء الخدمة",
                content: "نحتفظ بالحق في تعليق أو إنهاء الخدمات في حالة:\n- عدم دقة معلومات الحساب\n- استخدام الخدمات لأغراض غير مصرح بها\n- عدم الوفاء بالتزامات الدفع\n- انتهاك شروط الخدمة"
            }
        ]
    }
}

export default function Terms() {
    const { language, direction } = useLanguage()
    const t = translations[language]

    return (
        <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className={`text-4xl font-bold mb-4 ${direction === "rtl" ? "text-right" : "text-left"}`}>
                    {t.title}
                </h1>
                <p className={`text-gray-500 mb-8 ${direction === "rtl" ? "text-right" : "text-left"}`}>
                    {t.lastUpdated}
                </p>

                <div className="space-y-8">
                    {t.sections.map((section, index) => (
                        <div key={index} className={direction === "rtl" ? "text-right" : "text-left"}>
                            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                            <div className="text-gray-600 whitespace-pre-line">
                                {section.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 