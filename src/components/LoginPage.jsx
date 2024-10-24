import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Index.css"
import { NavLink, useNavigate,Routes,Route} from 'react-router-dom'
import Signup from './SignupPage';
//images 
import LoginImage from '../assets/2.png'

import {auth} from './firebase'
import {  signInWithEmailAndPassword } from "firebase/auth";
export default function LoginPage(){
            
    const navigate = useNavigate()
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[error,setError] = useState('')

    async function handleLogin(e){
        e.preventDefault()
    
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                localStorage.setItem('user',email)
                navigate('/home')
            })
            .catch((error) => {
             setError('User does not exists')
        });
    }
    

    return(
        <div style={{backgroundColor:"#216ad9",height:"92vh"}}>
          
           
            <Container>
                <Row>
                    <Col style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <h1 style={{color:'white',fontWeight:700}}>InstaBuy!</h1>
                        <p style={{color:"white"}}>One place where brands come together from all across the world.</p>
                        <Form >
                            <Container style={{display:"flex",flexDirection:"row"}}>
                                <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginRight:"10px"}}> 
                                    <Form.Control type="email" placeholder="Enter email" style={{padding:"8px"}} onChange={(e)=>{setEmail(e.currentTarget.value)}} value={email}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">  
                                    <Form.Control type="password" placeholder="Password" style={{padding:"8px"}} value={password}
                                    onChange={(e)=>{setPassword(e.currentTarget.value)}}/>
                                </Form.Group>
                            </Container>
                           <Container>
                                <Button  type="submit" 
                                    onClick={handleLogin}
                                style={{color:"white",border:"2px solid white",backgroundColor:"#216ad9",width:"100%"}}>

                                    Start Shopping
                                </Button>
                            </Container>
                        </Form>
                        <p style={{color:"red"}}>{error}</p>
                        <div style={{marginTop:"40px"}}>
                            <h5>Join the club, <NavLink to="/signup" style={{color:"white"}}>Click here!</NavLink></h5>
                        </div>
                    </Col>
                    <Col style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}><Image src={LoginImage} height={700} /></Col>
                </Row>
            </Container>
            
        </div>
    )
}