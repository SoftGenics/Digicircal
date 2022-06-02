import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Header.css'
const Header = () => {
  return (
    <div>
        <Navbar className='header' bg="dark" variant='dark' fixed='top'>
          <Container fluid>
          <Nav className="me-auto">
            <Nav.Link href="tel:8368491107"><span><i className="fas fa-phone-alt me-2"></i>+91 8368491107</span></Nav.Link>
            <Nav.Link href="mailto:info@digicircal.com"><span><i className="fas fa-envelope me-2"></i>info@digicircal.com</span></Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
          <Nav.Link href="https://www.facebook.com/videocreater.digicircal/"><i className="fab fa-facebook-square"></i></Nav.Link>
          <Nav.Link href="https://instagram.com/digicircal"><i className="fab fa-instagram"></i></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/company/digicircal"><i className="fab fa-linkedin"></i></Nav.Link>
          <Nav.Link href="https://youtube.com/channel/UCJWQtjFuBIbWtAelawgdS5g"><i className="fab fa-youtube"></i></Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header