import React from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import OrderSummary from './OrderSummary';
import ProductTable from './ProductTable';
import { deleteCart, getCart } from '../../../redux/features/user/userSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../../Shared/Loader';
import { Link } from 'react-router-dom';
import { TiArrowBackOutline } from '@react-icons/all-files/ti/TiArrowBackOutline';

const Cart = () => {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state?.auth?.cart);
    const isLoading = useSelector((state) => state?.auth?.isLoading);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    const handleRemoveFromCart = (id) => {
        dispatch(deleteCart(id))
        toast.success("Remove from cart Successfully!")
        setTimeout(() => {
            dispatch(getCart());
        }, 200)
    }

    return (
        <div>
            <Meta title={"Shopping Cart - ShopNest"} />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <BreadCrumb title="Shopping Cart" />
                    {
                        cartState && cartState.length > 0 ? (
                            <div className="overflow-x-auto mx-10">
                                <div className="min-w-screen bg-gray-100 lg:flex justify-between gap-4 font-sans mb-10">
                                    <ProductTable cart={cartState} handleRemoveFromCart={handleRemoveFromCart} />
                                    <OrderSummary cart={cartState} />
                                </div>
                            </div>
                        ) : (
                            <div className='text-center h-screen lg:mt-44'>
                                <p>Your Cart is empty.</p>
                                <div className='flex items-center justify-center mt-4'>
                                    <Link to="/shop" className="flex bg-primary hover:bg-secondary text-white py-2.5 px-4 rounded">
                                        <TiArrowBackOutline className='text-xl mr-1' />
                                        <span>Continue Shopping</span>
                                    </Link>
                                </div>
                            </div>
                        )}

                </>
            )}
        </div>
    );
};

export default Cart;