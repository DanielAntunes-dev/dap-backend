const prodCategory = require("../models/prodCategoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbld");

const createprodCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await prodCategory.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

const getprodCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getCategory = await prodCategory.findById(id);
    res.json(getCategory);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllprodCategory = asyncHandler(async (req, res) => {
  try {
    const getAllCategories = await prodCategory.find();
    res.json(getAllCategories);
  } catch (error) {
    throw new Error(error);
  }
});

const updateprodCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  validateMongoDbId(id);
  try {
    const updatedCategory = await prodCategory.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteprodCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  validateMongoDbId(id);
  try {
    const deletedCategory = await prodCategory.findByIdAndDelete(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.json(deletedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createprodCategory,
  updateprodCategory,
  deleteprodCategory,
  getprodCategory,
  getAllprodCategory,
};
