'use client'

import AddItem from '../components/AddItem'
import ListItems from '../components/ListItems'

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <AddItem />
      <ListItems />
    </div>
  )
}
