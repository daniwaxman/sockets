module.exports = function(io, connectedUsers) {
  io.on('connection', (socket) => {
    console.log('connected: ', socket.id)

    connectedUsers[socket.id] = `user ${Object.keys(connectedUsers).length}`;
    console.log(connectedUsers);

    // socket.on('message', (message) => {
    //   socket.emit('ditConsumer', message.value);
    //   console.log('from console', message.value);
    // });

    socket.on('disconnect', () => {
      delete connectedUsers[socket.id];
      // io.emit('user disconnected');
    });
  });
};
