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
  description:
    'A results-driven individual with expertise in both front-end development and SEO, passionate about creating exceptional online experiences that drive traffic.'
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
