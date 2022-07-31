import React from 'react'
import { Container } from 'react-bootstrap'
import { Footer } from '../Footer'
// import { MenuBox } from '../MenuBox'
import { TopNav } from '../Navbar'
import { OrderBox } from '../OrderBox'
import { ThanksModal } from '../ThanksModal'
// import { SideBar } from '../SideBar'

export const OrderForm = ({cartOptions,flavors,setChoice, sizes,decorations,flav,deco,size,choice,setFlav,setSize,setDeco, show,setShow,formState,setFormState,setQty,qty,setDecoPrice,decoPrice,sizePrice,setSizePrice,cart,setCart,cartPrice,setCartPrice}) => {
  return (
    <>
    <section >
    {show && (
      <ThanksModal setShow={setShow} show={show}/>
    )}
    <TopNav/>
    <Container className='mt-4 '>
    <OrderBox cartOptions={cartOptions} setChoice={setChoice} cartPrice={cartPrice} setCartPrice={setCartPrice} cart={cart} setCart={setCart} setQty={setQty} qty={qty} setDecoPrice={setDecoPrice} decoPrice={decoPrice} sizePrice={sizePrice} setSizePrice={setSizePrice} formState={formState} setFormState={setFormState} show={show} setShow={setShow} setSize={setSize} setDeco={setDeco} setFlav={setFlav} flav={flav} deco={deco} size={size} choice={choice} flavors={flavors} sizes={sizes} decorations={decorations}/>
    
      
    </Container>
      
      <Footer/>
    </section>
      
      </>
  )
}
