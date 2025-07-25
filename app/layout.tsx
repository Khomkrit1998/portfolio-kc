import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "./contexts/LanguageContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Developer - Portfolio",
  description: "Full-Stack Developer crafting exceptional web experiences with modern technologies",
  keywords: ["web developer", "full-stack", "react", "next.js", "portfolio"],
  authors: [{ name: "John Developer" }],
  openGraph: {
    title: "John Developer - Portfolio",
    description: "Full-Stack Developer crafting exceptional web experiences",
    type: "website",
  },
  generator: "v0.dev",
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
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
