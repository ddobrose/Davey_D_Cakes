import React, { useEffect, useState } from 'react'
import { Container} from 'react-bootstrap'
import { Footer } from '../Footer'
// import { MenuBox } from '../MenuBox'
import { TopNav } from '../Navbar'
// import { SideBar } from '../SideBar'
import { CartBox } from '../CartBox'

export const Cart = ({flavors, sizes,decorations, clickFlavor,clickDeco, clickSize,cart,setCart,cartPrice,setCartPrice,submitCart}) => {
  return (

    
    
    <>
    <section >
    <TopNav/>
    <Container className='mt-4 '>
    <CartBox submitCart={submitCart} cartPrice={cartPrice} setCartPrice={setCartPrice} cart={cart} setCart={setCart} clickFlavor={clickFlavor} clickDeco={clickDeco} clickSize={clickSize}  flavors={flavors} sizes={sizes} decorations={decorations}/>
    
      
    </Container>
    
      
      <Footer/>
    </section>
      
      </>
  )
}