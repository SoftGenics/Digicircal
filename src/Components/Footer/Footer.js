import React from 'react'
import './Footer.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
function Footer() {
  AOS.init();
  return (
<div>
<footer className="footer-section">
    <div className='footer-overlay'></div>
        <div className="container">
           
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 mb-50">
                        <div className='footer-widget-heading'>
                            <h3>About Us</h3>
                        </div>
                        <div className="footer-widget">

                            <div className="footer-text">
                                <p>DigiCircal is a leading Digital agency on Digital marketing, Logo design, 2D/3D Animation, Video editing, Content writing, Website design, and related services firm in India. <span><Link to="/Aboutus">Read More</Link></span> </p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="https://www.facebook.com/videocreater.digicircal/"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="https://www.linkedin.com/company/digicircal"><i className="fab fa-linkedin twitter-bg"></i></a>
                                <a href="https://youtube.com/channel/UCJWQtjFuBIbWtAelawgdS5g"><i className="fab fa-youtube google-bg"></i></a>
                                <a href="https://instagram.com/digicircal"><i className="fab fa-instagram instagram-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Our Services</h3>
                            </div>
                            <ul>
                                <li><i className="fas fa-check-circle me-2"></i><Link to="/Advertising-video">Advertising Video</Link></li>
                                <li><i className="fas fa-check-circle me-2"></i><Link to="/Digital-marketing">Digital Marketing</Link></li>
                                <li><i className="fas fa-check-circle me-2"></i><Link to="/website-design">Website Designing</Link></li>
                                <li><i className="fas fa-check-circle me-2"></i><Link to="/graphic-design">Graphic Designing</Link></li>
                                <li><i className="fas fa-check-circle me-2"></i><Link to="/Content-writing">Content Writing</Link></li>
                                <li><i className="fas fa-check-circle me-2"></i><Link to="/animation-video">2D/3D Animation </Link></li>
                                <li><i className="fas fa-check-circle me-2"></i><Link to="/VoiceOver">Voice Over Service</Link></li>
                                <li><i className="fas fa-check-circle me-2"></i><Link to="/promo-video">Promo Video</Link></li>
                                <li><i className="fas fa-check-circle me-2"></i><Link to="/Corporate-video">Coporate Video</Link></li>
                                <li><i className="fas fa-check-circle me-2"></i><Link to="/Digital-visiting-card">Digital Visiting Card</Link></li>
                                <li><i className="fas fa-check-circle me-2"></i><Link to="/lead-generation">Lead Generation</Link></li>
                              
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3><span>Contact Us</span></h3>
                            </div>
                              <p><a href="tel:7827496895"><i className='fas fa-phone-alt me-2'></i>+91-7827496895</a> </p>
                              <p><a href='tel:8368491107'><i className='fas fa-phone-alt me-2'></i>+91 8368491107</a></p>
                              <p><a href="mailto:info@digicircal.com"><i className='fas fa-envelope me-1'></i>info@digicircal.com</a></p>
                              <p><a href="https://www.google.com/maps/dir/25.639951,85.0960567/digicircal/@26.8149815,76.6836302,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390ce579e22c336b:0xdacf394b8dfe2f36!2m2!1d77.303042!2d28.587104"><i className='fas fa-map me-2'></i>Block C, 218, Block B, New Ashok Nagar, Delhi, Uttar Pradesh 110096</a></p>
                              

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2022, All Right Reserved <a href="https://digicircal.com">DigiCircal</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="#">Terms</Link></li>
                                <li><Link to="#">Privacy</Link></li>
                                <li><Link to="#">Policy</Link></li>
                                <li><Link to="#">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
  )
}

export default Footer