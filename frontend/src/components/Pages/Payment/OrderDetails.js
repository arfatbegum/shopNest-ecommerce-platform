import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBackOutline } from "@react-icons/all-files/ti/TiArrowBackOutline";

const OrderDetails = ({ cart }) => {
    return (
        <div class="lg:w-4/6 w-full">
            <div class="bg-white rounded">
                <table class="min-w-max w-full table-auto">
                    <thead>
                        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th class="py-3 px-6 text-left">Items</th>
                            <th class="py-3 px-6 text-left">Colors</th>
                            <th class="py-3 px-6 text-center">Price</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-700 text-sm font-normal">
                        {cart?.map((cartItem) => (
                            <tr key={cartItem._id} class="border-b border-gray-200 bg-white">
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                            <img class="w-24 h-24" src={cartItem?.images && cartItem.images[0] ? cartItem.images[0].url : 'fallback-image-url'} alt='' />
                                        </div>
                                        <span>{cartItem.name}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <span>{cartItem?.color.title}</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span class="">${cartItem.price}</span>
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