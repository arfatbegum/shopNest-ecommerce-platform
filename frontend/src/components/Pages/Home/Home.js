import React from 'react';
import Blogs from './Blogs';
import CategoryBanner from './CategoryBanner';
import DiscountBanner from './DiscountBanner';
import ElectronicsCategory from './ElectronicsCategory';
import FashionAndAccessories from './Fashion';
import FeaturedProducts from './FeaturedProducts';
import Hero from './Hero';
import InfoSection from './InfoSection';
import NewProducts from './NewProducts';
import TwoBanners from './TwoBanners';

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
            <FashionAndAccessories />
            <Blogs />
            <TwoBanners/>
        </div>
    );
};

export default Home;