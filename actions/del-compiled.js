var query = require('../util/query');
var post = require('../util/post');
var database = require('../database');

module.exports = function del(req, res) {
    if (req.method === 'GET') {
        var data = query(req);
        database.del(data.id);
    } else {
        post(req).then(function (data) {
            database.del(data.id);
        });
    }
};

//# sourceMappingURL=del-compiled.js.map