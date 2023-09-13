import React, { useEffect } from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getWishlists } from '../../../redux/features/user/userSlice';
import { addToWishlist } from '../../../redux/features/products/productSlice';
import { toast } from 'react-toastify';

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlistState = useSelector((state) => state.auth.wishlist);

    useEffect(() => {
        dispatch(getWishlists());
    }, [dispatch]);

    const removeFromWishlist = (id) => {
        dispatch(addToWishlist(id));
        toast.success("Remove from wishlist")
        setTimeout(() => {
            dispatch(getWishlists());
        }, 1000)
    }

    return (
        <div>
            <Meta title={"Wishlist - ShopNest"} />
            <BreadCrumb title="Wishlist" />
            <div className="container px-10 mx-auto mb-8">
                {wishlistState?.wishlist?.length > 0 ? (
                    <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5 items-center">
                        {wishlistState?.wishlist?.map((product) => (
                            <ProductCard key={product._id} product={product} removeFromWishlist={removeFromWishlist} />
                        ))}
                    </div>
                ) : (
                    <p className='text-center lg:my-44' >Your wishlist is empty.</p>
                )}
            </div>
        </div>
    );
};

export default Wishlist;