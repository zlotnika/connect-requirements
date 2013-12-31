connect-requirements
====================

Require specific keys in request.

Usage
-----

```JavaScript
var http = require('http')
var connect = require('connect')
var requirements = require('connect-requirements')

var app = connect()

// make sure the objects are added to the request before the request is checked for requirements
    .use(connect.query())
    .use(connect.bodyParser())


// you can specify any objects within the request to check for keys
    .use(requirements({ query: 'foo' }))
    .use(requirements({ body: ['bar', 'foobar'] }))

    .use(function(req, res){
        res.end('hello world\n');
    })

http.createServer(app).listen(3000);
```