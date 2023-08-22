import React from 'react';
import ProductCard from '../../Shared/ProductCard';

const FilterProducts = ({ products }) => {
    return (
        <div className="pb-5">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-2">
                {products.length > 0 && products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default FilterProducts;