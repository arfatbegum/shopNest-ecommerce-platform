const express = require("express");
const { createProduct, getProduct, getAllProducts } = require("../controllers/productController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();


router.post("/", createProduct);
router.get("/all-products", getAllProducts);
router.get("/:id", getProduct);


module.exports = router;