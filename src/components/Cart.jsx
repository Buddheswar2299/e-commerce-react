import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

//images
import cartImage from '../assets/6.png'
import { useNavigate } from 'react-router-dom';


export default function Cart({cartItems}){
    const navigate = useNavigate()
    console.log(cartItems)
    const[totalPrice, setTotalPrice] = useState(0)
    const[totalQuantity,setTotalQuantity] = useState(0)

    useEffect(()=>{
        let tempPrice = 0;
        let tempQuantity = 0;
        Object.keys(cartItems).map((cartItemsId)=>{
            const itemDetails = cartItems[cartItemsId]
            tempQuantity += itemDetails.quantity;
            tempPrice += itemDetails.quantity* itemDetails.price
        })
        setTotalPrice(tempPrice)
        setTotalQuantity(tempQuantity)
    })

    return(
        <div style={{margin:"1rem"}}>
            <Row>
                <Col >
                    <h2>Your Orders:</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(cartItems).map((cartItemsId)=>{
                                let currentIdItem = cartItems[cartItemsId]
                            
                                return(
                                    <tr>
                                    <td>{currentIdItem.title}</td>
                                    <td>{currentIdItem.quantity}</td>
                                    <td>{currentIdItem.price}</td>
                                    </tr>
                                )
                            })}

                            <tr>
                                <td></td>
                                <td>Total Price</td>
                                <td>{totalPrice}</td>
                            </tr>
                           
                            
                        </tbody>
                    </Table>
                    <Button style={{display:"block",margin:'auto'}} onClick={()=>{
                        navigate('/checkout')
                    }}>Purchase</Button>
                    
                </Col>
                <Col>
                <Image src={cartImage} height={650}/>
                </Col>
            </Row>
            
        </div>
    )
}