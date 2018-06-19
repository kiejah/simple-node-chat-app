// SERVR!!!!!!!!!!!!!!!!!!
const path = require('path');
const socketIO= require('socket.io');
const http = require('http')
const express= require('express');

const publicPath = path.join(__dirname,'../public');

const port = process.env.PORT || 3000;


var app= express();
var server= http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection',function(socket){
	console.log('New User connected');

	socket.emit('newMessage',{
		'from':"jon@gdhg.com",
		'text':" hey from server",
		'createdAt':123123
	});
    //New Message listner from index.js
	socket.on('createMessage',function(newMsg) {
		console.log("created Message",newMsg);
	});

	socket.on('disconnect',function(){
		console.log('client disconnected');
	});
});
server.listen(port,function(){
	console.log(`Server is up on ports ${port}`);
});	



