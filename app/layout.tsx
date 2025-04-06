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
    default: "Vrobo.co - AI-Powered Order Validation & Shipping Verification",
    template: "%s | Vrobo.co"
  },
  description: "Vrobo.co helps e-commerce businesses reduce failed deliveries through AI-powered order validation and shipping verification. Detect fake shipping updates and validate orders before shipping.",
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
    "automated order confirmation"
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
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    url: "https://vrobo.co",
    siteName: "Vrobo.co",
    title: "Vrobo.co - AI-Powered Order Validation & Shipping Verification",
    description: "Reduce failed deliveries by up to 45% with Vrobo.co's AI-powered order validation and shipping verification system. Detect fake shipping updates and validate orders before shipping.",
    images: [
      {
        url: "https://vrobo.co/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vrobo.co - AI-Powered Order Validation"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vrobo.co - AI-Powered Order Validation & Shipping Verification",
    description: "Reduce failed deliveries by up to 45% with Vrobo.co's AI-powered order validation and shipping verification system.",
    images: ['https://vrobo.co/twitter-image.png'],
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