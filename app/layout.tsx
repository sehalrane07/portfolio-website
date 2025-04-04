import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sehal Rane | Portfolio",
  description: "Professional portfolio of Sehal Rane - Data Analyst and Computer Engineering Student",
  keywords: ["portfolio", "data analyst", "computer engineering", "machine learning", "data visualization"],
  authors: [{ name: "Sehal Rane" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sehalrane-portfolio.com",
    title: "Sehal Rane | Portfolio",
    description: "Professional portfolio of Sehal Rane - Data Analyst and Computer Engineering Student",
    siteName: "Sehal Rane Portfolio",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'