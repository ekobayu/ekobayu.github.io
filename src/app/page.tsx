'use client'
import { useState } from 'react'
import { FullpageContainer, FullpageSection } from '@shinyongjun/react-fullpage'
import { List } from 'flowbite-react'
import Link from 'next/link'
import Image from 'next/image'

import '@shinyongjun/react-fullpage/css'
import bgLine from '../assets/bg-line.svg'
import profileRectangle from '../assets/profile-rectangle.svg'
import { profileImg } from '../assets/profile.js'

// import AddItem from '../components/AddItem'
// import ListItems from '../components/ListItems'

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  return (
    <FullpageContainer activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
      <FullpageSection>
        <div
          id='home'
          className='section-1'
          style={{
            backgroundImage: `url(${bgLine.src})`,
            width: '100%',
            minHeight: '500px'
          }}
        >
          <div className='container mx-auto px-5 md:px-0 mt-34 md:mt-60'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <div className='main-title'>
                  <h1>Frontend Developer</h1>
                  <div className='drop'></div>
                </div>
                <p>
                  A results-driven individual with expertise in both front-end development and SEO, passionate about
                  creating exceptional online experiences that drive traffic and engagement.
                </p>
              </div>
              <div
                className='flex items-center justify-center profile-img md:mt-0 mx-auto mt-10'
                style={{
                  backgroundImage: `url(${profileRectangle.src})`
                }}
              >
                <Image
                  width={250}
                  height={250}
                  // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  src={profileImg}
                  alt='Web Developer Bali'
                />
              </div>
              {/* <AddItem />
                <ListItems /> */}
            </div>
          </div>
        </div>
      </FullpageSection>
      <FullpageSection>
        <div id='about' className='section-2 w-full'>
          <div className='container mx-auto md:mx-24 px-5 md:px-0 my-32 md:my-48'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
              <div>
                <p className='sub-heading'>Skill</p>
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
                  I'm a passionate front-end developer with a keen understanding of SEO since 2014, dedicated to
                  building websites that are both visually stunning and highly visible in search results. I combine my
                  technical skills in HTML, CSS, JavaScript, and NextJS with my SEO knowledge to create user-friendly,
                  engaging, and search engine-optimized websites that deliver results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FullpageSection>
      <FullpageSection>
        <div id='work' className='section-3 w-full'>
          <div className='container mx-auto md:mx-24 px-5 md:px-0 my-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
              <div>
                <p className='sub-heading'>Selected Work</p>
                <p>
                  I'm a SEO Specialist and Front-End Developer who builds beautiful, high-performing websites that rank.
                  I combine technical SEO expertise with front-end development skills to craft engaging user experiences
                  that drive organic traffic and conversions. Check out my portfolio to see how I can help your business
                  succeed online!
                </p>
              </div>

              <div>
                <div className='work-item mb-5'>
                  <Link href='https://myeducationrepublic.com'>
                    <h3>Education Republic</h3>
                  </Link>
                  <p>Web Development</p>
                </div>

                <div className='work-item mb-5'>
                  <Link href='https://soluplus.id'>
                    <h3>Soluplus</h3>
                  </Link>
                  <p>Web Development</p>
                </div>

                <div className='work-item mb-5'>
                  <Link href='https://proconsult.id'>
                    <h3>Proconsult</h3>
                  </Link>
                  <p>Search Engine Optimization</p>
                </div>

                <div className='work-item mb-5'>
                  <Link href='https://duality-studio.com'>
                    <h3>Duality Studio</h3>
                  </Link>
                  <p>Search Engine Optimization</p>
                </div>

                <div className='work-item mb-5'>
                  <Link href='https://teamguan.com'>
                    <h3>Teamguan</h3>
                  </Link>
                  <p>Web Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullpageSection>
      <FullpageSection>
        <footer id='contact' className='section-4 w-full'>
          <div className='container mx-auto md:mx-24 px-5 md:px-0 my-32 md:my-52'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
              <div className='wrapper-circle'>
                <div className='base'>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                </div>
                <div className='base'>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                </div>
                <div className='base'>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                </div>
                <div className='base'>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                  <div className='circ'></div>
                </div>
              </div>
              <div>
                <h3>Contact</h3>
                <p>
                  Got a question or proposal,<br></br> or just want to say hello? Go ahead.
                </p>
                <p>
                  On the Internet:<br></br>
                  <Link href='https://id.linkedin.com/in/ekobayu'> LinkedIn</Link> <span>/</span>
                  <Link href='https://x.com/ekobayu_'> X </Link> <span>/</span>
                  <Link href='https://github.com/ekobayu'> Github</Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </FullpageSection>
    </FullpageContainer>
  )
}
