const express = require("express");
const usersLogic = require("../../BusinessLogic/UsersBusnessLogic/usersLogic");
const User = require("./../../Modeles/UsersMongooseModel/userModel");
const router = express.Router();
//get all users
router.use("/", async (request, response) => {
  try {
    const users = await usersLogic.getAllUsers();
    response.json(users);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
//get  user
router.use("/", async (request, response) => {
  try {
    const users = await usersLogic.getOneUser(request.params);
    response.json(users);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
//post/add  new  user
router.post("/", async (request, response) => {
  try {
    const user = new User(request.body);
    /* getAllOnLineUsers().forEach(({socket}) => {
            socket.emit('new-user-event')
        })*/
    response.json(users);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
module.exports = router;
