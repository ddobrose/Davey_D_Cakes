import React,{useContext, useEffect,useState} from 'react'

import { TopNav } from '../Navbar'
import { Footer } from '../Footer'
import { PastOrder } from '../PastOrder'
import AuthContext from '../../context/AuthContext'

export const OrderHistory = ({guest}) => {
const {user} = useContext(AuthContext)
const [pastOrders,setPastOrders] = useState(null)

    useEffect(()=>{
        user &&
 fetch(`http://localhost:8000/ddcakes/pastorders/${user.user_id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPastOrders(data)
    })
    },[user])
    
  return (
    <>
    <TopNav/>
    <section>
        <h2>Past Orders for {guest.first_name + " " + guest.last_name} </h2>

        {!pastOrders? <h1>Loading</h1> : pastOrders.map((item, index)=>{
            return(<PastOrder pastOrder={item} index={index}/>)})}





<Footer/>
</section>
    

      </>
  )
}
