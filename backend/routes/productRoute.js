const express = require("express");
const { createProduct, getProduct } = require("../controllers/productController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();


router.post("/", createProduct);
router.get("/:id", getProduct);


module.exports = router;