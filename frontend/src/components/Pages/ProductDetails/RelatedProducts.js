import React from 'react';
import ProductCard from '../../Shared/ProductCard';

const RelatedProducts = ({ products }) => {
    return (
        <div className="text-gray-700 body-font">
            <div className="container py-7 mx-auto">
                <h1 className='text-xl font-bold border-b-2 border-primary pb-3'>Related Products</h1>
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 items-center mt-8">
                    {products &&
                        products.length > 0 &&
                        products
                            .filter((product) => product.tags[0] === "popular")
                            .slice(0, 6)
                            .map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;