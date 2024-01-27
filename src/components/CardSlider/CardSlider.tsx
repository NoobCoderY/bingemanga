import React from 'react'
import Slider from "react-slick";

const CardSlider = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        
      };
  return (
    <div className='cardSlider__container'>
       <p className="cardSlider__title">
        Most Popular Anime
       </p>

       <div className="slider__container">
       <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>

       </div>
    </div>
  )
}

export default CardSlider