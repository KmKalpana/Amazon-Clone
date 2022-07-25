import React, { useState } from 'react';
import './home.css';
import { SliderData } from './HomePhotos';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
function ImageSlider (slides) {
    const [current, setCurrenct] = useState(0);
    const length=slides.length;
    const nextSlide = () => {
        setCurrenct(current === length-1 ? 0: current+1);
    }
    const prevSlide = () => {
        setCurrenct(current===0?length-1: current-1);
    }
    if(!Array.isArray(slides) || slides.length <= 0)
    {
        return null;
    }
    return(
    <section className='slider'>
    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
    {SliderData.map((slide, index) => {
        return (
            <div className={index===current ? 'slide active': 'slide'}>
            {index===current && (
                <img src = {slide.image} className='image' />
            )}
            </div>
        );
    }
    )
    }
    </section>
    );
  
};
export default ImageSlider;