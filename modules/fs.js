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

/*
wx+ - reading & writing, fails if exists
a - appending, created if needed
ax - appending, fails if eXists
a+ - appending & reading, created if needed
ax+ - appending & reading, fails if eXists
*/

// Open the file to get a file descriptor.
// fs.open(dir + 'a.txt', 'r', function (err, fd) {
//     var b;
    
//     if (!err) {
//         // Create buffer to hold read contents.
//         b = new Buffer(100);
//         b.fill(null);
        
//         fs.read(fd, b, 0, 10, 0, function (err, bytesRead, buffer) {
//             if (!err) {
//                 console.log(arguments);
//                 console.log(buffer.toString());
//             }

//             // Close file.
//             fs.close(fd, function (err) {
//                 if (!err) {
//                     console.log('file closed');
//                     console.log(buffer.toString());
//                 }
//             });
//         });
//     }
// });

// readdir =======================================
// fs.readdir(dir, function (err, filenames) {
// // fs.readdir(dir + 'whoops', function (err, filenames) {
//     if (err) {
//         throw err;
//     } else {
//         console.log(filenames);
//     }
// });

// readFile =======================================
// error when not found
// fs.readFile(dir + 'not.here', function (err, data) {

// no encoding specified, so the data is a buffer
// fs.readFile(dir + 'a.txt', function (err, data) {

// specify encoding, get a string
// fs.readFile(dir + 'a.txt', { encoding: 'utf8' }, function (err, data) {
//     if (err) {
//         throw err;
//     } else {
//         console.log(data);
//     }
// });

// readlink =======================================
// fs.readlink(dir + 'somelink.link', function (err, linkString) {
//     if (err) {
//         throw err;
//     } else {
//         console.log(linkString);
//     }
// });

// realpath =======================================
// fs.realpath(dir, function (err, resolvedPath) {
//     if (err) {
//         throw err;
//     } else {
//         console.log(resolvedPath);
//     }
// });

// rename =======================================
var makeDirectory = function (cb) {
    fs.mkdir(dir + 'move-me', function (err) {
        if (err) {
            cb(err);
        } else {
            cb();
        }
    });
};



// var deleteOldDirectory = function (cb) {
//     console.log('have to delete old dir first');
//     fs.rmdir(dir + 'move-me', function (err) {
//         if (err) {
//             throw err;
//         } else {
//             cb();
//         }
//     });
// };

// var afterDirectoryCreated = function () {
//     console.log('now what');
// };

// makeDirectory(function (err) {
//     if (err) {
//         deleteOldDirectory(function () {
//             makeDirectory(function (err) {
//                 if (!err) {
//                     afterDirectoryCreated();
//                 } else {
//                     console.error(err);
//                 }
//             });
//         });
//     } else {
//         afterDirectoryCreated();
//     }
// });

// fs.rename(dir + 'move-me', dir + 'i-was-moved', function (err) {
// fs.rename(dir + 'move-me.txt', dir + 'i-was-moved.txt', function (err) {
//     console.log(arguments);
// });

// symlink =======================================
// fs.symlink(dir + 'a.symlink', dir + 'a.txt', function (err) {
fs.symlink(dir + 'a.txt', dir + 'a.symlink', function (err) {
    console.log(arguments);
});