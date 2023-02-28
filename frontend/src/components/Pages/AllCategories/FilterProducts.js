import React from 'react';
import ProductCard from '../../Shared/ProductCard';

const FilterProducts = ({ grid }) => {

    return (
        <div className="pb-5">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-2">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />

            </div>
        </div>
    );
};

export default FilterProducts;