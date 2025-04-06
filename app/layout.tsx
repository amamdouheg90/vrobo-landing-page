import type { Metadata } from "next"
import { Poppins, Almarai } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Script from "next/script"
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
    default: "Vrobo - IVR-powered Robo calls Order Confirmation & Shipping Verification | في روبو - التحقق من الطلبات والتوصيل",
    template: "%s | Vrobo | في روبو"
  },
  description: "Vrobo helps e-commerce businesses reduce failed deliveries through IVR-powered Robo calls Order Confirmation and shipping verification. Detect fake shipping updates and validate orders before shipping. | في روبو يساعد شركات التجارة الإلكترونية على تقليل فشل التوصيل من خلال التحقق من الطلبات والتوصيل باستخدام الذكاء الاصطناعي",
  keywords: [
    "Order Confirmation",
    "shipping verification",
    "e-commerce automation",
    "delivery confirmation",
    "IVR-powered Robo calls",
    "fake shipping detection",
    "order management",
    "Vrobo",
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
  authors: [{ name: "Vrobo" }],
  creator: "Vrobo",
  publisher: "Vrobo",
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
    url: "https://Vrobo",
    siteName: "Vrobo | في روبو",
    title: "Vrobo - IVR-powered Robo calls Order Confirmation & Shipping Verification | في روبو - التحقق من الطلبات والتوصيل",
    description: "Reduce failed deliveries by up to 45% with Vrobo's IVR-powered Robo calls Order Confirmation and shipping verification system. Detect fake shipping updates and validate orders before shipping. | قلل فشل التوصيل بنسبة تصل إلى 45٪ مع نظام في روبو للتحقق من الطلبات والتوصيل باستخدام الذكاء الاصطناعي",
    images: [
      {
        url: '/images/vrobo-logo-white-bg.png',
        width: 1200,
        height: 630,
        alt: "Vrobo - IVR-powered Robo calls Order Confirmation | في روبو - التحقق من الطلبات"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vrobo - IVR-powered Robo calls Order Confirmation & Shipping Verification | في روبو - التحقق من الطلبات والتوصيل",
    description: "Reduce failed deliveries by up to 45% with Vrobo's IVR-powered Robo calls Order Confirmation and shipping verification system. | قلل فشل التوصيل بنسبة تصل إلى 45٪ مع نظام في روبو للتحقق من الطلبات والتوصيل",
    images: ['/images/vrobo-logo-white-bg.png'],
    creator: "@vrobo_co",
    site: "@vrobo_co"
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://Vrobo",
    languages: {
      'en-US': 'https://Vrobo',
      'ar-EG': 'https://Vrobo/ar'
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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K2C3S4X5');
          `}
        </Script>
        <link rel="icon" href="/images/vrobo-logo-white-bg.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/vrobo-logo-white-bg.png" />
      </head>
      <body className={`${poppins.variable} ${almarai.variable} font-sans antialiased`} suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2C3S4X5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
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