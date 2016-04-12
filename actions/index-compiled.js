var indexPager = require('../view/indexPager');
var database = require('../database');
module.exports = function (req, res) {
    res.end(new indexPager(database.list).render());
};

//# sourceMappingURL=index-compiled.js.map