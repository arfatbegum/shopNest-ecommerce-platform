import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signup } from '../../../redux/features/user/userSlice';

let schema = yup.object().shape({
    firstname: yup
        .string()
        .required("First Name is Required"),
    lastname: yup
        .string()
        .required("Last Name is Required"),
    email: yup
        .string()
        .email("Email should be valid")
        .required("Email is Required"),
    mobile: yup
        .string()
        .required("Number is Required"),
    password: yup.string().required("Password is Required"),
});

const Signup = () => {
    const [showPass, setShowPass] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            mobile: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log((values))
            dispatch(signup(values));

        },
    });
    const authState = useSelector((state) => state?.auth);
    const { user, isError, isSuccess, isLoading } = authState;

    useEffect(() => {
        if (isSuccess) {
            navigate("/");
        } else {
            navigate("");
        }
    }, [user, isError, isSuccess, isLoading, navigate]);


    return (
        <>
            <Meta title={"Sign Up"} />
            <BreadCrumb title="Sign Up" />
            <div className='pb-16 lg:px-0 md:px-0 px-4'>
                < div className="lg:w-[500px] md:w-[500px] w-full p-8 mx-auto border-2 border-gray-200 bg-white items-center text-center shadow-sm">
                    <h1 className='font-bold py-4'>New Account</h1>
                    <form onSubmit={formik.handleSubmit} >
                        <input
                            className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-gray-300"
                            placeholder='First Name'
                            type="text"
                            onChange={formik.handleChange("firstname")}
                            onBlur={formik.handleBlur("firstname")}
                            value={formik.values.firstname}
                        />
                        <p class="text-red-500 text-xs italic text-start mb-5">{formik.touched.name && formik.errors.name}</p>
                        <input
                            className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-gray-300"
                            placeholder='Name'
                            type="text"
                            onChange={formik.handleChange("lastname")}
                            onBlur={formik.handleBlur("lastname")}
                            value={formik.values.lastname}
                        />
                        <p class="text-red-500 text-xs italic text-start mb-5">{formik.touched.name && formik.errors.name}</p>
                        <input
                            className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-gray-300"
                            placeholder='Email'
                            type="text"
                            onChange={formik.handleChange("email")}
                            onBlur={formik.handleBlur("email")}
                            value={formik.values.email}
                        />
                        <p class="text-red-500 text-xs italic text-start mb-5">{formik.touched.email && formik.errors.email}</p>
                        <input
                            className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-gray-300"
                            placeholder='Mobile Number'
                            type="text"
                            onChange={formik.handleChange("mobile")}
                            onBlur={formik.handleBlur("mobile")}
                            value={formik.values.mobile}
                        />
                        <p class="text-red-500 text-xs italic text-start mb-5">{formik.touched.mobile && formik.errors.mobile}</p>
                        <div className='relative'>
                            <input
                                placeholder="Password"
                                className="mb-1 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-gray-300"
                                type={showPass ? "text" : "password"}
                                onChange={formik.handleChange("password")}
                                onBlur={formik.handleBlur("password")}
                                value={formik.values.password}
                            />
                            <p className="absolute top-3 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}><BsEyeSlash /></p>
                            <p class="text-red-500 text-xs italic text-start"> {formik.touched.password && formik.errors.password}</p>
                        </div>
                        <div className="text-center mb-3 pb-1 justify-between">
                            <label htmlFor="remember" className="text-sm font-medium text-primary mb-2">Already Have an account? <Link to='/signin' className='hover:underline'>Sign In</Link></label>
                            <br /> <button className=" hover:underline text-gray-400 mt-3">Forgot password?</button>
                        </div>
                        <input
                            className="border border-gray-300 bg-primary text-white text-sm uppercase font-bold rounded-lg block w-full p-2.5"
                            type="submit" value="Sign Up" />

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

export default Signup;