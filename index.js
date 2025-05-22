const express = require('express');
express();
require('dotenv').config();
const { connectDB } = require("./config/db.js");
connectDB;

const recipesController = require("./controller/recipes.controller.js");

const app = express();
app.listen(process.env.PORT, process.env.HOSTNAME, function() {
    console.log(`http://${process.env.HOSTNAME}:${process.env.PORT}`);
});

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "API created",
        success: true
    })
})

app.use(express.json());
//recipes
app.use(`/recipes`,recipesController)