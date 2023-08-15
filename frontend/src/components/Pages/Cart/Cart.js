import React from 'react';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import OrderSummary from './OrderSummary';
import ProductTable from './ProductTable';
import { deleteCart, getCart } from '../../../redux/features/user/userSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Cart = () => {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.auth.cart);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    
    const handleRemoveFromCart = (id) => {
        dispatch(deleteCart(id))
        toast.success("Remove from cart Successfully!")
        setTimeout(() => {
            dispatch(getCart());
        }, 1000)
    }

    return (
        <>
            <Meta title={"Shopping Cart - Shoppable"} />
            <BreadCrumb title="Shopping Cart" />
            <div class="overflow-x-auto mx-10">
                <div class="min-w-screen bg-gray-100 lg:flex justify-between gap-4 font-sans mb-10">
                    <ProductTable cart={cartState} handleRemoveFromCart={handleRemoveFromCart} />
                    <OrderSummary cart={cartState} />
                </div>
            </div>
        </>
    );
};

export default Cart;