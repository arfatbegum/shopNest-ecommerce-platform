const BlogCategory = require("../models/blogCategoryModal");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

//Create a Blog Category
const createBlogCategory = asyncHandler(async (req, res) => {
    try {
        const newBlogCategory = await BlogCategory.create(req.body);
        res.json(newBlogCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//Get a Blog Category
const getBlogCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getBlogCategory = await BlogCategory.findById(id);
        res.json(getBlogCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//Update a Blog Category
const updateBlogCategory = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    try {
        const updatedBlogCategory = await BlogCategory.findOneAndUpdate(_id, req.body, {
            new: true,
        });
        res.json(updatedBlogCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//Delete a Blog Category
const deleteBlogCategory = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    console.log(_id);
    try {
        const deletedBlogCategory = await BlogCategory.findOneAndDelete(_id);
        res.json(deletedBlogCategory);
    } catch (error) {
        throw new Error(error);
    }
});

//Get All  Blog Category
const getAllBlogCategory = asyncHandler(async (req, res) => {
    try {
        const getAllBlogCategory = await BlogCategory.find();
        res.json(getAllBlogCategory);
    } catch (error) {
        throw new Error(error);
    }
});



module.exports = {
    createBlogCategory,
    updateBlogCategory,
    deleteBlogCategory,
    getBlogCategory,
    getAllBlogCategory
};