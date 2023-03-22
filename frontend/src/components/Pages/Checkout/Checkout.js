import React from "react";
import Meta from "../../Shared/Meta";
import BreadCrumb from "../../Shared/BreadCrumb";
import ShippingDetails from "./ShippingDetails";
import OrderSummary from "./OrderSummary";
const Checkout = () => {
    return (
        <>
            <Meta title={"Checkout - Shoppable"} />
            <BreadCrumb title="Checkout" />
            <div class="overflow-x-auto lg:mx-10 mx-4">
                <div class="min-w-screen lg:flex justify-between gap-4 font-sans mb-10">
                    <ShippingDetails />
                    <OrderSummary />
                </div>
            </div>
        </>
    );
};

export default Checkout;