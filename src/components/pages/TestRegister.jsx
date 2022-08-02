import React from 'react'
// import AuthContext from '../../context/AuthContext'
import { Footer } from '../Footer'
import { TopNav } from '../Navbar'
import { GuestRegisterModal } from '../GuestRegisterModal'

export const TestRegister = ({show,setShow, setGuest,setCart, cart,cartOptions,flavors, guest,setGuestForm, guestForm}) => {
  // const {user} = useContext(AuthContext)
  
  const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
  ?'https://lit-tundra-19708.herokuapp.com/'
  :"http://127.0.0.1:8000/"


const addGuestToCart = ()=> {
  const url = baseUrl+`ddcakes/cart/${cart? cart.id:0}/`
  const opts = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify({...cartOptions, "guest": guest?guest.id:cartOptions.guest})
  }
  fetch(url, opts)
  .then(res => res.json())
  .then(data => {console.log(data);setCart(data)})
}

  
  const handleSubmit = (e) => {
    e.preventDefault()
    const url = guest?baseUrl+`ddcakes/guest/${guest.id}/`:baseUrl+`ddcakes/guest/`
    
    const opts = !guest? {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(guestForm)
    }: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(guestForm)
    }
    fetch(url , opts)
    .then(res => res.json())
    .then(data => {console.log(data); setGuest(data)})
    cart && addGuestToCart()
    setShow(true)
  }
    
    const onChange = (e) => {
        e.preventDefault()
        setGuestForm({...guestForm,[e.target.id]: e.target.value})
      }
  return (
    <>

    {show && (<GuestRegisterModal setShow={setShow} show={show}/>)}

    <TopNav/>

    <form>

<div className="form-group">
  <label className="form-label mt-4">Tell us more!</label>
  <div className="form-floating mb-3">
    <input onChange={onChange} defaultValue={guest? guest.first_name:""} type="first_name" className="form-control" id="first_name" placeholder="Enter your first name"/>
    <label for="first_name">First Name</label>
  </div>
  <div className="form-floating mb-3">
    <input onChange={onChange} defaultValue={guest? guest.last_name:""} type="last_name" className="form-control" id="last_name" placeholder="Enter last name"/>
    <label for="last_name">Last Name</label>
  </div>
  <div className="form-floating mb-3">
    <input onChange={onChange} defaultValue={guest? guest.email:""} type="email" className="form-control" id="email" placeholder="enter your email"/>
    <label for="email">Email Address</label>
  </div>

<div>
<label htmlFor="favorite_flavor" className="form-label mt-4">Pick a Flavor</label>
      <select onChange={onChange}  value={guestForm.favorite_flavor} defaultValue={guest? guestForm.favorite_flavor:"Very Vanilla"} className="form-select" id="favorite_flavor">
        {flavors.map((item)=>
        <option value={item.name}>{item.name}</option>)}
        
      </select>
</div>

<button className="btn btn-primary mt-4" onClick={handleSubmit}>Submit</button>
  
</div>

  </form>

  <Footer/>
    
    </>
  )
}
