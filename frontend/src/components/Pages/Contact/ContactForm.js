import React, { useEffect } from 'react';
import { FiSend } from "@react-icons/all-files/fi/FiSend";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createEnquiry } from '../../../redux/features/contact/contactSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

let schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    email: yup
        .string()
        .email("Email should be valid")
        .required("Email is Required"),
    mobile: yup.string().required("Mobile Number is Required"),
    orderNumber: yup.string().required("Order Number is Required"),
    comment: yup.string().required("Comment is Required"),
});
const ContactForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newContact = useSelector((state) => state.contact);
    const { isSuccess, isError, isLoading, createdContact } = newContact;

    useEffect(() => {
        if (isSuccess && createdContact) {
            toast.success("Blog Added Successfullly!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [navigate, isSuccess, isError, isLoading, createdContact]);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            orderNumber: "",
            comment: ""
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(createEnquiry(values));
            formik.resetForm();
            setTimeout(() => {
                navigate("/")
            }, 1000);
        },
    });


    return (
        <form onSubmit={formik.handleSubmit} className="lg:w-2/3 md:w-1/2 lg:p-8 p-4 lg:mr-8 mb-4 lg:mb-0 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-xl mb-3 font-bold">Contact</h2>
            <div className='flex justify-between gap-3'>
                <div className="w-1/2 relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input
                        placeholder='Name'
                        type="text"
                        onChange={formik.handleChange("name")}
                        onBlur={formik.handleBlur("name")}
                        value={formik.values.name}
                        className="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <p className="text-red-500 text-xs italic text-start mb-5">{formik.touched.name && formik.errors.name}</p>
                </div>
                <div className="w-1/2 relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input
                        placeholder='Email'
                        type="text"
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                        value={formik.values.email}
                        className="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <p className="text-red-500 text-xs italic text-start mb-5">{formik.touched.email && formik.errors.email}</p>
                </div>
            </div>
            <div className='flex justify-between gap-3'>
                <div className="w-1/2 relative mb-4">
                    <label htmlFor="number" className="leading-7 text-sm text-gray-600">Mobile Number</label>
                    <input
                        placeholder='Mobile Number'
                        type="text"
                        onChange={formik.handleChange("mobile")}
                        onBlur={formik.handleBlur("mobile")}
                        value={formik.values.mobile}
                        className="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <p className="text-red-500 text-xs italic text-start mb-5">{formik.touched.mobile && formik.errors.mobile}</p>
                </div>
                <div className="w-1/2 relative mb-4">
                    <label htmlFor="text" className="leading-7 text-sm text-gray-600">Order Number</label>
                    <input
                        placeholder='Order Number'
                        type="text"
                        onChange={formik.handleChange("orderNumber")}
                        onBlur={formik.handleBlur("orderNumber")}
                        value={formik.values.orderNumber}
                        className="w-full bg-white border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <p className="text-red-500 text-xs italic text-start mb-5">{formik.touched.orderNumber && formik.errors.orderNumber}</p>
                </div>
            </div>
            <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea
                    type="text"
                    onChange={formik.handleChange("comment")}
                    onBlur={formik.handleBlur("comment")}
                    value={formik.values.comment}
                    className="w-full bg-white border border-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                <p className="text-red-500 text-xs italic text-start mb-5">{formik.touched.comment && formik.errors.comment}</p>
            </div>
            <button type="submit" className="flex items-center justify-center text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary text-lg"><FiSend className='text-xl text-white mr-2' />Send</button>
        </form>
    );
};

export default ContactForm;