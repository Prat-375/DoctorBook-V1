import React from 'react';
import ImageSlider from '../slider/slider';
import './carousel.component.scss';

function Carousel() {
    return (
        <div className="carousel-container mt-5 carousel">
            <h1 className="slider-title">Services We Provide</h1>  
            <ImageSlider />  
        </div>
    );
}

export default Carousel;
