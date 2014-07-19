var util = require('util');

// console.log(util.format('%s\t%d', 'hello', 123));

// this blocks
// deprecated
// util.debug('asdf');
// console.error('asdf');

// deprecated
// util.error('non-blocking');
// console.log('asdf');

// deprecated - console.log
// util.puts('this', 'is', 'blocking');

// dep - console.log
// util.print('this', 1, 'is', ['b', 'l', 'ocking']);

// print with a timestamp
// util.log('asdf');

// string representative of an object
// console.log(util.inspect({
//     a: 123,
//     foo: function theFoo(a) {}
// }, {
//     colors: true
// }));

// formatting inspect output
// console.log(util.inspect.colors);
// console.log(util.inspect.styles);

// similar to toString, you can provide a custom inspect(depth) method
// var foo = {
//     a: {
//         b: {
//             c: {
//                 d: {
//                     e: 'hello',
//                     inspect: function (depth) {
//                         return 'funky foo';
//                     }
//                 }
//             }
//         }
//     }
// };

// console.log(util.inspect(foo, {
//     depth: null
// }));

conso  RESUME AT ARRAY!