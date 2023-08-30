import ReactStars from "react-rating-stars-component";
import { MdAddShoppingCart } from "@react-icons/all-files/md/MdAddShoppingCart";
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToComparelist, addToWishlist } from '../../redux/features/products/productSlice';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/features/user/userSlice';
import { BiGitCompare } from '@react-icons/all-files/bi/BiGitCompare';


const ProductCard = ({ product }) => {
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

    const handleAddToComparelist = (id) => {
        if (user) {
            dispatch(addToComparelist(id));
            toast.success("Added to Comparelist Successfully!");
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
                <img className="w-full object-cover object-center p-4" src={product?.images && product.images[0] ? product.images[0].url : 'fallback-image-url'}
                    alt={product?.name} />
                <div className="p-4">
                    <h5 className="text-md font-semibold tracking-tight text-gray-700 mb-1 capitalize">{product?.name.slice(0, 30)}...</h5>
                    <span className="text-xl font-bold text-primary">${product?.price}</span>
                    <div className='flex justify-center opacity-100 mb-3 group-hover:opacity-0'>
                        <ReactStars
                            count={5}
                            size={22}
                            value={Number(product?.totalrating)}
                            edit={false}
                            activeColor="#e6bd00"
                        />
                    </div>
                    <div className='w-full mx-auto'>
                        <button onClick={(e) => { handleAddToCart(product?._id) }} className='flex items-center lg:mx-8 md:mx-7 mx-20 bg-primary text-white text-sm font-bold border-2 border-primary shadow-md rounded bottom-4 px-2 py-2 absolute opacity-0 group-hover:opacity-100 transition duration-500'>
                            Add To Cart <MdAddShoppingCart className='text-xl ml-2'></MdAddShoppingCart>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col top-4 right-4 space-y-2 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                <Link to={`/product-details/${product?._id}`} className=' bg-white border-2 border-gray-200'>
                    <AiOutlineEye className='text-xl text-primary m-2' />
                </Link>
                <button onClick={(e) => { handleAddToComparelist(product?._id) }} className=' bg-white border-2 border-gray-200'>
                    <BiGitCompare className='text-xl text-primary m-2' />
                </button>
                <button onClick={(e) => { handleAddToWishlist(product?._id) }} className='bg-white border-2 border-gray-200'>
                    <FiHeart className='text-xl text-primary m-2'></FiHeart>
                </button>
            </div>

        </div>
    );
};

export default ProductCard;