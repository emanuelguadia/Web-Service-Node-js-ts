const { response } = require("express");
const { request } = require("express");
const express = require("express");
const router = express.Router();
const moviesBusinessLogic = require("./../../BusinessLogics/MoviesBusinessLogics/movies-BusinessLogic");
const Movie = require("./../../Models/MoviesModel/movie-model");

router.get("/", async(request,response)=>{
    try{
        const movies = await moviesBusinessLogic.getAllMovies();
        return response.json(movies);
       }
    catch(err)
       {
        response.status(500).send(err.message);
       }
});
router.get("/:_id",async (request,response)=>{
    try{
        const _id = request.params._id;
        const foundMovie = await moviesBusinessLogic.getOneMovie(_id);
        if(!foundMovie){
            response.sendStatus(404);
            return
        }
        response.json(foundMovie);

    }
    catch(err){
    console.log(err); 
    }
});
router.post("/", async(request,response)=>{
    console.log(request.body);
    console.log("Yes!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    try{
        const movie = new Movie(request.body);
        movie.PosterWithImageOfTheMovie.data = request.files.PosterWithImageOfTheMovie.data;
        movie.PosterWithImageOfTheMovie.contentType = request.files.PosterWithImageOfTheMovie.mimetype;
        movie.videoOfMovie.data = request.files.videoOfMovie.data;
        movie.videoOfMovie.contentType = request.files.videoOfMovie.mimetype;
        const addedMovie = await moviesBusinessLogic.addMovie(movie);
        console.log("Yes!!!!!!!!!!!!!  Save");
        //console.log(addedMovie);
        response.status(201).json(addedMovie);
        }
       catch(err){
        console.log("Yes!!!!!!!!!!!!! err.message");
        response.status(500).send(err.message);
    }
});
router.put("/", async(request,response)=>{
    try{
        const movie = new Movie(request.body);
        movie._id = request.params._id;
        const updateMovie = await moviesBusinessLogic.updateMovie(movie);
        if(!updateMovie){
            response.sendStatus(404);
            return
        }
        response.json(updateMovie);
    }
    catch(err)
    {
      response.status(500).send(err.message);
    }
});
router.patch("/",async(request,response)=>{
    try{
        const movie = new Movie(request.body);
        movie._id = request.params._id;
        const updateMovie = await moviesBusinessLogic.updateMovie(movie);
        if(!updateMovie){
            response.sendStatus(404);
            return
        }
        response.json(updateMovie);
    }
    catch(err)
    {
      response.status(500).send(err.message);
    }

});
router.delete("/",async (request,response)=>{
    try{
      
        movie._id = request.params._id;
         await moviesBusinessLogic.deleteMovie(movie);
        
         }
    catch(err)
         {
           response.status(500).send(err.message);
          }
});

module.exports =router;