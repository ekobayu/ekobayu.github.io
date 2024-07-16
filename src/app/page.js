'use client'
import Link from 'next/link'

import AddItem from '../components/AddItem'
import ListItems from '../components/ListItems'

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <Link href='/work'>Work</Link>
      <AddItem />
      <ListItems />
    </div>
  )
}
