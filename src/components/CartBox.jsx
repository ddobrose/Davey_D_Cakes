import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { Container,Card,Button } from 'react-bootstrap'
import { send } from '@emailjs/browser'


export const CartBox = ({guest, show,setShow,cartOptions,flavors,sizes,decorations,cart,setCart,setCartPrice,cartPrice,submitCart}) => {

  const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
  ?'https://lit-tundra-19708.herokuapp.com/'
  :"http://127.0.0.1:8000/"
  
    
    const [cartOrders,setCartOrders] = useState(null)
    // const [cartPrice,setCartPrice] = useState(0)

    const deleteFromCart = (item) => {
      const url = baseUrl+`ddcakes/cart/${cart? cart.id:0}/`
      const opts = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({...cartOptions, "price": (Number(cartPrice) - Number(item.price)).toFixed(2)})
      }
      fetch(url, opts)
      .then(res => res.json())
      .then(data => {console.log(data);setCart(data)})
    }

    const handleDeleteOrder = (item) => {
      // e.preventDefault()
      fetch(baseUrl+`ddcakes/order/${item.id}/`,{method:'DELETE'})
      setCartPrice((Number(cartPrice) - Number(item.price)).toFixed(2))
      deleteFromCart(item)
      
    }

    
    const emailInfo={
      name: guest.first_name,
      email:guest.email
    }
    function sendEmail() {
      send(process.env.EMAIL_SERVICE_ID, process.env.EMAIL_TEMPLATE_ID,emailInfo, process.env.EMAIL_KEY)
    }
    
        
    

    

    const param = cart? cart.id : 0
    console.log(cart)
    useEffect(() => {
      cart &&
        fetch(baseUrl+`ddcakes/cartorders/${param}/`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setCartOrders(data)
          })
      }, [cart]) 

  
  
  
      
    if(!cartOrders){
        return(<h1>You do not have a cart or your cart is loading.</h1>)
    }else {return (
    <>
    <div>
        <p>Wanna order more cake at once?! Soon we will have carts so you can give us more money at a time, for now feel free to navigate to the home page and place another order!</p> 

        <Link to={'/'}>Click here for the Home page!</Link>

        </div>
    
        <Container className='row row-cols-3 row-cols-md-2 g-4 gap-3 border border-3 mt-3 justify-content-sm-between' fluid>
        
        { cartOrders.map((item,index)=>{
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
            <Button onClick={()=>handleDeleteOrder(item)}  variant="primary">Delete</Button>
          </Card.Body>
        </Card>
            )
        })}
    
    </Container>
    <h5>Cart Price:${cartPrice} </h5>
    <button className="btn btn-primary" onClick={()=>{submitCart();sendEmail()}}>Submit Cart</button>
    
    <Link to={'/menu'}><button className="btn btn-secondary">Add another item</button></Link>


    </>
    )}}
    






        
    
