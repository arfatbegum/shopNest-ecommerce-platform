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
import Loader from '../../Shared/Loader';

const Home = () => {
    const dispatch = useDispatch();
    const productState = useSelector((state) => state?.product);
    const products = productState?.products

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (

        <div>
            <Meta title={"Home - Shoppable"} />
            {productState?.isLoading ? (
                <Loader />
            ) : (
                <>
                    <Hero />
                    <InfoSection />
                    <CategoryBanner />
                    <FeaturedProducts products={products} />
                    <NewProducts products={products} />
                    <DiscountBanner />
                    <ElectronicsCategory products={products} />
                    <FashionAndAccessories products={products} />
                    <BlogsSection />
                    <TwoBanners />
                </>
            )}
        </div>
    );
};

export default Home;