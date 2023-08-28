const Product = require("../models/productModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../utils/validateMongoDbId");
const { default: mongoose } = require("mongoose");

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

const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    if (req.body.name) {
      req.body.slug = slugify(req.body.name);
    }
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.json(deleteProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const getaProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const findProduct = await Product.findById(id).populate("color");
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllProduct = asyncHandler(async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields", "minPrice", "maxPrice"];
    excludeFields.forEach((el) => delete queryObj[el]);

    if (req.query.minPrice) {
      queryObj.price = { $gte: parseFloat(req.query.minPrice) };
    }

    if (req.query.maxPrice) {
      queryObj.price = { ...queryObj.price, $lte: parseFloat(req.query.maxPrice) };
    }

    if (req.query.category) {
      queryObj.category = { $regex: req.query.category, $options: "i" };
    }

    if (req.query.brand) {
      queryObj.brand = { $regex: req.query.brand, $options: "i" };
    }

    if (req.query.colors) {
      const colorIds = req.query.colors.split(',');
      queryObj.color = { $in: colorIds.map(colorId => new mongoose.Types.ObjectId(colorId)) };
    }

    if (req.query.tags) {
      const tags = req.query.tags.split(',');
      queryObj.tags = { $in: tags, $options: "i" };
    }

    let dbQuery = Product.find(queryObj);

    let sortBy = "-createdAt";

    if (req.query.sort) {
      if (req.query.sort === "alphabetical") {
        sortBy = "title";
      } else if (req.query.sort === "-alphabetical") {
        sortBy = "-title";
      } else if (req.query.sort === "priceHighToLow") {
        sortBy = "-price";
      } else if (req.query.sort === "priceLowtoHigh") {
        sortBy = "price";
      } else if (req.query.sort === "oldToNew") {
        sortBy = "-createdAt";
      } else if (req.query.sort === "NewToOld") {
        sortBy = "createdAt";
      }
    }

    dbQuery = dbQuery.sort(sortBy);

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      dbQuery = dbQuery.select(fields);
    } else {
      dbQuery = dbQuery.select("-__v");
    }
    
    const products = await dbQuery;
    res.json(products);
  } catch (error) {
    throw new Error(error);
  }
});


const addToWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { productId } = req.body;
  try {
    const user = await User.findById(_id);
    const alreadyadded = user.wishlist.find((id) => id.toString() === productId);
    if (alreadyadded) {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: productId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: productId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});

const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, comment, productId } = req.body;
  try {
    const product = await Product.findById(productId).populate('ratings.postedby', '-password');

    let alreadyRated = product.ratings.find(
      (rating) => rating.postedby._id.toString() === _id.toString()
    );

    if (alreadyRated) {
      await Product.updateOne(
        {
          'ratings._id': alreadyRated._id,
        },
        {
          $set: { 'ratings.$.star': star, 'ratings.$.comment': comment },
        },
        {
          new: true,
        }
      );
    } else {
      await Product.findByIdAndUpdate(
        productId,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedby: _id,
            },
          },
        },
        {
          new: true,
        }
      );
    }

    const getallratings = await Product.findById(productId);
    let totalRating = getallratings.ratings.length;
    let ratingsum = getallratings.ratings.map((item) => item.star).reduce((prev, curr) => prev + curr, 0);
    let actualRating = Math.round(ratingsum / totalRating);

    let finalproduct = await Product.findByIdAndUpdate(
      productId,
      {
        totalrating: actualRating,
      },
      { new: true }
    );

    res.json(finalproduct);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the rating.' });
  }
});



module.exports = {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
};