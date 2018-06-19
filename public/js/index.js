var socket= io();

socket.on('connect',function(){
	console.log('connected to the server');

	socket.emit('createMessage',{
		'from':"eli@gdhg.com",
		'text':"my assigment"
	});
})
socket.on('disconnect',function(){
	console.log('Disconnected from the server');
})
socket.on('newMessage',function(msg) {
	console.log("newMessage",msg);
});