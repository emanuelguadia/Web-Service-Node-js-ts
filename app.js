global.config = require("./config.json");
const express = require("express");
const io = require("socket.io");
const cors = require("cors");
require("./DataAccessLayer/UsersDataAccessLayer/usersDal");
const userController = require("./Controllers/UsersConteroller/userController");
const mapClientsSocketWithPassword = require("./Modeles/MapClientsSocketModel/MapsCleintsSocketModel");
const PORT = 5000;
const expressServer = express();
expressServer .use(express.json());
expressServer.use(express.static(__dirname));
//"listening on http:localhost:/5000"
expressServer.use("/",userController);
const listener = expressServer.listen(PORT, () => {
  setInterval(() => {
    console.log("app is up......");
  }, 500);
});
//"listening on listener
const socketServer = io(listener, {
  cors: {
    origin: "http://localhost:3000",
  }
});

//1...
const {getAllOnLineUsers} = require("./AllUsersSocketInArryCollection/OnLineAndOfLineArrySocketsCollection/OnLineArrySocketsCollection/OnLineArrySocketCollection");
const getAllArrayOfLineUsers = require("./AllUsersSocketInArryCollection/OnLineAndOfLineArrySocketsCollection/OfLineArrySocketsCollection/OfLineArrySocketsCollection");
//const { json } = require("express");
//------------------------------------------------------------------------------------------------------
socketServer.sockets.on("connection", socket => {
  console.log('socket initiated!')
  const creatCurrentUser = new MokUser();
  const timeToStartTheFunctionSetTimeOut = 15;
  //First Here sever send  messages to  client to say the request connection is success .... 
  setTimeout(() => {
    socket.emit("Message-from-your-server-the-request-connection-is-success-correctly", "The request connection is success correctly");

  }, timeToStartTheFunctionSetTimeOut);
  //=======================================================================================================
  //Second when the client connected success correctly pushing the clients socket, userName and password in to OnLineArraySocketsCollection variable
  //The purpose is to  create comprised of clients Who Connect so...>
  //Tack the user object from the client after that assigned the users details in the object new MokUser();
  const mapClientsSocketWithPassword = new MapClientsSocketWithPassword(socket, creatCurrentUser);
  socket.on("This-is-the-user-details", user => {
    creatCurrentUser.userName = user.userName;
    creatCurrentUser.password = user.password;
    setTimeout(() => {
      //First check user If user found in mongoose Db before saving the  user mongoose Db
      const checkUserIfUserFoundInDb = userLogic.getOneUserWithPassword(user.password);
      if (checkUserIfUserFoundInDb !== null) { //comprised of clients who connect to a central application server RAM
        getAllOnLineUsers().push(checkUserIfUserFoundInDb);// push the client socket in an arr....
      }
      else {
        //Means the client not found in mongoose Db so
        const mapClientsSocketWithPassword = new MapClientsSocketWithPassword(socket, creatCurrentUser);
        //1..comprised of clients who connect to a central application server RAM
        getAllOnLineUsers.getAllOnLineUsers.push(mapClientsSocketWithPassword);// push the client socket in an arr....
        //2..comprised of clients who connect to a central mongoose Db
        setTimeout(() => {
          userLogic.AddUser(mapClientsSocketWithPassword);
        }, timeToStartTheFunctionSetTimeOut);
      }

    });
  }, timeToStartTheFunctionSetTimeOut);

  //===========================================================================
  //Push messages from the server to all clients to tell all this clients this client is connected now .  
  setTimeout(() => {
    socketServer.sockets.emit("Messages-from-the-server-to-tell-all-clients-this-client-is-connected-now", creatCurrentUser); //this sending messages to all clients  ....
  }, timeToStartTheFunctionSetTimeOut);
  //After holding clients socket, userName and password means create comprised of clients Who Connected the program next sep is 
  //	Push messages from the server to all clients to tell them the all new on-line users  and the all new  off-line users
  setTimeout(() => {
    //"Here the server send to all clients that found onLine connected the hole users history to up date  clients and there status "
    const mapClientsSocketWithPassword = getAllOnLineUsers();
    //const getCurrentOnLineUsers = mapClientsSocketWithPassword.map(takMapClientsSocketAndGetMokUsers=>{
    //   takMapClientsSocketAndGetMokUsers.user;
    // });       
    const onLineUsers = JSON.stringify(mapClientsSocketWithPassword);
    socketServer.sockets.emit("Message-from-your-server-to-up-date-clients-and-there-status", onLineUsers);
  }, timeToStartTheFunctionSetTimeOut);

  //===============================================================================
  //listen to "messages-client-when-this-client-is-want-chat-this-client-personal"
  //And push messages from the server to  client when client  is want chat  this client
  setTimeout(() => {
    socketServer.sockets.on("messages-client-when-this-client-is-want-chat-this-client-personal", messageFromClient => {
      //note that the messageFromClient is type of person means type of User the obj has the userName and password so ..
      //first here finding the the client in the in  OnLineArraySocketsCollection variable
      const getUserToChatPersonal = getAllOnLineUsers().find(getUserToChat => getUserToChat.password == creatCurrentUser.password);

      //The purpose is here  take the user object to  json object and then send to client  found in  OnLineArraySocketsCollection variable
      getUserToChatPersonal.socket.emit("The-user-want-chat-personal", JSON.parse(getAllArrayOfLineUsers.user));

    });

  }, timeToStartTheFunctionSetTimeOut);

  //=============================================================================     
  //2. Listening to  message From Client to send Massage to all clients  
  socket.on("Massage-from-client-want-to-send-chat-all-client", massage => {
    setTimeout(() => {
      socketServer.sockets.emit(massage);

    }, timeToStartTheFunctionSetTimeOut);
  });
  // Push messages from the server To all client all this clients   are  Disconnected  in this time
  socket.on("Disconnect", message => {
    //+In this step when the client is Disconnected pushing the socket in to OfLineArraySocketsCollection variable to save the history to tell others his statues
    const mapClientsSocketWithPassword = getAllArrayOfLineUsers.getAllArrayOfLineUsers(socket, mapClientsSocketWithPassword);
    setTimeout(() => {
      //"Here the server send to all clients that found all clients on offLine and up date  clients and there status whe client Disconnect  "
      const getCurrentOffLineUsers = mapClientsSocketWithPassword.map(takMapClientsSocketAndGetMokUsers => {
        takMapClientsSocketAndGetMokUsers.user;
      });
      const offLineUsers = JSON.parse(getCurrentOffLineUsers);
      socketServer.sockets.emit("Message-from_server-this-Client-is-disconnected-now-so-you-are-total:", + socketServer.engine.listenerCount);
      //socketServer.sockets.emit("Message-from_server-update-clients-and-there-status-when-client-disconnected",offLineUsers);
    }, timeToStartTheFunctionSetTimeOut);

  });
});


