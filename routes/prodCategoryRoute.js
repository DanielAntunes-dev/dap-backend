const express = require("express");
const {
  createprodCategory,
  updateprodCategory,
  deleteprodCategory,
  getprodCategory,
  getAllprodCategory,
} = require("../controllers/prodCategoryCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createprodCategory);
router.get("/:id", getprodCategory);
router.get("/", getAllprodCategory);
router.put("/:id", authMiddleware, isAdmin, updateprodCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteprodCategory);

module.exports = router;
