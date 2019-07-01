var express = require('express');
var http = require('http');
var twitter = require('twitter');
var config = require('./utils/config');
var streamHandler = require('./utils/streamHandler');
var donealready = 0;

var app = express();
var port = process.env.PORT || 8080;

app.disable('etag');

var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

var twit = new twitter(config.twitter);

var io = require('socket.io').listen(server);

var keywords = Object.keys(config.keywords).map(function(keyword){
  return config.keywords[keyword];
}).join(', ');

io.sockets.on('connection', function(socket){
  console.log('New client connected');
  var countdown = config.countdown;

  setInterval(function() {
    if (donealready>=5&&countdown > 0) {
      countdown--;
      io.sockets.emit('timer', countdown);
    }
    else if (countdown>0) {
      io.sockets.emit('timer',0-5-donealready)
      donealready++;
    }

  }, 1000);
});

twit.stream('statuses/filter',{ track: keywords}, function(stream){
  streamHandler(stream, io);
});
