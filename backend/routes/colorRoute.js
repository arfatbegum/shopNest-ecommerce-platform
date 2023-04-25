const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { createColor, getAllColor, getColor, updateColor, deleteColor } = require("../controllers/colorController");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createColor);
router.get("/", getAllColor);
router.get("/:id", getColor);
router.put("/:id", authMiddleware, isAdmin, updateColor);
router.delete("/:id", authMiddleware, isAdmin, deleteColor);

module.exports = router;