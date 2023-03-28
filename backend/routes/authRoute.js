const express = require("express");
const { createUser, signinUser, getallUsers, getUser, deleteUser, updatedUser } = require("../controllers/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", signinUser);
router.get("/all-users", getallUsers);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.put("/update-user", authMiddleware, updatedUser);
router.delete("/:id", deleteUser);
module.exports = router;