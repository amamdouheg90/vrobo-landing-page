import type { Metadata } from "next"
import { Poppins, Almarai } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-almarai'
})

export const metadata: Metadata = {
  title: {
    default: "Vrobo.co - AI-Powered Order Confirmation & Shipping Verification | في روبو - التحقق من الطلبات والتوصيل",
    template: "%s | Vrobo.co | في روبو"
  },
  description: "Vrobo.co helps e-commerce businesses reduce failed deliveries through AI-Powered Order Confirmation and shipping verification. Detect fake shipping updates and validate orders before shipping. | في روبو يساعد شركات التجارة الإلكترونية على تقليل فشل التوصيل من خلال التحقق من الطلبات والتوصيل باستخدام الذكاء الاصطناعي",
  keywords: [
    "order validation",
    "shipping verification",
    "e-commerce automation",
    "delivery confirmation",
    "AI-powered calls",
    "fake shipping detection",
    "order management",
    "vrobo.co",
    "delivery validation",
    "automated order confirmation",
    "التحقق من الطلبات",
    "التحقق من التوصيل",
    "أتمتة التجارة الإلكترونية",
    "تأكيد التوصيل",
    "مكالمات بالذكاء الاصطناعي",
    "كشف التوصيل المزيف",
    "إدارة الطلبات",
    "في روبو",
    "التحقق من التسليم",
    "تأكيد الطلبات الآلي"
  ],
  authors: [{ name: "Vrobo.co" }],
  creator: "Vrobo.co",
  publisher: "Vrobo.co",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/images/vrobo-logo-white-bg.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/vrobo-logo-white-bg.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/images/vrobo-logo-white-bg.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
    shortcut: '/images/vrobo-logo-white-bg.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    url: "https://vrobo.co",
    siteName: "Vrobo.co | في روبو",
    title: "Vrobo.co - AI-Powered Order Confirmation & Shipping Verification | في روبو - التحقق من الطلبات والتوصيل",
    description: "Reduce failed deliveries by up to 45% with Vrobo.co's AI-Powered Order Confirmation and shipping verification system. Detect fake shipping updates and validate orders before shipping. | قلل فشل التوصيل بنسبة تصل إلى 45٪ مع نظام في روبو للتحقق من الطلبات والتوصيل باستخدام الذكاء الاصطناعي",
    images: [
      {
        url: '/images/vrobo-logo-white-bg.png',
        width: 1200,
        height: 630,
        alt: "Vrobo.co - AI-Powered Order Confirmation | في روبو - التحقق من الطلبات"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vrobo.co - AI-Powered Order Confirmation & Shipping Verification | في روبو - التحقق من الطلبات والتوصيل",
    description: "Reduce failed deliveries by up to 45% with Vrobo.co's AI-Powered Order Confirmation and shipping verification system. | قلل فشل التوصيل بنسبة تصل إلى 45٪ مع نظام في روبو للتحقق من الطلبات والتوصيل",
    images: ['/images/vrobo-logo-white-bg.png'],
    creator: "@vrobo_co",
    site: "@vrobo_co"
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://vrobo.co",
    languages: {
      'en-US': 'https://vrobo.co',
      'ar-EG': 'https://vrobo.co/ar'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/vrobo-logo-white-bg.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/vrobo-logo-white-bg.png" />
      </head>
      <body className={`${poppins.variable} ${almarai.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <Navbar />
            <main className="min-h-screen bg-black pt-8">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}