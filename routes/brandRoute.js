const express = require("express");
const {
  createBrand,
  getBrand,
  getAllBrand,
  updateBrand,
  deleteBrand,
} = require("../controllers/brandCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBrand);
router.get("/:id", getBrand);
router.get("/", getAllBrand);
router.put("/:id", authMiddleware, isAdmin, updateBrand);
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);

module.exports = router;
