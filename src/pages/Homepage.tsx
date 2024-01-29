import React from 'react'
import '../styles/Homepage.scss'
import CarouselCard from '../components/Carousel/CarouselCard'
import SliderCard from '../components/SliderCard/SliderCard'


const Homepage = () => {
  
  return (
    <div className='homepage__box'>
      <CarouselCard/>
      <SliderCard/>
    </div>
  )
}

export default Homepage