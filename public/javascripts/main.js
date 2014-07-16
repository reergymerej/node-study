$(function () {
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

    /*

    module  
    querystring 
    assert  
    console 
    os  module
    url module
    path    module
    dns console
    debugger    console
    timers  module
    buffer  console,module
    addons  console,module
    util    console,module
    punycode    console,module
    stringdecoder   buffer,console,module
    events  console,module,util
    vm  console,module,util
    stream  console,events,module,util
    dgram   buffer,console,events,module,util
    process console,events,module,stream,util
    fs  console,events,module,process,stream,util
    child_process   console,events,module,process,stream,util
    global  console,events,module,process,stream,timers,util
    net child_process,console,events,module,process,stream,util
    crypto  console,events,fs,module,process,stream,util
    repl    child_process,console,events,module,net,process,stream,util
    tty child_process,console,events,module,net,process,stream,util
    readline    child_process,console,events,module,net,process,stream,tty,util
    tls_(ssl)   child_process,console,events,fs,module,net,process,stream,util
    http    child_process,console,events,module,net,process,stream,url,util
    cluster child_process,console,events,http,module,net,os,process,stream,url,util
    zlib    child_process,console,events,fs,http,module,net,process,stream,url,util
    https   child_process,console,events,fs,http,module,net,process,stream,tls_(ssl),url,util
    domain  child_process,console,events,fs,http,module,net,process,stream,timers,url,util
    */

    var ul = $('#modules');
    var prereqDif = $('#prereqs');

    $.each(modules, function (module) {
        var li = $('<li>' + module + '</li>');
        li.data('module', module);

        ul.append(li);
    });

    ul.delegate('li', 'mouseover', function () {
        var module = $(this).data('module');
        var prereqs = modules[module];
        prereqDif.html(prereqs.join(', '));
    });
});