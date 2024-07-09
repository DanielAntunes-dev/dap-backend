const express = require("express");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

module.exports = router;
