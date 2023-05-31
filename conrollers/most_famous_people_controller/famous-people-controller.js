const express = require("express");
const router = express.Router();
const mostFamousPeopleLogic = require('../../business_logics/most_famous_people_logic/most_famous_people_logic');
//http://localhost:501/api/famous-people
router.get("/",(request,response)=>{
 const allMostFamousPeople = mostFamousPeopleLogic.getAllMostFamousPeople()
 if(allMostFamousPeople){
    response.json(allMostFamousPeople);
 }
});

//http://localhost:501/api/famous-people/:famousPeopleID
router.get("/:famousPeopleID",(request,response)=>{
    const id = +request.params.famousPeopleID;
    const mostFamousPeopleFound = mostFamousPeopleLogic.getOneMostFamousPeople(id);
    if(mostFamousPeopleFound){
    response.json(mostFamousPeopleFound);
}

});
module.exports =router;