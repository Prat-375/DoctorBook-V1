import React from 'react';
import PracticesSlider from '../slider/practices-slider';
import './book-carousel.component.scss';

function BookCarousel() {
    return (
        <div className="carousel-container mt-5 carousel">
            <h1 className="slider-title">Practices we give Consultation on</h1>  
            <PracticesSlider />  
        </div>
    );
}

export default BookCarousel;
