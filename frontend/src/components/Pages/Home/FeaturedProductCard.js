import ReactStars from "react-rating-stars-component";
import { MdAddShoppingCart } from "@react-icons/all-files/md/MdAddShoppingCart";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";
import CountDown from '../../Shared/CountDown';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../../../redux/features/products/productSlice';
import { getWishlists } from '../../../redux/features/user/userSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const FeaturedProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToWishlist = (id) => {
        dispatch(addToWishlist(id))
        toast.success("Add to wishlist")
        setTimeout(() => {
            dispatch(getWishlists());
        }, 100)
    }
    return (
        <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-white border-2 border-gray-100 flex justify-center items-center shadow-sm">
            <div className="lg:flex items-center justify-between p-8">
                <div className="lg:w-1/2 mr-6">
                    <div>
                        <img src={product?.images && product.images[0] ? product.images[0].url : 'fallback-image-url'} alt={product.name} className="" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <img src={product?.images && product.images[1] ? product.images[1].url : 'fallback-image-url'} className="" alt="kitchen" />
                        <img src={product?.images && product.images[2] ? product.images[2].url : 'fallback-image-url'} className="" alt="sitting room" />
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full flex-col space-y-2">
                        <h2 class="tracking-widest text-sm title-font font-bold text-primary mb-1">{product?.brand}</h2>
                        <h2 className="text-lg text-gray-800 font-semibold">{product?.name.slice(0, 35)}...</h2>
                        <ReactStars
                            count={5}
                            size={24}
                            value={product?.totalrating}
                            edit={false}
                            activeColor="#e6bd00"
                        />
                        <p className='flex items-center'>
                            <span className="text-red-600 text-xl font-bold">${product?.price}</span> &nbsp; <strike className="ml-1 text-gray-500">${product?.salePrice}</strike>
                        </p>
                        <CountDown />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col top-7 right-7 space-y-2 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                    <Link to={`/product-details/${product?._id}`} className=' bg-white border-2 border-gray-200'>
                        <AiOutlineEye className='text-xl text-primary m-2' />
                    </Link>
                    <button className=' bg-white border-2 border-gray-200'>
                        <AiOutlinePlusCircle className='text-xl text-primary m-2' />
                    </button>
                    <button onClick={(e) => { handleAddToWishlist(product?._id) }} className='bg-white border-2 border-gray-200'>
                        <FiHeart className='text-xl text-primary m-2'></FiHeart>
                    </button>
                    <button className=' bg-white border-2 border-gray-200'>
                        <MdAddShoppingCart className='text-xl text-primary m-2'></MdAddShoppingCart>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default FeaturedProductCard;