const  mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    userName:String,
    password:String

});

const User =mongoose.model("User",UserSchema,"users");
module.exports = User;

// class Chat {
//     constructor(senderMessages,messagesReceiver,message,date){
//         this.senderMessages = senderMessages;
//         this.messagesReceiver =messagesReceiver;
//         this.message =message;
//         this.date =date;

//     }      
// }
//module.exports = Chat;