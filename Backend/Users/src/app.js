//conectar con express
const express = require("express");
const server = express();

//morgan para las peticiones 
const morgan = require("morgan");
//cookieParser para convertir las cookies json
const cookieParser = require("cookie-parser");
//cors para las peticiones  el body del fronted con el backend, por politicas cors
const cors= require('cors');
//conecta con las rutas
const authRoutes = require("./routes/auth.routes.js");


//configuraciones de express
server.use(cors({ 
     origin:  'http://localhost:5173',
     credentials:true}));
server.use(morgan('dev'));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cookieParser());
//conecta con las rutas
server.use("/api", authRoutes);
server.use("/welcome", (req, res) => {
    res.json({message: 'hola mundo'})
} );


require("./db.js"); /* ESTA LINEA ME CONECTA CON MONGO DB */

module.exports = server;
