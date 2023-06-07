const { response } = require("express");
const { request } = require("express");
const express = require("express");
const router = express.Router();
const directorOfBusinessLogics = require("../../BusinessLogics/DirectorOfBusinessLogics/directorOf-businessLogics");
 const Director = require("./../../Models/DirectorOfMovieModels/Dirctor-models");
router.get("/", async(request,response)=>{
    try{
          const directors = await directorOfBusinessLogics.getAllDirectors();
          return response.json(directors);
      }
      catch(err)
      {
          response.status(500).send(err.message);
      }
  });
  router.get("/:_id",async (request,response)=>{
  
      try{
          const _id = request.params._id;
          const foundDirector  = await directorOfBusinessLogics.getOneDirector(_id);
          if(!foundDirector){
              response.sendStatus(404);
              return
          }
       response.json(foundDirector);
  
      }
      catch(err){ 
      }
     
  });
  router.post("/", async(request,response)=>{
      console.log(request.body);
      try{
          const director = new Director(request.body);
          director.photoOfUser.data = request.files.photoOfUser.data;
          director.photoOfUser.contentType = request.files.photoOfUser.mimetype;
          const addedDirector = await directorOfBusinessLogics.addDirector(director);
          const token = generateAccessToken({director:addedDirector});//req.body.username 
          response.json(token);
         //response.status(201).json(addedDirector);
          }
         catch(err){
          response.status(500).send(err.message);
      }
  });
  
function generateAccessToken(username) {
  return jwt.sign(director, process.env.TOKEN_SECRET,{expiresIn:'1800s' });
}
  
  module.exports = router;
  