const express = require("express");
const { createBlogCategory, updateBlogCategory, deleteBlogCategory, getBlogCategory, getAllBlogCategory } = require("../controllers/BlogCategoryController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBlogCategory);
router.get("/", getAllBlogCategory);
router.get("/:id", getBlogCategory);
router.put("/:id", authMiddleware, isAdmin, updateBlogCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteBlogCategory);

module.exports = router;