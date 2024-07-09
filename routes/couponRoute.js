const express = require("express");
const {
  createCoupon,
  getallCoupons,
  getCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../controllers/couponCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCoupon);
router.get("/", getallCoupons);
router.get("/:id", getCoupon);
router.put("/:id", authMiddleware, isAdmin, updateCoupon);
router.delete("/:id", authMiddleware, isAdmin, deleteCoupon);

module.exports = router;
