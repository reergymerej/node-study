# process

**[process](http://nodejs.org/api/process.html)** is a global [EventEmitter](http://mean-greer.blogspot.com/2014/07/node-events-module.html), but what the heck is it?  Basically, it's the [instance](http://en.wikipedia.org/wiki/Process_(computing)) of Node that's executing.  It's global, so you can work with it from any module, and there are all sorts of interesting things in it.

## Events

**process** emits the `exit` event right before exiting.  You can listen for this and perform a *synchronous* action, but you can't prevent the process from shutting down once it's started.

There's an `uncaughtException` event, which may be used as a blanket method for handling exceptions, but *you* shouldn't use it.  The docs indicate it may be removed in the future and you should use [domains](http://nodejs.org/api/domain.html#domain_domain) instead.  Domains provide more control over error handling and we'll explain them in a later post.

**process** will also emit events when it receives a [signal](http://en.wikipedia.org/wiki/Signal_(computing)).  These signals, called POSIX signals, are used to send messages to processes in the operating system.  The name of the event emitted will be the same as the [signal name](http://en.wikipedia.org/wiki/Signal_(computing)#POSIX_signals).

---

## Properties

<dl>
    <dt>arch</dt>
    <dd>shows the processor architecture</dd>
</dl>
    > process.arch
    'x64'


<dl>
    <dt>argv</dt>
    <dd>an Array of the command line arguments used to start the process</dd>
</dl>
    grizzle@grizzle:~/code/node-study/modules$ node ./process.js foo bar=baz quux
    [ 'node',
      '/home/grizzle/code/node-study/modules/process.js',
      'foo',
      'bar=baz',
      'quux' ]


<dl>
    <dt>config</dt>
    <dd>an object containing the configurations for the Node installation - [see this](http://stackoverflow.com/a/24728432/1319850) for more info and links</dd>
</dl>

<dl>
    <dt>env</dt>
    <dd>an object with environment info - see [environ(7)](http://man7.org/linux/man-pages/man7/environ.7.html)</dd>
</dl>

<dl>
    <dt>execArgv</dt>
    <dd>like argv, but for the main Node process - This won't have 'node' or filename, just the tags.</dd>
</dl>
    grizzle@grizzle:~/code/node-study/modules$ node --harmony
    > process.execArgv
    [ '--harmony' ]

It's worth noting that "--harmony" is a switch to turn on the [ECMAScript 6 options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla), called "Harmony".

<dl>
    <dt>execPath</dt>
    <dd>path to Node executable</dd>
</dl>

<dl>
    <dt>pid</dt>
    <dd></dd>
</dl>
    code here

<dl>
    <dt>platform</dt>
    <dd></dd>
</dl>
    code here

<dl>
    <dt>stderr</dt>
    <dd></dd>
</dl>
    code here

<dl>
    <dt>stdin</dt>
    <dd></dd>
</dl>
    code here

<dl>
    <dt>stdout</dt>
    <dd></dd>
</dl>
    code here

<dl>
    <dt>title</dt>
    <dd></dd>
</dl>
    code here

<dl>
    <dt>version</dt>
    <dd></dd>
</dl>
    code here

<dl>
    <dt>versions</dt>
    <dd></dd>
</dl>
    code here


    ===================================

=============
process.abort()
process.chdir(directory)
process.cwd()
process.exit([code])
process.getgid()
process.setgid(id)
process.getuid()
process.setuid(id)
process.getgroups()
process.setgroups(groups)
process.initgroups(user, extra_group)
process.kill(pid, [signal])
process.memoryUsage()
process.nextTick(callback)
process.maxTickDepth
process.umask([mask])
process.uptime()
process.hrtime()