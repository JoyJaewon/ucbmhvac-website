import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UCBM HVAC Inc - Keeping You Comfortable All Year Round",
  description:
    "Professional HVAC services for residential and commercial properties. Installation, repair, and maintenance by certified specialists.",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}


import './globals.css'