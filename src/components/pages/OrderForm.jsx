import React from 'react'
import { Container } from 'react-bootstrap'
import { Footer } from '../Footer'
// import { MenuBox } from '../MenuBox'
import { TopNav } from '../Navbar'
import { OrderBox } from '../OrderBox'
import { OrderAddModal } from '../OrderAddModal'
// import { SideBar } from '../SideBar'

export const OrderForm = ({price, setPrice, show,setShow,cartOptions,flavors,setChoice, sizes,decorations,flav,deco,size,choice,setFlav,setSize,setDeco,formState,setFormState,setQty,qty,setDecoPrice,decoPrice,sizePrice,setSizePrice,cart,setCart,cartPrice,setCartPrice}) => {
  return (
    <>
    <section >
    {show && (
      <OrderAddModal setShow={setShow} show={show}/>
    )}
     
    
    <TopNav/>
    <Container className='mt-4 '>
    <OrderBox price={price} setPrice={setPrice} show={show} setShow={setShow} cartOptions={cartOptions} setChoice={setChoice} cartPrice={cartPrice} setCartPrice={setCartPrice} cart={cart} setCart={setCart} setQty={setQty} qty={qty} setDecoPrice={setDecoPrice} decoPrice={decoPrice} sizePrice={sizePrice} setSizePrice={setSizePrice} formState={formState} setFormState={setFormState} setSize={setSize} setDeco={setDeco} setFlav={setFlav} flav={flav} deco={deco} size={size} choice={choice} flavors={flavors} sizes={sizes} decorations={decorations}/>
    
      
    </Container>
      
      <Footer/>
    </section>
      
      </>
  )
}
