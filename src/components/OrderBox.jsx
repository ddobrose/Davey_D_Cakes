import React,{useState} from 'react'
// import { MenuBox } from './MenuBox'
// import { Link } from 'react-router-dom'


export const OrderBox = ({setDeco, setSize,flavors,sizes,decorations,flav,deco,size,show,setShow,choice,formState,setFormState}) => {


const [decoPrice,setDecoPrice]=useState(deco? deco.cost:0)
const [sizePrice, setSizePrice] = useState(size?size.price:12.99)
const [qty, setQty] = useState(1)

// const [price,setPrice] = useState(((decoPrice*1 + sizePrice*1) *qty).toFixed(2))


const handleShow = () => setShow(true);

const handleSubmit = (e) => {
  e.preventDefault()
  const url = 'http://localhost:8000/api/order/'
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(formState)
  }
  fetch(url, opts)
  .then(res => res.json())
  .then(data => console.log(data))
  setFormState({
    flavor:flav? flav.name : "Very Vanilla",
    frosting_level:'Normal',
    decoration:deco? deco.name : "None",
    message_card:"",
    size:size.name? size.name:'Dozen Cupcakes',
    qty:1,
    cart:2
    
  
  })
  
  handleShow()
}





const onQtyChange = (e)=> {
  e.preventDefault()
  setFormState({...formState,[e.target.id]: e.target.value})
  setQty(e.target.value)
  // setPrice () 
} 

const onDecoChange = (e)=> {
  e.preventDefault()
  setFormState({...formState,[e.target.id]: decorations[e.target.value].name})
  setDeco(decorations[e.target.value])
  setDecoPrice(decorations[e.target.value].cost)
  } 

  const onSizeChange = (e)=> {
  e.preventDefault()
  setFormState({...formState,[e.target.id]: sizes[e.target.value].name})
  setSize(sizes[e.target.value])
  setSizePrice(sizes[e.target.value].price)
  // setPrice (((decoPrice*1 + sizePrice*1) *qty).toFixed(2))  
} 

const onChange = (e) => {
  e.preventDefault()
  setFormState({...formState,[e.target.id]: e.target.value})
}



// const handleClose = () => setShow(false);

const price = ((decoPrice*1 + sizePrice*1) *qty).toFixed(2)
  












 


  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="flavor" className="form-label mt-4">Pick a Flavor</label>
      <select onChange={onChange} defaultValue={flav? flav.name:"Very Vanilla"} className="form-select" id="flavor">
        {flavors.map((item)=>
        <option value={item.name}>{item.name}</option>)}
        
      </select>
      <label htmlFor="decoration" className="form-label mt-4">Pick a Deco</label>
      <select onChange={onDecoChange} defaultValue={deco? choice:0}  className="form-select" id="decoration">
        {decorations.map((item,index)=>
        <option  value={index}>{item.name} +({item.cost}$) </option>)}
        
      </select>

      <label htmlFor="size" className="form-label mt-4">Pick a Size</label>
      <select onChange={onSizeChange} defaultValue={size? choice:0}  className="form-select" id="size">
        {sizes.map((item,index)=>
        <option  value={index}>{item.name} +({item.price})</option>)}
        
      </select>

      <label htmlFor="qty" className="form-label mt-4">How Many?</label>
      <select onChange={onQtyChange} defaultValue={1}  className="form-select" id="qty">
      <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
        </select>

       


  <label htmlFor="frosting_level" className="form-label mt-4">Frosting</label>
      <select onChange={onChange}  defaultValue={'Normal'} className="form-select" id="frosting_level">
        <option value={'Normal'}>Normal</option>
        <option value={'Extra'}>Extra</option>
        <option value={'Drizzle'}>Drizzle</option>
        <option value={'None'}>None</option>
        
      </select>

      <label htmlFor="message_card" className="form-label mt-4">Send with a Message Card</label>
      <textarea onChange={onChange}  className="form-control" id="message_card" rows="3"></textarea>
      <fieldset disabled="">
    <label className="form-label" htmlFor="price">Price</label>
    <input className="form-control" id="price" type="text" placeholder={price} disabled=""/>
  </fieldset>
      <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit Order</button>
    </div>

    
    </form>
    {/* <h5>{price}</h5> */}

    

    


    


    
    
    
    </>
  )
}

