import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: 'Ali Zokaei | Frontend Developer',
  description: 'Frontend Developer with 6 years of experience in Vue.js, React.js, Next.js, and TypeScript.',
  generator: 'v0.app',
  keywords: ['Frontend Developer', 'Vue.js', 'React.js', 'Next.js', 'TypeScript', 'Ali Zokaei'],
  authors: [{ name: 'Ali Zokaei' }],
  icons: {
    icon: '/a-zokaei.png',
    shortcut: '/a-zokaei.png',
    apple: '/a-zokaei.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
