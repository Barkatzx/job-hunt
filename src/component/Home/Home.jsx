import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Catagory';
import Feature from '../Featured/Feature';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Feature/>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;