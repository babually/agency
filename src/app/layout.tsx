"use client"

import { Navbar } from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
