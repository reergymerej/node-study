
// var p2 = require('./process2');

// console.log(p2.process === process);

// Object.keys(process).sort().forEach(function (key) {
//   console.log(key);
// });

process.stdin.resume();

process.on('SIGINT', function () {
    console.log('got SIGINT');
});