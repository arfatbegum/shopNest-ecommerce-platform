const express = require("express");
const { createUser, signinUser } = require("../controllers/userController");
const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", signinUser);

module.exports = router;