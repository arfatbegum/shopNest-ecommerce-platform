import React, { useEffect } from 'react';
import { getACoupon, getAllCoupon, resetState, updateACoupon } from '../../../../features/coupon/couponSlice';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

const UpdateCoupon = ({ couponId, onClose }) => {
    const dispatch = useDispatch();
    const updateCoupon = useSelector((state) => state.coupon);
    const {
        isSuccess,
        isError,
        isLoading,
        couponName,
        couponDiscount,
        couponExpiry,
        updatedCoupon,
    } = updateCoupon;
    const changeDateFormet = (date) => {
        const newDate = new Date(date).toLocaleDateString();
        const [month, day, year] = newDate.split("/");
        return [year, month, day].join("-");
    };

    useEffect(() => {
        if (couponId !== undefined) {
            dispatch(getACoupon(couponId));
        } else {
            dispatch(resetState());
        }
    }, [couponId, dispatch]);

    useEffect(() => {
        if (isSuccess && updatedCoupon) {
            toast.success("Coupon Updated Successfullly!");
        }
        if (isError && couponName && couponDiscount && couponExpiry) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading, updatedCoupon, couponName, couponDiscount, couponExpiry]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: couponName || "",
            expiry: changeDateFormet(couponExpiry) || "",
            discount: couponDiscount || "",
        },
        onSubmit: (values) => {
            if (couponId !== undefined) {
                const data = { id: couponId, couponData: values };
                dispatch(updateACoupon(data));
                onClose();
                setTimeout(() => {
                    dispatch(resetState());
                    dispatch(getAllCoupon());
                }, 300);
            }
        },
    });

    return (
        <div className="w-full">
            <form className="px-8 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Coupon Title/Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" p
                        laceholder="Coupon Title/Name"
                        onChange={formik.handleChange("name")}
                        onBlur={formik.handleBlur("name")}
                        value={formik.values.name}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        DISCOUNT
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        placeholder="Coupon Discount"
                        onChange={formik.handleChange("discount")}
                        onBlur={formik.handleBlur("discount")}
                        value={formik.values.discount}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        EXPIRY DATE
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        placeholder="Product Title/Name"
                        onChange={formik.handleChange("expiry")}
                        onBlur={formik.handleBlur("expiry")}
                        value={formik.values.expiry}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-[#2f60b5] hover:bg-[#2f60b5] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Update Coupon
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoupon;