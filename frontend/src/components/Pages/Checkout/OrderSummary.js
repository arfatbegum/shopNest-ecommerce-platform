import React from 'react';

const OrderSummary = () => {
    return (
        <div className='lg:w-2/6 w-full bg-white p-4'>
            <h1 className='text-gray-600 font-semibold text-lg my-5 ml-4'>Items</h1>
            <div>
                <div className='flex justify-between p-4'>
                    <div className='flex gap-8'>
                    <div className="indicator">
                        <img src="https://abdullahome.com/wp-content/uploads/2021/06/2-3.jpg" className='w-12 h-12' alt="" />
                        <span className="badge badge-sm indicator-item bg-primary py-3 font-bold border-none text-white">2</span>
                        </div>
                        <h1 className='font-semibold text-gray-700'>Smart Watch</h1>
                    </div>
                    <h3 className='font-semibold text-gray-700'>$1000</h3>
                </div>
                <div className='flex justify-between p-4'>
                    <div className='flex gap-8'>
                    <div className="indicator">
                        <img src="https://abdullahome.com/wp-content/uploads/2021/06/2-3.jpg" className='w-12 h-12' alt="" />
                        <span className="badge badge-sm indicator-item bg-primary py-3 font-bold border-none text-white">2</span>                        </div>
                        <h1 className='font-semibold text-gray-700'>Smart Watch</h1>
                    </div>
                    <h3 className='font-semibold text-gray-700'>$1000</h3>
                </div>
            </div>
            <hr className='my-5' />
            <div className='p-4'>
                <div className='text-gray-700'>
                    <p className='text-[16px] font-medium flex justify-between mb-2'>Quantity <span>4</span></p>
                    <p className='text-[16px] font-medium flex justify-between mb-2'>SubTotal <span>$2000</span></p>
                    <p className='text-[16px] font-medium flex justify-between mb-2'>Shipping <span>$15</span></p>
                    <p className='text-[16px] font-medium flex justify-between mb-2'>Tax 10% <span>$25</span></p>
                    <hr className='my-5' />
                    <p className='text-[16px] font-bold flex justify-between mb-4'>Total <span>$2040</span></p>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;