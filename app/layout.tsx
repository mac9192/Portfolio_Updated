import './globals.css'
import type { Metadata } from 'next'
import { Abhaya_Libre } from 'next/font/google'
import Navigation from '../components/Navigation'
import Contact from '../components/Contact'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const abhaya_Libre = Abhaya_Libre({weight:'400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={abhaya_Libre.className} >
        <Navigation />
        {children}
        <Contact />
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
