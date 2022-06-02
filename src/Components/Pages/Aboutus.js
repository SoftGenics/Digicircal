import React,{useEffect} from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import './Style.css'
import Aos from 'aos'
import "aos/dist/aos.css"



const Aboutus = () => {
  
  useEffect(() =>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
    <Header/>
      <NavbarMenu/>
      <div className='about-digi'>
      <section className="about-section ">
        <div className="container">
            <div className="row">                
                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div className="inner-column">
                        <div className="sec-title">
                            <span className="title">About Digicircal</span>

                        </div>
                        <div className="text">DigiCircal is a leading Digital agency on Digital marketing, Logo design, 2D/3D Animation, Video editing, Content writing, Website design, and related services firm in India. Digi Circal providing high-quality, cost-effective, and timely services to its clients in India and overseas. Digital marketing is an integral aspect of almost all business types. The continuous and quick growth of the current period has made everything so convenient.</div>
                      <div className="text">
                        We are here to serve you next level tutorial that currently in trend to match you with your expertise. Css3 transition is a learning website. where you can find many good quality content related to web development and tutorials about plugins. here we are using html, html5, css, css3, jquery & javascript along with inspirational UI design layout by professionals by using Photoshop and adobe allustrator.
                      </div>
                        <div className="btn-box">
                            <a href="#about-more" className="theme-btn btn-style-one">Read More</a>
                        </div>
                    </div>
                </div>

                {/* <!-- Image Column --> */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12" >
                    <div className="inner-column wow fadeInLeft">
                      <div className="author-desc">
                        <h2>Digicircal</h2>
                        <span>Digital Marketing Agency</span>
                      </div>
                        <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img title="digicircal" src="https://i.pinimg.com/736x/7c/2b/02/7c2b02f6ce583acd7af5867bc22578cf.jpg" alt="" /></a></figure>
                     
                    </div>
                </div>
              
            </div>
           <div className="sec-title" id="about-more">
                            <span className="title mt-5">Our Vision</span>
                            <h2>Our Vision</h2>
                        </div>
                      <div className="text">
                      Our goal is to create brands that reflect a businessperson's true passion, as well as an association's person who inspires client loyalty. We take each planned project very seriously, and we have a distinct contact with it from the request scenario to the final delivery.
                          </div>
                          <div className="sec-title" id="about-more">
                        
                            <h2>Our Mision</h2>
                        </div>
                      <div className="text">
                      We are on top notch to make excellent first impressions on our consumers and to assist you in clearly and strongly communicating your brand to your target demographic. Our in-house designers employ all of their imagination to ensure that the design concept is distinctive, conveys your message, and highlights your company's features.
                          </div>
        </div>
    </section>
    </div>
    <Footer/>
    </>
  )
}

export default Aboutus