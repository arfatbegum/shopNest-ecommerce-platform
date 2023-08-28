import React, { useEffect } from "react";
import Meta from "../../Shared/Meta";
import BreadCrumb from "../../Shared/BreadCrumb";
import ShippingDetails from "./ShippingDetails";
import OrderSummary from "./OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../redux/features/user/userSlice";
import Loader from "../../Shared/Loader";

const Checkout = () => {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.auth.cart);
    const isLoading = useSelector((state) => state?.auth?.isLoading);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    return (
        <div>
            <Meta title={"Checkout - Shoppable"} />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <BreadCrumb title="Checkout" />
                    <div className="overflow-x-auto lg:mx-10 mx-4">
                        <div className="min-w-screen lg:flex justify-between gap-4 font-sans mb-10">
                            <ShippingDetails />
                            <OrderSummary cart={cartState} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Checkout;
