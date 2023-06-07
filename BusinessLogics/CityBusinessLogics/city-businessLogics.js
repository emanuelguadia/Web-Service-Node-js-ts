const City = require("./../../Models/CityModel/city-model");
function getAllCities(){

    return City.find().exec();
  }
  function getOneCity(_id){
    
  return City.findOne({_id}).exec();
  }
  function addCity(city){
    
    return city.save();
    }
  
  module.exports = {
    getAllCities,
    getOneCity,
    addCity
  }