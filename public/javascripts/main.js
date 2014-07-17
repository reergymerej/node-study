$(function () {
    var modules = {
      "modules": [],
      "console": [],
      "assert": [],
      "querystring": [],
      "os": [
        "modules"
      ],
      "url": [
        "modules"
      ],
      "path": [
        "modules"
      ],
      "dns": [
        "console"
      ],
      "debugger": [
        "console"
      ],
      "util": [
        "console",
        "modules"
      ],
      "punycode": [
        "console",
        "modules"
      ],
      "buffer": [
        "console",
        "modules"
      ],
      "addons": [
        "console",
        "modules"
      ],
      "events": [
        "util"
      ],
      "stream": [
        "events"
      ],
      "timers": [
        "modules"
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

    var ul = $('#modules');
    var prereqDif = $('#prereqs');
    var iframe = $('iframe');
    var module;

    $.each(modules, function (module) {
        var li = $('<li>' + module + '</li>');
        li.addClass('clickable');
        li.data('module', module);
        ul.append(li);
    });

    ul.delegate('li', 'click', function () {
      var prereqs = modules[module];
      prereqDif.html(prereqs.join(', '));
      iframe.attr('src', 'http://nodejs.org/api/' + module + '.html');
    });

    ul.delegate('li', 'mouseover', function () {
        module = $(this).data('module');
    });
});