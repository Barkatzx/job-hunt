import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Category/Catagory';
import Feature from '../Featured/Feature';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <Feature></Feature>
            <Footer></Footer>
        </div>
    );
};

export default Home;