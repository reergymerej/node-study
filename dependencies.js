/* jshint node: true */

var modules = {
  "module": [],
  "console": [],
  "assert": [],
  "querystring": [],
  "os": [
    "module"
  ],
  "url": [
    "module"
  ],
  "path": [
    "module"
  ],
  "dns": [
    "console"
  ],
  "debugger": [
    "console"
  ],
  "util": [
    "console",
    "module"
  ],
  "punycode": [
    "console",
    "module"
  ],
  "buffer": [
    "console",
    "module"
  ],
  "addons": [
    "console",
    "module"
  ],
  "events": [
    "util"
  ],
  "stream": [
    "events"
  ],
  "timers": [
    "module"
  ],
  "stringdecoder": [
    "buffer"
  ],
  "dgram": [
    "buffer",
    "events"
  ],
  "vm": [
    "util"
  ],
  "process": [
    "stream"
  ],
  "fs": [
    "process"
  ],
  "child_process": [
    "process"
  ],
  "global": [
    "process",
    "timers"
  ],
  "net": [
    "child_process"
  ],
  "repl": [
    "net"
  ],
  "tty": [
    "net"
  ],
  "tls_(ssl)": [
    "fs",
    "net"
  ],
  "readline": [
    "tty"
  ],
  "crypto": [
    "fs"
  ],
  "http": [
    "net",
    "url"
  ],
  "https": [
    "fs",
    "http",
    "tls_(ssl)"
  ],
  "cluster": [
    "http",
    "os"
  ],
  "domain": [
    "fs",
    "http",
    "timers"
  ],
  "zlib": [
    "fs",
    "http"
  ]
};

var getRecursivePrereqs = function (module) {
    var prereqs = modules[module];
    var allPrereqs = [];
    var uniquePrereqs = [];

    prereqs.forEach(function (prereq) {
        allPrereqs = allPrereqs.concat(getRecursivePrereqs(prereq));
    });

    allPrereqs = allPrereqs.concat(prereqs);
    allPrereqs.sort().forEach(function (prereq) {
        if (uniquePrereqs.indexOf(prereq) === -1) {
            uniquePrereqs.push(prereq);
        }
    });

    return uniquePrereqs;
};

var studyPath = [];

Object.keys(modules).forEach(function (module) {
    studyPath.push({
        // name of this module
        name: module,

        // modules that must be learned first to understand this one
        before: getRecursivePrereqs(module).sort(),

        // modules that depend on this one
        after: []
    });
});

studyPath.sort(function (a, b) {
    return a.before.length - b.before.length;
});


studyPath.forEach(function (module) {
  var after = [];
  studyPath.forEach(function (m) {
    if (m.before.indexOf(module.name) > -1) {
      after.push(m.name);
    }
  });
  module.after = after.sort();
});

console.log(studyPath);


