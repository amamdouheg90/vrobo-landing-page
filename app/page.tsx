import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Schema } from "@/components/schema"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <Faq />
      <ContactForm />
      <Schema />
    </main>
  )
}

