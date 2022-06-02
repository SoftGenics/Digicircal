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


const PromoVideo = () => {
  
  AOS.init();
  const YoutubeSlide = ({ url, isSelected }: { url: string; isSelected?: boolean }) => (
    <ReactPlayer className="player" url={url} playing={isSelected, false} controls={true} playIcon />
);

  const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

  const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

  const customRenderThumb = (children) =>
      children.map((item) => {
          const videoId = getVideoId(item.props.url);
          return <img src={getVideoThumb(videoId)} alt="thumbnail" />;
      });
  return (
      <>
    <Header/>
    <NavbarMenu/>
    <Container fluid className='website-design'>
      <Image src="services/promotionalvideo.jpg" fluid />
      <Container>
      <Row className='mt-5'>
        <Col md={6}>
          <Image src="services/promo.jpg" data-aos='fade-right' data-aos-duration='1000'  />
        </Col>
        <Col md={6}>
          <h2 className='mt-5 mb-3'>Promotional Video</h2>
            <p>These videos are entirely focused on branding and promoting the brand's and company's growth. The fact that promotional videos combine existing user behaviour with an improved message delivery platform is the main reason they function so well.</p>
        </Col>
      </Row>
      </Container>
      {/* <div class="seven">
  <h1 className='text-center fw-bold mt-5 '>What <span>Website Designing</span> Include</h1>
    <Container className='mt-5'>
      <Row>
        <Col sm={3}>
          <p><span className='text-bold text-success'><i className='fas fa-check me-2' /></span> Dynamic Website</p>
        </Col>
        <Col sm={3}>
          <p><span className='text-bold text-success'><i className='fas fa-check me-2' /></span> Dynamic Website</p>
        </Col>
        <Col sm={3}>
          <p><span className='text-bold text-success'><i className='fas fa-check me-2' /></span> Dynamic Website</p>
        </Col>
        <Col sm={3}>
          <p><span className='text-bold text-success'><i className='fas fa-check me-2' /></span> Dynamic Website</p>
        </Col>
      </Row>
    </Container>
</div> */}
<br></br>
      <Container fluid className='video-section'>
        <Row>
          <Col md={7}>
            <div className='work-info'>
            <h2 className='first-heading'>Here are some precious</h2>
              <h2 className='second-heading'>Samples</h2>
            </div>
          </Col>
          <Col md={5} className="mt-3">
            <br></br>
          <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
          <YoutubeSlide key="youtube-1" url="https://www.youtube.com/embed/3NJlndvrhNw" />
            <YoutubeSlide key="youtube-2" url="https://www.youtube.com/embed/C7250A3n7Uk" />
            <YoutubeSlide key="youtube-3" url="https://www.youtube.com/embed/2-F4byiv1w4" />
            <YoutubeSlide key="youtube-4" url="https://www.youtube.com/embed/GOpOCf1SHA4" />
            <YoutubeSlide key="youtube-5" url="https://www.youtube.com/embed/kvhs4OTfCJU" />
            <YoutubeSlide key="youtube-5" url="https://www.youtube.com/embed/ZKuLLx4IBHg" />
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
    </>

  )
}

export default PromoVideo