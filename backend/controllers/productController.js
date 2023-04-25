const Product = require("../models/productModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");
const slugify = require("slugify");
const fs = require("fs");
const cloudinaryUploadImg = require("../utils/cloudinary");

//Create a product
const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.name) {
            req.body.slug = slugify(req.body.name);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error);
    }
});

//Get a product
const getProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const findProduct = await Product.findById(id);
        res.json(findProduct);
    } catch (error) {
        throw new Error(error);
    }
});

//Update a product
const updateProduct = asyncHandler(async (req, res) => {
    const id = req.params;
    validateMongoDbId(id);
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const updateProduct = await Product.findOneAndUpdate({ id }, req.body, {
            new: true,
        });
        res.json(updateProduct);
    } catch (error) {
        throw new Error(error);
    }
});

//Delete a product
const deleteProduct = asyncHandler(async (req, res) => {
    const id = req.params;
    validateMongoDbId(id);
    try {
        const deleteProduct = await Product.findOneAndDelete(id);
        res.json(deleteProduct);
    } catch (error) {
        throw new Error(error);
    }
});

//Get All products
const getAllProducts = asyncHandler(async (req, res) => {
    try {
        // Filtering
        const queryObj = { ...req.query };
        const excludeFields = ["page", "sort", "limit", "fields"];
        excludeFields.forEach((el) => delete queryObj[el]);
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

        let query = Product.find(JSON.parse(queryStr));

        // Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        } else {
            query = query.sort("-createdAt");
        }

        // limiting the fields
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            query = query.select(fields);
        } else {
            query = query.select("-__v");
        }

        // pagination
        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if (req.query.page) {
            const productCount = await Product.countDocuments();
            if (skip >= productCount) throw new Error("This Page does not exists");
        }
        const product = await query;
        res.json(product);
    } catch (error) {
        throw new Error(error);
    }
});

//Add To Wishlist
const addToWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { productId } = req.body;
    try {
        const user = await User.findById(_id);
        const alreadyAdded = user.wishlist.find((id) => id.toString() === productId);
        if (alreadyAdded) {
            let user = await User.findByIdAndUpdate(_id,
                {
                    $pull: { wishlist: productId }
                }, {
                new: true,
            });
            res.json(user);
        } else {
            let user = await User.findByIdAndUpdate(_id,
                {
                    $push: { wishlist: productId }
                }, {
                new: true,
            });
            res.json(user);
        }


    } catch (error) {
        throw new Error(error);
    }
});

//Add To Wishlist
const rating = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { productId, star, comment } = req.body;
    try {
        const product = await Product.findById(productId);
        const alreadyRated = product.ratings.find((userId) => userId.postedby.toString() === _id.toString());
        if (alreadyRated) {
            const updateRating = await Product.updateOne(productId,
                {
                    ratings: { $elemMatch: alreadyRated },
                },
                {
                    $set: {
                        "ratings.$.star": star,
                        "ratings.$.comment": comment,
                    },
                },
                {
                    new: true,
                });
        } else {
            const rateProduct = await Product.findByIdAndUpdate(productId,
                {
                    $push: {
                        ratings: {
                            star: star,
                            comment: comment,
                            postedby: _id,
                        }
                    }
                }, {
                new: true,
            });
        }
        const grtAllRatings = await Product.findById(productId);
        let totalRating = grtAllRatings.ratings.length;
        let ratingSum = grtAllRatings.ratings
            .map((rating) => rating.star)
            .reduce((prev, curr) => prev + curr, 0);
        let actualRating = Math.round(ratingSum / totalRating);
        const allRatings = await Product.findByIdAndUpdate(productId, {
            totalrating: actualRating,
        }, {
            new: true,
        });
        res.json(allRatings);
    } catch (error) {
        throw new Error(error);
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
        const findProduct = await Product.findById(
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
        res.json(findProduct);
    } catch (error) {
        throw new Error(error);
    }
});



module.exports = {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    addToWishlist,
    rating,
    uploadImages
}