import React from 'react';
import ReactStars from "react-rating-stars-component";
import { MdAddShoppingCart } from "@react-icons/all-files/md/MdAddShoppingCart";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";
import { Link } from 'react-router-dom';
import { addToCart } from '../../../redux/features/user/userSlice';
import { addToWishlist } from '../../../redux/features/products/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
const CompareProductCard = ({ product, removeFromComparelist }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state?.auth?.user);

    const handleAddToWishlist = (id) => {
        if (user) {
            dispatch(addToWishlist(id));
            toast.success("Added to wishlist Successfully!");
        } else {
            toast.error("Please Log in to add to wishlist");
        }
    }

    const handleAddToCart = (id) => {
        if (user) {
            if (product?.color) {
                dispatch(addToCart({
                    productId: product._id,
                    quantity: 1,
                    color: product.color,
                    price: product.price,
                }));
                toast.success("Add to Cart");
            }
        } else {
            toast.error("Please Log in to add to cart");
        }
    }

    return (
        <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-white border-2 border-gray-100 flex justify-center items-center shadow-sm">
            <div className="text-center h-full overflow-hidden">
                <img className="w-full object-cover object-center" src={product?.images && product.images[0] ? product.images[0].url : 'fallback-image-url'} alt="blog" />
                <div className="p-4">
                    <h5 className="text-md font-semibold tracking-tight text-gray-700 mb-1 capitalize">{product.name.slice(0, 40)}</h5>
                    <span className="text-xl font-bold text-primary">${product.price}</span>
                    <hr className='my-2' />
                    <div className='flex justify-between items-center'>
                        <span className="text-sm font-normal text-gray-700">Ratings</span>
                        <ReactStars
                            count={5}
                            size={22}
                            value={Number(product?.totalrating)}
                            edit={false}
                            activeColor="#e6bd00"
                        />
                    </div>
                    <hr className='my-2' />
                    <div className='flex justify-between mt-1'>
                        <span className="text-sm font-normal text-gray-700">Category</span>
                        <span className="text-sm font-normal text-gray-700">{product.category}</span>
                    </div>
                    <hr className='my-3' />
                    <div className='flex justify-between'>
                        <span className="text-sm font-normal text-gray-700">Brand</span>
                        <span className="text-sm font-normal text-gray-700">{product.brand}</span>
                    </div>
                    <hr className='my-3' />
                    <div className='flex justify-between'>
                        <span className="text-sm font-normal text-gray-700">Color</span>
                        {product?.color && product?.color.map((clr) => (
                            <div
                                key={clr._id}
                                tabIndex="0"
                                className={`focus:outline-none ring-1 ring-offset-2 ring-gray-800 rounded-full cursor-pointer w-4 h-4`}
                                style={{ backgroundColor: clr?.colorCode }}
                            >
                                <span key={clr._id} className="text-sm font-normal text-gray-700">
                                    {clr.title}
                                </span></div>
                        ))}

                    </div>
                    <hr className='my-3' />
                    <div className='flex justify-between'>
                        <span className="text-sm font-normal text-gray-700">Availablity</span>
                        {
                            product.quantity > 0 ?
                                <span className="text-sm font-normal text-gray-700">In stock</span>
                                :
                                <span className="text-sm font-normal text-red-600">Stock out</span>
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col top-4 right-4 space-y-2 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                <button onClick={(e) => { handleAddToCart(product?._id) }} className=' bg-white border-2 border-gray-200'>
                    <MdAddShoppingCart className='text-xl text-primary m-2' />
                </button>
                <Link to={`/product-details/${product?._id}`} className=' bg-white border-2 border-gray-200'>
                    <AiOutlineEye className='text-xl text-primary m-2' />
                </Link>
                <button onClick={(e) => { handleAddToWishlist(product?._id) }} className='bg-white border-2 border-gray-200'>
                    <FiHeart className='text-xl text-primary m-2' />
                </button>
                <button onClick={(e) => { removeFromComparelist(product?._id) }} className='bg-white border-2 border-gray-200 mx-auto'>
                    <div className="w-5 m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2f60b5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>
                </button>
            </div>

        </div>
    );
};

export default CompareProductCard;