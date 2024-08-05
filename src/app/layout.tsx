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
  const structuredData = {
    '@context': 'https://schema.org/',
    '@type': 'Person',
    name: 'Eko Bayu Kusumo',
    url: 'https://ekobayu.com',
    image: 'https://avatars.githubusercontent.com/u/4278034?v=4',
    sameAs: 'https://github.com/ekobayu',
    jobTitle: 'Front End Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'PT Bullseye'
    }
  }

  return (
    <html lang='en'>
      <head>
        <ThemeModeScript />
        <link rel='canonical' href='https://ekobayu.com/' key='canonical' />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className={plusJakartaSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
