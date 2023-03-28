const express = require("express");
const { createUser, signinUser, getallUsers, getUser, deleteUser, updatedUser, blockUser, unblockUser, handleRefreshToken, SignOut } = require("../controllers/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", signinUser);
router.get("/all-users", getallUsers);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.get("/refresh", handleRefreshToken);
router.get("/signout", SignOut);
router.delete("/:id", deleteUser);
router.put("/update-user", authMiddleware, updatedUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;