$(function () {
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
    var currentModule;
    var form = $('form');
    var toggle = $('#toggle');

    var storage = {
        finished: [],
        getFinished: function () {
            if (!this.finished.length) {
                this.finished = localStorage.getItem('finished');
                if (this.finished) {
                    this.finished = JSON.parse(this.finished);
                } else {
                    this.finished = [];
                }
            }

            return this.finished;
        },
        setFinished: function (module) {
            this.finished.push(module);
            localStorage.setItem('finished', JSON.stringify(this.finished));
        },

        isFinished: function (module) {
            var finishedModules = this.getFinished();

            return finishedModules.indexOf(module) > -1;
        }
    };


    var markFinishedModules = function () {
      $('li').each(function (i, li) {
        var module = $(li).data('module');

        li = $(li);
        if (storage.isFinished(module)) {
          li.addClass('finished');
        } else {
            if (!allPrereqsDone(module)) {
                li.addClass('not-available');
            } else {
                li.removeClass('not-available');
            }
        }

      });
    };

    var allPrereqsDone = function (module) {
        var prereqs = modules[module];
        var done = true;

        $.each(prereqs, function (i, prereq) {
          if (!storage.isFinished(prereq)) {
            done = false;
            return false;
          }
        });

        return done;
    };

    // create the clickable item for each module
    $.each(modules, function (module) {
        var li = $('<li>' + module + '</li>');
        li.addClass('clickable');
        li.data('module', module);
        ul.append(li);
    });

    markFinishedModules();

    ul.delegate('li', 'click', function () {
        var li = $(this);
        currentModule = li.data('module');

        if (allPrereqsDone(currentModule)) {
            prereqDif.html('');
            iframe.attr('src', 'http://nodejs.org/api/' + currentModule + '.html');
            toggle.show();
            form.show();
        } else {
            form.hide();
            iframe.hide();
            toggle.hide();
            prereqDif.html(modules[currentModule].join(', '));
        }

        $('li').removeClass('active');
        li.addClass('active');
    });

    ul.delegate('li', 'mouseover', function () {
        // module = $(this).data('module');
    });

    // toggle iframe
    toggle.on('click', function () {
        iframe.toggle();
    });

    // handle form submission
    form.on('submit', function () {
        var pass = $('[name="pass"]', this).val() === 'pass';

        if (pass) {
            storage.setFinished(currentModule);
            markFinishedModules();
        }

        return false;
    });
});