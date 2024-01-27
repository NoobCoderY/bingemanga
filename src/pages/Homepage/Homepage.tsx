import React from 'react'
import './Homepage.scss'
import BackgroundSwiper from '../../components/BackgroundSwiper/BackgroundSwiper'
import img1 from '../../assets/6293009.jpg'
import img2 from '../../assets/8114283.png'
import img3 from '../../assets/Jujutsu-Kaisen-4k-Wallpaper.jpeg'

const Homepage = () => {
  const images = [img1, img2, img3];
  return (
    <div className='homepage__box'>
        <BackgroundSwiper images={images}/>
    </div>
  )
}

export default Homepage