import React from 'react'
import { Footer } from '../Footer'
import { TopNav } from '../Navbar'

export const About = () => {
  return (
    <div>
      <TopNav/>
        <h1>ABOUT US</h1>
        <p>Just your friendly neighborhood bakery hell bent on spreading joy and celebration all over the United States and possibly Canada... maybe once we perfect our maple syrup flavored cake.</p>

        <p>Our cake is made fresh by our friendly bakers every single day so when you get the chance just roll on in and grab something for that special occasion!</p>

        <p>Our mission statement straight from Davey D himself: Treat everyone.</p>
        <Footer/>
    </div>
  )
}
