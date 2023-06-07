const Country = require("./../../Models/CounteryModel/countery-model");
function  getAllCountries(){

  return Country.find().exec();
}
function  getOneCountry(_id){
  
return Country.findOne({_id}).exec();
}
function  addCountry(country){
  
  return country.save();
  }

  module.exports = {
    getAllCountries,
    getOneCountry,
      addCountry
  }
  