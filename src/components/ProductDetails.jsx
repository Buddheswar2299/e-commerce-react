import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

export default function ProductDetails({handleAddToCartItems,cartItems}){
    const navigate = useNavigate()
    const [otherProducts, setOtherProducts] = useState([])
    const location = useLocation()
    const product = location.state
    const {title,description,id,price,images} = location.state
    


    useEffect(()=>{
        async function CategoryFilter(){
            let response = await axios.get(`https://api.escuelajs.co/api/v1/products/?${id}`)
            console.log(response.data)
            
            setOtherProducts(response.data)
        }
        CategoryFilter()
    },[])
    return(
        <div>
            <Container>
                <Row>
                    <Col lg={2}>{images.map((image)=>{
                        return (
                        <Card style={{ width: '7rem' }}>
                            <Card.Img variant="top" src={image} />
                        </Card>
                        )
                    })}  
                    </Col>
                    <Col lg={4}>
                    <Card style={{ width: '18rem',gap:"3px" }}>
                            <Card.Img variant="top" src={ product.images[0]} />
                            <Card.Body>
                            
                            <Card.Title>{title}</Card.Title>
                            <Card.Title>$ {price}</Card.Title>
                            <Card.Footer>{description}</Card.Footer>
                            <Button variant="primary" onClick={()=>{
                                if(id in cartItems){
                                    const currentItems = cartItems[id]
                                    handleAddToCartItems({[id]:{title,price,quantity:currentItems.quantity+1}})
                                }else{
                                handleAddToCartItems({[id]:{title,price,quantity:1}})
                                }
                                navigate('/cart')
                                
                            }}>Add to Cart</Button>
                            </Card.Body>
                            </Card>
                    </Col>
                    <Col>
                    <h1>Similar Products</h1>
                        <div style={{display:"flex",flexWrap:'wrap'}}>
                            
                            {otherProducts.map((otherProd)=>{
                                if(otherProd.images.length <= 1 || otherProd.id === 82 || otherProd.id ===29) return
                                return(
                                    <Card style={{ width: '9rem',display:"flex",justifyContent:"space-evenly", }}>
                                        <Card.Img variant="top" src={ otherProd.images[0]} />
                                        <Card.Body>
                                            <Card.Title>{otherProd.title.split(' ')[0]}</Card.Title>
                                            <Card.Title>$ {otherProd.price}</Card.Title>
                                            <Button variant="primary" onClick={()=>navigate(`/details/${product.id}`,{state:otherProd})}>View Item</Button>
                                        </Card.Body>
                                    </Card>
                    
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </Container> 
            
        </div>
    )
}