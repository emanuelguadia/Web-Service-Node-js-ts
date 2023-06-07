const User = require("../../Modeles/UsersMongooseModel/userModel");
function getAllUsers() {
  return User.find()({}).exec();
}

function getOneUser(_id) {
  return User.findOne({ _id }).exec();
}
function getOneUserWithPassword(Password) {
  const oneUserWithPassword = getAllUsers()
    .find((user) => user.Password == Password)
    .exec();
  return oneUserWithPassword;
}
function AddUser(user) {
  return user.save();
}
function updateUser(user) {
  return user.updateOne();
}
module.exports = {
  getAllUsers,
  getOneUser,
  AddUser,
  updateUser,
  getOneUserWithPassword,
};
