/* jshint node: true */

var info = {
    "modules": [
        {
            "name": "assert",
            "prerequisites": []
        },

        {
            "name": "buffer",
            "prerequisites": [
                "console"
            ]
        },

        {
            "name": "child_process",
            "prerequisites": [
                "buffer",
                "console",
                "events",
                "net",
                "process",
                "stream"
            ]
        },

        {
            "name": "stream",
            "prerequisites": [
                "console",
                "events"
            ]
        },

        {
            "name": "process",
            "prerequisites": [
                "console",
                "domain",
                "events",
                "fs",
                "stream",
                "tty",
                "util"
            ]
        },

        {
            "name": "console",
            "prerequisites": [
                "util",
                "assert"
            ]
        },

        {
            "name": "events",
            "prerequisites": [
                "console",
                "util"
            ]
        },

        {
            "name": "util",
            "prerequisites": [
                "console"
            ]
        },

        {
            "name": "debugger",
            "prerequisites": [
                "console"
            ]
        },

        {
            "name": "repl",
            "prerequisites": [
                "process",
                "util",
                "net",
                "events",
                "module"
            ]
        },

        {
            "name": "global",
            "prerequisites": [
                "process",
                "console",
                "buffer",
                "module",
                "timers"
            ]
        },

        {
            "name": "timers",
            "prerequisites": [
                "module",
                "process"
            ]
        },

        {
            "name": "module",
            "prerequisites": [
                "console"
            ]
        },

        {
            "name": "path",
            "prerequisites": [
                "module",
                "process"
            ]
        },

        {
            "name": "url",
            "prerequisites": [
                "module"
            ]
        },

        {
            "name": "zlib",
            "prerequisites": [
                "module",
                "fs",
                "console",
                "http",
                "events",
                "buffer"
            ]
        },

        {
            "name": "fs",
            "prerequisites": [
                "module",
                "console",
                "process",
                "buffer",
                "util",
                "stream",
                "events"
            ]
        },

        {
            "name": "net",
            "prerequisites": [
                "child_process",
                "console",
                "events",
                "module",
                "stream"
            ]
        },

        {
            "name": "domain",
            "prerequisites": [
                "console",
                "events",
                "fs",
                "http",
                "module",
                "process",
                "timers"
            ]
        },

        {
            "name": "http",
            "prerequisites": [
                "console",
                "buffer",
                "events",
                "module",
                "net",
                "stream",
                "url"
            ]
        },

        {
            "name": "https",
            "prerequisites": [
                "fs",
                "http",
                "tls_(ssl)"
            ]
        },

        {
            "name": "tls_(ssl)",
            "prerequisites": [
                "console",
                "events",
                "fs",
                "module",
                "net",
                "process",
                "stream"
            ]
        },

        {
            "name": "tty",
            "prerequisites": [
                "events",
                "net",
                "process",
                "stream"
            ]
        },

        {
            "name": "os",
            "prerequisites": [
                "module"
            ]
        },

        {
            "name": "querystring",
            "prerequisites": []
        },

        {
            "name": "stringdecoder",
            "prerequisites": [
                "buffer",
                "console",
                "module"
            ]
        },

        {
            "name": "readline",
            "prerequisites": [
                "console",
                "events",
                "module",
                "process",
                "stream",
                "tty"
            ]
        },

        {
            "name": "dgram",
            "prerequisites": [
                "buffer",
                "events",
                "module"
            ]
        },

        {
            "name": "addons",
            "prerequisites": [
                "console",
                "module"
            ]
        },

        {
            "name": "cluster",
            "prerequisites": [
                "child_process",
                "console",
                "events",
                "http",
                "module",
                "net",
                "os",
                "process"
            ]
        },

        {
            "name": "crypto",
            "prerequisites": [
                "buffer",
                "console",
                "events",
                "fs",
                "module",
                "process",
                "stream"
            ]
        },

        {
            "name": "dns",
            "prerequisites": [
                "console",
                "http",
                "module",
                "net"
            ]
        },

        {
            "name": "punycode",
            "prerequisites": [
                "module"
            ]
        },

        {
            "name": "vm",
            "prerequisites": [
                "module",
                "console",
                "util"
            ]
        }
    ]
};

info.modules.sort(function (a, b) {
    if (a.name < b.name) {
        return -1;
    } else if (b.name < a.name) {
        return 1;
    } else {
        return 0;
    }
}).forEach(function (module) {
    module.prerequisites.sort();
    console.log('%s\t%s', module.name, module.prerequisites.join(','));
});