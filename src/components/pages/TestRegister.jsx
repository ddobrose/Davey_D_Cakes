import React from 'react'
import { Footer } from '../Footer'
import { TopNav } from '../Navbar'

export const TestRegister = ({flavors}) => {
    
    
    // const onChange = (e) => {
    //     e.preventDefault()
    //     setGuestForm({...guestForm,[e.target.id]: e.target.value})
    //   }
  return (
    <>

    <TopNav/>

    <form action="submit">

<div className="form-group">
  <label className="form-label mt-4">Tell us more!</label>
  <div className="form-floating mb-3">
    <input type="first_name" className="form-control" id="first_name" placeholder="Enter your first name"/>
    <label for="first_name">First Name</label>
  </div>
  <div className="form-floating mb-3">
    <input type="last_name" className="form-control" id="last_name" placeholder="Enter last name"/>
    <label for="last_name">Last Name</label>
  </div>
  <div className="form-floating mb-3">
    <input type="email_address" className="form-control" id="email_address" placeholder="enter your email"/>
    <label for="email_address">Email Address</label>
  </div>

{/* <div>
    <label htmlFor="favorite_flavor" className="form-label mt-4">Pick a favorite_flavor</label>
      <select onChange={onChange} defaultValue={"Very Vanilla"}className="form-select" id="favorite_flavor">
        {flavors.map((item)=>
        <option value={item.name}>{item.name}</option>)}
        
      </select>
</div> */}
  
</div>

  </form>

  <Footer/>
    
    </>
  )
}
