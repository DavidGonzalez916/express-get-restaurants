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
app.use(express/express.urlencoded())
app.post("/restaurants", async (req, res) => {
    await Restaurant.create(req.body)
    const restaurants = await Restaurant.findAll()
    res.json(restaurants);
})
app.put("/restaurants/:id", async (req, res) =>{
    const found = await Restaurant.findByPk(req.params.id)
    await found.update(req.body)
    const restaurants = await Restaurant.findAll();
    res.json(restaurants)
})
app.delete("/restaurants/:id", async (req, res) =>{
    const found = await Restaurant.findByPk(req.params.id)
    const deleted = await found.destroy()
    res.json(deleted)
})
module.exports = app;