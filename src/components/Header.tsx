'use client'

import Link from 'next/link'
import { Navbar } from 'flowbite-react'

import styles from '../../styles/components/Header.module.scss'

export default function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href='https://flowbite-react.com'>
        <img src='/favicon.ico' className='mr-3 h-6 sm:h-9' alt='Flowbite React Logo' />
        <span className='self-center whitespace-nowrap text-xl font-semibold'>Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href='/' active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href='/work'>
          Work
        </Navbar.Link>
        <Navbar.Link href='/contact'>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
