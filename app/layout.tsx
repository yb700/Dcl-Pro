import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import favicon from "@/public/Logos/app.ico"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DCL-PRO Services - Care Provider",
  description: "High quality and personalized care services in the UK",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={favicon.src} />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
import Head from "next/head"
