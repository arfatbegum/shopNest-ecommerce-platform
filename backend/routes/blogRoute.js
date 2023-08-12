const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlogs, disLikeBlogs, uploadImages } = require("../controllers/blogController");
const { blogImgResize, uploadImg } = require("../middlewares/uploadImages");
const router = express.Router();

router.get("/:id", getBlog);
router.post("/", authMiddleware, isAdmin, createBlog);
router.put("/upload/:id", authMiddleware, isAdmin, uploadImg.array("images", 10), blogImgResize, uploadImages);
router.get("/", getAllBlogs);
router.put("/like-blogs", authMiddleware, likeBlogs);
router.put("/disLike-blogs", authMiddleware, disLikeBlogs);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;