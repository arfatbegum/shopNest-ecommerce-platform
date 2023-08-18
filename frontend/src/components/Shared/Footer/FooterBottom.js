import React from 'react';
import { Link } from 'react-router-dom';
import Paypal from '../../Assets/icons/paypal.svg';
import Stripe from '../../Assets/icons/stripe.svg';

const FooterBottom = () => {
    return (
        <div className="border-t-2 border-gray-200 text-gray-500">
        <div className="container mx-auto lg:px-12 flex flex-wrap flex-col items-center sm:flex-row">
            <p className="text-sm text-center sm:text-left"> &copy; {new Date().getFullYear()} Shoppable —
                <Link to="https://www.linkedin.com/in/arfat-begum-0b22221b2/" rel="noopener noreferrer" className="ml-1" target="_blank">@arfatbegum. All Rights Reserved.</Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 items-center justify-center sm:justify-start">
                <span className="ml-3">
                    <img src={Paypal} alt="" className='w-20 h-20' />
                </span>
                <span className="ml-3">
                    <img src={Stripe} alt="" className='w-14 h-14' />
                </span>
            </span>
        </div>
    </div>
    );
};

export default FooterBottom;