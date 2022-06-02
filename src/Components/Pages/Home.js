import React from 'react'
import Header from '../Header/Header'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Hero from '../Hero/Hero'
import Brand from '../Brand/Brand'
import Services from '../Services/Services'
import Reviews from '../Reviews/Reviews'
import Footer from '../Footer/Footer'
import AboutUs from '../AboutUs/AboutUs'
const Home = () => {
  return (
    <div>
        <Header />
        <NavbarMenu />
        <Hero />
        
        <Brand />
        <Services />
        <br></br>
        <br></br>
        <AboutUs />
        <Reviews />
       <br></br>
         <Footer /> 
        
    </div>
  )
}

export default Home