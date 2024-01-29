import React from 'react'
import './SliderCard.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import data from '../../test/animeList.json'
import { useNavigate } from 'react-router-dom'

const SliderCard = () => {
    const navigate = useNavigate()
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
  }
  return (
    <div className="slider__container">
        <p className='slider__box__title'>Most Popular</p>
        <p className='slider__box__title__2'>Check out these anime only available on Binge Manga</p>
      <Slider {...settings} className="slider__card">
        {data?.map((item, index) => (
          <div className="card__box" key={index} onClick={()=> navigate(`/watch/${item.title}`)}>
          <img src={item.poster} alt="img" height={260} width={200} />
          <p className="title">{item.title}</p>
        </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderCard
