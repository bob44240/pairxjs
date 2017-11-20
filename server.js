var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require('path');

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/wizard', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(8080, function () {
    console.log('Server is listening on localhost:8080');
});