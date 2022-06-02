import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home'
import Animationvideo from "./Components/Pages/Animationvideo";
import Graphicdesign from "./Components/Pages/Graphicdesign";
import LeadGeneration from "./Components/Pages/LeadGeneration";
import PromoVideo from "./Components/Pages/PromoVideo";
import ScrollToTop from "./Components/Pages/ScrollToTop";
import Shootvideo from "./Components/Pages/Shootvideo";
import Websitedesign from "./Components/Pages/Websitedesign";
import Aboutus from './Components/Pages/Aboutus'
import Reviews from './Components/Reviews/Reviews';
import Whatapp from './Components/FloatingWhatsappButton/FloatingWhatsappButton'
import VoiceOver from './Components/Pages/VoiceOver';
import VideoAd from './Components/Pages/VideoAd';
import Visiting from './Components/Pages/VisitingCard'
import Ourservices from './Components/Pages/Ourservices';
import DigitalMarketing from './Components/Pages/DigitalMarketing';
import CorporateVideo from './Components/Pages/CorporateVideo';
import ContentWriting from './Components/Pages/ContentWriting';
function App() {
  return (
        <div>
          <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Digital-marketing" element={<DigitalMarketing />} />
            <Route path='/website-design' element={<Websitedesign/>}/>
            <Route path='/Corporate-video' element={<CorporateVideo/>}/>
            <Route path='/Content-writing' element={<ContentWriting/>}/>
          <Route path='/shoot-video' element={<Shootvideo/>}/>
          <Route path='/animation-video' element={<Animationvideo/>}/>
          <Route path='/promo-video' element={<PromoVideo/>}/>
          <Route path="/lead-generation" element={<LeadGeneration/>}/>     
            <Route path="/graphic-design" element={<Graphicdesign/>}/>
         <Route path="/Aboutus" element={<Aboutus/>}/>
         <Route path="/Reviews" element={<Reviews/>}/>
         <Route path="/Advertising-video" element={<VideoAd/>}/>
         <Route path="/VoiceOver" element={<VoiceOver/>}/>
         <Route path="/Digital-visiting-card" element={<Visiting/>}/>
         <Route path="/Ourservices" element={<Ourservices/>}/>
         

          </Routes>
        </BrowserRouter>
        <Whatapp/>
      </div>
  );
}

export default App;
