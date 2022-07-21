import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Footer } from '../Footer'
import { MenuBox } from '../MenuBox'
import { TopNav } from '../Navbar'
import { SideBar } from '../SideBar'

export const Order = ({flavors, sizes,decorations, clickFlavor,clickDeco, clickSize}) => {
  return (
    <>
    <section >
    <TopNav/>
    <Container className='mt-4 '>
    <MenuBox clickFlavor={clickFlavor} clickDeco={clickDeco} clickSize={clickSize}  flavors={flavors} sizes={sizes} decorations={decorations}/>
    
      
    </Container>
      
      <Footer/>
    </section>
      
      </>
  )
}
