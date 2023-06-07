const User = require("./../../Models/RegularUserModel/user-model");
function getAllUsers(){
  return User.find();
}
function getOneUser(_id){
return User.findOne({_id}).exec();

}
function addUser(user){
  return user.save();
  }

module.exports = {
  getAllUsers,
    getOneUser,
    addUser
}
