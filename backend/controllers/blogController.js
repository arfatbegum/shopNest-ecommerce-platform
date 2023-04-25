const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");
const slugify = require("slugify");
const fs = require("fs");
const cloudinaryUploadImg = require("../utils/cloudinary");

//Create a Blog
const createBlog = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
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
        const getBlog = await Blog.findById().populate('likes').populate('disLikes');
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

//Delete a Blog
const deleteBlog = asyncHandler(async (req, res) => {
    const id = req.params;
    validateMongoDbId(id);
    try {
        const deletedBlog = await Product.findOneAndDelete(id);
        res.json(deletedBlog);
    } catch (error) {
        throw new Error(error);
    }
});

//Get All Blogs
const getAllBlogs = asyncHandler(async (req, res) => {
    try {
        const getAllBlogs = await Blog.find();
        res.json(getAllBlogs);
    } catch (error) {
        throw new Error(error);
    }
});

//Get All like Blogs
const likeBlogs = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongoDbId(blogId);
    //Find the blog which we want to be liked
    const blog = await Blog.findById(blogId);
    //Find the login user
    const loginUserId = req?.User?._id;
    //Find if  the user has liked the blog
    const liked = blog?.liked;
    //Find if  the user has disliked the blog
    const disLiked = blog?.disLikes?.find(
        (userId => userId?.toString() === loginUserId?.toString())
    );
    if (disLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { disLikes: loginUserId },
            disliked: false
        },
            {
                new: true
            }
        );
        res.json(blog);
    }
    if (liked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { likes: loginUserId },
            liked: true
        },
            {
                new: true
            }
        );
        res.json(blog);
    } else {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $push: { likes: loginUserId },
            liked: false
        },
            {
                new: true
            }
        );
        res.json(blog);
    }
});

//Get All disLike Blogs
const disLikeBlogs = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongoDbId(blogId);
    //Find the blog which we want to be liked
    const blog = await Blog.findById(blogId);
    //Find the login user
    const loginUserId = req?.User?._id;
    //Find if  the user has liked the blog
    const disLiked = blog?.disLiked;
    //Find if  the user has disliked the blog
    const liked = blog?.likes?.find(
        (userId => userId?.toString() === loginUserId?.toString())
    );
    if (liked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { likes: loginUserId },
            liked: false
        },
            {
                new: true
            }
        );
        res.json(blog);
    }
    if (disLiked) {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $pull: { disLikes: loginUserId },
            disLiked: true
        },
            {
                new: true
            }
        );
        res.json(blog);
    } else {
        const blog = await Blog.findByIdAndUpdate(blogId, {
            $push: { disLikes: loginUserId },
            disLiked: false
        },
            {
                new: true
            }
        );
        res.json(blog);
    }
});

//Update a product
const uploadImages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const uploader = (path) => cloudinaryUploadImg(path, 'images');
        const urls = [];
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newPath = await uploader(path);
            urls.push(newPath);
            fs.unlinkSync(path);
        }
        const findBlog = await Blog.findById(
            id,
            {
                images: urls.map((file) => {
                    return file;
                })
            },
            {
                new: true,
            }
        );
        res.json(findBlog);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createBlog,
    updateBlog,
    getBlog,
    deleteBlog,
    getAllBlogs,
    likeBlogs,
    disLikeBlogs,
    uploadImages
};