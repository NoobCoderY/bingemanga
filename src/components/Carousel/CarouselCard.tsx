import React from 'react'
import './CarouselCard.scss'
import img1 from '../../assets/6293009.jpg'
import img2 from '../../assets/8114283.png'
import img3 from '../../assets/Jujutsu-Kaisen-4k-Wallpaper.jpeg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="carousel__container">
      <Slider {...settings} className='carousel__card'>
          <div className='anime__card'>
            <div className='anime__poster' style={{backgroundImage:`url(${img3})`}}>

            <h1>Demon Slayer</h1>
            </div>
          </div>
          <div className='anime__card'>
            <div className='anime__poster' style={{backgroundImage:`url(${img3})`}}>

            <h1>Jujutsu Kaisen </h1>
            </div>
          </div>
          <div className='anime__card'>
            <div className='anime__poster' style={{backgroundImage:`url(${img3})`}}>

            <h1>Naruto</h1>
            </div>
          </div>
        </Slider>
    </div>
  )
}

export default CarouselCard
