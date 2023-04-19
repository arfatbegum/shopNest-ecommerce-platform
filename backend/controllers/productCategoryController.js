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
    const { id } = req.params;
    try {
        const updateProductCategory = await Category.findOneAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateProductCategory);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createProductCategory,
    updateProductCategory
};