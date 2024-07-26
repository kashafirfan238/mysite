import React, { useState, useEffect } from 'react';
import img1 from '../../Assets/img1.jpg' 
import img2 from '../../Assets/img2.jpg' 
import img3 from '../../Assets/img3.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
const imageUrls = [
  img1,
  img2,
  img3,
];

const Home = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : imageUrls.length - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < imageUrls.length - 1 ? prevSlide + 1 : 0));
  };

  useEffect(() => {
    const carouselItems = document.querySelectorAll('[data-carousel-item]');
    carouselItems.forEach((item, index) => {
      item.classList.toggle('hidden', index !== currentSlide);
    });

    const carouselIndicators = document.querySelectorAll('[data-carousel-slide-to]');
    carouselIndicators.forEach((indicator, index) => {
      indicator.setAttribute('aria-current', index === currentSlide);
    });
  }, [currentSlide]);

  return (
    
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Carousel items */}
        {imageUrls.map((img, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === currentSlide ? '' : 'hidden'}`}
            data-carousel-item
          >
            <img
              src={img}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrevSlide}
      >
  <FontAwesomeIcon icon={faCircleChevronLeft} />
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextSlide}
      >
  <FontAwesomeIcon icon={faCircleChevronRight}  />
      </button>
    </div>

  );
};

export default Home;
