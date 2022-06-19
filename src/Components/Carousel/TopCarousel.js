import React from 'react'
import { Carousel } from 'react-bootstrap'


const TopCarousel = () => {
    
  return (
   <>
   <Carousel>
  <Carousel.Item interval={1000} style={{ width: '100%', Height: '100%' }} >
    <img
       id="cimg"
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      alt="First slide"
      style={{margin:'0',height:'95vh', objectFit:'cover'}}
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      id="cimg"
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="Second slide"
      style={{margin:'0',height:'95vh', objectFit:'cover'}}
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
       id="cimg"
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1453906971074-ce568cccbc63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="Third slide"
      style={{margin:'0',height:'95vh', objectFit:'cover'}}
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   </>
  )
}

export default TopCarousel