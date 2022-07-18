import React from 'react'
import { Navbar } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb';


export const Footer = () => {
  return (
  <>
  <Navbar sticky='bottom'>
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
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




