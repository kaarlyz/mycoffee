import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Playfair_Display, Neuton } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar'
import Footer from './components/footer'
import { ReactNode } from 'react'




const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const playfair = Playfair_Display({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-playfair'
})

const neuton = Neuton({
  weight: ['200', '300', '400', '700', '800'],
  subsets: ['latin'],
  variable: '--font-neuton',
  style: ['normal', 'italic']
})

export const metadata: Metadata = {
  title: 'JJ Coffee',
  description: 'Coffee shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${neuton.variable}`}>
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}