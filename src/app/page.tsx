'use client'
import { useState } from 'react'
import { FullpageContainer, FullpageSection } from '@shinyongjun/react-fullpage'
import { List } from 'flowbite-react'

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
          <div className='container mx-auto px-5 md:px-0 my-32 md:my-60'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <h1>Frontend Developer</h1>
                <p>
                  A results-driven individual with expertise in both front-end development and SEO, passionate about
                  creating exceptional online experiences that drive traffic and engagement.
                </p>
              </div>
              <div>
                {/* <AddItem />
                <ListItems /> */}
              </div>
            </div>
          </div>
        </div>
      </FullpageSection>
      <FullpageSection>
        <div className='section-2 w-full'>
          <div className='container mx-auto md:mx-24 px-5 md:px-0 my-32 md:my-60'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <p className='sub-heading'>My Skill</p>
                <List unstyled>
                  <List.Item>HTML</List.Item>
                  <List.Item>CSS</List.Item>
                  <List.Item>Jquery</List.Item>
                  <List.Item>VueJs</List.Item>
                  <List.Item>NextJs</List.Item>
                  <List.Item>Wordpress</List.Item>
                  <List.Item>Webflow</List.Item>
                  <List.Item>Google Tag Manager</List.Item>
                  <List.Item>SEO</List.Item>
                </List>
              </div>
              <div>
                <h3>About</h3>
                <h2 className='sub-heading'>I'm Eko Bayu. A Frontend Developer, SEO Specialist and problem solver.</h2>
                <p>
                  I'm a passionate front-end developer with a keen understanding of SEO, dedicated to building websites
                  that are both visually stunning and highly visible in search results. I combine my technical skills in
                  HTML, CSS, JavaScript, and NextJS with my SEO knowledge to create user-friendly, engaging, and search
                  engine-optimized websites that deliver results.
                </p>
              </div>
            </div>
          </div>
        </div>
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
