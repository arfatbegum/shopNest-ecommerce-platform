const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { createBlog, updateBlog, getBlog, getAllBlogs } = require("../controllers/blogController");
const router = express.Router();


router.post("/", authMiddleware, isAdmin, createBlog);
router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);

module.exports = router;