import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Footer } from '../Footer'
import { MenuBox } from '../MenuBox'
import { TopNav } from '../Navbar'
import { OrderBox } from '../OrderBox'
// import { SideBar } from '../SideBar'

export const OrderForm = ({flavors, sizes,decorations,flav,deco,size,choice,setFlav,setSize,setDeco}) => {
  return (
    <>
    <section >
    <TopNav/>
    <Container className='mt-4 '>
    <OrderBox setSize={setSize} setDeco={setDeco} setFlav={setFlav} flav={flav} deco={deco} size={size} choice={choice} flavors={flavors} sizes={sizes} decorations={decorations}/>
    
      
    </Container>
      
      <Footer/>
    </section>
      
      </>
  )
}
