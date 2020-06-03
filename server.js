"use strict";
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public"));
});

io.on("connection", (socket) => {
  console.log("connected");
socket.on('chat',(msg)=>{
io.emit('msg',msg);
})
socket.broadcast.emit('msg', `A user has joined the chat`)
socket.on('disconnect',()=>{
  io.emit('msg','user disconnected');
})

});

server.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
