# Notes on the events Module

Anything in node that emits events is an instanceof events.EventEmitter.

## Emitting Events

It's easy to make an EventEmitter emit an event.

    var events = require('events');
    var emitter = new events.EventEmitter();

    emitter.emit('foo');

You can include arguments after the event name, if you need to.  `emit` returns `true` if anyone was listening for the event.

    var isThereAnybodyInThere = emitter.emit('foo', 1, false, 'boo');
    console.log(isThereAnybodyInThere); // false

That's all there is to events, but it doesn't do much without listeners.  

## Adding Listeners

Listeners are functions attached to an EventEmitter that are executed when the EventEmitter emits an event.  Inside an event listener, `this` is the EventEmitter.  Each time a listener is added, `newListener` is emitted by the EventEmitter.

Use these methods to add listeners to EventEmitters.

emitter.addListener(event, listener)
emitter.on(event, listener)
emitter.once(event, listener)

`addListener` and `on` are the same thing.  Listeners added with `once` are removed the first time they are executed.  All three methods are chainable.

```js
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
```

console output

    foo happened
    foo happened
    bar happened
    bar happened
    baz happened

### Too Many Listeners?

You can set a max number of listeners for an EventEmitter.  If you go over, you get a nice warning message.  By default, this value is set to 10.

    var events = require('events');
    var emitter = new events.EventEmitter();
    var i = 10;
    var listener = function () {};

    emitter.setMaxListeners(i - 1);

    while (i) {
        i--;
        emitter.on('foo', listener);
    }

console output

    (node) warning: possible EventEmitter memory leak detected. 10 listeners added. Use emitter.setMaxListeners() to increase limit.
    Trace
        at EventEmitter.addListener (events.js:160:15)
        at Object.<anonymous> (C:\Users\jgreer.IPSWITCH_M\code\node-study\modules\events.js:14:13)
        at Module._compile (module.js:456:26)
        at Object.Module._extensions..js (module.js:474:10)
        at Module.load (module.js:356:32)
        at Function.Module._load (module.js:312:12)
        at Function.Module.runMain (module.js:497:10)
        at startup (node.js:119:16)
        at node.js:906:3

### Who is Listening?

You can find out what listeners are attached like this.

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

console output

    [ [Function: iAmACoolListener], [Function: iAmALameListener] ]
    [ [Function: iAmALameListener] ]
    []




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