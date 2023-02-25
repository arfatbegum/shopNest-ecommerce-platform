import React from 'react';
import FeaturedProductCard from './FeaturedProductCard';

const FeaturedProducts = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-10 py-10 mx-auto">
                <h1 className='text-2xl font-bold border-b-2 border-primary pb-3'>Featured Products</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center mt-8">
                    <FeaturedProductCard />
                    <FeaturedProductCard />
                    <FeaturedProductCard />
                    <FeaturedProductCard />
                    <FeaturedProductCard />
                    <FeaturedProductCard />
                </div>
            </div>
        </section>

    );
};

export default FeaturedProducts;