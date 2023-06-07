const mongoose = require("mongoose");
const ActorSchema = mongoose.Schema({
        firstName:String,
        lastName:String,
        age:Number,
        birthDate:String,
        photoOfUser:{
                data:Buffer,
                contentType:String
            },
        country:String,
        city:String,
        countryId:{type:mongoose.Schema.Types.ObjectId,ref:"Country"},
        cityId:{type:mongoose.Schema.Types.ObjectId,ref:"City"}
},{versionKey:false,toJSON:{virtuals:true},id:false});
ActorSchema.virtual("Country",{
        ref:"Country",
        localField:"countryId",
        foreignField:"_id"
});
ActorSchema.virtual("City",{
        ref:"City",
        localField:"cityId",
        foreignField:"_id"
});
const Actor = mongoose.model("Actor",ActorSchema,"actors");

module.exports = Actor;








// class Actor implements User{
//     _id: string;
//     firstName: string;
//     lastName: string;
//     age: number;
//     birthDate: string;
//     photoOfUser:FileList;
//     country:Country;
//     city: City;
//     public constructor(user:User){
//         this._id=user._id;
//         this.firstName=user.firstName;
//         this.lastName=user.lastName;
//         this.age =user.age;
//         this.birthDate=user.birthDate;
//         this.photoOfUser=user.photoOfUser;
//         this.country=user.country;
//         this.city=user.city;
//     }
    
    
// }
