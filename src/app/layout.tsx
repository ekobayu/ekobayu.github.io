import { Plus_Jakarta_Sans } from 'next/font/google'
import Header from '../components/Header'
import { ThemeModeScript } from 'flowbite-react'

import '../../styles/globals.scss'

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Eko Bayu - Frontend Developer and SEO Specialist',
  description: 'Firebase and Nextjs Web Application'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        <ThemeModeScript />
      </head>
      <body className={plusJakartaSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
