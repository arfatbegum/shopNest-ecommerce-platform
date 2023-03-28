const express = require("express");
const { createUser, signinUser, getallUsers, getUser, deleteUser } = require("../controllers/userController");
const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", signinUser);
router.get("/all-users", getallUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
module.exports = router;