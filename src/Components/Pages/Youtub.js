import React from 'react'
import { Col, Container, Row ,Carousel} from 'react-bootstrap'


const Youtub=()=>{
    

return(<div>
<Container style={{backgroundColor:"green", height:'400px'}}>
<Row style={{paddingTop:'20px' }} >

<Col md='6'  >
        <h1 style={{color:"white", marginTop:"100px"}}>Here is some example of our</h1>
        <h1>Amazing Work</h1>
        </Col><Col md='6'>
      <Carousel>
  <Carousel.Item>
  <iframe  src="https://www.youtube.com/embed/kvhs4OTfCJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    
  </Carousel.Item>
  <Carousel.Item>
  <iframe  src="https://www.youtube.com/embed/lZm25nHz6dI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


   
  </Carousel.Item>
  <Carousel.Item>
  <iframe  src="https://www.youtube.com/embed/kvhs4OTfCJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


     </Carousel.Item>
      <Carousel.Item>
  <iframe  src="https://www.youtube.com/embed/ENvZWZXo6N8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


     </Carousel.Item>
      <Carousel.Item>
  <iframe  src="https://www.youtube.com/embed/MkJIciMkXDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


     </Carousel.Item>
     <Carousel.Item>
  <iframe  src="https://www.youtube.com/embed/MkJIciMkXDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


     </Carousel.Item>
</Carousel>
</Col></Row>     </Container>
</div>

)
}

export default Youtub

