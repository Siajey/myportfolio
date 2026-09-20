import type { Metadata } from 'next'
//import Header from '@/components/layout/Header'
import { Fira_Code } from 'next/font/google'
import './globals.css'

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Siavash | Portfolio',
  description: 'Website developer and front-end coder',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${firaCode.variable} antialiased`}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  )
}
