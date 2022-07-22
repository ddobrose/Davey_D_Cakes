import React from 'react'
import { TopNav } from '../Navbar'
import { Footer } from '../Footer'
import { Container } from 'react-bootstrap'
import { SideBar } from '../SideBar'


export const Find = () => {
  return (
    <section >
    <TopNav/>
    <Container className='mt-4 '>
      <SideBar/>
    {/* <MenuBox clickFlavor={clickFlavor} clickDeco={clickDeco} clickSize={clickSize}  flavors={flavors} sizes={sizes} decorations={decorations}/> */}
    
      
    </Container>
      
      <Footer/>
    </section>
  )
}
