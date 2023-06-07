const mongoose = require("mongoose");
const MoviesSchema = mongoose.Schema({
    nameOfTheMovie:String,
    videoOfMovie:{
        data:Buffer,
        contentType:String
    },
    PosterWithImageOfTheMovie:{
        data:Buffer,
        contentType:String
    },
    aTitleWithTheNameOfTheMovie:String,
    aShortDescriptionOfTheMoviePlot:String,
    generalInformation:String,
    yearOfRelease:String,
    directorOfTheMovie:String,
    mainActorOfMovie:String,
    durationTime:String,
    // directorOfTheMovieId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Director",
    //     localField:"directorOfTheMovie",
    //     foreignField:"_id"
    // },
    // fourMainActorsId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Actor",
    //      localField:"mainActorOfMovie",
    //      foreignField:"_id"
    // },
   
},{versionKey:false,toJSON:{virtuals:true},id:false});

// MoviesSchema.virtual("Actor",{
//     ref:"Actor",
//     localField:"fourMainActorsId",
//     foreignField:"_id"
// });
// MoviesSchema.virtual("Director",{
//     ref:"Director",
//     localField:"directorOfTheMovieId",
//     foreignField:"_id",
// });
const Movie = mongoose.model("Movie",MoviesSchema,"movies");
module.exports = Movie;
