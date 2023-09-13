import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../../redux/features/user/userSlice";

let schema = yup.object().shape({
    password: yup.string().required("Password is Required"),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is Required'),
});

const ResetPassword = () => {
    const [showPass, setShowPass] = useState(false);
    const location = useLocation()
    const getToken = location.pathname.split("/")[2];
    console.log(getToken);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(resetPassword({ token: getToken, password: values.password }));
            navigate("/")
        },
    });

    return (
        <>
            <Meta title={"Reset Password - ShopNest"} />
            <BreadCrumb title="Reset Password" />
            <div className='pb-16 lg:px-0 md:px-0 px-4'>
                < div className="lg:w-[500px] md:w-[500px] w-full p-8 mx-auto border-2 border-gray-200 bg-white items-center text-center shadow-sm">
                    <h1 className='font-bold py-4'>Reset Your Password</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='relative mb-3'>
                            <input
                                placeholder="Password"
                                className="mb-1 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-gray-300"
                                type={showPass ? "text" : "password"}
                                onChange={formik.handleChange("password")}
                                onBlur={formik.handleBlur("password")}
                                value={formik.values.password}
                            />
                            <p className="absolute top-3 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}><BsEyeSlash /></p>
                            <p className="text-red-500 text-xs italic text-start"> {formik.touched.password && formik.errors.password}</p>
                        </div>
                        <div className='relative'>
                            <input
                                placeholder="Confirm Password"
                                className="mb-1 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-gray-300"
                                type={showPass ? "text" : "password"}
                                onChange={formik.handleChange("confirmPassword")}
                                onBlur={formik.handleBlur("confirmPassword")}
                                value={formik.values.confirmPassword}
                            />
                            <p className="absolute top-3 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}><BsEyeSlash /></p>
                            <p className="text-red-500 text-xs italic text-start"> {formik.touched.confirmPassword && formik.errors.confirmPassword}</p>
                        </div>

                        <div className="mt-3 flex ">
                            <button className="bg-primary text-white py-2 px-4 font-semibold rounded" type="submit">
                                Submit
                            </button>
                            <Link to="/signin" className='bg-secondary text-white font-semibold py-2 px-4 ml-3 rounded'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;
