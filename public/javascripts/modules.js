// the modules, of course
/* global define */
define(['storage'], function (storage) {

    var modules = {
        'modules': [],
        'console': [],
        'assert': [],
        'querystring': [],
        'os': ['modules'],
        'url': ['modules'],
        'path': ['modules'],
        'dns': ['console'],
        'debugger': ['console'],
        'util': ['console', 'modules'],
        'punycode': ['console', 'modules'],
        'buffer': ['console', 'modules'],
        'addons': ['console', 'modules'],
        'events': ['util'],
        'stream': ['events'],
        'timers': ['modules'],
        'stringdecoder': ['buffer'],
        'dgram': ['buffer', 'events'],
        'vm': ['util'],
        'process': ['stream'],
        'fs': ['process'],
        'child_process': ['process'],
        'global': ['process', 'timers'],
        'net': ['child_process'],
        'repl': ['net'],
        'tty': ['net'],
        'tls_(ssl)': ['fs', 'net'],
        'readline': ['tty'],
        'crypto': ['fs'],
        'http': ['net', 'url'],
        'https': ['fs', 'http', 'tls_(ssl)'],
        'cluster': ['http', 'os'],
        'domain': ['fs', 'http', 'timers'],
        'zlib': ['fs', 'http']
    };


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


    return {
        getModules: function () {
            return modules;
        },
        getPrereqs: function (module) {
            return modules[module];
        },
        allPrereqsDone: function (module) {
            var prereqs = this.getPrereqs(module);
            var done = true;
            var me = this;

            $.each(prereqs, function (i, prereq) {
                if (!me.isFinished(prereq)) {
                    done = false;
                    return false;
                }
            });

            return done;
        },
        setFinished: function (module) {
            return storage.setFinished.apply(storage, [module]);
        },
        isFinished: function (module) {
            return storage.isFinished.apply(storage, [module]);
        },
        toggleFinished: function (module, callback) {
            return storage.toggleFinished.apply(storage, [module, callback]);
        },

        clearHistory: function (callback) {
            storage.clearHistory.apply(storage, [callback]);
        }
    };
});

/*
modules  
querystring 
assert  
console 
os  modules
url modules
path    modules
dns console
debugger    console
timers  modules
buffer  console,modules
addons  console,modules
util    console,modules
punycode    console,modules
stringdecoder   buffer,console,modules
events  console,modules,util
vm  console,modules,util
stream  console,events,modules,util
dgram   buffer,console,events,modules,util
process console,events,modules,stream,util
fs  console,events,modules,process,stream,util
child_process   console,events,modules,process,stream,util
global  console,events,modules,process,stream,timers,util
net child_process,console,events,modules,process,stream,util
crypto  console,events,fs,modules,process,stream,util
repl    child_process,console,events,modules,net,process,stream,util
tty child_process,console,events,modules,net,process,stream,util
readline    child_process,console,events,modules,net,process,stream,tty,util
tls_(ssl)   child_process,console,events,fs,modules,net,process,stream,util
http    child_process,console,events,modules,net,process,stream,url,util
cluster child_process,console,events,http,modules,net,os,process,stream,url,util
zlib    child_process,console,events,fs,http,modules,net,process,stream,url,util
https   child_process,console,events,fs,http,modules,net,process,stream,tls_(ssl),url,util
domain  child_process,console,events,fs,http,modules,net,process,stream,timers,url,util
*/