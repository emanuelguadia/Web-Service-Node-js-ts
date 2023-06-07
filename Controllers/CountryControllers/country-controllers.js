
const { response } = require("express");
const { request } = require("express");
const express = require("express");
const router = express.Router();
const CountryBusinessLogics = require("./../../BusinessLogics/CounteryBusinessLogics/countery-businessLogics");
const Country = require("./../../Models/CounteryModel/countery-model");
router.get("/", async(request,response)=>{

    try{
        const  countries = await CountryBusinessLogics.getAllCountries();
        return response.json(countries);
    }
    catch(err)
    {
        response.status(500).send(err.message);
    }

});
router.get("/:_id",async (request,response)=>{

    try{
        const _id = request.params._id;
        const foundCountry = await CountryBusinessLogics.getOneCountry(_id);
        if(!foundCountry){
            response.sendStatus(404);
            return
        }
     response.json(foundCountry);

    }
    catch(err){
        
    }
   
});
router.post("/", async(request,response)=>{
    try{
        const country = new  Country(request.body);
        const addedCountry = await CountryBusinessLogics.addCountry(country);
        response.status(201).json(addedCountry);
        }
       catch(err){
        response.status(500).send(err.message);
    }
});
// router.put("/",(request,response)=>{

// });
// router.patch("/",(request,response)=>{

// });
// router.delete("/",(request,response)=>{

// });

module.exports = router;
