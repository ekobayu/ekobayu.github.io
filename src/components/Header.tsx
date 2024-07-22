'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from 'flowbite-react'

import logo from '../assets/logo.svg'
import styles from '../../styles/components/Header.module.scss'

export default function Header() {
  return (
    <Navbar className={`${styles.wrapperHeader} bg-transparent`}>
      <Navbar.Brand as={Link} href='https://flowbite-react.com'>
        <Image priority src={logo} alt='Eko Bayu Front End Web Developer' />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href='/' active className={`${styles.menuItem}`}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href='/work' className={`${styles.menuItem}`}>
          Work
        </Navbar.Link>
        <Navbar.Link href='/contact' className={`${styles.menuItem}`}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
