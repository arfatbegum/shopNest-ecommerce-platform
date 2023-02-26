import React from 'react';
import CategoryBanner from './CategoryBanner';
import FeaturedProducts from './FeaturedProducts';
import Hero from './Hero';
import InfoSection from './InfoSection';

const Home = () => {
    return (
        <div>
            <Hero/>
            <InfoSection />
            <CategoryBanner/>
            <FeaturedProducts/>
        </div>
    );
};

export default Home;