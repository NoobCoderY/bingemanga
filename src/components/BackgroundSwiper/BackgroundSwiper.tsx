// BackgroundSwiper.tsx
import React, { useState, useEffect } from 'react';
import './BackgroundSwiper.scss';

interface BackgroundSwiperProps {
  images: string[];
  showCaptions?: boolean;
}

const BackgroundSwiper: React.FC<BackgroundSwiperProps> = ({
  images,
  showCaptions = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images, isHovered]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`background-swiper ${isHovered ? 'paused' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`swiper-bg ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          {showCaptions && (
            <div className="caption">
              Caption for Image {index + 1}
            </div>
          )}
        </div>
      ))}
      <div
        className="swiper-button-prev"
        onClick={handlePrevClick}
      />
      <div
        className="swiper-button-next"
        onClick={handleNextClick}
      />
    </div>
  );
};

export default BackgroundSwiper;
