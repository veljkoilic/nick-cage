const express = require('express');
const app = express();
/*eslint-disable*/
const server = app.listen(3000, ()=>{
    console.log('Server running on 3000');
})

const io = require('socket.io')(server)

// var nsp = io.of('/chat');

io.on('connection', function(socket) {
    // console.log("New user has joined")
    socket.on('sendLocation', function(data) {
        socket.broadcast.emit('click', {socketid: socket.id, coordinates: data});
    });
    socket.on('disconnect', function() {
        console.log("User has lef the room");
       });
});

