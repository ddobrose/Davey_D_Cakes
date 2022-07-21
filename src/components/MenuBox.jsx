// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Button,Card,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { OrderBox } from './OrderBox'


export const MenuBox = ({flavors,sizes,decorations,clickFlavor,clickDeco,clickSize}) => {

 


  
  
  


  
    if(!flavors){
     return(<h1>LOADING</h1>)
 }else{  return (
    <>
  <h3>Flavors</h3>
    <Container className='row row-cols-3 row-cols-md-2 g-4 gap-3 border border-3 mt-3 justify-content-sm-between' fluid>
        
    { flavors.map((item,index)=>{
        return(
            <Card key={index} style={{ width: '18rem' }}>
      <Card.Img variant="top" src= 'https://www.cookingclassy.com/wp-content/uploads/2019/10/chocolate-cake-3.jpg'/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        {item.description}
        </Card.Text>
        <Link to={`/menu/${index}`}><Button  onClick={()=> clickFlavor(item)} variant="primary">SHOP</Button></Link>
      </Card.Body>
    </Card>
        )
    })}

</Container>

<h3>Decorations</h3>
<Container className='row row-cols-3 row-cols-md-2 g-4 border border-3 mt-3 justify-content-sm-between'>
  
        
    { decorations.map((item,index)=>{
        return(
            <Card key={index} style={{ width: '18rem' }}>
      <Card.Img  variant="top" src='https://www.cookingclassy.com/wp-content/uploads/2019/10/chocolate-cake-3.jpg' />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        {item.description}
        </Card.Text>
        <Link to={`/menu/${index}`}><Button  onClick={()=> clickDeco(item)} variant="primary">SHOP</Button></Link>
      </Card.Body>
    </Card>
        )
    })}

</Container>

<h3>Sizes</h3>

<Container className='row row-cols-3 row-cols-md-2 g-4 border border-3 mt-3 justify-content-sm-between' fluid>
        
    { sizes.map((item,index)=>{
        return(
            <Card key={index} style={{ width: '18rem' }}>
      <Card.Img variant="top" src='https://www.cookingclassy.com/wp-content/uploads/2019/10/chocolate-cake-3.jpg' />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        {item.description}
        </Card.Text>
        <Link to={`/menu/${index}`}><Button  onClick={()=> clickSize(item)} variant="primary">{item.price}</Button></Link>
      </Card.Body>
    </Card>
        )
    })}

</Container>

    </>
  )
}}