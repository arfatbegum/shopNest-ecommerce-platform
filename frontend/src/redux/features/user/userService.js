import axios from "axios";
import { base_url } from "../../../utils/baseUrl";

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

const authService = {
    signup,
    signin,
};

export default authService;
