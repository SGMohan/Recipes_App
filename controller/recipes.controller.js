const RecipeModel = require("../model/recipes.model");
const recipesRouter = require("express").Router();

//createRecipe
recipesRouter.post("/createRecipe", async (req, res) => {
  try {
    const result = await RecipeModel.create(req.body)
    return res.status(200).json({
      message: "Recipe created",
      success: true,
      data: result
    });
  } catch (error) {
    return res.status(400).json({
      message: "Recipe not created",
      success: false,
      error: error.message
    });
}
});
//getAllRecipes
recipesRouter.get("/", async (req, res) => {
  try {
    const result = await RecipeModel.find();
    return res.status(200).json({
      message: "All recipes",
      success: true,
      data: result
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error fetching recipes",
      success: false,
      error: error.message
    });
  }
});
//getRecipeById
recipesRouter.get("/:id", async (req, res) => {
  try {
    const result = await RecipeModel.findById(req.params.id);
    return res.status(200).json({
      message: "Recipe by id",
      success: true,
      data: result
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error fetching recipe by id",
      success: false,
      error: error.message
    });
  }
});
//updateRecipe
recipesRouter.put("/:id", async (req, res) => {
  try {
    const result = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json({
      message: "Recipe updated",
      success: true,
      data: result
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error updating recipe",
      success: false,
      error: error.message
    });
  }
});
//deleteRecipe 
recipesRouter.delete("/:id", async (req, res) => {
  try {
    const result = await RecipeModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Recipe deleted",
      success: true,
      data: result
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error deleting recipe",
      success: false,
      error: error.message
    });
  }
});

module.exports = recipesRouter;
