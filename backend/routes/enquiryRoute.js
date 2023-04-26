const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { createEnquiry, getAllEnquiry, getEnquiry, updateEnquiry, deleteEnquiry } = require("../controllers/enquiryController");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createEnquiry);
router.get("/", getAllEnquiry);
router.get("/:id", getEnquiry);
router.put("/:id", authMiddleware, isAdmin, updateEnquiry);
router.delete("/:id", authMiddleware, isAdmin, deleteEnquiry);

module.exports = router;