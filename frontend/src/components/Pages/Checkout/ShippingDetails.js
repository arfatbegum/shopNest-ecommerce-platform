import React from 'react';
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "@react-icons/all-files/ti/TiArrowBackOutline";

const ShippingDetails = () => {
    return (
        <div class="lg:w-4/6 w-full bg-white h-full lg:mb-0 mb-4">
            <form onSubmit="" className="col-span-4 lg:p-10 p-5">
                <h1 className='text-gray-600 font-semibold text-lg mb-5'>Shipping Address</h1>
                <input
                    className="mb-3 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-none"
                    placeholder='First Name' />

                <input
                    className="mb-3 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-none"
                    placeholder='Last Name' />

                <input
                    type='text'
                    className="border mb-3 text-gray-900 text-sm block w-full p-2.5 outline-none"
                    placeholder='Address' />
                <div >
                    <select className="select w-full border border-gray-300 mb-3 text-gray-400 font-normal pl-2.5 rounded-none hover:outline-none">
                        <option disabled selected>Select Country</option>
                        <option className="text-gray-900">Saudi Arabia</option>
                    </select>
                </div>
                    <input
                        placeholder="Apartment No"
                        className="border border-gray-300 mb-3 text-gray-900 text-sm block w-full p-2.5 outline-none"
                        type='text' />
                <input
                    className="mb-2 mr-3 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-none"
                    placeholder='City' />
                <input
                    className="mb-2 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-none"
                    placeholder='Zip Code' />
                <div className="flex justify-between items-center mt-5">
                    <span className="flex hover:text-secondary">
                        <TiArrowBackOutline className='text-xl mr-1' />
                        <Link to="cart">Return To cart</Link>
                    </span>
                    <input
                        className="border border-gray-300 cursor-pointer bg-primary hover:bg-secondary text-white text-sm font-bold block px-4 py-2"
                        type="submit" value="Continue Shipping" />
                </div>
            </form>
        </div >
    );
};

export default ShippingDetails;