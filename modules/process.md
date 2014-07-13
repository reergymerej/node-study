# process

**[process](http://nodejs.org/api/process.html)** is a global [EventEmitter](http://mean-greer.blogspot.com/2014/07/node-events-module.html), but what the heck is it?  Basically, it's the [instance](http://en.wikipedia.org/wiki/Process_(computing)) of Node that's executing.  It's global, so you can work with it from any module, and there are all sorts of interesting things in it.

## Events

**process** emits the `exit` event right before exiting.  You can listen for this and perform a *synchronous* action, but you can't prevent the process from shutting down once it's started.

There's an `uncaughtException` event, which may be used as a blanket method for handling exceptions, but *you* shouldn't use it.  The docs indicate it may be removed in the future and you should use [domains](http://nodejs.org/api/domain.html#domain_domain) instead.  Domains provide more control over error handling and we'll explain them in a later post.



http://en.wikipedia.org/wiki/POSIX
http://linux.die.net/man/2/sigaction