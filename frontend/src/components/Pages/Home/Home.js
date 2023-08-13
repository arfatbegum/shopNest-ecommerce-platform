import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/features/products/productSlice';

const Home = () => {
    const dispatch = useDispatch();
    const productState = useSelector((state) => state?.product?.products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <div>
            <Meta title={"Home - Shoppable"} />
            <Hero />
            <InfoSection />
            <CategoryBanner />
            <FeaturedProducts products={productState} />
            <NewProducts products={productState} />
            <DiscountBanner />
            <ElectronicsCategory products={productState} />
            <FashionAndAccessories products={productState} />
            <BlogsSection />
            <TwoBanners />
        </div>
    );
};

export default Home;