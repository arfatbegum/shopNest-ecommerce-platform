import React, { useEffect, useState } from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import ProductSlider from './ProductSlider';
import ProductInfo from './ProductInfo';
import RelatedProducts from './RelatedProducts';
import ProductDescription from './ProductDescription';
import ProductReviews from './ProductReviews';
import ReviewForm from './ReviewForm';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../../redux/features/products/productSlice';

// Loader component
const Loader = () => {
  return <span className="loading loading-dots loading-lg"></span>;
};

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productState = useSelector((state) => state?.product);
    const product = productState?.products;
    
    const [activeComponent, setActiveComponent] = useState("description");

    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch, id]);

    const renderComponent = () => {
        switch (activeComponent) {
            case "description":
                return <ProductDescription product={product} />;
            case "reviews":
                return <ProductReviews product={product} />;
            case "writeReview":
                return <ReviewForm product={product} />;
            default:
                return null;
        }
    };

    return (
        <>
            <Meta title={"Product Details - Shoppable"} />
            {productState?.isLoading ? (
                <Loader />
            ) : (
                <>
                    <BreadCrumb title="Product Details" />
                    <div className='px-10'>
                        <div className="lg:flex  justify-start w-full bg-white lg:p-8 md:p-4 p-2">
                            <ProductSlider product={product} />
                            <ProductInfo product={product} />
                        </div>
                        <div className="text-gray-700 body-font">
                            <div className="container py-7 mx-auto">
                                <div className='flex font-bold border-b-2 border-primary'>
                                    <button onClick={() => setActiveComponent("description")} className='bg-primary text-white font-bold px-4 py-2 border-r border-gray-200'>Description</button>
                                    <button onClick={() => setActiveComponent("reviews")} className='bg-primary text-white font-bold px-4 py-2 border-r border-gray-200'>Reviews</button>
                                    <button onClick={() => setActiveComponent("writeReview")} className='bg-primary text-white font-bold px-4 py-2'>Write Review</button>
                                </div>
                                <div className="p-4 bg-white">
                                    {renderComponent()}
                                </div>
                            </div>
                        </div>
                        <RelatedProducts productState={productState} />
                    </div>
                </>
            )}
        </>
    );
};

export default ProductDetails;
