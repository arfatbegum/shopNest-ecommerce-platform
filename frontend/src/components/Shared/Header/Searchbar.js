import React from 'react';
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "@react-icons/all-files/md/MdAddShoppingCart";
import { FiHeart } from "@react-icons/all-files/fi/FiHeart";
import { RiArrowDropDownLine } from "@react-icons/all-files/ri/RiArrowDropDownLine";
import { BiGitCompare } from "@react-icons/all-files/bi/BiGitCompare";
import { BiUserCircle } from "@react-icons/all-files/bi/BiUserCircle";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getWishlists } from '../../../redux/features/user/userSlice';


const Searchbar = () => {
    const dispatch = useDispatch();
    const wishlistState = useSelector((state) => state.auth.wishlist);

    useEffect(() => {
        dispatch(getWishlists());
    }, [dispatch]);

    return (
        <div className="lg:navbar md:navbar p-4 lg:py-4 lg:px-10 md:py-4 md:px-10 navbar-none ">
            <div className='lg:navbar-start flex'>
                <div className="flex-1 py-4 lg:py-0">
                    <Link to="/" className="font-bold text-2xl">SHOPPABLE</Link>
                </div>
                <div className='lg:hidden flex'>
                    <ul className="menu menu-horizontal">
                        <li tabIndex={0}>
                            <span className='gap-0'>
                                <p>English</p><RiArrowDropDownLine className='text-lg' />
                            </span>
                            <ul className="bg-white text-gray-900 p-4 leading-5 rounded">
                                <li>English</li>
                                <li>Arabic</li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <span className='gap-0'>
                                <p>SAR</p><RiArrowDropDownLine className='text-lg' />
                            </span>
                            <ul className="bg-base-100">
                                <li>USD</li>
                                <li>SAR</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='lg:navbar-center'>
                <div className="flex-1 flex-row form-control">
                    <div>
                        <input type="text" placeholder="Search" className="input input-bordered w-[300px] lg:w-[650px] rounded-tr-none rounded-br-none" />
                    </div>
                    <div>
                        <button className="btn btn-ghost bg-secondary rounded-tl-none rounded-bl-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="lg:navbar-end pt-5">
                <div className="flex lg:px-0 px-5 gap-5 items-center lg:justify-center justify-between">
                    <Link to="compare-product"><BiGitCompare className='text-3xl mx-auto' /><span className='text-xs'>Compare</span></Link>
                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary">{wishlistState?.wishlist?.length}</span>
                        <Link to="wishlist"><FiHeart className='text-3xl mx-auto' /><span className='text-xs'>Wishlist </span></Link>
                    </div>

                    <Link to="cart"><MdAddShoppingCart className='text-3xl mx-auto' /><span className='text-xs'>Cart</span></Link>
                    <Link to="signup"><BiUserCircle className='text-3xl mx-auto' /><span className='text-xs'>Sign Up</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;