import React from 'react';
import DeliveryTruck from "../../Assets/delivery-truck.svg";
import Support from "../../Assets/support.svg";
import Money from "../../Assets/money.svg";
import Card from "../../Assets/credit-card.svg";
import Gift from "../../Assets/gift.svg";



const InfoSection = () => {
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-10 gap-12 lg:px-10 md:py-5 md:px-6 py-5 px-4">
                <div className="flex justify-center items-center space-x-4 bg-white p-4 shadow-sm border-1 border-gray-200">
                    <img src={DeliveryTruck} alt="" className='w-16 h-16' />
                    <div>
                        <p className=" text-medium font-semibold text-gray-800 ">Free Shipping</p>
                        <p className=" text-base font-normal text-gray-600 mt-1">Free shipping from $9</p>
                    </div>
                </div>
                <div className="flex justify-center items-center space-x-4 bg-white p-4 shadow-sm border-1 border-gray-200">
                    <img src={Support} alt="" className='w-16 h-16' />
                    <div>
                        <p className=" text-medium font-semibold text-gray-800 ">Support 24/7</p>
                        <p className=" text-base font-normal text-gray-600 mt-1">Online 24 Hours</p>
                    </div>
                </div>
                <div className="flex justify-center items-center space-x-4 bg-white p-4 shadow-sm border-1 border-gray-200">
                    <img src={Money} alt="" className='w-16 h-16' />
                    <div>
                        <p className=" text-medium font-semibold text-gray-800 ">Free Return</p>
                        <p className=" text-base font-normal text-gray-600 mt-1">Within 15 Days</p>
                    </div>
                </div>
                <div className="flex justify-center items-center space-x-4 bg-white p-4 shadow-sm border-1 border-gray-200">
                    <img src={Card} alt="" className='w-16 h-16' />
                    <div>
                        <p className=" text-medium font-semibold text-gray-800 ">Payment Method</p>
                        <p className=" text-base font-normal text-gray-600 mt-1">Secure Payment</p>
                    </div>
                </div>
                <div className="flex justify-center items-center space-x-4 bg-white p-4 shadow-sm border-1 border-gray-200">
                    <img src={Gift} alt="" className='w-16 h-16' />
                    <div>
                        <p className=" text-medium font-semibold text-gray-800 ">Big Saving</p>
                        <p className=" text-base font-normal text-gray-600 mt-1">Weeken Sales</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;