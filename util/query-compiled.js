'use strict';

var qs = require('querystring');
var url = require('url');

module.exports = function query(req, res) {
        var query = url.parse(req.url).query;
        var jason = qs.parse(query);
};

//# sourceMappingURL=query-compiled.js.map