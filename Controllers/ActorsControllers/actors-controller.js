const { response } = require("express");
const { request } = require("express");
const express = require("express");
const router = express.Router();
const actorsBusinessLogic = require("./../../BusinessLogics/ActorsBusinessLogics/actors-businessLogics");
const Actor = require("./../../Models/ActorsModel/actor-model");
router.get("/", async(request,response)=>{

    try{
        const actors = await actorsBusinessLogic.getAllActors();
        return response.json(actor);
    }
    catch(err)
    {
        response.status(500).send(err.message);
    }

});
router.get("/:_id",async (request,response)=>{

    try{
        const _id = request.params._id;
        const foundActor = await actorsBusinessLogic.getOneActor(_id);
        if(!foundActor){
            response.sendStatus(404);
            return
        }
     response.json(foundActor);

    }
    catch(err){
        
    }
   
});
router.post("/", async(request,response)=>{
   
    try{
        const actor = new  Actor(request.body);
        actor.photoOfUser.data = request.files.photoOfUser.data;
        actor.photoOfUser.contentType = request.files.photoOfUser.mimetype;
        const addedActor = await actorsBusinessLogic.addActor(actor);
        response.status(201).json(addedActor);
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
