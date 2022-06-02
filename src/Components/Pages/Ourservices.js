import React from 'react'
import Header from '../Header/Header'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Footer from '../Footer/Footer'
import './Services.css'
import { Button } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
const Ourservices = () => {
    AOS.init();
  return (
    <div>
        <Header />
        <NavbarMenu/>
        <section class="showcase">
            <img src="https://www.technocp.com/storage/2021/10/TechNoCP-Services.png" alt="Pic" />
            <div class="overlay">
                
                <h2 data-aos='fade-up' data-aos-duration='2000' data-aos-once='true'>OUR SERVICES</h2>
                <p data-aos='fade-up' data-aos-duration='2000' data-aos-once='true'>
                Know what your customers want most and what your company does best. Focus on where those two meet.
                </p >
                <Button className='mt-3'>EXPLORE</Button>
            </div>
            </section>
            <div className='service-2'>
	<h2 className="mt-5 text-center fw-bold"><span>Let's Check Our Services</span></h2>
	<div className="testimotionals" data-aos='fade-right' data-aos-duration='1050' >
  <div className="card">
    <div className="layer1">
      
    </div>
    <div className="content">
      <div className="image">
        <img src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png" alt="" />
        
      </div>
      <div className="details">
	    <h2>Website Design</h2>
      </div>
      <Link to='/website-design'>Read More <i className='fas fa-arrow-right me-2'/></Link>
    </div>
  </div>
</div>



<div className="testimotionals" data-aos='fade-right' data-aos-duration='1200' >
  <div className="card">
    <div className="layer2">
      
    </div>
    <div className="content">
      <div className="image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAazUMEfclkrsTQEAXyrfXIbMXBKvmDYbf0Q&usqp=CAU" alt="" />
        
      </div>
      <div className="details">
	  <h2>Advertising Video</h2>
      </div>
      <Link to='/Advertising-video'>Read More <i className='fas fa-arrow-right me-2'/></Link>
    </div>
  </div>
</div>
<div className="testimotionals" data-aos='fade-right' data-aos-duration='1250' >
  <div className="card">
    <div className="layer7">
    </div>
    <div className="content">
      <div className="image">
        <img align="center" src="https://www.webscreationsdesign.com/wp-content/uploads/2022/04/graphic-designers-kenya.png" alt="" />
      </div>
      <div className="details">
        <h2>Animation Video</h2>
      </div>
      <Link to='/animation-video'>Read More <i className='fas fa-arrow-right me-2'/></Link>
    </div>
  </div>
</div>

<div className="testimotionals" data-aos='fade-right' data-aos-duration='1300' >
  <div className="card">
    <div className="layer4">
      
    </div>
    <div className="content">
      <div className="image">
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDqOFiJMTcYPrdm_TuUWOXvYveVfI5IJ8CrLVe-WDZ-A4g46_BUINrtBtSY01rR2ZFxQ&usqp=CAU" alt="" />
        
      </div>
      <div className="details">
	    <h2>Graphic Design</h2>
      </div>
      <Link to='/graphic-design'>Read More <i className='fas fa-arrow-right me-2'/></Link>
    </div>
  </div>
</div>
<div className="testimotionals" data-aos='fade-right' data-aos-duration='1350' >
  <div className="card">
    <div className="layer3">
      
    </div>
    <div className="content">
      <div className="image">
        <img  src="https://i.pinimg.com/originals/0a/86/71/0a8671a21422eecab8189a2941bfb132.gif" alt="" />
        
      </div>
      <div className="details">
	  <h2>Promo Video</h2>
      </div>
      <Link to='/promo-video'>Read More <i className='fas fa-arrow-right me-2'/></Link>
    </div>
  </div>
</div>
<div className="testimotionals" data-aos='fade-right' data-aos-duration='1400' >
  <div className="card">
    <div className="layer5">
      
    </div>
    <div className="content">
      <div className="image">
        <img align="center"  src="https://png.pngtree.com/png-vector/20190119/ourlarge/pngtree-id-card-line-filled-icon-png-image_325388.jpg" alt="" />
        
      </div>
      <div className="details">
        <h2>Visting Card</h2>
      </div>
      <Link to='/Digital-visiting-card'>Read More <i className='fas fa-arrow-right me-2'/></Link>
    </div>
  </div>
</div>
<div className="testimotionals" data-aos='fade-right' data-aos-duration='1450' >
  <div className="card">
    <div className="layer">
      
    </div>
    <div className="content">
      <div className="image">
        <img src="https://thumbs.dreamstime.com/b/microphone-icon-natural-orange-round-button-isolated-143288236.jpg" alt="" />
        
      </div>
      <div className="details">
	    <h2>Voice Over</h2>
      </div>
      <Link to='/VoiceOver'>Read More <i className='fas fa-arrow-right me-2'/></Link>
    </div>
  </div>
</div>
<div className="testimotionals" data-aos='fade-right' data-aos-duration='1500'>
  <div className="card">
    <div className="layer7">
      
    </div>
    <div className="content">
      <div className="image">
        <img  src="https://www.freeiconspng.com/thumbs/edit-icon-png/red-edit-icon-glossy-29.png" alt="" />
        
      </div>
      <div className="details">
	  <h2>Content Writing</h2>
      </div>
      <Link to='/Content-writing'>Read More <i className='fas fa-arrow-right me-2'/></Link>
    </div>
  </div>
</div>
<div className="testimotionals" data-aos='fade-right' data-aos-duration='1550' >
  <div className="card">
    <div className="layer8">
      
    </div>
    <div className="content">
      <div className="image">
        <img align="center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdAZM0b_CbzVnimTPyHnvLTEpQ1UmXAiwIJpGZSqTE-m36UCZ9e6Ptubl8vO0PC_ezZiI&usqp=CAU" alt="" />
        
      </div>
      <div className="details">
        <h2>Lead Generation</h2>
      </div>
	  <Link to='/lead-generation'>Read More <i className='fas fa-arrow-right me-2'/></Link>
    </div>
  </div>
</div>
    </div>
<br></br>
<br></br>
        <Footer/>
    </div>
  )
}

export default Ourservices