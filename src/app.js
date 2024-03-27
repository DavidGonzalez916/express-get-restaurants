const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 
app.get("/restaurants/:id", async (req, res) => {
    const restaurants = await Restaurant.findByPk(req.params.id);
    res.json(restaurants);
})

app.use(express.json());
app.post("/restaurants", (req, res) => {
    
})


module.exports = app;