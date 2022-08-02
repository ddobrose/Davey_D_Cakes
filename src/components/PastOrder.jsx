import React, { useEffect, useState } from 'react'
import { Container,Card } from 'react-bootstrap'

export const PastOrder = ({index, pastOrder}) => {

    const [pastOrderItems,setPastOrderItems] = useState(null)

    useEffect(()=>{
        fetch(`http://localhost:8000/ddcakes/cartorders/${pastOrder.id}/`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setPastOrderItems(data)
          })
    },[])
  return (
    <>
       <h4>{pastOrder.id}</h4> 
       <Container className='row row-cols-3 row-cols-md-2 g-4 gap-3 border border-3 mt-3 justify-content-sm-between' fluid>
        
        {pastOrderItems && pastOrderItems.map((item,index)=>{
            return(
                <Card key={index} style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src= {flavors[0].picture}/> */}
          <Card.Body>
            <Card.Title>{item.flavor}</Card.Title>
            <Card.Text>
            <p>Decoration:<span>{item.decoration}</span></p>
            <p>Size:<span>{item.size}</span></p>
            <p>Quantity:<span>{item.qty}</span></p>
            <p>Frosting:<span>{item.frosting_level}</span></p>
            <p>Message Card:<span>{item.message_card}</span></p>
            <p>Price: ${item.price}</p>
            
            </Card.Text>
          </Card.Body>
        </Card>
            )
        })}
    <h5>Total:${pastOrder.price} </h5>
    </Container>
    
        </>
  )
}
