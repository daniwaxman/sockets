const express = require('express');
const path    = require('path');
const publicPath = path.join(__dirname, '../public');
var http   = require('http');
var app    = express()
var server = require('http').createServer(app)
var io     = require('socket.io')(server);

let connectedUsers = {};

require('./middleware/socketEvents')(io, connectedUsers);

var PORT = process.env.PORT || '80';

app.use(express.static(publicPath));

server.listen(PORT, () => {
  console.log('Started on port : ' + PORT);
});

module.exports = {
  app
};
