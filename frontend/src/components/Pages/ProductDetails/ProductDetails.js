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

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state?.product?.products);

    const [component, setComponent] = useState(<ProductDescription product={product} />);
    const getComponent = (value) => {
        setComponent(value);
    };

    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch, id]);

    return (
        <div>
            <Meta title={"Product Details - Shoppable"} />
            <BreadCrumb title="Product Details" />
            <div className='px-10'>
                <div className="lg:flex  justify-start w-full bg-white lg:p-8 md:p-4 p-2">
                    <ProductSlider product={product} />
                    <ProductInfo product={product} />
                </div>
                <div className="text-gray-700 body-font">
                    <div className="container py-7 mx-auto">
                        <div className='flex font-bold border-b-2 border-primary'>
                            <button onClick={() => getComponent(<ProductDescription product={product} />)} className='bg-primary text-white font-bold px-4 py-2 border-r border-gray-200'>Description</button>
                            <button onClick={() => getComponent(<ProductReviews />)} className='bg-primary text-white font-bold px-4 py-2 border-r border-gray-200'>Reviews</button>
                            <button onClick={() => getComponent(<ReviewForm />)} className='bg-primary text-white font-bold px-4 py-2'>Write Review</button>
                        </div>
                        <div className="p-4 bg-white">
                            {component}
                        </div>
                    </div>
                </div>
                <RelatedProducts />
            </div>
        </div>
    );
};

export default ProductDetails;