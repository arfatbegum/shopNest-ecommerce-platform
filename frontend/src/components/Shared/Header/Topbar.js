import React from 'react';
import { RiArrowDropDownLine } from "@react-icons/all-files/ri/RiArrowDropDownLine";

const Topbar = () => {
    return (
        <div>
            <div className="hidden lg:flex text-xs font-semibold px-10 leading-3 border-b border-b-slate-500">
                <div className="flex-1 pt-4">
                    <p>Free 3 day delivery and free returns within the KSA</p>
                </div>
                <div className="flex-none">
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
                            <p>SAR</p><RiArrowDropDownLine className='text-lg'/>                               
                            </span>
                            <ul className="bg-base-100">
                                <li>USD</li>
                                <li>SAR</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Topbar;