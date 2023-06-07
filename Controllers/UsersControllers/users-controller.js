const { response } = require("express");
const { request } = require("express");
const express = require("express");
const router = express.Router();
const usersBusinessLogic = require("./../../BusinessLogics/UsersBusinessLogics/users-businessLogics");
const User = require("./../../Models/RegularUserModel/user-model");

router.get("/", async(request,response)=>{
  try{
        const users = await usersBusinessLogic.getAllUsers();
        return response.json(users);
    }
    catch(err)
    {
        response.status(500).send(err.message);
    }
});
router.get("/:_id",async (request,response)=>{
    try{
        const _id = request.params._id;
        const foundUser = await usersBusinessLogic.getOneUser(_id);
        if(!foundUser){
            response.sendStatus(404);
            return
        }
     response.json(foundUser);

    }
    catch(err){ 
    }
   
});
router.post("/", async(request,response)=>{
    console.log(request.body);
    try{
       // const photoOfUser = {data: request.files.photoOfUser.data, contentType: request.files.photoOfUser.mimetype };
        const user = new User(request.body);
        user.photoOfUser.data = request.files.photoOfUser.data;
        user.photoOfUser.contentType= request.files.photoOfUser.mimetype;
        const addedUser = await usersBusinessLogic.addUser(user);
        response.status(201).json(addedUser);
        }
       catch(err){
        response.status(500).send(err.message);
    }
});


module.exports = router;
