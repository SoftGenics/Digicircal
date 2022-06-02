import React from 'react'
import { Container, Image } from 'react-bootstrap'
import './Hero.css'
const Hero = () => {
  return (
    <div>
      <Container fluid className='hero'>
        <Image src="images/hero.jpg" fluid />
      </Container>
    </div>
  )
}

export default Hero