import React from 'react';
import ProductCard from '../../Shared/ProductCard';

const ElectronicsCategory = ({ products }) => {
    return (
        <section class="text-gray-700 body-font">
            <div class="container px-10 py-7 mx-auto">
                <div className='flex justify-between border-b-2 border-primary'>
                    <h1 className='lg:text-xl md:text-lg sm:text-sm font-bold'>Electronics</h1>
                    <button className='bg-primary px-4 py-2 lg:text-sm md:text-sm text-white uppercase font-semibold sm:text-xs'>View All Collection</button>
                </div>
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 items-center mt-8">
                    {products?.slice(-6).map((product) => {
                        if (product.category === "electronic") {
                            return <ProductCard key={product._id} product={product} />
                        }
                    })}
                </div>
            </div>
        </section>
    );
};

export default ElectronicsCategory;