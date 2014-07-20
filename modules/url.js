// notes on url

// not global
var url = require('url');

var earl = 'hTtP://user:pass@hOsT.CoM:8080/p/a/t/h?query=string#hash';

// console.log(url.parse(earl));

//   href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
//   protocol: 'http:'
//   auth: 'user:pass'
//   hostname: 'host.com'
//   host: 'host.com:8080'
//   port: '8080'
//   pathname: '/p/a/t/h'
//   path: '/p/a/t/h?query=string'
//   slashes: true
//   hash: '#hash'
//   search: '?query=string'
//   query: 'query=string'


// If 2nd arg true, use querystring to parse query.
// console.log(url.parse(earl, true).query);
// { query: 'string' }


// format
console.log(url.format({
    protocol: 'https',
    auth: 'reergymerej',
    host: 'github.com',
    pathname: 'reergymerej',
    query: {
        q: Date.now()
    }
}));

// https://reergymerej@github.com/reergymerej?q=1405881039554

