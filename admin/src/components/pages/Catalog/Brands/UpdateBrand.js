import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { getABrand, getBrands, resetState } from "../../../../redux/features/brand/brandSlice.js";
import { updateABrand } from '../../../../redux/features/brand/brandSlice';

const UpdateBrand = ({ brandId, onClose }) => {
    const dispatch = useDispatch();
    const UpdateBrand = useSelector((state) => state.brand);
    const {
        isSuccess,
        isError,
        brandName,
        updatedBrand,
    } = UpdateBrand;

    useEffect(() => {
        if (brandId !== undefined) {
            dispatch(getABrand(brandId));
        } else {
            dispatch(resetState());
        }
    }, [brandId, dispatch]);

    useEffect(() => {
        if (isSuccess && updatedBrand) {
            toast.success("Brand Updated Successfully!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, updatedBrand]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: brandName || "",
        },
        onSubmit: (values) => {
            if (brandId !== undefined) {
                const data = { id: brandId, brandData: values };
                dispatch(updateABrand(data));
                onClose();
                setTimeout(() => {
                    dispatch(resetState());
                    dispatch(getBrands());
                }, 1000);
            }

        }
    });

    return (
        <div>
            <form className="px-8 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Update Product Title/Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Brand Title/Name"
                        onChange={formik.handleChange("title")}
                        onBlur={formik.handleBlur("title")}
                        value={formik.values.title}
                    />
                    <p className="text-red-500 text-xs italic text-start mb-5">
                        {formik.touched.title && formik.errors.title}
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <button

                        className="bg-[#2f60b5] hover:bg-[#2f60b5] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Update Brand
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateBrand;