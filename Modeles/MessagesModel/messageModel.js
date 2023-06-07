

const mongoose =require("mongoose");
const MessageSchema = mongoose.Schema({
    message:String
});
const Message =mongoose.model("Message",MessageSchema,"messages");
module.exports  = Message;
