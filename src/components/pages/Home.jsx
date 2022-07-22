// import React,{useState,useEffect} from 'react'
// import { Navbar } from 'react-bootstrap'
import { Footer } from '../Footer'
import { HeroBanner } from '../HeroBanner'
import { TopNav } from '../Navbar'
// import { ThanksModal } from '../ThanksModal'



export const Home = ({flavors, sizes, decorations,show,setShow}) => {
  return (
    <>

    

    
    
    <TopNav/>
    <HeroBanner title={"Order"} heading={'Browse our cakes'} paragraph={'Order any one of our 11 flavors today and make it a celebration to remember!'} goto={"Shop"} link={'/menu'}/>
    <HeroBanner title={"About Us"} heading={'Check out our mission statement'} paragraph={'See why we do what we do'} goto={"About"} link={'/about'}/>
    <HeroBanner title={"Sign Up or Login"} heading={'Sign up with us today!'} paragraph={'Register an account with us today or login to start using and earning rewards!'} goto={"Sign in"} link={'/login'}
    />

    <footer>
      <Footer/>
    </footer>
    </>
   )
}
