const RecipeModel = require("../models/recipeModel");

const createRecipe = async (req, res) => {
  const { name, description, ingradients, instruction } = req.body;
  if (!name || !description || !ingradients || !instruction) {
    return res.json({ success: false, message: "Enry Feild is Neccessay" });
  }
  try {
    const newRecipe = new RecipeModel(req.body);
    await newRecipe.save();
    return res.json({ success: true, message: "Recipe Added SuccessFully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

const getAllRecipe = async (req, res) => {
  try {
    const recipes = await RecipeModel.find();
    if (!recipes) {
      res.json({ success: false, message: "No Recipe is Available" });
    }
    return res.json(recipes);
  } catch (error) {
    return res.json({ success: false, message: `Error Occured ${error}` });
  }
};

const getRecipeById = async (req, res) => {
  try {
    const recipe = await RecipeModel.findById(req.params.id);
    if (!recipe) {
      res.json({ success: false, message: "Recipe not Found" });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editRecipe = async (req, res) => {
  try {
    const recipe = await RecipeModel.findbyIdAndUpdate(req.params.id);
    if (!recipe) {
      return res.json({ success: false, message: "Recipe not found" });
    }
    return res.json(recipe, {
      success: true,
      message: "Recipe Edited Successfully",
    });
  } catch (error) {
    return res.json({ success: false, message: `Error Occurred ${error}` });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const recipe = await RecipeModel.findbyIdAndDelete(req.params.id);
    if (!recipe) {
      return res.json({ success: false, message: "Not Found" });
    }
    return res.json({ success: true, message: "Deleted Successfully" });
  } catch (error) {
    return res.json({ success: false, message: `Error Occurred ${error}` });
  }
};

module.exports = {
  createRecipe,
  getAllRecipe,
  getRecipeById,
  editRecipe,
  deleteRecipe,
};
