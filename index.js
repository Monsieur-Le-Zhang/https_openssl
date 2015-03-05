/**
 * Created by le on 05/03/15.
 */

var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('./keys/key.pem'),
    cert: fs.readFileSync('./keys/key-cert.pem')
};

https.createServer(options, function (req, res) {
    res.end('Hello world');
}).listen(3001);