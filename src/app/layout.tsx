import { Inter } from 'next/font/google'
import Header from '../components/Header'
import { ThemeModeScript } from 'flowbite-react'

import '../../styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextjs Firebase Home',
  description: 'Firebase and Nextjs Web Application'
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
