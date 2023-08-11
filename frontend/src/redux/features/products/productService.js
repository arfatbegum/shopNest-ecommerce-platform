import axios from "axios";
import { base_url } from "../../../utils/baseUrl";

// productService.js
const getProducts = async () => {
    const response = await axios.get(`${base_url}product`);
    if (response.data) {
        return response.data;
    }
};

const productService = {
    getProducts,
};

export default productService;
