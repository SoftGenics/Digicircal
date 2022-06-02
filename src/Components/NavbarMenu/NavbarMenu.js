import React, {useState} from 'react'
import { Container, Navbar, Nav, Button, Dropdown , ButtonGroup, DropdownButton} from 'react-bootstrap'
import './NavbarMenu.css'
import { Link} from 'react-router-dom'
const NavbarMenu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top' className='navbarmenu shadow'>
        <Container fluid>
        <Navbar.Brand as={Link} to="/"><img src='/images/digimode.png' alt='logo' className='brand-logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-bars' } style={{color:'#299AEF',transform:'Scale(1.3)'}}/></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={closeMobileMenu}>HOME</Nav.Link>
            <Dropdown as={Link} to="/Ourservices" show={show} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <Dropdown.Toggle variant="light" id="dropdown-basic" size='md' >
              OUR SERVICES
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/Advertising-video"><Button variant='light'>Advertising Video</Button></Dropdown.Item>
              {/* Sub dropdown start */}
              <Dropdown.Item >
              <DropdownButton
              
              key='end'
              id={`dropdown-button-drop-end`}
              drop='end'
              variant="light"
              title="Digital Marketing"
              as={Link} to="/Digital-marketing"
              show={show1} onMouseEnter={() => setShow1(true)} onMouseLeave={() => setShow1(false)}
            >
              <Dropdown.Item eventKey="1">Social Media Marketing</Dropdown.Item>
              <Dropdown.Item eventKey="2">Lead Generation</Dropdown.Item>
              <Dropdown.Item eventKey="3">Youtube Ad Campain</Dropdown.Item>
              <Dropdown.Item eventKey="4">SEO</Dropdown.Item>
              <Dropdown.Item eventKey="5">Google Ad Campain</Dropdown.Item>
              <Dropdown.Item eventKey="6">Facebook Ad campain</Dropdown.Item>
              <Dropdown.Item eventKey="7">Content Marketing</Dropdown.Item>
              <Dropdown.Item eventKey="8">E-mail Marketing</Dropdown.Item>
              <Dropdown.Item eventKey="9">E-Commarce Marketing</Dropdown.Item>
              <Dropdown.Item eventKey="10">Instgram Marketing</Dropdown.Item>
            </DropdownButton>
            </Dropdown.Item>
        {/* Sub Dropdown End */}
         {/* Sub dropdown start */}
         <Dropdown.Item as={Link} to="/website-design">
              <DropdownButton
              as={ButtonGroup}
              key='end'
              id={`dropdown-button-drop-end`}
              drop='end'
              variant="light"
              title="Website Designing"
              show={show2} onMouseEnter={() => setShow2(true)} onMouseLeave={() => setShow2(false)}
            >
              <Dropdown.Item eventKey="1">E-commerce Website</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dynamic Website</Dropdown.Item>
              <Dropdown.Item eventKey="3">Portfolio Website</Dropdown.Item>
              <Dropdown.Item eventKey="4">Landing page</Dropdown.Item>
            </DropdownButton>
            </Dropdown.Item>
            {/* DropdownSubmenu end */}
            <Dropdown.Item as={Link} to="/promo-video"><Button variant='light'>Promo Video</Button></Dropdown.Item>
            <Dropdown.Item as={Link} to="/Corporate-video"><Button variant='light'>Corporate Video</Button></Dropdown.Item>
             {/* Sub dropdown start */}
         <Dropdown.Item >
              <DropdownButton
             
              key='end'
              id={`dropdown-button-drop-end`}
              drop='end'
              variant="light"
              title="Graphic Design &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              show={show3} onMouseEnter={() => setShow3(true)} onMouseLeave={() => setShow3(false)}
              as={Link} to="/graphic-design"
            >
              <Dropdown.Item eventKey="1">Logo Design</Dropdown.Item>
              <Dropdown.Item eventKey="2">Poster Design</Dropdown.Item>
              <Dropdown.Item eventKey="3">PDF Design</Dropdown.Item>
              <Dropdown.Item eventKey="4">Brochure Design</Dropdown.Item>
              <Dropdown.Item eventKey="5">Mockeup Design</Dropdown.Item>
              <Dropdown.Item eventKey="6">Social Media Post</Dropdown.Item>
            </DropdownButton>
            </Dropdown.Item>
            {/* DropdownSubmenu end */}
                {/* Sub dropdown start */}
         <Dropdown.Item >
              <DropdownButton
              
              key='end'
              id={`dropdown-button-drop-end`}
              drop='end'
              variant="light"
              title="2D/3D Aniamtion"
              show={show4} onMouseEnter={() => setShow4(true)} onMouseLeave={() => setShow4(false)} onClick={()=> setShow4(true)}
              as={Link} to='/animation-video'
            >
              <Dropdown.Item eventKey="1">2D Aniamtion Video</Dropdown.Item>
              <Dropdown.Item eventKey="2">3D Aniamtion Video</Dropdown.Item>
              <Dropdown.Item eventKey="3">Logo Animation Video</Dropdown.Item>
              <Dropdown.Item eventKey="4">Character Animation Video</Dropdown.Item>
              <Dropdown.Item eventKey="5">White Board Animation Video</Dropdown.Item>
            </DropdownButton>
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/Content-writing"><Button variant='light'>Content Writing</Button></Dropdown.Item>
            <Dropdown.Item as={Link} to="/VoiceOver"><Button variant='light'>Voice Over Service</Button></Dropdown.Item>
            <Dropdown.Item as={Link} to="/Digital-visiting-card"><Button variant='light'>Digital Visiting Card</Button></Dropdown.Item>
            <Dropdown.Item as={Link} to="/lead-generation"><Button variant='light'>Lead Generation</Button></Dropdown.Item>
            </Dropdown.Menu>
            
          </Dropdown>
          

        
            <Nav.Link as={Link} to="/Aboutus" onClick={closeMobileMenu}>ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/Reviews" onClick={closeMobileMenu}>REVIEWS</Nav.Link>
            
          </Nav>
          <Nav className='ms-auto'>
          <Nav.Link href="tel:8368491107"><Button variant='primary' size='md' className='btn-call' onClick={closeMobileMenu}><i className="fas fa-phone me-2" /><span>CALL US</span></Button></Nav.Link>
          </Nav>
  
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarMenu