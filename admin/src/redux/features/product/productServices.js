import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getProducts = async () => {
    const response = await axios.get(`${base_url}product/`);

    return response.data;
};
const createProduct = async (product) => {
    const response = await axios.post(`${base_url}product/`, product, config);

    return response.data;
};

const updateProduct = async (product) => {
    const response = await axios.put(
        `${base_url}product/${product.id}`,
        {
            name: product.productData.name,
            description: product.productData.description,
            price: product.productData.price,
            salePrice: product.productData.salePrice,
            brand: product.productData.brand,
            category: product.productData.category,
            tags: product.productData.tags,
            color: product.productData.color,
            quantity: product.productData.quantity,
            images: product.productData.images,
          },
        config
    );

    return response.data;
};

const deleteProduct = async (id) => {
    const response = await axios.delete(`${base_url}product/${id}`, config);

    return response.data;
};

const productService = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};

export default productService;