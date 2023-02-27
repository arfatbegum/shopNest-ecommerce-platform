import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';

const ResetPassword = () => {
    const [showPass, setShowPass] = useState(false);

    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrumb title="Reset Password" />
            <div className='pb-16 lg:px-0 md:px-0 px-4'>
                < div className="lg:w-[500px] md:w-[500px] w-full p-8 mx-auto border-2 border-gray-200 bg-white items-center text-center shadow-sm">
                    <h1 className='font-bold py-4'>Reset Your Password</h1>
                    <form onSubmit="" >
                    <div className='relative'>
                            <input
                                placeholder="Password"
                                className="mb-1 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-gray-300"
                                type={showPass ? "text" : "password"}
                            />
                            <p className="absolute top-3 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}><BsEyeSlash /></p>
                        </div>
                        <div className='relative'>
                            <input
                                placeholder="Confirm Password"
                                className="mb-1 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-gray-300"
                                type={showPass ? "text" : "password"}
                            />
                            <p className="absolute top-3 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}><BsEyeSlash /></p>
                        </div>

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

export default ResetPassword;