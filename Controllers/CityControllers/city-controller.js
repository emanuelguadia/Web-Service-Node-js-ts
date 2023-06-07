const { response } = require("express");
const { request } = require("express");
const express = require("express");
const router = express.Router();
const citiesBusinessLogic = require("./../../BusinessLogics/CityBusinessLogics/city-businessLogics");
const City = require("./../../Models/CityModel/city-model");
router.get("/", async(request,response)=>{
    try{
        const cities = await citiesBusinessLogic.getAllCities();
        return response.json(cities);
    }
    catch(err)
    {
      response.status(500).send(err.message);
    }

});
router.get("/:_id",async (request,response)=>{
    try{
        const _id = request.params._id;
        const foundCity = await citiesBusinessLogic.getOneCity(_id);
        
        if(!foundCity){
            response.sendStatus(404);
            return
        }
     response.json(foundCity);

    }catch(err){
        
    }
   
});
router.post("/", async(request,response)=>{
    try{
        const city = new City(request.body);
        const addedCity = await citiesBusinessLogic.addCity(city);
        response.status(201).json(addedCity);
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