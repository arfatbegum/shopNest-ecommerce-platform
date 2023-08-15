import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createColor, getColors, resetState } from "../../../../features/color/colorSlice";

let schema = yup.object().shape({
  title: yup.string().required("Color Name is Required"),
  colorCode: yup.string().required("Color Name is Required"),
});

const AddBrand = ({ onClose }) => {
  const dispatch = useDispatch();
  const newColor = useSelector((state) => state.color);
  const {
    isSuccess,
    isError,
    isLoading,
    createdColor,
    colorName,
  } = newColor;

  useEffect(() => {
    if (isSuccess && createdColor) {
      toast.success("Color Added Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading, createdColor]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: colorName || "",
      colorCode: ""
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createColor(values));
      formik.resetForm();
      onClose();
      setTimeout(() => {
        dispatch(resetState());
        dispatch(getColors());
      }, 300);
    },
  });

  return (
    <div className="w-full">
      <form className="px-8 pb-8 mb-4" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Color Title/Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Product Title/Name"
            onChange={formik.handleChange("title")}
            onBlur={formik.handleBlur("title")}
            value={formik.values.title}
          />
        </div>
        <p className="text-red-500 text-xs italic text-start mb-5">
          {formik.touched.title && formik.errors.title}
        </p>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Color Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Product Title/Name"
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
            className="bg-[#2f60b5] hover:bg-[#2f60b5] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Add Color
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBrand;