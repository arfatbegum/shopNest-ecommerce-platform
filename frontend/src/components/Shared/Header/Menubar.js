import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getCategories } from '../../../redux/features/products/productSlice';

const Menubar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const productCategories = useSelector((state) => state?.product?.productCategories);


    const handleCategoryClick = (category) => {
        dispatch(getAllProducts({ category }));
    };

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <div className="navbar lg:px-6 font-semibold text-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul className="menu menu-horizontal">
                        <li tabIndex={0}>
                            <Link to="shop">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                ALL CATEGORIES
                            </Link>
                            <ul className="absolute z-50 bg-white p-4 text-gray-500 font-normal border border-gray-200">
                                {
                                    productCategories && productCategories?.length > 0 &&
                                    productCategories?.map((category) => (
                                        <li key={category._id} className='w-full border-b border-gray-200'>
                                            <Link
                                                to={`shop/${location.pathname}?category=${encodeURIComponent(category.title)}`}
                                                onClick={() => handleCategoryClick(category.title)}
                                            >
                                                {category.title}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="shop">SHOP</Link></li>
                    <li><Link to="blogs">BLOG</Link></li>
                    <li><Link to="policy">SHIPPING & RETURNS</Link></li>
                    <li><Link to="contact">CONTACT US</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-4 pr-5">
                <div className='flex justify-center gap-2'>
                    <FiPhoneCall className='text-lg mt-[2px]' />
                    <p>+966533431648</p>
                </div>
                <div className='hidden lg:flex justify-center gap-1'>
                    <HiOutlineMail className='text-lg mt-[2px]' />
                    <p>arfatakter39@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Menubar;