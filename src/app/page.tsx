'use client'
import { useState } from 'react'
import { FullpageContainer, FullpageSection } from '@shinyongjun/react-fullpage'
import '@shinyongjun/react-fullpage/css'
import bgLine from '../assets/bg-line.svg'

// import AddItem from '../components/AddItem'
// import ListItems from '../components/ListItems'

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  return (
    <FullpageContainer activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
      <FullpageSection>
        <div
          className='section-1'
          style={{
            backgroundImage: `url(${bgLine.src})`,
            width: '100%',
            minHeight: '500px'
          }}
        >
          <div className='container mx-auto px-5 md:px-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <h1>Frontend Developer</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem a perspiciatis id nemo quibusdam
                  placeat asperiores quisquam repellat nesciunt impedit. Nobis optio, inventore necessitatibus commodi
                  aperiam repellat error ut quibusdam!
                </p>
              </div>
              <div>09</div>
            </div>
            {/* <AddItem />
            <ListItems /> */}
          </div>
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
