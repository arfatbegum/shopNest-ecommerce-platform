import React, { useEffect, useState } from 'react';
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";
import BreadCrumb from '../../Shared/BreadCrumb';
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Meta from '../../Shared/Meta';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../../redux/features/user/userSlice';


let schema = yup.object().shape({
    email: yup
        .string()
        .email("Email should be valid")
        .required("Email is Required"),
    password: yup.string().required("Password is Required"),
});

const Signin = () => {
    const [showPass, setShowPass] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(signin(values));
        },
    });
    const authState = useSelector((state) => state);

    const { user, isError, isSuccess, isLoading, message } = authState.auth;

    useEffect(() => {
        if (isSuccess) {
            navigate("/");
        } else {
            navigate("");
        }
    }, [user, isError, isSuccess, isLoading, navigate]);

    return (
        <>
            <Meta title={"Sign In"} />
            <BreadCrumb title="Sign In" />
            <div className='pb-16 lg:px-0 md:px-0 px-4'>
                < div className="lg:w-[500px] md:w-[500px] w-full p-8 mx-auto border-2 border-gray-200 bg-white items-center text-center shadow-sm">
                    <h1 className='textxl font-bold py-4'>Login</h1>
                    <p class="text-red-500 text-xs italic">
                        {message.message === "Rejected" ? "You are not Register User" : ""}
                    </p>
                    <form onSubmit={formik.handleSubmit} >
                        <input
                            className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-gray-300"
                            placeholder='Email'
                            type="text"
                            onChange={formik.handleChange("email")}
                            onBlur={formik.handleBlur("email")}
                            value={formik.values.email}
                        />
                        <p class="text-red-500 text-xs italic text-start mb-5">{formik.touched.email && formik.errors.email}</p>
                        <div className='relative'>
                            <input
                                placeholder="Password"
                                className="mb-2 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-gray-300"
                                type={showPass ? "text" : "password"}
                                onChange={formik.handleChange("password")}
                                onBlur={formik.handleBlur("password")}
                                value={formik.values.password}
                            />
                            <p className="absolute top-3 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}><BsEyeSlash /></p>
                            <p class="text-red-500 text-xs italic text-start"> {formik.touched.password && formik.errors.password}</p>
                        </div>
                        <div className="text-center mb-3 pb-1 justify-between">
                            <br /> <button className=" hover:underline text-gray-400 mt-3">Forgot password?</button>
                        </div>
                        <button
                            className="border border-gray-300 bg-[#2f60b5] text-white text-sm uppercase font-bold rounded-lg block w-full p-2.5"
                            type="submit" value="Sign In">Sign in</button>
                    </form>
                    <div className='flex font-bold items-center my-3 text-primary'>
                        <hr className='border-primary h-px w-full mr-2 mt-1' />
                        <span>or</span>
                        <hr className='border-primary h-px w-full ml-2 mt-1' />
                    </div>
                    <button className="flex items-center justify-center bg-gray-50 border font-bold border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 w-full p-2.5"> <img className='w-6 pr-2' src="" alt='' /> Continue with Google</button>
                </div>
            </div>
        </>
    );
};

export default Signin;