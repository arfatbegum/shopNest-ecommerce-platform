import React from 'react';
import CategoryBanner from './CategoryBanner';
import DiscountBanner from './DiscountBanner';
import FeaturedProducts from './FeaturedProducts';
import Hero from './Hero';
import InfoSection from './InfoSection';

const Home = () => {
    return (
        <div>
            <Hero/>
            <InfoSection />
            <CategoryBanner/>
            <FeaturedProducts />
            <DiscountBanner/>
        </div>
    );
};

export default Home;