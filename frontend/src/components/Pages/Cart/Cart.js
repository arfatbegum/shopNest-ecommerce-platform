import React from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import OrderSummary from './OrderSummary';
import ProductTable from './ProductTable';

const Cart = () => {
    return (
        <>
            <Meta title={"Shopping Cart - Shoppable"} />
            <BreadCrumb title="Shopping Cart" />
            <div class="overflow-x-auto mx-10">
                <div class="min-w-screen bg-gray-100 lg:flex justify-between gap-4 font-sans mb-10">
                    <ProductTable />
                    <OrderSummary/>
                </div>
            </div>
        </>
    );
};

export default Cart;