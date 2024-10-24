import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useNavigate, useSearchParams } from 'react-router-dom'
export default function ProductGallery(){

    const navigate = useNavigate()
    const[products, setProducts] = useState([])
    useEffect(()=>{
        async function fakeapi(){
            let response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=50')
            
            setProducts(response.data)
            console.log(response.data)
            
        }
        fakeapi()
    },[])
    
    return(
        <div>
            <h2>Select a Product</h2>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                {products.map((product,index)=>{
                    if(product.images.length <= 1) return ;
                    return(
                        <div key={product.id}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ product.images[0]} />
                            <Card.Body>
                            
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Title>$ {product.price}</Card.Title>
                            <Button variant="primary" onClick={()=>navigate(`/details/${product.id}`,{state:product})}>View Item</Button>
                            </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}