// notes on os

// It's not global.
var os = require('os');

Object.keys(os).forEach(function (key) {
    console.log('\n%s:', key);
    if (typeof os[key] === 'function') {
        console.log(os[key]());
    } else {
        console.log(os[key]);
    }
});