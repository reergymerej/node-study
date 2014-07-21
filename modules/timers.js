// notes on timers

// This is all global stuff, not need to require.

// setTimeout
var timer = setTimeout(function (a, b, c) {
    console.log(arguments);
}, 1000, 3, 4, 5);

// Unref allows the program to shutdown if this is the
// only thing it's waiting for.  When it's ready, the
// event loop will wake up and handle it.
timer.unref();
// timer.ref();

// clearTimeout(timer);