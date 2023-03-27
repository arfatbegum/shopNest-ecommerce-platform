import React from 'react';
import ReactStars from "react-rating-stars-component";
import { MdAddShoppingCart } from "@react-icons/all-files/md/MdAddShoppingCart";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";
import { Link } from 'react-router-dom';
const CompareProductCard = () => {

    return (
        <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-white border-2 border-gray-100 flex justify-center items-center shadow-sm">
            <div className="text-center h-full overflow-hidden">
                <img className="w-full object-cover object-center" src="https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/google-pixel-watch/hero-static/charcoal/google-pixel-watch-charcoal-device-3qt-left.png" alt="blog" />
                <div className="p-4">
                    <h5 className="text-md font-semibold tracking-tight text-gray-700 mb-1 capitalize">Smart Watch Black</h5>
                    <span className="text-xl font-bold text-primary">$150.00</span>
                    <hr className='my-2' />
                    <div className='flex justify-between items-center'>
                        <span className="text-sm font-normal text-gray-700">Ratings</span>
                        <ReactStars
                            count={5}
                            size={22}
                            value={3}
                            edit={false}
                            activeColor="#e6bd00"
                        />
                    </div>
                    <hr className='my-2' />
                    <div className='flex justify-between mt-1'>
                        <span className="text-sm font-normal text-gray-700">Category</span>
                        <span className="text-sm font-normal text-gray-700">Smartwarch</span>
                    </div>
                    <hr className='my-3' />
                    <div className='flex justify-between'>
                        <span className="text-sm font-normal text-gray-700">Brand</span>
                        <span className="text-sm font-normal text-gray-700">Apple</span>
                    </div>
                    <hr className='my-3' />
                    <div className='flex justify-between'>
                        <span className="text-sm font-normal text-gray-700">Color</span>
                        <span className="text-sm font-normal text-gray-700">Blue</span>
                    </div>
                    <hr className='my-3' />
                    <div className='flex justify-between'>
                        <span className="text-sm font-normal text-gray-700">Availablity</span>
                        <span className="text-sm font-normal text-gray-700">In stock</span>
                    </div>
                    <hr className='my-3' />
                    <div className='flex justify-between'>
                        <span className="text-sm font-normal text-gray-700">Size</span>
                        <span className="text-sm font-normal text-gray-700">M</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col top-4 right-4 space-y-2 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                <Link to="product-details/:id" className=' bg-white border-2 border-gray-200'>
                    <MdAddShoppingCart className='text-xl text-primary m-2' />
                </Link>
                <button className=' bg-white border-2 border-gray-200'>
                    <AiOutlineEye className='text-xl text-primary m-2' />
                </button>
                <button className='bg-white border-2 border-gray-200'>
                    <FiHeart className='text-xl text-primary m-2' />
                </button>
            </div>

        </div>
    );
};

export default CompareProductCard;