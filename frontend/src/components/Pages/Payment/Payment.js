import React, { useEffect } from 'react';
import Meta from '../../Shared/Meta';
import BreadCrumb from '../../Shared/BreadCrumb';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../redux/features/user/userSlice';
import OrderSummary from './OrderSummary';
import OrderDetails from './OrderDetails';
import { useLocation } from 'react-router-dom';

const Payment = () => {
    const location = useLocation();
    const { state } = location;
    const shippingInfo = state ? state.shippingInfo : null;

    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.auth.cart);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);



    return (
        <>
            <Meta title={"Checkout - Shoppable"} />
            <BreadCrumb title="Payment" />
            <div className="overflow-x-auto lg:mx-10 mx-4">
                <div className="min-w-screen lg:flex justify-between gap-4 font-sans mb-10">
                    <OrderDetails cart={cartState} />
                    <OrderSummary cart={cartState} shippingInfo={shippingInfo} />
                </div>
            </div>
        </>
    );
};

export default Payment;
