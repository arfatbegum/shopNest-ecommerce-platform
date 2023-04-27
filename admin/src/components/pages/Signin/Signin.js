import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";

const Signin = () => {
    const [showPass, setShowPass] = useState(false);

    return (
        <>
            <div className='px-4'>
                < div className="lg:w-[500px] md:w-[500px] w-full p-8 m-auto my-44 border-2 border-gray-200 bg-white items-center text-center shadow-sm">
                    <h1 className='text-xl font-bold py-4'>Login</h1>
                    <form onSubmit="" >
                        <input
                            className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-gray-300"
                            placeholder='Email'
                            type="text" />
                        <div className='relative'>
                            <input
                                placeholder="Password"
                                className="mb-1 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-gray-300"
                                type={showPass ? "text" : "password"}
                            />
                            <p className="absolute top-3 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}><BsEyeSlash /></p>
                        </div>
                        <div className="text-center mb-3 pb-1 justify-between">
                            <br /> <button className=" hover:underline text-gray-400 mt-3">Forgot password?</button>
                        </div>
                        <Link
                            to="/dashboard"
                            className="border border-gray-300 bg-[#2f60b5] text-white text-sm uppercase font-bold rounded-lg block w-full p-2.5"
                            type="submit" value="Sign In">Sign in</Link>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Signin;