var http = require('http');
var database = require('./database');

// test data
var post = {title:'mytitle',body:'mybody'};

http.createServer(function (request, response){
	switch(request.url){
		case '/':
			response.writeHead(200,{'Content-Type':'text/plain'});
			response.end(database.list.toString());
			break;
		case '/add':
			if (request.method === 'GET') {

			}else{

			}
			database.add(post);
			break;
		case '/del':

			break;
		case '/update':
			if (request.method === 'GET') {

			}else{
				
			}
			break;
	}
}).listen(3000);