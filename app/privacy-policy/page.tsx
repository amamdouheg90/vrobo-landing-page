"use client"

import { useLanguage } from "@/components/language-provider"

const translations = {
    en: {
        title: "Privacy Policy",
        lastUpdated: "Last Updated: March 20, 2024",
        sections: [
            {
                title: "Information We Collect",
                content: "We collect information necessary to provide our Order Confirmation and shipping verification services, including:\n- Customer contact details (phone numbers, email addresses)\n- Order information\n- Communication preferences\n- Delivery addresses\n- Communication history through our channels (calls, WhatsApp, SMS, email)"
            },
            {
                title: "How We Use Information",
                content: "Your information is used to:\n- Validate orders before shipping\n- Verify shipping status and detect fake delivery reports\n- Update order status on e-commerce platforms\n- Communicate through our multi-channel system (IVR calls, WhatsApp, SMS, email)\n- Improve our services and communication methods"
            },
            {
                title: "Information Sharing",
                content: "We share information only with:\n- E-commerce platforms for order status updates\n- Shipping partners for delivery verification\n- Service providers necessary for our operations\nWe never sell your personal information to third parties."
            },
            {
                title: "Data Security",
                content: "We implement industry-standard security measures to protect your information, including encryption, secure access controls, and regular security audits."
            },
            {
                title: "Your Rights",
                content: "You have the right to:\n- Access your personal information\n- Request corrections to your data\n- Opt-out of certain communications\n- Request data deletion (subject to legal requirements)"
            }
        ]
    },
    ar: {
        title: "سياسة الخصوصية",
        lastUpdated: "آخر تحديث: ٢٠ مارس ٢٠٢٤",
        sections: [
            {
                title: "المعلومات التي نجمعها",
                content: "نجمع المعلومات الضرورية لتقديم خدمات التحقق من الطلبات والشحن، وتشمل:\n- بيانات الاتصال بالعملاء (أرقام الهواتف، عناوين البريد الإلكتروني)\n- معلومات الطلبات\n- تفضيلات التواصل\n- عناوين التوصيل\n- سجل التواصل عبر قنواتنا (المكالمات، واتساب، الرسائل القصيرة، البريد الإلكتروني)"
            },
            {
                title: "كيف نستخدم المعلومات",
                content: "نستخدم معلوماتك من أجل:\n- التحقق من الطلبات قبل الشحن\n- التحقق من حالة الشحن وكشف تقارير التوصيل المزيفة\n- تحديث حالة الطلبات على منصات التجارة الإلكترونية\n- التواصل عبر نظامنا متعدد القنوات (المكالمات الذكية، واتساب، الرسائل القصيرة، البريد الإلكتروني)\n- تحسين خدماتنا وطرق التواصل"
            },
            {
                title: "مشاركة المعلومات",
                content: "نشارك المعلومات فقط مع:\n- منصات التجارة الإلكترونية لتحديث حالة الطلبات\n- شركاء الشحن للتحقق من التوصيل\n- مقدمي الخدمات الضروريين لعملياتنا\nلا نبيع معلوماتك الشخصية لأطراف ثالثة أبداً."
            },
            {
                title: "أمن البيانات",
                content: "نطبق إجراءات أمنية قياسية لحماية معلوماتك، تشمل التشفير، وضوابط الوصول الآمن، والتدقيق الأمني المنتظم."
            },
            {
                title: "حقوقك",
                content: "لديك الحق في:\n- الوصول إلى معلوماتك الشخصية\n- طلب تصحيح بياناتك\n- إلغاء الاشتراك في بعض المراسلات\n- طلب حذف البيانات (وفقاً للمتطلبات القانونية)"
            }
        ]
    }
}

export default function PrivacyPolicy() {
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