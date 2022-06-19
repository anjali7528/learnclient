import React from 'react'
import TopCarousel from '../../Components/Carousel/TopCarousel'
import Features from '../../Components/features/Features'
import Footer from '../../Components/Footer/Footer'
import './home.css'

const Home = () => {
  return (
   <>
   <TopCarousel/>
   <div>
    <h1 class="features">Features</h1>
   <Features/>
   </div>
   <Footer/>
   </>
  )
}

export default Home