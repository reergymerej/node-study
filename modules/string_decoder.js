// notes on string_decoder

// it's not global
var util = require('util');
// console.log(util);

var Foo = function FooConst() {};
var Bar = function BarConst() {};

Foo.prototype.a = function () {};
Foo.prototype.b = function () {};
Foo.prototype.c = function () {};

util.inherits(Bar, Foo);
console.log(Bar.super_.name);

var b = new Bar();
console.log(b.c);