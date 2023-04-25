const express = require("express");
const { createUser, signinUser, getallUsers, getUser, deleteUser, updatedUser, blockUser, unblockUser, handleRefreshToken, SignOut, updatePassword, forgotPasswordToken, forgotPassword, signinAdmin, getWishlist, saveAddress, addToCart, getCart, removeCart } = require("../controllers/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", signinUser);
router.post("/signin-admin", signinAdmin);
router.post("/cart", authMiddleware, addToCart);
router.get("/all-users", getallUsers);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.get("/refresh", handleRefreshToken);
router.get("/signout", SignOut);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getCart);
router.delete("/cart/:id", authMiddleware, removeCart);
router.delete("/:id", authMiddleware, isAdmin, deleteUser);
router.put("/update-password", authMiddleware, updatePassword);
router.post("/forgot-password-token", authMiddleware, forgotPasswordToken);
router.post("/forgot-password/:token", authMiddleware, forgotPassword);
router.put("/update-user", authMiddleware, updatedUser);
router.put("/address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;