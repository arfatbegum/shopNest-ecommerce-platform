const express = require("express");
const { createProduct, getProduct, getAllProducts, updateProduct, deleteProduct, addToWishlist, rating, uploadImages, deleteImages } = require("../controllers/productController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { uploadImg, productImgResize } = require("../middlewares/uploadImages");
const router = express.Router();


router.post("/", authMiddleware, isAdmin, createProduct);
router.put("/upload", authMiddleware, isAdmin, uploadImg.array("images", 10), productImgResize, uploadImages);
router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.delete("/delete-images/:id", authMiddleware, isAdmin, deleteImages);


module.exports = router;