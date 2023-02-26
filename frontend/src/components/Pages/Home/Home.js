import React from 'react';
import CategoryBanner from './CategoryBanner';
import DiscountBanner from './DiscountBanner';
import ElectronicsCategory from './ElectronicsCategory';
import FeaturedProducts from './FeaturedProducts';
import Hero from './Hero';
import InfoSection from './InfoSection';
import NewProducts from './NewProducts';

const Home = () => {
    return (
        <div>
            <Hero />
            <InfoSection />
            <CategoryBanner />
            <FeaturedProducts />
            <NewProducts />
            <DiscountBanner />
            <ElectronicsCategory />
        </div>
    );
};

export default Home;