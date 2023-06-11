const express = require("express");
const { uploadImages, deleteImages } = require("../controllers/uploadController");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const { uploadImg, productImgResize } = require("../middlewares/uploadImages");
const router = express.Router();

router.post(
  "/",
  authMiddleware,
  isAdmin,
  uploadImg.array("images", 10),
  productImgResize,
  uploadImages
);

router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

module.exports = router;