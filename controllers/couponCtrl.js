const Coupon = require("../models/couponModel");
const validateMongoDbId = require("../utils/validateMongodbld");
const asyncHandler = require("express-async-handler");

const createCoupon = asyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

const getallCoupons = asyncHandler(async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (error) {
    throw new Error(error);
  }
});

const getCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getCoupon = await Coupon.findById(id);
    res.json(getCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedCoupon = await Coupon.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedCoupon = await Coupon.findByIdAndDelete(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.json(deletedCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCoupon,
  getallCoupons,
  getCoupon,
  updateCoupon,
  deleteCoupon,
};
