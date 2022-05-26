import React from 'react';
import Banner from './Banner';
import BrandCar from './BrandCar';
import Footer from './Footer';
import Hero from './Hero';
import Products from './Products';
import Reviews from './Reviews';
import Summery from './Summery';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Summery/>
            <Reviews/>
            <Hero/>
            <BrandCar/>
            <Footer/>
        </div>
    );
};

export default Home;