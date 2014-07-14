# stream

http://nodejs.org/api/stream.html

This module is global, so you don't need to require it.


What are streams?
    data that can be read or written in chunks

a readable stream is a source of data
    https://github.com/joyent/node/blob/master/lib/_stream_readable.js

    modes
        flowing - data is read ASAP
        non-flowing - you must read the data with `stream.read()`

    events
        When a readable stream has a chunk for you to read, it will emit a `readable` event.

        When there is no more data to read, `end` will be emitted.

        When the resource providing data has been closed, the stream will emit `close`.  Not all streams emit this.

        If there was an error receiving data, the stream will emit `error`.

    methods
        read([size])
