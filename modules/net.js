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

    parseHeader(socket, function (err, header, stream) {
        console.log('found header', header, stream);
    });

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

// Pull off a header delimited by \n\n
// use unshift() if we get too much
// Call the callback with (error, header, stream)
var parseHeader = function (stream, callback) {
    var StringDecoder = require('string_decoder').StringDecoder;

    var decoder = new StringDecoder('utf8');
    var header = '';

    var onReadable = function () {
        var chunk;
        var str;
        var split;
        var remaining;
        var buf;
        console.log('hey, it is readable!');

        while (null !== (chunk = stream.read())) {
            str = decoder.write(chunk);
            if (str.match(/\n\n/)) {
                // found the header boundary
                split = str.split(/\n\n/);
                header += split.shift();
                remaining = split.join('\n\n');
                buf = new Buffer(remaining, 'utf8');
                if (buf.length) {
                    stream.unshift(buf);
                }
                stream.removeListener('error', callback);
                stream.removeListener('readable', onReadable);
                // now the body of the message can be read from the stream.
                callback(null, header, stream);
            } else {
                // still reading the header.
                header += str;
            }
        }
    };

    stream.on('error', callback);
    stream.on('readable', onReadable);
};
