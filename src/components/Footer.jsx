import React from 'react'
import { Navbar } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb';


export const Footer = () => {
  return (
  <>
  <Navbar sticky='bottom'>
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/about">
        About
      </Breadcrumb.Item>
      <Breadcrumb.Item href='/login'>Login</Breadcrumb.Item>
      <Breadcrumb.Item href='https://github.com/ddobrose'>My Github</Breadcrumb.Item>
      <Breadcrumb.Item href='https://www.linkedin.com/in/david-dobrose/'>LinkedIn</Breadcrumb.Item>
    </Breadcrumb>
    </Navbar>
  </>
    
    

//     {/* <footer className='footer'>
//     <ol className="breadcrumb">
//   <li className="breadcrumb-item"><a href="/">DaveyDCakes</a></li>
//   <li className="breadcrumb-item"><a href="/">About Us</a></li>
//   <li className="breadcrumb-item active">Locate A Store</li>
// </ol>
//     </footer> */}



  )
}




