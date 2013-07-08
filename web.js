var express = require('express');
var fs = require('fs');
var buf = require('buffer');

var app = express.createServer(express.logger());

var msg_buf = fs.readFileSync("index.html");
var msg_str = msg_buf.toString();


app.get('/', function(request, response) {
  response.send(msg_str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
