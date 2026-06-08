import type { Metadata, Viewport } from 'next'
import { Orbitron, Rajdhani, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  variable: '--font-rajdhani',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Naveen AD | Cyber Security Professional',
  description:
    'Cyber Security Consultant, SOC Analyst, Trainer & Mentor based in Bangalore, India. ISO 27001 Lead Auditor. CompTIA Security+, CySA+. 500+ students trained.',
  keywords: [
    'cybersecurity',
    'SOC analyst',
    'security trainer',
    'ISO 27001',
    'VAPT',
    'GRC',
    'penetration testing',
    'CompTIA',
    'Bangalore',
    'India',
  ],
  authors: [{ name: 'Naveen AD' }],
  openGraph: {
    title: 'Naveen AD | Cyber Security Professional',
    description: 'Cyber Security Consultant | SOC Analyst | Trainer | Mentor',
    type: 'website',
    images: [{ url: '/naveen-photo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naveen AD | Cyber Security Professional',
    description: 'Cyber Security Consultant | SOC Analyst | Trainer | Mentor',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark scroll-smooth ${orbitron.variable} ${rajdhani.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning className="bg-cyber-bg text-white overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  )
}
