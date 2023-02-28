import React from 'react';
import { Link } from "react-router-dom";
import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";

const Menubar = () => {
    return (
        <div className="navbar lg:px-6 font-semibold text-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul className="menu menu-horizontal">
                        <li tabIndex={0}>
                            <Link to="all-categories">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                ALL CATEGORIES
                            </Link>
                            <ul className="absolute z-50 bg-white p-2 text-gray-500 font-normal border border-gray-200">
                                <li><Link to="hotDeals">Hot Deals</Link></li>
                                <li><Link to="electronics">Electronics</Link></li>
                                <li><Link to="watches">Watches</Link></li>
                                <li><Link to="fashion">Fashion</Link></li>
                                <li><Link to="health&beauty">Health & Beauty</Link></li>
                                <li><Link to="accessories">Accessories</Link></li>
                                <li><Link to="travel&vacation">Travel & Vacation</Link></li>
                                <li><Link to="jwelery">Jwelery</Link></li>
                                <li><Link to="perfumes">Perfumes</Link></li>
                                <li><Link to="sports">Sports</Link></li>
                                <li><Link to="kitchen">Kitchen</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="contact">CONTACT US</Link></li>
                    <li><Link to="blog">BLOG</Link></li>
                    <li><Link to="shipping&returns">SHIPPING & RETURNS</Link></li>
                    <li><Link to="hotDeals">HOT DEALS</Link></li>
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