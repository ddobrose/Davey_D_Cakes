import React, { useEffect, useState } from 'react'
import { Container} from 'react-bootstrap'
import { Footer } from '../Footer'
// import { MenuBox } from '../MenuBox'
import { TopNav } from '../Navbar'
// import { SideBar } from '../SideBar'
import { CartBox } from '../CartBox'
import { ThanksModal } from '../ThanksModal'

export const Cart = ({guest,show,setShow,cartOptions, flavors, sizes,decorations, clickFlavor,clickDeco, clickSize,cart,setCart,cartPrice,setCartPrice,submitCart}) => {
  return (

    
    
    <>
    <section >
    {show && (
      <ThanksModal setShow={setShow} show={show}/>
    )}
    <TopNav/>
    <Container className='mt-4 '>
    <CartBox guest={guest} show={show} setShow={setShow} cartOptions={cartOptions} submitCart={submitCart} cartPrice={cartPrice} setCartPrice={setCartPrice} cart={cart} setCart={setCart} clickFlavor={clickFlavor} clickDeco={clickDeco} clickSize={clickSize}  flavors={flavors} sizes={sizes} decorations={decorations}/>
    
      
    </Container>
    
      
      <Footer/>
    </section>
      
      </>
  )
}