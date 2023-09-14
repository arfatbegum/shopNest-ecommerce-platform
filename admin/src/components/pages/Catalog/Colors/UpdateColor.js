import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { getAColor, getColors, resetState, updateAColor } from '../../../../redux/features/color/colorSlice';

const UpdateColor = ({ colorId, onClose }) => {
    const dispatch = useDispatch();
    const UpdateColor = useSelector((state) => state.color);

    const {
        isSuccess,
        isError,
        colorName,
        colorCode,
        updatedColor
    } = UpdateColor;

    useEffect(() => {
        if (colorId !== undefined) {
            dispatch(getAColor(colorId));
        } else {
            dispatch(resetState());
        }
    }, [colorId, dispatch]);

    useEffect(() => {
        if (isSuccess && updatedColor) {
            toast.success("Color Updated Successfully!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, updatedColor]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: colorName || "",
            colorCode: colorCode || "",
        },
        onSubmit: (values) => {
            if (colorId !== undefined) {
                const data = { id: colorId, colorData: values };
                dispatch(updateAColor(data));
                onClose();
                setTimeout(() => {
                    dispatch(resetState());
                    dispatch(getColors());
                }, 300);
            }

        }
    });

    return (
        <div>
            <form className="px-8 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Update Color Title/Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Color Title/Name"
                        onChange={formik.handleChange("title")}
                        onBlur={formik.handleBlur("title")}
                        value={formik.values.title}
                    />
                    <p className="text-red-500 text-xs italic text-start mb-5">
                        {formik.touched.title && formik.errors.title}
                    </p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Color Code
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Color Code"
                        onChange={formik.handleChange("colorCode")}
                        onBlur={formik.handleBlur("colorCode")}
                        value={formik.values.colorCode}
                    />
                </div>
                <p className="text-red-500 text-xs italic text-start mb-5">
                    {formik.touched.colorCode && formik.errors.colorCode}
                </p>
                <div className="flex items-center justify-between">
                    <button

                        className="bg-[#2f60b5] hover:bg-[#2f60b5] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Update Color
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateColor;