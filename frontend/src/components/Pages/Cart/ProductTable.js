import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBackOutline } from "@react-icons/all-files/ti/TiArrowBackOutline";
import { updateCart } from '../../../redux/features/user/userSlice';
import { useDispatch } from 'react-redux';

const ProductTable = ({ cart, handleRemoveFromCart }) => {
    const dispatch = useDispatch();

    const decrementQuantity = (cartItem) => {
        if (cartItem.quantity > 1) {
            const newQuantity = cartItem.quantity - 1;
            dispatch(updateCart({ id: cartItem._id, newQuantity }));
        }
    };
    
    const incrementQuantity = (cartItem) => {
        const newQuantity = cartItem.quantity + 1;
        dispatch(updateCart({ id: cartItem._id, newQuantity }));
    };

    return (
        <div class="lg:w-4/6 w-full">
            <div class="bg-white rounded">
                <table class="min-w-max w-full table-auto">
                    <thead>
                        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th class="py-3 px-6 text-left">Items</th>
                            <th class="py-3 px-6 text-left">Colors</th>
                            <th class="py-3 px-6 text-center">Price</th>
                            <th class="py-3 px-6 text-center">Quantity</th>
                            <th class="py-3 px-6 text-center">Total</th>
                            <th class="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-700 text-sm font-normal">
                        {cart?.map((cartItem) => (
                            <tr class="border-b border-gray-200 bg-white">
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
                                <td class="py-3 px-6 text-center">
                                    <div className="flex items-center ">
                                        <button className='border border-gray-200 px-4' onClick={() => decrementQuantity(cartItem)}>-</button>
                                        <span className='border border-gray-200 px-4'>{cartItem.quantity}</span>
                                        <button className='border border-gray-200 px-4' onClick={() => incrementQuantity(cartItem)}>+</button>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span class="">${cartItem.price * cartItem.quantity}</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <Link to={`/product-details/${cartItem.productId._id}`} class="w-4 mr-2 transform hover:text-primary hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </Link>
                                        <div onClick={() => handleRemoveFromCart(cartItem?._id)} class="w-4 mr-2 transform hover:text-primary hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <button className="w-full bg-primary hover:bg-secondary flex items-center justify-center text-white py-2.5 px-4 rounded mt-4">
                <TiArrowBackOutline className='text-xl mr-1' />
                <Link to="/all-categories">
                    Continue Shopping
                </Link>
            </button>
        </div >

    );
};

export default ProductTable;