const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    cookingTime: {
        type: Number,
        required: true
    }
});

const RecipeModel = mongoose.model("recipes", recipeSchema);
module.exports = RecipeModel;
