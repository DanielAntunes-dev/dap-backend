const express = require("express");
const {
  createblogCategory,
  getblogCategory,
  getAllblogCategory,
  updateblogCategory,
  deleteblogCategory,
} = require("../controllers/blogCategoryCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createblogCategory);
router.get("/:id", getblogCategory);
router.get("/", getAllblogCategory);
router.put("/:id", authMiddleware, isAdmin, updateblogCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteblogCategory);

module.exports = router;
