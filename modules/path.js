// notes on path

// It's not global.
var path = require('path');
// console.log(path);

// normalize
// console.log(path.normalize('../a//b/../c/d'));
// ../a/c/d

// join
// console.log(path.join('..', '/a', '/', '/b', '..', './c/d'));
// ../a/c/d

// console.log(path.join('asdf', 1234));
// TypeError('Arguments to path.join must be strings');

// resolve
// resolve is like a bunch of cd commands
// console.log(path.resolve('ignored because the last arg is relative', '/asdf'));

// console.log(path.resolve('a', 'b', '../c', 'd'));
// /home/grizzle/code/node-study/modules/a/c/d

// console.log(path.resolve('a', 'b', '../c', false, 123, 'd'));
// throws TypeError('Arguments to path.resolve must be strings');

// relative
var pathA = '/a/b/c/d/e/f/g';
var pathB = '/a/b/c/d/e/f/g/h/i';

// console.log(path.relative(pathA, pathB));
// h/i

// dirname
var p = '/a/b/c/foo.json';
// console.log(path.dirname(p));
// /a/b/c

// basename
// console.log(path.basename(p));
// foo.json
// console.log(path.basename(p, '.json'));
// foo

