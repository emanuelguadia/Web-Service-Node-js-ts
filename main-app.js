const { request } = require("express");
const { response } = require("express");
const cors =require("cors");
const express = require("express");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
require("./DataAccessLayers/MoviesDataAccessLayers/movies-DataAccessLayer");
//global.process.config = require("./config.json");
//console.log(global.process.config);
let fileUpload = require("express-fileupload");
 const server = express();
// Register and set up the middleware
server.use(fileUpload());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
// server.use(cors({origin:"http://localhost:9000/api/movies/"}));
server.use(cors());
const PORT = 19000;
const moviesController = require("./Controllers/MoviesControllers/movies-controller");
//const moviesController = require("./Models/MoviesModel/movie-model");
const usersController = require("./Controllers/UsersControllers/users-controller");
const actorsController = require("./Controllers/ActorsControllers/actors-controller");
const citiesController = require("./Controllers/CityControllers/city-controller");
const countriesController = require("./Controllers/CountryControllers/country-controllers");
const directorsController = require("./Controllers/DirctorControllers/dirctore-controllers")
//.....................
//http://localhost:19000/api/auth/register
server.use("/api/auth/register",directorsController); //====>{Dirctor}//<=======//"token"
//=====>{Credentials}......continue//<========""//<=======//"token"
//if the client send continue  "authorization:Bearer token"...................> else break 
//http://localhost:19000/api/auth/login
//server.use("/api/auth/login",directorsController);
//http://localhost:19000/api/movies
server.use("/api/movies",moviesController);
//http://localhost:19000/api/users
server.use("/api/users",usersController);
//http://localhost:19000/api/actors
server.use("/api/actors",actorsController);
//http://localhost:19000/api/cities
server.use("/api/cities",citiesController);
//http://localhost:19000/api/countries
server.use("/api/countries",countriesController);
server.get("*",(request,response)=>{    
response.status(404).json("Not Found!!!!!!")
});
server.listen(PORT,()=>{
    setInterval(()=>{
        const date = new Date()
    console.log(date.toLocaleTimeString());
    console.log("Listing on http://localhost:19000");
    },1000)
})