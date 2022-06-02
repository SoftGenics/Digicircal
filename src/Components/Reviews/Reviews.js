import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Reviews.css'
import { Card, Container } from 'react-bootstrap';
import Header from '../Header/Header'
import Navebar from '../NavbarMenu/NavbarMenu'
const Reviews = () => {
    const ReviewComment=[
        {time:"a month ago",name:"Bhavya shree",comment:"All services and responses were  excellent and professional....I deeply appreciate every member of this team for their extraordinary talent. It gives me great pride to be a client  for this team. I strongly recommend this agency for your best coice to your business growth..", iconLink:"https://lh3.googleusercontent.com/a/AATXAJzXz3o0X0G0tTK7MCJizmevo59i3G0CHNMys4pP=s40-c-c0x00000000-cc-rp-mo-br100"},
        {time:"3 weeks ago",name:"manjesh manju",comment:"Nice creativity.  Good work.    Easy to reach every person.    Target audience nice onei recognition and appreciate your immediate response and your excellent team's..work..digicircle is  one of the best platform I am ever found...",iconLink:"https://lh3.googleusercontent.com/a-/AOh14Gj0w5YyFJYzcOP0kFe0ALV_8-kaGu0bxwG7AwpnpiE=s40-c-c0x00000000-cc-rp-mo-br100"},
        {time:"3 weeks ago",name:"Mukul Dwivedi",comment:"Excellent job done by Mr. Manish Koirala, I will highly recommend Digicircal for ur Digital Media/social media related works.",iconLink:"https://lh3.googleusercontent.com/a/AATXAJybXT_p09uILSC3ewgVtTiXZ-cDwVwE3ao984DG=s40-c-c0x00000000-cc-rp-mo-br100"},
        {time:"5 months ago",name:"THE weeplex",comment:"Very professional agency. All the members are very well-behaved and helpful.  I have some pleasurable experiences with this agency. I learned many things from them.",iconLink:"https://lh3.googleusercontent.com/a-/AOh14GhJ52eYC1cCdM7BMZ5tKXEN9qSQl84ocAsbTl8w=s40-c-c0x00000000-cc-rp-mo-br100"},
        {time:"5 months ago",name:"Nidhi Sahani",comment:"Awesome Experience, Wonderful work done by them..Highly professional and Punctual..Main thing is creativity and innovative ideas..",iconLink:"https://lh3.googleusercontent.com/a-/AOh14Gj0EB0kEBR-SBTzhcktkDh24J3mO1HHloBmZS2j9jE=s40-c-c0x00000000-cc-rp-mo-br100"},
        {time:"a month ago",name:"Abdul Kadir",comment:"There is a very good team and always work on time and they are posting everyday at very cheap amount",iconLink:"https://lh3.googleusercontent.com/a-/AOh14GiHganHmD7LQig7FthbBaeAu1nOLP6_fazsDAk4hw=s40-c-c0x00000000-cc-rp-mo-br100"},
        {time:"a week ago",name:"Pradip Sarkar",comment:"Very professional  team and work done on time thanks for Digicircal",iconLink:"https://lh3.googleusercontent.com/a-/AOh14GjBntaqIR_h5z8Gn4KwfRkivKzt0h8EX87lgZWBsw=s40-c-c0x00000000-cc-rp-mo-br100"},
        {time:"a month ago",name:"Jayant Das",comment:"DigiCircal gives very good service, the quality of their videos is very good and the posts are very creative.",iconLink:"https://lh3.googleusercontent.com/a/AATXAJz2L-LTlTwTc2Vb5y2T7AxfZ42INEdYDt4A3E4w=s40-c-c0x00000000-cc-rp-mo-br100"},
        {time:"a month ago",name:"JUNED HASSAN",comment:"There is a very good team, work on right time and there is no issue working with only half payment.",iconLink:"https://lh3.googleusercontent.com/a/AATXAJzAHGu280xJS4ZZOwe3XuAbgh2H8AXAQDYB-_fU=s40-c-c0x00000000-cc-rp-mo-br100"},

    ]
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }; 
  return (
    <div>
        <Header />
        <Navebar />
        <Container className='review' fluid>'
        <h2 className='text-center mt-3 mb-5'>What Our Client Thinks About Digicircal</h2>
        
        <Carousel responsive={responsive} >
        {ReviewComment.map((reviewcard)=>{return(<>
            <div>
                <Card>
                    <div className='d-flex justify-content-center'>

                    </div>
                    <Card.Title><img src={reviewcard.iconLink} alt="pic"/> <span className='mx-2'>{reviewcard.name}</span> </Card.Title>
                    <p className='text-muted mx-5 time'>{reviewcard.time}</p>
                    <Card.Text>{reviewcard.comment}</Card.Text>
                    <div className='rating'>
                        <img src="logo/rating.png" alt="rating" />
                        <img src="logo/rating.png" alt="rating" />
                        <img src="logo/rating.png" alt="rating" />
                        <img src="logo/rating.png" alt="rating" />
                        <img src="logo/rating.png" alt="rating" />
                        
                    </div>
                </Card>
            </div>
            </>)})}
            
           
            </Carousel>
        </Container>
       
    </div>
  )
}

export default Reviews