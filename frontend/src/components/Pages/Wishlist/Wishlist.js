import React from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import ProductCard from './ProductCard';

const Wishlist = () => {
    return (
        <div>
            <Meta title={"Wishlist - Shoppable"} />
            <BreadCrumb title="Wishlist" />
            <div class="container px-10 mx-auto mb-8">
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 items-center">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default Wishlist;