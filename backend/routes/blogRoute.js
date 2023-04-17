const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { createBlog } = require("../controllers/blogController");
const router = express.Router();


router.post("/", authMiddleware, isAdmin, createBlog);


module.exports = router;