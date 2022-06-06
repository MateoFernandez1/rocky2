const express = require ("express");
const app= express();
const db = require("../db/index");
const PORT= 3000;

app.get("/", (req, res) => {
    res.send("Hola dff");
});

app.listen(PORT, ()=> console.log (`Corriendo en ${PORT}`));


