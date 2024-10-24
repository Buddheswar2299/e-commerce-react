import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css'
import Home from './components/Home.jsx'

import {Routes, Route, NavLink, useSearchParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';

import LoginPage from './components/LoginPage.jsx';
import Signup from './components/SignupPage.jsx'
import ProductGallery from './components/ProductGallery.jsx';
import firstImage from './assets/7.png'
import ProductDetails from './components/ProductDetails.jsx';
import Cart from './components/Cart.jsx'
import CheckOutPage from './components/CheckOut.jsx';
import Badge from 'react-bootstrap/Badge';


function App() {
  const[user, setUser] = useState('')
  const[cartItems, setCartItems]  = useState({})
  const navigate = useNavigate()

  const handleAddToCartItems =(item)=>{
    setCartItems({...cartItems,...item})
  }

  useEffect(()=>{
    const userEmail = localStorage.getItem('user')
    setUser(userEmail)
    console.log(userEmail)
    console.log(user)
  },[navigate])

 

 

  return (
    <div>
      
       <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={firstImage}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            InstaBuy!
          </Navbar.Brand>
          <Navbar.Brand>
            {user && <Button onClick={()=>navigate('/cart')}>Cart &nbsp; {Object.keys(cartItems).length>0 && (<Badge bg='success'>{Object.keys(cartItems).length}</Badge>)}</Button>}
            <Button style={{marginLeft:"12px"}}> <a href="" style={{color:"white",textDecoration:"none"}} onClick={()=>{navigate('/'), localStorage.removeItem('user')} }> {user ?  "Logout" : 'Login'}</a> </Button>
          </Navbar.Brand>
        </Container>
      </Navbar>
          <Routes>
               <Route path="/home" element={<Home user={user}/>} /> 
               <Route path="signup" element={<Signup />} /> 
               <Route path="/" element={<LoginPage user={user}/>} /> 
               <Route path='gallery' element={<ProductGallery />} />
               <Route path='Details/:id' element={<ProductDetails 
               cartItems = {cartItems}
               handleAddToCartItems={handleAddToCartItems}/>} />
               <Route path="cart" element={<Cart cartItems={cartItems}/>} />
               <Route path="checkout" element={<CheckOutPage />} />
          </Routes>
   

     
    </div>
  )
}

export default App
