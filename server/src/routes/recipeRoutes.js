const express = require("express");
const {
  createRecipe,
  editRecipe,
  deleteRecipe,
  getAllRecipe,
  getRecipeById,
} = require("../controllers/recipeContoller");

const recipeRouter = express.Router();

recipeRouter.get("/getAllRecipe", getAllRecipe);
recipeRouter.get("/:id", getRecipeById);

recipeRouter.post("/create", createRecipe);
recipeRouter.put("/edit", editRecipe);
recipeRouter.delete("/delete", deleteRecipe);


module.exports = recipeRouter;