class MapClientsSocketWithPassword{
 //The purpose of this class is to hold the client  name,...password,.. and his socket when the client connected
 constructor(socket,user){
    this.user = user;
    this.socket = socket;
}
}
module.exports= MapClientsSocketWithPassword ;