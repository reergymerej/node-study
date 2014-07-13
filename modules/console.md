# console

The [console module](http://nodejs.org/api/console.html) is straightforward.  As with anything, there's bound to be something of interest if we look closely.

## stdout

**console.log([data], [...])**
**console.info([data], [...])**

Print to **stdout**.  You can use [printf](http://www.cplusplus.com/reference/cstdio/printf/) formatting.

**console.dir(obj)**

Logs result of [util.inspect](http://nodejs.org/api/util.html#util_util_inspect_object_options).

### Time

**console.time(label)**
**console.timeEnd(label)**

These are cool methods for timing how long something takes.

    console.time('foo');

    setTimeout(function () {
      console.timeEnd('foo');
    }, 300);

    // prints "foo: 303ms"

## stderr

**console.error([data], [...])**
**console.warn([data], [...])**

Print messages, like `log` and `info`, but to **stderr**.

**console.trace(label)**

Prints a stack trace.

    var f1 = function (fn) {
      // step 4
      // step 6
      fn();
    };

    var f2 = function iHaveAName () {
      // step 3
      f1(function soDoI () {
        // step 5
        f1(function () {
          // step 7
          console.trace('a label');
        });
      });
    };

    var f3 = function () {
      // step 2
      f2();
    };

    var f4 = function () {
      // step 1
      f3();
    };

    f4();

console output

    Trace: a label
        at /home/grizzle/code/node-study/modules/console.js:15:15
        at f1 (/home/grizzle/code/node-study/modules/console.js:6:3)
        at soDoI (/home/grizzle/code/node-study/modules/console.js:13:5)
        at f1 (/home/grizzle/code/node-study/modules/console.js:6:3)
        at iHaveAName (/home/grizzle/code/node-study/modules/console.js:11:3)
        at f3 (/home/grizzle/code/node-study/modules/console.js:22:3)
        at f4 (/home/grizzle/code/node-study/modules/console.js:27:3)
        at Object.<anonymous> (/home/grizzle/code/node-study/modules/console.js:30:1)
        at Module._compile (module.js:449:26)
        at Object.Module._extensions..js (module.js:467:10)

Notice that it's pretty good at figuring out which method the stack is in, but if it's an anonymous function, there's not name to print.

**console.assert(expression, [message])**

Throws an error if `expression` is falsy.

## Summary

That's it.  There's not much to it, so get on to the next module.  If you're interested, here's [the source](https://github.com/joyent/node/blob/master/lib/console.js).