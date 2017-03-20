const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, '../public');
var http = require('http');
const io_logic = require('./middleware/socketEvents');

var app = express()
var server = require('http').createServer(app)

var PORT = process.env.PORT || '80';

app.use(express.static(publicPath));

var io = io_logic(server);
server.listen(PORT, () => {
  console.log('Started on port : ' + PORT);
});

module.exports = {
  app
};