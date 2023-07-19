"use strict";
const express = require("express");
const bodyP = require("body-parser");
const app = express();
app.use((req, res, next) => {
    console.log("Running at " + Date.now() + " [hour]");
    next();
});
app.use(bodyP.json());
//Uma array de usuarios
let users = [];
app.get('/:nome', (req, res) => {
    res.send(`Welcome ${req.params.nome}`);
});
app.get("/data/teste", (req, res) => {
    res.send("Hello world!");
});
app.listen(17192, () => {
    console.log("running on port 17192");
});
