var io = require('socket.io')({
	transports: ['websocket'],
});
// io change
io.attach(4567);
// io change two
// io change three
// io change hi 5
io.on('connection', function(socket){
	socket.on('update', function(data){
		socket.emit('update', data);
	});
})
