import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Products from './Products';
import Summery from './Summery';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Summery/>
            <Footer/>
        </div>
    );
};

export default Home;