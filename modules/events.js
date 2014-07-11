/* jshint node: true */

var events = require('events');
var emitter = new events.EventEmitter();
var listener = function iAmACoolListener () {};
var listener2 = function iAmALameListener () {};

emitter.on('foo', listener);
emitter.on('foo', listener2);
emitter.on('bar', listener2);

console.log(emitter.listeners('foo'));
console.log(emitter.listeners('bar'));
console.log(emitter.listeners('baz'));