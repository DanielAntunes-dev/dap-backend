const blogCategory = require("../models/blogCategoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbld");

const createblogCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await blogCategory.create(req.body);
    res.json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

const getblogCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getCategory = await blogCategory.findById(id);
    res.json(getCategory);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllblogCategory = asyncHandler(async (req, res) => {
  try {
    const getAllCategories = await blogCategory.find();
    res.json(getAllCategories);
  } catch (error) {
    throw new Error(error);
  }
});

const updateblogCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  validateMongoDbId(id);
  try {
    const updatedCategory = await blogCategory.findByIdAndUpdate(
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

const deleteblogCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  validateMongoDbId(id);
  try {
    const deletedCategory = await blogCategory.findByIdAndDelete(
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
  createblogCategory,
  getblogCategory,
  getAllblogCategory,
  updateblogCategory,
  deleteblogCategory,
};
