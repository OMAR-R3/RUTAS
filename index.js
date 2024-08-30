const express = require("express");
const path = require("path");
const rutas = require('./routes/rutas');
const app = express();
app.set("view engine","ejs");
app.use('/',rutas);
const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
});