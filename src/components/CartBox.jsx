import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { Container,Card,Button } from 'react-bootstrap'

export const CartBox = (flavors,sizes,decorations) => {

    const [cart,setCart] = useState(null)

    const handleDeleteOrder = (index) => {
      // e.preventDefault()
      let order = cart[index].id
      fetch(`http://localhost:8000/api/order/${order}/`,{method:'DELETE'})
      
      
    }


    useEffect(() => {
        fetch('http://localhost:8000/api/cartorders/2/')
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setCart(data)
          })
      }, []) 
  
  
      
    if(!cart){
        return(<h1>LOADING</h1>)
    }else {return (
    <>
    <div>
        <p>Wanna order more cake at once?! Soon we will have carts so you can give us more money at a time, for now feel free to navigate to the home page and place another order!</p> 

        <Link to={'/'}>Click here for the Home page!</Link>

        </div>
    
        <Container className='row row-cols-3 row-cols-md-2 g-4 gap-3 border border-3 mt-3 justify-content-sm-between' fluid>
        
        { cart.map((item,index)=>{
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
            <p>Price: $3.07</p>
            
            </Card.Text>
            <Button onClick={handleDeleteOrder(index)} variant="primary">Delete</Button>
          </Card.Body>
        </Card>
            )
        })}
    
    </Container>


    </>
    )}}
    






        
    
