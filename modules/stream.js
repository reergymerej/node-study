/* jshint node: true */

// notes on stream
// http://nodejs.org/api/stream.html

// not global
var stream = require('stream');
// console.log(stream);

/*
Readable
events: 
    readable - a chunk is ready to read
    
    data - another chunk is ready - adding this listener switches the stream to
    "flowing" mode

    end - no more data to read from this stream - This only fires after you consume the data.

    close - the stream provider closed - not all streams will emit this

    error - problem receiving stream data

methods:
    read - use this for non-flowing streams

    setEncoding - use this instead of reading from the buffer with toString

    resume - switches to flowing mode

    pause - stop the stream from emitting data events - Data will still be kept in the buffer,
    but you won't be notified.  This will switch a stream to flowing mode.  Use resume to resume.

    pipe - write to a Writable Stream as data is read into this Readable Stream

    unpipe - undo piping

    unshift - unshift some data to the beginning of the stream

    wrap - polyfill to make old node streams new readable streams

=======================================

Writable

methods:
    write - write a chunk - the callback indicates if you should write again.  You can ignore
    it, but you shouldn't.

    end - finish writing to the stream and seal it up



events:
    drain - all data in the internal buffer has been written and the stream is ready to write

    finish - after 'end' event and all data in buffer has been flushed

    pipe - something is piping to this stream

    unpipe - something unpiped

    error - error writing/piping

=======================================

Duplex - is both Readable and Writable

Transform - Duplex, but the input is computed based on the input
*/

var util = require('util');


// an example readable stream
var Readable = stream.Readable;

var Counter = function (config) {
    // call the super
    Readable.call(this, config);

    this.index = 0;
    this.max = 100;
};

// extend Readable
util.inherits(Counter, Readable);

// implement _read
Counter.prototype._read = function () {
    var i = this.index++;

    if (i > this.max) {
        // push null if we don't have any more to read
        this.push(null);
    } else {
        this.push(new Buffer(i + '', 'ascii'));
    }
};


var counter = new Counter();

var read = '';
// non-flowing
counter.setEncoding('ascii');
counter.on('readable', function () {
    console.log('the stream is readable');
    var readData = this.read(1);
    while (readData !== null) {
        read += readData;
    }

    console.log(read);
});