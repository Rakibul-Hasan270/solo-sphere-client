import React from 'react';
import Carousel from '../../components/Banner/Carousel';
import CardTabs from '../../components/CardTabs/CardTabs';

const Home = () => {
    return (
        <div className='container mx-auto space-y-12'>
            <Carousel></Carousel>
            <CardTabs></CardTabs>
        </div>
    );
};

export default Home;