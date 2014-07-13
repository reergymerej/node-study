# Notes on the [events Module](http://nodejs.org/api/events.html)

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

Listeners are functions attached to an EventEmitter that are executed when the EventEmitter emits an event.  Inside an event listener, `this` is the EventEmitter.

Use these methods to add listeners to EventEmitters.

emitter.addListener(event, listener)
emitter.on(event, listener)
emitter.once(event, listener)

`addListener` and `on` are the same thing.  Listeners added with `once` are removed the first time they are executed.  All three methods are chainable.

```javascript
var events = require('events');
var emitter = new events.EventEmitter();

var fooHappened = function () {
    console.log('foo happened');
};

var barHappened = function () {
    console.log('bar happened');
};

var bazHappened = function () {
    console.log('baz happened');
};

emitter
    .addListener('foo', fooHappened)
    .on('bar', barHappened)
    .once('baz', bazHappened);

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

Each time a listener is added, `newListener` is emitted by the EventEmitter.

## Who is Listening?

You can find out what listeners are attached with `listeners()`.

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


Maybe you don't want that much detail.  If you only want to know how many listeners are registered for an event on an EventEmitter, use the class method `listenerCount()`.

    var EventEmitter = require('events').EventEmitter;
    var emitter = new EventEmitter();
    var listener = function iAmACoolListener () {};
    var listener2 = function iAmALameListener () {};

    emitter.on('foo', listener);
    emitter.on('foo', listener2);
    emitter.on('bar', listener2);

    console.log(EventEmitter.listenerCount(emitter, 'foo'));
    console.log(EventEmitter.listenerCount(emitter, 'baz'));

console output

    2
    0

### Too Many Listeners?

You can set a max number of listeners for an EventEmitter with `setMaxListeners()`.  If you go over, you get a nice warning message.  By default, this value is set to 10.

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

## Removing Listeners

You can remove a listener with `removeListener()`.  Note that it is chainable, which is cool, but it doesn't tell you if the removal was successful.  When an event **is** successfully removed, the EventEmitter emits the `removeEvent` event.

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

console output

    3
    removed foo function iAmACoolListener() {}
    removed foo function iAmALameListener() {}
    1
    removed foo function () {}
    0

You can remove all listeners for an event with `removeAllListeners(event)`, but that's a little heavy-handed, especially if you didn't create the EventEmitter.

## That's It

Now you're an expert on Node's [events module](http://nodejs.org/api/events.html).