var http = require('http');
var b = new Buffer("admin:drPepper21");
var auth = b.toString('base64');
console.log(auth);
var options = {
    host: '192.168.3.123',
    port: 80,
    path: '/rest/batch',
    method: 'GET',
    headers:{Authorization:"Basic " + auth}
  };

  var req = http.get(options, function(res) {
    var pageData = "";

    res.setEncoding('utf8');
 console.log('STATUS: ' + res.statusCode);
 res.on('data', function (chunk) {
     console.log(chunk);
    });

res.on('error',function(e){
	console.log(e);
});
  });
