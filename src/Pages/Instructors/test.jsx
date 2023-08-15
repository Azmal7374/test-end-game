import { useState } from 'react';
import './Slider.css'

import { GrPrevious } from 'react-icons/gr';
import { GrNext } from 'react-icons/gr';

const Slider = ({ items }) => {
  const [position, setPosition] = useState(0);

  const nextSlide = () => {
    const itemWidth = document.querySelector('.slider-item').offsetWidth;
    setPosition(position - itemWidth  );
  };

  const prevSlide = () => {
    const itemWidth = document.querySelector('.slider-item').offsetWidth;
    setPosition(position + itemWidth);
  };

  return (
    <div className="slider-container relative w-3/5 overflow-hidden flex p-20">
      <div
        className="slider flex transition-transform duration-300"
        style={{ transform: `translateX(${position}px)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="slider-item flex-none w-full flex  items-center">
            <div className="w-1/2 px-28 ">
              <p className='text-2xl text-black'>{item.caption}</p>
              <p>Jeeee</p>
            </div>
            <div className="w-1/2">
              <img src={item.imageUrl} alt={`Slide ${index}`} className="w-full h-auto" />
            </div>
          </div>
        ))}
      </div>
      <button className="slider-btn absolute top-1/2 transform -translate-y-1/2 left-0" onClick={prevSlide}>
        <GrPrevious></GrPrevious>
      </button>
      <button className="slider-btn absolute top-1/2 transform -translate-y-1/2 right-0" onClick={nextSlide}>
      <GrNext></GrNext>
      </button>
    </div>
  );
};

export default Slider;
