const express = require("express");
const { createProductCategory, updateProductCategory, deleteProductCategory, getProductCategory, getAllProductCategory } = require("../controllers/productCategoryController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProductCategory);
router.get("/", getAllProductCategory);
router.get("/:id", getProductCategory);
router.put("/:id", authMiddleware, isAdmin, updateProductCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteProductCategory);

module.exports = router;