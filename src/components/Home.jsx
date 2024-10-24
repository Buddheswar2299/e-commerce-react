import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './Index.css'
import {Routes, Route, NavLink, useNavigate} from 'react-router-dom'
//images
import firstImage from '../assets/1.png'
import secondImage from '../assets/4.png'
import thirdImage from '../assets/5.png'
import availableImage1 from '../assets/10.png'
import availableImage2 from '../assets/11.png'
import availableImage3 from '../assets/12.png'
import availableImage4 from '../assets/13.png'
import availableImage5 from '../assets/14.png'
import availableImage6 from '../assets/15.png'
import { useEffect, useState } from 'react';

export default function Home({user}){
    const navigate = useNavigate()
    

   

   
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col className='col-content' style={{display:"flex",flexDirection:"column"}}>
                            <div className='content' style={{marginBottom:"28px"}}>
                                <h3 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h3>
                                <h2 style={{color:'#216ad9', fontWeight:700}}>STYLE</h2>
                                <h5>Shop with latest products</h5>
                                <Button onClick={()=>navigate('/gallery')}>Browse Products</Button>
                            </div>
                            <div>
                                <h5>Products available from:</h5>
                                <Image src={availableImage1} height={30}/>
                                <Image src={availableImage2} height={30}/>
                                <Image src={availableImage3} height={30}/>
                                <Image src={availableImage4} height={30}/>
                                <Image src={availableImage5} height={30}/>
                                <Image src={availableImage6} height={30}/>
                            </div>
                        </Col>
                        <Col style={{height:"92vh", width:"70vw"}}><Image src={firstImage} /></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col className='col-content' style={{display:"flex",flexDirection:"column"}}> 
                            <div className='content' style={{marginBottom:"28px"}}>
                                    <h3 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h3>
                                    <h2 style={{color:'#216ad9', fontWeight:700}}>STYLE</h2>
                                    <h5>Shop with latest products</h5>
                                    <Button onClick={() => navigate('/gallery')}>Browse Products</Button>
                            </div>
                            <div>
                                <h5>Products available from:</h5>
                                <Image src={availableImage1} height={30}/>
                                <Image src={availableImage2} height={30}/>
                                <Image src={availableImage3} height={30}/>
                                <Image src={availableImage4} height={30}/>
                                <Image src={availableImage5} height={30}/>
                                <Image src={availableImage6} height={30}/>
                            </div>
                        </Col>
                        <Col style={{height:"92vh", width:"70vw"}}><Image src={secondImage} /></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col className='col-content' style={{display:"flex",flexDirection:"column"}}> 
                            <div className='content' style={{marginBottom:"28px"}}>
                                <h3 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h3>
                                <h2 style={{color:'#216ad9', fontWeight:700}}>STYLE</h2>
                                <h5>Shop with latest products</h5>
                                <Button>Browse Products</Button>
                            </div>
                            <div>
                                <h5>Products available from:</h5>
                                <Image src={availableImage1} height={30}/>
                                <Image src={availableImage2} height={30}/>
                                <Image src={availableImage3} height={30}/>
                                <Image src={availableImage4} height={30}/>
                                <Image src={availableImage5} height={30}/>
                                <Image src={availableImage6} height={30}/>
                            </div>
                        </Col>
                        <Col style={{height:"92vh", width:"70vw"}}><Image src={thirdImage} /></Col>
                    </Row>
                </Carousel.Item>
        </Carousel>
      </div>
    )
}