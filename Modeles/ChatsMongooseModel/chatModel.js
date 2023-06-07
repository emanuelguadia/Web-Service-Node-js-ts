const  mongoose = require("mongoose");
const User =require("../UsersModel/UserModel");
const ChatSchema = mongoose.Schema({
    senderMessages:User,
    messagesReceiver:User,
    message:String,
     date:String
});





// class Chat {
//     constructor(senderMessages,messagesReceiver,message,date){
//         this.senderMessages = senderMessages;
//         this.messagesReceiver =messagesReceiver;
//         this.message =message;
//         this.date =date;

//     }      
// }
//module.exports = Chat;