import axios from "axios";
import { base_url } from "../../../utils/baseUrl";
import { config } from "../../../utils/axiosconfig";

const getBlogCategories = async () => {
  const response = await axios.get(`${base_url}blog-category/`);

  return response.data;
};
const createBlogCategory = async (blogCategory) => {
  const response = await axios.post(`${base_url}blog-category/`, blogCategory, config);

  return response.data;
};
const updateBlogCategory = async (blogCategory) => {
  const response = await axios.put(
    `${base_url}blog-category/${blogCategory._id}`,
    { title: blogCategory.blogCategoryData.title },
    config
  );

  return response.data;
};
const getBlogCategory = async (id) => {
  const response = await axios.get(`${base_url}blog-category/${id}`, config);

  return response.data;
};

const deleteBlogCategory = async (id) => {
  const response = await axios.delete(`${base_url}blog-category/${id}`, config);

  return response.data;
};
const blogCategoryServices = {
  getBlogCategories,
  createBlogCategory,
  deleteBlogCategory,
  getBlogCategory,
  updateBlogCategory,
};

export default blogCategoryServices;