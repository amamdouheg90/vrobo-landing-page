"use client"

import type React from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Check, Loader2, AlertCircle } from "lucide-react"
import { sendContactFormToSlack } from "@/app/actions"
import { useToast } from "@/components/ui/use-toast"

const translations = {
  en: {
    title: "Contact Us",
    subtitle: "Get in touch with our team",
    name: "Name *",
    email: "Email *",
    phone: "Phone Number *",
    message: "Message *",
    submit: "Send Message",
    namePlaceholder: "Enter your name",
    emailPlaceholder: "Enter your email",
    phonePlaceholder: "Enter your phone number",
    messagePlaceholder: "Enter your message",
    success: "Message sent successfully!",
    error: "Failed to send message. Please try again.",
    invalidPhone: "Please enter a valid phone number",
    required: "This field is required",
    invalidEmail: "Please enter a valid email address"
  },
  ar: {
    title: "تواصل معنا",
    subtitle: "تواصل مع فريقنا",
    name: "الاسم *",
    email: "البريد الإلكتروني *",
    phone: "رقم الهاتف *",
    message: "الرسالة *",
    submit: "إرسال الرسالة",
    namePlaceholder: "أدخل اسمك",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    phonePlaceholder: "أدخل رقم هاتفك",
    messagePlaceholder: "أدخل رسالتك",
    success: "تم إرسال الرسالة بنجاح!",
    error: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    invalidPhone: "يرجى إدخال رقم هاتف صحيح",
    required: "هذا الحقل مطلوب",
    invalidEmail: "يرجى إدخال بريد إلكتروني صحيح"
  }
}

export function ContactForm() {
  const { language, direction } = useLanguage()
  const t = translations[language]
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const validatePhone = (phone: string) => {
    // Allow only numbers, spaces, and these characters: +()-
    const phoneRegex = /^[0-9+\-() ]{8,}$/
    return phoneRegex.test(phone.trim())
  }

  const validateForm = () => {
    const newErrors = {
      name: formData.name ? "" : t.required,
      email: formData.email ? (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : t.invalidEmail) : t.required,
      phone: formData.phone ? (validatePhone(formData.phone) ? "" : t.invalidPhone) : t.required,
      message: formData.message ? "" : t.required,
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      try {
        const result = await sendContactFormToSlack(formData)

        if (result.success) {
          toast({
            title: t.success,
            description: formData.name,
          })
          setFormData({ name: "", email: "", phone: "", message: "" })
        } else {
          throw new Error(result.error)
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: t.error,
          description: error instanceof Error ? error.message : "Unknown error",
        })
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.title}</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {t.subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[600px] grid gap-6 mt-12">
          <form dir={direction} onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
                {t.name}
              </label>
              <Input
                id="name"
                name="name"
                placeholder={t.namePlaceholder}
                className={`${direction === "rtl" ? "text-right placeholder:text-right" : ""}`}
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                {t.email}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t.emailPlaceholder}
                className={`${direction === "rtl" ? "text-right placeholder:text-right" : ""}`}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="phone">
                {t.phone}
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder={t.phonePlaceholder}
                className={`${direction === "rtl" ? "text-right placeholder:text-right" : ""}`}
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">
                {t.message}
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder={t.messagePlaceholder}
                className={`${direction === "rtl" ? "text-right placeholder:text-right" : ""}`}
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            <Button className="bg-[#CE035F] hover:bg-[#A80350] text-white w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>{t.submit}</span>
                </div>
              ) : (
                t.submit
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

