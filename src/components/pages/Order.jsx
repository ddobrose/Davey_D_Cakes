import React from 'react'
import { Container} from 'react-bootstrap'
import { Footer } from '../Footer'
import { MenuBox } from '../MenuBox'
import { TopNav } from '../Navbar'
// import { SideBar } from '../SideBar'

export const Order = ({flavors, sizes,decorations, clickFlavor,clickDeco, clickSize,setQty,qty,setDecoPrice,decoPrice,sizePrice,setSizePrice,setChoice,choice}) => {
  return (
    <>
    <section >
    <TopNav/>
    <Container className='mt-4 '>
    <MenuBox  setQty={setQty} qty={qty} setDecoPrice={setDecoPrice} decoPrice={decoPrice} sizePrice={sizePrice} setSizePrice={setSizePrice} clickFlavor={clickFlavor} clickDeco={clickDeco} clickSize={clickSize}  flavors={flavors} sizes={sizes} decorations={decorations}/>
    
      
    </Container>
      
      <Footer/>
    </section>
      
      </>
  )
}
