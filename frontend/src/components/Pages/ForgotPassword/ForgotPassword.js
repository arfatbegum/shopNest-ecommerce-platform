import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { forgetPasswordToken } from '../../../redux/features/user/userSlice';
import { toast } from "react-toastify";

let schema = yup.object().shape({
    email: yup
        .string()
        .email("Email should be valid")
        .required("Email is Required"),
});

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(forgetPasswordToken(values));
            toast.success("Email sent successfully!")
        },
    });

    return (
        <>
            <Meta title={"Forgot Password - ShopNest"} />
            <BreadCrumb title="Forgot Password" />
            <div className='pb-16 lg:px-0 md:px-0 px-4'>
                < div className="lg:w-[500px] md:w-[500px] w-full p-8 mx-auto border-2 border-gray-200 bg-white items-center text-center shadow-sm">
                    <h1 className='font-bold py-4'>Reset Your Password</h1>
                    <p className="text-center mt-2 mb-3">
                        We will send you an email to reset your password
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

                        <div className="mt-4 flex">
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

export default ForgotPassword;