
/*const io=require("./..server")
io.on('connection',function(socket){console.log('good')});*/


module.exports = (socket) => {
  try {
    console.log("Connected");
    socket.on("code", (data, callback) => {
      socket.broadcast.emit("code", data);
    });
  } catch (ex) {
    console.log(ex.message);
  }
};
//mycode
/*const io=require('socket.io')(4000,{cors:{origin:"*"}})
const users={};
io.on('connection',socket=>{
    socket.on('new-user-joined',name=>{
        console.log("New user",name);
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    });
    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
    });
   
});*/
//mycode
/*
io.on('connection',socket=>{
  socket.on('new-user-joined',name=>{
      console.log("New user",name);
      users[socket.id]=name;
      socket.broadcast.emit('user-joined',name);
  })});*/
  /*var socket =io();
socket.on('connect',function(data){alert("hellooo")});*/

