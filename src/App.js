import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import { Home } from './components/pages/Home';
import { Order } from './components/pages/Order';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
// import Login from './components/pages/Login';
// import Register from './components/pages/Register';
// import ProtectedPage from './utils/ProtectedPage';


function App() {
  return (
    <>
    <AuthProvider>
    <header>
    <Navbar/>
    </header>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/order' element={<Order/>}/>
    {/* <Route path='/login' element={<Login/>}/> */}
    {/* <Route path='/register' element={<Register/>}/> */}
    {/* <PrivateRoute element={<ProtectedPage/>} path="/protected" /> */}
    
    

    </Routes>
    


      
      
      <footer className='fixed-bottm'>
        <Footer/>
        </footer>
    </AuthProvider>
    
      
    </>
  );
}

export default App;
