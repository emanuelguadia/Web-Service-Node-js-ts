const Director = require("./../../Models/ActorsModel/actor-model");
function  getAllDirectors(){

  return Director.find().exec();
}
function  getOneDirector(_id){
  
return Director.findOne({_id}).exec();
}
function addDirector(director){
  
  return director.save();
  }
 

  module.exports = {
    getAllDirectors,
    getOneDirector,
      addDirector
  }
  