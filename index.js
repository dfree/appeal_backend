var io = require('socket.io')({
	transports: ['websocket'],
});

io.attach(4567);

io.on('connection', function(socket){
	socket.on('update', function(data){
		socket.emit('update', data);
	});
})
