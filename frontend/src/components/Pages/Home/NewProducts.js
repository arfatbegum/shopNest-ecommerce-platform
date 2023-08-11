import React, { useEffect } from 'react';
import ProductCard from '../../Shared/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/features/products/productSlice';

const NewProducts = () => {
    const dispatch = useDispatch();
    const productState = useSelector((state) => state?.product?.products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);
    return (
        <section class="text-gray-700 body-font">
            <div class="container px-10 py-7 mx-auto">
                <h1 className='text-xl font-bold border-b-2 border-primary pb-3'>New Products</h1>
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 items-center mt-8">
                    {productState?.slice(-6).map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewProducts;