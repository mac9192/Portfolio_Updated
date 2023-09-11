import './globals.css'
import type { Metadata } from 'next'
import { Abhaya_Libre } from 'next/font/google'
import Navigation from '../components/Navigation'
import Contact from '../components/Contact'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { Toaster } from "react-hot-toast";

const abhaya_Libre = Abhaya_Libre({weight:'400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miguels Web Dev Portfolio',
  description: 'Atlanta Web Design, Blockchain, and Full Stack Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* add this */}
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={abhaya_Libre.className} >
        <Navigation />
        {children}
        <Contact />
        <ContactForm />
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
