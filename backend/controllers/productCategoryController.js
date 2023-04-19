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
    const { _id } = req.params;
    try {
        const updatedProductCategory = await ProductCategory.findOneAndUpdate(_id, req.body, {
            new: true,
        });
        res.json(updatedProductCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//Delete a product Category
const deleteProductCategory = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    console.log(_id);
    try {
        const deletedProductCategory = await ProductCategory.findOneAndDelete(_id);
        res.json(deletedProductCategory);
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