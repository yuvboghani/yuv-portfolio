import type React from "react"
import type { Metadata } from "next"
import { Syncopate, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Silk from "@/components/silk"
import { Navbar } from "@/components/navbar"
import { Toaster } from "sonner"
import "./globals.css"

const syncopate = Syncopate({
  subsets: ["latin"],
  variable: "--font-syncopate",
  weight: ["700"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Yuv Boghani - Computational Data Sciences Student",
  description: "Portfolio of Yuv Boghani - Building intelligent systems with ML/NLP and robust backend engineering.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syncopate.variable} ${spaceGrotesk.variable} font-space-grotesk antialiased bg-[#0a0a0c]`} suppressHydrationWarning>
        <Silk />
        <Navbar />
        <div className="pt-20">{children}</div>
        <Analytics />
        <Toaster theme="dark" position="bottom-right" />
      </body>
    </html>
  )
}
