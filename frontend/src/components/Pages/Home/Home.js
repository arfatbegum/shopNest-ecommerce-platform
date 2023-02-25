import React from 'react';
import FeaturedProducts from './FeaturedProducts';
import Hero from './Hero';
import InfoSection from './InfoSection';

const Home = () => {
    return (
        <div>
            <Hero/>
            <InfoSection />
            <FeaturedProducts/>
        </div>
    );
};

export default Home;