const express = require("express");
const { createProductCategory, updateProductCategory } = require("../controllers/productCategoryController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProductCategory);
router.put("/:id", authMiddleware, isAdmin, updateProductCategory);

module.exports = router;