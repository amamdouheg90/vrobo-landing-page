"use client"

import { useLanguage } from "@/components/language-provider"

const translations = {
    en: {
        title: "Refund Policy",
        lastUpdated: "Last Updated: March 20, 2024",
        sections: [
            {
                title: "Service Credits",
                content: "- Credits are issued for failed communication attempts due to technical issues on our end\n- Credits are automatically applied to your next billing cycle\n- Credits do not apply to failed deliveries or customer rejections"
            },
            {
                title: "Billing Disputes",
                content: "- Billing disputes must be reported within 30 days of the charge\n- Provide detailed information about the disputed charges\n- We will investigate and respond within 5 business days\n- Valid disputes will result in account credits or refunds"
            },
            {
                title: "Non-Refundable Services",
                content: "The following services are non-refundable:\n- Successful communication attempts (calls, messages)\n- Completed order validations\n- Verified shipping status checks\n- Successfully detected fake updates"
            },
            {
                title: "Trial Period",
                content: "- 3 free Robo calls are provided as a trial\n- Trial usage is non-refundable\n- Unused trial credits do not convert to account credits"
            },
            {
                title: "Service Cancellation",
                content: "- Cancel your subscription at any time\n- Charges are prorated to the last day of service\n- Unused prepaid services may be eligible for partial refunds\n- Contact our support team for cancellation assistance"
            }
        ]
    },
    ar: {
        title: "سياسة الاسترداد",
        lastUpdated: "آخر تحديث: ٢٠ مارس ٢٠٢٤",
        sections: [
            {
                title: "رصيد الخدمة",
                content: "- يتم إصدار رصيد للمحاولات الفاشلة بسبب مشاكل تقنية من جانبنا\n- يتم تطبيق الرصيد تلقائياً في دورة الفواتير التالية\n- لا ينطبق الرصيد على فشل التوصيل أو رفض العملاء"
            },
            {
                title: "نزاعات الفواتير",
                content: "- يجب الإبلاغ عن نزاعات الفواتير خلال 30 يوماً من تاريخ الرسوم\n- قدم معلومات مفصلة عن الرسوم المتنازع عليها\n- سنقوم بالتحقيق والرد خلال 5 أيام عمل\n- النزاعات الصحيحة ستؤدي إلى رصيد في الحساب أو استرداد"
            },
            {
                title: "الخدمات غير القابلة للاسترداد",
                content: "الخدمات التالية غير قابلة للاسترداد:\n- محاولات الاتصال الناجحة (المكالمات، الرسائل)\n- عمليات التحقق المكتملة من الطلبات\n- فحوصات حالة الشحن المؤكدة\n- التحديثات المزيفة المكتشفة بنجاح"
            },
            {
                title: "فترة التجربة",
                content: "- يتم توفير 3 مكالمات روبو مجانية كتجربة\n- استخدام التجربة غير قابل للاسترداد\n- رصيد التجربة غير المستخدم لا يتحول إلى رصيد في الحساب"
            },
            {
                title: "إلغاء الخدمة",
                content: "- يمكنك إلغاء اشتراكك في أي وقت\n- يتم احتساب الرسوم حتى آخر يوم من الخدمة\n- الخدمات المدفوعة مسبقاً غير المستخدمة قد تكون مؤهلة للاسترداد الجزئي\n- اتصل بفريق الدعم للمساعدة في الإلغاء"
            }
        ]
    }
}

export default function Refund() {
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