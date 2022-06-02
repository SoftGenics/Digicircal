import React from 'react'
import { Container ,Image } from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import './Brand.css'
const Brand = () => {
  return (
    <div>
      <Container fluid className='brand'>
        <h2 className='text-center mt-3'>Our Valuable Clients</h2>
      <Marquee gradient={false} speed={60}>
        {/* <Image src="/logo/a1.png" /> */}
       
        <Image src="/logo/a1.jpeg" />
        <Image src="/logo/a2.jpeg" />
        <Image src="/logo/b.jpg" />
        <Image src="/logo/b1.jpeg" />
        <Image src="/logo/b2.jpeg" />
        <Image src="/logo/c.png" />
        <Image src="/logo/c1.jpeg" />
        <Image src="/logo/c2.jpeg" />
        <Image src="/logo/d.png" />
        <Image src="/logo/d1.jpeg" />
        <Image src="/logo/d2.jpeg" />
        <Image src="/logo/e.png" />
        <Image src="/logo/e1.jpeg" />
      

      
        <Image src="/logo/f.png" />
        <Image src="/logo/g.png" />
        <Image src="/logo/h.png" />
        <Image src="/logo/i.jpg" />
        <Image src="/logo/j.jpg" />
        <Image src="/logo/k.jpg" />
        <Image src="/logo/l.png" />
        <Image src="/logo/m.png" />
        <Image src="/logo/n.jpg" />
        <Image src="/logo/o.png" />
        <Image src="/logo/p.jpeg" />
        <Image src="/logo/q.jpg" />
        <Image src="/logo/r.jpg" />
        <Image src="/logo/s.png" />
        
        <Image src="/logo/u.jpg" />
        <Image src="/logo/v.jpg" />
        <Image src="/logo/v10.png" />
        <Image src="/logo/x.png" />
        <Image src="/logo/y.jpg" />
        <Image src="/logo/z.jpeg" />
        
       
      </Marquee>
      </Container>
    </div>
  )
}

export default Brand