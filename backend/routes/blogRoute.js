const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog } = require("../controllers/blogController");
const router = express.Router();


router.post("/", authMiddleware, isAdmin, createBlog);
router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;