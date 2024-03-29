import React from 'react';
import ProductCard from '../../Shared/ProductCard';
import { Link } from 'react-router-dom';

const ElectronicsCategory = ({ products }) => {
    return (
        <section className="text-gray-700 body-font">
            <div className="container px-10 py-7 mx-auto">
                <div className='flex justify-between border-b-2 border-primary'>
                    <h1 className='lg:text-xl md:text-lg sm:text-sm font-bold'>Electronics</h1>
                    <Link  to="/shop" className='bg-primary px-4 py-2 lg:text-sm md:text-sm text-white uppercase font-semibold sm:text-xs'>View All Collection</Link>
                </div>
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 items-center mt-8">
                    {products &&
                        products.length > 0 &&
                        products
                            .filter((product) => product.category === "Electronics")
                            .slice(-6)
                            .map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))}
                </div>
            </div>
        </section>
    );
};

export default ElectronicsCategory;