const mongoose = require("mongoose");
const DirectorSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    birthDate:String,
    country:String,
    userName:String,
    password:String,
    countryId:{type:mongoose.Schema.Types.ObjectId,ref:"Country"},
    city:String,
    cityId:{type:mongoose.Schema.Types.ObjectId,ref:"City"},
    photoOfUser:{
        data:Buffer,
        contentType:String
    },
},{versionKey:false,toJSON:{virtuals:true},id:false});
DirectorSchema.virtual("Country",{
    ref:"Country",
    localField:"countryId",
    foreignField:"_id"
});
DirectorSchema.virtual("City",{
    ref:"City",
    localField:"cityId",
    foreignField:"_id"
});

const Director = mongoose.model("Director",DirectorSchema,"directors");

module.exports = Director;


