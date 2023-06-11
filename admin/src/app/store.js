import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import productCategoryReducer from "../features/productCategories/productCategorySlice";
import blogCategoryReducer from "../features/blogCategories/blogCategorySlice";
import barndReducer from "../features/brand/brandSlice";
import colorReducer from "../features/color/colorSlice";
import couponReducer from "../features/coupon/couponSlice";
import enquiryReducer from "../features/enquiry/enquirySlice";
import uploadReducer from "../features/upload/uploadSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product: productReducer,
        productCategory: productCategoryReducer,
        blogCategory: blogCategoryReducer,
        brand: barndReducer,
        color: colorReducer,
        coupon: couponReducer,
        enquiry: enquiryReducer,
        upload: uploadReducer,
    },
});