import axios from "axios";
import { base_url } from "../../../utils/baseUrl";

const getBlogs = async (filters) => {
    const response = await axios.get(`${base_url}blog`, { params: filters });
    if (response.data) {
        return response.data;
    }
};

const getBlog = async (blogId) => {
    const response = await axios.get(`${base_url}blog/${blogId}`);
    if (response.data) {
        return response.data;
    }
};

const getBlogCategories = async () => {
    const response = await axios.get(`${base_url}blog-category`);
    if (response.data) {
        return response.data;
    }
};



const blogService = {
    getBlogs,
    getBlog,
    getBlogCategories
};

export default blogService;
