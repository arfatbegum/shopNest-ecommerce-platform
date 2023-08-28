import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { MdAddShoppingCart } from "@react-icons/all-files/md/MdAddShoppingCart";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";
import { BiGitCompare } from "@react-icons/all-files/bi/BiGitCompare";
import { GrDeliver } from "@react-icons/all-files/gr/GrDeliver";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { MdCompareArrows } from "@react-icons/all-files/md/MdCompareArrows";
import { BsBrightnessHigh } from "@react-icons/all-files/bs/BsBrightnessHigh";
import Facebook from '../../Assets/icons/facebook.svg';
import Twitter from '../../Assets/icons/twitter.svg';
import Instagram from '../../Assets/icons/instagram.svg';
import Linkedin from '../../Assets/icons/linkedin.svg';
import Github from '../../Assets/icons/github.svg';
import Paypal from '../../Assets/icons/paypal.svg';
import Stripe from '../../Assets/icons/stripe.svg';
import { addToCart, getWishlists } from '../../../redux/features/user/userSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../../../redux/features/products/productSlice';

const ProductInfo = ({ product }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState(null);
    console.log(product.color)
    const handleAddToCart = () => {
        if (color === null) {
            toast.error("Please Choose Color")
        } else {
            dispatch(addToCart({ productId: product._id, quantity, color, price: product.price }))
            toast.success("Add to Cart")
        }
    }

    const handleAddToWishlist = (id) => {
        dispatch(addToWishlist(id))
        toast.success("Add to wishlist")
        setTimeout(() => {
            dispatch(getWishlists());
        }, 1000)
    }

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    return (
        <div className="lg:w-2/3 w-full lg:px-8 p-2 flex justify-start items-start flex-col">
            <div className='lg:flex items-center'>
                <div className='lg:w-2/3 w-full'>
                    <h2 className=" lg:text-2xl text-xl text-gray-800 font-semibold">{product.name}</h2>
                    <div className="flex justify-start items-center gap-4">
                        <ReactStars
                            count={5}
                            size={22}
                            value={Number(product?.totalrating)}
                            edit={false}
                            activeColor="#e6bd00"
                        />
                        <p className=" font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-gray-500 underline">{product?.ratings?.length} reviews</p>
                    </div>
                    <p className="font-bold text-2xl leading-6 text-primary mr-4 my-4">${product.price}</p>
                    <div className="mt-2">
                        <p id="text" className=" font-semibold text-base leading-4 text-gray-800">
                            color
                        </p>
                        <div className=" flex space-x-2 my-4">
                            {product.color && product.color.map((clr) => (
                                <div
                                    onClick={() => setColor(clr._id)}
                                    key={clr._id}
                                    tabIndex="0"
                                    className={`focus:outline-none ring-1 ring-offset-2 ring-gray-800 rounded-full cursor-pointer w-8 h-8`}
                                    style={{ backgroundColor: clr?.colorCode }}
                                ></div>
                            ))}

                        </div>
                    </div>
                    <div className="mt-2 mb-4 ">
                        <p p className="font-semibold text-base leading-4 text-gray-800 mb-4" > Quantity</p>
                        <div className="flex items-center ">
                            <button className='border border-gray-200 px-4' onClick={decrementQuantity}>-</button>
                            <span className='border border-gray-200 px-4' >{quantity}</span>
                            <button className='border border-gray-200 px-4' onClick={incrementQuantity}>+</button>
                        </div>
                    </div>
                    {
                        product && product?.size ? (<>
                            <div className="w-full">
                                <p className="font-semibold text-base leading-4 text-gray-800">Size</p>
                                <div className=" grid grid-cols-3 gap-4 sm:flex sm:flex-wrap md:gap-4 sm:justify-between lg:justify-start mt-4">
                                    <div id="XS" className={"font-medium text-base leading-4 text-gray-800 border  py-3 w-20 text-center cursor-pointer "}>
                                        XS
                                    </div>
                                    <div id="S" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer "}>
                                        S
                                    </div>
                                    <div id="M" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer "}>
                                        M
                                    </div>
                                    <div id="L" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer "}>
                                        L
                                    </div>
                                    <div id="XL" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer "}>
                                        XL
                                    </div>
                                </div>
                            </div>
                            <p className=" mt-4 font-normal text-sm leading-3 text-gray-500 hover:text-gray-600 duration-100 underline cursor-pointer">Find the perfect size?<span className='underline ml-2'>Size guide</span></p>
                        </>) : ""
                    }
                    <div className="flex space-x-2 mt-7">
                        <button onClick={() => handleAddToCart(product._id)} className='flex items-center bg-primary text-white text-sm font-bold border-2 border-primary shadow-sm rounded bottom-4 px-6 py-2'>
                            Add To Cart <MdAddShoppingCart className='text-xl ml-2'></MdAddShoppingCart>
                        </button>
                        <button onClick={(e) => { handleAddToWishlist(product?._id) }} className='bg-white border border-primary rounded shadow-sm '>
                            <FiHeart className='text-4xl text-primary px-2' />
                        </button>
                        <button className='bg-white border border-primary rounded shadow-sm '>
                            <BiGitCompare className='text-4xl text-primary px-2' />
                        </button>
                    </div>
                    <div className="flex justify-start space-x-2 mt-5">
                        <Link to="https://www.facebook.com/arfat.akter.98/">
                            <img src={Facebook} alt="" className='w-6 h-6' />
                        </Link>
                        <Link to="https://www.linkedin.com/in/arfat-begum-0b22221b2/">
                            <img src={Linkedin} alt="" className='w-7 h-7' />
                        </Link>
                        <Link to="https://twitter.com/arfatbegum">
                            <img src={Twitter} alt="" className='w-6 h-6' />
                        </Link>
                        <Link to="https://instagram.com/arfat_akter_25">
                            <img src={Instagram} alt="" className='w-7 h-7' />
                        </Link>
                        <Link to="https://github.com/arfatbegum" >
                            <img src={Github} alt="" className='w-7 h-7' />
                        </Link>
                    </div>
                    <div className='flex justify-start items-center space-x-2'>
                        <span className="">
                            <img src={Paypal} alt="" className='w-16 h-16' />
                        </span>
                        <span>
                            <img src={Stripe} alt="" className='w-10 h-10' />
                        </span>
                    </div>
                </div>
                <div className='lg:w-1/3 w-full bg-blue-100  bg-opacity-50 rounded-lg border-opacity-50 p-6 border-2 border-primary'>
                    <div className="list-none">
                        <li className='flex items-center justify-start mb-4'>
                            <GrDeliver className='text-4xl mr-4' />
                            Free shipping apply to all orders over SAR 400
                        </li>
                        <li className='flex items-center justify-start mb-4'>
                            <AiOutlineHome className='text-2xl mr-4' />
                            Home Delivery within 4 Days
                        </li>
                        <li className='flex items-center justify-start mb-4'>
                            <GrDeliver className='text-xl mr-4' />
                            Cash on Delivery Available
                        </li>
                        <li className='flex items-center justify-start mb-4'>
                            <MdCompareArrows className='text-2xl mr-4' />
                            2 Days returns money back guarantee
                        </li>
                        <li className='flex items-center justify-start mb-4'>
                            <BsBrightnessHigh className='text-2xl mr-4' />
                            2 years Warranty
                        </li>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductInfo;