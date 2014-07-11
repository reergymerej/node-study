/* jshint node: true */

var events = require('events');
var emitter = new events.EventEmitter();

emitter.addListener('foo', function () {
    console.log('foo happened');
})
.on('bar', function () {
    console.log('bar happened');
})
.once('baz', function () {
    console.log('baz happened');
});

emitter.emit('foo');
emitter.emit('foo');
emitter.emit('bar');
emitter.emit('bar');
emitter.emit('baz');
emitter.emit('baz');