import React from 'react';
import Meta from '../../Shared/Meta';
import BlogsSection from './BlogsSection';
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
            <Meta title={"Home - Shoppable"} />
            <Hero />
            <InfoSection />
            <CategoryBanner />
            <FeaturedProducts />
            <NewProducts />
            <DiscountBanner />
            <ElectronicsCategory />
            <FashionAndAccessories />
            <BlogsSection />
            <TwoBanners/>
        </div>
    );
};

export default Home;