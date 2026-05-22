import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-outfit" })

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: `VIP UK Betting Sites – Best Rated Sportsbooks ${currentYear}`,
  description:
    "Expert-curated rankings of the UK's top-rated and fully licensed betting sites. In-depth reviews, exclusive welcome offers, and unbiased expert scores — vipukbettingsites.com.",
  metadataBase: new URL("https://vipukbettingsites.com"),
  robots: "index, follow",
  referrer: "strict-origin-when-cross-origin",
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
}

export const viewport = {
  themeColor: "#0f1218",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} bg-background`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen w-full bg-background">
          {children}
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  )
}
