# Notes on the events module

Anything in node that emits events is an instanceof events.EventEmitter.

## Emitting Events

It's easy to make an EventEmitter emit an event.

    var events = require('events');
    var emitter = new events.EventEmitter();

    emitter.emit('foo');

You can include arguments after the event name, if you need to.  That's it, but it doesn't do much without listeners.  `emit` returns `true` if anyone was listening for the event.


## Adding Listeners

Listeners are functions attached to an EventEmitter that are executed when the EventEmitter emits an event.  Inside an event listener, `this` is the EventEmitter.  Each time a listener is added, `newListener` is emitted by the EventEmitter.

Use these methods to add listeners to EventEmitters.

emitter.addListener(event, listener)
emitter.on(event, listener)
emitter.once(event, listener)

`addListener` and `on` are the same thing.  Listeners added with `once` are removed the first time they are executed.  All three methods are chainable.

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

## Class Methods

### listenerCount
EventEmitter.listenerCount(emitter, event)



## Notes









## Questions

How are the events used?


Class Method: EventEmitter.listenerCount(emitter, event)

emitter.emit(event, [arg1], [arg2], [...])
emitter.listeners(event)

emitter.addListener(event, listener)
emitter.on(event, listener)
emitter.once(event, listener)

emitter.removeAllListeners([event])
emitter.removeListener(event, listener)

emitter.setMaxListeners(n)
Event: 'newListener'
Event: 'removeListener'