import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createNewblogCategory,
  getCategories,
  resetState,
} from "../../../../features/blogCategories/blogCategorySlice.js";

let schema = yup.object().shape({
  title: yup.string().required("Category Name is Required"),
});
const AddCategory = ({ onClose }) => {
  const dispatch = useDispatch();
  const newCategory = useSelector((state) => state.blogCategory);
  const {
    isSuccess,
    isError,
    isLoading,
    createdCategory,
  } = newCategory;

  useEffect(() => {
    if (isSuccess && createdCategory) {
      toast.success("Category Added Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading, createdCategory]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createNewblogCategory(values));
      formik.resetForm();
      onClose()
      setTimeout(() => {
        dispatch(resetState());
        dispatch(getCategories());
      }, 1000);
    }
  });
  
  return (
    <div>
      <form className="px-8 pb-8 mb-4" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Blog Title/Name
          </label>
          <input
            className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Blog Categpry Title/Name"
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
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;