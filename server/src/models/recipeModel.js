const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
  preptime: { type: String, required: true },
  cooktime: { type: String, required: true },
  servings: { type: Number, required: true },
  image: { type: String, required: true },
});

const RecipeModel =
  mongoose.model.recipe || mongoose.model("recipe", recipeSchema);

module.exports = RecipeModel;
