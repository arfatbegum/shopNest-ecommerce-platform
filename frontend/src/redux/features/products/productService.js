import axios from "axios";
import { base_url } from "../../../utils/baseUrl";
import { config } from "../../../utils/axiosconfig"

const getProducts = async (filters) => {
    const response = await axios.get(`${base_url}product`, { params: filters });
    if (response.data) {
        return response.data;
    }
};

const getProduct = async (productId) => {
    const response = await axios.get(`${base_url}product/${productId}`);
    if (response.data) {
        return response.data;
    }
};

const getProductCategories = async () => {
    const response = await axios.get(`${base_url}product-category/`);

    return response.data;
};

const getProductBrands = async () => {
    const response = await axios.get(`${base_url}brand/`);
  
    return response.data;
  };

const filterProductsByStock = async (stockStatus) => {
    const response = await axios.get(`${base_url}product`, {
        params: {
            stock: stockStatus, 
          },
    });
    return response.data;
};

const addToWishlist = async (productId) => {
    const response = await axios.put(`${base_url}product/wishlist`, { productId }, config);
    if (response.data) {
        return response.data;
    }
};

const rating = async (data) => {
    const response = await axios.put(`${base_url}product/rating`, data, config);
    console.log(rating)
    if (response.data) {
        return response.data;
    }
};

const productService = {
    getProducts,
    getProduct,
    getProductCategories,
    filterProductsByStock,
    getProductBrands,
    addToWishlist,
    rating
};

export default productService;
