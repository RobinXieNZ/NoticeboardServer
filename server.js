var http = require('http');
var url = require('url');
var handleRepos = {};

handleRepos['/add'] = require('./actions/add');
handleRepos['/del'] = require('./actions/del');
handleRepos['/update'] = require('./actions/update');
handleRepos['/list'] = require('./actions/list');

http.createServer(function (request, response){
	let pathname = url.parse(request.url).pathname;
	let handle = handleRepos[pathname];
	handle(request, response);
}).listen(3000);