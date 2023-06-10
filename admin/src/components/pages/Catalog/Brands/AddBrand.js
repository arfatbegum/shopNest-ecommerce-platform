import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createBrand,
  getBrands,
  resetState,
} from "../../../../features/brand/brandSlice";

let schema = yup.object().shape({
  title: yup.string().required("Brand Name is Required"),
});

const AddBrand = ({onClose}) => {
  const dispatch = useDispatch();
  const newBrand = useSelector((state) => state.brand);
  const {
    isSuccess,
    isError,
    isLoading,
    createdBrand,
    brandName,
  } = newBrand;

  useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("Brand Added Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading, createdBrand]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: brandName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createBrand(values));
      formik.resetForm();
      onClose();
      setTimeout(() => {
        dispatch(resetState());
        dispatch(getBrands());
      }, 300);
    },
  });

  return (
    <div className="w-full">
      <form className="px-8 pb-8 mb-4" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Brand Title/Name
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
        <div className="flex items-center justify-between">
          <button
            className="bg-[#2f60b5] hover:bg-[#2f60b5] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Add Brand
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBrand;