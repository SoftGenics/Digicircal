import React from 'react'
import { Col, Container, Row,Image } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Style.css'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Youtub from './Youtub'

const Shootvideo = () => {
  return (
    <>
      
    <Header/>
    <NavbarMenu/>
    <Container fluid className="banner">
     
        <Image fluid src='images/shoot.jpg' alt='banner' />
     </Container>
     <Container  >
      <div><h2 className='about-cont'>CORPORATE  VIDEO</h2></div>
     
       
        <Row>
        <Col md={4} className='wrapper'>
        <img src='images/PRMO-VIDEO.jpg' alt='img' className='img-web'></img>
        </Col> 
          
        <Col md={8}>
          <p>These movies are primarily intended for external investors, stakeholders, and corporate clients in
order to educate and raise awareness about the company's and organization's potential growth.</p>
        </Col>
         
        
        
        </Row>
        </Container>
        <br/>
        <Youtub />
      <Footer/>
    
    </>
  )
}

export default Shootvideo