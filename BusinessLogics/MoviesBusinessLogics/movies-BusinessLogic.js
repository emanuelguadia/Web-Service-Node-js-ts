const Movie = require("./../../Models/MoviesModel/movie-model");
//const  Director =   require("./../../Models/DirectorOfMovieModels/director-of -movie-model");
const Actor = require("./../../Models/ActorsModel/actor-model");

function getAllMovies(){
  return Movie.find().exec();
}

function getOneMovie(_id){
return Movie.findOne({_id}).exec();
}

function addMovie(movie){

  return movie.save();
  }
 async function  updateMovie(movie){
  const info = await  movie.updateOne({_id:movie._id,movie}).exec();
  return info.n ? movie:null;
  }
  async function  deleteMovie(_id){
    return movie.deleteOne({_id}).exec();
    
    }
  
  function getAllMoviesIncludingDirectorAndActors(){
  return  Movie.find().populate("Director","Actor").exec()
  }

module.exports = {
    getAllMovies,
    getOneMovie,
    addMovie,
    updateMovie,
    deleteMovie,
    getAllMoviesIncludingDirectorAndActors
}

