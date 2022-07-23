import React, { useEffect, useState } from 'react'
import { Container} from 'react-bootstrap'
import { Footer } from '../Footer'
// import { MenuBox } from '../MenuBox'
import { TopNav } from '../Navbar'
// import { SideBar } from '../SideBar'
import { CartBox } from '../CartBox'

export const Cart = ({flavors, sizes,decorations, clickFlavor,clickDeco, clickSize}) => {
  return (

    
    
    <>
    <section >
    <TopNav/>
    <Container className='mt-4 '>
    <CartBox clickFlavor={clickFlavor} clickDeco={clickDeco} clickSize={clickSize}  flavors={flavors} sizes={sizes} decorations={decorations}/>
    
      
    </Container>
      
      <Footer/>
    </section>
      
      </>
  )
}