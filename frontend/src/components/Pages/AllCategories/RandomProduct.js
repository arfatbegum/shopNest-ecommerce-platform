import React from 'react';
import ProductCard from '../../Shared/ProductCard';

const RandomProduct = () => {
    return (
        <div className="mb-3">
        <h5 className="bg-primary flex text-white p-3 font-semibold text-sm">Random Product</h5>
        <ProductCard />
    </div>
    );
};

export default RandomProduct;