"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

const translations = {
    en: {
        features: "Features",
        howItWorks: "How it Works",
        pricing: "Pricing",
        contact: "Contact",
        login: "Login",
        cta: "Start Free Trial"
    },
    ar: {
        features: "المميزات",
        howItWorks: "كيف يعمل",
        pricing: "الأسعار",
        contact: "تواصل معنا",
        login: "تسجيل الدخول",
        cta: "جرب مجاناً"
    }
}

export function Navbar() {
    const { language, direction } = useLanguage()
    const t = translations[language]

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const href = e.currentTarget.getAttribute("href")
        if (!href?.startsWith("#")) return

        const targetId = href.slice(1)
        const element = document.getElementById(targetId)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/5 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/images/vrobo-logo.png"
                                alt="Vrobo Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-lg font-semibold text-white">Vrobo</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className={`hidden md:flex items-center gap-6 ${direction === "rtl" ? "flex-row-reverse" : ""}`}>
                        <a href="#features" onClick={handleNavClick} className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer">
                            {t.features}
                        </a>
                        <a href="#how-it-works" onClick={handleNavClick} className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer">
                            {t.howItWorks}
                        </a>
                        <a href="#pricing" onClick={handleNavClick} className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer">
                            {t.pricing}
                        </a>
                        <a href="#contact" onClick={handleNavClick} className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer">
                            {t.contact}
                        </a>
                    </div>

                    {/* CTA Button and Language Toggle */}
                    <div className={`flex items-center gap-4 ${direction === "rtl" ? "flex-row-reverse" : ""}`}>
                        <LanguageToggle />
                        <a
                            href="http://admin.Vrobo.co/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white/70 hover:text-white transition-colors"
                        >
                            {t.login}
                        </a>
                        <a
                            href="https://admin.Vrobo.co/createAccount"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#d01e3f] hover:bg-[#d01e3f] text-white px-4 py-2 rounded-md"
                        >
                            {t.cta}
                        </a>
                    </div>
                </div>
            </div>
            {/* Language alternates for SEO */}
            <link rel="alternate" hrefLang="en" href="https://Vrobo" />
            <link rel="alternate" hrefLang="ar" href="https://Vrobo/ar" />
            <link rel="alternate" hrefLang="x-default" href="https://Vrobo" />
        </nav>
    )
} 