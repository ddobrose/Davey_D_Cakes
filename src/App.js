import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import { Home } from './components/pages/Home';
import { Order } from './components/pages/Order';
// import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Login from './components/pages/Login';
// import Register from './components/pages/Register';
// import ProtectedPage from './utils/ProtectedPage';
import { Rewards } from './components/pages/Rewards';
import { About } from './components/pages/About';
import { Find } from './components/pages/Find';
import { SideBar } from './components/SideBar';
import { Container } from 'react-bootstrap';
import { OrderForm } from './components/pages/OrderForm';
import { useState } from 'react';



function App() {
  const flavors = [
    {name:"Very Vanilla", picture:"public/logo192.png", abbreviation: "VAN", description:"With every bite of this light white confection comes the amazing taste of creamy vanilla."},
    {name:"Crazy Coco", picture:"public/logo192.png", abbreviation: "CHO", description:"This decadent chocolate cake is rich with a home-baked flavor. Sprinkled with chocolate chips throughout, this treat is sure to cure your chocolate cravings."},
    {name:"Sweetie Strawberry", picture:"public/logo192.png", abbreviation: "STB", description:"Made with strawberry fruit filling and creamy white chocolate, this moist,refreshing cake is sure to please and makes any occasion deliciously sweet."},
    {name:"Birthday Bonanza", picture:"public/logo192.png", abbreviation: "BC", description:"Our most celebratory and festive cake yet.The combination of classic birthday cake baked with colorful sprinkles adds bites of fun to every occasion."},
    {name:"Loco Lemon", picture:"public/logo192.png", abbreviation: "LEM", description:"When life gives you lemons, take cake over lemonade.Each bite of this light and refreshing cake has the smooth, sweet snap of lemon."},
    {name:"White Coco Razz", picture:"public/logo192.png", abbreviation: "WCR", description:"Scrumptious white chocolate cake swirled with the finest raspberry puree.Fluffy, moist and ever so good."},
    {name:"Gluten Free Cookie Craze", picture:"public/logo192.png", abbreviation: "GFCC", description:"Everything you love about a homemade chocolate chip cookie baked into a cake! Made with gluten-free* ingredients including real eggs, vanilla and mini chocolate chips."},
    {name:"Ridiculous Red Velvet", picture:"public/logo192.png", abbreviation: "RV", description:"This scarlet batter of velvety rich cocoa pays homage to its traditional Southern heritage. Every cake is baked with delicious chocolate chips."},
    {name:"Scintillating Cinnamon", picture:"public/logo192.png", abbreviation: "CIN", description:"Just like the classic cookie, this decadent cake is the perfect blend of cinnamon and sugar.With a light coating of sugar, you can’t go wrong."},
    {name:"Crisp Carrot", picture:"public/logo192.png", abbreviation: "CAR", description:"The classic carrot cake better than your grandmother makes. Every bite has the warm, familiar taste of cinnamon and nutmeg."}
]
const decorations = [
    {name:"None", abbreviation:"NO", cost: 0, description:"Sure you don't want to spice it up a little bit?", picture:"public/logo192.png"},
    {name:"Happy Birthday", abbreviation:"BIR", cost: 3.99, description:"Throw joy around like confetti! This colorful decoration is sure to bring delight to any celebration with a confetti-stickered bow and confetti popper that's ready to party. ", picture:"public/logo192.png"},
    {name:"Graduation", abbreviation:"GRD", cost: 3.99, description:"They did it! And what better way to celebrate than with a cake for your graduate. Select their school colors for a custom bow, and add their own tassel to the cap for a personal touch.", picture:"public/logo192.png"},
    {name:"Independence Day", abbreviation:"IND", cost: 3.99, description:"What's red, white and blue all over? Our Patriotic cake! The red satin bow is spangled with blue and starry dots. And, yes, the candles are sparklers!", picture:"public/logo192.png"},
    {name:"Thank You", abbreviation:"THK", cost: 3.99, description:"Saying thank you has never been sweeter! Show your appreciation for others by surprising them with one of our handcrafted Cakes.", picture:"public/logo192.png"},
    {name:"Just Because", abbreviation:"JB", cost: 3.99, description:"This luscious, light-hearted treat is right for all occasions, business or pleasure. Cheers!", picture:"public/logo192.png"},
    
]
const sizes = [
    {name:'Dozen Cupcakes', price: 12.99 , description: "Dozen cupcakes" , picture:"public/logo192.png", abbreviation:'DOZ' },
    {name:'Personal Size Cake', price: 4.99 , description: "A delicious treat that you dont have to share" , picture:"public/logo192.png", abbreviation:'PER' },
    {name:'Triple Tower Personal Size Cakes', price: 14.99 , description: "A beautiful tower of 3 Personal cakes wrapped up specially for you" , picture:"public/logo192.png", abbreviation:'TOW' },
    {name:'12 box of Personal Size Cakes', price: 49.99 , description: "Be the life of the party and bring desert for everyone!" , picture:"public/logo192.png", abbreviation:'BOX' },
    {name:'8 Inch Cake', price: 18.99 , description: "Enough to feed a small army" , picture:"public/logo192.png", abbreviation:'8IN' },
    {name:'10 Inch Cake', price: 24.99 , description: "Enough to feed a slightly larger army" , picture:"public/logo192.png", abbreviation:'10IN' },
    {name:'Layered Cake(10in bottom 8in top)', price: 32.99 , description: "A straight up Show-Stopper!" , picture:"public/logo192.png", abbreviation:'LAY' }
]

// const [choice, setChoice] = useState([])
const [flav,setFlav] = useState('')
const [deco, setDeco] = useState('')
const [size,setSize] = useState(sizes[0])

function clickFlavor(item) {
  // setChoice(0);
   setFlav(item)
}
function clickDeco(item) {
  // setChoice(1);
   setDeco(item)
}
function clickSize(item) {
  // setChoice(2);
   setSize(item)
}
  return (
    <>
    <AuthProvider>
    {/* <header> */}
    {/* <Navbar/> */}
    {/* </header> */}
    {/* <Container className='d-flex' fluid> */}
      {/* <SideBar/> */}
      
    


    <Routes>
    <Route path='/' element={<Home flavors={flavors} sizes={sizes} decorations={decorations}/>}/>
    <Route path='/menu' element={<Order clickFlavor={clickFlavor} clickDeco={clickDeco} clickSize={clickSize}  flavors={flavors} sizes={sizes} decorations={decorations}/>}/>
    {/* <Route path='/login' element={<Login/>}/> */}
    {/* <Route path='/register' element={<Register/>}/> */}
    {/* <PrivateRoute element={<ProtectedPage/>} path="/protected" /> */}
    <Route path='/rewards' element={<Rewards/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/find' element={<Find/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/menu/:id' element={<OrderForm setSize={setSize} setDeco={setDeco} setFlav={setFlav} flav={flav} deco={deco} size={size}  flavors={flavors} sizes={sizes} decorations={decorations} />}/>

    
    

    </Routes>
    


    {/* </Container> */}
      
      {/* <footer className='fixed-bottm'>
        <Footer/>
        </footer> */}
    </AuthProvider>

    
    
      
    </>
  );
}

export default App;