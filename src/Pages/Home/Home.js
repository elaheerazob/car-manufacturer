import React from 'react';
import Banner from './Banner';
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
            <Footer/>
        </div>
    );
};

export default Home;