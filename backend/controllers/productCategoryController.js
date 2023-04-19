const Category = require("../models/productCategoryModal");
const asyncHandler = require("express-async-handler");

//Create a product Category
const createProductCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//Update a product Category
const updateProductCategory = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    try {
        const updatedProductCategory = await Category.findOneAndUpdate(_id, req.body, {
            new: true,
        });
        res.json(updatedProductCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//Delete a product
const deleteProductCategory = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    console.log(_id);
    try {
        const deletedProductCategory = await Category.findOneAndDelete(_id);
        res.json(deletedProductCategory);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createProductCategory,
    updateProductCategory,
    deleteProductCategory
};