import React from 'react';
import ProductCard from '../../Shared/ProductCard';

const NewProducts = () => {
    return (
        <section class="text-gray-700 body-font">
        <div class="container px-10 py-7 mx-auto">
            <h1 className='text-2xl font-bold border-b-2 border-primary pb-3'>New Products</h1>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 items-center mt-8">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard/>
            </div>
        </div>
    </section>
    );
};

export default NewProducts;