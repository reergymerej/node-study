// notes on dns

// It's not global.
var dns = require('dns');
// console.log(dns);

// lookup is good, but slow-ish.  Use the other methods for multiple requests.
// "family" is 4 or 6 - IPv4 or IPv6
// dns.lookup('www.google.com', function (err, address, family) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('%d: %s', family, address);
//     }
// });

// dns.lookup('localhost', 4, function () {
//     console.log(arguments);
// });

// resolve
// dns.resolve('google.com', function (err, addresses) {
//     if (err) {
//         console.error(err.code);
//     } else {
//         console.log(addresses);
//     }
// });
/*
[ '74.125.21.102',
  '74.125.21.113',
  '74.125.21.139',
  '74.125.21.100',
  '74.125.21.101',
  '74.125.21.138' ]
*/


// Instead of providing the rrtype, you can use the other methods.
// dns.resolve('ipswitch.com', 'MX', function (err, addresses) {
//     if (!err) {
//         console.log(addresses);
//     }
// });

// dns.resolveMx('ipswitch.com', function (err, addresses) {
//     if (err) {
//         console.error(err.code);
//     } else {
//         console.log(addresses);
//     }
// });


// reverse
// dns.reverse('74.125.21.102', function (err, domains) {
//     if (!err) {
//         console.log(domains);
//     }
// });


// error codes:
// Object.keys(dns).sort().forEach(function (key) {
//     if (typeof dns[key] === 'string') {
//         console.log(key);
//     }
// });

// ADDRGETNETWORKPARAMS
// ADNAME
// BADFAMILY
// BADFLAGS
// BADHINTS
// BADQUERY
// BADRESP
// BADSTR
// CANCELLED
// CONNREFUSED
// DESTRUCTION
// EOF
// FILE
// FORMERR
// LOADIPHLPAPI
// NODATA
// NOMEM
// NONAME
// NOTFOUND
// NOTIMP
// NOTINITIALIZED
// REFUSED
// SERVFAIL
// TIMEOUT