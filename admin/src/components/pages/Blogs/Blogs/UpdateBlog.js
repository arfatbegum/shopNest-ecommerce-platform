import { React, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../../../../redux/features/upload/uploadSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { getABlog, getBlogs, resetState, updateABlog } from "../../../../redux/features/blog/blogSlice";
import { getCategories } from "../../../../redux/features/blogCategories/blogCategorySlice";

const UpdateBlog = ({ blogId, onClose }) => {
    const dispatch = useDispatch();
    const imgState = useSelector((state) => state.upload.images);
    const blogCategoryState = useSelector((state) => state.blogCategory.blogCategories);
    const updatedBlog = useSelector((state) => state.blog);
    const { isSuccess, isError, blogName, blogDesc, blogCategory, blogImages, updateBlog } = updatedBlog;
    console.log(updatedBlog)

    useEffect(() => {
        if (blogId !== undefined) {
            dispatch(getABlog(blogId));
        } else {
            dispatch(resetState());
        }
    }, [blogId, dispatch]);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    useEffect(() => {
        if (isSuccess && updateBlog) {
            toast.success("Blog Updated Successfully!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, updateBlog]);

    const img = [];
    imgState.forEach((i) => {
        img.push({
            public_id: i.public_id,
            url: i.url,
        });
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: blogName || "",
            description: blogDesc || "",
            category: blogCategory || "",
            images: blogImages || "",
        },
        onSubmit: (values) => {
            if (blogId !== undefined) {
                const data = { id: blogId, blogData: values };
                dispatch(updateABlog(data));
                onClose();
                setTimeout(() => {
                    dispatch(resetState());
                    dispatch(getBlogs());
                }, 1000);
            }

        }
    });

    useEffect(() => {
        formik.values.images = img;
    }, [formik.values.images]);


    return (
        <div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Blog Title/Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="title"
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
                            Blog Category
                        </label>
                        <select
                            name="category"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={formik.handleChange("category")}
                            onBlur={formik.handleBlur("category")}
                            value={formik.values.category}
                        >
                            <option value="">Select Blog Category</option>
                            {blogCategoryState && blogCategoryState.length > 0 && blogCategoryState.map((i, j) => {
                                return (
                                    <option key={j} value={i.title}>
                                        {i.title}
                                    </option>
                                );
                            })}
                        </select>
                        <p className="text-red-500 text-xs italic text-start mb-5">
                            {formik.touched.category && formik.errors.category}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Blog Description
                        </label>
                        <ReactQuill
                            theme="snow"
                            className="mt-3"
                            name="description"
                            onChange={formik.handleChange("description")}
                            value={formik.values.description}
                        />
                        <p className="text-red-500 text-xs italic text-start mb-5">
                            {formik.touched.description && formik.errors.description}
                        </p>
                    </div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Blog Images
                    </label>
                    <div className="shadow appearance-none border rounded p-5 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <Dropzone
                            onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>
                                            Drag 'n' drop some files here, or click to select files
                                        </p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                    <div className="showimages flex flex-wrap mt-3 gap-3">
                        {imgState && imgState.length > 0 && imgState?.map((i, j) => {
                            return (
                                <div className=" position-relative" key={j}>
                                    <button
                                        type="button"
                                        onClick={() => dispatch(delImg(i.public_id))}
                                        className="btn-close absolute"
                                        style={{ top: "10px", right: "10px" }}
                                    ></button>
                                    <img src={i.url} alt="" width={200} height={200} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-[#2f60b5] hover:bg-[#2f60b5] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Update Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;