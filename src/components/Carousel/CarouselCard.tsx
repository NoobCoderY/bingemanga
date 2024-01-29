import React from 'react'
import './CarouselCard.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { IoMdPlay } from 'react-icons/io'
import data from "../../test/homepageData.json"

const CarouselCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 6000,
    cssEase: 'linear',
  }
  return (
    <div className="carousel__container">
      <Slider {...settings} className="carousel__card">
      {data?.map((item, index)=>(
        <div className="anime__card" key={index}>
          <div
            className="anime__poster"
            style={{ backgroundImage: `url(${item.poster})` }}
          >
            <p className="anime__title">{item.title}</p>
            <p className="anime__language">{item.language}</p>
            <p className="anime__description">{item.description}</p>
            <button>
              <IoMdPlay size={25} /> Start Watching
            </button>
          </div>
        </div>
      ))}
      </Slider>
      
    </div>
  )
}

export default CarouselCard
