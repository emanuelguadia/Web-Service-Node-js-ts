
const mongoose = require("mongoose");
const  CitySchema = mongoose.Schema({ 
    cityName:String,
    citySize:Number,
    countryName:String,
   countryId:{type:mongoose.Schema.Types.ObjectId, ref:"Country"},
},{versionKey:false,toJSON:{virtuals:true }},{id:false});

CitySchema.virtual("Country",{
   // ref:"Country",
    //localField:countryId,
    foreignField:"_id",
    justOne:true
});
const  City = mongoose.model("City",CitySchema,"Cities");

module.exports = City;