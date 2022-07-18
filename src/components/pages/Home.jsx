import React from 'react'
import { HeroBanner } from '../HeroBanner'



export const Home = () => {
  return (
    <>
    <HeroBanner title={"Order"} heading={'Browse our cakes by your favorite flavor'} paragraph={'Order any one of our 11 flavors today and make it a celebration to remember!'} goto={"Shop"} link={'/order'}/>

    <HeroBanner title={"About Us"} heading={'Check out our mission statement'} paragraph={'See why we do what we do'} goto={"About"} link={'/about'}/>

    <HeroBanner title={"Sign Up or Login"} heading={'Sign up with us today!'} paragraph={'Register an account with us today or login to start using and earning rewards!'} goto={"Sign in"} link={'/login'}
    />
    </>
   )
}
