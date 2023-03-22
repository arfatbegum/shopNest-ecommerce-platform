import React from 'react';
import ReactStars from "react-rating-stars-component";
import { MdAddShoppingCart } from "@react-icons/all-files/md/MdAddShoppingCart";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import { Link } from 'react-router-dom';
const ProductCard = () => {

    return (
        <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-white border-2 border-gray-100 flex justify-center items-center shadow-sm">
            <div className="text-center h-full overflow-hidden">
                <img className="w-full object-cover object-center" src="https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/google-pixel-watch/hero-static/charcoal/google-pixel-watch-charcoal-device-3qt-left.png" alt="blog" />
                <div className="p-4">
                    <h5 className="text-md font-semibold tracking-tight text-gray-700 mb-1 capitalize">Smart Watch Black</h5>
                    <span className="text-xl font-bold text-primary">$150.00</span>
                    <div className='flex justify-center opacity-100 mb-3 group-hover:opacity-0'>
                        <ReactStars
                            count={5}
                            size={22}
                            value={3}
                            edit={false}
                            activeColor="#e6bd00"
                        />
                    </div>
                    <div className='w-full mx-auto'>
                        <button className='flex items-center lg:mx-8 md:mx-7 mx-20 bg-primary text-white text-sm font-bold border-2 border-primary shadow-md rounded bottom-4 px-2 py-1.5 absolute opacity-0 group-hover:opacity-100 transition duration-500'>
                            Add To Cart <MdAddShoppingCart className='text-xl ml-2'></MdAddShoppingCart>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col top-4 right-4 space-y-2 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                <Link to="product-details/:id" className=' bg-white border-2 border-gray-200'>
                    <AiOutlinePlusCircle className='text-xl text-primary m-2' />
                </Link>
                <button className=' bg-white border-2 border-gray-200'>
                    <AiOutlineEye className='text-xl text-primary m-2' />
                </button>
                <button className='bg-white border-2 border-gray-200 mx-auto'>
                    <div class="w-5 m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2f60b5">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>
                </button>
            </div>

        </div>
    );
};

export default ProductCard;