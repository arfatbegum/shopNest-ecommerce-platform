import axios from "axios";
import { base_url } from "../../../utils/baseUrl";
import { config } from "../../../utils/axiosconfig";

const signup = async (user) => {
    const response = await axios.post(`${base_url}user/signup`, user);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const signin = async (user) => {
    const response = await axios.post(`${base_url}user/signin`, user);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const getWishlist = async () => {
    const response = await axios.get(`${base_url}user/wishlist`, config);
    if (response.data) {
        return response.data;
    }
};

const getComparelist = async () => {
    const response = await axios.get(`${base_url}user/comparelist`, config);
    if (response.data) {
        return response.data;
    }
};

const getCartProduct = async () => {
    const response = await axios.get(`${base_url}user/cart`, config);
    if (response.data) {
        return response.data;
    }
};

const addToCart = async (cartData) => {
    const response = await axios.post(`${base_url}user/cart`, cartData, config);
    if (response.data) {
        return response.data;
    }
};

const updateCart = async (id, newQuantity) => {
    const response = await axios.put(`${base_url}user/cart/${id}`, { newQuantity }, config);
    if (response.data) {
        return response.data;
    }
}

const removeFromCart = async (id) => {
    const response = await axios.delete(`${base_url}user/cart/${id}`, config);
    if (response.data) {
        return response.data;
    }
};

const createOrders = async (orderData) => {
    const response = await axios.post(`${base_url}user/create-order`, orderData, config);
    if (response.data) {
        return response.data;
    }
};

const getUserOrders = async () => {
    const response = await axios.get(`${base_url}user/orders`, config);
    if (response.data) {
        return response.data;
    }
};

const forgetPasswordToken = async (data) => {
    const response = await axios.put(`${base_url}user/forgot-password-token`, data);
    if (response.data) {
        return response.data;
    }
};

const resetPassword = async (token, password) => {
    const response = await axios.put(`${base_url}user/forgot-password/${token}`, { password });
    if (response.data) {
        return response.data;
    }
};

const authService = {
    signup,
    signin,
    getWishlist,
    getComparelist,
    addToCart,
    getCartProduct,
    removeFromCart,
    updateCart,
    createOrders,
    getUserOrders,
    forgetPasswordToken,
    resetPassword
};

export default authService;
