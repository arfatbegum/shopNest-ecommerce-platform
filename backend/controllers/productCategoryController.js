const ProductCategory = require("../models/productCategoryModal");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

//Create a product Category
const createProductCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await ProductCategory.create(req.body);
        res.json(newCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//Get a product Category
const getProductCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getProductCategory = await ProductCategory.findById(id);
        res.json(getProductCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//Update a product Category
const updateProductCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatedCategory = await ProductCategory.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//Delete a product category
const deleteProductCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deletedCategory = await ProductCategory.findByIdAndDelete(id);
        res.json(deletedCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//Get All  product Category
const getAllProductCategory = asyncHandler(async (req, res) => {
    try {
        const getAllProductCategory = await ProductCategory.find();
        res.json(getAllProductCategory);
    } catch (error) {
        throw new Error(error);
    }
});



module.exports = {
    createProductCategory,
    updateProductCategory,
    deleteProductCategory,
    getProductCategory,
    getAllProductCategory
};