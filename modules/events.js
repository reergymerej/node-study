/* jshint node: true */

var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var listener = function iAmACoolListener () {};
var listener2 = function iAmALameListener () {};

// add some listeners
emitter
    .on('foo', listener)
    .on('foo', listener2)

    // Don't declare listeners like this because it's hard
    // to remove them.
    .on('foo', function () {})

    // log when listeners are removed
    .on('removeListener', function (event, listener) {
        console.log('removed', event, listener);
    });

// How many foo listeners are there?
console.log(EventEmitter.listenerCount(emitter, 'foo'));

// Remove some listeners.
emitter
    .removeListener('foo', listener)
    .removeListener('foo', listener2)
    .removeListener('foo', function () {});

// Hmm... We can't remove the last one because we declared the
// listener inline.
console.log(EventEmitter.listenerCount(emitter, 'foo'));

// We can get a reference to it, but it's ugly.
var listeners = emitter.listeners('foo');
emitter.removeListener('foo', listeners[0]);

// Now it's gone.
console.log(EventEmitter.listenerCount(emitter, 'foo'));

// console.log(emitter.listeners('foo'));
// console.log(emitter.listeners('bar'));
// console.log(emitter.listeners('baz'));

/*

emitter.emit(event, [arg1], [arg2], [...])
emitter.addListener(event, listener)
emitter.on(event, listener)
emitter.once(event, listener)
Event: 'newListener'
emitter.setMaxListeners(n)
emitter.listeners(event)
Class Method: EventEmitter.listenerCount(emitter, event)
================================================
emitter.removeListener(event, listener)
emitter.removeAllListeners([event])
Event: 'removeListener'
*/
