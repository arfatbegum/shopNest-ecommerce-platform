import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowRightOutline } from "@react-icons/all-files/ti/TiArrowRightOutline";

const OrderSummary = ({ cart }) => {
    const calculateSubtotal = () => {
        if (!Array.isArray(cart)) {
            return 0;
        }
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };
    return (
        <div className='lg:w-2/6 w-full'>
            <div className='bg-white w-full mb-5'>
                <h1 className='text-lg font-bold bg-gray-200 py-2.5 px-4'>Order Summary</h1>
                <div className='p-4'>
                    <div className='flex justify-between py-2 text-md font-bold text-gray-900'>
                        <h4>SubTotal</h4>
                        <h4>${calculateSubtotal()}</h4>
                    </div>
                    <p className='py-2'>Taxes and shipping calculated at checkout</p>
                </div>

            </div>
            <button className="w-full bg-primary hover:bg-secondary flex items-center justify-center text-white py-2.5 px-4 rounded mt-4">
                <Link to="/checkout">
                    Proceed To Checkout
                </Link>
                <TiArrowRightOutline className='text-xl ml-1 mt-1' />
            </button>
        </div>
    );
};

export default OrderSummary;