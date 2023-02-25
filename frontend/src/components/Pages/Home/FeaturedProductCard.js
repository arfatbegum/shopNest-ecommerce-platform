import React from 'react';
import ReactStars from "react-rating-stars-component";
import { MdAddShoppingCart } from "@react-icons/all-files/md/MdAddShoppingCart";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";
import CountDown from '../../Shared/CountDown';

const FeaturedProductCard = () => {

    return (
        <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-white border-2 border-gray-100 flex justify-center items-center shadow-sm">
            <div className="lg:flex items-center justify-between p-8">
                <div className="lg:w-1/2 mr-6">
                    <div>
                        <img src="https://i0.wp.com/store.ave.com.bn/wp-content/uploads/2022/09/MQAF3ZPA-2.png?fit=836%2C842&ssl=1" alt="apartment design" className="" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <img src="https://i0.wp.com/store.ave.com.bn/wp-content/uploads/2022/09/iPhone_14_Pro_Max_Deep_Purple_PDP_Image_Position-1A_Deep_Purple_Color_SEA.jpg?fit=4000%2C4000&ssl=1" className="" alt="kitchen" />
                        <img src="https://i0.wp.com/store.ave.com.bn/wp-content/uploads/2022/09/iPhone_14_Pro_Max_Deep_Purple_PDP_Image_Position-1A_Deep_Purple_Color_SEA.jpg?fit=4000%2C4000&ssl=1" className="" alt="sitting room" />
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full flex-col space-y-2">
                        <h2 class="tracking-widest text-sm title-font font-bold text-primary mb-1">Apple</h2>
                        <h2 className="text-lg text-gray-800 font-semibold">iphone 14 Pro Max</h2>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#e6bd00"
                        />
                        <p className='flex items-center'>
                            <span className="text-red-600 text-xl font-bold">$1400</span> &nbsp; <strike className="ml-1 text-gray-500">$2000</strike>
                        </p>
                        <CountDown />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col top-7 right-7 space-y-2 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                    <button className=' bg-white border-2 border-gray-200'>
                        <AiOutlinePlusCircle className='text-xl text-primary m-2' />
                    </button>
                    <button className=' bg-white border-2 border-gray-200'>
                        <AiOutlineEye className='text-xl text-primary m-2' />
                    </button>
                    <button className='bg-white border-2 border-gray-200'>
                        <FiHeart className='text-xl text-primary m-2'></FiHeart>
                    </button>
                    <button className=' bg-white border-2 border-gray-200'>
                        <MdAddShoppingCart className='text-xl text-primary m-2'></MdAddShoppingCart>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProductCard;