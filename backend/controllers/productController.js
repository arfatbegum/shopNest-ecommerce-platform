const Product = require("../models/productModel");
const User = require("../models/userModel");
const Color = require("../models/colorModal");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../utils/validateMongoDbId");

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
    // Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields", "minPrice", "maxPrice", "available"];
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

    // Filter by color names
    if (req.query.colors) {
      const colorNames = req.query.colors.split(',');
      queryObj.color = { $in: colorNames, $options: "i" };
    }

    if (req.query.tags) {
      const tags = req.query.tags.split(',');
      queryObj.tags = { $in: tags, $options: "i" };
    }
    if (req.query.stock) {
      const stockValue = parseInt(req.query.stock);
      queryObj.stock = { $gt: stockValue - 1 };
    }

    // Construct the main product query
    let dbQuery = Product.find(queryObj);

    // Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      dbQuery = dbQuery.sort(sortBy);
    } else {
      dbQuery = dbQuery.sort("-createdAt");
    }

    // Limiting the fields
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      dbQuery = dbQuery.select(fields);
    } else {
      dbQuery = dbQuery.select("-__v");
    }

    // Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    dbQuery = dbQuery.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) throw new Error("This Page does not exist");
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