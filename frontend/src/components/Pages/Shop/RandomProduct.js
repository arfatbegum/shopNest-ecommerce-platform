import React, { useEffect, useState } from 'react';
import ProductCard from '../../Shared/ProductCard';

const RandomProduct = ({products}) => {
    const [randomProduct, setRandomProduct] = useState(null);

    useEffect(() => {
        if (products.length > 0) {
            const randomIndex = Math.floor(Math.random() * products.length);
            setRandomProduct(products[randomIndex]);
        }
    }, [products]);

    return (
        <div className="mb-3">
            <h5 className="bg-primary flex text-white p-3 font-semibold text-sm">Random Product</h5>
            {randomProduct && <ProductCard product={randomProduct} />}
        </div>
    );
};

export default RandomProduct;
