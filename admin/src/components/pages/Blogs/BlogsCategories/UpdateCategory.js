import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { getABlogCategory, getCategories, resetState, updateABlogCategory } from '../../../../redux/features/blogCategories/blogCategorySlice';

const UpdateCategory = ({ categoryId, onClose }) => {
    const dispatch = useDispatch();
    const updateCategory = useSelector((state) => state.blogCategory.blogCategories);
    const {
        isSuccess,
        isError,
        blogCategoryName,
        updatedCategory,
    } = updateCategory;

    useEffect(() => {
        if (categoryId !== undefined) {
            dispatch(getABlogCategory(categoryId));
        } else {
            dispatch(resetState());
        }
    }, [categoryId, dispatch]);

    useEffect(() => {
        if (isSuccess && updatedCategory) {
            toast.success("Category Updated Successfully!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, updatedCategory]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: blogCategoryName || "",
        },
        onSubmit: (values) => {
            if (categoryId !== undefined) {
                const data = { _id: categoryId, blogCategoryData: values };
                dispatch(updateABlogCategory(data));
                formik.resetForm();
                onClose()
                setTimeout(() => {
                  dispatch(resetState());
                  dispatch(getCategories());
                }, 300);
            }
        }
    });

    return (
        <div>
            <form className="px-8 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Update Blog Title/Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Product Title/Name"
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
                        Update Category
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCategory;