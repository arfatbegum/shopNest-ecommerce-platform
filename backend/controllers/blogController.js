const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

//Create a Blog
const createBlog = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.name);
        }
        const newBlog = await Blog.create(req.body);
        res.json(newBlog);
    } catch (error) {
        throw new Error(error);
    }
});

//Get a Blog
const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updateViews = await Blog.findByIdAndUpdate(
            id,
            {
                $inc: { views: 1 }
            },
            {
                new: true
            })
        res.json(updateViews);
    } catch (error) {
        throw new Error(error);
    }
});

//Update a Blog
const updateBlog = asyncHandler(async (req, res) => {
    const id = req.params;
    validateMongoDbId(id);
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const updateBlog = await Blog.findOneAndUpdate({ id }, req.body, {
            new: true,
        });
        res.json(updateBlog);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { createBlog, updateBlog, getBlog };