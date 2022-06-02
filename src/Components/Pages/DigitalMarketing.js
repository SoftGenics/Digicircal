import React from 'react'
import './Style.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Image, Row, Col } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

const DigitalMarketing = () => {
    AOS.init();
  //   const YoutubeSlide = ({ url, isSelected }: { url: string; isSelected?: boolean }) => (
  //     <ReactPlayer width="550px" height='300px' url={url} playing={isSelected} />
  // );
  
  //   const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;
  
  //   const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;
  
  //   const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);
  
  //   const customRenderThumb = (children) =>
  //       children.map((item) => {
  //           const videoId = getVideoId(item.props.url);
  //           return <img src={getVideoThumb(videoId)} />;
  //       });
  return (
    <div>
         <Header/>
    <NavbarMenu/>
    <Container fluid className='website-design'>
      <Image src="services/digitalmarketing.jpg" fluid />
      <Container>
      <Row className='mt-5'>
        <Col md={6}>
          <Image src="services/digim.webp" data-aos='fade-right' data-aos-duration='1000'  />
          
        </Col>
        <Col md={6}>
          <h2 className='mt-5 mb-3'>Digital Marketing</h2>
          <p>DigiCircal is a renowned digital marketing agency in New Delhi that has established new benchmarks for your solid foundation in the world of internet marketing. We are committed to meeting and exceeding our customers' expectations and demands in marketing, advertising, and other areas. Digi Circal stands out from the crowd as the top marketing firm thanks to its innovative ideas and cutting-edge approaches that live up to the brand's reputation. We are New Delhi's most inventive and client-focused social media marketing agency. In order to improve sales and profits through the digital sector, we function as a bridge between the client and their respective clients.</p>
        </Col>
      </Row>
      </Container>
      <div class="seven">
  <h1 className='text-center fw-bold mt-5 '>What <span>Digital Marketing</span> Includes ?</h1>
    <Container className='mt-5 digital' fluid>
      <Row>
        <Col xs={6} lg={2}>
          <Image src="https://cliply.co/wp-content/uploads/2019/07/371907120_YOUTUBE_ICON_TRANSPARENT_400.gif" style={{height:"100px", width:"100px"}} />
          <p className=' mt-3 mb-3 text-small'>Youtube Ad Campaign</p>
        </Col>
        <Col xs={6} lg={2}>
          <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/77246e109776109.5fdb5df5c1273.gif" style={{height:"100px", width:"100px"}} />
          <p className=' mt-3 mb-3 text-small'>Google Ad Campaign</p>
        </Col>
        <Col xs={6} lg={2}>
          <Image src="https://static.wixstatic.com/media/c71004_f3df4a075e654be8b33079d23f7bfa5d~mv2.gif" style={{height:"100px", width:"100px"}} />
          <p className=' mt-3 mb-3 text-small '>Facebook Ad Campaign</p>
        </Col>
        <Col xs={6} lg={2}>
          <Image src="http://smsv.sg/wp-content/uploads/2020/08/insta-gif.gif" style={{height:"100px", width:"100px"}} />
          <p className=' mt-3 mb-3 text-small'>Instagram Marketing</p>
        </Col>
        <Col xs={6} lg={2}>
          <Image src="https://i.pinimg.com/originals/19/1f/1b/191f1b2978a23ed3f4f130f9f1fa4e18.gif" style={{height:"100px", width:"100px"}} />
          <p className=' mt-3 mb-3 text-small '>Social Media Marketing</p>
        </Col>
        <Col xs={6} lg={3}>
          <Image src="https://appliedsynergy.tech/assets/images/gifs/ecommerce-cart-gif.gif" style={{height:"100px", width:"100px"}} />
          <p className=' mt-3 mb-3 text-small '>E-Commerce Marketing</p>
        </Col>
        <Col xs={6} lg={2}>
          <Image src="https://v1technologies.co.uk/images/email-marketing-services.gif" style={{height:"100px", width:"100px"}} />
          <p className=' mt-3 mb-3 text-small'>E-Mail Marketing</p>
        </Col>
        <Col xs={6} lg={2}>
          <Image src="https://i.pinimg.com/originals/00/6b/27/006b2787627b0b67bb91d9716d6e5058.gif" style={{height:"100px", width:"100px"}} />
          <p className=' mt-3 mb-3 text-small '>Search Engin Optimisation</p>
        </Col>
        <Col xs={6} lg={2}>
          <Image src="https://hivecontent.in/wp-content/uploads/2021/05/content-writing-services.gif" style={{height:"100px", width:"100px"}} />
          <p className=' mt-3 mb-3 text-small'>Content Writing</p>
        </Col>
        <Col xs={6} lg={2}>
          <Image src="https://cdn.dribbble.com/users/2918596/screenshots/7894471/02_hiring.gif" style={{height:"100px", width:"100px"}} />
          <p className=' mt-3 mb-3 text-small'>Lead Generation</p>
        </Col>
     

  

        
     </Row>
 
    </Container>
</div>
<br></br>
      <Container fluid className='video-section'>
        <Row>
          <Col md={7}>
            <div className='work-info'>
            <h2 className='first-heading'>Here are some precious</h2>
              <h2 className='second-heading'>Samples</h2>
            </div>
          </Col>
          <Col md={5} className="mt-3" style={{paddingBottom:"1rem"}}>
            <br></br>
           {/* <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
             <YoutubeSlide key="youtube-1" url="https://www.youtube.com/embed/3NJlndvrhNw" />
            <YoutubeSlide key="youtube-2" url="https://www.youtube.com/embed/C7250A3n7Uk" />
            <YoutubeSlide key="youtube-3" url="https://www.youtube.com/embed/k2iir9yH99o" />
            <YoutubeSlide key="youtube-4" url="https://www.youtube.com/embed/0uGETVnkujA" /> 
        </Carousel>  */}
                    <Carousel autoPlay showThumbs={false} showIndicators={false} interval="2000" autoFocus={true}>
                <div>
                    <img src="services/GrowYourBuissnesWithAd1.png" />
                    
                </div>
                <div>
                <img src="services/2.png" />
                    
                </div>
                <div>
                <img src="services/3.png" />
                    
                </div>
                <div>
                <img src="services/4.png" />
                    
                </div>
                <div>
                <img src="services/5.png" />
                    
                </div>
            </Carousel>
          </Col>
        </Row>
      </Container>

    </Container>
    <Container className='other-services mt-5'>
      <p className='text-center fw-bold '>Features</p>
      <h1 className='text-center text-success fw-bold'>Other Services</h1>
      <Row className='mt-5'>
        <Col sm={3} className='col-wrapper'>
          <i className='fas fa-video'/>
          <Link to="/Advertising-video"><h4 className='mt-3 fw-bold'>Advertising Video</h4></Link>
        </Col>
        <Col sm={3} className='col-wrapper'>
          <i className='fas fa-photo-video'/>
          <Link to="/promo-video"><h4 className='mt-3 fw-bold'>Promo Video</h4></Link>
        </Col>
        <Col sm={3} className='col-wrapper'>
          <i className='far fa-handshake'/>
          <Link to="/Corporate-video"><h4 className='mt-3 fw-bold'>Corporate Video</h4></Link>
        </Col>
        <Col sm={3} className='col-wrapper'>
          <i className='fas fa-film'/>
          <Link to="/"><h4 className='mt-3 fw-bold'>Shoot Video</h4></Link>
        </Col>
        <Col sm={3} className='col-wrapper'>
          <i className='fab fa-digital-ocean'/>
          <Link to="/Digital-marketing"><h4 className='mt-3 fw-bold'>Digital Marketing</h4></Link>
        </Col>
        <Col sm={3} className='col-wrapper'>
          <i className='fas fa-code'/>
          <Link to="/website-design"><h4 className='mt-3 fw-bold'>Website Designing</h4></Link>
        </Col>
        <Col sm={3} className='col-wrapper'>
          <i className='fas fa-palette'/>
          <Link to="/graphic-design"><h4 className='mt-3 fw-bold'>Graphic Designing</h4></Link>
        </Col>
        <Col sm={3} className='col-wrapper'>
          <i className='fas fa-pencil-alt'/>
          <Link to="/Content-writing"><h4 className='mt-3 fw-bold'>Content Writing</h4></Link>
        </Col>
        <Col sm={3} className='col-wrapper'>
          <i className='fas fa-american-sign-language-interpreting'/>
          <Link to="/animation-video"><h4 className='mt-3 fw-bold'>2D/3D Animation</h4></Link>
        </Col>
        <Col sm={3} className='col-wrapper'>
        <i className="fas fa-microphone-alt"></i>
          <Link to="/VoiceOver"><h4 className='mt-3 fw-bold'>Voice Over Service</h4></Link>
        </Col>
        <Col sm={3} className='col-wrapper'>
        <i className="fas fa-id-card-alt"></i>
          <Link to="/Digital-visiting-card"><h4 className='mt-3 fw-bold'>Visiting Card</h4></Link>
        </Col>
        <Col sm={3} className='col-wrapper' >
        <i className="fas fa-users"></i>
          <Link to="/lead-generation"><h4 className='mt-3 fw-bold'>Lead Generation</h4></Link>
        </Col>
      </Row>
    </Container>
    <Footer />
    </div>
  )
}

export default DigitalMarketing