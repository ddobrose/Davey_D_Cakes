import React,{useContext, useEffect,useState} from 'react'

import { TopNav } from '../Navbar'
import { Footer } from '../Footer'
import { PastOrder } from '../PastOrder'
import AuthContext from '../../context/AuthContext'

export const OrderHistory = ({guest}) => {
const {user} = useContext(AuthContext)
const [pastOrders,setPastOrders] = useState(null)


const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
  ?'https://lit-tundra-19708.herokuapp.com/'
  :"http://127.0.0.1:8000/"

    useEffect(()=>{
        user &&
 fetch(baseUrl +`ddcakes/pastorders/${user.user_id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPastOrders(data)
    })
    },[user])
    
  return (
    <>
    <TopNav/>
    {user? (<section>
        {guest? (<h2>Past Orders for {guest.first_name + " " + guest.last_name} </h2>) : <h2>Past orders for {user.username}</h2>}

        {!pastOrders? <h1>Loading</h1> : pastOrders.map((item, index)=>{
            return(<PastOrder pastOrder={item} index={index}/>)})}

</section>)
: <h2>Sign in to see previous orders</h2>}



<Footer/>

    

      </>
  )
}
