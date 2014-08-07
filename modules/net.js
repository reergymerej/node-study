// notes on the net module
/* jshint node: true */
var net = require('net');

// net.Server
var server = net.createServer();

var port = 0;
var host = 'localhost';

var onListening = function () {
    var onClose = function () {
        console.log('the server is closed', arguments);
    };

    var address = server.address();

    console.log('server is listening', arguments);
    console.log('curl http://%s:%d', address.address, address.port);
    
    setTimeout(function () {
        server.close(onClose);
    }, 10000);
};

var onConnection = function (socket) {
    var data = '';

    var onData = function (buffer) {
        data += buffer.toString();
    };

    var onEnd = function () {
        console.log('connection ended');
        console.log(data);
    };

    socket.setEncoding('utf8');
    socket.on('data', onData);
    socket.on('end', onEnd);
};

server.on('connection', onConnection);
server.on('listening', onListening);

server.listen(port, host);