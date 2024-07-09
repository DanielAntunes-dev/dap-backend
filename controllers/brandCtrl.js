const Brand = require("../models/brandModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbld");

const createBrand = asyncHandler(async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.json(newBrand);
  } catch (error) {
    throw new Error(error);
  }
});

const getBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getBrand = await Brand.findById(id);
    res.json(getBrand);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllBrand = asyncHandler(async (req, res) => {
  try {
    const getAllBrands = await Brand.find();
    res.json(getAllBrands);
  } catch (error) {
    throw new Error(error);
  }
});

const updateBrand = asyncHandler(async (req, res) => {
  const id = req.params.id;
  validateMongoDbId(id);
  try {
    const updatedBrand = await Brand.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(updatedBrand);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteBrand = asyncHandler(async (req, res) => {
  const id = req.params.id;
  validateMongoDbId(id);
  try {
    const deletedBrand = await Brand.findByIdAndDelete({ _id: id }, req.body, {
      new: true,
    });
    res.json(deletedBrand);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBrand,
  getBrand,
  getAllBrand,
  updateBrand,
  deleteBrand,
};
