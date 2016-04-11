var indexPager = require('../view/indexPager');

module.exports = function (req, res) {
    var postList = [{ title: 'Title One', body: 'Body One' }, { title: 'Title Two', body: 'Body Two' }];
    res.writeHead('Content-Type', 'text/html');
    res.end(new indexPager(postList).render());
};

//# sourceMappingURL=index-compiled.js.map