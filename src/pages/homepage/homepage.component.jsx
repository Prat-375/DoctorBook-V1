import React from 'react';
import HeroSection from '../../components/hero-section/hero-section.component';
import Carousel from '../../components/carousel/carousel.component';
import Footer from '../../components/footer/footer';
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <HeroSection />
        <Carousel />
        <Footer />
    </div>
);

export default HomePage;