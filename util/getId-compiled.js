var query = require('../util/query');
var post = require('../util/post');

module.exports = function getId(req, callback) {
    if (req.method === 'GET') {
        var data = query(req);
        callback(data.id);
    } else {
        post(req).then(function (data) {
            callback(data.id);
        });
    }
};

//# sourceMappingURL=getId-compiled.js.map