/* jshint node: true */
// notes on child_process
// http://nodejs.org/api/child_process.html
// https://github.com/joyent/node/blob/master/lib/child_process.js

/*
Used to pipe a stream to/from another process.
http://linux.die.net/man/3/popen
*/

// It's not global.
var child_process = require('child_process');

// console.log(process.stdin);
// console.log(process.stdout);
// console.log(process.stderr);

var child;
var path = require('path');
// var cmd = 'ls';
var cmd = 'node';

// spawn

// child = child_process.spawn(
//     cmd,
//     ['childTest.js'],
//     // {
//     //     cwd: path.join(process.cwd(), '..')
//     // }
// );

child = child_process.fork(
    'childTest.js');

// console.log(child);

// child.stdout.on('data', function (chunk) {
//     console.log(chunk.toString('utf8'));
// });

// child.stderr.on('data', function (chunk) {
//     console.log(chunk.toString('utf8'));
// });

child
.on('close', function (exitCode) {
    console.log('child finished with ', exitCode);
})
.on('message', function (message, sendHandle) {
    console.log('child got message', message, sendHandle);
});

process.on('message', function (message) {
    console.log('PARENT: ', message);
});

child.send({
    foo: 'bar'
});

// child.kill();

