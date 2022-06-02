import React from 'react'
import './AboutUs.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
const AboutUs = () => {
  return (
 <>
 <section class="about-section">
        <div class="container">
            <div class="row">                
                <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2" data-aos='fade-up' data-aos-duration='1100'>
                    <div class="inner-column">
                        <div class="sec-title">
                            <span class="title">About Digicircal</span>
                            {/* <h2>We are Creative Tech Enthusiast working since 2021</h2> */}
                        </div>
                        <div class="text">DigiCircal is a leading Digital agency on Digital marketing, Logo design, 2D/3D Animation, Video editing, Content writing, Website design, and related services firm in India. Digi Circal providing high-quality, cost-effective, and timely services to its clients in India and overseas. Digital marketing is an integral aspect of almost all business types. The continuous and quick growth of the current period has made everything so convenient.</div>
   
                        <div class="btn-box">
                            <Link to="/Aboutus" class="theme-btn btn-style-one">Read More <i className='fas fa-arrow-right ms-2'></i></Link>
                        </div>
                    </div>
                </div>

                {/* <!-- Image Column --> */}
                <div class="image-column col-lg-6 col-md-12 col-sm-12" data-aos='fade-right' data-aos-duration='1000'>
                    <div class="inner-column wow fadeInLeft">
                      <div class="author-desc">
                        <h2>Digicircal</h2>
                        <span>Digital Marketing Agency</span>
                      </div>
                        <figure class="image-1"><Link to="/" class="lightbox-image" data-fancybox="images"><img title="Digicircal" src="https://i.pinimg.com/736x/7c/2b/02/7c2b02f6ce583acd7af5867bc22578cf.jpg" alt="" /></Link></figure>
                     
                    </div>
                </div>
              
            </div>
        </div>
    </section>
 </>


  )
}

export default AboutUs