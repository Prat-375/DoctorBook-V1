import React from 'react';
import BookCarousel from '../../components/book-app-carousel/book-carousel.component';
import Footer from '../../components/footer/footer';
import './booking-homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <BookCarousel />
        <Footer />
    </div>
);

export default HomePage; 