'use client'
import { useState } from 'react'
import { FullpageContainer, FullpageSection } from '@shinyongjun/react-fullpage'
import '@shinyongjun/react-fullpage/css'

import AddItem from '../components/AddItem'
import ListItems from '../components/ListItems'

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  return (
    <FullpageContainer activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
      <FullpageSection>
        <div>
          <h1>Welcome to My Next.js App</h1>
          <AddItem />
          <ListItems />
        </div>
      </FullpageSection>
      <FullpageSection>
        <div>Section 2</div>
      </FullpageSection>
      <FullpageSection>
        <div>Section 3</div>
      </FullpageSection>
      <FullpageSection isAutoHeight>
        <footer>Footer</footer>
      </FullpageSection>
    </FullpageContainer>
  )
}
