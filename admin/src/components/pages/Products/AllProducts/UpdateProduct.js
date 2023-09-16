import React, { useEffect, useState } from 'react';
import { getProducts, updateAProduct } from '../../../../redux/features/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands, resetState } from '../../../../redux/features/brand/brandSlice';
import { getCategories } from '../../../../redux/features/productCategories/productCategorySlice';
import { getColors } from '../../../../redux/features/color/colorSlice';
import { delImg, uploadImg } from '../../../../redux/features/upload/uploadSlice';
import { useFormik } from 'formik';
import ReactQuill from 'react-quill';
import { Select } from 'antd';
import Dropzone from 'react-dropzone';
import { toast } from 'react-toastify';

const UpdateProduct = ({ productId, onClose }) => {
    const dispatch = useDispatch();
    const [colors, setColors] = useState([]);
    const brandState = useSelector((state) => state.brand.brands);
    const catState = useSelector((state) => state.productCategory.pCategories);
    const colorState = useSelector((state) => state.color.colors);
    const imgState = useSelector((state) => state.upload.images);
    const updateProduct = useSelector((state) => state.product);
    const {
        isSuccess,
        isError,
        productName,
        productDescription,
        productPrice,
        salePrice,
        brand,
        category,
        tags,
        color,
        quantity,
        images,
        updatedProduct } = updateProduct;

    useEffect(() => {
        if (productId !== undefined) {
            dispatch(getProducts(productId));
        } else {
            dispatch(resetState());
        }
    }, [productId, dispatch]);

    useEffect(() => {
        dispatch(getBrands());
        dispatch(getCategories());
        dispatch(getColors());
    }, [dispatch]);

    useEffect(() => {
        if (isSuccess && updatedProduct) {
            toast.success("Product Updated Successfullly!");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError,updatedProduct]);

    const colorOption = [];
    colorState.forEach((i) => {
        colorOption.push({
            label: i.title,
            value: i._id,
        });
    });

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
            name: productName || "",
            description: productDescription || "",
            price: productPrice || "",
            salePrice: salePrice || "",
            brand: brand || "",
            category: category || "",
            tags: tags || "",
            color: color || "",
            quantity: quantity || "",
            images: images || "",
        },
        onSubmit: (values) => {
            if (productId !== undefined) {
                const data = { id: productId, productData: values };
                dispatch(updateAProduct(data));
                onClose();
                setColors(null);
                setTimeout(() => {
                    dispatch(resetState());
                    dispatch(getProducts());
                }, 1000);
            }

        }
    });

    useEffect(() => {
        formik.values.color = colors ? colors : " ";
        formik.values.images = img;
    }, [formik.values.color, formik.values.images]);

    const handleColors = (e) => {
        setColors(e);
    };

    return (
        <div>
            <div>
                <form
                    className="px-8 pb-8 mb-4"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Product Title/Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="name"
                            onChange={formik.handleChange("name")}
                            onBlur={formik.handleBlur("name")}
                            value={formik.values.name}
                        />
                        <p className="text-red-500 text-xs italic text-start mb-5">
                            {formik.touched.name && formik.errors.name}
                        </p>
                    </div>
                    <div className="">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Product Description
                        </label>
                        <ReactQuill
                            theme="snow"
                            name="description"
                            onChange={formik.handleChange("description")}
                            value={formik.values.description}
                        />
                        <p className="text-red-500 text-xs italic text-start mb-5">
                            {formik.touched.description && formik.errors.description}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Product Price
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            name="price"
                            onChange={formik.handleChange("price")}
                            onBlur={formik.handleBlur("price")}
                            value={formik.values.price}
                        />
                        <p className="text-red-500 text-xs italic text-start mb-5">
                            {formik.touched.price && formik.errors.price}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Product Sale Price
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            label="Enter Product Price"
                            name="price"
                            onChange={formik.handleChange("salePrice")}
                            onBlur={formik.handleBlur("salePrice")}
                            value={formik.values.salePrice}
                        />
                        <p className="text-red-500 text-xs italic text-start mb-5">
                            {formik.touched.salePrice && formik.errors.salePrice}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Product Brand
                        </label>
                        <select
                            name="brand"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={formik.handleChange("brand")}
                            onBlur={formik.handleBlur("brand")}
                            value={formik.values.brand}
                        >
                            <option value="">Select Brand</option>
                            {brandState && brandState.length > 0 && brandState.map((i, j) => {
                                return (
                                    <option key={j} value={i.title}>
                                        {i.title}
                                    </option>
                                );
                            })}
                        </select>
                        <p className="text-red-500 text-xs italic text-start mb-5">
                            {formik.touched.brand && formik.errors.brand}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Product Category
                        </label>
                        <select
                            name="category"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={formik.handleChange("category")}
                            onBlur={formik.handleBlur("category")}
                            value={formik.values.category}
                        >
                            <option value="">Select Category</option>
                            {catState && catState.length > 0 && catState.map((i, j) => {
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
                            Product Tags
                        </label>
                        <select
                            name="tags"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={formik.handleChange("tags")}
                            onBlur={formik.handleBlur("tags")}
                            value={formik.values.tags}
                        >
                            <option value="" disabled>
                                Select Tags
                            </option>
                            <option value="featured">Featured</option>
                            <option value="popular">Popular</option>
                            <option value="special">Special</option>
                        </select>
                        <p className="text-red-500 text-xs italic text-start mb-5">
                            {formik.touched.tags && formik.errors.tags}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Product Color
                        </label>
                        <Select
                            mode="multiple"
                            allowClear
                            className="w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Select colors"
                            defaultValue={colors}
                            onChange={(i) => handleColors(i)}
                            options={colorOption}
                        />
                        <p className="text-red-500 text-xs italic text-start mb-5">
                            {formik.touched.color && formik.errors.color}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Product Quantity
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            label="Enter Product Quantity"
                            name="quantity"
                            onChange={formik.handleChange("quantity")}
                            onBlur={formik.handleBlur("quantity")}
                            value={formik.values.quantity}
                        />
                        <p className="text-red-500 text-xs italic text-start mb-5">
                            {formik.touched.quantity && formik.errors.quantity}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Product Images
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
                    </div>
                    <div className="showimages flex flex-wrap gap-3">
                        {imgState && imgState.length > 0 && imgState?.map((i, j) => {
                            return (
                                <div className=" position-relative" key={j}>
                                    <button
                                        type="button"
                                        onClick={() => dispatch(delImg(i.public_id))}
                                        className="btn-close position-absolute"
                                        style={{ top: "10px", right: "10px" }}
                                    ></button>
                                    <img src={i.url} alt="" width={200} height={200} />
                                </div>
                            );
                        })}
                    </div>
                    <button
                        className="bg-[#2f60b5] hover:bg-[#2f60b5] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Update Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;