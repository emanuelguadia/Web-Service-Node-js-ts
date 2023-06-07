
const Actor = require("./../../Models/ActorsModel/actor-model");

function getAllActors(){

  return Actor.find().exec()
}

function getOneActor(_id){

return Actor.findOne({_id}).exec();

}
function addActor(actor){
  
  return actor.save();
  }

module.exports = {
  getAllActors,
  getOneActor,
    addActor
}
