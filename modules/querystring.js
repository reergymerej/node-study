// notes on querystring
var querystring = require('querystring');

var foo = {
    a: 1,
    b: [1,2,3],
    c: {
        d: {
            e: false,
            f: 'hello'
        }
    },
    g: 'hallo'
};

// stringify
// objects aren't converted
// console.log(querystring.stringify(foo, '||', '^^'));

var bar = 'a=1&b=false&c=barf&c=pudding&d=';

// parse
// console.log(querystring.parse(bar));

// escape
// console.log(querystring.escape.toString());
// querystring.escape = function (str) {
//     return 'ESCAPED:' + str;
// };

// console.log(querystring.stringify(foo));

// unescape
// console.log(querystring.unescape.toString());
querystring.unescape = function (s, decodeSpaces) {
    console.log(arguments);
    return 'UNESCAPED: ' + s;
};
console.log(querystring.unescape.toString());

console.log(querystring.parse(bar));