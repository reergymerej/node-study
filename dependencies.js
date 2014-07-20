// /* jshint node: true */

// var modules = {
//   "module": [],
//   "console": [],
//   "assert": [],
//   "querystring": [],
//   "os": [
//     "module"
//   ],
//   "url": [
//     "module"
//   ],
//   "path": [
//     "module"
//   ],
//   "dns": [
//     "console"
//   ],
//   "debugger": [
//     "console"
//   ],
//   "util": [
//     "console",
//     "module"
//   ],
//   "punycode": [
//     "console",
//     "module"
//   ],
//   "buffer": [
//     "console",
//     "module"
//   ],
//   "addons": [
//     "console",
//     "module"
//   ],
//   "events": [
//     "util"
//   ],
//   "stream": [
//     "events"
//   ],
//   "timers": [
//     "module"
//   ],
//   "stringdecoder": [
//     "buffer"
//   ],
//   "dgram": [
//     "buffer",
//     "events"
//   ],
//   "vm": [
//     "util"
//   ],
//   "process": [
//     "stream"
//   ],
//   "fs": [
//     "process"
//   ],
//   "child_process": [
//     "process"
//   ],
//   "global": [
//     "process",
//     "timers"
//   ],
//   "net": [
//     "child_process"
//   ],
//   "repl": [
//     "net"
//   ],
//   "tty": [
//     "net"
//   ],
//   "tls_(ssl)": [
//     "fs",
//     "net"
//   ],
//   "readline": [
//     "tty"
//   ],
//   "crypto": [
//     "fs"
//   ],
//   "http": [
//     "net",
//     "url"
//   ],
//   "https": [
//     "fs",
//     "http",
//     "tls_(ssl)"
//   ],
//   "cluster": [
//     "http",
//     "os"
//   ],
//   "domain": [
//     "fs",
//     "http",
//     "timers"
//   ],
//   "zlib": [
//     "fs",
//     "http"
//   ]
// };

// var getRecursivePrereqs = function (module) {
//     var prereqs = modules[module];
//     var allPrereqs = [];
//     var uniquePrereqs = [];

//     prereqs.forEach(function (prereq) {
//         allPrereqs = allPrereqs.concat(getRecursivePrereqs(prereq));
//     });

//     allPrereqs = allPrereqs.concat(prereqs);
//     allPrereqs.sort().forEach(function (prereq) {
//         if (uniquePrereqs.indexOf(prereq) === -1) {
//             uniquePrereqs.push(prereq);
//         }
//     });

//     return uniquePrereqs;
// };

// var studyPath = [];

// Object.keys(modules).forEach(function (module) {
//     studyPath.push({
//         // name of this module
//         name: module,

//         // modules that must be learned first to understand this one
//         before: getRecursivePrereqs(module).sort(),

//         // modules that depend on this one
//         after: []
//     });
// });

// studyPath.sort(function (a, b) {
//     return a.before.length - b.before.length;
// });


// studyPath.forEach(function (module) {
//   var after = [];
//   studyPath.forEach(function (m) {
//     if (m.before.indexOf(module.name) > -1) {
//       after.push(m.name);
//     }
//   });
//   module.after = after.sort();
// });

// console.log(studyPath);


var modulesWithDependencies = [
  {
      name: 'module',
      before: [],
      after: ['addons', 'buffer', 'child_process', 'cluster', 'crypto', 'dgram', 'domain', 'events', 'fs', 'global', 'http', 'https', 'net', 'os', 'path', 'process', 'punycode', 'readline', 'repl', 'stream', 'stringdecoder', 'timers', 'tls_(ssl)', 'tty', 'url', 'util', 'vm', 'zlib']
  },
  {
      name: 'querystring',
      before: [],
      after: []
  },
  {
      name: 'assert',
      before: [],
      after: []
  },
  {
      name: 'console',
      before: [],
      after: ['addons', 'buffer', 'child_process', 'cluster', 'crypto', 'debugger', 'dgram', 'dns', 'domain', 'events', 'fs', 'global', 'http', 'https', 'net', 'process', 'punycode', 'readline', 'repl', 'stream', 'stringdecoder', 'tls_(ssl)', 'tty', 'util', 'vm', 'zlib']
  },
  {
      name: 'os',
      before: ['module'],
      after: ['cluster']
  },
  {
      name: 'url',
      before: ['module'],
      after: ['cluster', 'domain', 'http', 'https', 'zlib']
  },
  {
      name: 'path',
      before: ['module'],
      after: []
  },
  {
      name: 'dns',
      before: ['console'],
      after: []
  },
  {
      name: 'debugger',
      before: ['console'],
      after: []
  },
  {
      name: 'timers',
      before: ['module'],
      after: ['domain', 'global']
  },
  {
      name: 'buffer',
      before: ['console', 'module'],
      after: ['dgram', 'stringdecoder']
  },
  {
      name: 'addons',
      before: ['console', 'module'],
      after: []
  },
  {
      name: 'util',
      before: ['console', 'module'],
      after: ['child_process', 'cluster', 'crypto', 'dgram', 'domain', 'events', 'fs', 'global', 'http', 'https', 'net', 'process', 'readline', 'repl', 'stream', 'tls_(ssl)', 'tty', 'vm', 'zlib']
  },
  {
      name: 'punycode',
      before: ['console', 'module'],
      after: []
  },
  {
      name: 'stringdecoder',
      before: ['buffer', 'console', 'module'],
      after: []
  },
  {
      name: 'events',
      before: ['console', 'module', 'util'],
      after: ['child_process', 'cluster', 'crypto', 'dgram', 'domain', 'fs', 'global', 'http', 'https', 'net', 'process', 'readline', 'repl', 'stream', 'tls_(ssl)', 'tty', 'zlib']
  },
  {
      name: 'vm',
      before: ['console', 'module', 'util'],
      after: []
  },
  {
      name: 'stream',
      before: ['console', 'events', 'module', 'util'],
      after: ['child_process', 'cluster', 'crypto', 'domain', 'fs', 'global', 'http', 'https', 'net', 'process', 'readline', 'repl', 'tls_(ssl)', 'tty', 'zlib']
  },
  {
      name: 'dgram',
      before: ['buffer', 'console', 'events', 'module', 'util'],
      after: []
  },
  {
      name: 'process',
      before: ['console', 'events', 'module', 'stream', 'util'],
      after: ['child_process', 'cluster', 'crypto', 'domain', 'fs', 'global', 'http', 'https', 'net', 'readline', 'repl', 'tls_(ssl)', 'tty', 'zlib']
  },
  {
      name: 'fs',
      before: ['console', 'events', 'module', 'process', 'stream', 'util'],
      after: ['crypto', 'domain', 'https', 'tls_(ssl)', 'zlib']
  },
  {
      name: 'child_process',
      before: ['console', 'events', 'module', 'process', 'stream', 'util'],
      after: ['cluster', 'domain', 'http', 'https', 'net', 'readline', 'repl', 'tls_(ssl)', 'tty', 'zlib']
  },
  {
      name: 'global',
      before: ['console', 'events', 'module', 'process', 'stream', 'timers', 'util'],
      after: []
  },
  {
      name: 'net',
      before: ['child_process', 'console', 'events', 'module', 'process', 'stream', 'util'],
      after: ['cluster', 'domain', 'http', 'https', 'readline', 'repl', 'tls_(ssl)', 'tty', 'zlib']
  },
  {
      name: 'crypto',
      before: ['console', 'events', 'fs', 'module', 'process', 'stream', 'util'],
      after: []
  },
  {
      name: 'repl',
      before: ['child_process', 'console', 'events', 'module', 'net', 'process', 'stream', 'util'],
      after: []
  },
  {
      name: 'tty',
      before: ['child_process', 'console', 'events', 'module', 'net', 'process', 'stream', 'util'],
      after: ['readline']
  },
  {
      name: 'readline',
      before: ['child_process', 'console', 'events', 'module', 'net', 'process', 'stream', 'tty', 'util'],
      after: []
  },
  {
      name: 'tls_(ssl)',
      before: ['child_process', 'console', 'events', 'fs', 'module', 'net', 'process', 'stream', 'util'],
      after: ['https']
  },
  {
      name: 'http',
      before: ['child_process', 'console', 'events', 'module', 'net', 'process', 'stream', 'url', 'util'],
      after: ['cluster', 'domain', 'https', 'zlib']
  },
  {
      name: 'cluster',
      before: ['child_process', 'console', 'events', 'http', 'module', 'net', 'os', 'process', 'stream', 'url', 'util'],
      after: []
  },
  {
      name: 'zlib',
      before: ['child_process', 'console', 'events', 'fs', 'http', 'module', 'net', 'process', 'stream', 'url', 'util'],
      after: []
  },
  {
      name: 'https',
      before: ['child_process', 'console', 'events', 'fs', 'http', 'module', 'net', 'process', 'stream', 'tls_(ssl)', 'url', 'util'],
      after: []
  },
  {
      name: 'domain',
      before: ['child_process', 'console', 'events', 'fs', 'http', 'module', 'net', 'process', 'stream', 'timers', 'url', 'util'],
      after: []
  }
];

modulesWithDependencies.forEach(function (module) {
  console.log('%s\t(after: %d)', module.name, module.after.length);
});