import axios from "axios";
import { base_url } from "../../../utils/baseUrl";
import { config } from "../../../utils/axiosconfig";

const signup = async (user) => {
    const response = await axios.post(`${base_url}user/signup`, user);
    if (response.data) {
        return response.data;
    }
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

const removeFromCart = async (id) => {
    const response = await axios.delete(`${base_url}user/cart/${id}`, config);
    if (response.data) {
        return response.data;
    }
};



const authService = {
    signup,
    signin,
    getWishlist,
    addToCart,
    getCartProduct,
    removeFromCart
};

export default authService;
