const ruta = require('express').Router();
const funciones = require("../funciones/funciones");

ruta.get("/", funciones.fechaHora, funciones.ubicacion, (req, res) => {
    res.render('inicio');
});

ruta.get("/saludo",funciones.fechaHora, funciones.ubicacion,(req,res)=> {
    res.render('saludo');
});

module.exports = ruta;
