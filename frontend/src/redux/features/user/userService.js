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

const authService = {
    signup,
    signin,
    getWishlist
};

export default authService;
