
const mongoose = require("mongoose");
const  CountrySchema = mongoose.Schema({
     countryName:String
},{versionKey:false});

const  Country = mongoose.model("Country",CountrySchema,"countries");

module.exports = Country;