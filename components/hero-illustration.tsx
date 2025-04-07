"use client"

import { Phone, MessageSquare, Mail, CheckCircle2, RefreshCcw, ClipboardCheck, Package, BellRing, ArrowRight } from "lucide-react"
import { FaWhatsapp, FaShopify, FaWordpress } from "react-icons/fa"
import { SiWoocommerce } from "react-icons/si"
import { TbTruckDelivery } from "react-icons/tb"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

const translations = {
    en: {
        orderConfirmation: "Order Confirmation",
        shippingValidation: "Shipping Validation",
        aiVoiceCall: "IVR-powered Robo calls",
        whatsapp: "WhatsApp",
        sms: "SMS",
        email: "Email",
        preShippingVerification: "Pre-Shipping Verification",
        postShippingVerification: "Post-Shipping Verification",
        unifiedCommunication: "Unified Communication",
        firstThreeAttempts: "First 3 Attempts",
        fourthAttempt: "Fourth Attempt",
        fallbackAttempt: "Fallback Attempt"
    },
    ar: {
        orderConfirmation: "تأكيد الطلب",
        shippingValidation: "التحقق من الشحن",
        aiVoiceCall: "مكالمة صوتية ذكية",
        whatsapp: "واتساب",
        sms: "رسالة نصية",
        email: "بريد إلكتروني",
        preShippingVerification: "التأكيد قبل الشحن",
        postShippingVerification: "المتابعة بعد الشحن",
        unifiedCommunication: "التواصل الموحد",
        firstThreeAttempts: "المحاولات الثلاث الأولى",
        fourthAttempt: "المحاولة الرابعة",
        fallbackAttempt: "المحاولة البديلة"
    }
}

export function HeroIllustration() {
    const { language, direction } = useLanguage()
    const t = translations[language]

    return (
        <div className="relative w-full max-w-[800px] mx-auto overflow-hidden bg-gradient-to-br from-white/95 to-white/90 rounded-2xl shadow-md">
            {/* Background Accents */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#de354c] rounded-full blur-[100px] opacity-10"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#de354c] rounded-full blur-[100px] opacity-5"></div>

            {/* Main Content */}
            <div className="relative flex flex-col items-center p-8">
                {/* Main Flow Container */}
                <div className="w-full flex flex-col items-center gap-10">
                    {/* Services Split */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                        {/* Order Confirmation Side */}
                        <div className="flex flex-col gap-4 p-4 md:p-6 border-2 border-[#de354c]/30 rounded-2xl bg-white/80 shadow-[0_0_15px_rgba(206,3,95,0.1)]">
                            <div className="bg-white/80 rounded-2xl p-4 md:p-6 shadow-sm">
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#de354c]/20 to-[#de354c]/5 rounded-xl flex items-center justify-center shadow-lg">
                                        <ClipboardCheck className="w-6 h-6 text-[#de354c]" />
                                    </div>
                                    <h3 className={`text-lg font-medium text-black ${direction === "rtl" ? "whitespace-nowrap" : "break-words max-w-[180px]"}`}>{t.orderConfirmation}</h3>
                                </div>

                                {/* Platform Integration */}
                                <div className="flex items-center justify-center gap-6">
                                    <div className="w-12 h-12 bg-[#de354c]/10 rounded-lg flex items-center justify-center">
                                        <FaShopify className="w-6 h-6 text-[#de354c]" />
                                    </div>
                                    <div className="w-12 h-12 bg-[#de354c]/10 rounded-lg flex items-center justify-center">
                                        <SiWoocommerce className="w-6 h-6 text-[#de354c]" />
                                    </div>
                                    <div className="w-12 h-12 bg-[#de354c]/10 rounded-lg flex items-center justify-center">
                                        <FaWordpress className="w-6 h-6 text-[#de354c]" />
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 py-1.5 bg-[#de354c]/10 rounded-lg flex items-center gap-2 justify-center">
                                <div className="w-2 h-2 rounded-full bg-[#de354c] animate-pulse"></div>
                                <span className="text-xs text-black/70">{t.preShippingVerification}</span>
                            </div>
                        </div>

                        {/* Shipping Validation Side */}
                        <div className="flex flex-col gap-4 p-4 md:p-6 border-2 border-[#de354c]/30 rounded-2xl bg-white/80 shadow-[0_0_15px_rgba(206,3,95,0.1)]">
                            <div className="bg-white/80 rounded-2xl p-4 md:p-6 shadow-sm">
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#de354c]/20 to-[#de354c]/5 rounded-xl flex items-center justify-center shadow-lg">
                                        <CheckCircle2 className="w-6 h-6 text-[#de354c]" />
                                    </div>
                                    <h3 className={`text-lg font-medium text-black ${direction === "rtl" ? "whitespace-nowrap" : "break-words max-w-[180px]"}`}>{t.shippingValidation}</h3>
                                </div>

                                {/* Validation Steps */}
                                <div className="flex items-center justify-center gap-6">
                                    <div className="w-12 h-12 bg-[#de354c]/10 rounded-lg flex items-center justify-center">
                                        <TbTruckDelivery className="w-6 h-6 text-[#de354c]" />
                                    </div>
                                    <div className="w-12 h-12 bg-[#de354c]/10 rounded-lg flex items-center justify-center">
                                        <Package className="w-6 h-6 text-[#de354c]" />
                                    </div>
                                    <div className="w-12 h-12 bg-[#de354c]/10 rounded-lg flex items-center justify-center">
                                        <BellRing className="w-6 h-6 text-[#de354c]" />
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 py-1.5 bg-[#de354c]/10 rounded-lg flex items-center gap-2 justify-center">
                                <div className="w-2 h-2 rounded-full bg-[#de354c] animate-pulse"></div>
                                <span className="text-xs text-black/70">{t.postShippingVerification}</span>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full flex items-center justify-center gap-4 px-8">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#de354c]/30 to-transparent"></div>
                        <div className="px-4 py-2 bg-white/80 rounded-lg flex items-center gap-2 shadow-sm">
                            <RefreshCcw className="w-3 h-3 text-[#de354c] animate-spin" />
                            <span className="text-xs text-black/70">{t.unifiedCommunication}</span>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#de354c]/30 to-transparent"></div>
                    </div>

                    {/* Unified Communication Methods */}
                    <div className="w-full p-6 border-2 border-[#de354c]/30 rounded-2xl bg-white/80 shadow-[0_0_15px_rgba(206,3,95,0.1)]">
                        <div className="w-full bg-white/80 rounded-2xl p-6 shadow-sm">
                            <div className="grid grid-cols-4 gap-8">
                                <div className="relative">
                                    <div className="absolute top-1/2 -right-3 w-full h-0.5 bg-gradient-to-r from-[#de354c]/50 to-[#de354c]/10"></div>
                                    <div className="flex flex-col items-center gap-3 group">
                                        <div className="w-14 h-14 bg-[#de354c]/10 rounded-xl flex items-center justify-center group-hover:bg-[#de354c]/20 transition-all">
                                            <Phone className="w-7 h-7 text-[#de354c]" />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xs font-medium text-black/70">{t.aiVoiceCall}</div>
                                            <div className="text-[10px] text-black/40">{t.firstThreeAttempts}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute top-1/2 -right-3 w-full h-0.5 bg-gradient-to-r from-[#de354c]/50 to-[#de354c]/10"></div>
                                    <div className="flex flex-col items-center gap-3 group">
                                        <div className="w-14 h-14 bg-[#de354c]/10 rounded-xl flex items-center justify-center group-hover:bg-[#de354c]/20 transition-all">
                                            <FaWhatsapp className="w-7 h-7 text-[#de354c]" />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xs font-medium text-black/70">{t.whatsapp}</div>
                                            <div className="text-[10px] text-black/40">{t.fourthAttempt}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute top-1/2 -right-3 w-full h-0.5 bg-gradient-to-r from-[#de354c]/50 to-[#de354c]/10"></div>
                                    <div className="flex flex-col items-center gap-3 group">
                                        <div className="w-14 h-14 bg-[#de354c]/10 rounded-xl flex items-center justify-center group-hover:bg-[#de354c]/20 transition-all">
                                            <MessageSquare className="w-7 h-7 text-[#de354c]" />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xs font-medium text-black/70">{t.sms}</div>
                                            <div className="text-[10px] text-black/40">{t.fallbackAttempt}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-3 group">
                                    <div className="w-14 h-14 bg-[#de354c]/10 rounded-xl flex items-center justify-center group-hover:bg-[#de354c]/20 transition-all">
                                        <Mail className="w-7 h-7 text-[#de354c]" />
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs font-medium text-black/70">{t.email}</div>
                                        <div className="text-[10px] text-black/40">{t.fallbackAttempt}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}