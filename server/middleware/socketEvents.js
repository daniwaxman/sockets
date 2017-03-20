
function socketEvents(io) {
  io.on('connection', function(socket) {
    console.log('a client has connected');
  });
}
module.exports = socketEvents;