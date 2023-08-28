import React, { useEffect, useState } from 'react';
import ProductCard from '../../Shared/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/features/products/productSlice';

const RandomProduct = () => {
    const dispatch = useDispatch();
    const productState = useSelector((state) => state?.product?.products);
    const [randomProduct, setRandomProduct] = useState(null);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    useEffect(() => {
        if (productState.length > 0) {
            const randomIndex = Math.floor(Math.random() * productState.length);
            setRandomProduct(productState[randomIndex]);
        }
    }, [productState]);

    return (
        <div className="mb-3">
            <h5 className="bg-primary flex text-white p-3 font-semibold text-sm">Random Product</h5>
            {randomProduct && <ProductCard product={randomProduct} />}
        </div>
    );
};

export default RandomProduct;
