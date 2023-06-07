const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    country:String,
    countryId:{type:mongoose.Schema.Types.ObjectId,ref:"Country"},
    city:String,
    cityId:{type:mongoose.Schema.Types.ObjectId,ref:"City"},
    birthDate:String,
    photoOfUser:{
        data:Buffer,
        contentType:String
    }
});
UserSchema.virtual("Country",{
    ref:"Country",
    localField:"countryId",
    foreignField:"_id"
});
UserSchema.virtual("City",{
    ref:"City",
    localField:"cityId",
    foreignField:"_id"
});

const User = mongoose.model("User",UserSchema,"users");

module.exports = User;