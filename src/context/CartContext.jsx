import { createContext, useEffect, useState } from "react";


import React from 'react'

const CartContext= createContext()

export default CartContext

export const CartProvider = () => {

    // const createCart = () => {
    //     const cartoptions = {
    //       guest: guest? guest.id : null,
    //       price:0,
    //       user:user? user.user_id : null,
    //       previous:false
    //     }
    //     const url = 'http://localhost:8000/ddcakes/cart/'
    //     const opts = {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         // 'Authorization': `Bearer ${accessToken}`
    //       },
    //       body: JSON.stringify(cartoptions)
    //     }
    //     fetch(url, opts)
    //     .then(res => res.json())
    //     .then(data => {console.log(data);setCart(data)})
        
      
    //   }


    //   const cartData={
    //     createCart,
    //   }
  return (
    <CartContext.Provider></CartContext.Provider>
  )
}
