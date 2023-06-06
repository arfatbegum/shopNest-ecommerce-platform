import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signin } from '../../../features/auth/authSlice';

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
            navigate("admin");
        } else {
            navigate("");
        }
    }, [user, isError, isSuccess, isLoading, navigate]);

    return (
        <>
            <div className='px-4'>
                < div className="lg:w-[500px] md:w-[500px] w-full p-8 m-auto my-44 border-2 border-gray-200 bg-white items-center text-center shadow-sm">
                    <h1 className='text-xl font-bold py-4'>Login</h1>
                    <p class="text-red-500 text-xs italic">
                        {message.message === "Rejected" ? "You are not an Admin" : ""}
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
                </div>
            </div>
        </>
    );
};

export default Signin;