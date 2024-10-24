import React ,{ useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Index.css"
//images 
import LoginImage from '../assets/3.png'
import LoginPage from './LoginPage';
import{ NavLink, useNavigate,Routes,Route} from 'react-router-dom'

import {auth} from './firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup(){
    
    const navigate = useNavigate()
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[user,setUser] = useState('')
    const[errorMessage,setErrorMessage] = useState('')

    async function handleSignup(e){
        e.preventDefault()
    
        createUserWithEmailAndPassword(auth, email, password, user)
        .then((userCredential) => {
             
            const user = userCredential.user;
            navigate('/')
            
        })
        .catch((error) => {
            setErrorMessage('User Already Exists')
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
                                    <Form.Control type="email" placeholder="Enter email" style={{padding:"8px"}}
                                    onChange={(e)=>{setEmail(e.target.value)}} value={email} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword1">  
                                    <Form.Control type="password" placeholder="Password" style={{padding:"8px"}} value={password}
                                    onChange={(e)=>{setPassword(e.target.value)}}/>
                                </Form.Group>

                            </Container>
                            <Container>
                                <Form.Group className="mb-3" controlId="formBasicPassword2">  
                                        <Form.Control type="text" placeholder="Enter UserName" style={{padding:"8px"}} value={user}
                                        onChange={(e)=>{setUser(e.currentTarget.value)}}/>
                                </Form.Group>
                            </Container>
                           <Container>
                                <Button  type="submit" 

                                onClick ={handleSignup}
                                
                                style={{color:"white",border:"2px solid white",backgroundColor:"#216ad9",width:"100%"}}>
                                    Join the Club
                                </Button>
                            </Container>
                        </Form>
                        <p style={{color:'red'}}>{errorMessage}</p>
                        <div style={{marginTop:"40px"}}>
                            <h5>Already a member, <NavLink to="/" style={{color:"white"}}>Click here!</NavLink></h5>
                        </div>
                    </Col>
                    <Col style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}><Image src={LoginImage} height={700} /></Col>
                </Row>
            </Container>
            
        </div>
    )
}