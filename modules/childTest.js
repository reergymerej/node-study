/* jshint node: true */
console.log('Hey, look.  I am a child!');

process.on('message', function (message) {
    console.log('from childTest: someone sent', message);
});

setTimeout(function () {
    process.exit(666);
}, 2000);