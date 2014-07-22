/* jshint node: true */
var fs = require('fs');

// console.log(fs);

var dir = './fs-tests/';

// appendFile
// fs.appendFile('./fs-tests/append.txt', 'some data', function (err) {
// fs.appendFile('./fs-tests/a.txt', 'some data', function (err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log('file appended');
//     }
// });

// fs.truncate('./fs-tests/append.txt', 5, function (err) {
//     if (err) {
//         throw err;
//     } else {
//         console.log('truncated');
//     }
// });

// fs.link(dir + 'some.link', dir + 'another.link', function (err) {
//     console.log(err);
// });

// fs.mkdir(dir + 'a-new-dir', function (err) {
//     console.log(err);
// });

// The rest of the path must exist first.
// fs.mkdir('./i/do/not/exist', function (err) {
//     console.log(err);
// });

// open =======================================
// // reading
// fs.open(dir + 'potato', 'r', function (err, fd) {
//     // error if file doesn't exist when using 'r'
//     console.log(err);
// });

// // reading & writing
// fs.open(dir + 'potato', 'r+', function (err, fd) {
//     // r+ - error if file doesn't exist
//     console.log(err);
// });

// // reading, bypass file system cache
// fs.open(dir + 'potato', 'rs', function (err, fd) {
//     console.log(err);
// });

// // reading & writing, bypass cache
// fs.open(dir + 'potato', 'rs+', function (err, fd) {
//     console.log(err);
// });

// writing
// creates if needed, truncates to 0 if already exists
// fs.open(dir + 'corn', 'w', function (err, fd) {
//     console.log(err);
// });

// // writing, error if file eXists
// fs.open(dir + 'corn', 'wx', function (err, fd) {
//     console.log(err);
// });

