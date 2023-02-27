import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
const ForgotPassword = () => {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <BreadCrumb title="Forgot Password" />
            <div className='pb-16 lg:px-0 md:px-0 px-4'>
                < div className="lg:w-[500px] md:w-[500px] w-full p-8 mx-auto border-2 border-gray-200 bg-white items-center text-center shadow-sm">
                    <h1 className='font-bold py-4'>Reset Your Password</h1>
                    <p className="text-center mt-2 mb-3">
                        We will send you an email to reset your password
                    </p>
                    <form onSubmit="" >
                        <input
                            className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-gray-300"
                            placeholder='Email' />

                        <div className="mt-3 flex ">
                            <button className="bg-primary text-white py-2 px-4 font-semibold" type="submit">
                                Submit
                            </button>
                            <Link to="/signin" className='bg-secondary text-white font-semibold py-2 px-4 ml-3'>Cancel</Link>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;