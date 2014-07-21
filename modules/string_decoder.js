// notes on string_decoder

// it's not global
// var util = require('util');
// console.log(util);

// var Foo = function FooConst() {};
// var Bar = function BarConst() {};

// Foo.prototype.a = function () {};
// Foo.prototype.b = function () {};
// Foo.prototype.c = function () {};

// util.inherits(Bar, Foo);
// console.log(Bar.super_.name);

// var b = new Bar();
// console.log(b.c);

// ================================================
// it's not global
var string_decoder = require('string_decoder');
// console.log(string_decoder);

var StringDecoder = string_decoder.StringDecoder;
var decoder = new StringDecoder();

var b = new Buffer(5);
b.write('DAD');

console.log('buffer', b.toString('utf8'));
console.log('write', decoder.write(b));
console.log('end', decoder.end(b));
