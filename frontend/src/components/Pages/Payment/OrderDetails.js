import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBackOutline } from "@react-icons/all-files/ti/TiArrowBackOutline";

const OrderDetails = ({ cart }) => {
    return (
        <div className="lg:w-4/6 w-full">
            <div className="bg-white rounded">
                <table className="min-w-max w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Items</th>
                            <th className="py-3 px-6 text-left">Colors</th>
                            <th className="py-3 px-6 text-center">Price</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-normal">
                        {cart && cart.length > 0 && cart?.map((cartItem) => (
                            <tr key={cartItem._id} className="border-b border-gray-200 bg-white">
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                            <img className="w-24 h-24" src={cartItem?.images && cartItem.images[0] ? cartItem.images[0].url : 'fallback-image-url'} alt='' />
                                        </div>
                                        <span>{cartItem.name}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-left">
                                    <span>{cartItem?.color.title}</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span className="">${cartItem.price}</span>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <span className="flex hover:text-secondary mt-4">
                <TiArrowBackOutline className='text-xl mr-1' />
                <Link to="/checkout">Return To Checkout</Link>
            </span>
        </div >

    );
};

export default OrderDetails;