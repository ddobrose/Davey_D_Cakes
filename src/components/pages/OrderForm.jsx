import React from 'react'
import { Container } from 'react-bootstrap'
import { Footer } from '../Footer'
// import { MenuBox } from '../MenuBox'
import { TopNav } from '../Navbar'
import { OrderBox } from '../OrderBox'
import { ThanksModal } from '../ThanksModal'
// import { SideBar } from '../SideBar'

export const OrderForm = ({flavors, sizes,decorations,flav,deco,size,choice,setFlav,setSize,setDeco, show,setShow}) => {
  return (
    <>
    <section >
    {show && (
      <ThanksModal setShow={setShow} show={show}/>
    )}
    <TopNav/>
    <Container className='mt-4 '>
    <OrderBox show={show} setShow={setShow} setSize={setSize} setDeco={setDeco} setFlav={setFlav} flav={flav} deco={deco} size={size} choice={choice} flavors={flavors} sizes={sizes} decorations={decorations}/>
    
      
    </Container>
      
      <Footer/>
    </section>
      
      </>
  )
}
