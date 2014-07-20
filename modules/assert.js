// notes on assert
// It's not global.
var assert = require('assert');

// fail
// This doesn't actually test, it just throws the error.
// assert.fail(3, 3, 'not the same', '==');

// assert
// assert('', 'this is falsy');

// ok tests using ==
// assert.ok('', 'this is falsy');
// assert.ok('truthy', 'this is falsy');

// equal tests using ==
// assert.equal('', false, 'these are not equal');
// assert.equal(0, '0', 'these are not equal');

// notEqual !=
// assert.notEqual(0, false, 'these should not be equal ==');

// deepEqual - recursive check for equality
// assert.deepEqual(
//     {
//         a: 1,
//         b: 2,
//         c: ''
//     },
//     {
//         a: 1,
//         b: 2,
//         c: false
//     },
//     'not deep equals');

// notDeepEqual
// assert.notDeepEqual(
//     {
//         a: 1,
//         b: 2,
//         c: ''
//     },
//     {
//         a: 1,
//         b: 2,
//         c: false
//     },
//     'deep equals');

// strictEqual
// assert.strictEqual(0, false, 'not ===');

// notStrictEqual
// assert.notStrictEqual(0, 0, 'should not be ===');

// throws
// assert.throws(function () {
//     throw new Error();
// }, 'this did not throw an error');

// // check error message against regex
// assert.throws(function () {
//     // throw new Error('aaa');
//     throw new Error('asdf');
// }, /asdf/, 'this did not throw the right error');

// // check with a function
// assert.throws(function () {
//     throw new Error('hello');
// }, function (err) {
//     return err.message === 'hello';
// }, 'thrown error did not pass validation');

// assert.throws(function () {
//     throw new Error('goodbye');
// }, function (err) {
//     return err.message === 'hello';
// }, 'thrown error did not pass validation');

// ifError
// throws if true
assert.ifError(0);

assert.ifError(1);
